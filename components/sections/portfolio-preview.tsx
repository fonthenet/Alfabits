"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { projects } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function PortfolioPreview() {
  const { t, locale, dir } = useLocale()

  const getTitle = (p: (typeof projects)[0]) => {
    if (locale === "fr") return p.titleFr
    if (locale === "ar") return p.titleAr
    return p.titleEn
  }

  const getDesc = (p: (typeof projects)[0]) => {
    if (locale === "fr") return p.descFr
    if (locale === "ar") return p.descAr
    return p.descEn
  }

  return (
    <section dir={dir} className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <span className="text-4xl font-bold text-foreground/20">
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {getDesc(project)}
                </p>
                <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="group gap-2 border-2 border-border bg-transparent px-8 py-6 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              {t.portfolio.viewAll}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
