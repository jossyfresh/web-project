import {
  LoginCredentials,
  LoginApiResponse,
  RegisterCredentials,
  RegisterApiResponse,
  verifyEmailResponse,
  VerifyEmail,
  forgotpasswordApiResponse,
  forgotpassword,
  verifyOtp,
  resetPassword,
} from "@/lib/types";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginApiResponse, LoginCredentials>({
      query: (credentials: LoginCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<RegisterApiResponse, RegisterCredentials>({
      query: (credentials: RegisterCredentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyEmail: builder.mutation<verifyEmailResponse, VerifyEmail>({
      query: (data: VerifyEmail) => ({
        url: "/auth/verify",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<forgotpasswordApiResponse, forgotpassword>(
      {
        query: (email: forgotpassword) => ({
          url: "/auth/forgot-password",
          method: "POST",
          body: email,
        }),
      }
    ),
    verifyOtp: builder.mutation<verifyEmailResponse, verifyOtp>({
      query: (data: verifyOtp) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation<verifyEmailResponse, resetPassword>({
      query: (data: resetPassword) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export default userApi;
