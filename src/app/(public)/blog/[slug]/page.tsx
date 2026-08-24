import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import NavbarLanding from "@/app/_component/LandingPageComponent/NavbarLanding";
import Footer from "@/app/_component/LandingPageComponent/Footer";
import { BLOG_ROUTE, REGISTER_ROUTE } from "@/constant/route.constant";

const blogPosts = {
  "how-ai-is-transforming-email-automation": {
    title: "How AI Is Transforming Email Automation for Modern Businesses",
    category: "AI & Automation",
    date: "August 20, 2026",
    readTime: "6 min read",
    description:
      "Discover how artificial intelligence is helping businesses automate repetitive email tasks, improve response times, and create smarter customer communication workflows.",
    content: [
      {
        heading: "The future of email automation",
        paragraphs: [
          "Email remains one of the most important communication channels for businesses. However, managing hundreds or even thousands of emails every day can become time-consuming and difficult to scale.",
          "Artificial intelligence is changing the way businesses approach email management. Instead of relying entirely on manual processes, teams can use AI to understand messages, organize conversations, generate responses, and automate repetitive tasks.",
        ],
      },
      {
        heading: "What is AI-powered email automation?",
        paragraphs: [
          "AI-powered email automation combines traditional workflow automation with artificial intelligence. Traditional automation follows predefined rules, while AI can understand the context and intent behind an email and make more intelligent decisions.",
          "For example, an AI-powered system can recognize whether an incoming message is a customer complaint, sales inquiry, support request, or general question and then trigger the appropriate workflow.",
        ],
      },
      {
        heading: "1. Faster email responses",
        paragraphs: [
          "Customers expect businesses to respond quickly. Slow responses can lead to frustrated customers and missed opportunities.",
          "AI can help teams generate suggested responses, identify urgent messages, and automatically handle simple questions. This allows employees to spend more time on conversations that require human attention.",
        ],
      },
      {
        heading: "2. Reduced repetitive work",
        paragraphs: [
          "Many email tasks are repetitive. Employees may spend hours every week sorting messages, forwarding emails, sending follow-ups, and responding to frequently asked questions.",
          "Automation can handle many of these repetitive processes automatically, helping teams save valuable time.",
        ],
      },
      {
        heading: "3. Better organization",
        paragraphs: [
          "AI can help categorize and prioritize incoming messages based on their content and importance.",
          "Instead of manually going through a crowded inbox, teams can have important conversations highlighted while less urgent messages are organized automatically.",
        ],
      },
      {
        heading: "4. Improved customer experience",
        paragraphs: [
          "Automation does not have to mean losing the human touch. When used correctly, AI can help businesses respond faster while allowing employees to focus on conversations that need empathy, creativity, and human judgment.",
          "The result is a customer experience that is both faster and more personalized.",
        ],
      },
      {
        heading: "The role of MailFlowAI",
        paragraphs: [
          "MailFlowAI is designed to help businesses simplify their email workflows using AI-powered automation.",
          "By reducing repetitive tasks and helping teams manage their email more efficiently, MailFlowAI gives businesses more time to focus on customers and growth.",
        ],
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "AI-powered email automation is becoming an important part of modern business operations. Businesses that adopt intelligent automation can reduce repetitive work, respond faster, and create more efficient workflows.",
          "The goal is not to replace people. The goal is to give people better tools so they can spend less time on repetitive tasks and more time doing meaningful work.",
        ],
      },
    ],
  },

  "7-ways-ai-can-save-your-team-hours-every-week": {
    title: "7 Ways AI Can Save Your Team Hours Every Week",
    category: "Productivity",
    date: "August 18, 2026",
    readTime: "5 min read",
    description:
      "Learn how AI-powered automation can eliminate repetitive tasks and give your team more time to focus on important work.",
    content: [
      {
        heading: "AI and workplace productivity",
        paragraphs: [
          "Businesses spend a significant amount of time on repetitive tasks. Email management, data entry, follow-ups, scheduling, and customer communication can all consume valuable working hours.",
          "AI automation can help businesses reduce this workload and allow employees to focus on higher-value activities.",
        ],
      },
      {
        heading: "1. Automate repetitive emails",
        paragraphs: [
          "AI can help generate responses to common questions and route messages to the right team members.",
        ],
      },
      {
        heading: "2. Automate follow-ups",
        paragraphs: [
          "Instead of manually remembering every follow-up, automated workflows can remind your team or send appropriate follow-up messages.",
        ],
      },
      {
        heading: "3. Organize your inbox",
        paragraphs: [
          "AI can categorize incoming emails based on their content, making it easier to identify important conversations.",
        ],
      },
      {
        heading: "4. Prioritize important messages",
        paragraphs: [
          "AI can help identify urgent or high-value conversations so your team can respond to them first.",
        ],
      },
      {
        heading: "5. Generate email drafts",
        paragraphs: [
          "AI can create draft responses that employees can review, personalize, and send.",
        ],
      },
      {
        heading: "6. Automate customer support workflows",
        paragraphs: [
          "Frequently asked questions and simple support requests can be handled automatically, allowing support teams to focus on more complex problems.",
        ],
      },
      {
        heading: "7. Reduce administrative work",
        paragraphs: [
          "By connecting different workflows, AI automation can reduce the amount of manual administrative work your team performs every day.",
        ],
      },
    ],
  },

  "the-complete-guide-to-email-automation": {
    title: "The Complete Guide to Email Automation",
    category: "Email Automation",
    date: "August 15, 2026",
    readTime: "8 min read",
    description:
      "A practical guide to understanding email automation and how businesses can use it to build faster and more reliable workflows.",
    content: [
      {
        heading: "What is email automation?",
        paragraphs: [
          "Email automation is the process of using technology to automatically perform email-related tasks based on predefined triggers, rules, or intelligent AI decisions.",
        ],
      },
      {
        heading: "Why businesses use email automation",
        paragraphs: [
          "Businesses use email automation to save time, improve consistency, respond faster, and reduce repetitive manual work.",
        ],
      },
      {
        heading: "Common email automation workflows",
        paragraphs: [
          "Common workflows include welcome emails, customer support responses, lead follow-ups, notifications, reminders, and internal email routing.",
        ],
      },
      {
        heading: "Combining automation with AI",
        paragraphs: [
          "AI makes automation more flexible because it can understand the context of messages rather than relying only on simple rules.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Start by identifying repetitive email tasks in your business. Choose one workflow that consumes significant time and automate it first. Once the process works reliably, expand automation to other areas.",
        ],
      },
    ],
  },

  "why-businesses-are-moving-from-manual-to-ai-workflows": {
    title: "Why Businesses Are Moving From Manual to AI Workflows",
    category: "AI & Automation",
    date: "August 12, 2026",
    readTime: "6 min read",
    description:
      "Manual processes slow businesses down. Explore why more teams are adopting AI-powered workflows to improve efficiency.",
    content: [
      {
        heading: "The problem with manual workflows",
        paragraphs: [
          "Manual processes often require employees to perform the same tasks repeatedly. As a business grows, these processes become harder to manage.",
        ],
      },
      {
        heading: "AI workflows are changing business operations",
        paragraphs: [
          "AI allows businesses to automate tasks while also making decisions based on information contained in emails and other business data.",
        ],
      },
      {
        heading: "More time for meaningful work",
        paragraphs: [
          "When repetitive work is automated, employees can spend more time serving customers, developing products, and growing the business.",
        ],
      },
    ],
  },

  "how-to-build-a-smarter-customer-support-workflow": {
    title: "How to Build a Smarter Customer Support Workflow",
    category: "Customer Support",
    date: "August 10, 2026",
    readTime: "7 min read",
    description:
      "Discover practical ways to automate customer support emails while maintaining a personalized experience.",
    content: [
      {
        heading: "Start with your most common questions",
        paragraphs: [
          "The best place to start is by identifying questions your support team receives repeatedly.",
        ],
      },
      {
        heading: "Create automated responses",
        paragraphs: [
          "AI can help generate appropriate responses to simple customer questions while keeping the conversation professional and helpful.",
        ],
      },
      {
        heading: "Know when a human is needed",
        paragraphs: [
          "Good automation should know when to hand a conversation to a human. Complex complaints, sensitive issues, and unusual requests should be escalated.",
        ],
      },
    ],
  },

  "email-productivity-work-smarter-not-harder": {
    title: "Email Productivity: Work Smarter, Not Harder",
    category: "Productivity",
    date: "August 7, 2026",
    readTime: "4 min read",
    description:
      "Simple strategies for reducing email overload and creating a more productive communication workflow.",
    content: [
      {
        heading: "Reduce email overload",
        paragraphs: [
          "Email can easily become one of the biggest distractions during the workday. Creating a structured workflow can help your team stay focused.",
        ],
      },
      {
        heading: "Automate repetitive communication",
        paragraphs: [
          "Automating repetitive messages and follow-ups can significantly reduce the amount of time employees spend inside their inboxes.",
        ],
      },
      {
        heading: "Focus on important conversations",
        paragraphs: [
          "The goal of email productivity is not to process more emails. It is to spend more time on the emails that actually matter.",
        ],
      },
    ],
  },

  "5-email-tasks-you-should-automate-today": {
    title: "5 Email Tasks You Should Automate Today",
    category: "Automation",
    date: "August 4, 2026",
    readTime: "5 min read",
    description:
      "From sorting messages to generating responses, discover five repetitive email tasks that are perfect for automation.",
    content: [
      {
        heading: "1. Sorting incoming emails",
        paragraphs: [
          "Automatically categorizing emails can help your team find important messages faster.",
        ],
      },
      {
        heading: "2. Sending follow-ups",
        paragraphs: [
          "Automated follow-ups make sure important conversations do not get forgotten.",
        ],
      },
      {
        heading: "3. Responding to common questions",
        paragraphs: [
          "Frequently asked questions can often be answered automatically using AI-powered responses.",
        ],
      },
      {
        heading: "4. Email notifications",
        paragraphs: [
          "Automate notifications so the right team members are alerted when important events happen.",
        ],
      },
      {
        heading: "5. Lead communication",
        paragraphs: [
          "AI automation can help businesses follow up with leads consistently without requiring employees to manually track every conversation.",
        ],
      },
    ],
  },
};

type BlogPost = (typeof blogPosts)[keyof typeof blogPosts];

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts[slug as keyof typeof blogPosts] as
    | BlogPost
    | undefined;

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <NavbarLanding />

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Article not found</h1>

            <p className="mt-4 text-muted-foreground">
              The article you are looking for does not exist.
            </p>

            <Button className="mt-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <NavbarLanding />

      {/* Article Header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-24 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-10">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-muted to-background sm:h-64">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-background shadow-lg">
              <Mail className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="space-y-10">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.heading}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Article CTA */}
          <div className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Ready to automate your emails?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Start using MailFlowAI to reduce repetitive email work and build
              smarter workflows.
            </p>

            <Button className="mt-6">
              <Link className="flex items-center" href={REGISTER_ROUTE}>
                Get Started with MailFlowAI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 border-t pt-8">
            <Button variant="outline">
              <Link className="flex items-center" href={BLOG_ROUTE}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
