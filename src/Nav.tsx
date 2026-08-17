

//import { useState } from 'react'
import iotLogo from './assets/iot-ing.png';
//import { useRef} from 'react';
//import backGround from './assets/bg-img.png'
import './Nav.css';




const Nav = () => {
  //const [count, setCount] = useState(0)
    
  
    
    return (
      
        
    
        <div>
            {/*
            <nav>
                
                <ul className='ulNav'>
                   <li ><a href='/'>INICIO</a></li>
                    <li><a href='/quienes'>QUIENES SOMOS</a></li>
                    <li><a href='/servicios'>SERVICIOS</a></li>
                    <li><a href='/proyectos'>PROYECTOS</a></li>
                    <li><a href='/contactanos'>CONTÁCTANOS</a></li>   
                </ul>
               
            </nav>

            */}
            

            <div className="barra-top">
            <div className="barra-top-interior">
                
                
                <a href='/'><img src={iotLogo} alt="IOT logo" className='iotLogos'/></a>
                <div className="logo-lema">INNOVAMOS<span className="punto">•</span>AUTOMATIZAMOS<span className="punto">•</span>CONECTAMOS</div>
                    {/*
                <div className="top-acciones">
                <a href="#">👤 Login</a>
                <a href="#">📍 Contacto</a>
                <div className="buscador">
                    <input type="text" placeholder="Buscar..." />
                    <button>🔍</button>
                </div>
                </div> */}
            </div>
            </div>



            <nav >
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
            </nav>
        </div>

        
        
    
    )
}

export default Nav;