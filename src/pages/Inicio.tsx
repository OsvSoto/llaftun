import { Link } from 'react-router-dom'
import { sitio } from '../content/sitio'
import { areas } from '../content/areas'
import { proyectos, proyectosDestacados, proyectosConImagen } from '../content/proyectos'
import { introColabora } from '../content/colabora'
import Carrusel from '../components/Carrusel'
import Figura from '../components/Figura'
import AvisoPendiente from '../components/AvisoPendiente'
import Hojarasca from '../components/Hojarasca'
import SeccionInstagram from '../components/SeccionInstagram'
import AlAparecer from '../components/AlAparecer'

/**
 * Página de inicio.
 *
 * Estructura pedida (sept. 2026, reemplaza el orden anterior):
 *   1. hero: frase representativa + CTA + carrusel de proyectos
 *   2. en qué trabajamos: las áreas de acción, no proyectos puntuales
 *   3. sobre Llaftun: historia breve + cifras
 *   4. proyectos destacados: solo 3, sin el conteo exacto en el botón
 *   5. últimas novedades (Instagram)
 *   6. colabora con nosotros: bloque de cierre, aparte del descenso al bosque
 *
 * El "Contacto" que había al final se quitó: el pie de página ya cubre
 * correo, dirección y redes, y repetirlo aquí era la misma información dos
 * veces seguidas.
 *
 * Sobre ese orden se monta el descenso al bosque: la portada es la copa y
 * cada sección baja un estrato (hojarasca, humus, suelo), hasta que el
 * bloque de Colabora rompe la metáfora a propósito —es un cierre, no un
 * paso más del descenso— antes de llegar al pie.
 */
export default function Inicio() {
  const proyectosParaPortada = proyectosDestacados.slice(0, 3)

  return (
    <>
      <section className="portada">
        <div className="contenedor portada__grilla">
          <div className="portada__texto">
            <h1>{sitio.fraseRepresentativa}</h1>
            <p>
              Trabajamos en educación ambiental y bienestar integral en{' '}
              {sitio.contacto.comuna}.
            </p>
            <Link className="boton" to="/proyectos">
              Conoce nuestros proyectos
            </Link>
          </div>

          <div className="portada__carrusel">
            <Carrusel proyectos={proyectosConImagen} />
          </div>
        </div>
      </section>

      <section className="seccion estrato estrato--hojarasca">
        <div className="contenedor">
          <p className="antetitulo">Nuestro trabajo</p>
          <h2>En qué trabajamos</h2>
          <div className="grilla">
            {areas.map((area, indice) => (
              <AlAparecer key={area.id} retraso={indice * 60}>
                <Link to="/areas-de-accion" className="tarjeta">
                  <div className="tarjeta__imagen">
                    <Figura
                      imagen={area.imagen}
                      descripcionFaltante={`una actividad representativa del área ${area.nombre}`}
                    />
                  </div>
                  <div className="tarjeta__cuerpo">
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
      <div className="franja franja--hojarasca">
        <Hojarasca />
      </div>

      <section className="seccion estrato estrato--humus">
        <div className="contenedor">
          <AlAparecer>
            <p className="antetitulo">Desde 2018</p>
            <h2>Sobre Llaftun</h2>
            <p>
              Nuestra organización fue fundada en 2018, bajo los
              principios del Buen Vivir de los pueblos originarios. Desde
              entonces trabajamos en {sitio.contacto.comuna}, junto a
              escuelas, agrupaciones y equipos de salud de la zona.
            </p>
            <div className="cifras">
              <div className="cifras__item">
                <span className="cifras__numero">2018</span>
                <span className="cifras__etiqueta">Fundada en</span>
              </div>
              <div className="cifras__item">
                <span className="cifras__numero">{proyectos.length}</span>
                <span className="cifras__etiqueta">proyectos ejecutados</span>
              </div>
            </div>
          </AlAparecer>
        </div>
      </section>

      <section className="seccion estrato estrato--suelo">
        <div className="contenedor">
          <p className="antetitulo">Proyectos</p>
          <h2>Proyectos destacados</h2>
          <div className="grilla">
            {proyectosParaPortada.map((proyecto, indice) => (
              <AlAparecer key={proyecto.slug} retraso={indice * 60}>
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

          <p style={{ marginTop: '2.25rem', marginBottom: 0 }}>
            <Link className="boton" to="/proyectos">
              Ver todos los proyectos
            </Link>
          </p>
        </div>
      </section>

      <SeccionInstagram />

      <section className="cta-colabora">
        <div className="contenedor cta-colabora__cuerpo">
          <div>
            <h2>Colabora con nosotros</h2>
            <p>{introColabora}</p>
          </div>
          <Link className="boton" to="/colabora">
            Quiero colaborar
          </Link>
        </div>
      </section>
    </>
  )
}
