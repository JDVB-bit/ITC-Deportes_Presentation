import { ArrowRight, Trophy } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ITC_DEPORTES_URL } from '../constants'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'scale-100')
            e.target.classList.remove('opacity-0', 'scale-95')
          }
        })
      },
      { threshold: 0.2 }
    )
    sectionRef.current?.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-green-deep relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-brand/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        {/* Floating sport emojis */}
        <div className="absolute top-8 left-[10%] text-4xl opacity-10 animate-float-slow" aria-hidden="true">🏀</div>
        <div className="absolute top-12 right-[15%] text-3xl opacity-10 animate-float" aria-hidden="true">⚽</div>
        <div className="absolute bottom-8 left-[20%] text-3xl opacity-10 animate-float-alt" aria-hidden="true">🏐</div>
        <div className="absolute bottom-12 right-[10%] text-4xl opacity-10 animate-float-slow" aria-hidden="true">🤾</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          data-reveal
          className="opacity-0 scale-95 transition-all duration-700"
        >
          {/* Trophy icon */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-20 h-20 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shadow-xl">
              <Trophy className="w-10 h-10 text-gold" />
            </div>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none mb-6"
          >
            ¿Listo para{' '}
            <span className="text-gold">seguir</span>{' '}
            el torneo?
          </h2>

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Entra a ITC Deportes y consulta partidos, resultados, tablas y el camino hacia el campeonato.
          </p>

          {/* CTA button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ITC_DEPORTES_URL}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-green-deep font-heading font-700 text-lg rounded-2xl transition-all duration-200 shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-green-deep group"
              aria-label="Entrar a la plataforma ITC Deportes"
            >
              <Trophy className="w-6 h-6" aria-hidden="true" />
              Entrar a ITC Deportes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </a>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {['Consulta pública', 'Información organizada', 'Cuatro deportes'].map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-white/50 text-sm font-body">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
