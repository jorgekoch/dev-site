import { processSteps } from '../../data/projects'
import { SectionLabel } from '../ui/SectionLabel'

export function Process() {
  return (
    <section className="process" aria-labelledby="process-title">
      <SectionLabel>04 — Como eu trabalho</SectionLabel>
      <div className="process-grid" id="process-title">
        {processSteps.map(([number, title, text]) => (
          <article key={number} className="process-item">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
