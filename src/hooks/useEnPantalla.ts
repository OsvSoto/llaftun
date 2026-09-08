import { useEffect, useRef, useState } from 'react'

/**
 * Detecta cuándo un elemento entra en el viewport, para animar su aparición
 * al hacer scroll en vez de mostrar todo de golpe. Se activa una sola vez:
 * una vez visto, el elemento se queda visible aunque se vuelva a scrollear
 * hacia arriba.
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
      { threshold: 0.01, rootMargin: '0px 0px 120px 0px' },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return { ref, visible }
}
