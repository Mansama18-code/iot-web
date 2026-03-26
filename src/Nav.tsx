

//import { useState } from 'react'
import iotLogo from './assets/iot-ing.png';
//import { useRef} from 'react';
//import backGround from './assets/bg-img.png'
import './Nav.css';




const Nav = () => {
  //const [count, setCount] = useState(0)
    
  
    
    return (
      
        
    
        <div>
            
            <nav>
                <a href='/'><img src={iotLogo} alt="IOT logo" className='iotLogos'/></a>
                <ul className='ulNav'>
                   <li ><a href='/'>INICIO</a></li>
                    <li><a href='/quienes'>QUIENES SOMOS</a></li>
                    <li><a href='/servicios'>SERVICIOS</a></li>
                    <li><a href='/proyectos'>PROYECTOS</a></li>
                    <li><a href='/contactanos'>CONTÁCTANOS</a></li>   
                </ul>
               
            </nav>
            
        </div>
        
    
    )
}

export default Nav;