import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { sitio } from '../content/sitio'
import Icono from './Icono'
import HongosPie from './HongosPie'

const enlaces = [
  { a: '/', texto: 'Inicio' },
  { a: '/material-educativo', texto: 'Material educativo' },
  { a: '/servicios', texto: 'Servicios' },
  { a: '/alianzas', texto: 'Alianzas' },
]

/* Quiénes somos, Áreas de acción y Proyectos van juntas bajo un solo
   desplegable ("Conoce la fundación"): las tres presentan a la fundación y
   su trabajo, y separadas dejaban el menú con siete enlaces al mismo nivel,
   demasiado cargado. */
const enlacesFundacion = [
  { a: '/quienes-somos', texto: 'Quiénes somos' },
  { a: '/areas-de-accion', texto: 'Áreas de acción' },
  { a: '/proyectos', texto: 'Proyectos' },
]

/**
 * Al cambiar de página, vuelve arriba y mueve el foco al contenido, para que
 * quien navega con teclado o lector de pantalla empiece a leer la página nueva
 * y no siga donde estaba.
 *
 * `preventScroll` es imprescindible: sin él, `focus()` arrastra el <main> hasta
 * el borde superior de la ventana, lo que deja la cabecera fuera de vista y se
 * ve como si la página se deslizara sola hacia abajo al cambiar de sección.
 */
function useReinicioDeNavegacion() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById('contenido')?.focus({ preventScroll: true })
  }, [pathname])
}

/**
 * Publica el alto real de la cabecera como `--alto-cabecera`, para que la
 * portada a pantalla completa ocupe justo lo que queda de la ventana y se
 * fije bajo la cabecera. Se mide en vez de fijarlo porque cambia con el
 * ancho: el logo escala y el menú puede pasar a dos líneas.
 */
function useAltoCabecera() {
  useEffect(() => {
    const cabecera = document.querySelector<HTMLElement>('.cabecera')
    if (!cabecera) return
    const observador = new ResizeObserver(([entrada]) => {
      document.documentElement.style.setProperty(
        '--alto-cabecera',
        `${entrada.borderBoxSize[0].blockSize}px`,
      )
    })
    observador.observe(cabecera)
    return () => observador.disconnect()
  }, [])
}

export default function Layout() {
  useReinicioDeNavegacion()
  useAltoCabecera()
  const { pathname } = useLocation()
  const enSeccionFundacion = enlacesFundacion.some((enlace) =>
    pathname.startsWith(enlace.a),
  )

  return (
    <div className="sitio">
      <a className="saltar-al-contenido" href="#contenido">
        Ir al contenido
      </a>

      <header className="cabecera">
        <div className="contenedor cabecera__interior">
          <NavLink to="/" className="cabecera__marca">
            <img
              className="cabecera__logo"
              src="/img/logo-llaftun.jpg"
              srcSet="/img/logo-llaftun-small.jpg 377w, /img/logo-llaftun.jpg 768w"
              sizes="180px"
              alt="Fundación Llaftun"
              width={768}
              height={424}
            />
          </NavLink>
          <nav className="navegacion" aria-label="Navegación principal">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'activo' : undefined)}
            >
              Inicio
            </NavLink>

            {/* Sin JavaScript: se abre con :hover y con :focus-within, así
                también funciona navegando con teclado. En touch, un primer
                toque lo abre (como un :hover normal en móvil) y un segundo
                toque sigue el enlace. */}
            <div className="navegacion__desplegable">
              <button
                type="button"
                className={enSeccionFundacion ? 'activo' : undefined}
              >
                Conoce la fundación
                <Icono tipo="chevron-derecha" className="navegacion__flecha" />
              </button>
              <div className="navegacion__submenu">
                {enlacesFundacion.map((enlace) => (
                  <NavLink
                    key={enlace.a}
                    to={enlace.a}
                    className={({ isActive }) =>
                      isActive ? 'activo' : undefined
                    }
                  >
                    {enlace.texto}
                  </NavLink>
                ))}
              </div>
            </div>

            {enlaces.slice(1).map((enlace) => (
              <NavLink
                key={enlace.a}
                to={enlace.a}
                className={({ isActive }) => (isActive ? 'activo' : undefined)}
              >
                {enlace.texto}
              </NavLink>
            ))}
            {/* Colabora va aparte y destacado: es la única acción que el sitio
                le pide al visitante, y entre ocho enlaces iguales se perdería. */}
            <NavLink to="/colabora" className="navegacion__destacado">
              Colabora
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="contenido" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="pie">
        <HongosPie className="pie__hongos" />
        <div className="contenedor pie__columnas">
          <div>
            <h2>{sitio.nombre}</h2>
            <p>{sitio.bajada}</p>
            <p>
              {sitio.contacto.direccion}, {sitio.contacto.comuna}
            </p>
          </div>
          <div>
            <h2>Contacto</h2>
            <p>
              <a href={`mailto:${sitio.contacto.correoGeneral}`}>
                {sitio.contacto.correoGeneral}
              </a>
            </p>
            <p>
              <a
                className="pie__enlace-social"
                href={sitio.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icono tipo="instagram" />
                Síguenos en Instagram
              </a>
            </p>
            <p>
              <a
                className="pie__enlace-social"
                href={sitio.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icono tipo="youtube" />
                Nuestro canal de YouTube
              </a>
            </p>
          </div>
          <div>
            <h2>Institucional</h2>
            {/* Transparencia vive en el pie y no en el menú: es una página de
                consulta, no parte del recorrido de quien llega al sitio. */}
            <p>
              <NavLink to="/transparencia">Transparencia</NavLink>
            </p>
            <p>
              <NavLink to="/colabora">Colabora</NavLink>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
