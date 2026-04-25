import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import { Headerr } from "@/components/header/header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable, instrumentSerif.variable)}
    >
      <body className="bg-[#100029]">
        <Headerr />
        <main className="pt-46">
          {children}
        </main>
        
      </body>
    </html>
  )
}
