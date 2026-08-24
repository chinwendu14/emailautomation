import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="border-t bg-muted/20 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Sparkles className="mx-auto h-10 w-10" />

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
          Ready to automate your emails?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Stop spending hours manually following up with leads. Let AI and
          automation do the repetitive work for you.
        </p>

        <Link
          href="/register"
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
        >
          Start for free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
