import {
  introAlianzas,
  actividadesColaborativas,
  convenios,
} from '../content/alianzas'
import { cabeceras } from '../content/cabeceras'
import type { Alianza } from '../types/content'
import Pagina from '../components/Pagina'
import AlAparecer from '../components/AlAparecer'

function ListaDeAlianzas({ alianzas }: { alianzas: Alianza[] }) {
  return (
    <div className="grilla">
      {alianzas.map((alianza, indice) => (
        <AlAparecer key={alianza.id} retraso={indice * 120}>
          <div className="tarjeta tarjeta--marco">
            <div className="tarjeta__cuerpo">
              <h3>{alianza.nombre}</h3>
              <p>{alianza.descripcion}</p>
              {alianza.enlace && (
                <p>
                  <a
                    href={alianza.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar su sitio
                  </a>
                </p>
              )}
            </div>
          </div>
        </AlAparecer>
      ))}
    </div>
  )
}

/**
 * Alianzas.
 *
 * Conserva los dos lineamientos del sitio actual: actividades colaborativas
 * y convenios. La introducción va en el contenido y no en la cabecera: es
 * larga para leerse sobre la foto.
 */
export default function Alianzas() {
  return (
    <Pagina
      antetitulo="Fundación Llaftun"
      titulo="Alianzas"
      foto={cabeceras.alianzas}
    >
      <AlAparecer>
        <p>{introAlianzas}</p>
      </AlAparecer>

      <section className="seccion">
        <AlAparecer escalonado>
          <h2>Actividades colaborativas</h2>
        </AlAparecer>
        <ListaDeAlianzas alianzas={actividadesColaborativas} />
      </section>

      <section className="seccion">
        <AlAparecer escalonado>
          <h2>Convenios</h2>
        </AlAparecer>
        <ListaDeAlianzas alianzas={convenios} />
      </section>
    </Pagina>
  )
}
