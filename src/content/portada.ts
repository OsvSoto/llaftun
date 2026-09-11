import type { FotoPortada } from '../types/content'

/**
 * Fotos de la portada a pantalla completa (PortadaInmersiva).
 *
 * Solo fotos de cámara con resolución suficiente para cubrir la pantalla: a
 * ese tamaño, las fotos de celular (1024px) se ven blandas. Hoy todas son de
 * El Tesoro del Bosque Esclerófilo (FPA 2024), las únicas en alta resolución.
 * Los originales de 6000px están en el Drive, carpeta FPA 2024; en el sitio
 * solo van las versiones web (1280px y 2400px).
 *
 * Además de calidad, cada foto necesita espacio libre a la izquierda, donde
 * va el titular. Por eso quedaron fuera la 4 (niño con los ojos vendados) y
 * la 5 (educadora mostrando una rama): son de las más lindas, pero en
 * pantallas anchas la cara de la educadora quedaba justo bajo el titular, y
 * recortarlas no sirve porque la foto ya ocupa todo el ancho. Siguen en la
 * galería del proyecto.
 *
 * `encuadre` importa sobre todo en celular, donde la pantalla vertical
 * recorta los costados de la foto.
 */
const carpeta = '/img/proyectos/tesoro-del-bosque-esclerofilo'
const proyecto = 'tesoro-del-bosque-esclerofilo'

export const fotosPortada: FotoPortada[] = [
  {
    imagen: {
      src: `${carpeta}/1.jpg`,
      alt: 'Niñas y niños con las manos embarradas, trabajando la tierra en una mesa de madera en el bosque',
      encuadre: '45% 40%',
    },
    srcGrande: `${carpeta}/1-2400.jpg`,
    proyecto,
  },
  {
    imagen: {
      src: `${carpeta}/6.jpg`,
      alt: 'Un niño y una educadora revisan una guía de insectos y hongos junto al tronco de un árbol',
      encuadre: '55% 45%',
    },
    srcGrande: `${carpeta}/6-2400.jpg`,
    proyecto,
  },
  {
    imagen: {
      src: `${carpeta}/2.jpg`,
      alt: 'Dos niños sostienen y recorren juntos una guía desplegable de especies del bosque',
      encuadre: '60% 35%',
    },
    srcGrande: `${carpeta}/2-2400.jpg`,
    proyecto,
  },
  {
    imagen: {
      src: `${carpeta}/3.jpg`,
      alt: 'Niñas y niños sentados en círculo dentro de un domo de madera, escuchando a dos educadoras',
      encuadre: '40% 50%',
    },
    srcGrande: `${carpeta}/3-2400.jpg`,
    proyecto,
  },
]
