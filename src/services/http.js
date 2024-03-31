// Need to use the React-specific entry point to import createApi
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserToken } from "../utils/tokens";
const token = UserToken.getToken();
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const httpApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 300000,
});
httpApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const fetchApi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    // credentials: 'include', // This allows server to set cookies
  }),
  endpoints: () => ({}),
});
