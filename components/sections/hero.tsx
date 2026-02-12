"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const { t, dir } = useLocale()

  return (
    <section
      dir={dir}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Premium animated background with blue tint */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Fine grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Glowing blue gradient orbs */}
        <div className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        
        {/* Blue tinted vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Floating badge */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-foreground">
              {t.hero.badge}
            </span>
          </div>

          {/* Massive bold title */}
          <h1 className="animate-fade-in-up text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
            <br />
            <span className="relative inline-block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              {t.hero.titleHighlight.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
            </span>
          </h1>

          {/* Elegant subtitle */}
          <p className="mx-auto mt-8 max-w-3xl animate-fade-in text-balance text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            {t.hero.subtitle}
          </p>

          {/* Premium CTAs */}
          <div className="mt-12 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="group px-10 py-6 text-lg font-semibold"
              >
                {t.hero.cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 border-2 px-10 py-6 text-lg font-semibold backdrop-blur-sm bg-transparent"
              >
                <Play className="h-5 w-5" />
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>

          {/* Tech stack showcase */}
          <div className="mt-20 animate-fade-in border-t border-border pt-12">
            <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Powered by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Flutter",
                "AWS",
                "Docker",
                "AI/ML",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:scale-110 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered horizontally */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-primary/30 p-2">
          <div className="h-3 w-1 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
