/**
 * Borde ondulado con que el contenido sube sobre la portada o sobre la
 * cabecera de una página (ver `.telon` en global.css).
 *
 * Arriba es transparente, para que la ola se recorte directamente sobre la
 * foto. Se pinta con `currentColor`, así toma el color de lo que viene
 * debajo: el verde oscuro de la copa en el inicio, la hojarasca en las
 * páginas interiores.
 */
export default function DivisorHojas({ className }: { className?: string }) {
  return (
    <svg
      className={`divisor-hojas ${className ?? ''}`.trim()}
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 70 C 240 130 480 20 720 70 C 960 120 1200 20 1440 70 L1440 130 L0 130 Z"
        fill="currentColor"
      />
    </svg>
  )
}
