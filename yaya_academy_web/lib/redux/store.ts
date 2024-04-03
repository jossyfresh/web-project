import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../redux/services/baseApi";
import authSlice from "./Slices/authSlice";
import otpSlice from "./Slices/otpSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
    otp: otpSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
