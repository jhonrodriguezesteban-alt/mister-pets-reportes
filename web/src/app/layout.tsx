import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Dirección pública del sitio: se usa para armar los enlaces de la imagen de vista previa.
  // Cambiar cuando se conecte el dominio propio.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://misterpets.vercel.app"),
  title: "Mister Pets | Mayorista de productos para mascotas en Colombia",
  description:
    "Importador mayorista de productos para mascotas en Bogotá. Más de 400 referencias para pet shops, veterinarias y locales de mascotas, con envíos a toda Colombia. Pedido mínimo $300.000 en Bogotá y $500.000 para el resto del país.",
  openGraph: {
    title: "Mister Pets | Mayorista Pet Shop Colombia",
    description:
      "Más de 400 referencias para tu negocio de mascotas. Envíos a toda Colombia desde Bogotá.",
    locale: "es_CO",
    type: "website",
    siteName: "Mister Pets",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mister Pets | Mayorista Pet Shop Colombia",
    description: "Más de 400 referencias para tu negocio de mascotas. Envíos a toda Colombia desde Bogotá.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
