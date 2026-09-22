import { useEffect, useRef } from 'react'
import { Shield, Heart, Users2 } from 'lucide-react'

export default function TrustMessage() {
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
      className="py-20 lg:py-24 bg-green-brand relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black/10 translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          data-reveal
          className="opacity-0 scale-95 transition-all duration-700"
        >
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
              <Users2 className="w-6 h-6 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-gold fill-gold" />
            </div>
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2
            id="trust-heading"
            className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight mb-6"
          >
            Diseñado para la comunidad{' '}
            <span className="text-gold">ETITC</span>
          </h2>

          {/* Text */}
          <p className="text-white/80 text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto mb-8">
            ITC Deportes nace pensando en estudiantes, docentes y coordinadores que necesitan una forma
            más clara, rápida y organizada de seguir los torneos Inter cursos.
          </p>

          {/* Values row */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🎓 Para estudiantes',
              '📋 Para docentes',
              '🏫 Para la institución',
              '📱 Desde cualquier dispositivo',
            ].map(item => (
              <span
                key={item}
                className="px-4 py-2 bg-white/15 border border-white/20 text-white/90 text-xs font-heading font-600 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
