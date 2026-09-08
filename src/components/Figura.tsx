import { useState } from 'react'
import type { Imagen } from '../types/content'

/**
 * Muestra una imagen del contenido, o un marcador si todavía no existe.
 *
 * El marcador deja explícito qué fotografía hay que conseguir, en vez de
 * dejar un hueco silencioso en el diseño.
 *
 * Si el archivo está declarado en el contenido pero todavía no se ha subido,
 * también aparece el marcador en vez del ícono de imagen rota del navegador.
 * Así los archivos se pueden ir dejando en `public/img/` de a poco: en cuanto
 * uno existe, se muestra solo, sin tocar el código.
 */
export default function Figura({
  imagen,
  descripcionFaltante,
  className,
}: {
  imagen?: Imagen
  descripcionFaltante: string
  className?: string
}) {
  const [falló, setFalló] = useState(false)

  if (!imagen || falló) {
    return (
      <div className={`marcador-imagen ${className ?? ''}`.trim()}>
        Falta imagen: {descripcionFaltante}
      </div>
    )
  }

  return (
    <img
      className={className}
      src={imagen.src}
      alt={imagen.alt}
      loading="lazy"
      decoding="async"
      onError={() => setFalló(true)}
    />
  )
}
