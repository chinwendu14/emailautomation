import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Mail,
  MessageCircle,
  Settings,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { CONTACT_ROUTE, REGISTER_ROUTE } from "@/constant/route.constant";

const faqs = [
  {
    question: "What is MailFlowAI?",
    answer:
      "MailFlowAI is an AI-powered email automation platform that helps businesses manage, automate, organize, and respond to emails more efficiently.",
  },
  {
    question: "How can MailFlowAI help my business?",
    answer:
      "MailFlowAI can help reduce repetitive email tasks, improve response times, organize conversations, and automate important parts of your email workflow.",
  },
  {
    question: "Do I need technical knowledge to use MailFlowAI?",
    answer:
      "No. MailFlowAI is designed to be simple and user-friendly, so you can automate your email workflows without needing advanced technical knowledge.",
  },
  {
    question: "Can I connect MailFlowAI to my existing email account?",
    answer:
      "Yes. MailFlowAI is designed to work with your existing email workflow so you can automate tasks without completely changing how your team communicates.",
  },
  {
    question: "Is my email data secure?",
    answer:
      "We take security and privacy seriously. MailFlowAI is designed with security in mind to help protect your information and email data.",
  },
  {
    question: "How do I contact the support team?",
    answer:
      "You can reach our support team through the contact options provided on this page. We are here to help you get the most out of MailFlowAI.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <CircleHelp className="h-7 w-7 text-primary" />
            </div> */}

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              MailFlowAI Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              How can we <span className="text-primary">help you?</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Find answers, explore helpful resources, or get in touch with our
              support team. We are here to help you get the most out of
              MailFlowAI.
            </p>

            {/* Search */}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Support Center
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find the help you need
            </h2>

            <p className="mt-4 text-muted-foreground">
              Choose the option that best fits what you are looking for.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold">Help Center</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Browse guides and resources to learn how MailFlowAI works.
                </p>

                <Link
                  href={CONTACT_ROUTE}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Visit Help Center
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold">Contact Support</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Need help with something specific? Talk to our support team.
                </p>

                <Link
                  href={CONTACT_ROUTE}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* <Card className="group transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold">AI Assistance</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Get intelligent assistance for your email automation needs.
                </p>

                <Link
                  href="/dashboard"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card> */}

            <Card className="group transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold">Getting Started</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Learn how to set up your account and create your first
                  workflow.
                </p>

                <Link
                  href={REGISTER_ROUTE}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions
            </h2>

            <p className="mt-4 text-muted-foreground">
              Quick answers to some of the most common questions about
              MailFlowAI.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border bg-background p-5 transition-colors hover:bg-muted/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why MailFlowAI */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Built to help you move faster
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Spend less time managing emails.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              MailFlowAI helps you automate repetitive email tasks so you can
              focus on your customers, your team, and the work that matters
              most.
            </p>

            <Button className=" flex mt-8">
              <Link href={REGISTER_ROUTE} className="flex items-center">
                Start Automating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {[
              "Automate repetitive email tasks",
              "Improve response times",
              "Organize your email workflows",
              "Reduce manual work",
              "Work smarter with AI",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border bg-background p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Mail className="mx-auto h-10 w-10 text-primary" />

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Still need help?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our team is ready to help. Reach out and let us know how we can
            assist you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              <Link href={CONTACT_ROUTE} className="flex items-center gap-2">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
