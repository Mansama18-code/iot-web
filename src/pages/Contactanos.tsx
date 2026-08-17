import Nav from '../Nav.tsx';
import Footer from '../Footer.tsx';
import Banner from './Bannerx.tsx';
import './Contactanos.css';

//EN ESTE ESPACIO DEBO ASEGURAR LA CONEXIÓN del 
//FORMULARIO CON EL MAIL DE LA EMPRESA PARA QUE LOS MENSAJES DEL FORMULARIO
//SEAN ENVIADOS A LA EMPRESA Y ASÍ RECIBIR LOS MENSAJES DE LOS USUARIOS 
//INTERESADOS EN NUESTROS SERVICIOS. 
//ESTO PUEDE LOGRARSE CON UNA LIBRERÍA DE ENVÍO DE CORREOS O UN BACKEND 
//QUE MANEJE EL ENVÍO DE LOS MENSAJES.

function Contactanos() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      <header className="menu-logo">
        <Nav />
        
      </header>
      <Banner />
      <div>
        <h1 id="titulo-contacto"> Conversemos </h1>
        <div>
          <p id="parrafo1">Si tienes alguna pregunta, comentario o simplemente quieres decir hola, no dudes en contactarnos. Estamos aquí para ayudarte y nos encantaría escuchar de ti.</p>
          <p id="parrafo1">Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
          <div id="formulario-contacto">
            <form id="form-contacto" >
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />

              <label htmlFor="movil">Celular | Teléfono:</label>
              <input type="tel" id="movil" name="movil" required />

              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="servicio">Servicio de interés:</label>
              <select id="servicios" name="servicios">
                <option value="valor">Seleccione un servicio</option>
                <option value="valor1">Automatización Industrial</option>
                <option value="valor2" selected>Conectividad IoT</option>
                <option value="valor3">Análisis de Datos</option>
                <option value="valor4">Soporte Técnico</option>
                <option value="valor5">Diseño y Modelado BIM/VDC</option>
              </select>
              
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <div>
            <h2>Síguenos en nuestra red social:</h2>
            <div>
             
              <a href="https://www.instagram.com/ingenieriaiot/" target="_blank" rel="noopener noreferrer">
                <center>
                  <img src="../src/assets/instagram.svg" alt="Instagram" width="50" height="50" />
                </center>
              </a>
              <br></br>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
}

export default Contactanos;