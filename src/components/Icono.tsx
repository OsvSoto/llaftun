const trazos = {
  'chevron-izquierda': 'M15 5 L8 12 L15 19',
  'chevron-derecha': 'M9 5 L16 12 L9 19',
  'flecha-derecha': 'M4 12 H17 M12 6 L18 12 L12 18',
} as const

type Tipo = keyof typeof trazos | 'instagram' | 'youtube'

/**
 * Un solo estilo de ícono para todo el sitio: trazo simple en currentColor,
 * del mismo grosor que las hojas de Hojarasca y las raíces del logo. Antes
 * cada lugar usaba su propio carácter (‹ › →), que se ve distinto según la
 * fuente y el sistema operativo del visitante.
 *
 * Instagram y YouTube son la excepción: van dibujados en línea, como el
 * resto, pero conservan su forma reconocible (la cámara, el botón de play)
 * para que se identifiquen de un vistazo en el pie de página.
 */
export default function Icono({
  tipo,
  className,
}: {
  tipo: Tipo
  className?: string
}) {
  const claseCompleta = `icono ${className ?? ''}`.trim()

  if (tipo === 'instagram') {
    return (
      <svg
        className={claseCompleta}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3.2"
          y="3.2"
          width="17.6"
          height="17.6"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
      </svg>
    )
  }

  if (tipo === 'youtube') {
    return (
      <svg
        className={claseCompleta}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="2.5"
          y="5.5"
          width="19"
          height="13"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M10.3 9 L15.4 12 L10.3 15 Z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      className={claseCompleta}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={trazos[tipo]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
