import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CatalogEmbed } from "@/components/catalog-embed";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { QuoteForm } from "@/components/quote-form";
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
        {/* PORTADA: carrusel con slides por línea de producto */}
        <HeroCarousel waHref={catalogHref} visitHref={whatsappLink(VISITA_MESSAGE)} />

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
                  <a href={`/${c.slug}`} className="flex h-full flex-col">
                  <div className={`relative overflow-hidden rounded-2xl bg-crema ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-[4/3]"}`}>
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
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold underline-offset-4 group-hover:underline">
                    Ver línea al por mayor <ArrowRight aria-hidden className="size-4" />
                  </span>
                  </a>
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

        {/* MÁS CLIENTES + KIT DE APERTURA */}
        <section className="px-4 pb-16 sm:pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal className="rounded-2xl border-2 border-vino/15 p-6 sm:p-8">
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">También surtimos a</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["Agropecuarias y agroveterinarias", "Peluquerías caninas", "Guarderías y hoteles caninos", "Tiendas online y de redes sociales", "Clínicas veterinarias"].map((t) => (
                  <li key={t} className="rounded-full bg-durazno-200 px-4 py-2 text-sm font-semibold">{t}</li>
                ))}
              </ul>
              <a href="/proveedor-para-veterinarias" className="mt-6 inline-flex items-center gap-2 font-bold underline underline-offset-4">
                ¿Tienes una veterinaria? Mira lo que te ofrecemos
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </div>
            <a
              href="/surtido-para-abrir-pet-shop"
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="group flex flex-col justify-between gap-6 rounded-2xl bg-vino p-6 text-crema sm:p-8"
            >
              <div>
                <p className="text-sm font-bold tracking-[0.14em] text-durazno uppercase">Kit de apertura</p>
                <h3 className="mt-2 font-display text-3xl leading-tight font-extrabold sm:text-4xl">¿Vas a abrir tu pet shop? Te armamos el primer surtido.</h3>
                <p className="mt-3 text-crema/80">Según tu local, tu ciudad y tu presupuesto, con lo que más rota en cada línea.</p>
              </div>
              <span className="inline-flex items-center gap-2 font-bold text-durazno">
                Quiero mi kit de apertura
                <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
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
            {/* Collage: foto principal, segunda foto superpuesta y sello de la bodega */}
            <div className="relative mx-auto w-full max-w-md pb-[14%] lg:max-w-none" data-reveal>
              <div className="relative aspect-[4/5] w-[76%] overflow-hidden rounded-2xl">
                <Image src="/images/productos/pechera-gato.jpg" alt="Gato blanco con pechera tejida azul y traílla, del catálogo Mister Pets" fill sizes="(min-width: 1024px) 34vw, 76vw" className="img-parallax object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 aspect-square w-[54%] -rotate-2 overflow-hidden rounded-2xl shadow-xl shadow-vino/20 ring-[6px] ring-crema sm:ring-8">
                <Image src="/images/productos/fuente.jpg" alt="Gato tomando agua de una fuente para mascotas del catálogo Mister Pets" fill sizes="(min-width: 1024px) 24vw, 54vw" className="object-cover" />
              </div>
              <div className="absolute top-[5%] right-[2%] grid size-28 rotate-6 place-items-center rounded-full bg-durazno p-3 text-center shadow-lg shadow-vino/20 sm:size-36">
                <p className="font-display text-sm leading-tight font-extrabold sm:text-lg">
                  <span className="block text-[10px] tracking-[0.14em] uppercase sm:text-xs">Bodega</span>
                  CC Puerto Príncipe
                </p>
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

        {/* COTIZAR */}
        <section id="cotizar" className="scroll-mt-32 bg-vino px-4 py-16 text-crema sm:py-24" data-track-area="cotizar">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div data-reveal>
              <p className="text-sm font-bold tracking-[0.14em] text-durazno uppercase">Cotización mayorista</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">Cuéntanos de tu negocio y te cotizamos hoy.</h2>
              <p className="mt-4 max-w-md text-lg text-crema/80">
                Llenas los datos, se abre WhatsApp con el mensaje listo y te respondemos con referencias y precios mayoristas.
              </p>
            </div>
            <div data-reveal>
              <QuoteForm origen="inicio" />
            </div>
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

      <SiteFooter />

      <WhatsAppFloat href={catalogHref} />
    </>
  );
}
