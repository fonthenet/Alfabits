"use client"

import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Lightbulb,
  Eye,
  BookOpen,
  Heart,
  MapPin,
  Award,
  Users,
} from "lucide-react"

function AboutContent() {
  const { t, locale, dir } = useLocale()

  const sections = [
    {
      icon: Lightbulb,
      title: t.about.mission,
      text: t.about.missionText,
    },
    {
      icon: Eye,
      title: t.about.vision,
      text: t.about.visionText,
    },
    {
      icon: BookOpen,
      title: t.about.story,
      text: t.about.storyText,
    },
    {
      icon: Heart,
      title: t.about.values,
      text: t.about.valuesText,
    },
  ]

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.about.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Los Angeles, CA
                </p>
                <p className="text-xs text-muted-foreground">
                  {locale === "ar" ? "\u0627\u0644\u0645\u0642\u0631" : locale === "fr" ? "Siege" : "Headquarters"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">120+</p>
                <p className="text-xs text-muted-foreground">
                  {t.stats.projectsLabel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">85+</p>
                <p className="text-xs text-muted-foreground">
                  {t.stats.clientsLabel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground">
                  {t.stats.yearsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Story, Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-foreground">
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

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  )
}
