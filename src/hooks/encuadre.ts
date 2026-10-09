import type { CSSProperties } from 'react'
import type { Imagen } from '../types/content'

/**
 * Traduce el `encuadre` de una imagen a variables CSS en vez de escribir
 * `object-position` directo en el elemento.
 *
 * El motivo es que un estilo en línea le gana a cualquier regla de la hoja de
 * estilos, incluso a una media query. Mientras el encuadre iba en línea, las
 * fotos quedaban en celular con el encuadre calculado para escritorio y no
 * había forma de corregirlas desde el CSS.
 *
 * Con `--encuadre-x` y `--encuadre-y` por separado, la hoja de estilos puede
 * conservar uno y reemplazar el otro. Es justo lo que hace falta en celular:
 * la pantalla vertical recorta los costados -de una foto de 3:2 en un marco de
 * 375x724 se ve apenas un tercio del ancho-, así que ahí la foto se centra
 * horizontalmente, mientras el encaje vertical (el que cuida que no se corten
 * las caras en las cabeceras) se respeta tal como está declarado.
 *
 * Acepta los dos valores que se usan en `src/content/`: "60% 40%" y
 * "center 20%". Si viene uno solo, el otro queda al centro.
 */
export function estiloDeEncuadre(imagen: Imagen): CSSProperties | undefined {
  if (!imagen.encuadre) return undefined

  const [x, y = 'center'] = imagen.encuadre.trim().split(/\s+/)
  return { '--encuadre-x': x, '--encuadre-y': y } as CSSProperties
}
