import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const sports = [
  {
    id: 'balonmano',
    emoji: '🤾',
    name: 'Balonmano',
    description: 'Consulta partidos, resultados y clasificación del torneo de balonmano.',
    scoring: 'Puntos por resultado',
    accent: '#1D7A45',
    gradient: 'from-green-brand/20 to-green-brand/5',
    borderHover: 'hover:border-green-brand/60',
    tag: 'Inter cursos',
  },
  {
    id: 'microfutbol',
    emoji: '⚽',
    name: 'Microfútbol',
    description: 'Sigue cada jornada y descubre qué equipos avanzan hacia la final.',
    scoring: 'Clasificación por torneo',
    accent: '#C9A227',
    gradient: 'from-gold/20 to-gold/5',
    borderHover: 'hover:border-gold/60',
    tag: 'Inter cursos',
  },
  {
    id: 'baloncesto',
    emoji: '🏀',
    name: 'Baloncesto',
    description: 'Revisa resultados, posiciones y próximos encuentros de tu curso.',
    scoring: 'Puntos por resultado',
    accent: '#1D7A45',
    gradient: 'from-green-brand/20 to-green-brand/5',
    borderHover: 'hover:border-green-brand/60',
    tag: 'Inter cursos',
  },
  {
    id: 'voleibol',
    emoji: '🏐',
    name: 'Voleibol',
    description: 'Consulta partidos y resultados organizados por sets.',
    scoring: 'Resultados por sets',
    accent: '#C9A227',
    gradient: 'from-gold/20 to-gold/5',
    borderHover: 'hover:border-gold/60',
    tag: 'Inter cursos',
  },
]

export default function Sports() {
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
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="deportes"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white dark:bg-green-deep"
      aria-labelledby="sports-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/25 text-gold dark:text-gold-light text-xs font-heading font-600 rounded-full uppercase tracking-widest mb-4">
            Torneos Inter cursos
          </span>
          <h2
            id="sports-heading"
            className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white uppercase leading-tight mb-4"
          >
            Cuatro deportes.{' '}
            <span className="text-gradient-gold">Una misma pasión.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Sigue los torneos Inter cursos de la ETITC y descubre cómo avanza tu equipo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, i) => (
            <article
              key={sport.id}
              data-reveal
              className={`
                group relative flex flex-col bg-gray-50 dark:bg-green-card rounded-2xl border border-gray-200 dark:border-white/8 p-6
                ${sport.borderHover}
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 cursor-default
                opacity-0 translate-y-8
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-labelledby={`sport-${sport.id}-name`}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${sport.accent}, transparent)` }}
                aria-hidden="true"
              />

              {/* Emoji icon in styled container */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sport.gradient} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/20 dark:border-white/5 shadow-sm`}
                aria-hidden="true"
              >
                {sport.emoji}
              </div>

              {/* Tag */}
              <span className="text-[10px] font-heading font-600 uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                {sport.tag}
              </span>

              {/* Name */}
              <h3
                id={`sport-${sport.id}-name`}
                className="font-heading font-700 text-xl uppercase text-gray-900 dark:text-white mb-3 group-hover:text-green-brand dark:group-hover:text-green-brand-light transition-colors duration-200"
              >
                {sport.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm font-body leading-relaxed flex-1 mb-4">
                {sport.description}
              </p>

              {/* Scoring badge */}
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-heading font-600 uppercase tracking-wide border"
                  style={{ color: sport.accent, borderColor: `${sport.accent}40`, background: `${sport.accent}10` }}
                >
                  <span className="w-1 h-1 rounded-full" style={{ background: sport.accent }} aria-hidden="true" />
                  {sport.scoring}
                </span>
                <ArrowRight
                  className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-green-brand dark:group-hover:text-green-brand-light group-hover:translate-x-1 transition-all duration-200"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
