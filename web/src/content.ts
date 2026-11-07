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

export const PEDIDO_MINIMO = "$300.000";

// POR CONFIRMAR: dirección exacta y horario de atención en Bogotá.
export const DIRECCION = "Bogotá, Colombia";
export const HORARIO = "Lunes a sábado · horario por confirmar";

export const stats = [
  { value: "+400", label: "referencias para tu negocio" },
  { value: "Nacional", label: "envíos a toda Colombia" },
  { value: PEDIDO_MINIMO, label: "pedido mínimo" },
  { value: "Bogotá", label: "bodega y despachos" },
];

// POR CONFIRMAR con el catálogo: nombres de las líneas de producto.
export const categorias = [
  { icon: "Bone", title: "Juguetes", text: "Peluches, mordederas, pelotas y cuerdas que se venden solos en el mostrador." },
  { icon: "Cat", title: "Arena para gatos", text: "Aglomerante y con aroma. Una de las referencias que más rota." },
  { icon: "Utensils", title: "Comederos y bebederos", text: "Platos, dispensadores y fuentes en varios tamaños y colores." },
  { icon: "BedDouble", title: "Camas y descanso", text: "Camas, cojines y cobijas para perros y gatos." },
  { icon: "Link2", title: "Collares, traíllas y arneses", text: "Para paseo diario, entrenamiento y tallas grandes." },
  { icon: "Scissors", title: "Aseo y peluquería", text: "Cepillos, cortaúñas, bolsas y palas para el día a día." },
  { icon: "Shirt", title: "Ropa y accesorios", text: "Prendas y detalles que suben el ticket de cada venta." },
  { icon: "Rabbit", title: "Pequeñas especies", text: "Accesorios para hámsters, conejos y otras mascotas pequeñas." },
] as const;

export const clientes = [
  {
    title: "Pet shops",
    text: "Surte tu vitrina con referencias que rotan y novedades cada mes.",
    image: "/images/pug.jpg",
    alt: "Pug negro con suéter sobre fondo amarillo",
  },
  {
    title: "Veterinarias",
    text: "Complementa la consulta con accesorios y productos de aseo.",
    image: "/images/perro-rosa.jpg",
    alt: "Perro jack russell mirando a la cámara",
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
  { title: "Arma tu pedido", text: `Elige lo que necesitas. El pedido mínimo es de ${PEDIDO_MINIMO}.` },
  { title: "Lo despachamos a tu ciudad", text: "Empacamos en Bogotá y enviamos por transportadora a todo el país." },
];

export const razones = [
  { title: "Importamos directo", text: "Sin intermediarios en la cadena. Eso se nota en el precio que te llega." },
  { title: "Surtido que se mueve", text: "Más de 400 referencias y producto nuevo constantemente para que tu vitrina no se quede quieta." },
  { title: "Te asesoramos", text: "Te decimos qué se está vendiendo y qué conviene para tu tipo de negocio." },
  { title: "Envíos a todo el país", text: "Desde Bogotá a cualquier ciudad o municipio con transportadora." },
];

// Placeholders: reemplazar por testimonios reales de clientes.
export const testimonios = [
  {
    quote: "Pido cada mes. Los juguetes se me van rapidísimo y siempre hay algo nuevo para mostrar.",
    name: "Cliente de ejemplo",
    business: "Pet shop · Medellín",
  },
  {
    quote: "Me gusta que me respondan rápido por WhatsApp y que el pedido llegue completo.",
    name: "Cliente de ejemplo",
    business: "Veterinaria · Cali",
  },
  {
    quote: "Arranqué mi local con el primer pedido y me ayudaron a escoger qué llevar.",
    name: "Cliente de ejemplo",
    business: "Tienda de mascotas · Bucaramanga",
  },
];

export const faqs = [
  {
    q: "¿Cuál es el pedido mínimo?",
    a: `El pedido mínimo es de ${PEDIDO_MINIMO}. Puedes combinar referencias de todas las categorías.`,
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
