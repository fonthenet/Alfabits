"use client"

import { useLocale } from "@/lib/locale-context"
import { Briefcase, Users, Clock } from "lucide-react"

export function StatsSection() {
  const { t, dir } = useLocale()

  const stats = [
    {
      value: t.stats.projects,
      label: t.stats.projectsLabel,
      icon: Briefcase,
    },
    {
      value: t.stats.clients,
      label: t.stats.clientsLabel,
      icon: Users,
    },
    {
      value: t.stats.years,
      label: t.stats.yearsLabel,
      icon: Clock,
    },
  ]

  return (
    <section dir={dir} className="relative border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center gap-4 text-center transition-all"
            >
              {/* Divider between stats */}
              {index !== stats.length - 1 && (
                <div className="absolute -right-6 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block" />
              )}
              
              {/* Icon with glow effect */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/20 transition-all group-hover:scale-110 group-hover:ring-primary/40">
                <stat.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              
              {/* Stat value */}
              <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-6xl font-bold tracking-tighter text-transparent md:text-7xl">
                {stat.value}
              </span>
              
              {/* Label */}
              <span className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
