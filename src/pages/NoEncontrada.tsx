import { Link } from 'react-router-dom'
import Pagina from '../components/Pagina'

export default function NoEncontrada() {
  return (
    <Pagina titulo="Página no encontrada">
      <p>
        La dirección que buscas no existe o cambió de lugar. Puedes volver al{' '}
        <Link to="/">inicio</Link> y seguir desde ahí.
      </p>
    </Pagina>
  )
}
