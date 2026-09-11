import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sitio } from '../content/sitio'
import { fotosPortada } from '../content/portada'
import { buscarProyecto } from '../content/proyectos'
import Enredadera from './Enredadera'
import Icono from './Icono'

const INTERVALO_MS = 7000

/**
 * Portada de la página de inicio, a pantalla completa. Inspirada en la de
 * Fundación Mustakis pero dentro de la estética del sitio:
 *
 * - Fotos que se funden una en otra con un acercamiento lento, solo las de
 *   cámara (ver content/portada.ts).
 * - En vez del velo negro de Mustakis, un velo verde de la copa del bosque,
 *   más denso donde va el titular, con el toque terracota en la esquina y un
 *   grano fotográfico sutil que disimula la compresión de las fotos.
 * - La enredadera de litre y peumo en los bordes.
 * - Queda fija bajo la cabecera y el resto de la página sube encima como un
 *   telón (ver `.telon` en Inicio y global.css): el descenso de la copa a la
 *   hojarasca, literal.
 *
 * Sin botón de pausa (decisión del proyecto); tampoco se detiene con el
 * cursor, porque ocupa toda la pantalla y el cursor casi siempre está
 * encima. Sí se detiene con foco de teclado, con la pestaña oculta y cuando
 * el telón ya la tapó entera. Los indicadores de abajo permiten saltar a una
 * foto.
 */
export default function PortadaInmersiva() {
  const ref = useRef<HTMLElement>(null)
  const [indice, setIndice] = useState(0)
  const [anterior, setAnterior] = useState<number | null>(null)
  const [conFocoDeTeclado, setConFocoDeTeclado] = useState(false)
  const [oculta, setOculta] = useState(false)
  const [cubierta, setCubierta] = useState(false)
  // Solo se montan la foto activa y la siguiente: bajar todas las de 2400px
  // apenas carga la página gastaría ancho de banda sin necesidad.
  const [cargadas, setCargadas] = useState(() => new Set([0]))

  const total = fotosPortada.length
  const proyecto = buscarProyecto(fotosPortada[indice].proyecto)

  function irA(i: number) {
    if (i === indice) return
    setAnterior(indice)
    setIndice(i)
  }

  useEffect(() => {
    const siguiente = (indice + 1) % total
    setCargadas((previas) =>
      previas.has(indice) && previas.has(siguiente)
        ? previas
        : new Set(previas).add(indice).add(siguiente),
    )
  }, [indice, total])

  // Un temporizador por foto, no un intervalo: si se salta a mano a otra
  // foto, esa se queda su tiempo completo en vez de cambiar enseguida.
  useEffect(() => {
    if (conFocoDeTeclado || oculta || cubierta || total <= 1) return
    const id = window.setTimeout(() => {
      setAnterior(indice)
      setIndice((indice + 1) % total)
    }, INTERVALO_MS)
    return () => window.clearTimeout(id)
  }, [indice, conFocoDeTeclado, oculta, cubierta, total])

  useEffect(() => {
    function alCambiarVisibilidad() {
      setOculta(document.hidden)
    }
    document.addEventListener('visibilitychange', alCambiarVisibilidad)
    return () =>
      document.removeEventListener('visibilitychange', alCambiarVisibilidad)
  }, [])

  // La portada es `sticky`: sigue "a la vista" para el navegador aunque el
  // telón la tape, así que un IntersectionObserver no sirve. Basta comparar
  // el scroll con su alto, una vez por cuadro como mucho. Cuando ya bajó
  // todo su alto, el telón la cubre entera (se monta sobre ella antes).
  useEffect(() => {
    const portada = ref.current
    if (!portada) return
    let pendiente = false

    function revisar() {
      pendiente = false
      setCubierta(window.scrollY >= portada!.offsetHeight)
    }
    function alMoverse() {
      if (pendiente) return
      pendiente = true
      requestAnimationFrame(revisar)
    }

    revisar()
    window.addEventListener('scroll', alMoverse, { passive: true })
    window.addEventListener('resize', alMoverse)
    return () => {
      window.removeEventListener('scroll', alMoverse)
      window.removeEventListener('resize', alMoverse)
    }
  }, [])

  return (
    <section
      ref={ref}
      className={
        'portada-inmersiva' + (cubierta ? ' portada-inmersiva--cubierta' : '')
      }
      onFocus={(evento) =>
        setConFocoDeTeclado(evento.target.matches(':focus-visible'))
      }
      onBlur={() => setConFocoDeTeclado(false)}
    >
      <div className="portada-inmersiva__fotos">
        {fotosPortada.map((foto, i) => {
          const estado =
            i === indice
              ? ' portada-inmersiva__foto--activa'
              : i === anterior
                ? ' portada-inmersiva__foto--saliendo'
                : ''
          return (
            <div
              key={foto.imagen.src}
              className={'portada-inmersiva__foto' + estado}
              aria-hidden={i === indice ? undefined : true}
            >
              {cargadas.has(i) && (
                <img
                  src={foto.imagen.src}
                  srcSet={`${foto.imagen.src} 1280w, ${foto.srcGrande} 2400w`}
                  sizes="100vw"
                  alt={foto.imagen.alt}
                  style={
                    foto.imagen.encuadre
                      ? { objectPosition: foto.imagen.encuadre }
                      : undefined
                  }
                  fetchPriority={i === 0 ? 'high' : undefined}
                  decoding="async"
                />
              )}
            </div>
          )
        })}
      </div>

      <div className="portada-inmersiva__velo" aria-hidden="true" />
      <Enredadera className="portada-inmersiva__enredadera" />

      <div className="contenedor portada-inmersiva__contenido">
        <h1>{sitio.fraseRepresentativa}</h1>
        <p>
          Trabajamos en educación ambiental y bienestar integral en{' '}
          {sitio.contacto.comuna}.
        </p>
        <Link className="boton" to="/proyectos">
          Conoce nuestros proyectos
        </Link>
      </div>

      <div className="contenedor portada-inmersiva__pie">
        {proyecto && (
          <Link
            to={`/proyectos/${proyecto.slug}`}
            className="portada-inmersiva__rotulo"
          >
            <span className="portada-inmersiva__rotulo-etiqueta">En la foto</span>
            {proyecto.titulo} <Icono tipo="flecha-derecha" />
          </Link>
        )}

        {total > 1 && (
          <div className="portada-inmersiva__indicadores">
            {fotosPortada.map((foto, i) => (
              <button
                key={foto.imagen.src}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Fotografía ${i + 1} de ${total}`}
                aria-current={i === indice ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
