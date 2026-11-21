import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
import Banner from './headers/Banner_proy.tsx';
import Proyecto from './proyectos/Proyectos_Lista.tsx';
import './Home.css';
import './Proyectos.css';
import Heads from './head_imports.tsx';

//ESTA SECCIÓN ESTÁ DESHABILITADA PORQUE NO ESTÁ CONFIRMADO LOS SERVICIOS.
//A EMPRESAS. 

function Proyectos() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <head>
          
          <meta charSet="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
          <title>Proyectos | Ingeniería IoT</title>
          <Heads/>
      </head>
      
      <header className="menu-logo">

        <link rel="icon" type="image/png" href="/ingenieria_logo.png" />
        <Nav />
        <Banner />
      </header>
      <Proyecto />
      
      <Footer />
    </>
  )
}

export default Proyectos;