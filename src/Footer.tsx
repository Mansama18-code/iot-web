import iotLogo from './assets/iot-ing.png'
import fb from './assets/fb.png'
import wa from './assets/wa.png'
import ig from './assets/ig.png'
import yt from './assets/yt.png'

import './Footer.css'

const Footer = () => {
  //const [count, setCount] = useState(0)

  return (
    
        <div className="backColor">{/*
            <div className='mainFoot'>
                <div className="subMainFoot firstFoot"> 
                    
                  <span><b>SÍGUENOS EN: </b></span>
                    <div className='redes'>
                        <img className="imgSize" src={fb} alt="logo redes"/>
                        <img className="imgSize"  src={wa} alt="logo redes"/>
                        <img className="imgSize"  src={ig} alt="logo redes"/>
                        <img className="imgSize"  src={yt} alt="logo redes"/>
                    </div>*
                </div>
                
             
                  <div className="subMainFoot">
                      <h3> ESTÁ ACTUALIZADO</h3>
                      <br></br>
                      <span>Suscríbete a nuestro boletín</span>
                      <input type="text" placeholder='Ingresa tu correo' />
                      <button>SUSCRIBIRSE</button>
                  </div>
            </div>*/}
            
          <div className='mainFoot2'>
              <ul className='ulFoot'>
                    <li><a href='/Contactanos' className='yButton'>CONTÁCTANOS</a></li> 
                    <li><a href='/quienes'>QUIENES SOMOS</a></li>
                    <li><a href='/Servicios'>SERVICIOS</a></li>
                    <li><a href='/Proyectos'>PROYECTOS</a></li>
                    
                </ul>
                
                <img src={iotLogo} alt="logo redes" className='iotLogos'/>
          </div>
          <div className="mainFoot2">
                    {/*<h3><b>SOBRE NOSOTROS</b></h3>*/}
            
                <p className='copyright'>© 2026 Ingeniería IOT. Todos los derechos reservados.</p> 
            
                    
               
          </div>
        
        </div>
        
    
    )
}

export default Footer;