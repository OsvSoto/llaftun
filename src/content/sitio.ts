/**
 * Datos globales del sitio: identidad, contacto y redes.
 *
 * Las marcas PENDIENTE señalan contenido que la fundación todavía no entrega.
 * Buscar "PENDIENTE" en src/content/ para ver todo lo que falta.
 */

export const sitio = {
  nombre: 'Fundación Llaftun',
  bajada: 'Organización para la Transformación Social',

  /**
   * PENDIENTE: la frase representativa de la página de inicio.
   * Mientras no la entreguen se usa la bajada histórica del sitio actual.
   */
  fraseRepresentativa:
    'Entregamos herramientas para el bienestar de quienes más lo necesitan.',

  contacto: {
    correoGeneral: 'contacto@fundacionllaftun.cl', // PENDIENTE: confirmar que existe
    correoDonaciones: 'donaciones@fundacionllaftun.cl',
    comuna: 'Chimbarongo, Región de O’Higgins',
    // Rescatada del sitio actual (portada, Quiénes somos y Contacto): no
    // estaba en ningún archivo de contenido de este sitio todavía. Sin
    // número (SN = "sin número"), tal como la publica la fundación.
    direccion: 'Santa Isabel SN',
  },

  redes: {
    instagram: 'https://www.instagram.com/fundacionllaftun.cl/',
    youtube: 'https://www.youtube.com/@fundacionllaftun',
  },
} as const
