// Páginas de aterrizaje por intención de búsqueda (para Google y Google Ads).
// Cada una responde a lo que escribe un comprador mayorista: línea de producto o tipo de negocio.
// Datos tomados del Catálogo Mayorista 2026. No se publican precios.

export type Landing = {
  slug: string;
  kind: "producto" | "cliente";
  /** Nombre corto para menús y enlaces */
  menu: string;
  /** Línea del formulario de cotización que se marca por defecto */
  linea?: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  alt: string;
  bloques: { title: string; text: string }[];
  compradores: string[];
  faqs: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "juguetes-para-mascotas-al-por-mayor",
    kind: "producto",
    menu: "Juguetes al por mayor",
    linea: "Juguetes",
    metaTitle: "Juguetes para mascotas al por mayor en Colombia | Mister Pets",
    description:
      "Importador mayorista de juguetes para perros y gatos: pelotas de caucho, mordedores, peluches con sonido, juguetes para gato y rascadores. Venta a pet shops y veterinarias con envío a toda Colombia.",
    eyebrow: "Juguetes · Venta al por mayor",
    h1: "Juguetes para perros y gatos al por mayor.",
    intro:
      "Los juguetes son de lo que más rota en mostrador. Surtimos pet shops, veterinarias y tiendas online con referencias para todas las tallas y edades, directo de importador.",
    image: "/images/productos/peluches.jpg",
    alt: "Peluches de pollito para perro del catálogo Mister Pets",
    bloques: [
      { title: "Pelotas de caucho", text: "En varios diámetros y pesos, macizas y resistentes para perros que muerden fuerte." },
      { title: "Mordedores", text: "Macizos y con textura, para cachorros y adultos. Ayudan a la limpieza dental." },
      { title: "Peluches con sonido", text: "Diseños que se venden solos en vitrina, en tamaños pequeño, mediano y grande." },
      { title: "Juguetes para gato", text: "Pelotas, cañas, ratones, juguetes interactivos y catnip." },
      { title: "Interactivos", text: "Juguetes que se lanzan o se activan solos, como la pelota-disco con luces." },
      { title: "Rascadores", text: "Rascadores de cartón y modelos compactos para gato." },
    ],
    compradores: ["Pet shops", "Veterinarias", "Tiendas online", "Agropecuarias"],
    faqs: [
      { q: "¿Puedo combinar juguetes con otras líneas?", a: "Sí. El pedido mínimo se cuenta con todas las líneas del catálogo juntas." },
      { q: "¿Tienen juguetes para gatos?", a: "Sí, tenemos una línea específica para gato: pelotas, cañas, catnip, interactivos y rascadores." },
    ],
  },
  {
    slug: "comederos-y-fuentes-al-por-mayor",
    kind: "producto",
    menu: "Comederos y fuentes",
    linea: "Alimentación",
    metaTitle: "Comederos, bebederos y fuentes para mascotas al por mayor | Mister Pets",
    description:
      "Comederos elevados, antirreflujo y dobles, bebederos portátiles, dispensadores de alimento y fuentes para gato con filtro. Venta al por mayor para pet shops con envío nacional.",
    eyebrow: "Alimentación · Venta al por mayor",
    h1: "Comederos, bebederos y fuentes al por mayor.",
    intro:
      "Platos de acero, comederos elevados y antirreflujo, bebederos para paseo y fuentes para gato. Una línea que el cliente vuelve a comprar y que sube el ticket de cada venta.",
    image: "/images/productos/alimentacion.jpg",
    alt: "Perro comiendo de un comedero doble elevado del catálogo",
    bloques: [
      { title: "Comederos", text: "Sencillos, dobles, elevados y de acero inoxidable, en varios tamaños y colores." },
      { title: "Comederos antirreflujo", text: "Con base inclinada para gatos y razas pequeñas." },
      { title: "Bebederos portátiles", text: "Para paseo y viaje, fáciles de llevar." },
      { title: "Dispensadores", text: "Dispensadores de alimento y agua de gran capacidad." },
      { title: "Fuentes y filtros", text: "9 modelos de fuentes para gato y filtros de repuesto, que son venta recurrente." },
    ],
    compradores: ["Pet shops", "Veterinarias", "Tiendas online", "Guarderías caninas"],
    faqs: [
      { q: "¿Venden los filtros de repuesto de las fuentes?", a: "Sí, los filtros se venden por separado y son de recompra constante." },
      { q: "¿Hay comederos para razas grandes?", a: "Sí, hay comederos dobles y elevados en tamaños grandes." },
    ],
  },
  {
    slug: "areneros-y-productos-de-aseo-al-por-mayor",
    kind: "producto",
    menu: "Areneros y aseo",
    linea: "Higiene y cuidado",
    metaTitle: "Areneros para gato y productos de aseo al por mayor | Mister Pets",
    description:
      "13 modelos de areneros tapados, areneros abiertos, tapetes de entrenamiento, bolsas, cepillos, deslanadores y corta uñas al por mayor para pet shops, veterinarias y peluquerías caninas.",
    eyebrow: "Higiene y cuidado · Venta al por mayor",
    h1: "Areneros y productos de aseo para mascotas al por mayor.",
    intro:
      "Todo lo de higiene que piden en mostrador y en peluquería: areneros, tapetes, bolsas, cepillos y corta uñas, en un mismo pedido.",
    image: "/images/productos/higiene.jpg",
    alt: "Gato recibiendo un cepillado con cepillo autolimpiable",
    bloques: [
      { title: "Areneros tapados", text: "13 modelos, en varios colores y tamaños, con pala incluida en varios de ellos." },
      { title: "Areneros abiertos y accesorios", text: "Areneros abiertos, tapetes atrapa-arena, filtros de carbón activado y palas." },
      { title: "Tapetes de entrenamiento", text: "Tapetes absorbentes en tallas XS a XL para cachorros y guarderías." },
      { title: "Bolsas y dispensadores", text: "Bolsas para recoger y dispensadores para la traílla." },
      { title: "Cepillos y quita pelos", text: "Cepillos autolimpiables, deslanadores, cepillos de vapor y limpiadores de pelo." },
      { title: "Corta uñas y cuidado", text: "Corta uñas, limadores, set de cepillos de dientes y collar isabelino." },
    ],
    compradores: ["Pet shops", "Veterinarias", "Peluquerías caninas", "Guarderías y hoteles caninos"],
    faqs: [
      { q: "¿Cuántos modelos de areneros tienen?", a: "En el catálogo actual hay 13 modelos de areneros tapados, además de areneros abiertos." },
      { q: "¿Tienen productos para peluquería canina?", a: "Sí: cepillos, deslanadores, cepillos de vapor, corta uñas y limadores." },
    ],
  },
  {
    slug: "pecheras-collares-y-ropa-para-mascotas-al-por-mayor",
    kind: "producto",
    menu: "Pecheras, collares y ropa",
    linea: "Ropa y accesorios",
    metaTitle: "Pecheras, collares y ropa para mascotas al por mayor | Mister Pets",
    description:
      "Pecheras en tallas XXS a XXL, collares, traíllas, lazos, pañoletas, ropa y accesorios para perros y gatos al por mayor. Para pet shops y tiendas de mascotas en toda Colombia.",
    eyebrow: "Ropa y accesorios · Venta al por mayor",
    h1: "Pecheras, collares y ropa para mascotas al por mayor.",
    intro:
      "Accesorios de paseo y ropa por tallas, para perros y gatos. Colores y modelos pensados para la vitrina de un pet shop.",
    image: "/images/productos/accesorios.jpg",
    alt: "Perro con pechera fucsia del catálogo Mister Pets",
    bloques: [
      { title: "Pecheras", text: "Pecheras acolchadas, deportivas y decorativas en tallas XXS a XXL, muchas con traílla a juego." },
      { title: "Collares y traíllas", text: "Collares por ancho y talla, traíllas y lazos, algunos por cartón de 6 o 12 unidades." },
      { title: "Ropa", text: "Ropa por tallas S a XXL y por temporada." },
      { title: "Accesorios decorativos", text: "Pañoletas, gorros, gafas y zapatos para mascota." },
    ],
    compradores: ["Pet shops", "Tiendas online", "Peluquerías caninas", "Agropecuarias"],
    faqs: [
      { q: "¿Qué tallas manejan?", a: "Las pecheras van de XXS a XXL según el modelo, y la ropa de S a XXL." },
      { q: "¿Venden collares por cartón?", a: "Sí, varias referencias de collares se venden por cartón de 6 o 12 unidades." },
    ],
  },
  {
    slug: "maletas-y-guacales-para-mascotas-al-por-mayor",
    kind: "producto",
    menu: "Maletas y guacales",
    linea: "Transporte",
    metaTitle: "Maletas, guacales y coches para mascotas al por mayor | Mister Pets",
    description:
      "Maletas de transporte, mochilas tipo cápsula, guacales y coches para mascotas al por mayor. Medidas en el catálogo y envío a toda Colombia.",
    eyebrow: "Transporte · Venta al por mayor",
    h1: "Maletas, guacales y coches para mascotas al por mayor.",
    intro: "Productos de ticket alto para tu tienda: maletas, mochilas con ventana, guacales y coches, con medidas en el catálogo.",
    image: "/images/productos/transporte.jpg",
    alt: "Gato asomándose a una maleta de transporte azul",
    bloques: [
      { title: "Maletas", text: "Maletas rígidas y plegables en varios tamaños y colores." },
      { title: "Mochilas tipo cápsula", text: "Mochilas con ventana para gatos y perros pequeños." },
      { title: "Guacales", text: "Guacales de distintas medidas para viaje y visita al veterinario." },
      { title: "Coches", text: "Coches de paseo para mascotas." },
    ],
    compradores: ["Pet shops", "Veterinarias", "Tiendas online"],
    faqs: [
      { q: "¿Dónde veo las medidas?", a: "Cada referencia tiene sus medidas en el catálogo mayorista. Pídelo por WhatsApp o míralo en la sección Catálogo." },
    ],
  },
  {
    slug: "corrales-y-jaulas-para-mascotas-al-por-mayor",
    kind: "producto",
    menu: "Corrales y jaulas",
    linea: "Hábitat",
    metaTitle: "Corrales plegables y jaulas para mascotas al por mayor | Mister Pets",
    description: "Corrales plegables en varias tallas, jaulas y ruedas para hámster al por mayor, para pet shops y guarderías.",
    eyebrow: "Hábitat · Venta al por mayor",
    h1: "Corrales plegables y jaulas al por mayor.",
    intro: "Corrales plegables para cachorros y guarderías, y jaulas con accesorios para pequeñas especies.",
    image: "/images/productos/habitat.jpg",
    alt: "Corral octagonal plegable para mascotas",
    bloques: [
      { title: "Corrales plegables", text: "Corral octagonal en tres tallas, fácil de armar y guardar." },
      { title: "Jaulas para hámster", text: "Jaulas compactas para pequeñas especies." },
      { title: "Ruedas y accesorios", text: "Ruedas para hámster en varios tamaños." },
    ],
    compradores: ["Pet shops", "Guarderías caninas", "Tiendas online"],
    faqs: [{ q: "¿Los corrales vienen en varias tallas?", a: "Sí, el corral plegable viene en tres tamaños." }],
  },
  {
    slug: "proveedor-para-veterinarias",
    kind: "cliente",
    menu: "Para veterinarias",
    linea: "Higiene y cuidado",
    metaTitle: "Proveedor de accesorios para veterinarias en Colombia | Mister Pets",
    description:
      "Proveedor mayorista de accesorios para clínicas veterinarias: collares isabelinos, areneros, cepillos, corta uñas, comederos, guacales y juguetes. Envío a toda Colombia desde Bogotá.",
    eyebrow: "Para clínicas veterinarias",
    h1: "Proveedor de accesorios para tu veterinaria.",
    intro:
      "Complementa la consulta con lo que el dueño de la mascota necesita al salir: collar isabelino, guacal, cepillos, comederos y juguetes. Un solo proveedor para toda la vitrina.",
    image: "/images/veterinaria.jpg",
    alt: "Veterinaria revisando a un perro maltés en consulta",
    bloques: [
      { title: "Postoperatorio", text: "Collares isabelinos rígidos y acolchados tipo dona en varias tallas." },
      { title: "Higiene y cuidado", text: "Areneros, tapetes, cepillos, corta uñas, limadores y cepillos de dientes." },
      { title: "Transporte", text: "Guacales y maletas para la visita al veterinario." },
      { title: "Vitrina de mostrador", text: "Comederos, juguetes y accesorios que el cliente compra mientras espera." },
    ],
    compradores: ["Clínicas veterinarias", "Consultorios", "Hospitales veterinarios"],
    faqs: [
      { q: "¿Tienen collares isabelinos?", a: "Sí, en varias tallas y en versión rígida y acolchada tipo dona." },
      { q: "¿Cuál es el pedido mínimo?", a: "$300.000 en Bogotá y $500.000 para el resto del país, combinando referencias." },
    ],
  },
  {
    slug: "surtido-para-abrir-pet-shop",
    kind: "cliente",
    menu: "Kit de apertura de pet shop",
    linea: "Kit de apertura",
    metaTitle: "Surtido para abrir un pet shop: proveedor mayorista | Mister Pets",
    description:
      "¿Vas a abrir tu tienda de mascotas? Te ayudamos a armar el primer pedido con las referencias que más rotan según tu local, tu zona y tu presupuesto. Importador mayorista en Bogotá.",
    eyebrow: "Kit de apertura",
    h1: "¿Vas a abrir tu pet shop? Te armamos el primer surtido.",
    intro:
      "Cuéntanos el tamaño de tu local, tu ciudad y tu presupuesto. Te proponemos un primer pedido con lo que más rota en cada línea para que no compres de más ni te falte lo básico.",
    image: "/images/pet-shop.jpg",
    alt: "Pet shop con vitrina de accesorios y productos para mascotas",
    bloques: [
      { title: "1. Nos cuentas tu proyecto", text: "Tamaño del local, ciudad, tipo de cliente y presupuesto." },
      { title: "2. Te proponemos el surtido", text: "Una mezcla de las seis líneas con las referencias que más rotan." },
      { title: "3. Ajustamos juntos", text: "Quitas o agregas referencias hasta que el pedido te cuadre." },
      { title: "4. Lo despachamos", text: "Empacamos en Bogotá y enviamos a tu ciudad por transportadora." },
    ],
    compradores: ["Emprendedores", "Nuevos pet shops", "Tiendas online que empiezan", "Agropecuarias que abren línea de mascotas"],
    faqs: [
      { q: "¿Cuánto necesito para empezar?", a: "El pedido mínimo es $300.000 en Bogotá y $500.000 para el resto del país. Te proponemos el surtido según el presupuesto que tengas." },
      { q: "¿Me asesoran sobre qué comprar?", a: "Sí. Te decimos qué referencias rotan más según el tipo de local y de cliente." },
    ],
  },
];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);
