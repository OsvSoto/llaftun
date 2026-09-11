import { useEffect, useState } from 'react'
import {
  introTransparencia,
  cargarDocumentos,
  agruparPorCategoria,
} from '../content/documentos'
import type { DocumentoTransparencia } from '../types/content'
import Pagina from '../components/Pagina'
import AlAparecer from '../components/AlAparecer'

type Estado =
  | { fase: 'cargando' }
  | { fase: 'listo'; documentos: DocumentoTransparencia[] }
  | { fase: 'error' }

/**
 * Transparencia. Sin foto en la cabecera, solo el verde: es una página de
 * consulta de documentos, y conviene que se vea sobria.
 */
export default function Transparencia() {
  const [estado, setEstado] = useState<Estado>({ fase: 'cargando' })

  useEffect(() => {
    const control = new AbortController()

    cargarDocumentos(control.signal)
      .then((documentos) => setEstado({ fase: 'listo', documentos }))
      .catch(() => {
        if (!control.signal.aborted) setEstado({ fase: 'error' })
      })

    return () => control.abort()
  }, [])

  return (
    <Pagina
      antetitulo="Institucional"
      titulo="Transparencia"
      entradilla={introTransparencia}
    >
      {estado.fase === 'cargando' && <p>Cargando documentos…</p>}

      {estado.fase === 'error' && (
        <p role="alert">
          No pudimos cargar el listado de documentos en este momento.
          Inténtalo más tarde.
        </p>
      )}

      {estado.fase === 'listo' &&
        agruparPorCategoria(estado.documentos).map(
          ([categoria, documentos]) => (
            <section className="seccion" key={categoria}>
              <AlAparecer escalonado>
                <h2>{categoria}</h2>
                <ul className="descargas">
                  {documentos.map((documento) => (
                    <li key={documento.id} className="descarga">
                      <a
                        className="descarga__enlace"
                        href={documento.archivo}
                        download
                      >
                        {documento.titulo}
                      </a>{' '}
                      {documento.peso && (
                        <span className="descarga__peso">
                          (PDF, {documento.peso})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </AlAparecer>
            </section>
          ),
        )}
    </Pagina>
  )
}
