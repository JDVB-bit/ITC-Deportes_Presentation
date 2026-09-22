import { useEffect, useRef } from 'react'
import { GraduationCap, ClipboardList, Building2, Check } from 'lucide-react'

const benefits = [
  {
    id: 'students',
    icon: GraduationCap,
    iconBg: 'bg-green-brand/10 dark:bg-green-brand/15',
    iconColor: 'text-green-brand',
    title: 'Para estudiantes',
    persona: 'Como Camila, 16 años · Baloncesto',
    description:
      'Encuentra rápidamente los partidos, resultados, tablas y cuadros de tu equipo desde cualquier dispositivo.',
    features: [
      { label: 'Consulta rápida', desc: 'Información actualizada al instante' },
      { label: 'Sin cuenta para consultar', desc: 'Accede sin registrarte' },
      { label: 'Diseño adaptado al celular', desc: 'Perfecto desde tu smartphone' },
      { label: 'Información actualizada', desc: 'Sin depender de grupos de chat' },
    ],
    cta: 'Consulta tu torneo',
    accentColor: 'border-green-brand/30 hover:border-green-brand',
    topBar: 'bg-green-brand',
  },
  {
    id: 'teachers',
    icon: ClipboardList,
    iconBg: 'bg-gold/10 dark:bg-gold/15',
    iconColor: 'text-gold',
    title: 'Para docentes',
    persona: 'Como el profe Andrés · Ed. Física',
    description:
      'Organiza y actualiza el torneo sin depender de archivos dispersos o procesos manuales.',
    features: [
      { label: 'Registro de resultados', desc: 'Actualiza el marcador al finalizar' },
      { label: 'Organización de partidos', desc: 'Calendario siempre ordenado' },
      { label: 'Gestión del torneo asignado', desc: 'Solo tu torneo, nada más' },
      { label: 'Confirmación de cambios', desc: 'Todo queda guardado correctamente' },
    ],
    cta: 'Gestiona tu torneo',
    accentColor: 'border-gold/30 hover:border-gold',
    topBar: 'bg-gold',
  },
  {
    id: 'institution',
    icon: Building2,
    iconBg: 'bg-green-brand-dark/10 dark:bg-white/8',
    iconColor: 'text-green-brand-dark dark:text-green-brand-light',
    title: 'Para la institución',
    persona: 'Comunidad ETITC',
    description:
      'Centraliza la información deportiva y mejora la experiencia de toda la comunidad ETITC.',
    features: [
      { label: 'Información organizada', desc: 'Un solo lugar, todos los datos' },
      { label: 'Mayor transparencia', desc: 'Resultados visibles para todos' },
      { label: 'Menos dependencia de archivos', desc: 'Adiós a los Excel perdidos' },
      { label: 'Mejor comunicación', desc: 'La comunidad siempre informada' },
    ],
    cta: 'Conocer la plataforma',
    accentColor: 'border-gray-200 dark:border-white/10 hover:border-green-brand/40',
    topBar: 'bg-gradient-to-r from-green-brand to-gold',
  },
]

export default function Benefits() {
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
      id="beneficios"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0d2a1a]/40"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1.5 bg-green-brand/10 border border-green-brand/20 text-green-brand dark:text-green-brand-light text-xs font-heading font-600 rounded-full uppercase tracking-widest mb-4">
            Para toda la comunidad
          </span>
          <h2
            id="benefits-heading"
            className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white uppercase leading-tight"
          >
            ¿Por qué{' '}
            <span className="text-green-brand">ITC Deportes?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.id}
                data-reveal
                className={`
                  relative flex flex-col bg-white dark:bg-green-card rounded-2xl border
                  ${benefit.accentColor}
                  shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                  opacity-0 translate-y-8 overflow-hidden
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
                aria-labelledby={`benefit-${benefit.id}-title`}
              >
                {/* Top accent bar */}
                <div className={`h-1 ${benefit.topBar}`} aria-hidden="true" />

                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  {/* Icon + persona */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${benefit.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${benefit.iconColor}`} aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-heading font-500 text-gray-400 dark:text-gray-500 text-right max-w-[100px] leading-tight">
                      {benefit.persona}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    id={`benefit-${benefit.id}-title`}
                    className="font-heading font-700 text-xl uppercase text-gray-900 dark:text-white mb-3"
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-body leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 flex-1" aria-label={`Funcionalidades para ${benefit.title}`}>
                    {benefit.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-green-brand/10 dark:bg-green-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-green-brand" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-heading font-600 text-gray-800 dark:text-gray-100 block">{f.label}</span>
                          <span className="text-[11px] font-body text-gray-500 dark:text-gray-400">{f.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
