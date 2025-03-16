import { Bell, ChevronLast } from "lucide-react";
import { ThemeButton } from "./ThemeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

export function Header() {
  return (
    <div className="navbar flex h-16 items-center justify-between bg-white p-4 shadow-xl dark:bg-gray-800">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger className="block sm:hidden">
            <ChevronLast />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h1>Test</h1>
      </div>
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
