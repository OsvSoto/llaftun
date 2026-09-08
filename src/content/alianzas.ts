import type { Alianza } from '../types/content'

/**
 * Alianzas de la fundación.
 *
 * Rescatado de https://fundacionllaftun.cl/elementor-482/ (sitio WordPress).
 * Se conserva la división original en dos lineamientos: actividades
 * colaborativas y convenios.
 */

export const introAlianzas =
  'Compartir con personas de organizaciones formales o informales cuyos principios son coherentes con nuestra visión representa una posibilidad de nutrición y crecimiento constante. Por eso uno de nuestros objetivos es generar instancias de apoyo, colaboración e intercambio, así como espacios para compartir experiencias, conocimientos y saberes.'

export const actividadesColaborativas: Alianza[] = [
  {
    id: 'aliwen-lawen',
    nombre: 'Aliwen Lawen, Espacio para el Buen Vivir',
    descripcion:
      'Nuestras primeras actividades se inician en este espacio, del cual tomamos la mayor parte de nuestros fundamentos. Aliwen Lawen es un proyecto iniciado el año 2015, creado por nuestra fundadora, Ivonne Salazar, y coordinado por Claudia Almuna. A la fecha ha realizado diversas actividades educativas en áreas artísticas, medioambientales y de salud, y ha ejecutado un gran número de iniciativas en nombre de nuestra fundación. Sus beneficiarios son personas en situación de exclusión o vulnerabilidad emocional.',
    enlace: 'https://aliwenlawen.org',
  },
  {
    id: 'centro-ecuestre-santa-zita',
    nombre: 'Centro Ecuestre Santa Zita',
    descripcion:
      'Desarrollamos iniciativas vinculadas a lo educativo y lo terapéutico, colaborando en la gestión de proyectos en torno a la hipoterapia, la doma racional y el empoderamiento con caballos, destinados a distintos grupos, principalmente personas en situación de exclusión o vulnerabilidad.',
  },
  {
    id: 'valle-del-arriero-bioaprende',
    nombre: 'Valle del Arriero y Bioaprende Salidas Educativas',
    descripcion:
      'Trabajamos en un proyecto colaborativo que nos permite realizar actividades de educación y meditación en la naturaleza, en favor de la prevención en salud mental, dirigidas a distintos grupos, principalmente personas en situación de vulnerabilidad emocional.',
  },
]

export const convenios: Alianza[] = [
  {
    id: 'municipalidad-de-chimbarongo',
    nombre: 'I. Municipalidad de Chimbarongo',
    descripcion:
      'Este convenio nos permite contar con la movilización requerida para transportar a jóvenes en situación de discapacidad a sus sesiones semanales de hipoterapia.',
    enlace: 'https://municipalidadchimbarongo.cl/',
  },
]
