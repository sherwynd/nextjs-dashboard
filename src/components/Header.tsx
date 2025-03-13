import { Bell } from "lucide-react";
import { ThemeButton } from "./ThemeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <div className="navbar bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow-xl h-16">
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
