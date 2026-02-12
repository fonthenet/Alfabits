"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Code2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { t, dir } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const serviceLinks = [
    { href: "/services/web-development", label: t.nav.webDev },
    { href: "/services/mobile-apps", label: t.nav.mobileApps },
    { href: "/services/ai-solutions", label: t.nav.aiSolutions },
    { href: "/services/automations", label: t.nav.automations },
    { href: "/services/ui-ux-design", label: t.nav.uiux },
    { href: "/services/consulting", label: t.nav.consulting },
  ]

  const mainLinks = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header
      dir={dir}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_14px_hsl(var(--primary)_/_0.5)] transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.7)]">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Alfabits</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:text-primary focus-visible:shadow-[0_0_14px_hsl(var(--primary)_/_0.18)]"
          >
            {t.nav.home}
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground">
                  {t.nav.services}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-3 md:w-[500px] md:grid-cols-2">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none rounded-md px-3 py-2 text-sm leading-relaxed text-foreground no-underline outline-none transition-all hover:text-primary focus:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)_/_0.2)] focus:shadow-[0_0_10px_hsl(var(--primary)_/_0.2)]"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-2 border-t border-border pt-1 mt-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block select-none rounded-md px-3 py-2 text-sm font-medium leading-relaxed text-primary no-underline outline-none transition-all hover:shadow-[0_0_10px_hsl(var(--primary)_/_0.25)] focus:shadow-[0_0_10px_hsl(var(--primary)_/_0.25)]"
                        >
                          {t.common.viewAll} &rarr;
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/portfolio"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:text-primary focus-visible:shadow-[0_0_14px_hsl(var(--primary)_/_0.18)]"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:text-primary focus-visible:shadow-[0_0_14px_hsl(var(--primary)_/_0.18)]"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:text-primary focus-visible:shadow-[0_0_14px_hsl(var(--primary)_/_0.18)]"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/contact" className="hidden lg:block">
            <Button size="sm">
              {t.nav.getStarted}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === "rtl" ? "right" : "left"} className="w-80 bg-background">
              <SheetTitle className="flex items-center gap-2 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_14px_hsl(var(--primary)_/_0.5)]">
                  <Code2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Alfabits</span>
              </SheetTitle>
              <nav className="flex flex-col gap-1" dir={dir}>
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-all hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)_/_0.2)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border pt-2">
                  <p className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-muted-foreground">
                    {t.nav.services} <ChevronDown className="h-3 w-3" />
                  </p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-6 py-2 text-sm text-foreground transition-all hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)_/_0.2)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full">
                      {t.nav.getStarted}
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
