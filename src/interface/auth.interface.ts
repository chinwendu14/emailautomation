import { User } from "./user.interface";

export interface LoginInput {
  email: string;
  password: string;
}

export interface CreateAccountInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
  refreshToken: string;
  user: User;
}

export interface ResetPasswordInput {
  token: string;
  password: string;
}
export interface ForgotPasswordInput {
  email: string;
}

export interface SupportInput {
  name: string;
  email: string;
  message: string;
  subject: string;
}
