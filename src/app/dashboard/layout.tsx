import DashboardHeader from "../_component/DashboardComponent/DashboardHeader";
import Sidebar from "../_component/DashboardComponent/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
