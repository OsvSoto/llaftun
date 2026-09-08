import { useEffect, useState } from 'react'
import { cargarMateriales, videos } from '../content/materiales'
import { sitio } from '../content/sitio'
import type { MaterialEducativo as Material } from '../types/content'
import Figura from '../components/Figura'
import Icono from '../components/Icono'

type Estado =
  | { fase: 'cargando' }
  | { fase: 'listo'; materiales: Material[] }
  | { fase: 'error'; mensaje: string }

export default function MaterialEducativo() {
  const [estado, setEstado] = useState<Estado>({ fase: 'cargando' })

  useEffect(() => {
    const control = new AbortController()

    cargarMateriales(control.signal)
      .then((materiales) => setEstado({ fase: 'listo', materiales }))
      .catch((error: unknown) => {
        if (control.signal.aborted) return
        setEstado({
          fase: 'error',
          mensaje:
            error instanceof Error ? error.message : 'Error desconocido.',
        })
      })

    return () => control.abort()
  }, [])

  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Material educativo</h1>

        <Figura descripcionFaltante="estudiantes revisando los materiales pedagógicos" />

        <p>
          Compartimos de forma libre y gratuita el material pedagógico que
          hemos desarrollado en nuestros proyectos de educación ambiental.
          Puedes descargarlo, imprimirlo y usarlo en tu escuela o comunidad.
        </p>

        <section className="seccion">
          <h2>Descargas</h2>

          {estado.fase === 'cargando' && <p>Cargando material…</p>}

          {estado.fase === 'error' && (
            <p role="alert">
              No pudimos cargar el listado de material en este momento.
              Inténtalo más tarde.
            </p>
          )}

          {estado.fase === 'listo' && (
            <ul className="descargas">
              {estado.materiales.map((material) => (
                <li key={material.id} className="descarga">
                  <a
                    className="descarga__enlace"
                    href={material.archivo}
                    download
                  >
                    {material.titulo}
                  </a>{' '}
                  {material.peso && (
                    <span className="descarga__peso">
                      (PDF, {material.peso})
                    </span>
                  )}
                  <p>{material.descripcion}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="seccion">
          <h2>Videos</h2>
          <p>
            Estos y más videos de nuestros proyectos están en nuestro{' '}
            <a
              href={sitio.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              canal de YouTube
            </a>
            .
          </p>

          <div className="grilla">
            {videos.map((video) => (
              <div key={video.id}>
                <iframe
                  src={video.urlEmbed}
                  title={video.titulo}
                  allowFullScreen
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '16 / 9', border: 0 }}
                />
                <h3>{video.titulo}</h3>
                {video.descripcion && <p>{video.descripcion}</p>}
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.75rem' }}>
            <a
              href={sitio.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos los videos en YouTube <Icono tipo="flecha-derecha" />
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
