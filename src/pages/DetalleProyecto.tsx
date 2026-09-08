import { Link, useParams } from 'react-router-dom'
import { buscarProyecto } from '../content/proyectos'
import { areas } from '../content/areas'
import AvisoPendiente from '../components/AvisoPendiente'
import Figura from '../components/Figura'
import Icono from '../components/Icono'
import NoEncontrada from './NoEncontrada'

export default function DetalleProyecto() {
  const { slug } = useParams()
  const proyecto = slug ? buscarProyecto(slug) : undefined

  if (!proyecto) return <NoEncontrada />

  const area = areas.find((a) => a.id === proyecto.area)
  const tieneFicha = Boolean(
    proyecto.periodo || proyecto.financiamiento || proyecto.coordinacion,
  )

  return (
    <div className="pagina">
      <div className="contenedor">
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

        <h1>{proyecto.titulo}</h1>
        <p className="entradilla">{proyecto.resumen}</p>

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
            <p className="antetitulo">Del proyecto</p>
            <h2>Galería</h2>
            <div className="galeria">
              {proyecto.galeria.map((imagen) => (
                <figure key={imagen.src}>
                  <Figura imagen={imagen} descripcionFaltante={imagen.alt} />
                  {imagen.credito && <figcaption>{imagen.credito}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        <p>
          <Link to="/proyectos">← Ver todos los proyectos</Link>
        </p>
      </div>
    </div>
  )
}
