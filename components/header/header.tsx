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
import Image from "next/image"
import Link from "next/link"

export function Headerr() {
  return (
    <header className="bg-white fixed w-full">
      <nav className="flex justify-between items-center p-1.5">
        <Image src="/nico.svg" alt="Logo do site" width={90} height={50}/>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-10 h-10 bg-purple-950 hover:bg-purple-500">
                <div className="flex flex-col gap-0.5">
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50 relative right-5 top-3 bg-purple-950 p-4" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-gray-300 text-center">Menu principal</DropdownMenuLabel>
                <DropdownMenuItem className="text-white font-[poppins] text-[13px]">Início</DropdownMenuItem>
                <DropdownMenuItem className="text-white font-[poppins] text-[13px]">Saiba mais</DropdownMenuItem>
                <DropdownMenuItem className="text-white  font-[poppins] text-[13px]">Contato</DropdownMenuItem>
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
