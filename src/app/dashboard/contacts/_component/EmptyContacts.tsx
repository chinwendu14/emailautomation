import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmptyContacts = () => {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border bg-white px-6 py-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Users className="h-7 w-7 text-primary" />
      </div>

      <h2 className="mt-5 text-lg font-semibold text-gray-900">
        No contacts yet
      </h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        Add your first contact to start building your audience and sending
        emails with MailFlowAI.
      </p>

      <Button className="mt-5 gap-2 bg-primary hover:bg-primary/90">
        <Users className="h-4 w-4" />
        Add Contact
      </Button>
    </div>
  );
};

export default EmptyContacts;
