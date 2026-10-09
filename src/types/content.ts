/**
 * Tipos del contenido del sitio.
 *
 * Todo el contenido institucional vive en `src/content/` como datos tipados.
 * No hay CMS ni base de datos: para cambiar un texto se edita el archivo
 * correspondiente y se vuelve a compilar.
 *
 * La única excepción es el material educativo, que se lee en tiempo de
 * ejecución desde `/materiales/index.json` para que la fundación pueda
 * agregar documentos sin recompilar. Ver `src/content/materiales.ts`.
 */

/** Imagen del sitio. `src` es una ruta desde la raíz pública, p.ej. "/img/huerto.jpg". */
export interface Imagen {
  src: string
  /** Texto alternativo. Obligatorio: describe la imagen para lectores de pantalla. */
  alt: string
  /** Crédito o autoría, si corresponde. */
  credito?: string
  /**
   * Qué parte de la foto conservar cuando un marco la recorta (portada,
   * tarjetas). Es un valor de `object-position` de CSS, p.ej. "center 30%"
   * para proteger rostros que quedan en el tercio superior. Por defecto, el
   * centro.
   */
  encuadre?: string
}

/** Foto de la portada a pantalla completa. */
export interface FotoPortada {
  /** Versión de 1280px: celulares, y la misma que usa la galería del proyecto. */
  imagen: Imagen
  /** Versión de 2400px de la misma foto, para pantallas anchas. */
  srcGrande: string
  /** Slug del proyecto al que lleva el rótulo de la foto. */
  proyecto: string
}

/** Foto de la cabecera de una página interior (ver components/Pagina). */
export interface FotoCabecera {
  imagen: Imagen
  /** Versión de 2400px de la misma foto, si existe, para pantallas anchas. */
  srcGrande?: string
  /**
   * Para fotos sin resolución suficiente para cubrir todo el ancho: se
   * muestran difuminadas, como un fondo de color y no como fotografía.
   */
  difuminada?: boolean
}

/** Persona del directorio o del equipo. */
export interface MiembroEquipo {
  /** Identificador estable en kebab-case, p.ej. "claudia-almuna". */
  id: string
  nombre: string
  /** Cargo en el directorio, p.ej. "Presidenta". */
  cargo: string
  /** Descripción breve, uno o dos párrafos como máximo. */
  descripcion: string
  foto?: Imagen
}

/** Área de acción de la fundación (Educación Ambiental, Bienestar). */
export interface AreaDeAccion {
  id: string
  nombre: string
  descripcion: string
  imagen?: Imagen
}

/** Proyecto ejecutado o patrocinado por la fundación. */
export interface Proyecto {
  /** Se usa en la URL: /proyectos/:slug */
  slug: string
  titulo: string
  /** Una o dos frases. Es lo que se muestra en la tarjeta del inicio. */
  resumen: string
  /** Cuerpo completo, un elemento por párrafo. Se muestra en la página de detalle. */
  cuerpo: string[]
  /** Id del área de acción a la que pertenece. */
  area: string
  /** Año o rango de años, p.ej. "2025" o "2023-2024". */
  periodo?: string
  /** Fuente de financiamiento, p.ej. "Fondo de Protección Ambiental 2025". */
  financiamiento?: string
  /** Quién coordina o ejecuta. */
  coordinacion?: string
  imagenPrincipal?: Imagen
  galeria?: Imagen[]
  video?: Video
  /** Si es true, aparece en la grilla de proyectos destacados del inicio. */
  destacado: boolean
}

/** Documento descargable del material educativo. */
export interface MaterialEducativo {
  id: string
  titulo: string
  descripcion: string
  /** Ruta al archivo servido estáticamente, p.ej. "/materiales/mis-amigos-nativos.pdf". */
  archivo: string
  /** Peso legible, p.ej. "2,3 MB". Se muestra junto al enlace de descarga. */
  peso?: string
  portada?: Imagen
}

/**
 * Documento de transparencia: balances, memorias, estados de resultados y
 * convenios con los organismos que financian los proyectos.
 */
export interface DocumentoTransparencia {
  id: string
  titulo: string
  /** Agrupa los documentos en la página, p.ej. "Balances" o "Convenios". */
  categoria: string
  /** Ruta al archivo servido estáticamente, p.ej. "/documentos/balance-2023.pdf". */
  archivo: string
  /** Año o periodo que cubre el documento, p.ej. "2023" o "2023-2024". */
  periodo?: string
  peso?: string
  /**
   * El documento está anunciado pero su PDF todavía no se sube. Se muestra en
   * la lista, sin enlace: así la fundación ve qué le falta y el visitante no
   * se topa con una descarga rota.
   */
  pendiente?: boolean
}

/** Video de la fundación, alojado en YouTube o Vimeo (nunca en el hosting propio). */
export interface Video {
  id: string
  titulo: string
  descripcion?: string
  /** URL del embed, p.ej. "https://www.youtube.com/embed/XXXX". */
  urlEmbed: string
}

/** Principio institucional. */
export interface Principio {
  id: string
  nombre: string
  descripcion: string
}

/** Línea de servicio de la fundación (creación de proyectos, patrocinios, etc.). */
export interface LineaDeServicio {
  id: string
  nombre: string
  descripcion: string
  /** Duración típica, cuando la línea la define. */
  duracion?: string
  /** Medios de financiamiento declarados para esa línea. */
  financiamiento?: string
}

/** Organización o institución aliada. */
export interface Alianza {
  id: string
  nombre: string
  descripcion: string
  /** Sitio web de la organización aliada, si tiene. */
  enlace?: string
}
