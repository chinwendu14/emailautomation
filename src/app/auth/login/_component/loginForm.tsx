"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import * as Yup from "yup";
import { object, string } from "yup";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
// import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/spinner";
import ErrorAlert from "@/components/errortAlert";

import useInputeChange from "@/hooks/quries/useInputeChange";
import { LoginInput } from "@/interface/auth.interface";

import {
  DASHBOARD_ROUTE,
  REGISTER_ROUTE,
  FORGOT_PASSWORD_ROUTE,
} from "@/constant/route.constant";

export default function LoginForm() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  // const [rememberMe, setRememberMe] = useState(true);

  const { onChange, state } = useInputeChange<LoginInput>({
    email: "",
    password: "",
  });

  const LoginSchema = object({
    email: string().email("Invalid email format").required("Email is required"),

    password: string().required("Please enter your password"),
  });

  const { isLoading, mutate } = useMutation(
    async (payload: LoginInput) => {
      const result = await signIn("credentials", {
        email: payload.email,
        password: payload.password,
        redirect: false,
      });

      if (!result || result.error) {
        throw new Error("Invalid email or password");
      }

      return result;
    },
    {
      onSuccess: () => {
        // toast.success("Login successful");

        router.push(DASHBOARD_ROUTE);
        router.refresh();
      },

      onError: (error: Error) => {
        setErrorMessage(
          error.message || "Something went wrong. Please try again.",
        );
      },
    },
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setErrorMessage("");

    try {
      await LoginSchema.validate(state, {
        abortEarly: false,
      });

      mutate({
        email: state.email,
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
    <div className="bg-muted/30 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Mobile logo */}
        <div className="mb-12 flex justify-center lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-black"
          >
            <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-lg text-white">
              <Mail size={20} />
            </div>

            <span>MailFlowAI</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="text-primary mb-3 text-sm font-semibold">
            Welcome back
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Enter your details below to access your MailFlowAI workspace.
          </p>
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="mb-6">
            <ErrorAlert message={errorMessage} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={state.email}
                onChange={onChange}
                className="h-11 pl-10"
                autoComplete="username"
                required
              />
            </div>

            {errors.email && (
              <span className="text-notice text-xs font-body font-normal">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={state.password}
                onChange={onChange}
                className="h-11 pl-10 pr-10"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <span className="text-notice text-xs font-body font-normal">
                {errors.password}
              </span>
            )}
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-end">
            {/* Remember me */}
            {/* <div className="flex items-center gap-2">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-primary h-4 w-4 cursor-pointer"
              />

              <Label
                htmlFor="rememberMe"
                className="cursor-pointer text-sm font-normal text-gray-500"
              >
                Remember me
              </Label>
            </div> */}

            {/* Forgot password */}
            <Link
              href={FORGOT_PASSWORD_ROUTE}
              className="text-primary text-sm font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-[#17453d] h-11 w-full"
          >
            {isLoading ? <Spinner /> : "Sign in"}
          </Button>
        </form>

        {/* Register */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Don&apos;t have a MailFlowAI account?{" "}
            <Link
              href={REGISTER_ROUTE}
              className="text-primary font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
