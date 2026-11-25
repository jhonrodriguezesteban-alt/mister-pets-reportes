"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { PEDIDO_MINIMO_TEXTO, whatsappLink } from "@/content";
import { track } from "@/lib/track";

const TIPOS = [
  "Pet shop",
  "Veterinaria",
  "Agropecuaria / agroveterinaria",
  "Peluquería canina",
  "Guardería u hotel canino",
  "Tienda online / redes sociales",
  "Voy a abrir mi negocio",
  "Otro",
];

const LINEAS = ["Juguetes", "Alimentación", "Higiene y cuidado", "Ropa y accesorios", "Transporte", "Hábitat", "Kit de apertura"];

const PRESUPUESTOS = ["$300.000 – $500.000", "$500.000 – $1.000.000", "$1.000.000 – $3.000.000", "Más de $3.000.000", "Aún no sé"];

const field =
  "mt-1.5 w-full rounded-xl border-2 border-vino/15 bg-blanco px-4 py-3 text-base text-vino outline-none transition-colors focus:border-vino";

// Formulario de cotización: arma el mensaje y abre WhatsApp. Califica al cliente antes de llegar al chat.
export function QuoteForm({ lineaInicial, origen = "inicio" }: { lineaInicial?: string; origen?: string }) {
  const [lineas, setLineas] = useState<string[]>(lineaInicial ? [lineaInicial] : []);
  const [error, setError] = useState("");

  const toggle = (l: string) => setLineas((xs) => (xs.includes(l) ? xs.filter((x) => x !== l) : [...xs, l]));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nombre = String(d.get("nombre") || "").trim();
    const negocio = String(d.get("negocio") || "").trim();
    const tipo = String(d.get("tipo") || "");
    const ciudad = String(d.get("ciudad") || "").trim();
    const presupuesto = String(d.get("presupuesto") || "");
    const detalle = String(d.get("detalle") || "").trim();
    if (!nombre || !tipo || !ciudad) {
      setError("Completa tu nombre, el tipo de negocio y la ciudad para cotizarte.");
      return;
    }
    setError("");
    const msg = [
      "Hola Mister Pets, quiero una cotización mayorista.",
      `• Nombre: ${nombre}`,
      negocio && `• Negocio: ${negocio}`,
      `• Tipo de negocio: ${tipo}`,
      `• Ciudad: ${ciudad}`,
      lineas.length > 0 && `• Me interesa: ${lineas.join(", ")}`,
      presupuesto && `• Presupuesto aprox.: ${presupuesto}`,
      detalle && `• Detalle: ${detalle}`,
    ]
      .filter(Boolean)
      .join("\n");
    track("cotizacion_enviada", { tipo_negocio: tipo, ciudad, lineas: lineas.join("|"), presupuesto, origen });
    const url = whatsappLink(msg);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-[1.75rem] bg-crema p-6 text-vino shadow-xl shadow-vino/10 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold" htmlFor="cot-nombre">
          Tu nombre *
          <input id="cot-nombre" name="nombre" autoComplete="name" required className={field} />
        </label>
        <label className="block text-sm font-bold" htmlFor="cot-negocio">
          Nombre del negocio
          <input id="cot-negocio" name="negocio" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-bold" htmlFor="cot-tipo">
          Tipo de negocio *
          <select id="cot-tipo" name="tipo" required defaultValue="" className={field}>
            <option value="" disabled>
              Elige una opción
            </option>
            {TIPOS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-bold" htmlFor="cot-ciudad">
          Ciudad *
          <input id="cot-ciudad" name="ciudad" autoComplete="address-level2" required className={field} />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-bold">¿Qué líneas te interesan?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {LINEAS.map((l) => {
            const on = lineas.includes(l);
            return (
              <button
                key={l}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(l)}
                className={`btn cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold ${
                  on ? "border-vino bg-vino text-crema" : "border-vino/20 bg-blanco hover:border-vino/50"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold" htmlFor="cot-presupuesto">
          Presupuesto aproximado
          <select id="cot-presupuesto" name="presupuesto" defaultValue="" className={field}>
            <option value="">Prefiero no decir</option>
            {PRESUPUESTOS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-bold" htmlFor="cot-detalle">
          ¿Algo más? (referencias, cantidades)
          <input id="cot-detalle" name="detalle" placeholder="Ej: MP2549 x 6, areneros tapados" className={field} />
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-vino/10 px-4 py-3 text-sm font-semibold">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-vino px-7 py-4 text-base font-bold text-crema hover:bg-vino-700"
        >
          <MessageCircle aria-hidden className="size-5" />
          Enviar cotización por WhatsApp
        </button>
        <p className="text-sm text-cacao">
          Venta solo a negocios · Pedido mínimo {PEDIDO_MINIMO_TEXTO}
        </p>
      </div>
    </form>
  );
}
