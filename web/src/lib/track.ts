// Envía eventos a Google Analytics / Google Ads si están instalados (ver components/analytics.tsx).
// Si no hay IDs configurados no hace nada.
type Gtag = (...args: unknown[]) => void;

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: Gtag; dataLayer?: unknown[] };
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
    const conv = process.env.NEXT_PUBLIC_GADS_CONVERSION;
    if (conv && (event === "whatsapp_click" || event === "cotizacion_enviada")) {
      w.gtag("event", "conversion", { send_to: conv });
    }
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params });
  }
}
