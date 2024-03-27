import {
  useForgotPasswordMutation,
  useLoginMutation,
  useSignupMutation,
  useVerifyEmailMutation,
} from "../redux/features/user";
import { AuthState, selectAuth, setAuth } from "@/lib/redux/Slices/authSlice";
import { LoginCredentials, RegisterCredentials } from "@/lib/types/index";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  OtpState,
  setOtp,
  setEmail,
  selectotp,
  setRegistration,
  reset,
} from "../redux/Slices/otpSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const cookies = useCookies();
  const router = useRouter();
  const auth = useSelector(selectAuth);
  const otp = useSelector(selectotp);
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const [verifyEmail] = useVerifyEmailMutation();
  const [forgotPassword] = useForgotPasswordMutation();

  return {
    auth,
    otp,
    loginHandler: async (credentials: LoginCredentials) => {
      try {
        return await login(credentials);
      } catch (err: any) {
        return err?.message;
      }
    },

    logoutHandler: async () => {
      localStorage.removeItem("auth");
      cookies.set("token", "");
      const dummy: AuthState = {
        isAuthenticated: false,
        isLoading: false,
        id: 0,
        fullname: "",
        email: "",
        error: null,
      };
      dispatch(setAuth(dummy));
      router.refresh();
    },

    signupHandler: async (data: RegisterCredentials) => {
      try {
        console.log(data);
        const response = await signup(data);
        if ("data" in response && response.data.success === true) {
          dispatch(setEmail(data.email));
          dispatch(setRegistration(true));
          router.push("/email_verification");
        }
      } catch (err: any) {
        return err?.message;
      }
    },

    // verify email with otp
    verifyEmailHandler: async (otps: string) => {
      try {
        const data = {
          email: otp.email,
          code: otps,
        };
        console.log(data);
        const response = await verifyEmail(data);
        if ("data" in response && response.data.success === true) {
          router.push("/login");
        }
      } catch (err: any) {
        return err?.message;
      }
    },

    forgotPasswordHandler: async (Email: string) => {
      try {
        const data = {
          email: Email,
        };
        const response = await forgotPassword(data);
        if ("data" in response && response.data.success === true) {
          dispatch(setEmail(Email));
          router.push("/email_verification");
        }
      } catch (err: any) {
        return err?.message;
      }
    },
  };
};
