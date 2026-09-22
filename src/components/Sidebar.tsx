import {
  BarChart3,
  BookOpenText,
  CalendarDays,
  CircleDot,
  LayoutDashboard,
  Medal,
  Radio,
  TableProperties,
  Trophy,
  X,
} from "lucide-react"
import { ITC_DEPORTES_URL } from "../constants"

const menuItems = [
  { label: "Panel principal", detail: "Resumen del torneo", href: "#inicio", Icon: LayoutDashboard },
  { label: "Próximos partidos", detail: "Calendario deportivo", href: "#partidos", Icon: CalendarDays },
  { label: "Resultados", detail: "Marcadores actualizados", href: "#partidos", Icon: Radio },
  { label: "Tabla de posiciones", detail: "Clasificación por deporte", href: "#tabla", Icon: TableProperties },
  { label: "Estadísticas", detail: "Ventajas de la plataforma", href: "#beneficios", Icon: BarChart3 },
  { label: "Campeonatos", detail: "Cuadros y finales", href: "#cuadro", Icon: Medal },
  { label: "Reglamentos", detail: "Normas de competencia", href: "#reglamentos", Icon: BookOpenText },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      id="platform-sidebar"
      aria-hidden={!open}
      className={`fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-[#07170e] pt-18 transition-transform duration-300 xl:flex xl:flex-col ${
        open ? "translate-x-0" : "-translate-x-full pointer-events-none"
      }`}
    >
      <div className="border-b border-white/8 px-5 py-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] font-heading font-600 uppercase tracking-[0.2em] text-green-brand-light">
            <CircleDot className="h-3.5 w-3.5 fill-green-brand-light/30" />
            Plataforma activa
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Ocultar menú lateral"
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-brand"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="font-display text-2xl tracking-wide text-white">CENTRO DE JUEGO</p>
        <p className="mt-1 text-xs leading-relaxed text-white/45">
          Acceso directo a toda la competencia Inter cursos.
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Menú lateral de la plataforma">
        <p className="mb-2 px-3 text-[10px] font-heading font-600 uppercase tracking-[0.18em] text-white/30">
          Competencia
        </p>
        <div className="space-y-1">
          {menuItems.map(({ label, detail, href, Icon }, index) => (
            <a
              key={label}
              href={href}
              aria-label={`Ir a ${label}`}
              className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-brand ${
                index === 0
                  ? "border border-green-brand/30 bg-green-brand/15 text-white"
                  : "border border-transparent text-white/65 hover:border-white/8 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  index === 0
                    ? "bg-green-brand text-white"
                    : "bg-white/5 text-white/45 group-hover:bg-green-brand/15 group-hover:text-green-brand-light"
                }`}
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-heading text-sm font-600">{label}</span>
                <span className="block truncate text-[10px] text-white/35">{detail}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>

      <div className="p-3">
        <a
          href={ITC_DEPORTES_URL}
          className="block overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-green-brand/25 to-gold/10 p-4 transition-colors hover:border-gold/40 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-green-deep">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-green-brand/25 px-2 py-1 text-[9px] font-600 uppercase tracking-wider text-green-brand-light">
              En línea
            </span>
          </div>
          <p className="font-heading text-base font-700 uppercase text-white">Sigue el torneo</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/45">
            Consulta resultados, posiciones y próximos encuentros.
          </p>
        </a>
      </div>
    </aside>
  )
}
