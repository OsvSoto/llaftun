import type { MaterialEducativo, Video } from '../types/content'
import { cargarIndice } from './indice'

/**
 * Material educativo y videos.
 *
 * El listado de material se lee en tiempo de ejecución desde
 * /materiales/index.json. Ver public/materiales/LEEME.txt para las
 * instrucciones de cómo agregar un documento.
 */

export function cargarMateriales(signal?: AbortSignal) {
  return cargarIndice<MaterialEducativo>('/materiales/index.json', signal)
}

/**
 * Videos de la fundación.
 *
 * Rescatados del canal oficial de YouTube: https://www.youtube.com/@fundacionllaftun
 * (id de canal UCGfj_8P_y9zvoCZzNHiHIdQ). Se obtuvieron del feed RSS público
 * del canal (`/feeds/videos.xml?channel_id=...`), que entrega título,
 * descripción y fecha de publicación reales sin depender de scraping de la
 * página, que YouTube sirve incompleta sin ejecutar JavaScript.
 *
 * Tres de los cuatro corresponden a proyectos que ya están en
 * src/content/proyectos.ts (mismo tema, coincide el nombre). El cuarto,
 * "Experiencia Neurodiversa", no tiene proyecto asociado en el sitio: es el
 * registro de una práctica profesional de arteterapia.
 */
export const videos: Video[] = [
  {
    id: 'tesoro-del-bosque-esclerofilo',
    titulo:
      'El Tesoro del Bosque Esclerófilo: Educación Ambiental para Escuelas Rurales',
    urlEmbed: 'https://www.youtube.com/embed/00I9WpaUtmo',
  },
  {
    id: 'descubriendo-el-bosque-esclerofilo',
    titulo: 'Descubriendo el bosque esclerófilo',
    descripcion:
      'Jornada de educación ambiental basada en experiencias de aprendizaje interdisciplinario, realizada en el bosque nativo del Valle del Arriero, en Chimbarongo.',
    urlEmbed: 'https://www.youtube.com/embed/JF_TFcWy-Y0',
  },
  {
    id: 'hipoterapia-contencion-y-expresion-emocional',
    titulo: 'Proyecto Hipoterapia, Contención y Expresión Emocional',
    descripcion:
      'Registro audiovisual del proyecto de hipoterapia para jóvenes en situación de discapacidad intelectual de la localidad de Chimbarongo.',
    urlEmbed: 'https://www.youtube.com/embed/LmY8KXL46tE',
  },
  {
    id: 'experiencia-neurodiversa',
    titulo: 'Experiencia Neurodiversa',
    descripcion:
      'Registro audiovisual de la práctica profesional de Magíster en Arteterapia en la Salud.',
    urlEmbed: 'https://www.youtube.com/embed/Gz8PHzqNsS8',
  },
]
