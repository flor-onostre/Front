import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
      <grid className="footer">
        <h3 className="titulo">Sobre Nosotros</h3>
          <p>
            Buscamos que puedas comer rico y saludable sin que afecte tu salud y respetando tus elecciones de alimentación.
          </p>
          <div className="links">
            <div className="enlaces">
              <h3>Enlaces Utiles</h3>
              <ul className="listaEnlaces">
                <li className="listItem">
                  <a href="" className='aenlaces'>Contacto</a>
                </li>
                <li className="listItem">
                  <a href="" className='aenlaces'>Terminos y condiciones</a>
                </li>
              </ul>
            </div>
            <div className="redes">
              <h3>Redes Sociales</h3>
              <ul className="listaEnlacesRedes">
              <li className="listItem">
                  <a href="" className='aicono'>
                    <FontAwesomeIcon icon={faInstagram} className="icono" />
                  </a>
                </li>
                <li className="listItem">
                  <a href="" className='aicono'>
                    <FontAwesomeIcon icon={faTwitter} className="icono" />
                  </a>
                </li>
                <li className="listItem">
                  <a href="" className='aicono'>
                    <FontAwesomeIcon icon={faFacebook} className="icono" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contmensaje">
            <p className="mensaje">&copy; 2024 Recetas para todos. Todos los derechos reservados.</p>
          </div>
      </grid>
    );
}

export default Footer;