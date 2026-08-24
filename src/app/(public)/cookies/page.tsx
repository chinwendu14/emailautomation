import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="border-b bg-[#1f594f] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
              <Cookie className="h-7 w-7" />
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Cookie Policy
              </h1>
              <p className="mt-2 text-white/80">
                Last updated: August 23, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-8 text-slate-600">
            This Cookie Policy explains how MailFlowAI uses cookies and similar
            technologies when you use our website, application, and services.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help websites remember information about your
            visit, improve functionality, understand how users interact with the
            service, and provide a better experience.
          </p>

          <h2>2. How MailFlowAI Uses Cookies</h2>

          <p>
            MailFlowAI may use cookies and similar technologies for several
            purposes, including:
          </p>

          <ul>
            <li>Keeping you signed in to your account.</li>
            <li>Remembering your preferences and settings.</li>
            <li>Maintaining the security of your account.</li>
            <li>Understanding how users interact with our platform.</li>
            <li>Improving the performance and functionality of MailFlowAI.</li>
            <li>Detecting and preventing fraudulent or abusive activity.</li>
          </ul>

          <h2>3. Types of Cookies We May Use</h2>

          <h3>Essential Cookies</h3>

          <p>
            These cookies are necessary for MailFlowAI to operate correctly.
            They may be used for authentication, security, session management,
            and other essential functionality.
          </p>

          <h3>Preference Cookies</h3>

          <p>
            Preference cookies allow MailFlowAI to remember choices you make,
            such as account settings or other preferences, so that you do not
            have to repeatedly configure them.
          </p>

          <h3>Analytics Cookies</h3>

          <p>
            We may use analytics technologies to understand how visitors use our
            website. This information can help us identify problems, improve our
            services, and understand which features are most useful.
          </p>

          <h3>Security Cookies</h3>

          <p>
            Security-related cookies and similar technologies may be used to
            help protect accounts, detect suspicious activity, and prevent
            unauthorized access.
          </p>

          <h2>4. Third-Party Services</h2>

          <p>
            Some features of MailFlowAI may rely on third-party services. These
            providers may use cookies or similar technologies according to their
            own privacy policies and terms.
          </p>

          <p>
            Third-party services may include analytics, authentication, payment,
            infrastructure, or other technologies that help us provide and
            improve MailFlowAI.
          </p>

          <h2>5. Cookies and Authentication</h2>

          <p>
            When you create an account or sign in to MailFlowAI, cookies or
            similar browser technologies may be used to maintain your
            authenticated session and help keep your account secure.
          </p>

          <p>
            Disabling essential cookies may prevent some parts of MailFlowAI
            from functioning properly.
          </p>

          <h2>6. Managing Cookies</h2>

          <p>
            Most web browsers allow you to control or delete cookies through
            their settings. You can usually configure your browser to reject
            cookies, notify you when a cookie is being used, or delete stored
            cookies.
          </p>

          <p>
            Please note that disabling certain cookies may affect the
            functionality of MailFlowAI or prevent some features from working
            correctly.
          </p>

          <h2>7. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect
            changes to our services, technologies, legal requirements, or
            business practices.
          </p>

          <p>
            When we make changes, we will update the “Last updated” date at the
            top of this page. We encourage you to review this page periodically
            for the latest information.
          </p>

          <h2>8. Contact Us</h2>

          <p>
            If you have questions about this Cookie Policy or how MailFlowAI
            uses cookies, please contact us through our{" "}
            <Link
              href="/contact"
              className="font-medium text-[#1f594f] underline underline-offset-4"
            >
              Contact Us
            </Link>{" "}
            page.
          </p>

          <div className="mt-12 rounded-xl border border-[#1f594f]/20 bg-[#1f594f]/5 p-6">
            <h3 className="mt-0 text-lg font-semibold text-[#1f594f]">
              Related Policies
            </h3>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="font-medium text-[#1f594f] hover:underline"
              >
                Privacy Policy →
              </Link>

              <Link
                href="/terms"
                className="font-medium text-[#1f594f] hover:underline"
              >
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
