"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import {
  type Locale,
  type TranslationKeys,
  translations,
  isRTL,
} from "@/lib/i18n"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  dir: "ltr" | "rtl"
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
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
