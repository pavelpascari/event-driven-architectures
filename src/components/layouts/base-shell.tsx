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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background relative min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >

        
          {children}
          
      </body>
    </html>
  )
}