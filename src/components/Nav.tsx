import { useEffect, useState } from 'react'
import { useLang, L } from '../lib/i18n'
import { useTheme } from '../lib/theme'
import { nav as navContent, contact } from '../content'

/** Width at which the inline links give way to the burger panel. Keep in sync with ui.css. */
const COMPACT = '(max-width: 900px)'

export default function Nav() {
  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* While the panel is open: trap the page behind it, close on Escape, and
     close if the viewport grows back to the desktop layout. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia(COMPACT)
    const onChange = () => !mq.matches && setOpen(false)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  const items: { id: string; label: { fr: string; en: string } }[] = [
    { id: 'parcours', label: navContent.parcours },
    { id: 'projets', label: navContent.projets },
    { id: 'contact', label: navContent.contact },
  ]

  const menuLabel = open
    ? lang === 'fr' ? 'Fermer le menu' : 'Close menu'
    : lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__name" onClick={() => setOpen(false)}>
          <span className="nav__name-full">Louis-Marie Simonneaux</span>
          <span className="nav__name-short" aria-hidden>
            LM Simonneaux
          </span>
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

          <button
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls="nav-panel"
          >
            <span className="nav__burger-box" aria-hidden>
              <span />
              <span />
            </span>
          </button>
        </nav>
      </div>

      <div id="nav-panel" className="nav__panel" hidden={!open}>
        <ul>
          {items.map((it, i) => (
            <li key={it.id} style={{ ['--i' as string]: i }}>
              <a href={`#${it.id}`} onClick={() => setOpen(false)}>
                {L(lang, it.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__panel-foot" style={{ ['--i' as string]: items.length }}>
          <a
            href={contact.booking.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
            onClick={() => setOpen(false)}
          >
            {L(lang, contact.booking.label)} <span aria-hidden>→</span>
          </a>
          <p className="nav__panel-note">{L(lang, contact.booking.note)}</p>
        </div>
      </div>
    </header>
  )
}
