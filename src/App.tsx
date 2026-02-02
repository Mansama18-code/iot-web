
import { BrowserRouter, Routes, Route } from 'react-router';

//import NavLink from 'react-router-dom/NavLink';
import Home from './pages/Home.tsx';
import Proyectos from './pages/Proyectos.tsx';
import Servicios from './pages/Servicios.tsx';
import Contactanos from './pages/Contactanos.tsx';
import Quienes from './pages/quienes.tsx';

import './App.css';


function App() {
 // const [count, setCount] = useState(0)
  
  return (
    <>
  

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes' element={<Quienes />} />
          <Route path='/Proyectos' element={<Proyectos />} />
          <Route path='/Servicios' element={<Servicios />} />
          <Route path='/Contactanos'  element={<Contactanos />} />
        </Routes>
      </BrowserRouter>
      
          </>
  )
}

export default App;
