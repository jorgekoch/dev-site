export type ProjectAccent = 'lime' | 'cyan' | 'blue'

export interface Project {
  number: string
  title: string
  category: string
  description: string
  url: string
  accent: ProjectAccent
  tags: string[]
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'ROOM Arquitetura',
    category: 'Landing page · Arquitetura sustentável',
    description: 'Uma presença digital sofisticada para transformar posicionamento em novos projetos.',
    url: 'https://roomarquiteturasustentavel.com.br',
    accent: 'lime',
    tags: ['UX/UI', 'React', 'Landing page'],
  },
  {
    number: '02',
    title: 'Ian Schmoeller',
    category: 'Site profissional · Música',
    description: 'Um site autoral para apresentar trabalho, identidade e conteúdo de um professor de música.',
    url: 'https://ianschmoeller.vercel.app/',
    accent: 'cyan',
    tags: ['Design', 'React', 'Vercel'],
  },
  {
    number: '03',
    title: 'One Frame',
    category: 'Experimento digital · Em construção',
    description: 'Um projeto em desenvolvimento explorando narrativa visual, movimento e experiência web.',
    url: 'https://one-frame-site-iota.vercel.app/',
    accent: 'blue',
    tags: ['Em construção', 'UI', 'Web'],
  },
]

export const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Figma']

export const processSteps = [
  ['01', 'Entender', 'Antes do código, vem a pergunta certa. Entendo objetivo, público e contexto.'],
  ['02', 'Desenhar', 'Organizo conteúdo, experiência e identidade para criar uma direção visual consistente.'],
  ['03', 'Construir', 'Transformo a ideia em uma interface responsiva, rápida e bem estruturada.'],
  ['04', 'Publicar', 'Deploy, ajustes finais e uma experiência pronta para o mundo real.'],
] as const
