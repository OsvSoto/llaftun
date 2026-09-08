/**
 * Marca visible de contenido que la fundación aún no entrega.
 *
 * Existe para que los vacíos se vean durante la revisión en vez de pasar
 * inadvertidos. Antes de publicar el sitio no debería quedar ninguno:
 * buscar "AvisoPendiente" y "PENDIENTE" en el proyecto.
 */
export default function AvisoPendiente({ children }: { children: string }) {
  return (
    <p className="pendiente">
      <strong>Falta contenido:</strong> {children}
    </p>
  )
}
