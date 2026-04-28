import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Headerr } from "@/components/header/header"
import type { Metadata } from "next"
import { url } from "node:inspector"

export const metadata: Metadata = {
  title: "Nicosign | Design criativo",
  description:
    "Design criativo voltado para identidade visual, branding e soluções estratégicas que fortalecem marcas e destacam negócios no digital.",
  openGraph: {
    title: "Nicosign | Design criativo",
    description:
      "Design criativo voltado para identidade visual, branding e soluções estratégicas que fortalecem marcas e destacam negócios no digital.",
    url: "https://nicosign.vercel.app",
    images: [
      {
        url: "/nico.svg",
        width: 100,
        height: 100,
        alt: "Nicosign",
      },
    ],
  },
}

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

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
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        instrumentSerif.variable
      )}
    >
      <body className="overflow-x-hidden bg-[#100029]">
        <Headerr />
        <main className="pt-46">{children}</main>
      </body>
    </html>
  )
}
