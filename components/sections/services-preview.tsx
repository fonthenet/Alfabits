"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Smartphone,
  Brain,
  Zap,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react"

export function ServicesPreview() {
  const { t, dir } = useLocale()

  const services = [
    {
      icon: Globe,
      title: t.services.webDev.title,
      desc: t.services.webDev.desc,
      href: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: t.services.mobileApps.title,
      desc: t.services.mobileApps.desc,
      href: "/services/mobile-apps",
    },
    {
      icon: Brain,
      title: t.services.aiSolutions.title,
      desc: t.services.aiSolutions.desc,
      href: "/services/ai-solutions",
    },
    {
      icon: Zap,
      title: t.services.automations.title,
      desc: t.services.automations.desc,
      href: "/services/automations",
    },
    {
      icon: Palette,
      title: t.services.uiux.title,
      desc: t.services.uiux.desc,
      href: "/services/ui-ux-design",
    },
    {
      icon: BarChart3,
      title: t.services.consulting.title,
      desc: t.services.consulting.desc,
      href: "/services/consulting",
    },
  ]

  return (
    <section dir={dir} className="relative overflow-hidden py-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.services.title}
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Icon with glow */}
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-primary/30">
                  <service.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                
                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  {t.services.learnMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="group gap-2 border-2 border-border bg-transparent px-8 py-6 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              {t.common.viewAll}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
