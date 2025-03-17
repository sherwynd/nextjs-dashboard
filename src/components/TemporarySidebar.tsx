// import Link from "next/link";
// import {
//   User,
//   Settings,
//   Users,
//   ChartArea,
//   // ChevronLast
// } from "lucide-react";

// import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

// const menuItems = [
//   { name: "Dashboard", icon: <ChartArea />, path: "/" },
//   { name: "Profile", icon: <User />, path: "/profile" },
//   { name: "Settings", icon: <Settings />, path: "/settings" },
//   { name: "Admin", icon: <Users />, path: "/admin" },
// ];
export default function TemporarySidebar() {
  return (
    <div className="flex items-center">
      {/* <Sheet>
        <SheetTrigger className="block sm:hidden">
          <ChevronLast />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <aside
            className={
              "hidden h-screen w-64 overflow-y-auto bg-gray-900 text-white transition-all duration-300 sm:block"
            }
          >
            <nav className="flex h-full flex-col">
              <ul className="flex-1 p-3">
                {menuItems.map((item) => (
                  <Link href={``}>
                    <li
                      key={item.name}
                      className={
                        "flex cursor-pointer items-center gap-4 rounded-md p-3 hover:bg-gray-700"
                      }
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </aside>
        </SheetContent>
      </Sheet> */}
    </div>
  );
}
