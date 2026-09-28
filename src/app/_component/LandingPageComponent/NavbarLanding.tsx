import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/assets";
import Image from "next/image";
import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  HOME_ROUTE,
} from "@/constant/route.constant";

export default function NavbarLanding() {
  return (
    <>
      <div className="cursor-pointer border-b bg-background/80 py-2 backdrop-blur  w-full">
        <div className="mx-auto cursor-pointer flex   max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href={HOME_ROUTE} className="flex items-center gap-2">
            <Image
              src={Logo.src}
              alt="img"
              width={120}
              height={100}
              className="h-auto w-20 md:h-auto md:w-36"
            />
          </Link>

          {/* Navigation */}
          <div className="hidden cursor-pointer items-center gap-8 md:flex">
            <Link
              href={ABOUT_ROUTE}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>

            <Link
              href={FAQ_ROUTE}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href={BLOG_ROUTE}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>

            <Link
              href={CONTACT_ROUTE}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              href={LOGIN_ROUTE}
              className={buttonVariants({ variant: "ghost" })}
            >
              Log in
            </Link>

            <Link
              href={REGISTER_ROUTE}
              className={buttonVariants({ variant: "default" })}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
