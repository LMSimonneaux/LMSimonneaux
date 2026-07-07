import { useLang, L } from '../lib/i18n'
import { skillGroups, languages, interests, sectionTitles } from '../content'
import { Reveal } from './motion'

export default function Skills() {
  const { lang } = useLang()

  return (
    <section id="competences" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.skills)}</h2>
          <span className="idx">04</span>
        </div>
      </Reveal>

      <div className="skills__grid">
        {skillGroups.map((g, i) => (
          <Reveal className="skills__group" key={g.label.fr} delay={i * 0.06}>
            <h3>{L(lang, g.label)}</h3>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="skills__foot">
        <Reveal className="skills__langs">
          <h3>{lang === 'fr' ? 'Langues' : 'Languages'}</h3>
          <ul>
            {languages.map((l) => (
              <li key={l.name.fr}>
                <span>{L(lang, l.name)}</span>
                <span className="skills__level">{L(lang, l.level)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="skills__interests" delay={0.08}>
          <h3>{lang === 'fr' ? 'En dehors du travail' : 'Beyond work'}</h3>
          <ul>
            {L(lang, interests).map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
