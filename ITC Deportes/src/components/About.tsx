import { useEffect, useRef } from 'react'
import { CheckCircle2, Calendar, BarChart2, Trophy, Users } from 'lucide-react'

function MockPlatformUI() {
  return (
    <div className="relative">
      {/* Browser chrome */}
      <div className="bg-gray-100 dark:bg-[#0a1f12] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-green-brand/20 score-card-glow">
        {/* Browser bar */}
        <div className="bg-gray-200 dark:bg-[#0d2a1a] px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
          </div>
          <div className="flex-1 bg-white/60 dark:bg-white/10 rounded-md px-3 py-1 text-[11px] font-body text-gray-500 dark:text-gray-400 text-center">
            itcdeportes.etitc.edu.co
          </div>
        </div>

        {/* App header */}
        <div className="bg-green-brand px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gold" />
            <span className="font-display text-white text-sm tracking-wide">ITC DEPORTES</span>
          </div>
          <span className="text-[10px] font-heading text-green-brand-light bg-white/10 px-2 py-0.5 rounded-full">Temporada 2024</span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 bg-white dark:bg-[#0B1E13]">
          {/* Próximo partido */}
          <div className="bg-gray-50 dark:bg-green-card rounded-xl p-3 border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-1.5 mb-2">
              <Calendar className="w-3 h-3 text-gold" />
              <span className="text-[10px] font-heading font-600 text-gold uppercase tracking-wider">Próximo Partido</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-brand/10 dark:bg-green-brand/20 rounded-full flex items-center justify-center mx-auto mb-1 text-sm">🏀</div>
                <span className="text-[10px] font-body font-600 text-gray-700 dark:text-gray-200">Curso 10A</span>
              </div>
              <div className="text-center px-3">
                <div className="font-display text-lg text-green-brand dark:text-green-brand-light">VS</div>
                <div className="text-[9px] font-body text-gray-400">Hoy · 2:00 PM</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-brand/10 dark:bg-green-brand/20 rounded-full flex items-center justify-center mx-auto mb-1 text-sm">🏀</div>
                <span className="text-[10px] font-body font-600 text-gray-700 dark:text-gray-200">Curso 11B</span>
              </div>
            </div>
          </div>

          {/* Tabla posiciones */}
          <div className="bg-gray-50 dark:bg-green-card rounded-xl p-3 border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-1.5 mb-2">
              <BarChart2 className="w-3 h-3 text-gold" />
              <span className="text-[10px] font-heading font-600 text-gold uppercase tracking-wider">Tabla — Baloncesto</span>
            </div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="text-gray-400 dark:text-gray-500">
                  <th className="text-left font-heading pb-1">#</th>
                  <th className="text-left font-heading pb-1">Equipo</th>
                  <th className="font-heading pb-1">PJ</th>
                  <th className="font-heading pb-1">PG</th>
                  <th className="font-heading pb-1 text-gold">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {[
                  { pos: 1, name: 'Curso 11A', pj: 3, pg: 3, pts: 9, gold: true },
                  { pos: 2, name: 'Curso 10A', pj: 3, pg: 2, pts: 6, gold: false },
                  { pos: 3, name: 'Curso 9B', pj: 3, pg: 1, pts: 3, gold: false },
                  { pos: 4, name: 'Curso 10B', pj: 3, pg: 0, pts: 0, gold: false },
                ].map(row => (
                  <tr key={row.pos} className={row.gold ? 'text-gold' : 'text-gray-600 dark:text-gray-300'}>
                    <td className="py-1 font-display">{row.pos}</td>
                    <td className="py-1 font-body">{row.name}</td>
                    <td className="py-1 text-center font-body">{row.pj}</td>
                    <td className="py-1 text-center font-body">{row.pg}</td>
                    <td className="py-1 text-center font-heading font-600">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resultado reciente */}
          <div className="flex items-center gap-2 p-2.5 bg-gray-50 dark:bg-green-card rounded-xl border border-gray-100 dark:border-white/5">
            <div className="flex-1 flex items-center gap-2">
              <Users className="w-3 h-3 text-gray-400 shrink-0" />
              <span className="text-[10px] font-body text-gray-600 dark:text-gray-300 font-500">Curso 11A</span>
            </div>
            <div className="px-3 py-0.5 bg-green-brand/10 dark:bg-green-brand/20 rounded-md">
              <span className="font-display text-sm text-green-brand dark:text-green-brand-light">24 – 18</span>
            </div>
            <div className="flex-1 flex items-center justify-end gap-2">
              <span className="text-[10px] font-body text-gray-600 dark:text-gray-300 font-500">Curso 9B</span>
              <Users className="w-3 h-3 text-gray-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -right-4 bg-gold rounded-xl px-4 py-2 shadow-lg" aria-hidden="true">
        <span className="font-heading font-700 text-green-deep text-sm">Sin cuenta requerida</span>
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0')
            e.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const points = [
    'Consulta pública sin necesidad de crear una cuenta',
    'Una sola plataforma para los cuatro deportes',
    'Información organizada y siempre actualizada',
    'Diseñado específicamente para la comunidad ETITC',
  ]

  return (
    <section
      id="que-es"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0d2a1a]/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div
          data-reveal
          className="flex justify-center mb-8 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-brand/10 border border-green-brand/20 rounded-full text-green-brand dark:text-green-brand-light text-xs font-heading font-600 uppercase tracking-widest">
            Una plataforma para toda la comunidad ETITC
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <h2
              id="about-heading"
              data-reveal
              className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white uppercase leading-tight mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-100"
            >
              El deporte de la ETITC,{' '}
              <span className="text-green-brand">organizado</span>{' '}
              en un solo lugar.
            </h2>
            <p
              data-reveal
              className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-200"
            >
              ITC Deportes centraliza la información de los torneos Inter cursos de la ETITC.
              Partidos, resultados, tablas de posiciones y cuadros eliminatorios: todo en un mismo lugar,
              accesible desde cualquier dispositivo.
            </p>

            {/* Feature points */}
            <ul
              data-reveal
              className="space-y-3 mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300"
              aria-label="Características principales"
            >
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 dark:text-gray-200 text-sm font-body">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats strip */}
            <div
              data-reveal
              className="grid grid-cols-3 gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-[400ms]"
              aria-label="Estadísticas del proyecto"
            >
              {[
                { value: '4', label: 'Deportes' },
                { value: '1', label: 'Plataforma' },
                { value: '∞', label: 'Info centralizada' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white dark:bg-green-card rounded-xl border border-gray-100 dark:border-white/10 shadow-sm"
                >
                  <div className="font-display text-3xl text-green-brand dark:text-green-brand-light mb-1">{stat.value}</div>
                  <div className="text-xs font-heading font-500 text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mock UI */}
          <div
            data-reveal
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200 pb-6 pr-4"
          >
            <MockPlatformUI />
          </div>
        </div>
      </div>
    </section>
  )
}
