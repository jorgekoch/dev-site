import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Statement } from './components/sections/Statement'
import { Work } from './components/sections/Work'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Hero />
        <Statement />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
    </div>
  )
}
