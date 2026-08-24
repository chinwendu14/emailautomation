/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Heart,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { CONTACT_ROUTE, REGISTER_ROUTE } from "@/constant/route.constant";

const values = [
  {
    icon: Rocket,
    title: "Build with purpose",
    description:
      "We focus on solving real business problems and creating products that make work simpler and more productive.",
  },
  {
    icon: Users,
    title: "People first",
    description:
      "We believe great products are built by people who feel trusted, supported, and empowered to do their best work.",
  },
  {
    icon: Sparkles,
    title: "Think boldly",
    description:
      "We embrace new ideas, experiment with technology, and continuously look for better ways to solve problems.",
  },
  {
    icon: Heart,
    title: "Grow together",
    description:
      "We learn from each other, share knowledge, and create opportunities for everyone on the team to grow.",
  },
];

const benefits = [
  "Flexible and collaborative work environment",
  "Opportunity to work with AI and automation technology",
  "Learning and professional development opportunities",
  "Meaningful work with real business impact",
  "Supportive and collaborative team culture",
  "Opportunities to grow with the company",
];

const openPositions = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us build beautiful, fast, and intuitive interfaces that make AI-powered automation simple for businesses.",
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build scalable APIs, integrations, and backend systems that power the MailFlowAI automation platform.",
  },
  {
    title: "AI Automation Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intelligent workflows and AI-powered systems that help businesses automate repetitive email processes.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Create simple, intuitive experiences that help businesses get the most from AI-powered automation.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Careers at MailFlowAI
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build the future of{" "}
              <span className="text-primary">work automation.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Join a team building intelligent tools that help businesses spend
              less time on repetitive work and more time on what matters.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg">
                <a className="flex items-center" href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="lg">
                <Link href={CONTACT_ROUTE}>Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why MailFlowAI */}
      <section className="border-y bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why MailFlowAI?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Do meaningful work with intelligent technology.
              </h2>

              <p className="mt-6 leading-7 text-muted-foreground">
                Businesses spend countless hours dealing with repetitive
                communication and administrative tasks. MailFlowAI is building
                technology that helps change that.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                We're bringing together AI, automation, and thoughtful product
                design to create tools that make businesses more efficient.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                If you're excited about solving real problems and building the
                future of work, we'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <Rocket className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-lg font-semibold">
                    Build the future
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Work on AI-powered products shaping how modern businesses
                    operate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-lg font-semibold">Work together</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Collaborate with talented people who care about the work
                    they do.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Sparkles className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-lg font-semibold">Keep learning</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Explore new technologies and continuously improve your
                    skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heart className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-lg font-semibold">Make an impact</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Build products that solve real problems for businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What we believe in.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Our values guide how we build our products, work with customers,
              and collaborate with each other.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card key={value.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Life at MailFlowAI
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Great work starts with a great environment.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                We want our team to have the freedom, support, and resources
                needed to do meaningful work and continue growing.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-6">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Join Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Open positions
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explore opportunities to help us build the future of AI-powered
              business automation.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <Card
                key={position.title}
                className="transition-all hover:shadow-md"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                      <h3 className="text-xl font-semibold">
                        {position.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <BriefcaseBusiness className="h-4 w-4" />
                          {position.department}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>

                        <span>{position.type}</span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {position.description}
                      </p>
                    </div>

                    <Button className="shrink-0">
                      <Link
                        className="flex items-center"
                        href={`${CONTACT_ROUTE}?subject=${encodeURIComponent(
                          `Application for ${position.title}`,
                        )}`}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See a Role */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Don't see the right role?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're always interested in meeting talented people who are
            passionate about AI, automation, and building great products.
          </p>

          <Button size="lg" className="mt-8">
            <Link
              className="flex items-center"
              href={`${CONTACT_ROUTE}?subject=General%20Career%20Inquiry`}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Help us build what's next.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join MailFlowAI and help businesses work smarter through AI-powered
            automation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              <a className="flex items-center" href="#open-positions">
                Explore Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" size="lg">
              <Link href={REGISTER_ROUTE}>Learn About MailFlowAI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
