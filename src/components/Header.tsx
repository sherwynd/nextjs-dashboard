import { Bell } from "lucide-react";
import { ThemeButton } from "./ThemeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TemporarySidebar from "./TemporarySidebar";

export function Header() {
  return (
    <div className="navbar flex h-16 items-center justify-between bg-white p-4 shadow-xl dark:bg-gray-800">
      <TemporarySidebar />
      <div className="right-navbar-part flex items-center gap-x-3">
        <Bell />
        <ThemeButton />
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
