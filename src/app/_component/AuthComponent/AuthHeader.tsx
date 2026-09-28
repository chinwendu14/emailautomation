import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="MailFlowAI home">
          <Image
            src={Logo}
            alt="MailFlowAI"
            width={150}
            height={40}
            priority
            className="h-auto w-30"
          />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
