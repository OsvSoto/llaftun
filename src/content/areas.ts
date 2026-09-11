import type { AreaDeAccion } from '../types/content'

/**
 * Áreas de acción.
 *
 * ATENCIÓN: los requisitos definen dos áreas (Educación Ambiental y Bienestar),
 * mientras que el sitio actual organiza el trabajo en cuatro "caminos"
 * (Medio Ambiente, Artes, Salud Natural y Economía Social). Está pendiente
 * confirmar con la fundación si el cambio es deliberado.
 *
 * PENDIENTE: no hay ningún texto del área Bienestar en el Drive.
 */

export const areas: AreaDeAccion[] = [
  {
    id: 'educacion-ambiental',
    nombre: 'Educación Ambiental',
    descripcion:
      'Acercamos a niñas, niños y jóvenes a la biodiversidad de su territorio mediante huertos escolares, salidas educativas al aire libre y material pedagógico inclusivo. Trabajamos con escuelas rurales y de educación especial de la comuna de Chimbarongo, con foco en el bosque esclerófilo y en las prácticas de cultivo sostenible.',
    imagen: {
      src: '/img/areas/educacion-ambiental.jpg',
      alt: 'Un grupo camina junto a una laguna rodeada de sauces, al pie de cerros cubiertos de bosque nativo',
    },
  },
  {
    id: 'bienestar',
    nombre: 'Bienestar',
    descripcion: '', // PENDIENTE: descripción. No hay material en el Drive.
    imagen: {
      src: '/img/areas/bienestar.jpg',
      alt: 'Un grupo de mujeres hace un ejercicio en parejas sobre el pasto, con las manos en los hombros de la compañera',
    },
  },
]
