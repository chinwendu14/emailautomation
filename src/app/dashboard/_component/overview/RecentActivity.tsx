import { CheckCircle2, Mail, UserPlus, Workflow } from "lucide-react";

const RecentActivity = () => {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest activity on MailFlowAI.
          </p>
        </div>
      </div>

      {/* Activity List */}
      <div className="divide-y">
        {/* Email Sent */}
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-4 w-4 text-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Email sent</p>

            <p className="mt-1 text-xs text-gray-500">No email activity yet.</p>
          </div>

          <span className="text-xs text-gray-400">Just now</span>
        </div>

        {/* Contact Added */}
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <UserPlus className="h-4 w-4 text-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Contact added</p>

            <p className="mt-1 text-xs text-gray-500">
              No contacts have been added yet.
            </p>
          </div>

          <span className="text-xs text-gray-400">Just now</span>
        </div>

        {/* Automation */}
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Workflow className="h-4 w-4 text-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Automation activity
            </p>

            <p className="mt-1 text-xs text-gray-500">
              No automations have been created yet.
            </p>
          </div>

          <span className="text-xs text-gray-400">Just now</span>
        </div>

        {/* Template */}
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Template activity
            </p>

            <p className="mt-1 text-xs text-gray-500">
              No templates have been created yet.
            </p>
          </div>

          <span className="text-xs text-gray-400">Just now</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
