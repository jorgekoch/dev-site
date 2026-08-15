import { useEffect, useState } from 'react'
import logo from './assets/logo-compacta.png'

const projects = [
  { number: '01', title: 'ROOM Arquitetura', category: 'Landing page · Arquitetura sustentável', description: 'Uma presença digital sofisticada para transformar posicionamento em novos projetos.', url: 'https://roomarquiteturasustentavel.com.br', accent: 'lime', tags: ['UX/UI', 'React', 'Landing page'] },
  { number: '02', title: 'Ian Schmoeller', category: 'Site profissional · Música', description: 'Um site autoral para apresentar trabalho, identidade e conteúdo de um professor de música.', url: 'https://ianschmoeller.vercel.app/', accent: 'cyan', tags: ['Design', 'React', 'Vercel'] },
  { number: '03', title: 'One Frame', category: 'Experimento digital · Em construção', description: 'Um projeto em desenvolvimento explorando narrativa visual, movimento e experiência web.', url: 'https://one-frame-site-iota.vercel.app/', accent: 'blue', tags: ['Em construção', 'UI', 'Web'] },
]
const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Figma']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Jorge Koch — início"><img src={logo} alt="Jorge Koch Dev" /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><span /><span /></button>
      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}><a href="#trabalho" onClick={closeMenu}>Trabalho</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#contato" onClick={closeMenu} className="nav-cta">Vamos conversar <span>↗</span></a></nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow hero-glow--one" aria-hidden="true" /><div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="hero-content"><p className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</p><h1>Sites que têm<br /><em>algo a dizer.</em></h1><p className="hero-copy">Eu sou <strong>Jorge Koch</strong>, desenvolvedor web e criador de experiências digitais. Transformo ideias em sites com personalidade, estratégia e código de verdade.</p><div className="hero-actions"><a href="#trabalho" className="button button--primary">Ver meu trabalho <span>↓</span></a><a href="#sobre" className="button button--ghost">Conhecer o processo <span>↗</span></a></div></div>
        <div className="hero-mark" aria-hidden="true"><span>JK</span><small>DEV / 2026</small></div><div className="scroll-cue"><span /> role para explorar</div>
      </section>

      <section className="statement"><div className="section-label">01 — Manifesto</div><div className="statement-copy"><p className="statement-kicker">Não faço apenas páginas bonitas.</p><h2>Crio <span>presença digital</span> para pessoas e marcas que querem ser lembradas.</h2></div><div className="statement-note"><span className="asterisk">✳</span><p>Design encontra tecnologia quando uma boa ideia ganha forma.</p></div></section>

      <section className="work" id="trabalho"><div className="section-heading"><div><div className="section-label">02 — Projetos selecionados</div><h2>Feito na prática<span>.</span></h2></div><p>Alguns dos projetos que construí, do primeiro wireframe ao deploy.</p></div><div className="project-list">{projects.map(project => <a className={`project-card project-card--${project.accent}`} href={project.url} target="_blank" rel="noreferrer" key={project.number}><div className="project-visual"><div className="browser-bar"><i /><i /><i /><span>{project.title.toLowerCase().replaceAll(' ', '')}.web</span></div><div className="visual-layout"><div className="visual-title"><small>{project.number}</small><strong>{project.title}</strong><b /></div><div className="visual-block visual-block--a" /><div className="visual-block visual-block--b" /><div className="visual-line" /></div><span className="open-icon">↗</span></div><div className="project-info"><div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p className="project-category">{project.category}</p></div><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>)}</div></section>

      <section className="about" id="sobre"><div className="section-label">03 — Quem está por trás</div><div className="about-grid"><div className="about-title"><span className="about-big">J</span><span className="about-big about-big--offset">K</span></div><div className="about-copy"><h2>Desenvolvedor com olhar de designer.</h2><p>Minha formação mistura desenvolvimento Full Stack e UX/UI. Isso me permite pensar no que o usuário vê, no que ele sente e também no que acontece por trás da tela.</p><p>Gosto de interfaces claras, detalhes inesperados e soluções que fazem sentido para o negócio — sem complicar o que pode ser simples.</p><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div></section>

      <section className="process"><div className="section-label">04 — Como eu trabalho</div><div className="process-grid">{[['01','Entender','Antes do código, vem a pergunta certa. Entendo objetivo, público e contexto.'],['02','Desenhar','Organizo conteúdo, experiência e identidade para criar uma direção visual consistente.'],['03','Construir','Transformo a ideia em uma interface responsiva, rápida e bem estruturada.'],['04','Publicar','Deploy, ajustes finais e uma experiência pronta para o mundo real.']].map(([num,title,text]) => <article key={num} className="process-item"><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="contact" id="contato"><div className="contact-grid" aria-hidden="true" /><div className="contact-inner"><div className="section-label">05 — Próximo projeto</div><h2>Tem uma ideia<br /><em>na cabeça?</em></h2><p>Vamos tirar do papel e colocar na internet.</p><a className="contact-button" href="https://github.com/jorgekoch" target="_blank" rel="noreferrer">Falar com Jorge <span>↗</span></a></div><div className="contact-footer"><span>JORGE KOCH / DEV</span><span>© 2026</span><a href="https://github.com/jorgekoch" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
    </main>
  </div>
}
