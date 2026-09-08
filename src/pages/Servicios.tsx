import { introServicios, lineasDeServicio } from '../content/servicios'

/**
 * Servicios.
 *
 * Mantiene la estructura del sitio actual: una introducción y las cuatro
 * líneas de acción numeradas, cada una con su duración y su forma de
 * financiamiento cuando la declara.
 */
export default function Servicios() {
  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Servicios</h1>
        <p>{introServicios}</p>

        <ol className="lineas">
          {lineasDeServicio.map((linea, i) => (
            <li key={linea.id} className="linea">
              <span className="linea__numero">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2>{linea.nombre}</h2>
                <p>{linea.descripcion}</p>
                {(linea.duracion || linea.financiamiento) && (
                  <dl className="linea__datos">
                    {linea.duracion && (
                      <>
                        <dt>Duración</dt>
                        <dd>{linea.duracion}</dd>
                      </>
                    )}
                    {linea.financiamiento && (
                      <>
                        <dt>Financiamiento</dt>
                        <dd>{linea.financiamiento}</dd>
                      </>
                    )}
                  </dl>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
