"use client"

import { useState } from "react"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { projects } from "@/lib/portfolio-data"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

function PortfolioContent() {
  const { t, locale, dir } = useLocale()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t.portfolio.allCategory },
    { id: "web", label: t.portfolio.webCategory },
    { id: "mobile", label: t.portfolio.mobileCategory },
    { id: "ai", label: t.portfolio.aiCategory },
    { id: "automation", label: t.portfolio.automationCategory },
  ]

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const getTitle = (p: (typeof projects)[0]) =>
    locale === "fr" ? p.titleFr : locale === "ar" ? p.titleAr : p.titleEn
  const getDesc = (p: (typeof projects)[0]) =>
    locale === "fr" ? p.descFr : locale === "ar" ? p.descAr : p.descEn

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.portfolio.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.portfolio.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`flex h-52 items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <span className="text-5xl font-bold text-foreground/20">
                    {getTitle(project).charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {getTitle(project)}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {getDesc(project)}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <PortfolioContent />
    </PageWrapper>
  )
}
