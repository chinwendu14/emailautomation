import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { CONTACT_ROUTE } from "@/constant/route.constant";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    content: [
      {
        heading: "Agreement to the Terms",
        paragraphs: [
          "These Terms of Service govern your access to and use of MailFlowAI, including our website, application, software, features, and related services.",
          "By creating an account, accessing, or using MailFlowAI, you agree to be bound by these Terms. If you do not agree with these Terms, you should not use our services.",
        ],
      },
    ],
  },

  {
    title: "2. Description of MailFlowAI",
    content: [
      {
        heading: "Our service",
        paragraphs: [
          "MailFlowAI is an AI-powered email automation platform designed to help individuals and businesses organize emails, automate repetitive communication, create workflows, and improve productivity.",
        ],
      },
      {
        heading: "Service changes",
        paragraphs: [
          "We may add, modify, improve, or remove features from MailFlowAI from time to time. We may also introduce new features or change existing functionality to improve the service.",
        ],
      },
    ],
  },

  {
    title: "3. Your Account",
    content: [
      {
        heading: "Account information",
        paragraphs: [
          "You may need to create an account to access certain MailFlowAI features. You agree to provide accurate, complete, and up-to-date information when creating and maintaining your account.",
        ],
      },
      {
        heading: "Account security",
        paragraphs: [
          "You are responsible for maintaining the confidentiality of your login credentials and for activities performed through your account.",
          "If you believe your account has been accessed without authorization, you should notify us as soon as possible.",
        ],
      },
      {
        heading: "One account per user",
        paragraphs: [
          "Unless otherwise permitted by your subscription or agreement with MailFlowAI, you should not create accounts for fraudulent, abusive, or unauthorized purposes.",
        ],
      },
    ],
  },

  {
    title: "4. Email Accounts and Integrations",
    content: [
      {
        heading: "Connecting an email account",
        paragraphs: [
          "MailFlowAI may allow you to connect third-party email accounts or services. By connecting an account, you authorize MailFlowAI to access the information and perform the actions necessary to provide the features you request.",
        ],
      },
      {
        heading: "Your responsibility",
        paragraphs: [
          "You are responsible for ensuring that you have the necessary permissions and authorization to connect an email account and process the information associated with that account.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "Third-party email providers and integrations may have their own terms, policies, limitations, and service availability. MailFlowAI is not responsible for interruptions or changes to third-party services.",
        ],
      },
    ],
  },

  {
    title: "5. AI-Powered Features",
    content: [
      {
        heading: "AI-generated content",
        paragraphs: [
          "MailFlowAI may use artificial intelligence to generate email drafts, classify messages, summarize information, recommend actions, or perform other automated tasks.",
          "AI-generated content may contain errors, omissions, or inaccurate information. You are responsible for reviewing AI-generated content before relying on it or sending it to another person.",
        ],
      },
      {
        heading: "Human review",
        paragraphs: [
          "For important, sensitive, legal, financial, medical, or business-critical communications, you should use appropriate human review before sending or acting on AI-generated content.",
        ],
      },
      {
        heading: "No guarantee of accuracy",
        paragraphs: [
          "We do not guarantee that AI-generated results will always be accurate, complete, appropriate, or suitable for your particular purpose.",
        ],
      },
    ],
  },

  {
    title: "6. Email Automation",
    content: [
      {
        heading: "Your responsibility for workflows",
        paragraphs: [
          "You are responsible for the automation workflows, rules, triggers, recipients, messages, and actions you configure through MailFlowAI.",
        ],
      },
      {
        heading: "Automated actions",
        paragraphs: [
          "Automations may send emails, categorize messages, create drafts, forward information, or perform other actions based on your configuration.",
          "You should carefully review and test your workflows before enabling them in a production environment.",
        ],
      },
      {
        heading: "Compliance",
        paragraphs: [
          "You are responsible for ensuring that your use of email automation complies with applicable laws, regulations, industry requirements, and the policies of your email provider.",
        ],
      },
    ],
  },

  {
    title: "7. Acceptable Use",
    content: [
      {
        heading: "You agree not to use MailFlowAI to:",
        paragraphs: [
          "Use the service for unlawful, fraudulent, abusive, deceptive, or harmful activities.",
          "Send spam, unsolicited bulk messages, phishing emails, or malicious communications.",
          "Attempt to gain unauthorized access to MailFlowAI, another user's account, or third-party systems.",
          "Upload or transmit malware, viruses, malicious code, or other harmful material.",
          "Interfere with or disrupt the operation of MailFlowAI or its infrastructure.",
          "Use the service to violate the rights, privacy, intellectual property, or security of another person or organization.",
          "Attempt to reverse engineer, decompile, or otherwise improperly access the underlying software or systems.",
        ],
      },
    ],
  },

  {
    title: "8. Your Content",
    content: [
      {
        heading: "Ownership",
        paragraphs: [
          "You retain ownership of the content and information you submit to MailFlowAI, including emails, messages, documents, workflow configurations, and other materials.",
        ],
      },
      {
        heading: "License to provide the service",
        paragraphs: [
          "You grant MailFlowAI the limited rights necessary to host, process, transmit, and otherwise use your content solely as reasonably necessary to provide, maintain, secure, and improve the services, subject to our Privacy Policy.",
        ],
      },
      {
        heading: "Your responsibility",
        paragraphs: [
          "You are responsible for ensuring that you have the rights and permissions necessary to submit and process content through MailFlowAI.",
        ],
      },
    ],
  },

  {
    title: "9. Intellectual Property",
    content: [
      {
        heading: "MailFlowAI ownership",
        paragraphs: [
          "MailFlowAI and its associated software, branding, designs, logos, interfaces, features, documentation, and other materials are owned by or licensed to MailFlowAI and are protected by applicable intellectual property laws.",
        ],
      },
      {
        heading: "Limited license",
        paragraphs: [
          "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable right to access and use MailFlowAI for its intended purpose.",
        ],
      },
      {
        heading: "Restrictions",
        paragraphs: [
          "You may not copy, modify, distribute, sell, sublicense, or create derivative works from MailFlowAI or its proprietary materials without our prior written permission.",
        ],
      },
    ],
  },

  {
    title: "10. Subscriptions and Payments",
    content: [
      {
        heading: "Paid plans",
        paragraphs: [
          "Some MailFlowAI features may require a paid subscription. Pricing, billing intervals, usage limits, and included features will be presented before you purchase a subscription.",
        ],
      },
      {
        heading: "Billing",
        paragraphs: [
          "If you subscribe to a paid plan, you authorize the applicable payment provider to charge the payment method associated with your account according to the selected billing period.",
        ],
      },
      {
        heading: "Price changes",
        paragraphs: [
          "We may change subscription prices or plan features from time to time. Where required, we will provide appropriate notice before a price change takes effect.",
        ],
      },
    ],
  },

  {
    title: "11. Free Trials and Free Features",
    content: [
      {
        heading: "Free access",
        paragraphs: [
          "MailFlowAI may offer free plans, trials, promotional access, or limited features. We may change or discontinue free access at any time, subject to applicable commitments.",
        ],
      },
      {
        heading: "Trial limitations",
        paragraphs: [
          "Free trials may have usage limits, expiration dates, or feature restrictions. Additional terms may apply to promotional offers.",
        ],
      },
    ],
  },

  {
    title: "12. Third-Party Services",
    content: [
      {
        heading: "External providers",
        paragraphs: [
          "MailFlowAI may rely on third-party services for hosting, authentication, payments, email connectivity, AI processing, analytics, communications, and other infrastructure.",
        ],
      },
      {
        heading: "Third-party terms",
        paragraphs: [
          "Your use of third-party services may also be subject to the applicable third party's terms and policies. MailFlowAI does not control third-party services and is not responsible for their independent actions or availability.",
        ],
      },
    ],
  },

  {
    title: "13. Service Availability",
    content: [
      {
        heading: "Availability",
        paragraphs: [
          "We aim to keep MailFlowAI available and reliable, but we do not guarantee uninterrupted or error-free operation.",
        ],
      },
      {
        heading: "Maintenance",
        paragraphs: [
          "We may temporarily suspend or restrict access to MailFlowAI for maintenance, security updates, upgrades, technical issues, or other operational reasons.",
        ],
      },
    ],
  },

  {
    title: "14. Disclaimer of Warranties",
    content: [
      {
        heading: "Service provided as available",
        paragraphs: [
          "To the extent permitted by applicable law, MailFlowAI is provided on an 'as is' and 'as available' basis.",
        ],
      },
      {
        heading: "No guarantee",
        paragraphs: [
          "We do not guarantee that the service will always meet your specific requirements, operate without interruptions, or produce completely accurate AI-generated results.",
        ],
      },
    ],
  },

  {
    title: "15. Limitation of Liability",
    content: [
      {
        heading: "Limitation",
        paragraphs: [
          "To the maximum extent permitted by applicable law, MailFlowAI and its owners, employees, affiliates, partners, and service providers will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.",
        ],
      },
      {
        heading: "Your use of automated workflows",
        paragraphs: [
          "You acknowledge that automated email workflows may result in unintended actions if configured incorrectly. You are responsible for reviewing and monitoring the automations you create.",
        ],
      },
    ],
  },

  {
    title: "16. Indemnification",
    content: [
      {
        heading: "Your responsibility",
        paragraphs: [
          "To the extent permitted by law, you agree to defend, indemnify, and hold harmless MailFlowAI and its affiliates, officers, employees, and service providers from claims, damages, liabilities, and expenses arising from your misuse of the service, violation of these Terms, or violation of another person's rights.",
        ],
      },
    ],
  },

  {
    title: "17. Suspension and Termination",
    content: [
      {
        heading: "Termination by you",
        paragraphs: [
          "You may stop using MailFlowAI and close your account according to the account management options available through the service.",
        ],
      },
      {
        heading: "Termination by us",
        paragraphs: [
          "We may suspend or terminate access to MailFlowAI if we reasonably believe that you have violated these Terms, created a security risk, engaged in abusive behavior, or used the service unlawfully.",
        ],
      },
      {
        heading: "Effect of termination",
        paragraphs: [
          "After termination, your right to use MailFlowAI will end. Certain provisions of these Terms that are intended to survive termination will continue to apply.",
        ],
      },
    ],
  },

  {
    title: "18. Changes to These Terms",
    content: [
      {
        heading: "Updates",
        paragraphs: [
          "We may update these Terms from time to time as our services, business practices, or legal requirements change.",
        ],
      },
      {
        heading: "Continued use",
        paragraphs: [
          "If we make material changes, we may provide notice through the website, application, email, or another appropriate method. Your continued use of MailFlowAI after the updated Terms become effective means you accept the revised Terms.",
        ],
      },
    ],
  },

  {
    title: "19. Governing Law",
    content: [
      {
        heading: "Applicable law",
        paragraphs: [
          "These Terms will be governed by and interpreted according to the applicable laws of the jurisdiction in which MailFlowAI operates, unless otherwise required by applicable law.",
        ],
      },
    ],
  },

  {
    title: "20. Contact Us",
    content: [
      {
        heading: "Questions about these Terms?",
        paragraphs: [
          "If you have questions about these Terms of Service, please contact the MailFlowAI team.",
        ],
      },
    ],
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Please read these terms carefully before using MailFlowAI.
            </p>

            {/* <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              Last updated: August 23, 2026
            </div> */}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border bg-muted/30 p-6 lg:p-8">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <div>
                <h2 className="text-lg font-semibold">Using MailFlowAI</h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  These Terms explain the rules that apply when you access or
                  use MailFlowAI. By using our service, you agree to follow
                  these Terms and all applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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

          {/* Important Rules */}
          <section className="mt-16 rounded-2xl border bg-muted/30 p-8">
            <div className="flex gap-4">
              <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <div>
                <h2 className="text-xl font-bold">
                  Important things to remember
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Review AI-generated emails before sending important communications.",
                    "Make sure you have permission to access and process email accounts connected to MailFlowAI.",
                    "Do not use MailFlowAI for spam, phishing, fraud, or other unlawful activities.",
                    "Monitor your automated workflows and ensure they behave as intended.",
                  ].map((rule) => (
                    <div key={rule} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                      <p className="text-sm leading-6 text-muted-foreground">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mt-16 rounded-2xl border p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Have questions about our Terms?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              If you have questions about these Terms of Service, our team is
              happy to help.
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
