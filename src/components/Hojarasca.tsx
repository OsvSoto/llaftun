/**
 * Hojarasca: hojas de las cinco especies del bosque esclerófilo que la
 * fundación nombra en su libro "Mis amigos nativos" y en el proyecto FPA
 * 2025: quillay, peumo, litre, maitén y boldo.
 *
 * Están dibujadas, no fotografiadas, por dos razones. La primera es legal:
 * las fotos de banco tienen dueño y este sitio es de una fundación que
 * recibe fondos públicos. La segunda es de diseño: el logotipo ya es dibujo
 * de línea, y una ilustración conversa con él mejor que una fotografía
 * recortada.
 *
 * Marca el paso del sotobosque al suelo del bosque.
 */
export default function Hojarasca({ className }: { className?: string }) {
  return (
    <svg
      className={`hojarasca ${className ?? ''}`.trim()}
      // El lienzo es angosto a propósito: estirado a 1200 unidades, cada hoja
      // quedaba del tamaño de una mota.
      viewBox="0 0 640 112"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Cada hoja se dibuja una vez y se reutiliza con transformaciones.
            La proporción distingue a la especie. */}

        {/* Quillay: pequeña, ovalada, de borde levemente dentado */}
        <g id="hoja-quillay">
          <path
            d="M0 0 C 9 -11 27 -11 36 0 C 27 11 9 11 0 0 Z"
            fill="currentColor"
            fillOpacity="0.24"
          />
          <path d="M0 0 H 36" stroke="currentColor" strokeWidth="1.1" fill="none" />
        </g>

        {/* Peumo: ovalada y ancha, coriácea */}
        <g id="hoja-peumo">
          <path
            d="M0 0 C 10 -15 32 -15 44 0 C 32 15 10 15 0 0 Z"
            fill="currentColor"
            fillOpacity="0.24"
          />
          <path d="M0 0 H 44" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </g>

        {/* Litre: obovada, más ancha hacia la punta */}
        <g id="hoja-litre">
          <path
            d="M0 0 C 6 -9 24 -16 40 0 C 24 16 6 9 0 0 Z"
            fill="currentColor"
            fillOpacity="0.24"
          />
          <path d="M0 0 H 40" stroke="currentColor" strokeWidth="1.1" fill="none" />
        </g>

        {/* Maitén: lanceolada, larga y fina */}
        <g id="hoja-maiten">
          <path
            d="M0 0 C 12 -7 38 -7 52 0 C 38 7 12 7 0 0 Z"
            fill="currentColor"
            fillOpacity="0.24"
          />
          <path d="M0 0 H 52" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>

        {/* Boldo: ovalada y rígida, de nervadura marcada */}
        <g id="hoja-boldo">
          <path
            d="M0 0 C 9 -13 29 -13 38 0 C 29 13 9 13 0 0 Z"
            fill="currentColor"
            fillOpacity="0.24"
          />
          <path d="M0 0 H 38" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path
            d="M12 0 l 6 -6 M20 0 l 6 -6 M12 0 l 6 6 M20 0 l 6 6"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
        </g>
      </defs>

      <g stroke="currentColor" strokeLinecap="round">
        <use href="#hoja-quillay" transform="translate(26 42) rotate(-24)" />
        <use href="#hoja-maiten" transform="translate(104 84) rotate(14)" />
        <use href="#hoja-boldo" transform="translate(198 38) rotate(-9)" />
        <use href="#hoja-peumo" transform="translate(276 86) rotate(27)" />
        <use href="#hoja-litre" transform="translate(370 44) rotate(-33)" />
        <use href="#hoja-quillay" transform="translate(452 82) rotate(7)" />
        <use href="#hoja-maiten" transform="translate(516 40) rotate(-17)" />
        <use href="#hoja-peumo" transform="translate(578 78) rotate(20)" />
      </g>
    </svg>
  )
}
