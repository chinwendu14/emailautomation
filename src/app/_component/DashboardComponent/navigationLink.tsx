import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Mail,
  Users,
  Workflow,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Emails",
    href: "/dashboard/emails",
    icon: Mail,
  },
  {
    name: "Automations",
    href: "/dashboard/automations",
    icon: Workflow,
  },
  {
    name: "Contacts",
    href: "/dashboard/contacts",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: FileText,
  },
];
