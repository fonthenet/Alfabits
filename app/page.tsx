"use client"

import { LocaleProvider } from "@/lib/locale-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ProcessSection } from "@/components/sections/process"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesPreview />
          <ProcessSection />
          <PortfolioPreview />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LocaleProvider>
  )
}
