import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Lock,
  Mail,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { CONTACT_ROUTE } from "@/constant/route.constant";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        heading: "Information you provide",
        paragraphs: [
          "When you create an account or use MailFlowAI, we may collect information you provide directly to us, such as your name, email address, company information, account credentials, and other information you choose to provide.",
        ],
      },
      {
        heading: "Email and workflow information",
        paragraphs: [
          "When you connect an email account or create an automation workflow, MailFlowAI may process information necessary to provide the requested service. This may include email messages, sender and recipient information, email subjects, attachments, workflow configurations, and related metadata.",
        ],
      },
      {
        heading: "Usage information",
        paragraphs: [
          "We may automatically collect information about how you use our services, including pages visited, features used, browser type, device information, IP address, and general interaction data.",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        heading: "Providing our services",
        paragraphs: [
          "We use your information to provide, maintain, and improve MailFlowAI, including processing emails, running automation workflows, managing your account, and providing customer support.",
        ],
      },
      {
        heading: "Improving MailFlowAI",
        paragraphs: [
          "We may use aggregated or de-identified information to understand how our services are used, identify technical issues, improve features, and develop new products.",
        ],
      },
      {
        heading: "Communication",
        paragraphs: [
          "We may use your contact information to send important account notifications, service updates, security alerts, and other communications related to your use of MailFlowAI.",
        ],
      },
      {
        heading: "Security and fraud prevention",
        paragraphs: [
          "We may process information to protect our services, detect suspicious activity, prevent abuse, and maintain the security and integrity of our platform.",
        ],
      },
    ],
  },
  {
    title: "3. AI and Automated Processing",
    content: [
      {
        heading: "How AI is used",
        paragraphs: [
          "MailFlowAI uses artificial intelligence and automation technologies to help users organize emails, understand message content, generate responses, classify messages, and execute automated workflows.",
        ],
      },
      {
        heading: "Your control",
        paragraphs: [
          "You remain responsible for the workflows and automations you configure. You should review automated actions and ensure that they are appropriate for your business and customers.",
        ],
      },
      {
        heading: "AI-generated content",
        paragraphs: [
          "AI-generated responses or classifications may not always be accurate. You should review important or sensitive communications before sending or relying on them.",
        ],
      },
    ],
  },
  {
    title: "4. Email Account Access",
    content: [
      {
        heading: "Connected accounts",
        paragraphs: [
          "If you connect an external email account to MailFlowAI, you authorize us to access the information necessary to provide the features you request.",
        ],
      },
      {
        heading: "Limited access",
        paragraphs: [
          "We aim to access and process only the information reasonably necessary to provide the requested functionality. You can disconnect an email account from MailFlowAI when supported by the service.",
        ],
      },
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    content: [
      {
        heading: "Cookies",
        paragraphs: [
          "MailFlowAI may use cookies and similar technologies to keep you signed in, remember preferences, understand how our website is used, and improve the user experience.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "Most browsers allow you to control or disable cookies through their settings. Some features of MailFlowAI may not function correctly if certain cookies are disabled.",
        ],
      },
    ],
  },
  {
    title: "6. How We Share Information",
    content: [
      {
        heading: "Service providers",
        paragraphs: [
          "We may share information with trusted service providers that help us operate MailFlowAI, such as hosting providers, infrastructure providers, analytics services, authentication providers, email providers, and AI technology providers.",
        ],
      },
      {
        heading: "Legal requirements",
        paragraphs: [
          "We may disclose information when reasonably necessary to comply with applicable laws, legal processes, court orders, or valid governmental requests.",
        ],
      },
      {
        heading: "Business transfers",
        paragraphs: [
          "If MailFlowAI is involved in a merger, acquisition, financing, restructuring, or sale of assets, information may be transferred as part of that transaction, subject to applicable privacy requirements.",
        ],
      },
      {
        heading: "No sale of personal information",
        paragraphs: [
          "We do not sell your personal information to third parties for their own advertising purposes.",
        ],
      },
    ],
  },
  {
    title: "7. Data Security",
    content: [
      {
        heading: "Protecting your information",
        paragraphs: [
          "We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.",
        ],
      },
      {
        heading: "Important limitation",
        paragraphs: [
          "No internet-based service can guarantee absolute security. You are responsible for maintaining the security of your account credentials and notifying us if you believe your account has been compromised.",
        ],
      },
    ],
  },
  {
    title: "8. Data Retention",
    content: [
      {
        heading: "How long we keep information",
        paragraphs: [
          "We retain information for as long as reasonably necessary to provide our services, maintain your account, comply with legal obligations, resolve disputes, enforce agreements, and protect our legitimate business interests.",
        ],
      },
      {
        heading: "Account deletion",
        paragraphs: [
          "When you delete your account, we may delete or anonymize associated information subject to applicable legal, security, and operational requirements.",
        ],
      },
    ],
  },
  {
    title: "9. Your Privacy Rights",
    content: [
      {
        heading: "Depending on your location",
        paragraphs: [
          "Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, update, delete, or request a copy of certain information we hold about you.",
        ],
      },
      {
        heading: "Requests",
        paragraphs: [
          "To make a privacy-related request, contact us using the information provided at the end of this policy. We may need to verify your identity before completing certain requests.",
        ],
      },
    ],
  },
  {
    title: "10. Third-Party Services",
    content: [
      {
        heading: "External services",
        paragraphs: [
          "MailFlowAI may integrate with third-party services to provide functionality such as email connectivity, authentication, analytics, payments, AI processing, and infrastructure.",
        ],
      },
      {
        heading: "Third-party policies",
        paragraphs: [
          "Third-party services operate under their own privacy policies and terms. We encourage you to review the privacy practices of any external service you connect to MailFlowAI.",
        ],
      },
    ],
  },
  {
    title: "11. Children's Privacy",
    content: [
      {
        heading: "Not intended for children",
        paragraphs: [
          "MailFlowAI is intended for businesses and general users and is not directed toward children. We do not knowingly collect personal information from children in violation of applicable laws.",
        ],
      },
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    content: [
      {
        heading: "Policy updates",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes to our services, legal requirements, or privacy practices.",
        ],
      },
      {
        heading: "Notification",
        paragraphs: [
          "When we make significant changes, we may provide notice through our website, your MailFlowAI account, or another appropriate communication method.",
        ],
      },
    ],
  },
  {
    title: "13. Contact Us",
    content: [
      {
        heading: "Questions about privacy?",
        paragraphs: [
          "If you have questions, concerns, or requests regarding this Privacy Policy or how MailFlowAI handles information, please contact our team.",
        ],
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              MailFlowAI
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We respect your privacy and are committed to protecting the
              information you trust us with.
            </p>

            {/* <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              Last updated: August 23, 2026
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border bg-muted/30 p-6 lg:p-8">
            <div className="flex gap-4">
              <Lock className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <div>
                <h2 className="text-lg font-semibold">Your privacy matters</h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  This Privacy Policy explains how MailFlowAI collects, uses,
                  stores, and protects information when you use our website,
                  application, and services.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  By using MailFlowAI, you acknowledge the practices described
                  in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <article className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.title}
                </h2>

                <div className="mt-6 space-y-8">
                  {section.content.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-lg font-semibold">{item.heading}</h3>

                      <div className="mt-3 space-y-4">
                        {item.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-muted-foreground"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Privacy Principles */}
          <section className="mt-16 rounded-2xl border bg-muted/30 p-8">
            <h2 className="text-xl font-bold">Our privacy principles</h2>

            <div className="mt-6 space-y-4">
              {[
                "We collect information needed to provide and improve our services.",
                "We do not sell your personal information for advertising purposes.",
                "We use reasonable security measures to protect your information.",
                "You remain in control of the email accounts and workflows you connect to MailFlowAI.",
              ].map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-6 text-muted-foreground">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mt-16 rounded-2xl border p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Have a privacy question?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Our team is happy to answer questions about how MailFlowAI handles
              your information.
            </p>

            <Button className="mt-6">
              <Link href={CONTACT_ROUTE}>Contact Us</Link>
            </Button>
          </section>

          {/* Back */}
        </div>
      </article>

      <Footer />
    </main>
  );
}
