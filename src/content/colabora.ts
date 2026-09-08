/**
 * Formas de colaborar con la fundación.
 *
 * Rescatado de https://fundacionllaftun.cl/contacto/ (sitio WordPress).
 *
 * Los datos bancarios y el botón de Flow se transcriben tal cual: son el canal
 * por el que entran los aportes, así que cualquier error aquí tiene
 * consecuencias reales. Conviene que la fundación los revise antes de publicar.
 */

export const introColabora =
  'Hemos abierto tres modalidades de colaboración para quienes se interesan en nuestros proyectos y quieren apoyarnos.'

export const cuentaBancaria = {
  banco: 'Banco Estado',
  tipoCuenta: 'Chequera electrónica',
  numero: '42370318730',
  rut: '65.129.122-8',
  correo: 'donaciones@fundacionllaftun.cl',
  glosa: 'Donación a Fundación Llaftun',
} as const

/** Botón de pago de Flow, plataforma de pago en línea. Enlace externo. */
export const botonFlow = 'https://www.flow.cl/btn.php?token=6b1kxpz'

/**
 * Formularios de inscripción de Google.
 *
 * PENDIENTE: los enlaces del sitio actual apuntan a la URL de EDICIÓN de cada
 * formulario (terminada en /edit), no a la de respuesta (/viewform). Quien
 * entra desde el sitio ve un aviso de permiso denegado y no puede inscribirse.
 *
 * No se enlazan hasta tener las URL correctas: publicar un enlace roto es peor
 * que no publicar ninguno, porque quien lo intenta se va con la impresión de
 * que la fundación no funciona.
 */
export const formularios: {
  socioDonante: string | null
  voluntariado: string | null
} = {
  socioDonante: null,
  voluntariado: null,
}
