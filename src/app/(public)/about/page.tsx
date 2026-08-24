import {
  Bot,
  Mail,
  Zap,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Lightbulb,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";

export default function AboutPage() {
  return (
    <main>
      <NavbarLanding />

      {/* Hero / Introduction */}
      <section>
        <div className="bg-muted px-6 py-34">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built to help businesses save time.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Managing leads and following up with customers can take hours
              every week. MailFlow AI was created to make that process easier.
              Our platform combines automation and artificial intelligence to
              help businesses create personalized email workflows without
              manually managing every message.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl">
              Instead of spending your time sending repetitive emails, you can
              focus on your customers, your team, and growing your business.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Smarter email automation for modern businesses
            </h2>

            <p className="mt-4 text-muted-foreground">
              MailFlow AI brings AI and automation together to make customer
              communication easier, faster, and more effective.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* AI Powered */}
            <div className="group rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Bot className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">AI-Powered</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Create personalized email content that feels natural, relevant,
                and tailored to every customer.
              </p>
            </div>

            {/* Automated Workflows */}
            <div className="group rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Automated Workflows
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Build automated workflows that handle follow-ups, reminders, and
                repetitive email tasks for you.
              </p>
            </div>

            {/* Better Communication */}
            <div className="group rounded-2xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Better Communication
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Keep your leads and customers engaged with timely, consistent,
                and personalized communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Target className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Mission
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Making meaningful communication easier.
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  Our mission is to help businesses simplify their communication
                  by combining artificial intelligence with powerful automation
                  tools.
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                  We want businesses of every size to spend less time on
                  repetitive tasks and more time building meaningful
                  relationships with their customers.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Eye className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Vision
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  A world where businesses communicate smarter.
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  Our vision is to create a future where businesses can use
                  intelligent automation to communicate with customers more
                  efficiently and personally.
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                  We believe automation should not make communication feel
                  robotic. It should give businesses more time to focus on what
                  matters most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Core Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The principles behind MailFlow AI
            </h2>

            <p className="mt-4 text-muted-foreground">
              These values guide how we build our products, serve our customers,
              and grow as a company.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Innovation */}
            <div className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Innovation</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We continuously explore better ways to use AI and automation to
                solve real business problems.
              </p>
            </div>

            {/* Customer First */}
            <div className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Customer First</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We build with our customers in mind and focus on creating
                products that genuinely make their work easier.
              </p>
            </div>

            {/* Trust */}
            <div className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Trust</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We believe businesses deserve reliable tools, transparent
                communication, and responsible technology.
              </p>
            </div>

            {/* Empathy */}
            <div className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">Empathy</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We believe technology should support people and create better,
                more meaningful customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted px-6 py-20 ">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Build better customer relationships with MailFlow AI.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 opacity-90">
            Automate your emails, save time, and focus on growing your business.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
