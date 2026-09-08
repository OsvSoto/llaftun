import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Página no encontrada</h1>
        <p>
          La dirección que buscas no existe o cambió de lugar. Puedes volver al{' '}
          <Link to="/">inicio</Link> y seguir desde ahí.
        </p>
      </div>
    </div>
  )
}
