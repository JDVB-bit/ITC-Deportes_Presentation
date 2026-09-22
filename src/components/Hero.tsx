import { ArrowRight, ChevronDown, Trophy, Zap } from 'lucide-react'
import { ITC_DEPORTES_URL } from '../constants'
import { useEffect, useRef } from 'react'

function SportBall({ className, style, type }: { className?: string; style?: React.CSSProperties; type: 'basketball' | 'soccer' | 'volleyball' | 'handball' }) {
  const ballClasses: Record<string, string> = {
    basketball: 'ball-basketball',
    soccer: 'ball-soccer',
    volleyball: 'ball-volleyball',
    handball: 'ball-handball',
  }
  return (
    <div
      className={`rounded-full ${ballClasses[type]} ${className ?? ''}`}
      style={style}
      aria-hidden="true"
    />
  )
}

function ScoreCard({ team1, team2, score1, score2, sport, live }: {
  team1: string; team2: string; score1: number; score2: number; sport: string; live?: boolean
}) {
  return (
    <div className="bg-white/10 dark:bg-white/8 backdrop-blur-sm border border-white/20 rounded-xl p-3.5 shadow-lg score-card-glow min-w-[200px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-heading font-600 text-gold uppercase tracking-wider">{sport}</span>
        {live && (
          <span className="flex items-center gap-1 text-[10px] font-body font-500 text-red-400">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            EN VIVO
          </span>
        )}
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-body font-600 text-white truncate">{team1}</span>
          <span className={`text-lg font-display text-white ${score1 > score2 ? 'text-gold-light' : ''}`}>{score1}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-body font-500 text-white/70 truncate">{team2}</span>
          <span className={`text-lg font-display text-white/70 ${score2 > score1 ? 'text-gold-light' : ''}`}>{score2}</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0')
            e.target.classList.remove('opacity-0', 'translate-y-6')
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
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-green-deep"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-deep via-[#0f2d1a] to-[#091F13]" aria-hidden="true" />
      <div className="absolute inset-0 hero-diagonal" aria-hidden="true" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#1D7A45 1px, transparent 1px), linear-gradient(90deg, #1D7A45 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      {/* Floating sport balls */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <SportBall type="basketball" className="w-28 h-28 absolute top-[12%] right-[8%] opacity-40 animate-float" />
        <SportBall type="volleyball" className="w-20 h-20 absolute top-[55%] right-[18%] opacity-30 animate-float-alt" />
        <SportBall type="soccer" className="w-16 h-16 absolute bottom-[22%] left-[6%] opacity-25 animate-float-slow" />
        <SportBall type="handball" className="w-12 h-12 absolute top-[30%] left-[12%] opacity-20 animate-float-alt" />
        <SportBall type="basketball" className="w-8 h-8 absolute bottom-[40%] right-[32%] opacity-15 animate-float" />

        {/* Decorative circles */}
        <div className="absolute top-[20%] right-[38%] w-64 h-64 rounded-full border border-green-brand/20 animate-float-slow" />
        <div className="absolute top-[15%] right-[36%] w-96 h-96 rounded-full border border-green-brand/10" />

        {/* Geometric accent lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Score cards floating - hidden on small screens */}
      <div className="absolute top-[22%] right-[4%] hidden xl:block animate-float" aria-hidden="true">
        <ScoreCard team1="Curso 10A" team2="Curso 11B" score1={3} score2={2} sport="Microfútbol" live />
      </div>
      <div className="absolute bottom-[28%] right-[6%] hidden xl:block animate-float-alt" aria-hidden="true">
        <ScoreCard team1="Curso 9A" team2="Curso 10B" score1={72} score2={65} sport="Baloncesto" />
      </div>

      {/* Mini standings card */}
      <div className="absolute top-[45%] left-[4%] hidden xl:block animate-float-slow" aria-hidden="true">
        <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-3 shadow-lg min-w-[160px]">
          <div className="text-[10px] font-heading font-600 text-gold uppercase tracking-wider mb-2">Tabla — Balonmano</div>
          {[
            { pos: 1, name: 'Curso 11A', pts: 9 },
            { pos: 2, name: 'Curso 10A', pts: 6 },
            { pos: 3, name: 'Curso 9B', pts: 3 },
          ].map(row => (
            <div key={row.pos} className="flex items-center gap-2 py-0.5">
              <span className="text-[10px] font-display text-gold-light w-3">{row.pos}</span>
              <span className="text-[11px] font-body text-white/80 flex-1">{row.name}</span>
              <span className="text-[11px] font-display text-white">{row.pts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            data-reveal
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-brand/20 border border-green-brand/30 rounded-full mb-6 opacity-0 translate-y-6 transition-all duration-700"
          >
            <Zap className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-heading font-600 text-green-brand-light tracking-wider uppercase">
              Escuela Tecnológica Instituto Técnico Central
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            data-reveal
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white uppercase leading-none mb-2 opacity-0 translate-y-6 transition-all duration-700 delay-100"
          >
            ITC
            <br />
            <span className="text-gradient-green">DEPORTES</span>
          </h1>

          {/* Subtitle heading */}
          <h2
            data-reveal
            className="font-heading font-700 text-xl sm:text-2xl lg:text-3xl text-white/90 uppercase tracking-wide mb-4 opacity-0 translate-y-6 transition-all duration-700 delay-200"
          >
            Todos los torneos de la ETITC,{' '}
            <span className="text-gold">en un solo lugar.</span>
          </h2>

          {/* Description */}
          <p
            data-reveal
            className="text-base sm:text-lg text-white/65 font-body max-w-xl leading-relaxed mb-10 opacity-0 translate-y-6 transition-all duration-700 delay-300"
          >
            Consulta partidos, resultados, tablas y cuadros de los torneos Inter cursos de{' '}
            <strong className="text-white/85 font-600">Balonmano, Microfútbol, Baloncesto y Voleibol.</strong>
          </p>

          {/* CTAs */}
          <div
            data-reveal
            className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-6 transition-all duration-700 delay-[400ms]"
          >
            <a
              href={ITC_DEPORTES_URL}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-green-brand hover:bg-green-brand-dark text-white font-heading font-700 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-brand-light focus:ring-offset-2 focus:ring-offset-green-deep group"
              aria-label="Entrar a la plataforma ITC Deportes"
            >
              <Trophy className="w-5 h-5 text-gold" />
              Entrar a ITC Deportes
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#que-es"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-600 text-base rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Conocer más sobre la plataforma"
            >
              Conocer la plataforma
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Sport badges */}
          <div
            data-reveal
            className="flex flex-wrap gap-2 mt-10 opacity-0 translate-y-6 transition-all duration-700 delay-500"
            aria-label="Deportes disponibles"
          >
            {['🤾 Balonmano', '⚽ Microfútbol', '🏀 Baloncesto', '🏐 Voleibol'].map((sport) => (
              <span
                key={sport}
                className="px-3 py-1.5 bg-white/8 border border-white/15 text-white/80 text-xs font-heading font-500 rounded-full"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#que-es"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full p-1"
        aria-label="Ir a la sección ¿Qué es ITC Deportes?"
      >
        <span className="text-[10px] font-heading font-500 tracking-widest uppercase">Descubrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
