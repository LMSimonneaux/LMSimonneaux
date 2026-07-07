import { useLang } from '../lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Louis-Marie Simonneaux</span>
        <span className="footer__meta">
          {lang === 'fr' ? 'Conçu & codé à Toulouse' : 'Designed & coded in Toulouse'} · © 2026
        </span>
        <a href="#top" className="footer__top link-underline">
          {lang === 'fr' ? 'Haut de page ↑' : 'Back to top ↑'}
        </a>
      </div>
    </footer>
  )
}
