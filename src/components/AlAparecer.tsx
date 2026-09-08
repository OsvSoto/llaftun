import type { ReactNode } from 'react'
import useEnPantalla from '../hooks/useEnPantalla'

/**
 * Envuelve contenido que debe aparecer con una transición suave cuando entra
 * en pantalla, en vez de estar ahí desde el primer render. Usar con cuidado:
 * es para reforzar el recorrido de la página, no para retrasar contenido que
 * el visitante necesita ver de inmediato (portada, navegación).
 */
export default function AlAparecer({
  children,
  className,
  retraso = 0,
}: {
  children: ReactNode
  className?: string
  /** Retraso en milisegundos, para escalonar varios elementos seguidos. */
  retraso?: number
}) {
  const { ref, visible } = useEnPantalla<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`aparece ${visible ? 'aparece--visible' : ''} ${className ?? ''}`.trim()}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
    >
      {children}
    </div>
  )
}
