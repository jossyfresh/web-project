import { createSlice } from "@reduxjs/toolkit";
import userApi from "../services/userApi";

export interface OtpState {
  email: string;
  isAuthenticated: boolean;
  otp: string;
  isLoading: boolean;
  registration: boolean;
  newpassword: string;
  error: any | null;
}

const initialState: OtpState = {
  email: "",
  otp: "",
  isAuthenticated: false,
  isLoading: false,
  newpassword: "",
  registration: false,
  error: null,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    // for setting if the process is for registration or not
    setRegistration: (state, { payload }) => {
      state.registration = payload;
    },
    // for setting the email
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    // for filling the otp
    setOtp: (state, { payload }) => {
      state.otp = payload;
    },
    // for setting the password and sending the new password
    setPassword: (state, { payload }) => {
      state.newpassword = payload.newpassword;
    },
    reset: (state) => {
      state.email = "";
      state.error = null;
      state.isLoading = false;
      state.newpassword = "";
      state.otp = "";
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.signup.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.signup.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.verifyEmail.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.verifyEmail.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.email = "";
        state.otp = "";
        state.newpassword = "";
        state.registration = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.verifyEmail.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.forgotPassword.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.forgotPassword.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.forgotPassword.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
  },
});

export const { setEmail, setOtp, setPassword, reset, setRegistration } =
  otpSlice.actions;

export default otpSlice.reducer;

export const selectotp = (state: { otp: OtpState }) => state.otp;
