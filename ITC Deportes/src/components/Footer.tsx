import { Trophy, Mail, Share2, Tv2, Rss } from 'lucide-react'
import { ITC_DEPORTES_URL } from '../constants'

const footerNav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Deportes', href: '#deportes' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Preguntas frecuentes', href: '#faq' },
]

const sports = ['Balonmano', 'Microfútbol', 'Baloncesto', 'Voleibol']

export default function Footer() {
  return (
    <footer className="bg-[#050F09] text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pie de página ITC Deportes</h2>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-green-brand rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg text-white tracking-wide">ITC DEPORTES</span>
                <span className="text-[9px] font-heading font-600 text-gray-500 tracking-widest uppercase">ETITC</span>
              </div>
            </div>

            <p className="text-sm font-body text-gray-400 leading-relaxed mb-5 max-w-xs">
              Un proyecto para la comunidad deportiva de la ETITC. Partidos, resultados y tablas de los torneos Inter cursos.
            </p>

            {/* Social links (placeholders) */}
            <div className="flex gap-3" aria-label="Redes sociales institucionales">
              {[
                { Icon: Share2, label: 'Comunidad ITC Deportes' },
                { Icon: Rss, label: 'Novedades ITC Deportes' },
                { Icon: Tv2, label: 'Transmisiones ITC Deportes' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={ITC_DEPORTES_URL}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-brand/20 border border-white/10 hover:border-green-brand/30 flex items-center justify-center text-gray-400 hover:text-green-brand-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-600 text-white uppercase text-sm tracking-wider mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-body text-gray-400 hover:text-green-brand-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ITC_DEPORTES_URL}
                  className="text-sm font-body text-gold hover:text-gold-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded flex items-center gap-1.5"
                >
                  <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                  Entrar a ITC Deportes
                </a>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-heading font-600 text-white uppercase text-sm tracking-wider mb-5">
              Deportes
            </h3>
            <ul className="space-y-2.5">
              {sports.map(sport => (
                <li key={sport}>
                  <a
                    href="#deportes"
                    className="text-sm font-body text-gray-400 hover:text-green-brand-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand rounded"
                  >
                    {sport}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Institutional */}
          <div>
            <h3 className="font-heading font-600 text-white uppercase text-sm tracking-wider mb-5">
              Contacto institucional
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-body text-gray-400">
                    {/* Placeholder - replace with actual contact email */}
                    <span className="text-gray-500 italic text-xs">correo@etitc.edu.co</span>
                  </p>
                  <p className="text-[10px] text-gray-600 font-body mt-0.5">* Contacto institucional por confirmar</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-body text-gray-500 leading-relaxed">
                  Escuela Tecnológica Instituto Técnico Central — ETITC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-gray-600">
            &copy; {new Date().getFullYear()} ITC Deportes · Escuela Tecnológica Instituto Técnico Central (ETITC)
          </p>
          <p className="text-xs font-body text-gray-600 italic">
            Diseñado como proyecto académico de Diseño Web
          </p>
        </div>
      </div>
    </footer>
  )
}
