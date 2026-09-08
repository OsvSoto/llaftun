import {
  introAlianzas,
  actividadesColaborativas,
  convenios,
} from '../content/alianzas'
import type { Alianza } from '../types/content'

function ListaDeAlianzas({ alianzas }: { alianzas: Alianza[] }) {
  return (
    <div className="grilla">
      {alianzas.map((alianza) => (
        <div key={alianza.id} className="tarjeta tarjeta--marco">
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
      ))}
    </div>
  )
}

/**
 * Alianzas.
 *
 * Conserva los dos lineamientos del sitio actual: actividades colaborativas
 * y convenios.
 */
export default function Alianzas() {
  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Alianzas</h1>
        <p>{introAlianzas}</p>

        <section className="seccion">
          <h2>Actividades colaborativas</h2>
          <ListaDeAlianzas alianzas={actividadesColaborativas} />
        </section>

        <section className="seccion">
          <h2>Convenios</h2>
          <ListaDeAlianzas alianzas={convenios} />
        </section>
      </div>
    </div>
  )
}
