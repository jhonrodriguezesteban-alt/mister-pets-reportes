import Image from "next/image";

// Logo tomado de la foto de perfil de Instagram (150 px). Reemplazar por el archivo
// original en alta calidad cuando esté disponible (mismo nombre en public/images/).
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/images/logo-mister-pets.png"
        alt=""
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full bg-blanco"
      />
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
