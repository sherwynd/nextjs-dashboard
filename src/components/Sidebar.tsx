"use client";

import { useState } from "react";
import { Home, User, Settings, ChevronFirst, ChevronLast } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Home", icon: <Home /> },
  { name: "Profile", icon: <User /> },
  { name: "Settings", icon: <Settings /> },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
        collapsed ? "w-16 md:w-20" : "w-64"
      }`}
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
              className={`flex items-center gap-4 rounded-md p-3 hover:bg-gray-700 ${
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
