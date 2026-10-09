import { sitio } from '../content/sitio'
import Icono from './Icono'
import AlAparecer from './AlAparecer'

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
 * MIENTRAS NO ESTÉ EL WIDGET: iban tres recuadros vacíos con la leyenda
 * "widget pendiente de instalar", para dejar ver la forma que tendría la
 * grilla real. En la práctica eran 692px -casi una pantalla completa- de
 * marcadores grises, y era el hueco más grande del inicio. Ahora va una
 * invitación compacta con el nombre de la cuenta: ocupa un tercio del alto y
 * todo lo que muestra es verdadero. Cuando llegue el widget, se reemplaza
 * este bloque por la grilla y la sección recupera su altura.
 */
export default function SeccionInstagram() {
  // De "https://www.instagram.com/fundacionllaftun.cl/" a "@fundacionllaftun.cl".
  const cuenta =
    '@' + sitio.redes.instagram.replace(/\/+$/, '').split('/').pop()

  return (
    <section className="seccion estrato--piso">
      <div className="contenedor">
        <AlAparecer escalonado className="invitacion-redes">
          <div>
            <h2>Últimas novedades</h2>
            <p>
              Compartimos el día a día de nuestros proyectos en Instagram:
              talleres, salidas educativas y actividades con las comunidades
              con las que trabajamos.
            </p>
          </div>
          <a
            className="boton invitacion-redes__boton"
            href={sitio.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icono tipo="instagram" />
            {cuenta}
          </a>
        </AlAparecer>
      </div>
    </section>
  )
}
