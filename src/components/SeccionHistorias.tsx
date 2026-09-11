import { Link } from 'react-router-dom'
import { buscarProyecto } from '../content/proyectos'
import { videos } from '../content/materiales'
import { areas } from '../content/areas'
import Figura from '../components/Figura'
import Icono from '../components/Icono'
import AlAparecer from './AlAparecer'

/**
 * "Historias desde el territorio": reemplaza las cifras que había antes en
 * "Sobre Llaftun" por algo con más contenido real, sin salirse del sistema
 * visual del sitio (tarjeta, .descarga, Icono) ni inventar datos que no
 * tenemos -por eso no hay duración de video ni año donde no los declaramos
 * en el contenido.
 *
 * Selección de contenido, para no repetir lo que ya se ve más abajo en
 * "Proyectos destacados" (biodiversidad, tesoro, cooperativa):
 *   - Destacada: El Tesoro del Bosque Esclerófilo, el único proyecto con
 *     video Y galería completa.
 *   - Lista: Descubriendo el Bosque Esclerófilo (tiene proyecto) y
 *     Experiencia Neurodiversa (no tiene proyecto asociado, así que enlaza
 *     directo a YouTube).
 *   - Tarjeta chica: Hipoterapia, el cuarto proyecto destacado, que si no
 *     quedaría sin mostrarse en ningún lado de la portada.
 */
export default function SeccionHistorias() {
  const destacado = buscarProyecto('tesoro-del-bosque-esclerofilo')
  const descubriendo = buscarProyecto('descubriendo-el-bosque-esclerofilo')
  const experienciaNeurodiversa = videos.find(
    (v) => v.id === 'experiencia-neurodiversa',
  )
  const hipoterapia = buscarProyecto(
    'hipoterapia-expresion-y-contencion-emocional',
  )

  if (!destacado || !descubriendo || !hipoterapia) return null

  const nombreArea = (id: string) =>
    areas.find((a) => a.id === id)?.nombre ?? ''

  return (
    <div className="historias">
      <AlAparecer escalonado className="historias__cabecera">
        <div>
          <p className="antetitulo">Historias desde el territorio</p>
          <h3>Así se vive Llaftun</h3>
        </div>
        <Link to="/material-educativo" className="historias__ver-todos">
          Todos los videos <Icono tipo="flecha-derecha" />
        </Link>
      </AlAparecer>

      <AlAparecer escalonado className="historias__grilla">
        <Link
          to={`/proyectos/${destacado.slug}`}
          className="tarjeta historias__destacada"
        >
          <div className="tarjeta__imagen historias__imagen">
            <Figura
              imagen={destacado.imagenPrincipal}
              descripcionFaltante={destacado.titulo}
            />
            <span className="historias__insignia">
              <Icono tipo="play" /> Ver el proyecto y su video
            </span>
          </div>
          <div className="tarjeta__cuerpo">
            <h4>{destacado.titulo}</h4>
            <p>{destacado.resumen}</p>
          </div>
        </Link>

        <div className="historias__lista descargas">
          <Link to={`/proyectos/${descubriendo.slug}`} className="descarga">
            <span className="tarjeta__meta">
              {nombreArea(descubriendo.area)} · Video
            </span>
            <h4>
              {descubriendo.titulo} <Icono tipo="flecha-derecha" />
            </h4>
          </Link>

          {experienciaNeurodiversa && (
            <a
              href={experienciaNeurodiversa.urlEmbed}
              target="_blank"
              rel="noopener noreferrer"
              className="descarga"
            >
              <span className="tarjeta__meta">Arteterapia · Video</span>
              <h4>
                {experienciaNeurodiversa.titulo} <Icono tipo="flecha-derecha" />
              </h4>
            </a>
          )}

          <Link
            to={`/proyectos/${hipoterapia.slug}`}
            className="descarga historias__proyecto"
          >
            <div className="historias__proyecto-imagen">
              <Figura
                imagen={hipoterapia.imagenPrincipal}
                descripcionFaltante={hipoterapia.titulo}
              />
            </div>
            <div>
              <span className="tarjeta__meta">
                Proyecto · {nombreArea(hipoterapia.area)}
              </span>
              <h4>{hipoterapia.titulo}</h4>
              <span className="historias__enlace">
                Conoce la experiencia <Icono tipo="flecha-derecha" />
              </span>
            </div>
          </Link>
        </div>
      </AlAparecer>
    </div>
  )
}
