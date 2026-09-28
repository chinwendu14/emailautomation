// import ClickRate from "../_component/DashboardComponent/Overview/ClickRate";
// import EmailDelivered from "../_component/DashboardComponent/Overview/EmailDelivered";
// import EmailSent from "./_component/Overview/EmailSent";
// import OpenRate from "./_component/Overview/OpenRate";

import ClickRate from "./_component/overview/ClickRate";
import EmailDelivered from "./_component/overview/EmailDelivered";
import EmailPerformance from "./_component/overview/EmailPerformance";

import EmailSent from "./_component/overview/EmailSent";
import OpenRate from "./_component/overview/OpenRate";
import RecentActivity from "./_component/overview/RecentActivity";

const Page = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Get an overview of your email activity and performance.
        </p>
      </div>

      {/* Overview */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EmailSent />
        <EmailDelivered />
        <OpenRate />
        <ClickRate />
      </div>
      <RecentActivity />
      {/* Email Performance */}
      <EmailPerformance />
    </div>
  );
};

export default Page;
