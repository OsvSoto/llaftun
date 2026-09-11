import {
  imagenApertura,
  bienvenida,
  principios,
  mision,
  vision,
} from '../content/institucional'
import { equipo } from '../content/equipo'
import { cabeceras } from '../content/cabeceras'
import AvisoPendiente from '../components/AvisoPendiente'
import Figura from '../components/Figura'
import Pagina from '../components/Pagina'
import AlAparecer from '../components/AlAparecer'

/**
 * Quiénes somos.
 *
 * Orden pedido en los requisitos: imagen de un proyecto o charla, párrafo de
 * principios, equipo con foto y descripción breve, y misión y visión en un
 * texto separado.
 */
export default function QuienesSomos() {
  return (
    <Pagina
      antetitulo="Conoce la fundación"
      titulo="Quiénes somos"
      foto={cabeceras.quienesSomos}
    >
      <Figura
        className="proyecto__portada"
        imagen={imagenApertura}
        descripcionFaltante="una charla o actividad de la fundación, en formato horizontal"
      />

      <section className="seccion">
        <AlAparecer escalonado>
          <h2>Nuestros principios</h2>
          {bienvenida.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </AlAparecer>

        <div className="grilla">
          {principios.map((principio, indice) => (
            <AlAparecer key={principio.id} retraso={indice * 120}>
              <div className="tarjeta tarjeta--marco">
                <div className="tarjeta__cuerpo">
                  <h3>{principio.nombre}</h3>
                  <p>{principio.descripcion}</p>
                </div>
              </div>
            </AlAparecer>
          ))}
        </div>
      </section>

      <section className="seccion">
        <AlAparecer escalonado>
          <h2>Nuestro equipo</h2>
        </AlAparecer>
        <div className="equipo">
          {equipo.map((persona, indice) => (
            <AlAparecer key={persona.id} retraso={indice * 90}>
              <Figura
                className="equipo__retrato"
                imagen={persona.foto}
                descripcionFaltante={`retrato de ${persona.nombre}`}
              />
              <h3>{persona.nombre}</h3>
              <p className="tarjeta__meta">{persona.cargo}</p>
              {persona.descripcion ? (
                <p>{persona.descripcion}</p>
              ) : (
                <AvisoPendiente>
                  {`falta la descripción breve de ${persona.nombre}.`}
                </AvisoPendiente>
              )}
            </AlAparecer>
          ))}
        </div>
      </section>

      <section className="seccion">
        <AlAparecer escalonado>
          <h2>Misión</h2>
          <p>{mision}</p>
          <h2>Visión</h2>
          <p>{vision}</p>
        </AlAparecer>
      </section>
    </Pagina>
  )
}
