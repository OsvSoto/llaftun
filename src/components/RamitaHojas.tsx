/**
 * Ramita de hojas: litre y peumo en miniatura, para acompañar el título de
 * una tarjeta. Mismas curvas que Enredadera y Hojarasca, a otra escala.
 * Se dibuja con `currentColor`.
 */
export default function RamitaHojas({ className }: { className?: string }) {
  return (
    <svg
      className={`ramita-hojas ${className ?? ''}`.trim()}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeLinecap="round">
        <g transform="translate(6 32) rotate(-30) scale(0.55)">
          <path d="M0 0 C 6 -9 24 -16 40 0 C 24 16 6 9 0 0 Z" fill="currentColor" fillOpacity="0.24" stroke="currentColor" strokeWidth="1.6" />
          <path d="M0 0 H40" stroke="currentColor" strokeWidth="1.2" />
        </g>
        <g transform="translate(10 30) rotate(10) scale(0.55)">
          <path d="M0 0 C 10 -15 32 -15 44 0 C 32 15 10 15 0 0 Z" fill="currentColor" fillOpacity="0.24" stroke="currentColor" strokeWidth="1.6" />
          <path d="M0 0 H44" stroke="currentColor" strokeWidth="1.2" />
        </g>
      </g>
    </svg>
  )
}
