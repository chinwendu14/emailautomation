"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import * as Yup from "yup";
import { object, string } from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateAccountInput } from "@/interface/auth.interface";
import useInputeChange from "@/hooks/quries/useInputeChange";
import { createAccount } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "@/constant/route.constant";
import { IHttpError } from "@/interface/httpClient.interface";
import { useMutation } from "react-query";
import Spinner from "@/components/spinner";
import { toast } from "react-toastify";
import ErrorAlert from "@/components/errortAlert";

export default function CreateAccountForm() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { onChange, state, setState } = useInputeChange<CreateAccountInput>({
    name: "",
    email: "",
    password: "",
  });

  const CreateAccountSchema = object({
    name: string().required("Name is required"),

    email: string().email("Invalid email format").required("Email is required"),

    password: string()
      .min(6, "Must be 6 characters or more")
      .required("Please enter your password"),
  });

  const { isLoading, mutate } = useMutation(
    (payload: CreateAccountInput) => createAccount(payload),
    {
      onSuccess: (data) => {
        toast.success(
          data.message || "Account created successfully, please login",
        );

        setState({
          name: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          router.push(LOGIN_ROUTE);
        }, 1000);
      },

      onError: (error: IHttpError) => {
        setErrorMessage(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      },
    },
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setErrorMessage("");

    try {
      await CreateAccountSchema.validate(state, {
        abortEarly: false,
      });

      mutate({
        name: state.name,
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
    <div className="bg-muted/30 flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Mobile logo */}
        <div className="mb-10 flex justify-center lg:hidden">
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

        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Get started with MailFlowAI today.
          </p>
        </div>

        {/* API error */}
        {errorMessage && <ErrorAlert message={errorMessage} />}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={state.name}
              onChange={onChange}
              required
            />

            {errors.name && (
              <span className="text-notice text-xs font-body font-normal">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={state.email}
              onChange={onChange}
              required
            />

            {errors.email && (
              <span className="text-notice text-xs font-body font-normal">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={state.password}
              onChange={onChange}
              minLength={6}
              required
            />

            <p className="text-xs text-gray-500">
              Password must be at least 6 characters.
            </p>

            {errors.password && (
              <span className="text-notice text-xs font-body font-normal">
                {errors.password}
              </span>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-[#17453d] w-full"
          >
            {isLoading ? <Spinner /> : "Create account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href={LOGIN_ROUTE}
            className="text-primary font-medium hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
