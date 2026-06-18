import { useLang, L } from '../lib/i18n'
import { about, sectionTitles } from '../content'
import { Reveal } from './motion'
import type { ReactNode } from 'react'

/** Convert *emphasis* markers into <em> nodes. */
function emphasize(text: string): ReactNode[] {
  return text.split('*').map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>,
  )
}

export default function About() {
  const { lang } = useLang()
  const paragraphs = L(lang, about.paragraphs)
  const traits = L(lang, about.traits)

  return (
    <section id="profil" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.about)}</h2>
          <span className="idx">01</span>
        </div>
      </Reveal>

      <div className="about__grid">
        <div className="about__main">
          <Reveal>
            <p className="about__lead">{L(lang, about.lead)}</p>
          </Reveal>
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="about__p">{emphasize(p)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="about__aside" delay={0.1}>
          <figure className="about__portrait">
            <img
              src="/LMSimonneaux/images/portrait.png"
              alt="Louis-Marie Simonneaux"
              loading="lazy"
              width={360}
              height={419}
            />
          </figure>
          <div className="about__card">
            <h3>{L(lang, about.likeTitle)}</h3>
            <p>{L(lang, about.like)}</p>
            <p className="about__traits">{traits.join(' · ')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
