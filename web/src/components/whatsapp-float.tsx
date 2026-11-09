// Botón fijo de WhatsApp, visible en todas las pantallas (abajo a la derecha).
export function WhatsAppFloat({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="btn group fixed z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-vino/25 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vino sm:py-3 sm:pr-5 sm:pl-3.5"
      style={{
        right: "max(1rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))",
      }}
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-7 shrink-0" fill="currentColor">
        <path d="M16.04 3C9.4 3 4 8.36 4 14.95c0 2.11.56 4.17 1.62 5.98L4 29l8.3-2.17a12.1 12.1 0 0 0 3.74.6h.01c6.63 0 12.03-5.36 12.03-11.95C28.08 8.36 22.68 3 16.04 3Zm0 21.86h-.01c-1.18 0-2.34-.2-3.43-.6l-.25-.09-4.93 1.29 1.32-4.78-.16-.25a9.83 9.83 0 0 1-1.52-5.48c0-5.47 4.47-9.92 9-9.92 5.34 0 9.97 4.45 9.97 9.92 0 5.47-4.48 9.91-9.99 9.91Zm5.47-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden font-bold sm:inline">Escríbenos</span>
    </a>
  );
}
