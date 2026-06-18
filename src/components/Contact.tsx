import { useState, type FormEvent } from 'react'
import { useLang, L } from '../lib/i18n'
import { contact, sectionTitles } from '../content'
import { Reveal } from './motion'

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function Contact() {
  const { lang } = useLang()
  const [status, setStatus] = useState<Status>('idle')

  const t = {
    name: lang === 'fr' ? 'Votre nom' : 'Your name',
    email: lang === 'fr' ? 'Votre email' : 'Your email',
    message: lang === 'fr' ? 'Votre message' : 'Your message',
    send: lang === 'fr' ? 'Envoyer' : 'Send',
    sending: lang === 'fr' ? 'Envoi…' : 'Sending…',
    done: lang === 'fr' ? 'Merci ! Message bien reçu.' : 'Thanks! Message received.',
    error: lang === 'fr' ? 'Oups, réessayez ou écrivez-moi par email.' : 'Oops, try again or email me.',
    pref: lang === 'fr' ? 'Je préfère LinkedIn pour les échanges professionnels.' : 'I prefer LinkedIn for professional exchanges.',
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(contact.formAction, {
        method: 'POST',
        body: new URLSearchParams(data as unknown as Record<string, string>),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('done')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container">
      <Reveal>
        <div className="section-head">
          <h2>{L(lang, sectionTitles.contact)}</h2>
          <span className="idx">05</span>
        </div>
      </Reveal>

      <div className="contact__grid">
        <div className="contact__left">
          <Reveal>
            <p className="contact__lead">{L(lang, contact.lead)}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="contact__links">
              {contact.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact__pref">{t.pref}</p>
          </Reveal>
        </div>

        <Reveal className="contact__right" delay={0.1}>
          {status === 'done' ? (
            <p className="contact__thanks">{t.done}</p>
          ) : (
            <form onSubmit={onSubmit} className="contact__form">
              <input type="text" name="name" placeholder={t.name} aria-label={t.name} required />
              <input type="email" name="email" placeholder={t.email} aria-label={t.email} required />
              <textarea name="message" placeholder={t.message} aria-label={t.message} rows={5} required />
              <button type="submit" className="contact__send" disabled={status === 'sending'}>
                {status === 'sending' ? t.sending : `${t.send} →`}
              </button>
              {status === 'error' && <p className="contact__err">{t.error}</p>}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
