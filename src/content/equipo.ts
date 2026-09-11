import type { MiembroEquipo } from '../types/content'

/**
 * Directorio y equipo de la fundación.
 *
 * Cargos rescatados de https://fundacionllaftun.cl/quienes-somos/equipo/
 * Descripciones tomadas del Drive de la fundación (carpeta EQUIPO DE TRABAJO).
 *
 * Las rutas de las fotos ya están declaradas, aunque los archivos todavía no
 * estén todos. Basta con dejar el archivo en `public/img/equipo/` con el
 * nombre indicado y aparece solo: mientras no exista, se muestra el marcador
 * de imagen faltante.
 *
 * PENDIENTE: faltan las descripciones de David Uribe y Rodrigo Palacios. Las
 * personas sin descripción se dejan igual en el arreglo para que el vacío sea
 * visible en la página y no se olvide.
 */

export const equipo: MiembroEquipo[] = [
  {
    id: 'claudia-almuna',
    nombre: 'Claudia Almuna Herrera',
    cargo: 'Presidenta',
    descripcion:
      'Madre de tres hijos, ingeniera de alimentos, licenciada en Educación, educadora ambiental y docente. Amante de la naturaleza y de las actividades al aire libre, dedicada al cuidado y la conservación de la biodiversidad de su territorio.',
    foto: {
      src: '/img/equipo/claudia-almuna.jpg',
      alt: 'Retrato de Claudia Almuna Herrera',
    },
  },
  {
    id: 'david-uribe',
    nombre: 'David Uribe Farfán',
    cargo: 'Director Ejecutivo',
    descripcion: '', // PENDIENTE: descripción breve
    foto: {
      src: '/img/equipo/david-uribe.jpg',
      alt: 'Retrato de David Uribe Farfán',
    },
  },
  {
    id: 'rodrigo-palacios',
    nombre: 'Rodrigo Palacios Noguera',
    cargo: 'Secretario y Director de Medio Ambiente',
    descripcion: '', // PENDIENTE: descripción breve
    foto: {
      src: '/img/equipo/rodrigo-palacios.jpg',
      alt: 'Retrato de Rodrigo Palacios Noguera',
    },
  },
  {
    id: 'pilar-leiva',
    nombre: 'Pilar Javiera Leiva Cáceres',
    cargo: 'Tesorera',
    descripcion:
      'De Peor es Nada, Chimbarongo. Mujer y madre. Fonoaudióloga, educadora ambiental y mediadora de cultura, literatura, arte y patrimonio. Activista en espacios comunitarios. Es parte de Fundación Llaftun desde 2023, donde asume el rol de tesorera, gestora y coordinadora de proyectos.',
    foto: {
      src: '/img/equipo/pilar-leiva.jpg',
      alt: 'Retrato de Pilar Javiera Leiva Cáceres',
    },
  },
]
