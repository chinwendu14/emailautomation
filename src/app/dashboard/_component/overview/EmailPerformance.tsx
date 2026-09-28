import { BarChart3 } from "lucide-react";

const EmailPerformance = () => {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Email Performance
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Track how your emails are performing.
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <BarChart3 className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Empty State */}
      <div className="flex min-h-[240px] flex-col items-center justify-center px-5 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <BarChart3 className="h-6 w-6 text-gray-400" />
        </div>

        <h3 className="mt-4 text-sm font-semibold text-gray-900">
          No email performance data yet
        </h3>

        <p className="mt-1 max-w-sm text-sm text-gray-500">
          Send your first email to start seeing delivery, open, and click
          performance here.
        </p>
      </div>
    </div>
  );
};

export default EmailPerformance;
