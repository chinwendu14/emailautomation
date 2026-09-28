"use client";

import Link from "next/link";
import { Bell, Plus, Settings } from "lucide-react";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  const { data: session } = useSession();

  const userName = session?.user?.name || "User";
  const userEmail = session?.user?.email || "";

  const userInitials = userName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex min-h-16 items-center justify-between gap-6 border-b bg-white px-6 py-3">
      {/* Welcome */}
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          Welcome back, {userName}
        </h1>

        <p className="text-sm text-gray-500">
          Here&apos;s what&apos;s happening with your emails today.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* Create */}
        <Button className="hidden items-center gap-2 bg-primary hover:bg-primary/90 sm:flex">
          <Plus className="h-4 w-4" />
          Create
        </Button>

        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </Link>

        {/* User */}
        <Link
          href="/dashboard/settings"
          className="ml-1 flex items-center gap-2 rounded-full p-1 pr-2 transition hover:bg-gray-100"
          aria-label="Profile settings"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src="" alt={userName} />

            <AvatarFallback className="bg-primary text-sm font-medium text-white">
              {userInitials}
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left xl:block">
            <p className="max-w-[120px] truncate text-sm font-medium text-gray-900">
              {userName}
            </p>

            <p className="max-w-[150px] truncate text-xs text-gray-500">
              {userEmail}
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
