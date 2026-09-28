"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";
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
import { ForgotPasswordInput } from "@/interface/auth.interface";
import { forgotPassword } from "@/services/auth.service";
import { LOGIN_ROUTE, EMAIL_SENT_ROUTE } from "@/constant/route.constant";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { onChange, state } = useInputeChange<ForgotPasswordInput>({
    email: "",
  });

  const ForgotPasswordSchema = object({
    email: string().email("Invalid email format").required("Email is required"),
  });

  const { isLoading, mutate } = useMutation(
    (payload: ForgotPasswordInput) => forgotPassword(payload),
    {
      onSuccess: (data) => {
        if (data) {
          router.push(`${EMAIL_SENT_ROUTE}?email=${state.email}`);
        }
      },
      onError: (error: IHttpError) => {
        setErrorMessage(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      },
    },
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    setErrorMessage("");

    try {
      await ForgotPasswordSchema.validate(state, {
        abortEarly: false,
      });

      mutate({
        email: state.email,
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
              Forgot your password?
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </p>
          </div>

          {errorMessage && <ErrorAlert message={errorMessage} />}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={onChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  disabled={isLoading}
                  className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {errors.email && (
                <span className="mt-1 block text-notice text-xs font-body font-normal">
                  {errors.email}
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
                  <span className="ml-2">Sending reset link...</span>
                </>
              ) : (
                "Send reset link"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href={LOGIN_ROUTE}
              className="text-sm font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
