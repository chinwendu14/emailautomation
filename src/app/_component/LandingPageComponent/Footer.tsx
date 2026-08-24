import Link from "next/link";
import { Mail } from "lucide-react";
import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  CAREERS_ROUTE,
  CONTACT_ROUTE,
  COOKIES_ROUTE,
  PRIVACY_ROUTE,
  SUPPORT_ROUTE,
  TERMS_ROUTE,
} from "@/constant/route.constant";
const footerSections = [
  // {
  //   title: "Product",
  //   links: [
  //     { label: "Features", href: "#features" },
  //     { label: "Pricing", href: "#pricing" },
  //     { label: "How it works", href: "#how-it-works" },
  //   ],
  // },
  {
    title: "Company",
    links: [
      { label: "About Us", href: ABOUT_ROUTE },
      { label: "Blog", href: BLOG_ROUTE },
      { label: "Careers", href: CAREERS_ROUTE },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: PRIVACY_ROUTE },
      { label: "Terms of Service", href: TERMS_ROUTE },
      { label: "Cookie Policy", href: COOKIES_ROUTE },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: CONTACT_ROUTE },
      { label: "Support", href: SUPPORT_ROUTE },
      // { label: "Email Us", href: "mailto:support@mailflowai.com" },
      {
        label: "support@mailflowai.com",
        href: "mailto:support@mailflowai.com",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="#footer" className="border-t bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_3fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <span className="text-xl font-bold tracking-tight">
                <span className="text-black">MailFlow</span>
                <span className="text-card">AI</span>
              </span>

              {/* <Image
                src={Logo.src}
                alt="img"
                width={120} // fallback (desktop)
                height={100}
                className="w-20 h-auto md:w-36 md:h-auto"
              /> */}
            </Link>

            <p className="mt-5 text-sm leading-6 text-card/70">
              AI-powered email automation that helps businesses capture leads,
              personalize emails, and automate follow-ups.
            </p>
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm text-card font-semibold">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-card/70 transition-colors hover:text-card"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-card/70">
            © {new Date().getFullYear()} MailFlow AI. All rights reserved.
          </p>

          <p className="text-sm text-card/70">Built with AI & automation.</p>
        </div>
      </div>
    </footer>
  );
}
