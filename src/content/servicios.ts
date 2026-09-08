import type { LineaDeServicio } from '../types/content'

/**
 * Líneas de servicio de la fundación.
 *
 * Rescatado de https://fundacionllaftun.cl/servicios/ (sitio WordPress).
 * Se conserva la estructura original de cuatro líneas numeradas.
 *
 * El listado de proyectos que en el sitio actual aparece debajo de estas
 * líneas no se repite aquí: vive en src/content/proyectos.ts.
 */

export const introServicios =
  'Nuestro equipo, junto a colaboradores u organizaciones en alianza, trabaja en cuatro líneas de acción, comprometidos siempre con brindar un servicio de calidad, respetando y promoviendo nuestros valores institucionales.'

export const lineasDeServicio: LineaDeServicio[] = [
  {
    id: 'creacion-de-proyectos',
    nombre: 'Creación de proyectos',
    descripcion:
      'Realizamos postulaciones a fondos concursables, de origen público o privado, con temáticas coherentes con nuestra visión y misión, potenciando nuevas ideas con la motivación de beneficiar cada vez a más personas.',
    duracion: 'Entre 2 y 24 meses',
    financiamiento:
      'Organismo externo, aportes propios, aportes de terceros y voluntariado',
  },
  {
    id: 'instancias-colaborativas',
    nombre: 'Instancias colaborativas',
    descripcion:
      'Un espacio para distintas iniciativas en formato de intervenciones, talleres, charlas, seminarios, encuentros o ferias, con objetivos definidos y coherentes con nuestra visión y misión.',
    duracion: 'Menos de 2 meses',
    financiamiento: 'Autogestión, voluntariado, donativos, auspicio y patrocinio',
  },
  {
    id: 'patrocinios',
    nombre: 'Patrocinios',
    descripcion:
      'Aportamos en aspectos puntuales, con insumos o voluntariado, a proyectos en ejecución o actividades específicas. Para ello es necesario presentar previamente la iniciativa y el requerimiento a nuestro equipo, que considera tres aspectos: la concordancia con nuestra visión y misión, el impacto en las comunidades y la necesidad real del aporte solicitado. Pueden solicitarlo tanto miembros del directorio, coordinadores y socios como personas naturales o jurídicas externas, siempre que la iniciativa sea sin fines de lucro y se destine en su totalidad a los beneficiarios.',
    financiamiento: 'Donaciones',
  },
  {
    id: 'practicas-profesionales',
    nombre: 'Prácticas profesionales',
    descripcion:
      'Contamos con un área de Gestión de Prácticas destinada a estudiantes de pregrado y postgrado de diferentes carreras, que pueden incorporarse a alguno de los proyectos ejecutados por la fundación o solicitar que su práctica sea gestionada externamente, para realizarla en otras organizaciones o instituciones.',
  },
]
