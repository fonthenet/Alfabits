"use client"

import { useLocale } from "@/lib/locale-context"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

export function ProcessSection() {
  const { t, dir } = useLocale()

  const steps = [
    {
      icon: Search,
      title: t.process.step1Title,
      desc: t.process.step1Desc,
      step: "01",
    },
    {
      icon: PenTool,
      title: t.process.step2Title,
      desc: t.process.step2Desc,
      step: "02",
    },
    {
      icon: Code2,
      title: t.process.step3Title,
      desc: t.process.step3Desc,
      step: "03",
    },
    {
      icon: Rocket,
      title: t.process.step4Title,
      desc: t.process.step4Desc,
      step: "04",
    },
  ]

  return (
    <section dir={dir} className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 hidden h-px w-full bg-border lg:block" style={{ [dir === "rtl" ? "right" : "left"]: "50%" }} />
              )}
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/20 bg-background">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
