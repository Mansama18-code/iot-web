
import iotLogo from './assets/iot-ing.png';
//import { useState } from 'react'

//import { useRef} from 'react';
//import backGround from './assets/bg-img.png'
import './Nav.css';




const Nav = () => {
  //const [count, setCount] = useState(0)
    
  
    
    return (
      
       <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href='/'><img src={iotLogo} alt="IOT logo" className='iotLogos'/></a>
                <div className="nav-interior">
                    <ul className="nav-links">
                    <li><a href="/" className="activo">Inicio</a></li>
                        {/*<li><a href="#" onClick={(e) => abrirModalProductos(e)}>Productos</a></li> <li><a href="/Proyectos">Proyectos</a></li>*/}
                    
                    <li><a href="/quienes">Quienes Somos</a></li>
                    <li><a href="/contactanos">Contáctanos</a></li>
                        
                        {/*<li><a href="#" onClick={(e) => abrirModal(e, 'ddc')}>Descargas</a></li>
                    <li><a href="#">Carreras</a></li>*/}
                    </ul>
                </div>

                <div>
                    <a className="bg-yellow-400 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-accentOrange hover:bg-brand-accentOrangeHover transition duration-200 shadow-sm" data-purpose="cta-header" href="#contacto">
                        Solicitar cotización
                    </a>
                </div>
            </nav>
        

        
        
    
    )
}

export default Nav;