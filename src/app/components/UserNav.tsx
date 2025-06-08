import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <img
            src="https://cravingsfinefood.ca/wp-content/uploads/2023/05/default.png"
            alt="Image of the user"
            className="rounded-full h-8 w-8 hidden lg:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>Register</DropdownMenuItem>
        <DropdownMenuItem>Login</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
