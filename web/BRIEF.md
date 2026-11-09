# Mister Pets — Página web (brief)

Construida con el flujo de [Claude Web Builder](https://github.com/Hainrixz/claude-webkit).
El sitio (Next.js + Tailwind + shadcn/ui) vivirá en esta carpeta `web/`.

## Ronda 1 — Lo básico
- **Negocio:** Mister Pets
- **Qué hace:** Importador de productos para el mercado de mascotas. Vende principalmente al por mayor a nivel nacional en Colombia.
- **Audiencia:** Compradores mayoristas: dueños de pet shops, veterinarias y locales de mascotas.

## Lo que dice Instagram (@misterpetscol)
- **Nombre en IG:** Mister Pets / Mayorista Pet Shop Colombia — ~1.900 seguidores, ~130 publicaciones.
- **Bio:** "+400 referencias para tu negocio", "Envíos a nivel nacional", "Pide el catálogo mayorista aquí".
- **WhatsApp:** wa.me/573122488330 (canal principal de venta).
- **Destacadas:** Catálogo, Ferias, Envíos (🚛🇨🇴), Horarios. Aparece Medellín (Provenza).
- **Logo:** gato y perro dentro de un círculo durazno, letras vinotinto, lema "La mejor opción para tu mascota" (`brand/logo-instagram-150.jpg`, solo referencia: baja resolución).
- **Contenido:** videos reales en la bodega (estanterías llenas de juguetes de colores), asesoras hablando a cámara, mensajes tipo "Juguetes para tu negocio", "No estás triste, solo necesitas emprender con Mister Pets", arena para gatos.
- **Tono:** cercano, emprendedor, con humor; habla al dueño de negocio.

## Ronda 2 — Dirección visual (propuesta, pendiente de aprobación)
- **Colores (sacados del logo):** vinotinto `#490807` (títulos, botones), durazno `#F7AE77` (acentos y bloques), arena `#EDC3A6`, crema `#FBF5EF` (fondo).
- **Tipografía:** Bricolage Grotesque (títulos, muy gruesa) + Figtree (texto).
- **Estilo:** cálido, cercano y con energía de bodega real; fotos reales en vez de stock.
- **Tema:** claro.

## Ronda 3 — Contenido
_Pendiente._

## Ronda 4 — Técnico
_Pendiente._

## Datos confirmados por Mister Pets
- Todo opera desde **Bogotá** (bodega y despachos).
- **Pedido mínimo: $300.000 en Bogotá y $500.000 fuera de Bogotá.**
- Referente visual: https://calabazapets.com/ (banner grande redondeado, categorías con íconos, bloques con fotos de animales, footer oscuro con columnas).
- La página es **informativa para clientes mayoristas**; la venta se cierra por WhatsApp.

## Pendiente por confirmar (está provisional en `src/content.ts`)
- [x] Dirección: Calle 10 #20-35, Bodega 317, CC Puerto Príncipe (Bogotá). Horario con cita: L-V 9am-5pm, sáb 9am-2pm.
- [x] Líneas de producto según el índice del Catálogo Mayorista 2026 (Canva), con fotos reales del catálogo en `public/images/productos/`.
- [ ] Testimonios reales de clientes: hoy son **ficticios** (nombres inventados). Reemplazar o quitar antes del lanzamiento oficial.
- [x] Logo oficial en alta calidad (`brand/logo-mister-pets-original.png`).
- [ ] Fotos reales de bodega y de clientes. Portada y productos ya usan fotos del catálogo; pet shop y veterinaria son fotos libres de Wikimedia Commons (con crédito en el pie de página).
- [ ] Respuesta a "¿Venden al detal?" y tiempos/costos de envío.

## Cómo verla en tu computador
```bash
cd web
npm install
npm run dev
```
Luego abre http://localhost:3000. Los textos se cambian en `src/content.ts`.
