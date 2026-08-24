import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "For getting started with email automation.",
    features: [
      "100 emails per month",
      "1 automation",
      "Basic templates",
      "Lead management",
    ],
  },
  {
    title: "Pro",
    price: "$29",
    description: "For businesses that want to scale their outreach.",
    popular: true,
    features: [
      "5,000 emails per month",
      "Unlimited automations",
      "AI email generation",
      "Advanced analytics",
      "Email sequences",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline">Pricing</Badge>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Start free. Upgrade when you grow.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Simple pricing designed for businesses of all sizes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={plan.popular ? "border-primary border-1 shadow-lg" : "bg-muted border-1 border-muted"}
            >
              <CardContent className="p-8">
                {plan.popular && (
                  <Badge className="mb-4">Most Popular</Badge>
                )}

                <h3 className="text-xl font-semibold">{plan.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>

                  {plan.price !== "$0" && (
                    <span className="text-muted-foreground">
                      /month
                    </span>
                  )}
                </div>

                <Button
                  className="mt-6 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/register">Get started</Link>
                </Button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
