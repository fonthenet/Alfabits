"use client"

import { use } from "react"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { projects } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Building2, ExternalLink } from "lucide-react"

function ProjectContent({ id }: { id: string }) {
  const { locale, dir, t } = useLocale()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center" dir={dir}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            {t.portfolioDetail.projectNotFound}
          </h1>
          <Link href="/portfolio">
            <Button className="mt-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.portfolio.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const title =
    locale === "fr"
      ? project.titleFr
      : locale === "ar"
        ? project.titleAr
        : project.titleEn
  const longDesc =
    locale === "fr"
      ? project.longDescFr
      : locale === "ar"
        ? project.longDescAr
        : project.longDescEn
  const client =
    locale === "fr"
      ? project.clientFr
      : locale === "ar"
        ? project.clientAr
        : project.clientEn

  const currentIndex = projects.findIndex((p) => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.portfolio.title}
          </Link>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium capitalize text-primary">
              {project.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              {client}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
              >
                {t.portfolioDetail.visitWebsite}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image Area */}
      <section className="border-b border-border">
        <div
          className={`mx-auto flex h-72 max-w-7xl items-center justify-center bg-gradient-to-br ${project.color} sm:h-96`}
        >
          <span className="text-8xl font-bold text-foreground/10">
            {title.charAt(0)}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {t.portfolioDetail.overview}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {longDesc}
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {t.portfolioDetail.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="w-full gap-2">
                    {t.cta.button}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === "fr"
                  ? prevProject.titleFr
                  : locale === "ar"
                    ? prevProject.titleAr
                    : prevProject.titleEn}
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {locale === "fr"
                  ? nextProject.titleFr
                  : locale === "ar"
                    ? nextProject.titleAr
                    : nextProject.titleEn}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  return (
    <PageWrapper>
      <ProjectContent id={id} />
    </PageWrapper>
  )
}
