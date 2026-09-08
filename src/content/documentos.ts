import type { DocumentoTransparencia } from '../types/content'
import { cargarIndice } from './indice'

/**
 * Documentos de transparencia.
 *
 * Se leen desde /documentos/index.json, igual que el material educativo:
 * cada año hay un balance y una memoria nuevos, y la fundación tiene que
 * poder publicarlos sin depender de un desarrollador.
 *
 * Esta sección existe porque la fundación recibe fondos públicos (Fondo Vivir
 * Mejor del Ministerio de Desarrollo Social y Familia, y Fondo de Protección
 * Ambiental del Ministerio del Medio Ambiente). Antes de reducirla o quitarla
 * hay que verificar qué obliga a publicar cada convenio.
 */

export const introTransparencia =
  'Publicamos nuestros balances, memorias anuales, estados de resultados y los convenios suscritos con los organismos que financian nuestros proyectos. Todos los documentos están disponibles para su descarga.'

export function cargarDocumentos(signal?: AbortSignal) {
  return cargarIndice<DocumentoTransparencia>('/documentos/index.json', signal)
}

/** Orden en que se muestran las categorías. Las no listadas van al final. */
export const ordenDeCategorias = [
  'Balances',
  'Memorias',
  'Estados de resultados',
  'Convenios',
]

export function agruparPorCategoria(
  documentos: DocumentoTransparencia[],
): [string, DocumentoTransparencia[]][] {
  const grupos = new Map<string, DocumentoTransparencia[]>()

  for (const documento of documentos) {
    const grupo = grupos.get(documento.categoria)
    if (grupo) grupo.push(documento)
    else grupos.set(documento.categoria, [documento])
  }

  return [...grupos.entries()].sort(([a], [b]) => {
    const posA = ordenDeCategorias.indexOf(a)
    const posB = ordenDeCategorias.indexOf(b)
    return (
      (posA === -1 ? ordenDeCategorias.length : posA) -
      (posB === -1 ? ordenDeCategorias.length : posB)
    )
  })
}
