import React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProviders } from "@/components/app-providers"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Alfabits | Digital Products That Scale",
  description:
    "Full-stack web, mobile & AI solutions engineered for Algerian businesses ready to lead in the digital space. Based in Los Angeles, serving Algeria.",
  keywords: [
    "web development",
    "mobile apps",
    "AI solutions",
    "Algeria",
    "digital agency",
    "Alfabits",
  ],
  openGraph: {
    title: "Alfabits | Digital Products That Scale",
    description:
      "Full-stack web, mobile & AI solutions for Algerian businesses.",
    url: "https://alfabits.net",
    siteName: "Alfabits",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${tajawal.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppProviders>{children}</AppProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
