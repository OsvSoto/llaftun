import { useEffect, useState } from 'react'
import { proyectos } from '../content/proyectos'
import { actividadesColaborativas, convenios } from '../content/alianzas'
import { cargarMateriales } from '../content/materiales'
import AlAparecer from './AlAparecer'

const ANIO_DE_FUNDACION = 2018

/**
 * Banda de cifras de la fundación.
 *
 * Es el recurso más repetido en los sitios de fundaciones que funcionan bien
 * (Reforestemos abre con "1,5 millones de árboles, 12 regiones, 176 comunas";
 * Mustakis con sus tres tarjetas numeradas): una fila de números grandes con
 * una glosa corta debajo. Da densidad a muy bajo costo —ocupa poco alto y
 * dice mucho— y por eso entra justo donde el inicio se sentía vacío.
 *
 * Regla que se siguió al elegirlas: TODAS las cifras salen del contenido del
 * propio sitio y se cuentan solas. Nada de números de impacto inventados.
 * Si la fundación agrega un proyecto o publica un material, la cifra cambia
 * sin tocar este archivo.
 *
 * Las cifras que de verdad conmueven en una fundación como esta —niñas y
 * niños que participaron, escuelas, árboles plantados— no están en ningún
 * lado todavía. Están pedidas en el documento de pendientes; cuando lleguen,
 * reemplazan a las más flojas de acá.
 */
export default function CifrasLlaftun() {
  const [materiales, setMateriales] = useState<number | null>(null)

  useEffect(() => {
    const control = new AbortController()
    cargarMateriales(control.signal)
      .then((lista) => setMateriales(lista.length))
      .catch(() => {
        /* Si el índice no carga, esa cifra simplemente no se muestra. */
      })
    return () => control.abort()
  }, [])

  const cifras = [
    {
      id: 'desde',
      numero: String(ANIO_DE_FUNDACION),
      glosa: 'Trabajando en Chimbarongo desde',
    },
    {
      id: 'proyectos',
      numero: String(proyectos.length),
      glosa: 'Proyectos ejecutados',
    },
    ...(materiales !== null
      ? [
          {
            id: 'materiales',
            numero: String(materiales),
            glosa: 'Materiales educativos gratuitos',
          },
        ]
      : []),
    {
      id: 'alianzas',
      numero: String(actividadesColaborativas.length + convenios.length),
      glosa: 'Organizaciones aliadas',
    },
  ]

  return (
    <AlAparecer escalonado className="cifras">
      {cifras.map((cifra) => (
        <p className="cifra" key={cifra.id}>
          <span className="cifra__numero">{cifra.numero}</span>
          <span className="cifra__glosa">{cifra.glosa}</span>
        </p>
      ))}
    </AlAparecer>
  )
}
