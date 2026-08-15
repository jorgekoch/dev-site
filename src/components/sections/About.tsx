import { skills } from '../../data/projects'
import { SectionLabel } from '../ui/SectionLabel'

export function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <SectionLabel>03 — Quem está por trás</SectionLabel>
      <div className="about-grid">
        <div className="about-title" aria-hidden="true">
          <span className="about-big">J</span>
          <span className="about-big about-big--offset">K</span>
        </div>
        <div className="about-copy">
          <h2 id="about-title">Desenvolvedor com olhar de designer.</h2>
          <p>Minha formação mistura desenvolvimento Full Stack e UX/UI. Isso me permite pensar no que o usuário vê, no que ele sente e também no que acontece por trás da tela.</p>
          <p>Gosto de interfaces claras, detalhes inesperados e soluções que fazem sentido para o negócio — sem complicar o que pode ser simples.</p>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
