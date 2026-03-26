import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
//import './App.css'
import Headers2 from '../headers/Header2.tsx';

function Contactanos() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        <Nav />
        <Headers2 />
      </header>
      <h1> CONTACT PAGE </h1>
     
      <Footer />
    </>
  )
}

export default Contactanos;