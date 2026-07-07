import { useLang, L } from '../lib/i18n'
import { hero } from '../content'

export default function Hero() {
  const { lang } = useLang()
  const statement = L(lang, hero.statement)
  const accent = L(lang, hero.statementAccent)
  const prefix = statement.replace(accent, '')
  const domains = L(lang, hero.domains)

  return (
    <section id="top" className="hero">
      <div className="hero__scrim" aria-hidden />
      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="sq" />
          {L(lang, hero.eyebrow)}
        </p>

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

        <ul className="hero__domains">
          {domains.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <div className="hero__links">
          <a href="#projets" className="link-accent">
            {L(lang, hero.ctaWork)} ↓
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
