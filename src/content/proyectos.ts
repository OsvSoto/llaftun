import type { Proyecto } from '../types/content'

/**
 * Proyectos de la fundación.
 *
 * Rescatados de la página "Servicios" del sitio WordPress, de la portada, y
 * del resumen del proyecto FPA 2025 que está en el Drive. Son 21 en total:
 * el sitio actual los tenía todos apilados debajo de las líneas de servicio,
 * donde nadie los encontraba.
 *
 * `destacado: true` los pone en el carrusel y en la portada. El resto vive en
 * la página /proyectos.
 *
 * PENDIENTE: confirmar con la fundación cuáles son los destacados, y
 * conseguir una imagen para cada uno. Faltan también los años de varios
 * proyectos: los que no aparecen en el sitio actual se dejaron sin `periodo`
 * en vez de inventarlos.
 *
 * NOTA: buena parte de estos proyectos son de arteterapia, salud natural y
 * economía social, que no encajan en ninguna de las dos áreas de acción de
 * los requisitos. Se asignan a "bienestar" por ser lo más cercano, pero es
 * justamente la señal de que esa decisión hay que tomarla. Ver areas.ts.
 */

export const proyectos: Proyecto[] = [
  // ---------- Educación ambiental ----------
  {
    slug: 'biodiversidad-de-mi-territorio',
    titulo: 'Contacto con la biodiversidad de mi territorio',
    resumen:
      'Educación ambiental inclusiva en la Escuela Especial El Roble: un huerto escolar, salidas al bosque esclerófilo y un libro ilustrado con pictogramas.',
    cuerpo: [
      'El objetivo del proyecto fue conocer la biodiversidad local y las prácticas de cultivo sostenible a través del huerto escolar como espacio educativo para los niños, niñas y jóvenes de la Escuela Especial El Roble. Para esto se realizaron diversos talleres. El primero fue la construcción de camas de cultivo en el patio de la escuela: los menores las rellenaron con el material necesario (capas de palos, hojas y tierra), clasificaron semillas, sembraron, crearon almácigos, los plantaron y luego cosecharon. Vivieron todas las etapas de un huerto.',
      'Luego se profundizó en observar y conocer la biodiversidad del territorio, para sensibilizar sobre su conservación a través de salidas educativas al aire libre y de talleres presenciales realizados en la misma escuela. En los talleres se buscó que exploraran con sus sentidos la biodiversidad natural de la zona: conocieron y tocaron insectos, hojas, plantas, palos, flores, semillas y piedras. Se profundizó en sus formas de vida, en los ecosistemas en que se encuentran y en la importancia que tiene cada uno de estos elementos para las personas y para la vida en el planeta.',
      'Se realizaron además dos salidas educativas al aire libre en el Valle del Arriero, comuna de Chimbarongo, una con el grupo de niños más pequeños y otra con los alumnos mayores, en las que participaron también apoderados y docentes. El objetivo fue acercar a los estudiantes a la naturaleza y conocer el bosque esclerófilo del lugar. Lo recorrieron e identificaron sus árboles: quillay, peumo, litre, maitén y boldo. Tocaron y olieron sus hojas, y conocieron la flora y fauna presente a través de carteles explicativos. Se instaló señalética inclusiva en el lugar. Levantaron piedras, observaron con lupas los insectos que encontraban y trabajaron con arcilla representando algún elemento del lugar.',
      'Para finalizar el proyecto se creó un libro educativo inclusivo llamado "Mis amigos nativos", con un formato accesible y atractivo para todos los estudiantes. Incorpora pictogramas claros y coloridos que facilitan la comprensión, y está elaborado con materiales resistentes para garantizar su durabilidad. Incluye las siguientes especies: chinita, abejorro, caléndula, lavanda, malva rosa, zorzal, quillay, azulillo, loro tricahue, boldo, zorro culpeo, madre de la culebra, liquen y hongo oreja de palo. Quedaron varias copias en la escuela para que los docentes puedan incorporarlo en sus clases.',
    ],
    area: 'educacion-ambiental',
    periodo: '2025',
    financiamiento: 'Fondo de Protección Ambiental, Ministerio del Medio Ambiente',
    destacado: true,
  },
  {
    slug: 'tesoro-del-bosque-esclerofilo',
    titulo: 'El Tesoro del Bosque Esclerófilo',
    resumen:
      'Educación ambiental para escuelas rurales de Chimbarongo, con jornadas de descubrimiento del bosque nativo.',
    // PENDIENTE: falta el texto completo de este proyecto.
    cuerpo: [],
    area: 'educacion-ambiental',
    periodo: '2024',
    financiamiento: 'Fondo de Protección Ambiental, Ministerio del Medio Ambiente',
    imagenPrincipal: {
      src: '/img/proyectos/tesoro-del-bosque-esclerofilo/principal.jpg',
      alt: 'Estudiantes y docentes posando con plantas nativas en macetas, frente a un cerro cubierto de bosque esclerófilo',
    },
    galeria: [
      {
        src: '/img/proyectos/tesoro-del-bosque-esclerofilo/1.jpg',
        alt: 'Actividad del proyecto en el bosque nativo',
      },
    ],
    destacado: true,
  },
  {
    slug: 'descubriendo-el-bosque-esclerofilo',
    titulo: 'Jornada de Educación Ambiental “Descubriendo el Bosque Esclerófilo”',
    resumen:
      'Jornada de reconocimiento del bosque nativo de la zona central, abierta a la comunidad escolar.',
    // PENDIENTE: falta el texto completo.
    cuerpo: [],
    area: 'educacion-ambiental',
    imagenPrincipal: {
      src: '/img/proyectos/descubriendo-el-bosque-esclerofilo/principal.jpg',
      alt: 'Un grupo de niñas y niños escucha a un monitor durante una jornada al aire libre en el bosque esclerófilo',
    },
    galeria: [
      {
        src: '/img/proyectos/descubriendo-el-bosque-esclerofilo/1.jpg',
        alt: 'Recorrido por el bosque durante la jornada',
      },
      {
        src: '/img/proyectos/descubriendo-el-bosque-esclerofilo/2.jpg',
        alt: 'Observación de la flora del bosque esclerófilo',
      },
      {
        src: '/img/proyectos/descubriendo-el-bosque-esclerofilo/3.jpg',
        alt: 'Participantes de la jornada de educación ambiental',
      },
    ],
    destacado: false,
  },
  {
    slug: 'bosque-escuela',
    titulo: 'Bosque Escuela, educación libre',
    resumen:
      'Talleres semanales al aire libre para niñas y niños de 6 a 12 años, con actividades personalizadas.',
    cuerpo: [
      'Dirigido a niñas y niños de 6 a 12 años, con actividades personalizadas que incorporan talleres semanales de biodiversidad, naturaleza y vida de aves rapaces, cosmovisión mapuche, expresión artística y reutilización, entre otros.',
    ],
    area: 'educacion-ambiental',
    coordinacion: 'Aliwen Lawen, Espacio para el Buen Vivir',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/bosque-escuela/principal.jpg',
      alt: 'Niñas y niños en una actividad al aire libre del Bosque Escuela',
    },
    destacado: false,
  },
  {
    slug: 'reforestacion-con-arboles-nativos',
    titulo: 'Reforestación con árboles nativos',
    resumen:
      'Entrega de árboles nativos a escuelas y espacios comunitarios de la comuna.',
    cuerpo: [
      'Entrega de árboles nativos para el cerro del sector El Paraíso, la Escuela Especial Ayudando a Crecer, la Escuela Santa Isabel y el Valle del Arriero.',
    ],
    area: 'educacion-ambiental',
    coordinacion: 'Aliwen Lawen, Espacio para el Buen Vivir',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/reforestacion-con-arboles-nativos/principal.jpg',
      alt: 'Entrega de árboles nativos para reforestación',
    },
    destacado: false,
  },
  {
    slug: 'centro-de-arte-y-naturaleza-aliwen-lawen',
    titulo: 'Centro de Arte y Naturaleza Aliwen Lawen',
    resumen:
      'Centro dedicado a jornadas ecológicas, formación y asesorías para familias, grupos y organizaciones comunitarias.',
    cuerpo: [
      'Centro patrocinado por Fundación Llaftun, dedicado a jornadas ecológicas, formación y asesorías diseñadas para familias, grupos y organizaciones comunitarias.',
    ],
    area: 'educacion-ambiental',
    coordinacion: 'Aliwen Lawen, Espacio para el Buen Vivir',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/centro-de-arte-y-naturaleza-aliwen-lawen/principal.jpg',
      alt: 'Jornada ecológica en el Centro de Arte y Naturaleza Aliwen Lawen',
    },
    destacado: false,
  },
  {
    slug: 'mandala-arte-salud-y-autosustentabilidad',
    titulo: 'Mandala: jornadas de arte, salud y autosustentabilidad',
    resumen:
      'Actividades de arte, salud natural y medio ambiente en la Escuela Rural Santa Isabel de Chimbarongo.',
    cuerpo: [
      'Se desarrollaron diversas actividades de arte, salud natural y medio ambiente en la Escuela Rural G-503 Santa Isabel, en Chimbarongo, con el apoyo del DAEM de la comuna y con antelación a nuestra formalización como fundación.',
      'El objetivo central del proyecto fue propiciar instancias inclusivas y comunitarias de aprendizaje, a través de actividades prácticas enfocadas en experiencias significativas para grupos heterogéneos de apoderados, docentes y alumnos.',
    ],
    area: 'educacion-ambiental',
    coordinacion: 'Aliwen Lawen, Espacio para el Buen Vivir',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/mandala-arte-salud-y-autosustentabilidad/principal.jpg',
      alt: 'Actividad de arte y salud natural en la Escuela Rural Santa Isabel',
    },
    destacado: false,
  },
  {
    slug: 'huertos-medicinales-en-salud-mental',
    titulo: 'Implementación de huertos medicinales en salud mental',
    resumen:
      'Capacitación en plantas medicinales, huerto medicinal, fitopreparados y sonoterapia para equipos de salud mental.',
    cuerpo: [
      'Curso de capacitación en plantas medicinales, huerto medicinal y fitopreparados, junto a sesiones de sonoterapia, realizado en el CTA Amanecer, la Residencia de Psiquiatría y Psiquiatría Infantil, con la Oficina de la Mujer de la I. Municipalidad de San Fernando.',
    ],
    area: 'educacion-ambiental',
    periodo: '2019',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/huertos-medicinales-en-salud-mental/principal.jpg',
      alt: 'Huerto medicinal implementado en un centro de salud mental',
    },
    destacado: false,
  },
  {
    slug: 'plantas-medicinales-y-diseno-de-huerto',
    titulo: 'Plantas medicinales y diseño de huerto',
    resumen:
      'Capacitación para el equipo de terapeutas de Psiquiatría Infantil del Hospital de San Fernando.',
    cuerpo: [
      'Capacitación dirigida al equipo de terapeutas de Psiquiatría Infantil, SENAME y Salud Mental del Hospital de San Fernando.',
    ],
    area: 'educacion-ambiental',
    periodo: '2019',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/plantas-medicinales-y-diseno-de-huerto/principal.jpg',
      alt: 'Taller de plantas medicinales y diseño de huerto',
    },
    destacado: false,
  },
  {
    slug: 'talleres-de-formacion-autogestionados',
    titulo: 'Talleres de formación autogestionados',
    resumen:
      'Cosmética natural, bosques comestibles, plantas medicinales, aeroyoga y gemoterapia, entre otros.',
    cuerpo: [
      'Talleres de cosmética natural; diseño de bosques comestibles; bosques y malezas comestibles; confección de orgones; aeroyoga; gemoterapia; numerología terapéutica; mandalas como concepto; y plantas medicinales y fitopreparados.',
    ],
    area: 'educacion-ambiental',
    coordinacion: 'Aliwen Lawen, Espacio para el Buen Vivir',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/talleres-de-formacion-autogestionados/principal.jpg',
      alt: 'Taller de formación autogestionado de Aliwen Lawen',
    },
    destacado: false,
  },

  // ---------- Bienestar ----------
  {
    slug: 'cooperativa-de-trabajo-inclusiva',
    titulo: 'Cooperativa de Trabajo Inclusiva',
    resumen:
      'Creación y puesta en marcha de una cooperativa orientada a la autonomía laboral de estudiantes y egresados de los talleres de formación laboral de la Escuela Especial Ayudando a Crecer.',
    cuerpo: [
      'Este proyecto busca crear y poner en marcha una Cooperativa de Trabajo Inclusiva orientada a la sustentabilidad económica y la autonomía familiar, para estudiantes y egresados de los talleres de formación laboral de la Escuela Especial Ayudando a Crecer de Chimbarongo, con foco en la producción de artesanías en mimbre, orfebrería, cerámica y gastronomía.',
      'En un esfuerzo colaborativo y multidisciplinario, el proyecto busca replicar la experiencia pedagógica y productiva de los talleres laborales de la escuela para transformarlos en una alternativa real de desarrollo sociolaboral para personas con discapacidad intelectual. La cooperativa será la estructura organizacional y comercial que permita dar continuidad y viabilidad a la inserción laboral de sus asociados.',
    ],
    area: 'bienestar',
    periodo: '2022-2025',
    financiamiento: 'Fondo Vivir Mejor, Ministerio de Desarrollo Social y Familia',
    coordinacion: 'Úrsula Cisterna',
    imagenPrincipal: {
      src: '/img/proyectos/cooperativa-de-trabajo-inclusiva/principal.jpg',
      alt: 'Estudiantes de la escuela especial trabajando con arcilla en una mesa de taller, aplanando planchas con uslero y estampando hojas y flores',
    },
    destacado: true,
  },
  {
    slug: 'hipoterapia-expresion-y-contencion-emocional',
    titulo: 'Hipoterapia, contención y expresión emocional',
    resumen:
      'Sesiones de hipoterapia y cultura ecuestre para favorecer el desarrollo y bienestar integral de jóvenes en situación de discapacidad.',
    cuerpo: [
      'El proyecto tiene por objetivo favorecer la educación inclusiva enfocada en el desarrollo y bienestar integral de jóvenes en situación de discapacidad, a través de sesiones de hipoterapia y cultura ecuestre. Se ejecuta en el Criadero Ecuestre Santa Zita.',
    ],
    area: 'bienestar',
    financiamiento: 'Fundación Descúbreme',
    coordinacion:
      'Isabel Mayol, junto al kinesiólogo e hipoterapeuta Juan José Jiménez',
    imagenPrincipal: {
      src: '/img/proyectos/hipoterapia-expresion-y-contencion-emocional/principal.jpg',
      alt: 'Un joven montado a caballo en el picadero, acompañado por dos monitores que sostienen las riendas',
    },
    destacado: true,
  },
  {
    slug: 'empoderamiento-con-caballos-y-arteterapia',
    titulo: 'Programa de Empoderamiento con Caballos y Arteterapia',
    resumen:
      'Sesiones al aire libre para favorecer el desarrollo de habilidades grupales en el Grupo de Autoayuda del Hospital de Chimbarongo.',
    cuerpo: [
      'Este proyecto, patrocinado por Fundación Llaftun, busca favorecer el desarrollo de habilidades grupales a través de sesiones de empoderamiento con caballos y de arteterapia al aire libre, dirigido al Grupo de Autoayuda del Hospital de Chimbarongo.',
    ],
    area: 'bienestar',
    coordinacion: 'NewLife, Centro Ecuestre Santa Zita',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/empoderamiento-con-caballos-y-arteterapia/principal.jpg',
      alt: 'Sesión de empoderamiento con caballos al aire libre',
    },
    destacado: false,
  },
  {
    slug: 'revalorizacion-del-rol-de-la-mujer-rural',
    titulo: 'Revalorización del rol de la mujer rural',
    resumen:
      'Un proceso para que cada participante redescubriera su mundo afectivo y el valor de su rol en la comunidad.',
    cuerpo: [
      'Este proyecto se focalizó en lograr que cada participante pudiese vivenciar y redescubrir su mundo afectivo, visibilizando y valorando cada aspecto de sí misma, en conciencia de su derecho a sentir y a existir, mediante estrategias y técnicas asociadas a la terapia alternativa.',
      'Las actividades consistieron en aprender, de manera experiencial, a generar espacios de autocuidado y autoconocimiento, mediante la resignificación de sus actividades domésticas y cotidianas, utilizando los recursos disponibles en su entorno inmediato.',
      'Las mujeres lograron una mayor valorización de sí mismas y del rol que desempeñan en su comunidad, aplicando distintos elementos en los diversos escenarios de su cotidiano, y aportando así a nuevas construcciones culturales para las generaciones venideras en materia de identidad cultural y género.',
    ],
    area: 'bienestar',
    financiamiento: 'Tinguiririca Energía, San Fernando',
    coordinacion: 'Victoria Fuentes e Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/revalorizacion-del-rol-de-la-mujer-rural/principal.jpg',
      alt: 'Taller con mujeres rurales del proyecto de revalorización de su rol',
    },
    galeria: [
      {
        src: '/img/proyectos/revalorizacion-del-rol-de-la-mujer-rural/1.jpg',
        alt: 'Segunda jornada del taller con mujeres rurales',
      },
    ],
    destacado: false,
  },
  {
    slug: 'escuela-itinerante-de-artes-visuales',
    titulo: 'Escuela Itinerante Experimental de Artes Visuales y Arteterapia',
    resumen:
      'Experimentación libre con técnicas de artes visuales integradas en procesos arteterapéuticos, dirigida a mujeres rurales.',
    cuerpo: [
      'Proyecto financiado por el Ministerio de las Culturas, las Artes y el Patrimonio y patrocinado por Fundación Llaftun, que busca desarrollar la experimentación libre con diferentes técnicas de artes visuales, integradas en procesos arteterapéuticos.',
    ],
    area: 'bienestar',
    financiamiento: 'Ministerio de las Culturas, las Artes y el Patrimonio',
    coordinacion: 'Ivonne Salazar',
    // La imagen actual es el collage que usaba el WordPress. Cuando lleguen
    // las fotos sueltas que están en el Drive, van como galería: basta
    // dejarlas en public/img/proyectos/escuela-itinerante-de-artes-visuales/
    // con los nombres 1.jpg, 2.jpg y 3.jpg, y descomentar el bloque
    // `galeria` de abajo.
     galeria: [
       { src: '/img/proyectos/escuela-itinerante-de-artes-visuales/1.jpg', alt: '…' },
       { src: '/img/proyectos/escuela-itinerante-de-artes-visuales/2.jpg', alt: '…' },
       { src: '/img/proyectos/escuela-itinerante-de-artes-visuales/3.jpg', alt: '…' },
       { src: '/img/proyectos/escuela-itinerante-de-artes-visuales/4.jpg', alt: '…' },
    ],
    imagenPrincipal: {
      src: '/img/proyectos/escuela-itinerante-de-artes-visuales/principal.jpg',
      alt: 'Cuatro momentos de los talleres: mujeres pintando sobre lienzos y trabajando con materiales de dibujo en mesas comunes',
    },
    destacado: false,
  },
  {
    slug: 'eco-jornada-sabiduria-de-mujer',
    titulo: 'Eco Jornada Sabiduría de Mujer',
    resumen:
      'Una jornada para poner en valor la cotidianidad de los oficios de las mujeres de Chimbarongo.',
    cuerpo: [
      'El propósito de este proyecto es valorizar la cotidianidad de los oficios de las mujeres de la comuna de Chimbarongo.',
    ],
    area: 'bienestar',
    coordinacion: 'Ivonne Salazar, Claudia Almuna y Pilar Leiva',
    destacado: false,
  },
  {
    slug: 'autocuidado-dia-de-la-mujer',
    titulo: 'Intervención: autocuidado en el Día de la Mujer',
    resumen:
      'Talleres de plantas medicinales, sonoterapia, hooponopono y yoga en la localidad de Santa Cruz.',
    cuerpo: [
      'Actividad dirigida a mujeres en la localidad de Santa Cruz, donde se desarrollaron talleres de plantas medicinales, sonoterapia, hooponopono y yoga.',
    ],
    area: 'bienestar',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/autocuidado-dia-de-la-mujer/principal.jpg',
      alt: 'Taller de autocuidado con mujeres en la localidad de Santa Cruz',
    },
    destacado: false,
  },
  {
    slug: 'red-de-colaboracion-local',
    titulo: 'Red de colaboración local',
    resumen:
      'Ocho emprendimientos de Chimbarongo asociados para participar juntos en la feria artesanal de la comuna.',
    cuerpo: [
      'Proyecto para microemprendedores de Chimbarongo, en el que participaron ocho emprendimientos asociados en la feria artesanal de la localidad.',
      'Participan de la Expomimbre con distintos productos de elaboración artesanal del área textil y de las artes gráficas.',
    ],
    area: 'bienestar',
    coordinacion: 'Vanessa, Elizabeth y Evita Romero',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/red-de-colaboracion-local/principal.jpg',
      alt: 'Emprendedoras de Chimbarongo en la feria artesanal de la comuna',
    },
    destacado: false,
  },
  {
    slug: 'terapia-de-arte-y-comunicacion-efectiva',
    titulo: 'Terapia de arte y comunicación efectiva para el trabajo en equipo',
    resumen:
      'Intervención con el equipo de terapeutas de Psiquiatría Infantil del Hospital de San Fernando.',
    cuerpo: [
      'Trabajo con el equipo de terapeutas de Psiquiatría Infantil, SENAME y Salud Mental del Hospital de San Fernando.',
    ],
    area: 'bienestar',
    periodo: '2019',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/terapia-de-arte-y-comunicacion-efectiva/principal.jpg',
      alt: 'Sesión de terapia de arte con un equipo de salud',
    },
    destacado: false,
  },
  {
    slug: 'mandalas-en-intervenciones-terapeuticas',
    titulo: 'Terapia de arte: mandalas y meditación con sonido',
    resumen:
      'Uso de mandalas en intervenciones terapéuticas con equipos del programa PPF.',
    cuerpo: [
      'Intervención con el equipo de terapeutas y funcionarios del programa PPF, SENAME, en Fundación Ciudad del Niño.',
    ],
    area: 'bienestar',
    periodo: '2018',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/mandalas-en-intervenciones-terapeuticas/principal.jpg',
      alt: 'Mandalas utilizados en una intervención terapéutica',
    },
    destacado: false,
  },
  {
    slug: 'meditacion-con-sonido',
    titulo: 'Meditación con sonido para la disminución del estrés',
    resumen:
      'Estrategia de manejo del estrés con el equipo de funcionarias de la Municipalidad de Placilla.',
    cuerpo: [
      'Sesiones dirigidas al equipo de funcionarias de la I. Municipalidad de Placilla.',
    ],
    area: 'bienestar',
    periodo: '2018',
    coordinacion: 'Ivonne Salazar',
    // PENDIENTE: revisar el texto alternativo contra la fotografía.
    imagenPrincipal: {
      src: '/img/proyectos/meditacion-con-sonido/principal.jpg',
      alt: 'Sesión de meditación con sonido con funcionarias municipales',
    },
    destacado: false,
  },
]

export const proyectosDestacados = proyectos.filter((p) => p.destacado)

/**
 * Proyectos que tienen fotografía propia, en el mismo orden en que aparecen
 * arriba. Alimenta el carrusel automático de la portada: como ahí las fotos
 * pasan solas y sin descripción, conviene que muestre variedad (hoy 19 de 21
 * proyectos) y no se limite a los 4 destacados que ya se explican con texto
 * en la sección "En qué trabajamos".
 */
export const proyectosConImagen = proyectos.filter((p) => p.imagenPrincipal)

export function buscarProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug)
}

export function proyectosPorArea(area: string): Proyecto[] {
  return proyectos.filter((p) => p.area === area)
}
