import { useLang, L } from '../lib/i18n'
import { timeline, sectionTitles, type TimelineItem } from '../content'
import { Reveal } from './motion'

function Column({ title, items }: { title: string; items: TimelineItem[] }) {
  const { lang } = useLang()
  return (
    <div className="tl__col">
      <h3 className="tl__title">{title}</h3>
      {items.map((it, i) => (
        <Reveal className="tl__item" key={it.org + i} delay={i * 0.05}>
          <div className="tl__period">{L(lang, it.period)}</div>
          <div className="tl__body">
            <h4 className="tl__org">
              {it.org} <span className="tl__role">— {L(lang, it.role)}</span>
            </h4>
            <p className="tl__place">{L(lang, it.place)}</p>
            <p className="tl__desc">{L(lang, it.desc)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Experience() {
  const { lang } = useLang()
  const work = timeline.filter((t) => t.kind === 'work')
  const edu = timeline.filter((t) => t.kind === 'edu')

  return (
    <section id="parcours" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.path)}</h2>
          <span className="idx">02</span>
        </div>
      </Reveal>

      <div className="tl__grid">
        <Column title={lang === 'fr' ? 'Expérience' : 'Experience'} items={work} />
        <Column title={lang === 'fr' ? 'Formation' : 'Education'} items={edu} />
      </div>
    </section>
  )
}
