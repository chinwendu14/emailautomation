// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Settings } from "lucide-react";

// import { Logo } from "@/assets";
// import { navigation } from "./navigationLink";

// const Sidebar = () => {
//   const pathname = usePathname();

//   return (
//     <aside className="hidden  w-64 flex-col border-r bg-primary md:flex">
//       {/* Logo */}
//       {/* <div className="flex h-16 py-6 my-6 justify-center items-center border-b border-white/10 ">
//         <Link href="/dashboard" aria-label="MailFlowAI dashboard">
//           <Image
//             src={Logo}
//             alt="MailFlowAI"
//             width={125}
//             height={40}
//             priority
//             className="h-20 w-50 my-8"
//           />
//         </Link>
//       </div> */}

//       <div className="flex h-16 items-center border-b border-white/10 px-6">
//         {" "}
//         <Link href="/dashboard" className="text-xl font-bold text-white">
//           {" "}
//           MailFlowAI{" "}
//         </Link>{" "}
//       </div>

//       {/* Navigation */}
//       <nav className=" px-4 py-6">
//         {navigation.map((item) => {
//           const Icon = item.icon;

//           const isActive =
//             pathname === item.href || pathname.startsWith(`${item.href}/`);

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
//                 isActive
//                   ? "bg-white/15 text-white"
//                   : "text-white/80 hover:bg-white/10 hover:text-white"
//               }`}
//             >
//               <Icon className="h-5 w-5" />

//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Settings */}
//       <div className="border-t border-white/10 p-4">
//         <Link
//           href="/dashboard/settings"
//           className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
//             pathname.startsWith("/dashboard/settings")
//               ? "bg-white/15 text-white"
//               : "text-white/80 hover:bg-white/10 hover:text-white"
//           }`}
//         >
//           <Settings className="h-5 w-5" />

//           <span>Settings</span>
//         </Link>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";

import { navigation } from "./navigationLink";

const Sidebar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/auth/login",
    });
  };

  return (
    <aside className="hidden w-64 flex-col border-r bg-primary md:flex">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <Link href="/dashboard" className="text-xl font-bold text-white">
          MailFlowAI
        </Link>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto border-t border-white/10 p-4">
        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
            pathname.startsWith("/dashboard/settings")
              ? "bg-white/15 text-white"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Settings className="h-5 w-5" />

          <span>Settings</span>
        </Link>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-5 w-5" />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
