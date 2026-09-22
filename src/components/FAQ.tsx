import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: '¿Necesito una cuenta para consultar los torneos?',
    answer: 'No. La consulta pública de partidos, resultados, tablas y cuadros está disponible sin necesidad de crear una cuenta.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo inscribo mi curso?',
    answer: 'La inscripción del equipo se realiza mediante el proceso definido por el Comité de Deportes de la ETITC.',
  },
  {
    id: 'faq-3',
    question: '¿Quién carga los resultados?',
    answer: 'Los resultados son registrados por el docente encargado del torneo correspondiente.',
  },
  {
    id: 'faq-4',
    question: '¿Puede un docente modificar cualquier torneo?',
    answer: 'No. Cada docente encargado tiene permisos únicamente sobre el torneo que administra.',
  },
  {
    id: 'faq-5',
    question: '¿Qué deportes están disponibles?',
    answer: 'Balonmano, Microfútbol, Baloncesto y Voleibol.',
  },
  {
    id: 'faq-6',
    question: '¿Puedo consultar la plataforma desde mi celular?',
    answer: 'Sí. La experiencia está pensada para que la comunidad pueda consultar la información desde celulares, tablets y computadores.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
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

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id)

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white dark:bg-green-deep"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1.5 bg-green-brand/10 border border-green-brand/20 text-green-brand dark:text-green-brand-light text-xs font-heading font-600 rounded-full uppercase tracking-widest mb-4">
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="font-heading font-700 text-3xl sm:text-4xl text-gray-900 dark:text-white uppercase leading-tight"
          >
            Resolvemos tus{' '}
            <span className="text-green-brand">dudas</span>
          </h2>
        </div>

        {/* Accordion */}
        <dl
          data-reveal
          className="space-y-3 opacity-0 translate-y-8 transition-all duration-700 delay-150"
        >
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-green-brand/40 shadow-md'
                    : 'border-gray-100 dark:border-white/8 hover:border-green-brand/25'
                } bg-white dark:bg-green-card`}
              >
                <dt>
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`answer-${faq.id}`}
                    id={`question-${faq.id}`}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-green-brand focus:ring-inset rounded-xl"
                  >
                    <span className="font-heading font-600 text-sm sm:text-base text-gray-800 dark:text-gray-100 leading-snug">
                      <span className="text-green-brand dark:text-green-brand-light font-display mr-2 text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-brand shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={`answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`question-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="px-5 pb-4 pt-0 text-sm text-gray-600 dark:text-gray-300 font-body leading-relaxed border-t border-gray-100 dark:border-white/5 pt-3">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
