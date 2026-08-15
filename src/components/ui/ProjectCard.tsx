import type { Project } from '../../data/projects'

interface ProjectCardProps { project: Project }

export function ProjectCard({ project }: ProjectCardProps) {
  const hostLabel = project.title.toLowerCase().replaceAll(' ', '') + '.web'

  return (
    <a className={`project-card project-card--${project.accent}`} href={project.url} target="_blank" rel="noreferrer">
      <div className="project-visual">
        <div className="browser-bar"><i /><i /><i /><span>{hostLabel}</span></div>
        <div className="visual-layout">
          <div className="visual-title"><small>{project.number}</small><strong>{project.title}</strong><b /></div>
          <div className="visual-block visual-block--a" />
          <div className="visual-block visual-block--b" />
          <div className="visual-line" />
        </div>
        <span className="open-icon">↗</span>
      </div>

      <div className="project-info">
        <div>
          <span className="project-number">{project.number}</span>
          <h3>{project.title}</h3>
          <p className="project-category">{project.category}</p>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </a>
  )
}
