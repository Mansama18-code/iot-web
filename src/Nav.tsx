//import { useState } from 'react'
import iotLogo from './assets/iot-ing.png';
//import { useRef} from 'react';
//import backGround from './assets/bg-img.png'
import './Nav.css';

import Headers from './headers/Headers.tsx';


const Nav = () => {
  //const [count, setCount] = useState(0)
    
    
    return (
      
        
    
        <header className="menu-logo">
            
            <nav>
                <a href='/'><img src={iotLogo} alt="IOT logo" className='iotLogos'/></a>
                <ul className='ulNav'>
                    <li><a href='/pages/Home'>INICIO</a></li>
                    <li><a href='/pages/quienes'>QUIENES SOMOS</a></li>
                    <li><a href='/pages/Servicios'>SERVICIOS</a></li>
                    <li><a href='/pages/Proyectos'>PROYECTOS</a></li>
                    <li><a href='/pages/Contactanos'>CONTÁCTANOS</a></li>   
                </ul>
            </nav>
            {/* AQUÍ VA LA SECCIÓN DE QUE CAMBIA */}
            <Headers />
        </header>
    
    )
}

export default Nav;