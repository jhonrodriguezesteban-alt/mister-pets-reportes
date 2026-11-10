"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CATALOG_MESSAGE, PEDIDO_MINIMO_BOGOTA, PEDIDO_MINIMO_NACIONAL, PEDIDO_MINIMO_TEXTO, whatsappLink } from "@/content";
import { Logo } from "./logo";

const nav = [
  { href: "/#productos", label: "Productos" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#clientes", label: "¿Para quién?" },
  { href: "/#como-comprar", label: "Cómo comprar" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/#visitanos", label: "Visítanos" },
];

const avisos = [
  "Envíos a toda Colombia",
  `Pedido mínimo ${PEDIDO_MINIMO_BOGOTA} en Bogotá`,
  `${PEDIDO_MINIMO_NACIONAL} para el resto del país`,
  "Venta exclusiva para negocios",
  "+400 referencias en bodega",
  "Bodega en CC Puerto Príncipe, Bogotá",
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="marquee-wrap overflow-hidden bg-vino text-crema text-xs sm:text-sm">
        <p className="sr-only">
          Envíos a toda Colombia. Pedido mínimo {PEDIDO_MINIMO_TEXTO}. Venta exclusiva para negocios.
        </p>
        <div className="marquee py-2" style={{ animationDuration: "45s" }} aria-hidden>
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {avisos.map((t) => (
                <li key={t + k} className="flex items-center pl-10 whitespace-nowrap">
                  {t}
                  <svg viewBox="0 0 24 24" className="ml-10 size-3 shrink-0 text-durazno" fill="currentColor">
                    <path d="M12 2l2.4 7.6H22l-6.2 4.6 2.4 7.6L12 17.2 5.8 21.8l2.4-7.6L2 9.6h7.6z" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="border-b border-arena/70 bg-crema/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="/#inicio" aria-label="Mister Pets, ir al inicio">
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden xl:block">
            <ul className="flex items-center gap-7 text-[15px] font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vino"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink(CATALOG_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hidden items-center gap-2 rounded-full bg-vino px-5 py-2.5 text-sm font-bold text-crema hover:bg-vino-700 sm:inline-flex"
            >
              <MessageCircle aria-hidden className="size-4" />
              Cotiza por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              data-menu-toggle
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="btn grid size-11 cursor-pointer place-items-center rounded-full border border-vino/20 xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <nav id="menu-movil" aria-label="Menú móvil" hidden={!open} className="border-t border-arena/70 xl:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <a
                  href={whatsappLink(CATALOG_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2 rounded-full bg-vino px-5 py-3 font-bold text-crema"
                >
                  <MessageCircle aria-hidden className="size-4" />
                  Pide el catálogo mayorista
                </a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
