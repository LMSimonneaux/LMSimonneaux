import { useLang, L } from '../lib/i18n'
import { tools, toolsLead, sectionTitles, type Tool } from '../content'
import { Reveal } from './motion'

const ROWS = 3
/* Row speeds differ so the three bands never lock into a visible rhythm. */
const DURATIONS = [78, 92, 84]

/** "PhantomBuster" -> PB, "Microsoft 365" -> M3, ".tech domains" -> TD. */
function monogram(name: string): string {
  const cleaned = name.replace(/^\W+/, '')
  const words = cleaned.split(/[\s.]+/).filter(Boolean)
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase()
  const camel = cleaned.match(/[A-Z][a-z]*|\d+/g)
  if (camel && camel.length > 1) return (camel[0][0] + camel[1][0]).toUpperCase()
  return cleaned.slice(0, 2).toUpperCase()
}

function Tile({ tool, dup }: { tool: Tool; dup?: boolean }) {
  return (
    <li className="tools__item" aria-hidden={dup || undefined}>
      {tool.slug ? (
        <span
          className={`tools__mark${tool.wide ? ' tools__mark--wide' : ''}`}
          style={{ ['--logo' as string]: `url(/LMSimonneaux/logos/${tool.slug}.svg)` }}
        />
      ) : (
        <span className="tools__mono">{tool.mono ?? monogram(tool.name)}</span>
      )}
      <span className="tools__name">{tool.name}</span>
    </li>
  )
}

export default function Tools() {
  const { lang } = useLang()

  // Deal the tools across the bands so each row carries a comparable width.
  const rows: Tool[][] = Array.from({ length: ROWS }, () => [])
  tools.forEach((t, i) => rows[i % ROWS].push(t))

  return (
    <section id="outils" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.tools)}</h2>
          <span className="idx">03</span>
        </div>
      </Reveal>
      <Reveal>
        <p className="tools__lead">{L(lang, toolsLead)}</p>
      </Reveal>

      <div className="tools__marquee">
        {rows.map((row, r) => (
          <div className="tools__row" key={r}>
            <ul
              className="tools__track"
              style={{
                ['--dur' as string]: `${DURATIONS[r]}s`,
                ['--dir' as string]: r % 2 === 1 ? 'reverse' : 'normal',
              }}
            >
              {row.map((t) => (
                <Tile tool={t} key={t.name} />
              ))}
              {/* Second pass makes the -50% translation loop seamlessly. It is
                  a visual copy only, so it is hidden from assistive tech. */}
              {row.map((t) => (
                <Tile tool={t} key={t.name + '-dup'} dup />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
