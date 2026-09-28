/* eslint-disable @typescript-eslint/no-explicit-any */

// import { LOGIN_ROUTE } from "@/constant/route.constant";
// import axios from "axios";
// import type { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const authConfig = {
//   pages: {
//     signIn: LOGIN_ROUTE,
//   },

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//         };

//         token.accessToken = user.accessToken;
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       session.user = token.user;
//       session.accessToken = token.accessToken;

//       return session;
//     },
//   },

//   providers: [
//     Credentials({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "Email",
//         },

//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Password",
//         },
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null;
//         }

//         try {
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
//             {
//               email: credentials.email,
//               password: credentials.password,
//             },
//             {
//               withCredentials: true,
//             },
//           );

//           const data = response.data;

//           if (!data?.success || !data?.token || !data?.user) {
//             return null;
//           }

//           return {
//             id: data.user.id,
//             name: data.user.name,
//             email: data.user.email,
//             accessToken: data.token,
//           };
//         } catch (error) {
//           console.error("NextAuth login error:", error);

//           return null;
//         }
//       },
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET,
// } satisfies NextAuthOptions;
/* eslint-disable @typescript-eslint/no-explicit-any */

import { LOGIN_ROUTE } from "@/constant/route.constant";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const ACCESS_TOKEN_LIFETIME = 15 * 60 * 1000;

// Maximum login session: 12 hours
const SESSION_LIFETIME = 12 * 60 * 60;

const getRefreshTokenFromCookie = (
  setCookie: string[] | undefined,
): string | undefined => {
  if (!setCookie) return undefined;

  const refreshCookie = setCookie.find((cookie) =>
    cookie.startsWith("refreshToken="),
  );

  if (!refreshCookie) return undefined;

  return refreshCookie.split(";")[0].replace("refreshToken=", "");
};

const refreshAccessToken = async (token: any) => {
  try {
    if (!token.refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
      {},
      {
        headers: {
          Cookie: `refreshToken=${token.refreshToken}`,
        },
      },
    );

    const newAccessToken = response.data?.token;

    if (!newAccessToken) {
      throw new Error("No access token returned from refresh");
    }

    const newRefreshToken = getRefreshTokenFromCookie(
      response.headers["set-cookie"],
    );

    return {
      ...token,
      accessToken: newAccessToken,
      accessTokenExpires: Date.now() + ACCESS_TOKEN_LIFETIME,
      refreshToken: newRefreshToken ?? token.refreshToken,
      error: undefined,
    };
  } catch (error) {
    console.error("Refresh access token error:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const authConfig = {
  pages: {
    signIn: LOGIN_ROUTE,
  },

  session: {
    strategy: "jwt",

    // NextAuth session expires after 12 hours
    maxAge: SESSION_LIFETIME,
  },

  callbacks: {
    async jwt({ token, user }) {
      /*
       * First login
       */
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };

        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + ACCESS_TOKEN_LIFETIME;

        return token;
      }

      /*
       * Access token is still valid
       */
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      /*
       * Access token has expired.
       * Ask the backend for a new one.
       */
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;

      return session;
    },
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },

        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              withCredentials: true,
            },
          );

          const data = response.data;

          if (!data?.success || !data?.token || !data?.user) {
            return null;
          }

          /*
           * Backend sends the refresh token as:
           *
           * Set-Cookie:
           * refreshToken=...
           */
          const refreshToken = getRefreshTokenFromCookie(
            response.headers["set-cookie"],
          );

          if (!refreshToken) {
            console.error("Refresh token was not returned by the backend");

            return null;
          }

          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            accessToken: data.token,
            refreshToken,
          };
        } catch (error) {
          console.error("NextAuth login error:", error);

          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
