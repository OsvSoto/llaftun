import { Link } from 'react-router-dom'
import { sitio } from '../content/sitio'
import { areas } from '../content/areas'
import { proyectosDestacados } from '../content/proyectos'
import { introColabora } from '../content/colabora'
import Figura from '../components/Figura'
import AvisoPendiente from '../components/AvisoPendiente'
import Hojarasca from '../components/Hojarasca'
import SeccionInstagram from '../components/SeccionInstagram'
import AlAparecer from '../components/AlAparecer'
import DivisorHojas from '../components/DivisorHojas'
import RamitaHojas from '../components/RamitaHojas'
import Icono from '../components/Icono'
import SeccionHistorias from '../components/SeccionHistorias'
import CifrasLlaftun from '../components/CifrasLlaftun'
import PortadaInmersiva from '../components/PortadaInmersiva'

/**
 * Página de inicio.
 *
 * Estructura pedida (sept. 2026, reemplaza el orden anterior):
 *   1. portada: fotos a pantalla completa + frase representativa + CTA
 *   2. en qué trabajamos: las áreas de acción, no proyectos puntuales
 *   3. sobre Llaftun: historia breve + historias desde el territorio
 *   4. proyectos destacados: solo 3, sin el conteo exacto en el botón
 *   5. últimas novedades (Instagram)
 *   6. colabora con nosotros: bloque de cierre, aparte del descenso al bosque
 *
 * El "Contacto" que había al final se quitó: el pie de página ya cubre
 * correo, dirección y redes, y repetirlo aquí era la misma información dos
 * veces seguidas.
 *
 * Sobre ese orden se monta el descenso al bosque. La portada queda fija y
 * todo lo demás sube encima como un telón: primero la copa, en el verde
 * oscuro de la identidad, que se aclara hasta la hojarasca mientras caen las
 * hojas; de ahí cada sección baja un estrato (humus, suelo), hasta que el
 * bloque de Colabora rompe la metáfora a propósito —es un cierre, no un
 * paso más del descenso— antes de llegar al pie.
 *
 * Todo lo que está bajo la portada entra al hacer scroll (ver AlAparecer).
 * La portada no: el titular tiene que estar desde el inicio.
 */
export default function Inicio() {
  const proyectosParaPortada = proyectosDestacados.slice(0, 3)

  return (
    <>
      <PortadaInmersiva />

      <div className="telon">
        <DivisorHojas />

        <section className="seccion estrato estrato--copa">
          <div className="contenedor">
            <AlAparecer escalonado>
              <p className="antetitulo">Nuestro trabajo</p>
              <h2>En qué trabajamos</h2>
            </AlAparecer>
            <div className="grilla grilla--areas">
              {areas.map((area, indice) => (
                <AlAparecer key={area.id} retraso={indice * 120}>
                  <Link to="/areas-de-accion" className="tarjeta">
                    <div className="tarjeta__imagen">
                      <Figura
                        imagen={area.imagen}
                        descripcionFaltante={`una actividad representativa del área ${area.nombre}`}
                      />
                    </div>
                    <div className="tarjeta__cuerpo">
                      {area.id === 'educacion-ambiental' ? (
                        <RamitaHojas className="area-icono" />
                      ) : (
                        <Icono tipo="bienestar" className="area-icono" />
                      )}
                      <h3>{area.nombre}</h3>
                      {area.descripcion ? (
                        <p>{area.descripcion}</p>
                      ) : (
                        <AvisoPendiente>
                          {`falta la descripción del área ${area.nombre}. No hay material de esta área en el Drive de la fundación.`}
                        </AvisoPendiente>
                      )}
                    </div>
                  </Link>
                </AlAparecer>
              ))}
            </div>
          </div>
        </section>

        {/* Hojas de quillay, peumo, litre, maitén y boldo: las cinco especies
            que la fundación enseña a reconocer en el bosque esclerófilo. */}
        <div className="franja estrato franja--hojarasca">
          <Hojarasca />
        </div>

        <section className="seccion estrato estrato--humus">
          <div className="contenedor">
            <AlAparecer escalonado>
              <p className="antetitulo">Desde 2018</p>
              <h2>Sobre Llaftun</h2>
              <p>
                Nuestra organización fue fundada en 2018, bajo los
                principios del Buen Vivir de los pueblos originarios. Desde
                entonces trabajamos en {sitio.contacto.comuna}, junto a
                escuelas, agrupaciones y equipos de salud de la zona.
              </p>
            </AlAparecer>
            <CifrasLlaftun />
            <SeccionHistorias />
          </div>
        </section>

        <section className="seccion estrato estrato--suelo">
          <div className="contenedor">
            <AlAparecer escalonado>
              <p className="antetitulo">Proyectos</p>
              <h2>Proyectos destacados</h2>
            </AlAparecer>
            <div className="grilla">
              {proyectosParaPortada.map((proyecto, indice) => (
                <AlAparecer key={proyecto.slug} retraso={indice * 120}>
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

            <AlAparecer>
              <p style={{ marginTop: '2.25rem', marginBottom: 0 }}>
                <Link className="boton" to="/proyectos">
                  Ver todos los proyectos
                </Link>
              </p>
            </AlAparecer>
          </div>
        </section>

        <SeccionInstagram />

        <section className="cta-colabora">
          <AlAparecer escalonado className="contenedor cta-colabora__cuerpo">
            <div>
              <h2>Colabora con nosotros</h2>
              <p>{introColabora}</p>
            </div>
            <Link className="boton" to="/colabora">
              Quiero colaborar
            </Link>
          </AlAparecer>
        </section>
      </div>
    </>
  )
}
