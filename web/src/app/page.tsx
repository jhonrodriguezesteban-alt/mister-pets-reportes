import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
} from "lucide-react";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CatalogEmbed } from "@/components/catalog-embed";
import {
  CATALOG_MESSAGE,
  DIRECCION,
  HORARIO,
  MAPS_URL,
  VISITA_MESSAGE,
  INSTAGRAM_URL,
  PEDIDO_MINIMO_TEXTO,
  WHATSAPP_DISPLAY,
  categorias,
  clientes,
  faqs,
  pasos,
  razones,
  stats,
  testimonios,
  whatsappLink,
} from "@/content";

const catalogHref = whatsappLink(CATALOG_MESSAGE);

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CatalogButton({ className = "", children = "Pide el catálogo mayorista" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={catalogHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn inline-flex items-center justify-center gap-2 rounded-full bg-vino px-6 py-3.5 text-base font-bold text-crema hover:bg-vino-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vino ${className}`}
    >
      <MessageCircle aria-hidden className="size-5" />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        {/* HERO */}
        <section className="px-4 pt-6 sm:pt-10">
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-durazno lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-24">
              <p className="inline-flex items-center gap-2 rounded-full bg-crema/70 px-4 py-1.5 text-sm font-bold">
                <BadgeCheck aria-hidden className="size-4" />
                Importador mayorista · Bogotá
              </p>
              <h1 className="mt-6 font-display text-[2.4rem] leading-[0.98] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
                Surte tu pet shop con el mejor importador de productos pet de Colombia.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-vino/90 sm:text-xl">
                Más de 400 referencias en juguetes, arena, comederos y accesorios para perros y gatos. Despachamos a toda Colombia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CatalogButton />
                <a
                  href="#como-comprar"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ring-2 ring-vino/80 ring-inset hover:bg-vino/5"
                >
                  Cómo comprar
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </div>
              <p className="mt-6 text-sm font-semibold">Pedido mínimo {PEDIDO_MINIMO_TEXTO} · Solo para negocios</p>
            </div>
            <div className="relative min-h-[340px] lg:min-h-full">
              <Image
                src="/images/hero-cachorro-pelota.jpg"
                alt="Cachorro golden mordiendo una pelota de caucho del catálogo Mister Pets"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[45%_40%]"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-crema px-4 py-3 shadow-lg shadow-vino/10">
                <p className="font-display text-3xl font-extrabold leading-none">+400</p>
                <p className="text-sm font-medium text-cacao">referencias en bodega</p>
              </div>
            </div>
          </div>
        </section>

        {/* CIFRAS */}
        <section aria-label="Mister Pets en cifras" className="px-4 py-10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-arena bg-blanco px-5 py-6">
                <dt className="text-sm font-medium text-cacao">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="scroll-mt-32 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="font-bold text-cacao">Nuestras líneas</p>
                <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Lo que más se vende en una tienda de mascotas.
                </h2>
              </div>
              <p className="max-w-lg text-lg text-cacao lg:justify-self-end">
                Las mismas seis líneas de nuestro catálogo mayorista. Combina referencias de todas en un solo pedido y un solo envío.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categorias.map((c) => (
                <li key={c.title} className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-blanco ring-1 ring-arena">
                  <div className="relative aspect-[4/3] overflow-hidden bg-crema">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-extrabold">{c.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {c.items.map((item) => (
                        <li key={item} className="rounded-full bg-durazno-200/70 px-3 py-1 text-sm font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-3 rounded-[1.75rem] bg-vino p-6 text-crema sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="font-display text-xl font-bold sm:text-2xl">Más de 400 referencias con fotos y medidas en el catálogo mayorista.</p>
              <a
                href="#catalogo"
                className="btn inline-flex shrink-0 items-center gap-2 rounded-full bg-durazno px-6 py-3.5 font-bold text-vino hover:bg-durazno-200"
              >
                <ArrowRight aria-hidden className="size-5" />
                Ver catálogo
              </a>
            </div>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalogo" aria-labelledby="catalogo-titulo" className="scroll-mt-32 bg-durazno-200/50 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold text-cacao">Catálogo Mayorista 2026</p>
              <h2 id="catalogo-titulo" className="mt-2 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Mira todo el surtido sin salir de aquí.
              </h2>
              <p className="mt-4 text-lg text-cacao">
                Pasa las páginas con las flechas. Anota los códigos (MP…) de lo que te interesa y pídenos los precios por WhatsApp.
              </p>
            </div>
            <div className="mt-10">
              <CatalogEmbed />
            </div>
            <div className="mt-8 flex justify-center">
              <CatalogButton>Pedir precios por WhatsApp</CatalogButton>
            </div>
          </div>
        </section>

        {/* CLIENTES (bento con animales) */}
        <section id="clientes" className="scroll-mt-32 bg-arena/45 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-cacao">¿Para quién es Mister Pets?</p>
            <h2 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Si vendes productos para mascotas, te surtimos.
            </h2>

            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
              {clientes.map((c, i) => (
                <article
                  key={c.title}
                  className={`relative overflow-hidden rounded-[1.75rem] bg-vino ${
                    i === 1 ? "min-h-[300px] lg:col-start-2 lg:row-start-1" : "min-h-[420px] lg:row-span-2"
                  } ${i === 0 ? "lg:col-start-1 lg:row-start-1" : ""} ${i === 2 ? "lg:col-start-3 lg:row-start-1" : ""}`}
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vino via-vino/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-crema sm:p-8">
                    <h3 className="font-display text-3xl font-extrabold sm:text-4xl">{c.title}</h3>
                    <p className="mt-2 max-w-sm text-crema/90">{c.text}</p>
                  </div>
                </article>
              ))}
              <div className="flex flex-col justify-between rounded-[1.75rem] bg-durazno p-6 sm:p-8 lg:col-start-2 lg:row-start-2">
                <p className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  &ldquo;No estás triste, solo necesitas emprender con Mister Pets.&rdquo;
                </p>
                <a href={catalogHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline">
                  Quiero empezar mi negocio
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO COMPRAR */}
        <section id="como-comprar" className="scroll-mt-32 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-bold text-cacao">Cómo comprar</p>
                <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Cuatro pasos y tu pedido va en camino.
                </h2>
                <p className="mt-5 max-w-md text-lg text-cacao">
                  Todo se maneja por WhatsApp. Sin registros ni formularios largos.
                </p>
                <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:block">
                  <Image
                    src="/images/beagle.jpg"
                    alt="Beagle sonriendo con la lengua afuera"
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <ol className="grid gap-4 self-start">
                {pasos.map((p, i) => (
                  <li key={p.title} className="flex gap-5 rounded-3xl bg-blanco p-6 ring-1 ring-arena">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-durazno font-display text-xl font-extrabold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{p.title}</h3>
                      <p className="mt-1 text-cacao">{p.text}</p>
                    </div>
                  </li>
                ))}
                <li className="pt-2">
                  <CatalogButton>Empezar por WhatsApp</CatalogButton>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* POR QUÉ / NOSOTROS */}
        <section id="nosotros" className="scroll-mt-32 bg-vino px-4 py-14 text-crema sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                <Image src="/images/productos/pechera-gato.jpg" alt="Gato blanco con pechera tejida azul y traílla, del catálogo Mister Pets" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-square overflow-hidden rounded-[1.75rem]">
                  <Image src="/images/productos/fuente.jpg" alt="Gato tomando agua de una fuente para mascotas del catálogo Mister Pets" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <div className="rounded-[1.75rem] bg-durazno p-5 text-vino">
                  <p className="font-display text-4xl font-extrabold">Bogotá</p>
                  <p className="text-sm font-semibold">Bodega y despachos</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-durazno">Por qué Mister Pets</p>
              <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Un proveedor que entiende tu negocio.
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {razones.map((r) => (
                  <li key={r.title} className="border-t border-crema/20 pt-4">
                    <h3 className="font-display text-xl font-bold text-durazno">{r.title}</h3>
                    <p className="mt-2 text-crema/85">{r.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section aria-labelledby="testimonios-titulo" className="px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold text-cacao">Clientes</p>
            <h2 id="testimonios-titulo" className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Negocios de todo el país ya compran con nosotros.
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonios.map((t, i) => (
                <li key={i} className="flex flex-col rounded-3xl bg-blanco p-7 ring-1 ring-arena">
                  <Quote aria-hidden className="size-8 text-durazno" />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
                  <p className="mt-6 font-bold">{t.name}</p>
                  <p className="text-sm text-cacao">{t.business}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PREGUNTAS */}
        <section id="preguntas" className="scroll-mt-32 px-4 pb-14 sm:pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-bold text-cacao">Preguntas frecuentes</p>
              <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Antes de tu primer pedido.</h2>
              <div className="relative mt-8 hidden aspect-square max-w-sm overflow-hidden rounded-full lg:block">
                <Image src="/images/gato.jpg" alt="Gato atigrado de ojos verdes mirando hacia arriba" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
            <div className="divide-y divide-arena border-y border-arena">
              {faqs.map((f) => (
                <details key={f.q} className="group py-2">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-display text-xl font-bold">
                    {f.q}
                    <ChevronDown aria-hidden className="chev size-5 shrink-0" />
                  </summary>
                  <p className="pb-4 text-lg text-cacao">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* VISITA */}
        <section id="visitanos" aria-labelledby="visita-titulo" className="scroll-mt-32 px-4 pb-14 sm:pb-20">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] bg-vino p-6 text-crema sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-bold text-durazno">Somos bodega mayorista</p>
              <h2 id="visita-titulo" className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Visítanos en Bogotá.
              </h2>
              <p className="mt-4 max-w-lg text-lg text-crema/85">
                Agenda tu cita y te mostramos el surtido en persona. Te atendemos con gusto.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(VISITA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full bg-durazno px-6 py-3.5 font-bold text-vino hover:bg-durazno-200"
                >
                  <MessageCircle aria-hidden className="size-5" />
                  Agendar cita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ring-2 ring-crema/60 ring-inset hover:bg-crema/10"
                >
                  <MapPin aria-hidden className="size-5" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
            <dl className="grid gap-4">
              <div className="rounded-3xl bg-crema/10 p-5">
                <dt className="flex items-center gap-2 text-sm font-semibold text-durazno">
                  <MapPin aria-hidden className="size-4" /> Dirección
                </dt>
                <dd className="mt-1 text-lg font-semibold">Calle 10 #20-35, Bodega 317</dd>
                <dd className="text-crema/80">Centro Comercial Puerto Príncipe · Bogotá</dd>
              </div>
              <div className="rounded-3xl bg-crema/10 p-5">
                <dt className="flex items-center gap-2 text-sm font-semibold text-durazno">
                  <Clock aria-hidden className="size-4" /> Horario (con cita)
                </dt>
                <dd className="mt-1 text-lg font-semibold">Lunes a viernes · 9:00 a.m. – 5:00 p.m.</dd>
                <dd className="text-lg font-semibold">Sábados · 9:00 a.m. – 2:00 p.m.</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 pb-16">
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-durazno md:grid-cols-[1.3fr_0.7fr]">
            <div className="px-6 py-12 sm:px-12 sm:py-16">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Pide el catálogo y empieza a vender esta semana.
              </h2>
              <p className="mt-4 max-w-lg text-lg">
                Te respondemos por WhatsApp con referencias y precios mayoristas. Pedido mínimo {PEDIDO_MINIMO_TEXTO}.
              </p>
              <CatalogButton className="mt-8" />
            </div>
            <div className="relative min-h-[260px]">
              <Image
                src="/images/cachorro.jpg"
                alt="Cachorro golden retriever corriendo hacia la cámara"
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-vino text-crema">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-crema/80">Importador mayorista de productos para mascotas. Bogotá, Colombia.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-durazno">Productos</h2>
            <ul className="mt-4 space-y-2 text-crema/85">
              {categorias.map((c) => (
                <li key={c.title}>
                  <a href="#productos" className="hover:underline">{c.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-durazno">Mister Pets</h2>
            <ul className="mt-4 space-y-2 text-crema/85">
              <li><a href="#como-comprar" className="hover:underline">Cómo comprar</a></li>
              <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
              <li><a href="#preguntas" className="hover:underline">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-durazno">Contacto</h2>
            <ul className="mt-4 space-y-3 text-crema/85">
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0" />
                <a href={catalogHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 size-5 shrink-0" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {DIRECCION}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-0.5 size-5 shrink-0" />
                {HORARIO}
              </li>
              <li className="flex gap-3">
                <InstagramIcon className="mt-0.5 size-5 shrink-0" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @misterpetscol
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-crema/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-crema/70 sm:flex-row sm:justify-between">
            <p>© 2026 Mister Pets. Venta al por mayor para negocios.</p>
            <p className="sm:max-w-md">
              Fotos de pet shop y veterinaria: PaulGorduiz106 (CC BY-SA 4.0) y Shixart1985 (CC BY 2.0), vía Wikimedia Commons.
            </p>
            <p>
              Built with Claude Web Builder by{" "}
              <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="underline">
                Tododeia
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat href={catalogHref} />
    </>
  );
}
