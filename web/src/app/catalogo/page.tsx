import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { CatalogEmbed } from "@/components/catalog-embed";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CATALOG_MESSAGE, PEDIDO_MINIMO_TEXTO, whatsappLink } from "@/content";

export const metadata: Metadata = {
  title: "Catálogo Mayorista 2026 | Mister Pets",
  description: "Catálogo mayorista de Mister Pets: juguetes, alimentación, higiene, accesorios, transporte y hábitat para mascotas. Pide precios por WhatsApp.",
};

const href = whatsappLink(CATALOG_MESSAGE);

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cacao hover:underline">
            <ArrowLeft aria-hidden className="size-4" /> Volver al inicio
          </a>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Catálogo Mayorista 2026</h1>
          <p className="mt-3 text-lg text-cacao">
            Anota los códigos de lo que te interesa y pídenos los precios por WhatsApp. Pedido mínimo {PEDIDO_MINIMO_TEXTO}.
          </p>
        </div>
        <div className="mt-8">
          <CatalogEmbed />
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2 rounded-full bg-vino px-6 py-3.5 font-bold text-crema hover:bg-vino-700"
          >
            <MessageCircle aria-hidden className="size-5" /> Pedir precios por WhatsApp
          </a>
        </div>
      </main>
      <WhatsAppFloat href={href} />
    </>
  );
}
