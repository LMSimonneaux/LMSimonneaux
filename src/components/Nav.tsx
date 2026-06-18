import { useEffect, useState } from 'react'
import { useLang, L } from '../lib/i18n'
import { useTheme } from '../lib/theme'
import { nav as navContent } from '../content'

export default function Nav() {
  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items: { id: string; label: { fr: string; en: string } }[] = [
    { id: 'profil', label: navContent.profil },
    { id: 'parcours', label: navContent.parcours },
    { id: 'projets', label: navContent.projets },
    { id: 'contact', label: navContent.contact },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__name">
          Louis-Marie Simonneaux
        </a>
        <nav className="nav__right">
          <ul className="nav__links">
            {items.map((it) => (
              <li key={it.id}>
                <a href={`#${it.id}`}>{L(lang, it.label)}</a>
              </li>
            ))}
          </ul>

          <div className="nav__lang" role="group" aria-label="Language">
            <button
              className={lang === 'fr' ? 'is-active' : ''}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <span aria-hidden>/</span>
            <button
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <button
            className="nav__theme"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
            title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
          >
            {theme === 'dark' ? '☾' : '☀'}
          </button>
        </nav>
      </div>
    </header>
  )
}
