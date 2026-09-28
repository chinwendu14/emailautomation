import { Send } from "lucide-react";

const EmailSent = () => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Emails Sent</p>

          <h2 className="mt-2 text-2xl font-semibold text-gray-900">0</h2>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Send className="h-5 w-5 text-primary" />
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">No emails sent yet</p>
    </div>
  );
};

export default EmailSent;
