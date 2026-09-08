import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Proyecto } from '../types/content'
import Figura from './Figura'
import Icono from './Icono'

const INTERVALO_MS = 5000

/**
 * Carrusel automático de fotos de proyectos, como el que tenía el sitio
 * WordPress en la portada. Muestra una foto a la vez con transición de
 * fundido; cada una lleva a la página del proyecto correspondiente, como
 * piden los requisitos ("al seleccionar una imagen debe enviar a página con
 * el contenido asociado").
 *
 * Es intencionalmente solo fotográfico —sin resumen ni ficha de datos—
 * porque esa información ya está en la grilla "En qué trabajamos" que sigue
 * debajo: repetirla aquí era lo que hacía ver dos secciones iguales.
 *
 * Avanza solo, sin botón de pausa: las flechas quedan para saltar a mano.
 * Sí se detiene al posar el mouse o el foco de teclado encima, y al cambiar
 * de pestaña, para no competir con quien está mirando una foto puntual o
 * leyendo otra cosa. Quien tenga "reducir movimiento" activado en el sistema
 * ve el mismo avance pero con un corte seco en vez de un fundido animado
 * (así lo resuelve la regla `prefers-reduced-motion` del CSS global): no se
 * desactiva el paso automático por eso, solo se le quita la animación.
 */
export default function Carrusel({ proyectos }: { proyectos: Proyecto[] }) {
  const [indice, setIndice] = useState(0)
  const [enPausa, setEnPausa] = useState(false)

  const total = proyectos.length

  // Todas las diapositivas están apiladas una encima de otra en el mismo
  // lugar, así que para el navegador las ~20 cuentan como "a la vista" y el
  // `loading="lazy"` de <img> no sirve de nada: bajaría las 20 fotos apenas
  // el carrusel entra en pantalla. En su lugar se monta solo la foto activa
  // y la siguiente (para que la transición no espere una descarga a mitad de
  // camino); el resto ni siquiera tiene un <img> en el DOM hasta que le toca
  // el turno, y una vez cargada queda montada para no repetir la descarga.
  const [cargadas, setCargadas] = useState(() => new Set<number>([0]))

  useEffect(() => {
    if (total === 0) return
    const siguiente = (indice + 1) % total
    setCargadas((previas) => {
      if (previas.has(indice) && previas.has(siguiente)) return previas
      return new Set(previas).add(indice).add(siguiente)
    })
  }, [indice, total])

  useEffect(() => {
    if (enPausa || total <= 1) return

    const id = window.setInterval(() => {
      setIndice((i) => (i + 1) % total)
    }, INTERVALO_MS)

    return () => window.clearInterval(id)
  }, [enPausa, total])

  useEffect(() => {
    function alCambiarVisibilidad() {
      setEnPausa(document.hidden)
    }
    document.addEventListener('visibilitychange', alCambiarVisibilidad)
    return () =>
      document.removeEventListener('visibilitychange', alCambiarVisibilidad)
  }, [])

  if (total === 0) return null

  function irA(i: number) {
    setIndice(((i % total) + total) % total)
  }

  return (
    <div
      className="carrusel"
      onMouseEnter={() => setEnPausa(true)}
      onMouseLeave={() => setEnPausa(false)}
      onFocus={() => setEnPausa(true)}
      onBlur={() => setEnPausa(false)}
    >
      <div
        className="carrusel__vitrina"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Fotografías de nuestros proyectos"
      >
        {proyectos.map((proyecto, i) => {
          const activa = i === indice
          return (
            <Link
              key={proyecto.slug}
              to={`/proyectos/${proyecto.slug}`}
              className={
                'carrusel__diapositiva' +
                (activa ? ' carrusel__diapositiva--activa' : '')
              }
              aria-hidden={activa ? undefined : true}
              tabIndex={activa ? 0 : -1}
            >
              {cargadas.has(i) && (
                <Figura
                  imagen={proyecto.imagenPrincipal}
                  descripcionFaltante={proyecto.titulo}
                />
              )}
              <span className="carrusel__etiqueta">{proyecto.titulo}</span>
            </Link>
          )
        })}
      </div>

      {total > 1 && (
        <div className="carrusel__controles">
          <button
            type="button"
            className="boton-icono"
            onClick={() => irA(indice - 1)}
            aria-label="Fotografía anterior"
          >
            <Icono tipo="chevron-izquierda" />
          </button>

          {/* Un contador, no un punto por foto: con solo 4 destacados los
              puntos se ven bien, pero acá el carrusel recorre las ~20 fotos
              de todos los proyectos y una fila de 20 puntos se aprieta hasta
              ser ilegible (y se desborda en un teléfono). El número cumple
              la misma función —dónde estoy, cuánto falta— sin ese problema. */}
          <span className="carrusel__contador" aria-hidden="true">
            {indice + 1} / {total}
          </span>

          <button
            type="button"
            className="boton-icono"
            onClick={() => irA(indice + 1)}
            aria-label="Fotografía siguiente"
          >
            <Icono tipo="chevron-derecha" />
          </button>
        </div>
      )}
    </div>
  )
}
