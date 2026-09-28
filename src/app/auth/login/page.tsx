import Link from "next/link";
import { Mail, Sparkles, Zap } from "lucide-react";

import LoginForm from "./_component/loginForm";

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side */}
        <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between p-12 text-white">
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/10" />

          {/* Logo */}
          <div className="relative z-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary">
                <Mail size={20} />
              </div>

              <span>MailFlowAI</span>
            </Link>
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight ">
              Welcome back to
              <br />
              smarter email automation.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
              Pick up where you left off and keep your email workflows running
              smarter with MailFlowAI.
            </p>

            {/* Feature */}
            <div className="mt-10 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Zap size={19} />
              </div>

              <div>
                <h3 className="font-semibold">Automate more. Do less.</h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Manage your email workflows and let automation handle
                  repetitive tasks for you.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="relative z-10 text-sm text-white/50">
            © {new Date().getFullYear()} MailFlowAI. All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <LoginForm />
      </div>
    </main>
  );
};

export default Page;
