"use client"

import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

function NotFoundContent() {
  const { t, dir } = useLocale()

  return (
    <div
      dir={dir}
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
    >
      <span className="text-8xl font-bold text-primary/20">404</span>
      <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {t.notFound.description}
      </p>
      <Link href="/" className="mt-8">
        <Button className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t.common.backToHome}
        </Button>
      </Link>
    </div>
  )
}

export default function NotFound() {
  return (
    <PageWrapper>
      <NotFoundContent />
    </PageWrapper>
  )
}
