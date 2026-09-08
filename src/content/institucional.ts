import type { Imagen, Principio } from '../types/content'

/** Imagen que abre la página Quiénes somos, como piden los requisitos. */
export const imagenApertura: Imagen = {
  src: '/img/paginas/quienes-somos.jpg',
  alt: 'Una mujer habla con micrófono y un kultrún ante un grupo sentado bajo un toldo, en una actividad al aire libre',
}

/**
 * Textos institucionales.
 *
 * Rescatados de https://fundacionllaftun.cl/quienes-somos/ (sitio WordPress).
 * Se transcriben tal cual, corrigiendo solo erratas evidentes de puntuación.
 */

export const bienvenida = [
  'El Buen Vivir, desde la concepción de diferentes pueblos originarios, es concebido como una relación permanente con la naturaleza, en armonía y equilibrio con la Madre Tierra.',
  'En la cosmovisión mapuche, Kvme Mongen (buen vivir) contempla nueve procesos necesarios para formar al kimce (sabio o sabia), según lo expuesto por la Dra. Elisa Loncon en su esquema Flor del Conocimiento Mapuche: comunidad; creer en la biodiversidad; la tierra es sagrada; observar y experimentar; acomodar la vida; darse cuenta; ser sabio; palabra; sueño.',
  'Los principios están basados en la visión de la fundadora Ivonne Salazar, quien fundó la organización en el año 2018. Desde esta comprensión, planteamos cuatro principios como posible vía de integración del Ser hacia el Buen Vivir.',
]

export const principios: Principio[] = [
  {
    id: 'autoconocimiento',
    nombre: 'Autoconocimiento',
    descripcion:
      'Comprendido como la decisión constante de aprender de nosotros mismos, de los vínculos y del territorio que habitamos.',
  },
  {
    id: 'amor',
    nombre: 'Amor',
    descripcion:
      'Como una decisión de atrevernos a vernos en otros, de elegir habitarnos, aceptarnos y ser uno mismo, para luego, por consecuencia natural, extenderlo a todo lo que nos rodea.',
  },
  {
    id: 'autonomia',
    nombre: 'Autonomía',
    descripcion:
      'Decisión de aprender a utilizar nuestro verdadero poder en el Ser y en el Hacer, donde somos actores de nuestra propia historia, tomando responsabilidad externa e interna, desde el pensamiento-palabra-acto hasta las circunstancias existentes en nuestra vida.',
  },
  {
    id: 'libertad',
    nombre: 'Libertad',
    descripcion:
      'Comprendida como la decisión de aprender a trascender los condicionamientos que impiden nuestra integración, los cuales se manifiestan como patrones dañinos, codependencias, apegos y boicot, entre otros, provenientes de nuestros dolores, traumas y heridas de infancia.',
  },
]

export const mision =
  'Entregar herramientas y estrategias para el mayor bienestar de todo grupo humano que se encuentre en situación de exclusión o vulnerabilidad, considerando factores biológicos, psicológicos y sociales, mediante experiencias que apunten a su desarrollo integral, con temáticas orientadas al arte, el medio ambiente, la salud, la economía social u otras que contribuyan a dichos fines.'

export const vision =
  'Que el desarrollo integral del ser humano sea prioritario en las sociedades, comunidades, organizaciones u otros grupos humanos, bajo principios universales de amor, autonomía, autoconocimiento y libertad, y que toda experiencia que contribuya a su mayor bienestar sea asequible en los diversos territorios de nuestro país.'
