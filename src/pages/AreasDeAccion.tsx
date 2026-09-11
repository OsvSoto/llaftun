import { Link } from 'react-router-dom'
import { areas } from '../content/areas'
import { proyectos } from '../content/proyectos'
import { cabeceras } from '../content/cabeceras'
import AvisoPendiente from '../components/AvisoPendiente'
import Figura from '../components/Figura'
import Pagina from '../components/Pagina'
import AlAparecer from '../components/AlAparecer'

/**
 * Áreas de acción.
 *
 * Los requisitos piden, para cada área, una imagen con su descripción debajo.
 * Se agrega además la lista de proyectos de cada área, que sale gratis del
 * contenido ya tipado y le da sentido a la página.
 */
export default function AreasDeAccion() {
  return (
    <Pagina
      antetitulo="Conoce la fundación"
      titulo="Áreas de acción"
      foto={cabeceras.areasDeAccion}
    >
      {areas.map((area) => {
        const deLArea = proyectos.filter((p) => p.area === area.id)

        return (
          <section className="seccion" key={area.id}>
            <AlAparecer escalonado>
              <Figura
                imagen={area.imagen}
                descripcionFaltante={`una actividad representativa del área ${area.nombre}`}
              />
              <h2>{area.nombre}</h2>
              {area.descripcion ? (
                <p>{area.descripcion}</p>
              ) : (
                <AvisoPendiente>
                  {`falta la descripción del área ${area.nombre}. No hay material de esta área en el Drive de la fundación.`}
                </AvisoPendiente>
              )}
            </AlAparecer>

            {deLArea.length > 0 && (
              <AlAparecer>
                <h3>Proyectos de esta área</h3>
                <ul>
                  {deLArea.map((proyecto) => (
                    <li key={proyecto.slug}>
                      <Link to={`/proyectos/${proyecto.slug}`}>
                        {proyecto.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AlAparecer>
            )}
          </section>
        )
      })}
    </Pagina>
  )
}
