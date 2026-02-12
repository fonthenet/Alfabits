"use client"

import { useLocale } from "@/lib/locale-context"
import { Star } from "lucide-react"

const testimonials = [
  {
    nameEn: "Eldad Alfi",
    nameFr: "Eldad Alfi",
    nameAr: "\u0625\u0644\u062F\u0627\u062F \u0623\u0644\u0641\u064A",
    roleEn: "CEO, Alfitrade Inc.",
    roleFr: "PDG, Alfitrade Inc.",
    roleAr: "\u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u060C Alfitrade Inc.",
    quoteEn:
      "Alfabits transformed our entire digital infrastructure. Their team delivered a complex platform in record time with exceptional quality.",
    quoteFr:
      "Alfabits a transforme toute notre infrastructure numerique. Leur equipe a livre une plateforme complexe en un temps record.",
    quoteAr:
      "\u062D\u0648\u0644\u062A \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0628\u0646\u064A\u062A\u0646\u0627 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644. \u0641\u0631\u064A\u0642\u0647\u0645 \u0642\u062F\u0645 \u0645\u0646\u0635\u0629 \u0645\u0639\u0642\u062F\u0629 \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A.",
  },
  {
    nameEn: "Rich Macaluso",
    nameFr: "Rich Macaluso",
    nameAr: "\u0631\u064A\u062A\u0634 \u0645\u0627\u0643\u0627\u0644\u0648\u0633\u0648",
    roleEn: "Co-CEO, Orange Coast Title",
    roleFr: "Co-PDG, Orange Coast Title",
    roleAr: "\u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u060C Orange Coast Title",
    quoteEn:
      "Working with Alfabits was a game-changer. They understood our market needs and built a mobile app that our users love.",
    quoteFr:
      "Travailler avec Alfabits a ete un tournant. Ils ont compris nos besoins et construit une app que nos utilisateurs adorent.",
    quoteAr:
      "\u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0643\u0627\u0646 \u0646\u0642\u0644\u0629 \u0646\u0648\u0639\u064A\u0629. \u0641\u0647\u0645\u0648\u0627 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0633\u0648\u0642\u0646\u0627 \u0648\u0628\u0646\u0648\u0627 \u062A\u0637\u0628\u064A\u0642\u0627 \u064A\u062D\u0628\u0647 \u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646\u0627.",
  },
  {
    nameEn: "Tendi",
    nameFr: "Tendi",
    nameAr: "\u062A\u064A\u0646\u062F\u064A",
    roleEn: "CEO, Tendi",
    roleFr: "PDG, Tendi",
    roleAr: "\u0627\u0644\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A\u060C Tendi",
    quoteEn:
      "The AI solution Alfabits built for us increased our operational efficiency by 40%. Truly world-class engineering.",
    quoteFr:
      "La solution IA d'Alfabits a augmente notre efficacite operationnelle de 40%. Une ingenierie de classe mondiale.",
    quoteAr:
      "\u0632\u0627\u062F \u062D\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0645\u0646 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0643\u0641\u0627\u0621\u062A\u0646\u0627 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 40%.",
  },
]

export function TestimonialsSection() {
  const { t, locale, dir } = useLocale()

  const getText = (
    item: (typeof testimonials)[0],
    field: "name" | "role" | "quote"
  ) => {
    const key = `${field}${locale === "fr" ? "Fr" : locale === "ar" ? "Ar" : "En"}` as keyof (typeof testimonials)[0]
    return item[key]
  }

  return (
    <section dir={dir} className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.nameEn}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{getText(item, "quote")}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {getText(item, "name").charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {getText(item, "name")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getText(item, "role")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
