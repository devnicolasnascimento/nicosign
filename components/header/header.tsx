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
    <header className="fixed w-full bg-white border-2 border-b-purple-600 shadow-black shadow-[0px_0px_10px_0px]">
      <nav className="flex items-center justify-between p-1.5">
        <Image src="/nico.svg" alt="Logo do site" width={70} height={50} />
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-10 w-10 bg-purple-950 hover:bg-purple-500"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                  <div className="h-0.5 w-3 bg-white"></div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="relative top-3 right-5 w-50 bg-purple-950 p-4"
              align="start"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-[13px] text-white">
                  Início
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[13px] text-white">
                  Saiba mais
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[13px] text-white">
                  Contato
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:block md:gap-5 md:pr-5">
          <Link href={"/"}>
            <h1 className="text-[14px]">Início</h1>
          </Link>

          <Link href={"/about"}>
            <h1 className="text-[14px]">Saiba mais</h1>
          </Link>

          <Link href={""}>
            <h1 className="text-[14px]">Contato</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}
