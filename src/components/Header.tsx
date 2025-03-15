import { Bell } from "lucide-react";
import { ThemeButton } from "./ThemeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <div className="navbar flex h-16 items-center justify-between bg-white p-4 shadow-xl dark:bg-gray-800">
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <Bell />
        <ThemeButton />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
