import { SectionLabel } from '../ui/SectionLabel'

export function Statement() {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <SectionLabel>01 — Manifesto</SectionLabel>
      <div className="statement-copy">
        <p className="statement-kicker">Não faço apenas páginas bonitas.</p>
        <h2 id="statement-title">Crio <span>presença digital</span> para pessoas e marcas que querem ser lembradas.</h2>
      </div>
      <div className="statement-note">
        <span className="asterisk">✳</span>
        <p>Design encontra tecnologia quando uma boa ideia ganha forma.</p>
      </div>
    </section>
  )
}
