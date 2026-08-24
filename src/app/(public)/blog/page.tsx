"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, Mail, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import {
  BLOG_ROUTE,
  CONTACT_ROUTE,
  REGISTER_ROUTE,
} from "@/constant/route.constant";

const featuredPost = {
  slug: "how-ai-is-transforming-email-automation",
  title: "How AI Is Transforming Email Automation for Modern Businesses",
  description:
    "Discover how artificial intelligence is helping businesses automate repetitive email tasks, improve response times, and create smarter customer communication workflows.",
  category: "AI & Automation",
  date: "August 20, 2026",
  readTime: "6 min read",
};

const blogPosts = [
  {
    slug: "7-ways-ai-can-save-your-team-hours-every-week",
    title: "7 Ways AI Can Save Your Team Hours Every Week",
    description:
      "Learn how AI-powered automation can eliminate repetitive tasks and give your team more time to focus on important work.",
    category: "Productivity",
    date: "August 18, 2026",
    readTime: "5 min read",
  },
  {
    slug: "the-complete-guide-to-email-automation",
    title: "The Complete Guide to Email Automation",
    description:
      "A practical guide to understanding email automation and how businesses can use it to build faster and more reliable workflows.",
    category: "Email Automation",
    date: "August 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "why-businesses-are-moving-from-manual-to-ai-workflows",
    title: "Why Businesses Are Moving From Manual to AI Workflows",
    description:
      "Manual processes slow businesses down. Explore why more teams are adopting AI-powered workflows to improve efficiency.",
    category: "AI & Automation",
    date: "August 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-to-build-a-smarter-customer-support-workflow",
    title: "How to Build a Smarter Customer Support Workflow",
    description:
      "Discover practical ways to automate customer support emails while maintaining a personalized experience.",
    category: "Customer Support",
    date: "August 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "email-productivity-work-smarter-not-harder",
    title: "Email Productivity: Work Smarter, Not Harder",
    description:
      "Simple strategies for reducing email overload and creating a more productive communication workflow.",
    category: "Productivity",
    date: "August 7, 2026",
    readTime: "4 min read",
  },
  {
    slug: "5-email-tasks-you-should-automate-today",
    title: "5 Email Tasks You Should Automate Today",
    description:
      "From sorting messages to generating responses, discover five repetitive email tasks that are perfect for automation.",
    category: "Automation",
    date: "August 4, 2026",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "AI & Automation",
  "Email Automation",
  "Productivity",
  "Customer Support",
  "Automation",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              MailFlowAI Blog
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ideas for a{" "}
              <span className="text-primary">smarter workflow.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Explore insights, tips, and practical strategies for using AI and
              automation to improve the way your business works.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />

            <h2 className="text-xl font-bold">Featured Article</h2>
          </div>

          <Card className="overflow-hidden border-primary/10 shadow-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-background p-10">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-background shadow-lg">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featuredPost.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {featuredPost.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {featuredPost.date}
                    </span>

                    <span>{featuredPost.readTime}</span>
                  </div>

                  <Button className="mt-8 w-fit">
                    <Link
                      className="flex items-center"
                      href={`${BLOG_ROUTE}/${featuredPost.slug}`}
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {selectedCategory === "All"
                ? "Learn, automate, grow."
                : `${selectedCategory} Articles`}
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              {selectedCategory === "All"
                ? "Practical ideas and insights to help your team make better use of AI and automation."
                : `Explore our latest articles about ${selectedCategory.toLowerCase()}.`}
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image Placeholder */}
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-background">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background shadow-sm">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold leading-7">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {post.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>

                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`${BLOG_ROUTE}/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed py-16 text-center">
              <Mail className="mx-auto h-10 w-10 text-muted-foreground" />

              <h3 className="mt-4 text-xl font-semibold">No articles found</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                We don&apos;t have any articles in this category yet.
              </p>

              <Button
                className="mt-6"
                onClick={() => setSelectedCategory("All")}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Stay ahead with smarter automation
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get practical AI and automation tips, product updates, and helpful
            insights delivered to your inbox.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to automate your workflow?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Turn the ideas you read about into real results with MailFlowAI.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              <Link className="flex items-center" href={REGISTER_ROUTE}>
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg">
              <Link href={CONTACT_ROUTE}>Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
