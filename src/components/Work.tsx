import { useLang, L } from '../lib/i18n'
import { projects, sectionTitles } from '../content'
import { Reveal } from './motion'

export default function Work() {
  const { lang } = useLang()

  return (
    <section id="projets" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.work)}</h2>
          <span className="idx">02</span>
        </div>
      </Reveal>

      <div className="work__list">
        {projects.map((p, i) => (
          <Reveal as="article" className="proj" key={p.id} delay={i * 0.06}>
            <div className="proj__top">
              <span className="proj__n">{String(i + 1).padStart(2, '0')}</span>
              <div className="proj__head">
                <h3 className="proj__name">{p.name}</h3>
                <p className="proj__summary">{L(lang, p.summary)}</p>
              </div>
              <div className="proj__meta">
                <b>{L(lang, p.role)}</b>
                <span>{p.year}</span>
              </div>
            </div>
            <div className="proj__body">
              <p className="proj__detail">{L(lang, p.detail)}</p>
              <div className="proj__foot">
                <p className="proj__tags">{L(lang, p.tags).join('  ·  ')}</p>
                {p.links.length > 0 && (
                  <div className="proj__links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-link">
                        {L(lang, l.label)} <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
