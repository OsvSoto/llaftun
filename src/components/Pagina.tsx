import type { ReactNode } from 'react'
import type { FotoCabecera } from '../types/content'
import DivisorHojas from './DivisorHojas'
import Enredadera from './Enredadera'
import { estiloDeEncuadre } from '../hooks/encuadre'

/**
 * Estructura común de las páginas interiores, con la identidad visual de la
 * página de inicio en versión más breve:
 *
 * - Una cabecera fija bajo el menú, con foto y velo verde (o solo el verde
 *   de la copa, si no hay foto), grano, enredadera y el titular con sombra.
 * - El contenido sube encima como un telón, con la ola en el color de la
 *   hojarasca, y al final se funde hacia el café del pie, sin cortes.
 *
 * El descenso completo por los estratos queda solo para el inicio: aquí el
 * contenido es para leer, y va sobre un fondo claro parejo.
 */
export default function Pagina({
  titulo,
  antetitulo,
  entradilla,
  miga,
  foto,
  children,
}: {
  titulo: string
  antetitulo?: string
  entradilla?: string
  /** Ruta de navegación, en lugar del antetítulo. */
  miga?: ReactNode
  foto?: FotoCabecera
  children: ReactNode
}) {
  return (
    <>
      <header
        className={'cabecera-pagina' + (foto ? '' : ' cabecera-pagina--sin-foto')}
      >
        {foto && (
          <div
            className={
              'cabecera-pagina__foto' +
              (foto.difuminada ? ' cabecera-pagina__foto--difuminada' : '')
            }
          >
            <img
              src={foto.imagen.src}
              srcSet={
                foto.srcGrande
                  ? `${foto.imagen.src} 1280w, ${foto.srcGrande} 2400w`
                  : undefined
              }
              sizes={foto.srcGrande ? '100vw' : undefined}
              // Difuminada ya no se lee como fotografía: es decorativa.
              alt={foto.difuminada ? '' : foto.imagen.alt}
              style={estiloDeEncuadre(foto.imagen)}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        )}

        <div className="cabecera-pagina__velo" aria-hidden="true" />
        <Enredadera className="cabecera-pagina__enredadera" />

        <div className="contenedor cabecera-pagina__contenido">
          {miga}
          {antetitulo && <p className="antetitulo">{antetitulo}</p>}
          <h1>{titulo}</h1>
          {entradilla && (
            <p className="cabecera-pagina__entradilla">{entradilla}</p>
          )}
        </div>
      </header>

      <div className="telon telon--pagina">
        <DivisorHojas />
        <div className="pagina">
          <div className="contenedor">{children}</div>
        </div>
      </div>
    </>
  )
}
