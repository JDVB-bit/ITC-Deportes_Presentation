import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, PanelLeftClose, PanelLeftOpen, X, Trophy } from 'lucide-react'
import { ITC_DEPORTES_URL } from '../constants'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
  sidebarOpen: boolean
  setSidebarOpen: (v: boolean) => void
}

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Deportes', href: '#deportes' },
  { label: 'Momentos', href: '#momentos' },
  { label: 'Partidos', href: '#partidos' },
  { label: 'Reglamento', href: '#reglamentos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({
  darkMode,
  setDarkMode,
  sidebarOpen,
  setSidebarOpen,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-green-deep/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 dark:bg-green-deep/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group" aria-label="ITC Deportes - Inicio">
            <div className="w-9 h-9 bg-green-brand rounded-lg flex items-center justify-center shadow-sm group-hover:bg-green-brand-dark transition-colors duration-200">
              <Trophy className="w-5 h-5 text-gold" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-green-brand dark:text-green-brand-light tracking-wide">ITC DEPORTES</span>
              <span className="text-[9px] font-heading font-600 text-gray-500 dark:text-gray-400 tracking-widest uppercase">ETITC</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-heading font-500 text-gray-600 dark:text-gray-300 hover:text-green-brand dark:hover:text-green-brand-light transition-colors duration-200 rounded-md hover:bg-green-brand/5 focus:outline-none focus:ring-2 focus:ring-green-brand focus:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? 'Ocultar menú lateral' : 'Mostrar menú lateral'}
              aria-expanded={sidebarOpen}
              aria-controls="platform-sidebar"
              className="hidden xl:flex w-9 h-9 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
              title={sidebarOpen ? 'Ocultar menú lateral' : 'Mostrar menú lateral'}
            >
              {sidebarOpen ? (
                <PanelLeftClose className="w-4.5 h-4.5" />
              ) : (
                <PanelLeftOpen className="w-4.5 h-4.5" />
              )}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* CTA Desktop */}
            <a
              href={ITC_DEPORTES_URL}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-green-brand hover:bg-green-brand-dark text-white font-heading font-600 text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-brand focus:ring-offset-2 animate-pulse-glow"
              aria-label="Entrar a la plataforma ITC Deportes"
            >
              <Trophy className="w-4 h-4 text-gold" />
              Entrar a ITC Deportes
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-white dark:bg-green-card border-t border-gray-100 dark:border-white/10 px-4 pb-6 pt-3">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-heading font-500 text-gray-700 dark:text-gray-200 hover:text-green-brand dark:hover:text-green-brand-light hover:bg-green-brand/5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
            <a
              href={ITC_DEPORTES_URL}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-brand hover:bg-green-brand-dark text-white font-heading font-600 text-base rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
              aria-label="Entrar a la plataforma ITC Deportes"
            >
              <Trophy className="w-5 h-5 text-gold" />
              Entrar a ITC Deportes
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
