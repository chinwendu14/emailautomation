import {
  Bot,
  Clock3,
  Mail,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Email Writer",
    description:
      "Generate personalized emails using AI based on your lead information.",
  },
  {
    icon: Zap,
    title: "Automations",
    description:
      "Create workflows that automatically trigger actions when something happens.",
  },
  {
    icon: Clock3,
    title: "Smart Follow-ups",
    description:
      "Automatically schedule follow-up emails based on your workflow.",
  },
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Organize and track all your leads from one simple dashboard.",
  },
  {
    icon: Mail,
    title: "Email Templates",
    description:
      "Create reusable templates for your most common email campaigns.",
  },
  {
    icon: Sparkles,
    title: "AI Personalization",
    description:
      "Make every email feel personalized instead of sending generic messages.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge variant="outline">Features</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to automate your emails
          </h2>

          <p className="mt-4 text-muted-foreground">
            Build powerful email workflows without spending hours manually
            following up with leads.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="transition-shadow hover:shadow-md bg-primary text-card"
              >
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 leading-6 ">
                    {feature.description}
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
