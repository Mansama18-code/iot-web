import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
//import './App.css'
import Headers from '../headers/Headers.tsx';
function Proyectos() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        <Nav />
        <Headers />
      </header>
      <h1> Proyectos Realizados </h1>

      <section id='servicios' className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6" >
          <div className="text-center max-w-3xl mx-auto mb-16 ">
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Elegidos por nuestros clientes por nuestra experiencia, calidad y compromiso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div  className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <h3 className=" text-xl font-bold mb-3 dark:text-white">PROYECTO 1</h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">Proyecto 2 </h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">Proyecto 3</h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>

             <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">Proyecto 4</h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">Proyecto 5</h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">Proyecto</h3>
              <p className="text-slate-600 dark:text-slate-400">Descripción del Proyecto...</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center max-w-4xl mx-auto mb-16 ">
        <button className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '#contacto'}> SOLICITAR PRESUPUESTO </button>
      </div>
     
      <Footer />
    </>
  )
}

export default Proyectos;