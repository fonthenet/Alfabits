"use client"

import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
