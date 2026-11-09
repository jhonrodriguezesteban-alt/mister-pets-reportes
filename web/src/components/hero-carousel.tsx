"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

type Slide = {
  id: string;
  theme: "durazno" | "vino" | "crema";
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string; external?: boolean };
  visual: React.ReactNode;
};

// Sticker circular, inspirado en los sellos de sabor de los banners de referencia.
function Sticker({ children, className = "", tone = "vino", delay = 0 }: { children: React.ReactNode; className?: string; tone?: "vino" | "durazno" | "crema"; delay?: number }) {
  const tones = { vino: "bg-vino text-crema", durazno: "bg-durazno text-vino", crema: "bg-crema text-vino" };
  return (
    <span
      style={{ transitionDelay: `${300 + delay}ms` }}
      className={`hc-pop absolute grid size-24 place-items-center rounded-full p-3 text-center font-display text-sm leading-tight font-extrabold shadow-lg shadow-vino/20 sm:size-28 sm:text-base ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

function Framed({ src, alt, className = "", sizes }: { src: string; alt: string; className?: string; sizes: string }) {
  return (
    <div className={`absolute overflow-hidden rounded-2xl ring-8 ring-crema shadow-xl shadow-vino/20 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function HeroCarousel({ waHref, visitHref }: { waHref: string; visitHref: string }) {
  const slides: Slide[] = [
    {
      id: "inicio",
      theme: "durazno",
      eyebrow: "Importador mayorista · Bogotá",
      title: "Surte tu pet shop con el mejor importador de productos pet de Colombia.",
      text: "Juguetes, comederos, areneros, pecheras, maletas y más. Un solo proveedor, un solo pedido, despacho a todo el país.",
      cta: { label: "Cotiza por WhatsApp", href: waHref, external: true },
      visual: (
        <>
          <Image
            src="/images/hero-cachorro-pelota.webp"
            alt="Cachorro golden mordiendo una pelota de caucho del catálogo Mister Pets"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="hc-img object-contain object-bottom mix-blend-multiply"
          />
          <Sticker className="top-[12%] left-[6%] -rotate-12" tone="vino">
            +400 referencias
          </Sticker>
          <Sticker className="top-[38%] right-[2%] rotate-6" tone="crema" delay={120}>
            Envío a toda Colombia
          </Sticker>
        </>
      ),
    },
    {
      id: "gatos",
      theme: "vino",
      eyebrow: "Línea gatos",
      title: "Todo para el cliente que llega con su gato.",
      text: "Areneros tapados, fuentes, rascadores, juguetes y pecheras. Lo que piden en mostrador, en un solo pedido.",
      cta: { label: "Ver catálogo", href: "#catalogo" },
      visual: (
        <>
          <Framed
            src="/images/productos/fuente.jpg"
            alt="Gato tomando agua de una fuente para mascotas del catálogo"
            sizes="(min-width: 1024px) 30vw, 70vw"
            className="hc-img bottom-[6%] left-[4%] h-[52%] w-[58%] -rotate-3"
          />
          <div className="hc-img absolute right-[4%] bottom-0 h-[92%] w-[52%]">
            <Image src="/images/gato-recorte.webp" alt="Gato atigrado mirando hacia arriba" fill sizes="(min-width: 1024px) 26vw, 50vw" className="object-contain object-bottom" />
          </div>
          <Sticker className="top-[8%] left-[8%] -rotate-12" tone="durazno">
            13 modelos de areneros
          </Sticker>
          <Sticker className="top-[34%] left-[38%] rotate-6" tone="crema" delay={120}>
            Fuentes y filtros
          </Sticker>
        </>
      ),
    },
    {
      id: "paseo",
      theme: "crema",
      eyebrow: "Ropa y accesorios",
      title: "Pecheras, collares y traíllas en todas las tallas.",
      text: "De XXS a XXL, para perros y gatos, con colores que se venden solos en la vitrina.",
      cta: { label: "Pedir referencias", href: waHref, external: true },
      visual: (
        <>
          <Framed
            src="/images/productos/accesorios.jpg"
            alt="Perro pastor australiano con pechera fucsia"
            sizes="(min-width: 1024px) 34vw, 80vw"
            className="hc-img top-[8%] right-[4%] h-[62%] w-[70%] rotate-2"
          />
          <Framed
            src="/images/productos/pechera-gato.jpg"
            alt="Gato con pechera tejida azul y traílla"
            sizes="(min-width: 1024px) 20vw, 45vw"
            className="hc-img bottom-[4%] left-[4%] h-[46%] w-[42%] -rotate-6"
          />
          <Sticker className="right-[8%] bottom-[8%] rotate-12" tone="vino">
            Tallas XXS a XXL
          </Sticker>
          <Sticker className="top-[2%] left-[10%] -rotate-6" tone="durazno" delay={120}>
            Perros y gatos
          </Sticker>
        </>
      ),
    },
    {
      id: "visita",
      theme: "durazno",
      eyebrow: "Bodega mayorista en Bogotá",
      title: "Ven a ver el surtido en Puerto Príncipe.",
      text: "Calle 10 #20-35, Bodega 317. Atendemos con cita de lunes a viernes de 9:00 a.m. a 5:00 p.m. y sábados hasta las 2:00 p.m.",
      cta: { label: "Agendar cita", href: visitHref, external: true },
      visual: (
        <>
          <Framed
            src="/images/cachorro.jpg"
            alt="Cachorro golden retriever corriendo hacia la cámara"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="hc-img inset-x-[4%] top-[8%] bottom-[8%] rotate-1"
          />
          <Sticker className="top-[2%] right-[2%] rotate-12" tone="vino">
            Con cita previa
          </Sticker>
          <Sticker className="bottom-[2%] left-[2%] -rotate-6" tone="crema" delay={120}>
            Calle 10 #20-35
          </Sticker>
        </>
      ),
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => go(active + 1), 7000);
    return () => clearTimeout(t);
  }, [active, paused, reduced, go]);

  const bg = { durazno: "bg-durazno text-vino", vino: "bg-vino text-crema", crema: "bg-arena/60 text-vino" };

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Destacados de Mister Pets"
      className={`relative overflow-hidden transition-colors duration-700 ${bg[slides[active].theme]}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(active + 1);
        if (e.key === "ArrowLeft") go(active - 1);
      }}
    >
      <div className="mx-auto grid max-w-7xl px-4">
        {slides.map((s, i) => {
          const on = i === active;
          const Title = i === 0 ? "h1" : "p";
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${n}`}
              aria-hidden={!on}
              inert={!on}
              data-on={on}
              className="hc-slide grid items-center gap-4 [grid-area:1/1] lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative z-10 pt-10 pb-4 lg:py-20">
                <p className="hc-up text-sm font-bold tracking-[0.14em] uppercase">{s.eyebrow}</p>
                <Title className="hc-up mt-5 font-display text-[2.15rem] leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[3.9rem]" style={{ transitionDelay: "60ms" }}>
                  {s.title}
                </Title>
                <p className="hc-up mt-5 max-w-lg text-lg leading-relaxed opacity-90 sm:text-xl" style={{ transitionDelay: "120ms" }}>
                  {s.text}
                </p>
                <div className="hc-up mt-8" style={{ transitionDelay: "180ms" }}>
                  <a
                    href={s.cta.href}
                    {...(s.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold ${
                      s.theme === "vino" ? "bg-durazno text-vino hover:bg-durazno-200" : "bg-vino text-crema hover:bg-vino-700"
                    }`}
                  >
                    {s.cta.external ? <MessageCircle aria-hidden className="size-5" /> : null}
                    {s.cta.label}
                    {!s.cta.external ? <ArrowRight aria-hidden className="size-4" /> : null}
                  </a>
                </div>
              </div>
              <div className="relative -mx-4 h-[340px] sm:h-[440px] lg:mx-0 lg:h-[600px]">{s.visual}</div>
            </div>
          );
        })}
      </div>

      {/* Controles */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pb-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Elegir slide">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Ir al slide ${i + 1}: ${s.eyebrow}`}
              onClick={() => go(i)}
              className="group grid h-8 cursor-pointer place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full bg-current transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === active ? "w-10 opacity-100" : "w-4 opacity-35 group-hover:opacity-70"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(active - 1)} aria-label="Slide anterior" className="btn grid size-11 cursor-pointer place-items-center rounded-full ring-2 ring-current ring-inset">
            <ArrowLeft aria-hidden className="size-5" />
          </button>
          <button type="button" onClick={() => go(active + 1)} aria-label="Slide siguiente" className="btn grid size-11 cursor-pointer place-items-center rounded-full ring-2 ring-current ring-inset">
            <ArrowRight aria-hidden className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
