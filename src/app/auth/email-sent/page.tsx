"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";

import AuthHeader from "@/app/_component/AuthComponent/AuthHeader";
import { LOGIN_ROUTE } from "@/constant/route.constant";

export default function ForgotPasswordEmailSentPage() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <main className="min-h-screen bg-gray-50">
      <AuthHeader />

      <section className="flex justify-center px-4 pb-12 pt-16">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <h1 className="text-2xl font-semibold text-gray-900">
              Check your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              We&apos;ve sent a password reset link to
            </p>

            {email && (
              <p className="mt-1 break-all text-sm font-medium text-gray-900">
                {email}
              </p>
            )}

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Please check your inbox and follow the link to reset your
              password. The link will expire in 1 hour.
            </p>
          </div>

          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-center text-xs leading-5 text-gray-500">
              Don&apos;t see the email? Check your spam or junk folder.
            </p>
          </div>

          {/* <div className="mt-6 text-center">
            <Link
              href={LOGIN_ROUTE}
              className="text-sm font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}
