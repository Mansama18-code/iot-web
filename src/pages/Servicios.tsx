import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
//import './App.css'
import Headers2 from '../headers/Header2.tsx';

function Servicios() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        <Nav />
        <Headers2 />
      </header>
      
         
      <section id='servicios' className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6" >
          <div className="text-center max-w-3xl mx-auto mb-16 ">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Nuestros Servicios</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              El mejor aliado para tus proyectos de automatización:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div  className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">dashboard</span>
              </div>
              <h3 className=" text-xl font-bold mb-3 dark:text-white">Diseño de Tableros</h3>
              <p className="text-slate-600 dark:text-slate-400">Diseño y ensamblaje de centros de control de motores y tableros de distribución con los más altos estándares.</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">memory</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Automatización y Control </h3>
              <p className="text-slate-600 dark:text-slate-400">Diseño e implementación de sistemas de gestión para un control centralizado y eficiente.</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">lan</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">IoT y edificaciones inteligentes</h3>
              <p className="text-slate-600 dark:text-slate-400">Implementamos soluciones IoT para crear edificaciones inteligentes que permiten el monitoreo en tiempo real, control automatizado y optimización del consumo energético.</p>
            </div>

             <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">devices</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Tecnologías MEP y HVAC</h3>
              <p className="text-slate-600 dark:text-slate-400">Desarrollamos soluciones integradas de MEP y HVAC para optimizar el rendimiento energético y la eficiencia operativa en edificios inteligentes.</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">view_in_ar</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Modelación BIM-MEP</h3>
              <p className="text-slate-600 dark:text-slate-400">Diseño digital avanzado para una coordinación precisa y reducción de errores en obra.</p>
            </div>

            <div className="text-start group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">monitoring</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Gestión Energética y Mantenimiento Inteligente</h3>
              <p className="text-slate-600 dark:text-slate-400">Estrategias para reducir el consumo y extender la vida útil de sus equipos.</p>
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

export default Servicios;