import { useState, useEffect, useRef } from 'react'
import { Calendar, BarChart2, GitBranch, Circle } from 'lucide-react'

type Tab = 'partidos' | 'tabla' | 'cuadro'

const tabs: { id: Tab; label: string; icon: typeof Calendar }[] = [
  { id: 'partidos', label: 'Partidos', icon: Calendar },
  { id: 'tabla', label: 'Tabla', icon: BarChart2 },
  { id: 'cuadro', label: 'Cuadro', icon: GitBranch },
]

const matches = [
  { id: 1, team1: 'Curso 10A', team2: 'Curso 11B', score1: 3, score2: 2, date: 'Mar 12 · 2:00 PM', sport: 'Microfútbol', status: 'Finalizado', statusColor: 'text-gray-400' },
  { id: 2, team1: 'Curso 9A', team2: 'Curso 10B', score1: null, score2: null, date: 'Mar 14 · 3:30 PM', sport: 'Baloncesto', status: 'Próximo', statusColor: 'text-green-brand dark:text-green-brand-light' },
  { id: 3, team1: 'Curso 11A', team2: 'Curso 9B', score1: 2, score2: 1, date: 'Mar 10 · 1:00 PM', sport: 'Balonmano', status: 'Finalizado', statusColor: 'text-gray-400' },
  { id: 4, team1: 'Curso 10B', team2: 'Curso 11A', score1: null, score2: null, date: 'Mar 15 · 4:00 PM', sport: 'Voleibol', status: 'Próximo', statusColor: 'text-green-brand dark:text-green-brand-light' },
]

const standings = [
  { pos: 1, name: 'Curso 11A', pj: 4, pg: 4, pe: 0, pp: 0, pts: 12, highlight: true },
  { pos: 2, name: 'Curso 10A', pj: 4, pg: 3, pe: 0, pp: 1, pts: 9, highlight: false },
  { pos: 3, name: 'Curso 9A', pj: 4, pg: 2, pe: 0, pp: 2, pts: 6, highlight: false },
  { pos: 4, name: 'Curso 10B', pj: 4, pg: 1, pe: 0, pp: 3, pts: 3, highlight: false },
  { pos: 5, name: 'Curso 9B', pj: 4, pg: 0, pe: 0, pp: 4, pts: 0, highlight: false },
]

