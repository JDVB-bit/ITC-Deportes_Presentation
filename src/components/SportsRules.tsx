import { useEffect, useRef } from 'react'

const rules = [
  {
    emoji: '🤾',
    name: 'Balonmano',
    system: 'Puntos por resultado',
    detail: 'Victoria, empate o derrota determina los puntos en tabla.',
    tag: 'Sistema de puntos',
    tagColor: 'bg-green-brand/10 text-green-brand dark:text-green-brand-light border-green-brand/20',
  },
  {
    emoji: '⚽',
    name: 'Microfútbol',
    system: 'Clasificación por torneo',
    detail: 'Resultados según las reglas definidas por el Comité de Deportes.',
    tag: 'Reglas propias',
    tagColor: 'bg-gold/10 text-gold-dark dark:text-gold-light border-gold/20',
  },
  {
    emoji: '🏀',
    name: 'Baloncesto',
    system: 'Puntos por resultado',
    detail: 'La posición en tabla refleja victorias, empates y derrotas acumuladas.',
    tag: 'Sistema de puntos',
    tagColor: 'bg-green-brand/10 text-green-brand dark:text-green-brand-light border-green-brand/20',
  },
  {
    emoji: '🏐',
    name: 'Voleibol',
    system: 'Resultados por sets',
    detail: 'Cada partido se juega y registra por sets ganados.',
    tag: 'Sistema de sets',
    tagColor: 'bg-gold/10 text-gold-dark dark:text-gold-light border-gold/20',
  },
]

export default function SportsRules() {
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
      id="reglamentos"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white dark:bg-green-deep"
      aria-labelledby="rules-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2
            id="rules-heading"
            className="font-heading font-700 text-3xl sm:text-4xl text-gray-900 dark:text-white uppercase leading-tight mb-3"
          >
            Cada deporte tiene su propia{' '}
            <span className="text-gold">forma de competir.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            ITC Deportes está diseñado para respetar las reglas específicas de cada torneo de la ETITC.
          </p>
        </div>

        {/* Rules grid */}
        <div
          data-reveal
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          {rules.map((rule, i) => (
            <div
              key={rule.name}
              className="group bg-gray-50 dark:bg-green-card rounded-2xl p-5 border border-gray-100 dark:border-white/8 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Emoji */}
              <div className="text-3xl mb-3" aria-hidden="true">{rule.emoji}</div>

              {/* Sport name */}
              <h3 className="font-heading font-700 text-base uppercase text-gray-900 dark:text-white mb-1">
                {rule.name}
              </h3>

              {/* System */}
              <p className="font-heading font-600 text-sm text-gray-700 dark:text-gray-200 mb-2">
                {rule.system}
              </p>

              {/* Detail */}
              <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                {rule.detail}
              </p>

              {/* Tag */}
              <span className={`inline-block px-2.5 py-1 text-[10px] font-heading font-600 uppercase tracking-wide rounded-full border ${rule.tagColor}`}>
                {rule.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
