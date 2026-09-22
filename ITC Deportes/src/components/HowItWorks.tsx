import { useEffect, useRef } from 'react'
import { Users, Shuffle, Swords, ClipboardCheck, Trophy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Users,
    title: 'Inscribe tu equipo',
    description: 'Cada curso registra su equipo en el torneo correspondiente.',
    color: 'text-green-brand',
    bg: 'bg-green-brand/10 dark:bg-green-brand/15',
    border: 'border-green-brand/30',
  },
  {
    number: '02',
    icon: Shuffle,
    title: 'Se organizan los partidos',
    description: 'Los encuentros se sortean y se crea el calendario del torneo.',
    color: 'text-gold',
    bg: 'bg-gold/10 dark:bg-gold/15',
    border: 'border-gold/30',
  },
  {
    number: '03',
    icon: Swords,
    title: 'Se juegan los partidos',
    description: 'Los equipos compiten según las reglas de cada deporte.',
    color: 'text-green-brand',
    bg: 'bg-green-brand/10 dark:bg-green-brand/15',
    border: 'border-green-brand/30',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Se registran los resultados',
    description: 'El docente encargado actualiza el marcador.',
    color: 'text-gold',
    bg: 'bg-gold/10 dark:bg-gold/15',
    border: 'border-gold/30',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Sigue el camino al campeonato',
    description: 'Consulta tablas, resultados, calendario y cuadro final hasta conocer al campeón.',
    color: 'text-gold',
    bg: 'bg-gold/15 dark:bg-gold/20',
    border: 'border-gold/40',
  },
]

export default function HowItWorks() {
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
      id="como-funciona"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-green-deep"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-green-brand-light text-xs font-heading font-600 rounded-full uppercase tracking-widest mb-4">
            Proceso
          </span>
          <h2
            id="how-heading"
            className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight"
          >
            Así funciona{' '}
            <span className="text-gradient-green">ITC Deportes</span>
          </h2>
        </div>

        {/* Desktop horizontal steps */}
        <div
          data-reveal
          className="hidden lg:flex items-start relative opacity-0 translate-y-8 transition-all duration-700 delay-200"
          aria-label="Pasos del proceso"
        >
          {/* Connector line */}
          <div
            className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-brand via-gold to-gold"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex-1 flex flex-col items-center text-center px-2 relative">
                {/* Step circle */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center mb-4 shadow-lg`}
                  aria-hidden="true"
                >
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </div>

                {/* Step number */}
                <span className={`font-display text-2xl ${step.color} mb-2`}>{step.number}</span>

                {/* Title */}
                <h3 className="font-heading font-600 text-sm text-white uppercase mb-2 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs font-body leading-relaxed max-w-[140px]">
                  {step.description}
                </p>

                {/* Connector dot label */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-7 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-gold z-20"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile vertical timeline */}
        <ol
          data-reveal
          className="lg:hidden space-y-0 opacity-0 translate-y-8 transition-all duration-700 delay-200"
          aria-label="Pasos del proceso"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li key={step.number} className="flex gap-5 relative">
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-green-brand/50 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Icon */}
                <div className="relative z-10 shrink-0">
                  <div className={`w-12 h-12 rounded-full ${step.bg} border ${step.border} flex items-center justify-center shadow-md`}>
                    <Icon className={`w-5 h-5 ${step.color}`} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-8 pt-1">
                  <span className={`font-display text-xl ${step.color} block mb-0.5`}>{step.number}</span>
                  <h3 className="font-heading font-700 text-base text-white uppercase mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm font-body leading-relaxed">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
