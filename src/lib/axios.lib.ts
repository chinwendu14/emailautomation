import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";
import { LOGIN_ROUTE } from "@/constant/route.constant";

const httpClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add access token to every request
httpClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();

    /*
     * If the NextAuth session has expired or the refresh token
     * can no longer be used, send the user back to login.
     */
    if (session?.error === "RefreshAccessTokenError") {
      await signOut({
        callbackUrl: LOGIN_ROUTE,
      });

      return Promise.reject(
        new Error("Your session has expired. Please log in again."),
      );
    }

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Handle expired access tokens
httpClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Only handle unauthorized requests
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // Prevent infinite retry loop
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      /*
       * getSession() causes NextAuth to check the current JWT.
       *
       * If the 15-minute access token has expired,
       * NextAuth's JWT callback will call the backend
       * /api/auth/refresh endpoint.
       */
      const session = await getSession();

      // Refresh token/session has expired
      if (
        !session?.accessToken ||
        session.error === "RefreshAccessTokenError"
      ) {
        await signOut({
          callbackUrl: LOGIN_ROUTE,
        });

        return Promise.reject(error);
      }

      // Use the refreshed access token
      originalRequest.headers.Authorization = `Bearer ${session.accessToken}`;

      // Retry the original request
      return httpClient(originalRequest);
    } catch (refreshError) {
      console.error("Authentication refresh failed:", refreshError);

      await signOut({
        callbackUrl: LOGIN_ROUTE,
      });

      return Promise.reject(refreshError);
    }
  },
);

export default httpClient;