function MatchesTab() {
  return (
    <div className="space-y-3" role="list" aria-label="Lista de partidos">
      {matches.map(match => (
        <div
          key={match.id}
          role="listitem"
          className="flex items-center justify-between gap-3 p-4 bg-gray-50 dark:bg-green-card rounded-xl border border-gray-100 dark:border-white/5"
        >
          <div className="flex flex-col gap-0.5 min-w-0 w-24 sm:w-32">
            <span className="text-xs font-heading font-600 text-gray-400 dark:text-gray-500 uppercase truncate">{match.sport}</span>
            <span className={`text-xs font-body font-500 ${match.statusColor}`}>{match.status}</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-3">
            <span className="text-sm font-body font-600 text-gray-800 dark:text-gray-100 text-right flex-1 truncate">{match.team1}</span>
            {match.score1 !== null ? (
              <div className="flex items-center gap-2">
                <span className="font-display text-lg text-green-brand dark:text-green-brand-light">{match.score1}</span>
                <span className="text-gray-400 font-body text-sm">–</span>
                <span className="font-display text-lg text-gray-600 dark:text-gray-400">{match.score2}</span>
              </div>
            ) : (
              <span className="font-heading font-500 text-gray-400 dark:text-gray-500 text-sm px-2">VS</span>
            )}
            <span className="text-sm font-body font-600 text-gray-800 dark:text-gray-100 text-left flex-1 truncate">{match.team2}</span>
          </div>
          <div className="text-right min-w-0 w-24 sm:w-28">
            <span className="text-xs font-body text-gray-400 dark:text-gray-500 block truncate">{match.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function StandingsTab() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-white/8">
      <table className="w-full" aria-label="Tabla de posiciones">
        <thead>
          <tr className="bg-gray-50 dark:bg-green-card text-xs font-heading font-600 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            <th className="text-left px-4 py-3">#</th>
            <th className="text-left px-4 py-3">Equipo</th>
            <th className="text-center px-3 py-3">PJ</th>
            <th className="text-center px-3 py-3">PG</th>
            <th className="text-center px-3 py-3">PE</th>
            <th className="text-center px-3 py-3">PP</th>
            <th className="text-center px-4 py-3 text-gold">PTS</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
          {standings.map(row => (
            <tr
              key={row.pos}
              className={`text-sm transition-colors duration-150 ${
                row.highlight
                  ? 'bg-green-brand/5 dark:bg-green-brand/8'
                  : 'bg-white dark:bg-[#0B1E13] hover:bg-gray-50 dark:hover:bg-green-card'
              }`}
            >
              <td className="px-4 py-3">
                <span className={`font-display text-base ${row.pos === 1 ? 'text-gold' : 'text-gray-400 dark:text-gray-500'}`}>
                  {row.pos}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {row.highlight && <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />}
                  <span className={`font-body font-500 ${row.highlight ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                    {row.name}
                  </span>
                </div>
              </td>
              <td className="px-3 py-3 text-center font-body text-gray-600 dark:text-gray-300">{row.pj}</td>
              <td className="px-3 py-3 text-center font-body text-gray-600 dark:text-gray-300">{row.pg}</td>
              <td className="px-3 py-3 text-center font-body text-gray-600 dark:text-gray-300">{row.pe}</td>
              <td className="px-3 py-3 text-center font-body text-gray-600 dark:text-gray-300">{row.pp}</td>
              <td className="px-4 py-3 text-center">
                <span className={`font-display text-base ${row.highlight ? 'text-gold' : 'text-gray-700 dark:text-gray-200'}`}>
                  {row.pts}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BracketTab() {
  const bracketData = {
    semis: [
      { team1: 'Curso 11A', team2: 'Curso 9A', winner: 'Curso 11A' },
      { team1: 'Curso 10A', team2: 'Curso 10B', winner: 'Curso 10A' },
    ],
    final: { team1: 'Curso 11A', team2: 'Curso 10A', winner: null },
  }

  return (
    <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto" aria-label="Cuadro eliminatorio">
      {/* Semis */}
      <div className="flex flex-col gap-8 shrink-0">
        <span className="text-[10px] font-heading font-600 text-gray-400 uppercase tracking-widest text-center mb-2">Semifinales</span>
        {bracketData.semis.map((match, i) => (
          <div key={i} className="space-y-1">
            {[match.team1, match.team2].map(team => (
              <div
                key={team}
                className={`flex items-center justify-between gap-4 px-4 py-2.5 rounded-lg border text-sm min-w-[160px] ${
                  team === match.winner
                    ? 'border-green-brand/40 bg-green-brand/5 dark:bg-green-brand/10'
                    : 'border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-green-card'
                }`}
              >
                <span className={`font-body font-500 ${team === match.winner ? 'text-green-brand dark:text-green-brand-light' : 'text-gray-500 dark:text-gray-400'}`}>
                  {team}
                </span>
                {team === match.winner && (
                  <Circle className="w-3 h-3 text-green-brand fill-green-brand" aria-label="Clasificado" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-2 text-gray-300 dark:text-gray-600 shrink-0">
        <div className="h-20 w-0.5 bg-gray-200 dark:bg-white/10" aria-hidden="true" />
        <span className="text-xs font-heading text-gray-400">→</span>
        <div className="h-20 w-0.5 bg-gray-200 dark:bg-white/10" aria-hidden="true" />
      </div>

      {/* Final */}
      <div className="shrink-0">
        <span className="text-[10px] font-heading font-600 text-gold uppercase tracking-widest block text-center mb-3">Gran Final</span>
        <div className="space-y-1">
          {[bracketData.final.team1, bracketData.final.team2].map(team => (
            <div
              key={team}
              className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-gold/30 bg-gold/5 dark:bg-gold/8 min-w-[160px]"
            >
              <span className="font-body font-600 text-gray-800 dark:text-white text-sm">{team}</span>
              <span className="text-gold text-sm font-heading">🏆</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <span className="text-[10px] font-body text-gray-400 italic">Partido pendiente</span>
        </div>
      </div>
    </div>
  )
}

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<Tab>('partidos')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const syncTabWithHash = () => {
      const tab = window.location.hash.slice(1)
      if (tabs.some(item => item.id === tab)) setActiveTab(tab as Tab)
    }

    syncTabWithHash()
    window.addEventListener('hashchange', syncTabWithHash)
    return () => window.removeEventListener('hashchange', syncTabWithHash)
  }, [])

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
      id="vista-previa"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0d2a1a]/40"
      aria-labelledby="preview-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          data-reveal
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1.5 bg-green-brand/10 border border-green-brand/20 text-green-brand dark:text-green-brand-light text-xs font-heading font-600 rounded-full uppercase tracking-widest mb-4">
            Vista previa
          </span>
          <h2
            id="preview-heading"
            className="font-heading font-700 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white uppercase leading-tight mb-3"
          >
            Conoce la plataforma{' '}
            <span className="text-green-brand">antes de entrar.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            Todo lo que necesitas para seguir el torneo, organizado en un solo lugar.
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 italic mt-2">
            * Representación visual. Los datos mostrados son de ejemplo.
          </p>
        </div>

        {/* Platform mockup */}
        <div
          data-reveal
          className="bg-white dark:bg-green-card rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden opacity-0 translate-y-8 transition-all duration-700 delay-150 score-card-glow"
        >
          {/* Browser bar */}
          <div className="bg-gray-100 dark:bg-[#0a1f12] px-5 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-white/5">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white/60 dark:bg-white/10 rounded-md px-3 py-1 text-[11px] font-body text-gray-500 dark:text-gray-400 text-center">
              itcdeportes.etitc.edu.co
            </div>
          </div>

          {/* App header */}
          <div className="bg-green-brand px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display text-white tracking-wide">ITC DEPORTES</span>
              <span className="text-[10px] font-heading text-green-brand-light bg-white/10 px-2 py-0.5 rounded-full">Torneo Inter cursos · Baloncesto</span>
            </div>
            <span className="hidden sm:block text-xs font-heading text-gold bg-gold/20 px-3 py-1 rounded-full">Temporada 2024</span>
          </div>

          {/* Tab navigation */}
          <div className="border-b border-gray-100 dark:border-white/8 px-5" role="tablist" aria-label="Secciones de la plataforma">
            <div className="flex gap-1">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    id={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-heading font-600 uppercase tracking-wide border-b-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand focus:ring-inset ${
                      activeTab === tab.id
                        ? 'border-green-brand text-green-brand dark:text-green-brand-light'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab content */}
          <div className="p-5">
            <div
              id={`panel-partidos`}
              role="tabpanel"
              aria-labelledby="tab-partidos"
              hidden={activeTab !== 'partidos'}
            >
              {activeTab === 'partidos' && <MatchesTab />}
            </div>
            <div
              id={`panel-tabla`}
              role="tabpanel"
              aria-labelledby="tab-tabla"
              hidden={activeTab !== 'tabla'}
            >
              {activeTab === 'tabla' && <StandingsTab />}
            </div>
            <div
              id={`panel-cuadro`}
              role="tabpanel"
              aria-labelledby="tab-cuadro"
              hidden={activeTab !== 'cuadro'}
            >
              {activeTab === 'cuadro' && <BracketTab />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
