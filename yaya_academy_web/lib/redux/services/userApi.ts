import {
  LoginCredentials,
  LoginApiResponse,
  RegisterCredentials,
  RegisterApiResponse,
  verifyEmailResponse,
  VerifyEmail,
  forgotpasswordApiResponse,
  forgotpassword,
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
  }),
});

export default userApi;
