import { Bot, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Capture leads",
    description:
      "Collect leads from your website, forms, or connected applications.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Let AI personalize",
    description:
      "AI analyzes the lead and creates a personalized email based on your instructions.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automate follow-ups",
    description:
      "Automatically send follow-ups at the right time without manually tracking every lead.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline">How it works</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Automate your entire email workflow
          </h2>

          <p className="mt-4 text-muted-foreground">
            From capturing a lead to sending personalized follow-ups,
            MailFlow AI handles the repetitive work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card key={step.number} className="border-1 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-card">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl text-primary font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
