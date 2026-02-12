"use client"

import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
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
  CheckCircle2,
} from "lucide-react"

function ServicesContent() {
  const { t, dir } = useLocale()

  const services = [
    {
      icon: Globe,
      title: t.services.webDev.title,
      desc: t.services.webDev.desc,
      href: "/services/web-development",
      features: [
        "Custom Web Applications",
        "E-Commerce Platforms",
        "Progressive Web Apps",
        "CMS Development",
        "API Development",
        "Cloud Hosting",
      ],
    },
    {
      icon: Smartphone,
      title: t.services.mobileApps.title,
      desc: t.services.mobileApps.desc,
      href: "/services/mobile-apps",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Support",
      ],
    },
    {
      icon: Brain,
      title: t.services.aiSolutions.title,
      desc: t.services.aiSolutions.desc,
      href: "/services/ai-solutions",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Pipeline Engineering",
      ],
    },
    {
      icon: Zap,
      title: t.services.automations.title,
      desc: t.services.automations.desc,
      href: "/services/automations",
      features: [
        "Workflow Automation",
        "CRM Integration",
        "Email Automation",
        "Data Sync",
        "Custom Integrations",
        "Process Optimization",
      ],
    },
    {
      icon: Palette,
      title: t.services.uiux.title,
      desc: t.services.uiux.desc,
      href: "/services/ui-ux-design",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
        "Brand Identity",
      ],
    },
    {
      icon: BarChart3,
      title: t.services.consulting.title,
      desc: t.services.consulting.desc,
      href: "/services/consulting",
      features: [
        "Digital Strategy",
        "Technology Audit",
        "Architecture Planning",
        "Team Augmentation",
        "Technical Training",
        "Growth Advisory",
      ],
    },
  ]

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.services.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={service.href}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <Link href={service.href}>
                    <Button className="gap-2">
                      {t.services.learnMore}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.cta.subtitle}</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 px-8"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesContent />
    </PageWrapper>
  )
}
