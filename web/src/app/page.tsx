import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CatalogEmbed } from "@/components/catalog-embed";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  CATALOG_MESSAGE,
  DIRECCION,
  HORARIO,
  MAPS_URL,
  VISITA_MESSAGE,
  INSTAGRAM_URL,
  PEDIDO_MINIMO_BOGOTA,
  PEDIDO_MINIMO_NACIONAL,
  PEDIDO_MINIMO_TEXTO,
  WHATSAPP_DISPLAY,
  categorias,
  clientes,
  faqs,
  pasos,
  razones,
  testimonios,
  whatsappLink,
} from "@/content";

const catalogHref = whatsappLink(CATALOG_MESSAGE);

const franja = ["Juguetes", "Alimentación", "Higiene y cuidado", "Ropa y accesorios", "Transporte", "Hábitat", "+400 referencias", "Envíos a toda Colombia"];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CatalogButton({ className = "", children = "Cotiza por WhatsApp" }: { className?: string; children?: React.ReactNode }) {
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
      <ScrollReveal />
      <main id="inicio">
        {/* HERO: fondo durazno a todo lo ancho, el cachorro "recortado" sobre el color */}
        <section className="relative overflow-hidden bg-durazno">
          <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-0">
            <div className="reveal relative z-10 py-6 lg:py-16">
              <p className="text-sm font-bold tracking-[0.14em] uppercase">Importador mayorista · Bogotá</p>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[3.9rem]">
                Surte tu pet shop con el mejor importador de productos pet de Colombia.
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed sm:text-xl">
                Juguetes, comederos, areneros, pecheras, maletas y más. Un solo proveedor, un solo pedido, despacho a todo el país.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CatalogButton />
                <a
                  href="#catalogo"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ring-2 ring-vino ring-inset hover:bg-vino hover:text-crema"
                >
                  Ver catálogo
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </div>
              <dl className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-vino/20 border-t border-vino/20 pt-5">
                <div className="pr-4">
                  <dt className="text-xs font-semibold tracking-wide uppercase">Referencias</dt>
                  <dd className="font-display text-3xl font-extrabold">+400</dd>
                </div>
                <div className="px-4">
                  <dt className="text-xs font-semibold tracking-wide uppercase">Mínimo Bogotá</dt>
                  <dd className="font-display text-3xl font-extrabold">{PEDIDO_MINIMO_BOGOTA.replace(".000", "k")}</dd>
                </div>
                <div className="pl-4">
                  <dt className="text-xs font-semibold tracking-wide uppercase">Resto del país</dt>
                  <dd className="font-display text-3xl font-extrabold">{PEDIDO_MINIMO_NACIONAL.replace(".000", "k")}</dd>
                </div>
              </dl>
            </div>
            <div className="relative -mx-4 h-[360px] sm:h-[460px] lg:mx-0 lg:h-[640px]">
              <Image
                src="/images/hero-cachorro-pelota.webp"
                alt="Cachorro golden mordiendo una pelota de caucho del catálogo Mister Pets"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="hero-img object-contain object-bottom mix-blend-multiply"
              />
            </div>
          </div>
        </section>

        {/* FRANJA EN MOVIMIENTO */}
        <div className="marquee-wrap overflow-hidden border-y-4 border-vino bg-vino py-4 text-crema" aria-hidden>
          <div className="marquee">
            {[0, 1].map((k) => (
              <ul key={k} className="flex shrink-0 items-center">
                {franja.map((t) => (
                  <li key={t + k} className="flex items-center font-display text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
                    <span className="px-6">{t}</span>
                    <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-durazno" fill="currentColor"><path d="M12 2l2.4 7.6H22l-6.2 4.6 2.4 7.6L12 17.2 5.8 21.8l2.4-7.6L2 9.6h7.6z" /></svg>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* PRODUCTOS: composición editorial, una línea grande y las demás alrededor */}
        <section id="productos" className="scroll-mt-32 px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end" data-reveal>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
                Seis líneas. Todo lo que rota en una tienda de mascotas.
              </h2>
              <p className="max-w-md text-lg text-cacao lg:justify-self-end">
                Combina referencias de todas las líneas en un solo pedido y un solo envío.
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {categorias.map((c, i) => (
                <li
                  key={c.title}
                  data-reveal
                  style={{ "--i": i % 3 } as React.CSSProperties}
                  className={`group ${i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-crema ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-7rem)]" : "aspect-[4/3]"}`}>
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-crema px-3 py-1 text-xs font-bold tracking-wide uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className={`mt-4 font-display font-extrabold ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{c.title}</h3>
                  <p className="mt-1 text-cacao">{c.items.join(" · ")}</p>
                </li>
              ))}
            </ul>

            <a
              href="#catalogo"
              data-reveal
              className="group mt-14 flex items-center justify-between gap-6 border-y-2 border-vino py-6 font-display text-2xl font-extrabold sm:text-4xl"
            >
              <span>Ver las +400 referencias en el catálogo</span>
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-vino text-crema transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-45">
                <ArrowUpRight aria-hidden className="size-7" />
              </span>
            </a>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalogo" aria-labelledby="catalogo-titulo" className="scroll-mt-32 bg-durazno-200/60 px-4 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-40" data-reveal>
              <p className="text-sm font-bold tracking-[0.14em] text-cacao uppercase">Catálogo Mayorista 2026</p>
              <h2 id="catalogo-titulo" className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Mira todo el surtido sin salir de aquí.
              </h2>
              <p className="mt-5 max-w-md text-lg text-cacao">
                Pasa las páginas con las flechas. Anota los códigos (MP…) de lo que te interesa y pídenos los precios por WhatsApp.
              </p>
              <CatalogButton className="mt-8">Pedir precios por WhatsApp</CatalogButton>
            </div>
            <div data-reveal>
              <CatalogEmbed />
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clientes" className="scroll-mt-32 px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl" data-reveal>
              Si vendes productos para mascotas, te surtimos.
            </h2>

            <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
              {clientes.map((c, i) => (
                <article
                  key={c.title}
                  data-reveal
                  style={{ "--i": i } as React.CSSProperties}
                  className={`relative overflow-hidden rounded-2xl bg-vino ${
                    i === 1 ? "min-h-[300px] lg:col-start-2 lg:row-start-1" : "min-h-[440px] lg:row-span-2"
                  } ${i === 0 ? "lg:col-start-1 lg:row-start-1" : ""} ${i === 2 ? "lg:col-start-3 lg:row-start-1" : ""}`}
                >
                  <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="img-parallax object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-vino via-vino/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-crema sm:p-8">
                    <h3 className="font-display text-3xl font-extrabold sm:text-4xl">{c.title}</h3>
                    <p className="mt-2 max-w-sm text-crema/90">{c.text}</p>
                  </div>
                </article>
              ))}
              <div
                data-reveal
                style={{ "--i": 2 } as React.CSSProperties}
                className="flex flex-col justify-between rounded-2xl bg-durazno p-6 sm:p-8 lg:col-start-2 lg:row-start-2"
              >
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

        {/* CÓMO COMPRAR: línea de tiempo que se llena al bajar */}
        <section id="como-comprar" className="scroll-mt-32 bg-vino px-4 py-16 text-crema sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end" data-reveal>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
                Del WhatsApp a tu vitrina en cuatro pasos.
              </h2>
              <p className="max-w-md text-lg text-crema/80 lg:justify-self-end">Sin registros ni formularios. Todo se maneja por chat.</p>
            </div>
            <div className="relative mt-14">
              <div className="absolute top-6 right-0 left-0 hidden h-0.5 bg-crema/15 lg:block" aria-hidden>
                <div className="steps-line h-full w-full bg-durazno" />
              </div>
              <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
                {pasos.map((p, i) => (
                  <li key={p.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="relative">
                    <span className="relative grid size-12 place-items-center rounded-full bg-durazno font-display text-xl font-extrabold text-vino">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-crema/80">{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-14" data-reveal>
              <a
                href={catalogHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 rounded-full bg-durazno px-6 py-3.5 font-bold text-vino hover:bg-durazno-200"
              >
                <MessageCircle aria-hidden className="size-5" />
                Empezar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="scroll-mt-32 px-4 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4" data-reveal>
              <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src="/images/productos/pechera-gato.jpg" alt="Gato blanco con pechera tejida azul y traílla, del catálogo Mister Pets" fill sizes="(min-width: 1024px) 25vw, 50vw" className="img-parallax object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src="/images/productos/fuente.jpg" alt="Gato tomando agua de una fuente para mascotas del catálogo Mister Pets" fill sizes="(min-width: 1024px) 25vw, 50vw" className="img-parallax object-cover" />
              </div>
              <div className="flex flex-col justify-end rounded-2xl bg-durazno p-5">
                <p className="text-xs font-bold tracking-wide uppercase">Bodega</p>
                <p className="font-display text-2xl leading-tight font-extrabold">CC Puerto Príncipe, Bogotá</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl" data-reveal>
                Importamos, guardamos y despachamos. Tú vendes.
              </h2>
              <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {razones.map((r, i) => (
                  <li key={r.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-t-2 border-vino pt-4">
                    <h3 className="font-display text-xl font-bold">{r.title}</h3>
                    <p className="mt-2 text-cacao">{r.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS: citas grandes, sin tarjetas */}
        <section aria-labelledby="testimonios-titulo" className="bg-arena/45 px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 id="testimonios-titulo" className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl" data-reveal>
              Lo que dicen quienes ya nos compran.
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {testimonios.map((t, i) => (
                <li key={t.name} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col">
                  <span aria-hidden className="font-display text-7xl leading-none font-extrabold text-durazno">&ldquo;</span>
                  <blockquote className="-mt-4 flex-1 text-xl leading-relaxed">{t.quote}</blockquote>
                  <p className="mt-6 border-t border-vino/20 pt-4 font-bold">{t.name}</p>
                  <p className="text-sm text-cacao">{t.business}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PREGUNTAS */}
        <section id="preguntas" className="scroll-mt-32 px-4 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Antes de tu primer pedido.</h2>
              <div className="relative mt-8 hidden aspect-square max-w-xs overflow-hidden rounded-full lg:block">
                <Image src="/images/gato.jpg" alt="Gato atigrado de ojos verdes mirando hacia arriba" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
            <div className="divide-y divide-vino/15 border-y border-vino/15" data-reveal>
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

        {/* VISITA + CIERRE */}
        <section id="visitanos" aria-labelledby="visita-titulo" className="scroll-mt-32 px-4 pb-16 sm:pb-24">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-durazno lg:grid-cols-[1.15fr_0.85fr]" data-reveal>
            <div className="p-6 sm:p-12">
              <p className="text-sm font-bold tracking-[0.14em] uppercase">Somos bodega mayorista</p>
              <h2 id="visita-titulo" className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
                Visítanos en Bogotá o pide por WhatsApp.
              </h2>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold uppercase">
                    <MapPin aria-hidden className="size-4" /> Dirección
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">Calle 10 #20-35, Bodega 317</dd>
                  <dd>Centro Comercial Puerto Príncipe</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold uppercase">
                    <Clock aria-hidden className="size-4" /> Horario con cita
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">L–V 9:00 a.m. – 5:00 p.m.</dd>
                  <dd className="text-lg font-semibold">Sáb 9:00 a.m. – 2:00 p.m.</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm font-semibold">Pedido mínimo {PEDIDO_MINIMO_TEXTO}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(VISITA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full bg-vino px-6 py-3.5 font-bold text-crema hover:bg-vino-700"
                >
                  <MessageCircle aria-hidden className="size-5" />
                  Agendar cita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ring-2 ring-vino ring-inset hover:bg-vino hover:text-crema"
                >
                  <MapPin aria-hidden className="size-5" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="/images/cachorro.jpg"
                alt="Cachorro golden retriever corriendo hacia la cámara"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="img-parallax object-cover"
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
              <li><a href="/catalogo" className="hover:underline">Catálogo</a></li>
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
