import { createSlice } from "@reduxjs/toolkit";
import { LoginApiResponse, RegisterApiResponse } from "@/lib/types";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  userId?: string;
  userName?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  dateofbirth?: string;
  country?: string;
  userRole?: string;
  userProfile?: string;
  userEmail?: string;
  error: any | null;
}

const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  userId: "",
  userName: "",
  firstname: "",
  middlename: "",
  lastname: "",
  country: "",
  dateofbirth: "",
  userEmail: "",
  userRole: "",
  userProfile: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.token = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userId = "";
      state.userName = "";
      state.userRole = "";
      state.userProfile = "";
      state.userEmail = "";
    },
    setAuth: (state, { payload }) => {
      state.error = payload.error;
      state.isAuthenticated = payload.isAuthenticated;
      state.isLoading = payload.isLoading;
      state.token = payload.token;
      state.userEmail = payload.userEmail;
      state.userId = payload.userId;
      state.userProfile = payload.userProfile;
      state.userRole = payload.userRole;
      state.userName = payload.userName;
      state.token = payload.token;
    },
  },
});

export const { resetAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: { auth: AuthState }) => state.auth;
