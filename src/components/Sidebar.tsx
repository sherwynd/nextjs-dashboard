"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  // User,
  // Settings,
  Users,
  ChartArea,
  ChevronLast,
  ChevronFirst,
} from "lucide-react";

import { Button } from "./ui/button";

const menuItems = [
  { name: "Dashboard", icon: <ChartArea />, path: "/" },
  // { name: "Profile", icon: <User />, path: "/profile" },
  // { name: "Settings", icon: <Settings />, path: "/settings" },
  { name: "Admin", icon: <Users />, path: "/admin" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <aside
      className={`hidden bg-gray-900 text-white transition-all duration-300 sm:block ${
        collapsed ? "w-16 md:w-20" : "w-64"
      } h-screen overflow-y-auto`}
    >
      <nav className="flex h-full flex-col">
        {/* Toggle Button */}
        <div
          className={`flex h-16 p-4 ${
            collapsed ? `justify-center` : `justify-between`
          }`}
        >
          {!collapsed && <h1 className="text-xl font-bold">Logo</h1>}
          <Button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-md bg-gray-700 p-2"
          >
            {collapsed ? <ChevronLast /> : <ChevronFirst />}
          </Button>
        </div>

        {/* Menu */}
        <ul className="flex-1 p-3">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`flex cursor-pointer items-center gap-4 rounded-md p-3 hover:bg-gray-700 ${
                collapsed && "justify-center"
              }`}
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
