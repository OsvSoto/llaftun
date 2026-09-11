/**
 * Hongos del pie de página: un racimo de 4, de distinto tamaño, en la
 * esquina inferior derecha. El pie ya es el color tierra del sitio (el
 * "subsuelo" del recorrido del logo), así que es donde más sentido tiene
 * verlos crecer, en vez de en el divisor entre secciones.
 */
export default function HongosPie({ className }: { className?: string }) {
  return (
    <svg
      className={`hongos-pie ${className ?? ''}`.trim()}
      viewBox="0 0 160 90"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--cafe)" strokeLinecap="round">
        <g transform="translate(30 82) scale(2)">
          <path d="M-2 0 L-2.6 14 L2.6 14 L2 0 Z" fill="var(--cafe-claro)" strokeWidth="0.9" />
          <path d="M-9 0 C -9 -9 9 -9 9 0 C 5 -2 -5 -2 -9 0 Z" fill="var(--cafe-claro)" strokeWidth="1.2" />
          <g strokeWidth="0.7">
            <path d="M-6 -1 L-5 -3" />
            <path d="M-3 -1.5 L-2.5 -4" />
            <path d="M0 -1.5 L0 -4.5" />
            <path d="M3 -1.5 L2.5 -4" />
            <path d="M6 -1 L5 -3" />
          </g>
        </g>
        <g transform="translate(68 84) scale(2.75)">
          <path d="M-2 0 L-2.6 14 L2.6 14 L2 0 Z" fill="var(--cafe-claro)" strokeWidth="0.7" />
          <path d="M-9 0 C -9 -9 9 -9 9 0 C 5 -2 -5 -2 -9 0 Z" fill="var(--cafe-claro)" strokeWidth="0.9" />
          <g strokeWidth="0.55">
            <path d="M-6 -1 L-5 -3" />
            <path d="M-3 -1.5 L-2.5 -4" />
            <path d="M0 -1.5 L0 -4.5" />
            <path d="M3 -1.5 L2.5 -4" />
            <path d="M6 -1 L5 -3" />
          </g>
        </g>
        <g transform="translate(110 80) scale(2.25)">
          <path d="M-2 0 L-2.6 14 L2.6 14 L2 0 Z" fill="var(--cafe-claro)" strokeWidth="0.8" />
          <path d="M-9 0 C -9 -9 9 -9 9 0 C 5 -2 -5 -2 -9 0 Z" fill="var(--cafe-claro)" strokeWidth="1" />
          <g strokeWidth="0.6">
            <path d="M-6 -1 L-5 -3" />
            <path d="M-3 -1.5 L-2.5 -4" />
            <path d="M0 -1.5 L0 -4.5" />
            <path d="M3 -1.5 L2.5 -4" />
            <path d="M6 -1 L5 -3" />
          </g>
        </g>
        <g transform="translate(140 86) scale(2)">
          <path d="M-2 0 L-2.6 14 L2.6 14 L2 0 Z" fill="var(--cafe-claro)" strokeWidth="1.1" />
          <path d="M-9 0 C -9 -9 9 -9 9 0 C 5 -2 -5 -2 -9 0 Z" fill="var(--cafe-claro)" strokeWidth="1.4" />
          <g strokeWidth="0.85">
            <path d="M-6 -1 L-5 -3" />
            <path d="M-3 -1.5 L-2.5 -4" />
            <path d="M0 -1.5 L0 -4.5" />
            <path d="M3 -1.5 L2.5 -4" />
            <path d="M6 -1 L5 -3" />
          </g>
        </g>
      </g>
    </svg>
  )
}
