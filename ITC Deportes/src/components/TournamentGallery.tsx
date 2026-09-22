import { ArrowUpRight, Camera, MapPin } from "lucide-react"
import { ITC_DEPORTES_URL } from "../constants"

const moments = [
  {
    title: "Pasión en la cancha",
    sport: "Microfútbol",
    image:
      "https://images.unsplash.com/photo-1760174012435-630a17a434ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    alt: "Jugadores disputando un partido de fútbol sala en una cancha cubierta",
  },
  {
    title: "Cada punto cuenta",
    sport: "Voleibol",
    image:
      "https://images.unsplash.com/photo-1728971121202-04896f2a35a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    alt: "Equipo jugando un partido de voleibol",
  },
  {
    title: "Competir en equipo",
    sport: "Baloncesto",
    image:
      "https://images.unsplash.com/photo-1665406857944-daf1d2187041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    alt: "Deportista jugando baloncesto en un gimnasio",
  },
]

export default function TournamentGallery() {
  return (
    <section
      id="momentos"
      className="overflow-hidden bg-[#07170e] py-20 text-white lg:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 font-heading text-xs font-600 uppercase tracking-widest text-gold-light">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              Comunidad deportiva
            </span>
            <h2
              id="gallery-heading"
              className="max-w-2xl font-heading text-4xl font-700 uppercase leading-tight sm:text-5xl"
            >
              La energía de la ETITC <span className="text-green-brand-light">se vive jugando.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="mb-4 text-sm leading-relaxed text-white/55">
              Más que resultados: compañerismo, disciplina y orgullo por representar a cada curso.
            </p>
            <a
              href={ITC_DEPORTES_URL}
              className="inline-flex items-center gap-2 font-heading text-sm font-600 uppercase tracking-wide text-gold transition-colors hover:text-gold-light focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Abrir plataforma oficial
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[360px]">
          {moments.map((moment, index) => (
            <a
              key={moment.title}
              href={ITC_DEPORTES_URL}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold ${
                index === 0 ? "md:col-span-6" : "md:col-span-3"
              }`}
              aria-label={`${moment.title}: consultar ${moment.sport} en ITC Deportes`}
            >
              <img
                src={moment.image}
                alt={moment.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-2 flex items-center gap-1.5 text-[10px] font-600 uppercase tracking-[0.18em] text-gold-light">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  ETITC · {moment.sport}
                </span>
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-heading text-xl font-700 uppercase sm:text-2xl">
                    {moment.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors group-hover:border-gold/50 group-hover:bg-gold group-hover:text-green-deep">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
