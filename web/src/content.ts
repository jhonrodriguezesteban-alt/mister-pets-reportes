// Todo el texto y los datos de la página viven aquí para que sea fácil cambiarlos.
// Lo marcado con "POR CONFIRMAR" es provisional hasta que Mister Pets lo valide.

export const WHATSAPP_NUMBER = "573122488330";
export const WHATSAPP_DISPLAY = "+57 312 248 8330";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CATALOG_MESSAGE =
  "Hola Mister Pets, tengo un negocio de mascotas y quiero recibir el catálogo mayorista.";

export const INSTAGRAM_URL = "https://www.instagram.com/misterpetscol/";

export const PEDIDO_MINIMO_BOGOTA = "$300.000";
export const PEDIDO_MINIMO_NACIONAL = "$500.000";
export const PEDIDO_MINIMO_TEXTO = `${PEDIDO_MINIMO_BOGOTA} en Bogotá · ${PEDIDO_MINIMO_NACIONAL} resto del país`;

// POR CONFIRMAR: dirección exacta y horario de atención en Bogotá.
export const DIRECCION = "Bogotá, Colombia";
export const HORARIO = "Lunes a sábado · horario por confirmar";

export const stats = [
  { value: "+400", label: "referencias para tu negocio" },
  { value: "Nacional", label: "envíos a toda Colombia" },
  { value: PEDIDO_MINIMO_BOGOTA, label: `pedido mínimo en Bogotá (${PEDIDO_MINIMO_NACIONAL} resto del país)` },
  { value: "Bogotá", label: "bodega y despachos" },
];

// Líneas tomadas del índice del Catálogo Mayorista 2026. Fotos reales del catálogo (Canva).
export const categorias = [
  {
    title: "Juguetes",
    items: ["Pelotas", "Mordedores", "Peluches", "Juguetes para gatos", "Interactivos", "Catnip y rascadores"],
    image: "/images/productos/peluches.jpg",
    alt: "Peluches de pollito para perro sobre un tapete",
  },
  {
    title: "Alimentación",
    items: ["Comederos", "Comederos antirreflujo", "Bebederos portátiles", "Dispensadores", "Fuentes y filtros"],
    image: "/images/productos/alimentacion.jpg",
    alt: "Perro french poodle comiendo de un comedero doble elevado",
  },
  {
    title: "Higiene y cuidado",
    items: ["Areneros tapados y abiertos", "Tapetes y pañales", "Cepillos y quita pelos", "Corta uñas", "Máquinas para peluquear"],
    image: "/images/productos/higiene.jpg",
    alt: "Gato recibiendo un cepillado con cepillo autolimpiable",
  },
  {
    title: "Ropa y accesorios",
    items: ["Pecheras y arneses", "Collares y traíllas", "Ropa por tallas", "Accesorios decorativos"],
    image: "/images/productos/accesorios.jpg",
    alt: "Perro pastor australiano con pechera fucsia en el campo",
  },
  {
    title: "Transporte",
    items: ["Maletas", "Mochilas tipo cápsula", "Guacales", "Coches"],
    image: "/images/productos/transporte.jpg",
    alt: "Gato asomándose a una maleta de transporte azul",
  },
  {
    title: "Hábitat",
    items: ["Corrales plegables", "Jaulas", "Ruedas y accesorios para hámster"],
    image: "/images/productos/habitat.jpg",
    alt: "Corral octagonal plegable para mascotas",
  },
] as const;

export const clientes = [
  {
    title: "Veterinarias",
    text: "Complementa la consulta con accesorios y productos de aseo.",
    image: "/images/veterinaria.jpg",
    alt: "Veterinaria revisando a un perro maltés en consulta",
  },
  {
    title: "Pet shops",
    text: "Surte tu vitrina con referencias que rotan y novedades cada mes.",
    image: "/images/pet-shop.jpg",
    alt: "Pet shop con vitrina de accesorios, juguetes y productos para mascotas",
  },
  {
    title: "Emprendedores",
    text: "¿Vas a abrir tu local de mascotas? Te ayudamos a armar el primer pedido.",
    image: "/images/gato-saludo.jpg",
    alt: "Gatito levantando la pata como saludando",
  },
];

export const pasos = [
  { title: "Escríbenos por WhatsApp", text: "Cuéntanos qué tipo de negocio tienes y en qué ciudad estás." },
  { title: "Recibe el catálogo mayorista", text: "Te enviamos referencias, fotos y precios para revendedores." },
  { title: "Arma tu pedido", text: `Elige lo que necesitas. Pedido mínimo: ${PEDIDO_MINIMO_BOGOTA} en Bogotá y ${PEDIDO_MINIMO_NACIONAL} para el resto del país.` },
  { title: "Lo despachamos a tu ciudad", text: "Empacamos en Bogotá y enviamos por transportadora a todo el país." },
];

export const razones = [
  { title: "Importamos directo", text: "Sin intermediarios en la cadena. Eso se nota en el precio que te llega." },
  { title: "Surtido que se mueve", text: "Más de 400 referencias y producto nuevo constantemente para que tu vitrina no se quede quieta." },
  { title: "Te asesoramos", text: "Te decimos qué se está vendiendo y qué conviene para tu tipo de negocio." },
  { title: "Envíos a todo el país", text: "Desde Bogotá a cualquier ciudad o municipio con transportadora." },
];

// PROVISIONALES: testimonios de ejemplo para el diseño. Reemplazar por testimonios reales
// (con permiso del cliente) antes de lanzar la página oficialmente.
export const testimonios = [
  {
    quote: "Hago pedido cada quince días. Los peluches y las pelotas se me van rapidísimo y siempre llega algo nuevo para mostrar en la vitrina.",
    name: "Diana Restrepo",
    business: "Pet shop · Medellín",
  },
  {
    quote: "Me responden rápido por WhatsApp y el pedido llega completo y bien empacado. Para la veterinaria los cepillos y los collares isabelinos son lo que más rota.",
    name: "Andrés Mejía",
    business: "Clínica veterinaria · Cali",
  },
  {
    quote: "Abrí mi tienda con el primer pedido y me ayudaron a escoger qué llevar según mi zona. Hoy compro areneros, comederos y maletas con ellos.",
    name: "Luisa Fernanda Ortiz",
    business: "Tienda de mascotas · Bucaramanga",
  },
];

export const faqs = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: `En Bogotá el pedido mínimo es de ${PEDIDO_MINIMO_BOGOTA}. Para envíos fuera de Bogotá es de ${PEDIDO_MINIMO_NACIONAL}. Puedes combinar referencias de todas las categorías.`,
  },
  {
    q: "¿Venden al detal?",
    a: "Nuestra atención está pensada para negocios: pet shops, veterinarias y locales de mascotas. Escríbenos y te contamos cómo comprar.",
  },
  {
    q: "¿Hacen envíos fuera de Bogotá?",
    a: "Sí. Despachamos a todo Colombia por transportadora. Te confirmamos el costo y el tiempo según tu ciudad.",
  },
  {
    q: "¿Cómo recibo el catálogo y los precios?",
    a: "Escríbenos por WhatsApp y te lo enviamos con los precios mayoristas actualizados.",
  },
  {
    q: "¿Puedo visitar la bodega?",
    a: "Sí, estamos en Bogotá. Escríbenos antes para confirmarte el horario de atención.",
  },
];
