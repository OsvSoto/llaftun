/**
 * Enredadera: motivo decorativo de fondo para la portada.
 *
 * Las hojas, frutos/flores y el zarcillo se definen UNA vez en <defs> y se
 * reusan con <use> -mismo truco que Hojarasca.tsx-, así que cambiar una
 * forma la cambia en toda la enredadera a la vez.
 *
 * A propósito NO es simétrica ni repetitiva: una enredadera de verdad no
 * crece en nudos parejos con la misma hoja siempre en el mismo ángulo. Cada
 * punto de la rama tiene su propia mezcla -una hoja sola, un par, un racimo
 * de frutos sin hoja al lado, un zarcillo enroscado- y el tallo mismo se
 * tuerce de forma irregular, no en una curva perfecta.
 *
 * Se dibuja con `currentColor` (ver `.portada-inmersiva__enredadera` en
 * global.css), salvo los frutos/flores, que llevan su propio color fijo.
 * Solo aparece en pantallas anchas: en celular la foto necesita todo el
 * ancho.
 *
 * Corre solo por los dos bordes de la portada, nunca por el medio: ahí se
 * leía como un elemento de diseño más que como una enredadera de verdad.
 *
 * `preserveAspectRatio="none"`, a propósito: con `meet` o `slice` el dibujo
 * se recentra o se recorta distinto según la proporción real del hero en
 * cada ancho de pantalla, y como esa proporción cambia bastante (el hero se
 * hace más alto o más bajo según cuántas líneas ocupe el titular), las hojas
 * de los bordes terminaban corriéndose hacia el centro o desapareciendo por
 * fuera de la pantalla en algunos anchos. `none` estira los dos ejes de
 * forma independiente para calzar siempre con el tamaño real del hero, así
 * los bordes quedan siempre pegados a los bordes -a costa de una distorsión
 * mínima de las hojas, que no se nota a simple vista.
 */
export default function Enredadera({ className }: { className?: string }) {
  return (
    <svg
      className={`enredadera ${className ?? ''}`.trim()}
      viewBox="0 0 1440 560"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <g id="hoja-litre" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M0 0 C 6 -9 24 -16 40 0 C 24 16 6 9 0 0 Z" fill="currentColor" fillOpacity="0.46" />
          <path d="M0 0 H40" />
        </g>
        <g id="hoja-peumo" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M0 0 C 10 -15 32 -15 44 0 C 32 15 10 15 0 0 Z" fill="currentColor" fillOpacity="0.48" />
          <path d="M0 0 H44" />
        </g>
        {/* Racimo de frutos del peumo, colgando en grupo apretado. */}
        <g id="frutos-peumo">
          <circle cx="0" cy="2" r="2.4" fill="#e0567e" />
          <circle cx="4" cy="6" r="2.1" fill="#e0567e" />
          <circle cx="-3" cy="7" r="2" fill="#e0567e" />
          <circle cx="1" cy="11" r="2.2" fill="#e0567e" />
          <circle cx="-4" cy="12" r="1.7" fill="#e0567e" />
        </g>
        {/* Racimo de florcitas del litre, mismo criterio, más chico. */}
        <g id="flores-litre">
          <circle cx="0" cy="1" r="1.5" fill="#f0d878" />
          <circle cx="3" cy="4" r="1.8" fill="#f0d878" />
          <circle cx="-2" cy="5" r="2" fill="#f0d878" />
          <circle cx="1" cy="8" r="1.8" fill="#f0d878" />
        </g>
        {/* Zarcillo: el rulo con el que la enredadera se sujeta para trepar.
            Dos curvas en forma de espiral chica, sin relleno. */}
        <g id="zarcillo" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round">
          <path d="M0 0 Q 11 -5 9 7 Q 7 16 -4 11 Q -11 8 -7 -1" />
        </g>
      </defs>

      {/* ============ BORDE IZQUIERDO: junto al titular ============ */}
      <path
        d="M22 -10 C 6 28 50 52 26 92 C 8 124 48 150 28 196 C 10 230 44 254 24 298 C 8 330 40 352 22 392"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* hoja sola, apenas bajando del borde */}
      <g transform="translate(24 18) rotate(-35)">
        <use href="#hoja-litre" transform="scale(0.8)" />
      </g>

      {/* peumo con su florcita, sin par */}
      <g transform="translate(30 92)">
        <use href="#hoja-peumo" transform="rotate(18)" />
        <g transform="translate(2 12)">
          <use href="#flores-litre" />
        </g>
      </g>

      {/* zarcillo enroscado, sin hoja al lado */}
      <use href="#zarcillo" transform="translate(14 150) rotate(20) scale(1.3)" />

      {/* par litre + peumo, abriéndose parejo desde el mismo punto */}
      <g transform="translate(28 196)">
        <use href="#hoja-litre" transform="rotate(-25) scale(0.9)" />
        <use href="#hoja-peumo" transform="rotate(30) scale(0.75)" />
      </g>

      {/* racimo de frutos solo, sin hoja: cuelga directo de la rama */}
      <g transform="translate(20 250)">
        <use href="#frutos-peumo" transform="scale(1.2)" />
      </g>

      {/* hoja grande, apuntando hacia atrás */}
      <g transform="translate(24 298) rotate(205)">
        <use href="#hoja-litre" transform="scale(1.05)" />
      </g>

      {/* último brote, chico, cerca del botón */}
      <g transform="translate(22 392) rotate(40)">
        <use href="#hoja-peumo" transform="scale(0.55)" />
      </g>

      {/* ============ BORDE DERECHO ============ */}
      <path
        d="M1416 -10 C 1432 26 1394 50 1414 90 C 1432 122 1396 148 1414 190 C 1432 222 1398 246 1416 288 C 1432 320 1400 344 1418 384 C 1432 414 1402 438 1416 470"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <g transform="translate(1414 16) rotate(160)">
        <use href="#hoja-peumo" transform="scale(0.85)" />
      </g>

      <g transform="translate(1408 90)">
        <use href="#hoja-litre" transform="rotate(-150) scale(0.95)" />
        <use href="#hoja-peumo" transform="rotate(-195) scale(0.7)" />
        <g transform="translate(-4 12)">
          <use href="#frutos-peumo" />
        </g>
      </g>

      <use href="#zarcillo" transform="translate(1434 148) rotate(-30) scale(1.15)" />

      <g transform="translate(1412 190) rotate(-165)">
        <use href="#hoja-peumo" transform="scale(1.1)" />
      </g>

      <g transform="translate(1420 250)">
        <use href="#flores-litre" transform="scale(1.4)" />
      </g>

      <g transform="translate(1414 288) rotate(-140)">
        <use href="#hoja-litre" transform="scale(0.7)" />
        <use href="#hoja-peumo" transform="rotate(35) scale(0.6)" />
      </g>

      <g transform="translate(1418 384) rotate(-200)">
        <use href="#hoja-peumo" transform="scale(0.6)" />
        <g transform="translate(3 10)">
          <use href="#frutos-peumo" transform="scale(0.85)" />
        </g>
      </g>
    </svg>
  )
}
