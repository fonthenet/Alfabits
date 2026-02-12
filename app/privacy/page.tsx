"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { privacyContent } from "@/lib/privacy-content"

function PrivacyContent() {
  const { dir, locale } = useLocale()
  const content = privacyContent[locale]

  return (
    <div dir={dir} className="py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{content.updated}</p>

        <div className="mt-12 flex flex-col gap-8 text-foreground">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
              <p
                className="leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <PrivacyContent />
    </PageWrapper>
  )
}
