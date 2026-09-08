import { Link } from 'react-router-dom'
import { proyectos } from '../content/proyectos'
import { areas } from '../content/areas'
import Figura from '../components/Figura'
import AlAparecer from '../components/AlAparecer'

/**
 * Listado completo de proyectos.
 *
 * En el sitio actual los proyectos están apilados al final de la página de
 * Servicios, mezclados con las líneas de acción. Acá tienen página propia y
 * se agrupan por área, que es la forma en que la fundación describe su
 * trabajo.
 */
export default function Proyectos() {
  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Proyectos</h1>
        <p>
          Desde 2018 hemos ejecutado y patrocinado {proyectos.length} proyectos
          en la Región de O’Higgins, con escuelas rurales y de educación
          especial, equipos de salud, agrupaciones de mujeres y
          microemprendedores.
        </p>

        {areas.map((area) => {
          const deLArea = proyectos.filter((p) => p.area === area.id)
          if (deLArea.length === 0) return null

          return (
            <section className="seccion" key={area.id}>
              <p className="antetitulo">{area.nombre}</p>
              <h2>
                {deLArea.length}{' '}
                {deLArea.length === 1 ? 'proyecto' : 'proyectos'}
              </h2>

              <div className="grilla">
                {deLArea.map((proyecto, indice) => (
                  <AlAparecer key={proyecto.slug} retraso={(indice % 6) * 35}>
                    <Link to={`/proyectos/${proyecto.slug}`} className="tarjeta">
                      <div className="tarjeta__imagen">
                        <Figura
                          imagen={proyecto.imagenPrincipal}
                          descripcionFaltante={proyecto.titulo}
                        />
                      </div>
                      <div className="tarjeta__cuerpo">
                        {proyecto.periodo && (
                          <p className="tarjeta__meta">{proyecto.periodo}</p>
                        )}
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.resumen}</p>
                      </div>
                    </Link>
                  </AlAparecer>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
