import { PawPrint } from "lucide-react";

// Logo provisional en texto. Reemplazar por el logo oficial en buena calidad (PNG/SVG).
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-full bg-durazno text-vino ring-2 ring-vino/10"
      >
        <PawPrint className="size-5" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-extrabold tracking-tight ${light ? "text-crema" : "text-vino"}`}
        >
          MISTER PETS
        </span>
        <span className={`block text-[11px] font-medium ${light ? "text-durazno-200" : "text-cacao"}`}>
          La mejor opción para tu mascota
        </span>
      </span>
    </span>
  );
}
