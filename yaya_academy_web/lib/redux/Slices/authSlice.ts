import { createSlice } from "@reduxjs/toolkit";
import userApi from "../services/userApi";
import { LoginApiResponse } from "@/lib/types";

export interface AuthState {
  id: number;
  fullname: string;
  email: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any | null;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  id: 0,
  fullname: "",
  email: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.isAuthenticated = false;
      state.fullname = "";
      state.email = "";
      state.id = 0;
      state.isLoading = false;
    },
    setAuth: (state, { payload }) => {
      state.error = payload.error;
      state.isAuthenticated = payload.isAuthenticated;
      state.isLoading = payload.isLoading;
      state.id = payload.id;
      state.fullname = payload.fullname;
      state.email = payload.email;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userApi.endpoints.login.matchPending,
      (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }: { payload: LoginApiResponse }) => {
        state.id = payload.data.id;
        state.fullname = payload.data.fullname;
        state.email = payload.data.email;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isAuthenticated = false;
      }
    );
  },
});

export const { resetAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: { auth: AuthState }) => state.auth;
