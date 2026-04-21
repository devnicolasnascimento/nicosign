import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Headerr() {
  return (
    <header>
      <nav className="flex justify-between items-center p-5">
        <h1>Nicosignn</h1>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-10 h-10">
                <div className="flex flex-col gap-0.5">
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50 relative right-5 top-3" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Menu principal</DropdownMenuLabel>
                <DropdownMenuItem>Início</DropdownMenuItem>
                <DropdownMenuItem>Saiba mais</DropdownMenuItem>
                <DropdownMenuItem>Contato</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:block md:flex md:gap-5">
          <Link href={""}>
            <h1>Início</h1>
          </Link>

          <Link href={""}>
            <h1>Saiba mais</h1>
          </Link>

          <Link href={""}>
            <h1>Contato</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}
