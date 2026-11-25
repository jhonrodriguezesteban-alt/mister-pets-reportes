"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";

// Google Analytics 4 y Google Ads. Se activan solo si se configuran en Vercel:
//   NEXT_PUBLIC_GA_ID            ej. G-XXXXXXXXXX
//   NEXT_PUBLIC_GADS_ID          ej. AW-XXXXXXXXXX
//   NEXT_PUBLIC_GADS_CONVERSION  ej. AW-XXXXXXXXXX/abcDEF123 (etiqueta de conversión)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export function Analytics() {
  // Cuenta como conversión cualquier clic a WhatsApp, a llamar o a Google Maps en toda la página.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.closest("[data-track-area]")?.getAttribute("data-track-area") || location.pathname;
      if (href.includes("wa.me")) track("whatsapp_click", { ubicacion: where, texto: a.textContent?.trim().slice(0, 60) });
      else if (href.startsWith("tel:")) track("llamada_click", { ubicacion: where });
      else if (href.includes("google.com/maps")) track("mapa_click", { ubicacion: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const first = GA_ID || ADS_ID;
  if (!first) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${first}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${GA_ID ? `gtag('config','${GA_ID}');` : ""}${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
