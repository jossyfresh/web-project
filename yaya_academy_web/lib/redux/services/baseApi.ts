import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

/**
 * The base API configuration for making API requests.
 */
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lms-backend-nest.onrender.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return (action.payload as any)[reducerPath];
    }
  },
  endpoints: (builder) => ({}),
});

export default baseApi;
