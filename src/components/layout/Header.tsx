import { useState } from 'react'
import logo from '../../assets/logo-compacta.png'
import { useScrollState } from '../../hooks/useScrollState'

const links = [
  { label: 'Trabalho', href: '#trabalho' },
  { label: 'Sobre', href: '#sobre' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrollState()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Jorge Koch — início">
        <img src={logo} alt="Jorge Koch Dev" />
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span /><span />
      </button>

      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="#contato" onClick={closeMenu} className="nav-cta">
          Vamos conversar <span>↗</span>
        </a>
      </nav>
    </header>
  )
}
