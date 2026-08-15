import { ButtonLink } from '../ui/ButtonLink'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</p>
        <h1 id="hero-title">Sites que têm<br /><em>algo a dizer.</em></h1>
        <p className="hero-copy">
          Eu sou <strong>Jorge Koch</strong>, desenvolvedor web e criador de experiências digitais.
          Transformo ideias em sites com personalidade, estratégia e código de verdade.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#trabalho">Ver meu trabalho <span>↓</span></ButtonLink>
          <ButtonLink href="#sobre" variant="ghost">Conhecer o processo <span>↗</span></ButtonLink>
        </div>
      </div>

      <div className="hero-mark" aria-hidden="true"><span>JK</span><small>DEV / 2026</small></div>
      <div className="scroll-cue"><span /> role para explorar</div>
    </section>
  )
}
