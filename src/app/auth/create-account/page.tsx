import React from "react";
import CreateAccountForm from "./_component/createAountForm";
import { Mail } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* Left side */}
          <div className="hidden bg-primary lg:flex lg:flex-col lg:justify-between p-12 text-white">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1f594f]">
                  <Mail size={20} />
                </div>

                <span>MailFlowAI</span>
              </Link>
            </div>

            <div className="max-w-md">
              <h1 className="text-4xl font-bold leading-tight">
                Automate your emails.
                <br />
                Grow your business.
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/80">
                Create your MailFlowAI account and start building smarter email
                workflows powered by automation and AI.
              </p>
            </div>

            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} MailFlowAI. All rights reserved.
            </p>
          </div>
          <CreateAccountForm />
        </div>
      </main>
    </>
  );
};

export default Page;
