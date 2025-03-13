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
      <nav className="h-full flex flex-col">
        {/* Toggle Button */}
        <div
          className={`p-4 flex h-16 ${
            collapsed ? `justify-center` : `justify-between`
          }`}
        >
          {!collapsed && <h1 className="text-xl font-bold">Logo</h1>}
          <Button
            onClick={() => setCollapsed(!collapsed)}
            className="bg-gray-700 p-2 rounded-md"
          >
            {collapsed ? <ChevronLast /> : <ChevronFirst />}
          </Button>
        </div>

        {/* Menu */}
        <ul className="flex-1 p-3">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-4 p-3 hover:bg-gray-700 rounded-md ${
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
