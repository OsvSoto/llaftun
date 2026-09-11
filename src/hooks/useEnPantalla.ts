import { useEffect, useRef, useState } from 'react'

/**
 * Detecta cuándo un elemento entra en el viewport, para animar su aparición
 * al hacer scroll en vez de mostrar todo de golpe. Se activa una sola vez:
 * una vez visto, el elemento se queda visible aunque se vuelva a scrollear
 * hacia arriba.
 *
 * Se dispara apenas antes de que el elemento asome por abajo (5% del alto de
 * la ventana): así nunca se ve un hueco vacío esperando, pero la animación
 * todavía ocurre a la vista. Antes se adelantaba 120px y el movimiento
 * terminaba casi entero fuera de pantalla.
 */
export default function useEnPantalla<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px 5% 0px' },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return { ref, visible }
}
