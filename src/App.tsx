import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import AreasDeAccion from './pages/AreasDeAccion'
import MaterialEducativo from './pages/MaterialEducativo'
import Servicios from './pages/Servicios'
import Alianzas from './pages/Alianzas'
import Transparencia from './pages/Transparencia'
import Colabora from './pages/Colabora'
import Proyectos from './pages/Proyectos'
import DetalleProyecto from './pages/DetalleProyecto'
import NoEncontrada from './pages/NoEncontrada'

/**
 * Rutas del sitio.
 *
 * Se usa BrowserRouter (URLs limpias, sin #). Esto exige que el servidor
 * devuelva index.html para cualquier ruta desconocida; ver public/.htaccess.
 *
 * El sitio cubre ahora todas las secciones que existen en el WordPress
 * actual: las cuatro páginas nuevas más Servicios, Alianzas, Transparencia
 * y Colabora.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="areas-de-accion" element={<AreasDeAccion />} />
        <Route path="material-educativo" element={<MaterialEducativo />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="alianzas" element={<Alianzas />} />
        <Route path="transparencia" element={<Transparencia />} />
        <Route path="colabora" element={<Colabora />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="proyectos/:slug" element={<DetalleProyecto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
