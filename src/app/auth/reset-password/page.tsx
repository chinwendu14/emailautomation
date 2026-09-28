"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { object, string } from "yup";

import AuthHeader from "@/app/_component/AuthComponent/AuthHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/spinner";
import ErrorAlert from "@/components/errortAlert";

import useInputeChange from "@/hooks/quries/useInputeChange";
import { IHttpError } from "@/interface/httpClient.interface";
import { ResetPasswordInput } from "@/interface/auth.interface";
import { resetPassword } from "@/services/auth.service";
import { LOGIN_ROUTE } from "@/constant/route.constant";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { onChange, state } = useInputeChange<{
    password: string;
    confirmPassword: string;
  }>({
    password: "",
    confirmPassword: "",
  });

  const ResetPasswordSchema = object({
    password: string()
      .min(8, "Password must be at least 8 characters.")
      .required("Please enter your new password."),

    confirmPassword: string()
      .oneOf([Yup.ref("password")], "Passwords do not match.")
      .required("Please confirm your password."),
  });

  const { isLoading, mutate } = useMutation(
    (payload: ResetPasswordInput) => resetPassword(payload),
    {
      onSuccess: (data) => {
        toast.success(
          data.message || "Password reset successfully. You can now log in.",
        );

        setTimeout(() => {
          router.push(LOGIN_ROUTE);
        }, 1500);
      },

      onError: (error: IHttpError) => {
        setErrorMessage(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      },
    },
  );

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    setErrorMessage("");

    if (!token) {
      setErrorMessage("This password reset link is invalid or has expired.");
      return;
    }

    try {
      await ResetPasswordSchema.validate(state, {
        abortEarly: false,
      });

      mutate({
        token,
        password: state.password,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};

        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });

        setErrors(validationErrors);
        return;
      }

      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <AuthHeader />

      <section className="flex justify-center px-4 pb-12 pt-16">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Reset your password
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your new password below.
            </p>
          </div>

          {errorMessage && <ErrorAlert message={errorMessage} />}

          <form onSubmit={handleResetPassword} className="space-y-5">
            {/* New password */}
            <div>
              <Label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                New password
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={onChange}
                  placeholder="Enter your new password"
                  autoComplete="new-password"
                  disabled={isLoading}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 pr-12 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <span className="mt-1 block text-notice text-xs font-body font-normal">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm password
              </Label>

              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={state.confirmPassword}
                  onChange={onChange}
                  placeholder="Confirm your new password"
                  autoComplete="new-password"
                  disabled={isLoading}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 pr-12 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <span className="mt-1 block text-notice text-xs font-body font-normal">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span className="ml-2">Resetting password...</span>
                </>
              ) : (
                "Reset password"
              )}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
