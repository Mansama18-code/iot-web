import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
import Banner from './headers/Banner_proy.tsx';
import Proyecto from './proyectos/Proyectos_Lista.tsx';
import './Home.css';
import './Proyectos.css';

//ESTA SECCIÓN ESTÁ DESHABILITADA PORQUE NO ESTÁ CONFIRMADO LOS SERVICIOS.
//A EMPRESAS. 

function Proyectos() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        <Nav />
        <Banner />
      </header>
      <Proyecto />
      
      <Footer />
    </>
  )
}

export default Proyectos;