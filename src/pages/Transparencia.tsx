import { useEffect, useState } from 'react'
import {
  introTransparencia,
  cargarDocumentos,
  agruparPorCategoria,
} from '../content/documentos'
import type { DocumentoTransparencia } from '../types/content'

type Estado =
  | { fase: 'cargando' }
  | { fase: 'listo'; documentos: DocumentoTransparencia[] }
  | { fase: 'error' }

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
    <div className="pagina">
      <div className="contenedor">
        <h1>Transparencia</h1>
        <p>{introTransparencia}</p>

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
              </section>
            ),
          )}
      </div>
    </div>
  )
}
