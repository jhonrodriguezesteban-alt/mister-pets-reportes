import Image from "next/image";

// Logo oficial de Mister Pets (fondo transparente). Original en brand/logo-mister-pets-original.png.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/images/logo-mister-pets.png"
        alt=""
        width={454}
        height={480}
        priority
        className={`h-14 w-auto shrink-0 ${light ? "box-content rounded-2xl bg-crema p-1.5" : ""}`}
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
