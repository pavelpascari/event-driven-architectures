import { Inter as FontSans } from "next/font/google"

import "@/styles/globals.css"


import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const BaseShell: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning className={cn(
          "bg-background relative min-h-screen font-sans antialiased",
          fontSans.variable
        )}>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

        
          {children}
          </main>
      </body>
    </html>
  )
}