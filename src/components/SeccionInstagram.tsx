import { sitio } from '../content/sitio'
import Icono from './Icono'

/**
 * Sección de últimas publicaciones de redes sociales.
 *
 * PENDIENTE: falta decidir e instalar el widget que trae las publicaciones.
 *
 * La API de Instagram no sirve para un sitio estático: exige una app revisada
 * por Meta y un token de larga duración que caduca cada 60 días y hay que
 * renovar con una llamada autenticada. Eso obliga a tener un backend, que es
 * justamente lo que este proyecto evita.
 *
 * La opción recomendada es un widget de terceros (por ejemplo Behold, que
 * tiene plan gratuito para un feed) que mantiene el token por su cuenta. La
 * cuenta debe ser Business o Creator.
 *
 * Con una frecuencia de publicación de aproximadamente una vez cada tres
 * semanas, conviene NO mostrar fechas: un "hace 24 días" hace ver el sitio
 * abandonado. Una grilla sin fecha envejece mejor.
 *
 * Van tres recuadros, no uno solo: así se ve desde ya la forma que va a
 * tener la grilla real una vez que el widget esté instalado, en vez de un
 * bloque ancho que habría que rehacer.
 */
export default function SeccionInstagram() {
  return (
    <section className="seccion estrato--piso">
      <div className="contenedor">
        <h2>Últimas novedades</h2>
        <p>
          Compartimos el día a día de nuestros proyectos en Instagram: talleres,
          salidas educativas y actividades con las comunidades con las que
          trabajamos.
        </p>

        <div className="instagram-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="marcador-imagen" style={{ aspectRatio: '1' }}>
              Publicación de Instagram (widget pendiente de instalar)
            </div>
          ))}
        </div>

        <p style={{ marginTop: '1.25rem' }}>
          <a
            href={sitio.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Instagram <Icono tipo="flecha-derecha" />
          </a>
        </p>
      </div>
    </section>
  )
}
