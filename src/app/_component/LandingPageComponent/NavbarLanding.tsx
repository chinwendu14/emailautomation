import Link from "next/link";

import { Button } from "@/components/ui/button";
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
    <header className="border-b bg-background/80 py-2 backdrop-blur fixed w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href={HOME_ROUTE} className="flex items-center  gap-2">
          <Image
            src={Logo.src}
            alt="img"
            width={120} // fallback (desktop)
            height={100}
            className="w-20 h-auto md:w-36 md:h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            <Link href={LOGIN_ROUTE}>Log in</Link>
          </Button>

          <Button>
            <Link href={REGISTER_ROUTE}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
