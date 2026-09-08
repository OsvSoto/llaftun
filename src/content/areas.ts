import type { AreaDeAccion } from '../types/content'

/**
 * Áreas de acción.
 *
 * ATENCIÓN: los requisitos definen dos áreas (Educación Ambiental y Bienestar),
 * mientras que el sitio actual organiza el trabajo en cuatro "caminos"
 * (Medio Ambiente, Artes, Salud Natural y Economía Social). Está pendiente
 * confirmar con la fundación si el cambio es deliberado.
 *
 * PENDIENTE: no hay ningún texto ni imagen del área Bienestar en el Drive.
 */

export const areas: AreaDeAccion[] = [
  {
    id: 'educacion-ambiental',
    nombre: 'Educación Ambiental',
    descripcion:
      'Acercamos a niñas, niños y jóvenes a la biodiversidad de su territorio mediante huertos escolares, salidas educativas al aire libre y material pedagógico inclusivo. Trabajamos con escuelas rurales y de educación especial de la comuna de Chimbarongo, con foco en el bosque esclerófilo y en las prácticas de cultivo sostenible.',
      imagen: {
      src: '/img/areas/educacion-ambiental.jpg',
      alt: 'a',
    },
  },
  {
    id: 'bienestar',
    nombre: 'Bienestar',
    descripcion: '', // PENDIENTE: descripción e imagen. No hay material en el Drive.
  },
]
