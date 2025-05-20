"use client";

import { AuthProvider } from "@/context/authContext";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiHome, FiUsers } from "react-icons/fi";
import { MdArticle, MdOutlineSubscriptions } from "react-icons/md";
import { MenuItemAdmin } from "@/interface";
import components from "@/components";
import {
  FaAddressCard,
  FaPeopleArrows,
  FaRegCalendarAlt,
} from "react-icons/fa";

const menuItemsAdmin: MenuItemAdmin[] = [
  { name: "Dashboard", icon: <FiHome />, path: "/admin" },
  {
    name: "Calendar",
    icon: <FaRegCalendarAlt />,
    path: "/admin/calendar",
  },
  { name: "Team", icon: <FaPeopleArrows />, path: "/admin/team" },
  { name: "Address", icon: <FaAddressCard />, path: "/admin/address" },
  { name: "User", icon: <FiUsers />, path: "/admin/user" },
  {
    name: "Subscription",
    icon: <MdOutlineSubscriptions />,
    path: "/admin/subscription",
  },
  { name: "Blogs", icon: <MdArticle />, path: "/admin/blog" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/admin/auth");

  if (isAuthRoute) {
    return (
      <AuthProvider>
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 flex">
          <components.Sidebar
            menuItems={menuItemsAdmin}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div
            className={`flex-1 flex flex-col ${sidebarOpen ? "ml-64" : "ml-20"
              } transition-all duration-300`}
          >
            <components.HeaderAdmin />
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </AuthProvider>
    );
  }
}
