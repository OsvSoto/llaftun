import type { CSSProperties, ReactNode } from 'react'
import useEnPantalla from '../hooks/useEnPantalla'

/**
 * Envuelve contenido que debe aparecer con una transición suave cuando entra
 * en pantalla, en vez de estar ahí desde el primer render. Usar con cuidado:
 * es para reforzar el recorrido de la página, no para retrasar contenido que
 * el visitante necesita ver de inmediato (portada, navegación).
 *
 * Con `escalonado`, el envoltorio no se mueve: entran sus hijos directos uno
 * después del otro (antetítulo, título, texto), y un <h2> hijo directo sube
 * desde una máscara en vez de aparecer con fundido. Como el envoltorio es el
 * que recibe `className`, puede ser la grilla misma y escalonar sus celdas.
 */
export default function AlAparecer({
  children,
  className,
  retraso = 0,
  escalonado = false,
}: {
  children: ReactNode
  className?: string
  /** Retraso en milisegundos, para escalonar varios elementos seguidos. */
  retraso?: number
  escalonado?: boolean
}) {
  const { ref, visible } = useEnPantalla<HTMLDivElement>()

  const clases = [
    escalonado ? 'aparece-hijos' : 'aparece',
    visible && 'aparece--visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={ref}
      className={clases}
      style={retraso ? ({ '--retraso': `${retraso}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
