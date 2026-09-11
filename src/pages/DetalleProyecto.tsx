import { Link, useParams } from 'react-router-dom'
import { buscarProyecto } from '../content/proyectos'
import { areas } from '../content/areas'
import AvisoPendiente from '../components/AvisoPendiente'
import Figura from '../components/Figura'
import Icono from '../components/Icono'
import Pagina from '../components/Pagina'
import AlAparecer from '../components/AlAparecer'
import NoEncontrada from './NoEncontrada'

/**
 * Página de un proyecto.
 *
 * La cabecera usa la foto principal difuminada, como fondo de color: casi
 * todas son de celular y no aguantan el ancho completo. La foto nítida va
 * dentro de la página, a su tamaño.
 */
export default function DetalleProyecto() {
  const { slug } = useParams()
  const proyecto = slug ? buscarProyecto(slug) : undefined

  if (!proyecto) return <NoEncontrada />

  const area = areas.find((a) => a.id === proyecto.area)
  const tieneFicha = Boolean(
    proyecto.periodo || proyecto.financiamiento || proyecto.coordinacion,
  )

  return (
    <Pagina
      miga={
        <nav className="miga" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <Icono tipo="chevron-derecha" className="miga__separador" />
          <Link to="/proyectos">Proyectos</Link>
          {area && (
            <>
              <Icono tipo="chevron-derecha" className="miga__separador" />
              <span>{area.nombre}</span>
            </>
          )}
        </nav>
      }
      titulo={proyecto.titulo}
      entradilla={proyecto.resumen}
      foto={
        proyecto.imagenPrincipal
          ? { imagen: proyecto.imagenPrincipal, difuminada: true }
          : undefined
      }
    >
      <Figura
        className="proyecto__portada"
        imagen={proyecto.imagenPrincipal}
        descripcionFaltante={`fotografía principal de ${proyecto.titulo}`}
      />

      <div className="proyecto__cuerpo">
        <div>
          {proyecto.cuerpo.length > 0 ? (
            proyecto.cuerpo.map((parrafo, i) => <p key={i}>{parrafo}</p>)
          ) : (
            <AvisoPendiente>
              {`falta el texto completo de ${proyecto.titulo}.`}
            </AvisoPendiente>
          )}
        </div>

        {tieneFicha && (
          <aside className="ficha" aria-label="Datos del proyecto">
            <dl>
              {proyecto.periodo && (
                <>
                  <dt>Periodo</dt>
                  <dd>{proyecto.periodo}</dd>
                </>
              )}
              {proyecto.financiamiento && (
                <>
                  <dt>Financiamiento</dt>
                  <dd>{proyecto.financiamiento}</dd>
                </>
              )}
              {proyecto.coordinacion && (
                <>
                  <dt>Coordinación</dt>
                  <dd>{proyecto.coordinacion}</dd>
                </>
              )}
              {area && (
                <>
                  <dt>Área</dt>
                  <dd>
                    <Link to="/areas-de-accion">{area.nombre}</Link>
                  </dd>
                </>
              )}
            </dl>
          </aside>
        )}
      </div>

      {proyecto.galeria && proyecto.galeria.length > 0 && (
        <section className="seccion">
          <AlAparecer escalonado>
            <p className="antetitulo">Del proyecto</p>
            <h2>Galería</h2>
          </AlAparecer>
          <div className="galeria">
            {proyecto.galeria.map((imagen, indice) => (
              <AlAparecer key={imagen.src} retraso={(indice % 4) * 90}>
                <figure>
                  <Figura imagen={imagen} descripcionFaltante={imagen.alt} />
                  {imagen.credito && <figcaption>{imagen.credito}</figcaption>}
                </figure>
              </AlAparecer>
            ))}
          </div>
        </section>
      )}

      {proyecto.video && (
        <section className="seccion">
          <AlAparecer escalonado>
            <p className="antetitulo">Del proyecto</p>
            <h2>Video</h2>
            <iframe
              src={proyecto.video.urlEmbed}
              title={proyecto.video.titulo}
              allowFullScreen
              loading="lazy"
              style={{ width: '100%', aspectRatio: '16 / 9', border: 0, borderRadius: 'var(--radio)' }}
            />
          </AlAparecer>
        </section>
      )}

      <p>
        <Link to="/proyectos">← Ver todos los proyectos</Link>
      </p>
    </Pagina>
  )
}
