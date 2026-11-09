import { CATALOGO_CANVA_URL } from "@/content";

// Catálogo Mayorista insertado desde Canva. Se actualiza solo cuando se edita el diseño en Canva.
// Requiere que el diseño tenga activada la inserción pública (Compartir → Empotrar).
export function CatalogEmbed() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-blanco shadow-xl shadow-vino/10 ring-1 ring-arena" style={{ paddingTop: "141.4%" }}>
        <iframe
          title="Catálogo Mayorista Mister Pets 2026"
          src={`${CATALOGO_CANVA_URL}?embed`}
          loading="lazy"
          allow="fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <p className="mt-4 text-center text-sm text-cacao">
        ¿No carga?{" "}
        <a href={CATALOGO_CANVA_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
          Abrir el catálogo en pantalla completa
        </a>
      </p>
    </div>
  );
}
