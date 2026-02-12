"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"
import {
  type Locale,
  type TranslationKeys,
  translations,
  isRTL,
  locales,
} from "@/lib/i18n"

const LOCALE_STORAGE_KEY = "alfabits-locale"

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return locales.includes(stored as Locale) ? (stored as Locale) : "en"
}

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  dir: "ltr" | "rtl"
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = getStoredLocale()
    setLocaleState(stored)
    document.documentElement.lang = stored
    document.documentElement.dir = isRTL(stored) ? "rtl" : "ltr"
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.dir = isRTL(newLocale) ? "rtl" : "ltr"
  }, [])

  const t = translations[locale]
  const dir = isRTL(locale) ? "rtl" : "ltr"

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
