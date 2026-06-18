import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const Ctx = createContext<LangCtx | null>(null)
const KEY = 'lm-lang'

function initial(): Lang {
  if (typeof window === 'undefined') return 'fr'
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param === 'fr' || param === 'en') return param
  const saved = localStorage.getItem(KEY)
  if (saved === 'fr' || saved === 'en') return saved
  const nav = navigator.language?.toLowerCase() ?? 'fr'
  return nav.startsWith('en') ? 'en' : 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial)

  useEffect(() => {
    localStorage.setItem(KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState((l) => (l === 'fr' ? 'en' : 'fr'))

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

/** Pick a localized value from a { fr, en } record. */
export function L<T>(lang: Lang, pair: { fr: T; en: T }): T {
  return pair[lang]
}
