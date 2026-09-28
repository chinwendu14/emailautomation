import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    };

    accessToken: string;

    error?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      name: string;
      email: string;
    };

    accessToken: string;

    refreshToken?: string;

    accessTokenExpires?: number;

    error?: string;
  }
}
