"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Mail, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import {
  CONTACT_ROUTE,
  REGISTER_ROUTE,
  SUPPORT_ROUTE,
} from "@/constant/route.constant";

const faqCategories = [
  "All",
  "Getting Started",
  "AI & Automation",
  "Email",
  "Account & Billing",
  "Security",
  "Integrations",
];

const faqs = [
  {
    question: "What is MailFlowAI?",
    answer:
      "MailFlowAI is an AI-powered email automation platform that helps businesses manage, organize, and automate repetitive email tasks. It helps teams save time, respond faster, and build smarter email workflows.",
    category: "Getting Started",
  },
  {
    question: "How does MailFlowAI work?",
    answer:
      "MailFlowAI uses artificial intelligence and automation workflows to understand incoming emails, identify their intent, and trigger the appropriate action. Depending on your workflow, this could include categorizing emails, generating responses, sending notifications, or routing messages to the right team.",
    category: "Getting Started",
  },
  {
    question: "Do I need technical knowledge to use MailFlowAI?",
    answer:
      "No. MailFlowAI is designed to make email automation accessible to businesses and teams without requiring advanced technical knowledge.",
    category: "Getting Started",
  },
  {
    question: "How do I get started with MailFlowAI?",
    answer:
      "Create an account, connect your email service, and start setting up the workflows you need. You can begin with simple automations and gradually build more advanced workflows as your needs grow.",
    category: "Getting Started",
  },

  {
    question: "What can MailFlowAI automate?",
    answer:
      "MailFlowAI can help automate repetitive email tasks such as email classification, response drafting, follow-ups, notifications, routing, customer support workflows, and other repetitive communication processes.",
    category: "AI & Automation",
  },
  {
    question: "Can MailFlowAI automatically respond to emails?",
    answer:
      "Yes. Depending on how you configure your workflow, MailFlowAI can generate AI-powered responses to suitable emails. You can also design workflows where responses are reviewed by a team member before they are sent.",
    category: "AI & Automation",
  },
  {
    question: "Can I review AI-generated responses before they are sent?",
    answer:
      "Yes. Human review can be included in your workflow when a message requires approval, personalization, or additional judgment before sending.",
    category: "AI & Automation",
  },
  {
    question: "Can I create custom automation workflows?",
    answer:
      "Yes. MailFlowAI is designed around flexible workflows so businesses can create automation processes based on their specific email and communication needs.",
    category: "AI & Automation",
  },

  {
    question: "Can MailFlowAI organize my emails?",
    answer:
      "Yes. AI-powered workflows can help categorize and organize incoming messages based on their content, intent, or other rules you configure.",
    category: "Email",
  },
  {
    question: "Can MailFlowAI help with customer support emails?",
    answer:
      "Yes. MailFlowAI can help automate common customer support workflows, identify support requests, generate responses, and route complex conversations to the appropriate team member.",
    category: "Email",
  },
  {
    question: "Can MailFlowAI automate email follow-ups?",
    answer:
      "Yes. You can create workflows that help your team follow up with customers, prospects, or other contacts without manually tracking every conversation.",
    category: "Email",
  },
  {
    question: "Can MailFlowAI prioritize important emails?",
    answer:
      "AI-powered workflows can help identify important or urgent messages so your team can focus on conversations that require immediate attention.",
    category: "Email",
  },

  {
    question: "Is MailFlowAI free to use?",
    answer:
      "MailFlowAI can offer different plans depending on your business needs. Visit the pricing page to see the latest available plans and features.",
    category: "Account & Billing",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes. Your subscription can be adjusted as your business needs change, subject to the options available on your account and plan.",
    category: "Account & Billing",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel your subscription according to the cancellation terms associated with your plan.",
    category: "Account & Billing",
  },
  {
    question: "How does MailFlowAI billing work?",
    answer:
      "Billing depends on the plan you choose. Your account will show the applicable subscription details, billing period, and available payment options.",
    category: "Account & Billing",
  },

  {
    question: "Is my data secure?",
    answer:
      "Security is an important part of MailFlowAI. The platform is designed with appropriate safeguards to help protect business information and account data.",
    category: "Security",
  },
  {
    question: "Who can access my MailFlowAI account?",
    answer:
      "Access to your account should be limited to authorized users and team members you choose to give access to. You should always use strong credentials and follow recommended security practices.",
    category: "Security",
  },
  {
    question: "Does MailFlowAI protect my email information?",
    answer:
      "MailFlowAI is designed to handle email information responsibly and securely. The specific information stored and processed depends on the features and workflows you use.",
    category: "Security",
  },

  {
    question: "Can I connect my existing email account?",
    answer:
      "MailFlowAI is designed to work with email services and integrations supported by the platform. Available integrations may depend on your account and plan.",
    category: "Integrations",
  },
  {
    question: "Can I connect Gmail to MailFlowAI?",
    answer:
      "If Gmail integration is available for your MailFlowAI account, you can connect your Gmail account and use supported email automation workflows.",
    category: "Integrations",
  },
  {
    question: "Can I connect Outlook to MailFlowAI?",
    answer:
      "If Outlook integration is available for your account, you can connect it and use the supported MailFlowAI automation features.",
    category: "Integrations",
  },
  {
    question: "Will more integrations be added?",
    answer:
      "MailFlowAI can expand its integrations over time as the platform grows. Check the integrations or product documentation for the latest supported services.",
    category: "Integrations",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;

    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (question: string) => {
    setOpenQuestion((current) => (current === question ? null : question));
  };

  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center lg:px-8 lg:pb-28 lg:pt-32">
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
            MailFlowAI FAQ
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Frequently asked <span className="text-primary">questions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Find answers to common questions about MailFlowAI, AI-powered email
            automation, integrations, security, and your account.
          </p>

          {/* Search */}
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenQuestion(null);
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Help Center
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {selectedCategory === "All"
                ? "Everything you need to know"
                : selectedCategory}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1 ? "question" : "questions"} available
            </p>
          </div>

          {filteredFAQs.length > 0 ? (
            <div className="space-y-3">
              {filteredFAQs.map((faq) => {
                const isOpen = openQuestion === faq.question;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border bg-background transition-shadow hover:shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(faq.question)}
                      className="flex w-full items-center justify-between gap-6 p-5 text-left sm:p-6"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          {faq.category}
                        </span>

                        <h3 className="text-base font-semibold sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t px-5 pb-6 pt-5 sm:px-6">
                        <p className="leading-7 text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed py-16 text-center">
              <Search className="mx-auto h-10 w-10 text-muted-foreground" />

              <h3 className="mt-4 text-xl font-semibold">No questions found</h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                We couldn&apos;t find any FAQ matching your search. Try another
                search term or choose a different category.
              </p>

              <Button
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                View All Questions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Still have questions?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Our support team
            is here to help you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              <Link className=" flex items-center" href={SUPPORT_ROUTE}>
                Visit Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg">
              <Link href={CONTACT_ROUTE}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}

      <Footer />
    </main>
  );
}
