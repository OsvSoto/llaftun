/**
 * Carga de índices en tiempo de ejecución.
 *
 * El material educativo y los documentos de transparencia no se compilan
 * dentro del bundle: se leen desde un JSON servido estáticamente. Así la
 * fundación puede subir un PDF por FTP y agregar una entrada al índice, sin
 * recompilar ni desplegar el sitio.
 *
 * Son las dos secciones que crecen solas con el tiempo —cada año hay un
 * balance nuevo, cada proyecto deja material nuevo—, y son las únicas que
 * justifican este tratamiento.
 */
export async function cargarIndice<T>(
  ruta: string,
  signal?: AbortSignal,
): Promise<T[]> {
  const respuesta = await fetch(ruta, { signal })
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${ruta} (HTTP ${respuesta.status}).`)
  }

  const datos: unknown = await respuesta.json()
  if (!Array.isArray(datos)) {
    throw new Error(`El índice ${ruta} no tiene el formato esperado.`)
  }

  return datos as T[]
}
