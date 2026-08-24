"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageSquare, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { SUPPORT_ROUTE } from "@/constant/route.constant";
import { SupportInput } from "@/interface/auth.interface";
import useInputeChange from "@/hooks/quries/useInputeChange";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const { onChange, state, setState } = useInputeChange<SupportInput>({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData.entries());

      console.log("Contact form data:", data);

      // We will connect this to your API later.
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setLoading(false);
    }

    setState({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <main>
      <NavbarLanding />

      {/* Hero */}
      <section className="bg-muted px-6 pb-20 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            We&apos;d love to hear from you.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Have a question about MailFlow AI, need help with your account, or
            want to learn more about our platform? Send us a message and our
            team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold">How can we help?</h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Whether you have a question about our features, pricing,
              integrations, or your account, our team is here to help.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">Email us</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    support@mailflowai.com
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">Customer support</h3>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Need help using MailFlow AI? Our support team is ready to
                    assist you.
                  </p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold">Response time</h3>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    We aim to respond to messages within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card className="border shadow-sm">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Send us a message</h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>

                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={state.name}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={state.email}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>

                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={state.subject}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your question..."
                    rows={6}
                    value={state.message}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full" disabled={loading}>
                  <Send className="mr-2 h-4 w-4" />

                  {loading ? "Sending..." : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Looking for help?</h2>

          <p className="mt-4 text-muted-foreground">
            Visit our support page to find answers to common questions.
          </p>

          <Button variant="outline" className="mt-7">
            <a href={SUPPORT_ROUTE}>Visit Support</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
