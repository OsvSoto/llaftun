import {
  introColabora,
  cuentaBancaria,
  botonFlow,
  formularios,
} from '../content/colabora'
import AvisoPendiente from '../components/AvisoPendiente'

/**
 * Colabora.
 *
 * Mantiene las tres modalidades del sitio actual: socio donante, donaciones
 * y voluntariado.
 */
export default function Colabora() {
  return (
    <div className="pagina">
      <div className="contenedor">
        <h1>Colabora con nuestra fundación</h1>
        <p>{introColabora}</p>

        <section className="seccion">
          <h2>Socio donante</h2>
          <p>
            Puedes realizar aportes mensuales a la fundación. Registra tus datos
            en el formulario y nos pondremos en contacto contigo.
          </p>
          {formularios.socioDonante ? (
            <p>
              <a
                className="boton"
                href={formularios.socioDonante}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscríbete aquí
              </a>
            </p>
          ) : (
            <AvisoPendiente>
              falta el enlace correcto del formulario de socio donante. El del
              sitio actual apunta a la página de edición y da error de permisos.
            </AvisoPendiente>
          )}
        </section>

        <section className="seccion">
          <h2>Donaciones</h2>
          <p>
            Puedes realizar una transferencia bancaria indicando en el detalle
            “{cuentaBancaria.glosa}”. Estos son los datos de nuestra cuenta:
          </p>

          <dl className="datos-cuenta">
            <dt>Banco</dt>
            <dd>{cuentaBancaria.banco}</dd>
            <dt>Tipo de cuenta</dt>
            <dd>{cuentaBancaria.tipoCuenta}</dd>
            <dt>Número de cuenta</dt>
            <dd>{cuentaBancaria.numero}</dd>
            <dt>RUT</dt>
            <dd>{cuentaBancaria.rut}</dd>
            <dt>Correo</dt>
            <dd>
              <a href={`mailto:${cuentaBancaria.correo}`}>
                {cuentaBancaria.correo}
              </a>
            </dd>
          </dl>

          <p>
            También puedes aportar a través de Flow, una plataforma segura de
            pago en línea.
          </p>
          <p>
            <a
              className="boton"
              href={botonFlow}
              target="_blank"
              rel="noopener noreferrer"
            >
              Realiza tu donación
            </a>
          </p>
        </section>

        <section className="seccion">
          <h2>Voluntariado</h2>
          <p>
            Puedes inscribirte en nuestro formulario para voluntarias y
            voluntarios, y sumarte a los proyectos en desarrollo que sean de tu
            interés.
          </p>
          {formularios.voluntariado ? (
            <p>
              <a
                className="boton"
                href={formularios.voluntariado}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscríbete aquí
              </a>
            </p>
          ) : (
            <AvisoPendiente>
              falta el enlace correcto del formulario de voluntariado. El del
              sitio actual apunta a la página de edición y da error de permisos.
            </AvisoPendiente>
          )}
        </section>
      </div>
    </div>
  )
}
