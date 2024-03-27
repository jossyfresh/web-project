import userApi from "../services/userApi";

export const {
  useLoginMutation,
  useSignupMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
} = userApi;
