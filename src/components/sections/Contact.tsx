import { SectionLabel } from '../ui/SectionLabel'

const githubUrl = 'https://github.com/jorgekoch'

export function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-inner">
        <SectionLabel>05 — Próximo projeto</SectionLabel>
        <h2 id="contact-title">Tem uma ideia<br /><em>na cabeça?</em></h2>
        <p>Vamos tirar do papel e colocar na internet.</p>
        <a className="contact-button" href={githubUrl} target="_blank" rel="noreferrer">
          Falar com Jorge <span>↗</span>
        </a>
      </div>
      <footer className="contact-footer">
        <span>JORGE KOCH / DEV</span>
        <span>© 2026</span>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </section>
  )
}
