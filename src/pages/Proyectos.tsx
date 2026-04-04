import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
//import './App.css'
import Headers from '../headers/Header5.tsx';
function Proyectos() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        <Nav />
        <Headers />
      </header>
      
    

      <section id='servicios' className="py-24 bg-white dark:bg-slate-900">
        <h1> <b>Proyectos Realizados</b> </h1> <br></br>
        <div className="max-w-7xl mx-auto px-6" >
          <div className="text-center max-w-3xl mx-auto mb-16 ">
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nuestros clientes nos eligen por la experiencia, calidad y compromiso.
            </p>
          </div>

          <div>
              <br></br> <h2> <b><span className="text-xl font-bold mb-3 dark:text-white">Arquitectura Tropical</span></b> </h2> <br></br>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            
            <div  className="text-start group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/mamey.jpeg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className=" text-xl font-bold mb-3 dark:text-white">Electromecánica | Casa Mamey</h3>              
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
              </div>
            </div>

            
          </div>

          <div>
              <br></br> <h2> <b><span className="text-xl font-bold mb-3 dark:text-white">Automatización</span></b> </h2> <br></br>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="text-start group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/machetazo.jpeg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Automatización | El Machetazo</h3>
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
              </div>
            </div>

          </div>

          <div>
              <br></br> <h2> <b><span className="text-xl font-bold mb-3 dark:text-white">Diseño (Aire Acondicionado)</span></b> </h2> <br></br>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">

             <div className="text-start group  rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/puma.jpg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Gasolinera Puma</h3> 
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
              </div>
            </div>

            <div className="text-start group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/aeropuerto.jpeg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Aeropuerto Tocumen | Domestic Luggage</h3>
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
              </div>
            </div>

            <div className="text-start group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/hospital.webp" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Cuarto Resonador | Hospital Manuel Amador Guerrero</h3>
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
              </div>
            </div>
           
          </div>

          <div>
              <br></br> <h2> <b><span className="text-xl font-bold mb-3 dark:text-white">Colaboraciones</span></b> </h2> <br></br>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
          
            <div className="text-start group  rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/testimage.jpg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Casa Dylan</h3>
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto... </p>
                <p className="text-slate-600 dark:text-slate-400">| Colaboración con Espacio LAR</p>
              </div>
            </div>

            <div className="text-start group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <img src="/background-image/las-costas.jpg" alt="TestBack" className="w-full h-48 object-cover rounded" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 dark:text-white">Hotel Las Costas</h3>
                <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto... </p>
                <p className="text-slate-600 dark:text-slate-400">| Colaboración con Espacio LAR</p>
              </div>  
            </div>
          </div>
          
          
          
        
        </div>
        
      </section>
      <div className="text-center max-w-4xl mx-auto mb-16 ">
        <button className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '#contacto'}> COMUNICATE CON NOSOTROS </button>
      </div>
     
      <Footer />
    </>
  )
}

export default Proyectos;