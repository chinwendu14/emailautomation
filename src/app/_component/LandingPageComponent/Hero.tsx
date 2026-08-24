import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Clock3,
  Mail,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function DashboardStat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{title}</p>
        {icon}
      </div>

      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

function WorkflowStep({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-background p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}

function WorkflowLine() {
  return <div className="ml-7 h-4 border-l border-dashed" />;
}

function Activity({
  title,
  email,
  time,
}: {
  title: string;
  email: string;
  time: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{email}</p>
      </div>

      <span className="whitespace-nowrap text-xs text-muted-foreground">
        {time}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:pb-28 lg:pt-30">
        {/* Hero text */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Turn your leads into customers with{" "}
            <span className="text-primary">AI-powered email automation.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Capture leads, create personalized emails, and automatically follow
            up with prospects while you focus on growing your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              <Link href="/register" className="flex items-center">
                Start for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          {/* <p className="mt-4 text-sm text-muted-foreground">
            No credit card required.
          </p> */}
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto mt-16 max-w-5xl">
          <Card className="overflow-hidden shadow-2xl ">
            <div className="border-b bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              </div>
            </div>

            <CardContent className="p-0">
              <div className="grid min-h-[400px] md:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r bg-muted/20 p-5 md:block">
                  <div className="space-y-2">
                    {[
                      "Dashboard",
                      "Leads",
                      "Automations",
                      "Sequences",
                      "Templates",
                      "Analytics",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-sm ${
                          index === 0
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">Good morning 👋</h2>

                      <p className="text-sm text-muted-foreground">
                        Here&apos;s what&aposp-;s happening with your emails.
                      </p>
                    </div>

                    <Button size="sm">Create automation</Button>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <DashboardStat
                      title="Total Leads"
                      value="1,248"
                      icon={<Users className="h-4 w-4" />}
                    />

                    <DashboardStat
                      title="Emails Sent"
                      value="8,432"
                      icon={<Mail className="h-4 w-4" />}
                    />

                    <DashboardStat
                      title="Open Rate"
                      value="64.8%"
                      icon={<Zap className="h-4 w-4" />}
                    />

                    <DashboardStat
                      title="Replies"
                      value="18.4%"
                      icon={<Bot className="h-4 w-4" />}
                    />
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <Card>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />

                          <h3 className="font-semibold">Active Automation</h3>
                        </div>

                        <div className="mt-5 space-y-4">
                          <WorkflowStep
                            icon={<Users className="h-4 w-4" />}
                            title="New lead captured"
                          />

                          <WorkflowLine />

                          <WorkflowStep
                            icon={<Bot className="h-4 w-4" />}
                            title="AI generates personalized email"
                          />

                          <WorkflowLine />

                          <WorkflowStep
                            icon={<Mail className="h-4 w-4" />}
                            title="Email automatically sent"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-primary" />

                          <h3 className="font-semibold">Recent Activity</h3>
                        </div>

                        <div className="mt-5 space-y-4">
                          <Activity
                            title="Welcome email sent"
                            email="john@example.com"
                            time="2 min ago"
                          />

                          <Activity
                            title="Follow-up email sent"
                            email="sarah@example.com"
                            time="18 min ago"
                          />

                          <Activity
                            title="New lead captured"
                            email="michael@example.com"
                            time="42 min ago"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
