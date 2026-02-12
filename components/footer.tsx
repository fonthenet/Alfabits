"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Code2 } from "lucide-react"

export function Footer() {
  const { t, dir } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer dir={dir} className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_14px_hsl(var(--primary)_/_0.5)] transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.7)]">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Alfabits</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.servicesTitle}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.webDev}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.mobileApps}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.aiSolutions}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automations"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.automations}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.uiux}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav.consulting}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contactTitle}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">
                {t.contact.addressValue}
              </li>
              <li>
                <a
                  href="mailto:info@alfabits.net"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.contact.emailValue}
                </a>
              </li>
              <li>
                <a
                  href="tel:+16612346622"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.contact.phoneValue}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Alfabits. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
