import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronDown, MessageCircle, Truck, Store, BadgeCheck } from "lucide-react";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { QuoteForm } from "@/components/quote-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getLanding, landings } from "@/landings";
import { PEDIDO_MINIMO_TEXTO, whatsappLink } from "@/content";

export function generateStaticParams() {
  return landings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.description,
    alternates: { canonical: `/${l.slug}` },
    openGraph: { title: l.metaTitle, description: l.description, url: `/${l.slug}`, locale: "es_CO", type: "website" },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) notFound();

  const wa = whatsappLink(`Hola Mister Pets, vengo de la página "${l.menu}" y quiero una cotización mayorista.`);
  const otras = landings.filter((x) => x.slug !== l.slug);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Header />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main data-track-area={l.slug}>
        {/* Encabezado: lo que buscó, tal cual */}
        <section className="bg-durazno px-4">
          <div className="mx-auto grid max-w-7xl items-center gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div className="reveal">
              <p className="text-xs font-bold tracking-[0.14em] uppercase sm:text-sm">{l.eyebrow}</p>
              <h1 className="mt-4 font-display text-[2.1rem] leading-[0.98] font-extrabold tracking-tight text-balance sm:text-6xl">{l.h1}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed">{l.intro}</p>
              <ul className="mt-6 grid gap-2 text-sm font-semibold sm:text-base">
                <li className="flex items-center gap-2">
                  <BadgeCheck aria-hidden className="size-5 shrink-0" /> Importador mayorista en Bogotá · venta solo a negocios
                </li>
                <li className="flex items-center gap-2">
                  <Store aria-hidden className="size-5 shrink-0" /> Pedido mínimo {PEDIDO_MINIMO_TEXTO}
                </li>
                <li className="flex items-center gap-2">
                  <Truck aria-hidden className="size-5 shrink-0" /> Despacho a toda Colombia por transportadora
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#cotizar" className="btn inline-flex items-center justify-center gap-2 rounded-full bg-vino px-6 py-3.5 font-bold text-crema hover:bg-vino-700">
                  Cotizar ahora
                  <ArrowRight aria-hidden className="size-4" />
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ring-2 ring-vino ring-inset hover:bg-vino hover:text-crema"
                >
                  <MessageCircle aria-hidden className="size-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-8 ring-crema shadow-xl shadow-vino/20 lg:rotate-1">
              <Image src={l.image} alt={l.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Qué encuentras */}
        <section className="px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl" data-reveal>
              {l.kind === "cliente" ? "Cómo te ayudamos" : "Lo que encuentras en esta línea"}
            </h2>
            <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {l.bloques.map((b, i) => (
                <li key={b.title} data-reveal style={{ "--i": i % 3 } as React.CSSProperties} className="border-t-2 border-vino pt-4">
                  <h3 className="font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-cacao">{b.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap items-center gap-3" data-reveal>
              <span className="text-sm font-bold tracking-wide uppercase">La compran:</span>
              {l.compradores.map((c) => (
                <span key={c} className="rounded-full bg-durazno-200 px-4 py-1.5 text-sm font-semibold">
                  {c}
                </span>
              ))}
            </div>
            <a href="/catalogo" className="mt-8 inline-flex items-center gap-2 font-bold underline underline-offset-4" data-reveal>
              Ver todas las referencias en el catálogo mayorista
              <ArrowRight aria-hidden className="size-4" />
            </a>
          </div>
        </section>

        {/* Cotizar */}
        <section id="cotizar" className="scroll-mt-32 bg-vino px-4 py-14 text-crema sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div data-reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">Cuéntanos qué necesitas y te cotizamos.</h2>
              <p className="mt-4 max-w-md text-lg text-crema/80">Te respondemos por WhatsApp con referencias y precios mayoristas.</p>
            </div>
            <div data-reveal>
              <QuoteForm lineaInicial={l.linea} origen={l.slug} />
            </div>
          </div>
        </section>

        {/* Preguntas */}
        <section className="px-4 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl" data-reveal>
              Preguntas frecuentes
            </h2>
            <div className="divide-y divide-vino/15 border-y border-vino/15" data-reveal>
              {l.faqs.map((f) => (
                <details key={f.q} className="py-2">
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

        {/* Otras líneas */}
        <nav aria-label="Otras líneas y clientes" className="px-4 pb-16">
          <div className="mx-auto max-w-7xl border-t-2 border-vino pt-8">
            <p className="text-sm font-bold tracking-wide uppercase">También te puede interesar</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {otras.map((o) => (
                <li key={o.slug}>
                  <a href={`/${o.slug}`} className="btn inline-flex rounded-full border-2 border-vino/20 px-4 py-2 font-semibold hover:border-vino">
                    {o.menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </main>
      <SiteFooter />
      <WhatsAppFloat href={wa} />
    </>
  );
}
