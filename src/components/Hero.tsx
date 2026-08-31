import { useLang, L } from '../lib/i18n'
import { hero, contact } from '../content'

export default function Hero() {
  const { lang } = useLang()
  const statement = L(lang, hero.statement)
  const accent = L(lang, hero.statementAccent)
  const prefix = statement.replace(accent, '')

  return (
    <section id="top" className="hero">
      <div className="hero__scrim" aria-hidden />
      <div className="container hero__inner">
        <h1 className="hero__name">
          <span className="mask-line">
            <span className="mask-inner l1">Louis-Marie</span>
          </span>
          <span className="mask-line">
            <span className="mask-inner l2">Simonneaux</span>
          </span>
        </h1>

        <p className="hero__statement">
          {prefix}
          <em>{accent}</em>
        </p>

        <div className="hero__links">
          <a href="#projets" className="link-accent">
            {L(lang, hero.ctaWork)} ↓
          </a>
          <a
            href={contact.booking.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            {L(lang, contact.booking.label)} <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
