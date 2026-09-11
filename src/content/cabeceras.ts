import type { FotoCabecera } from '../types/content'
import { imagenApertura as aperturaQuienesSomos } from './institucional'
import { imagenApertura as aperturaMaterial } from './materiales'

/**
 * Fotos de las cabeceras de las páginas interiores (ver components/Pagina).
 *
 * Mismo criterio que la portada: como fotografía nítida, solo fotos con
 * resolución para cubrir la pantalla (las de cámara de El Tesoro del Bosque
 * Esclerófilo, y la de Material educativo, de 1920px). Cada página usa una
 * distinta, y ninguna repite una foto que ya aparezca más abajo en la misma
 * página.
 *
 * Quiénes somos solo tiene una foto de 720px: va `difuminada`, como fondo de
 * color, y la foto nítida sigue dentro de la página. Transparencia y la
 * página de error van sin foto, solo con el verde de la copa.
 *
 * El encuadre está pensado para una franja ancha y baja (en escritorio se
 * ve la mitad central de la foto en alto) y para el celular, que recorta
 * los costados.
 */
const tesoro = '/img/proyectos/tesoro-del-bosque-esclerofilo'

export const cabeceras = {
  quienesSomos: { imagen: aperturaQuienesSomos, difuminada: true },
  areasDeAccion: {
    imagen: {
      src: `${tesoro}/2.jpg`,
      alt: 'Dos niños sostienen y recorren juntos una guía desplegable de especies del bosque',
      encuadre: '60% 40%',
    },
    srcGrande: `${tesoro}/2-2400.jpg`,
  },
  proyectos: {
    imagen: {
      src: `${tesoro}/5.jpg`,
      alt: 'Una educadora muestra una rama con hojas y flores del bosque a un grupo de niñas y niños',
      encuadre: '50% 30%',
    },
    srcGrande: `${tesoro}/5-2400.jpg`,
  },
  materialEducativo: { imagen: { ...aperturaMaterial, encuadre: '50% 45%' } },
  servicios: {
    imagen: {
      src: `${tesoro}/3.jpg`,
      alt: 'Niñas y niños sentados en círculo dentro de un domo de madera, escuchando a dos educadoras',
      encuadre: '45% 55%',
    },
    srcGrande: `${tesoro}/3-2400.jpg`,
  },
  alianzas: {
    imagen: {
      src: `${tesoro}/6.jpg`,
      alt: 'Un niño y una educadora revisan una guía de insectos y hongos junto al tronco de un árbol',
      encuadre: '55% 45%',
    },
    srcGrande: `${tesoro}/6-2400.jpg`,
  },
  colabora: {
    imagen: {
      src: `${tesoro}/4.jpg`,
      alt: 'Una educadora sonríe mientras acerca una hoja a un niño con los ojos vendados',
      encuadre: '50% 38%',
    },
    srcGrande: `${tesoro}/4-2400.jpg`,
  },
} satisfies Record<string, FotoCabecera>
