/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CreateAccountInput,
  LoginInput,
  ResetPasswordInput,
  ForgotPasswordInput,
} from "@/interface/auth.interface";
import { handlePostRequest } from "./httpClient.service";

const baseUrl = "/auth";

export const createAccount = async (payload: CreateAccountInput) => {
  return await handlePostRequest<CreateAccountInput, any>(
    `${baseUrl}/register`,
    payload,
  );
};

export const loginAccount = async (payload: LoginInput) => {
  return await handlePostRequest<LoginInput, any>(`${baseUrl}/login`, payload);
};

export const forgotPassword = async (payload: ForgotPasswordInput) => {
  return await handlePostRequest<ForgotPasswordInput, any>(
    `${baseUrl}/forgot-password`,
    payload,
  );
};

export const resetPassword = async (payload: ResetPasswordInput) => {
  return await handlePostRequest<ResetPasswordInput, any>(
    `${baseUrl}/reset-password`,
    payload,
  );
};
