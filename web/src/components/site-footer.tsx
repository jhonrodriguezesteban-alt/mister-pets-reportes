import { Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { landings } from "@/landings";
import {
  CATALOG_MESSAGE,
  DIRECCION,
  HORARIO,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_DISPLAY,
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

export function SiteFooter() {
  return (
      <footer className="bg-vino text-crema">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-crema/80">Importador mayorista de productos para mascotas. Bogotá, Colombia.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-durazno">Mayoreo por línea</h2>
            <ul className="mt-4 space-y-2 text-crema/85">
              {landings.filter((l) => l.kind === "producto").map((l) => (
                <li key={l.slug}>
                  <a href={`/${l.slug}`} className="hover:underline">{l.menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-durazno">Mister Pets</h2>
            <ul className="mt-4 space-y-2 text-crema/85">
              <li><a href="/catalogo" className="hover:underline">Catálogo</a></li>
              {landings.filter((l) => l.kind === "cliente").map((l) => (
                <li key={l.slug}>
                  <a href={`/${l.slug}`} className="hover:underline">{l.menu}</a>
                </li>
              ))}
              <li><a href="/#como-comprar" className="hover:underline">Cómo comprar</a></li>
              <li><a href="/#cotizar" className="hover:underline">Cotizar</a></li>
              <li><a href="/#preguntas" className="hover:underline">Preguntas frecuentes</a></li>
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
  );
}
