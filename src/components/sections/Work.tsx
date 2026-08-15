import type { Project } from '../../data/projects'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionLabel } from '../ui/SectionLabel'

export function Work() {
  return (
    <section className="work" id="trabalho" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <SectionLabel>02 — Projetos selecionados</SectionLabel>
          <h2 id="work-title">Feito na prática<span>.</span></h2>
        </div>
        <p>Alguns dos projetos que construí, do primeiro wireframe ao deploy.</p>
      </div>
      <div className="project-list">
        {projects.map((project: Project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  )
}
