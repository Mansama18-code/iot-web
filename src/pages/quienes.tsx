import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
import Banner from './Bannerx.tsx';
import Quienes from './quienes/quienes-1.tsx';
import './quienes.css';



function quienes() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <head>
        
          <meta charSet="utf-8"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
          <title>Empresa | Ingeniería IoT - Especialistas en MEP, HVAC, BMS e IoT</title>
          
          <link href="https://fonts.googleapis.com" rel="preconnect"/>
          <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
          
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
          
          <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
          
      </head>
   
      
      <header className="menu-logo">
        
        <Nav />
        <Banner />
       
      </header>
      {/*<Quienes/>*/}
      <section className="bg-brand-blueSecondary text-white text-left py-16 lg:py-20 relative overflow-hidden" data-purpose="strategic-horizon" id="somosiot">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
                <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                    Somos una empresa panameña especializada en soluciones avanzadas de automatización, control y tecnologías MEP, HVAC, IoT y edificaciones inteligentes. Nuestro equipo está conformado por ingenieros idóneos con amplia experiencia en diseño, integración y puesta en marcha de sistemas críticos para proyectos residenciales, comerciales e industriales. Operamos bajo altos estándares técnicos, regulaciones locales y prácticas internacionales que garantizan precisión, confiabilidad y seguridad en cada entrega.
                    <br/><br/>
                    Aplicamos metodologías de gestión de proyectos basadas en estándares PMP, asegurando una planificación clara, control estricto del alcance, análisis de riesgos, administración efectiva del cronograma y supervisión continua de la calidad. Este enfoque nos permite ejecutar proyectos con consistencia, eficiencia y trazabilidad completa, alineados con los objetivos estratégicos y operativos de nuestros clientes.
                    <br/><br/>
                    Nuestra experiencia incluye sistemas DDC, BMS, integración IoT, domótica avanzada, monitoreo energético, modelación BIM-MEP, mantenimiento inteligente y soluciones de conectividad orientadas a la optimización del desempeño de los activos. Diseñamos infraestructuras tecnológicas robustas y escalables que incrementan la eficiencia operativa, reducen costos, extienden la vida útil de los equipos y elevan la experiencia de automatización dentro de cualquier tipo de edificación.
                    <br/><br/>
                    Como empresa panameña innovadora, nuestro compromiso es aportar valor real mediante ingeniería aplicada, análisis técnico riguroso y una ejecución que integra desempeño, sostenibilidad y transformación digital en cada proyecto.
                </p>
        </div>
      </section>



      {/*<!-- ================= 3. HORIZONTE ESTRATÉGICO (FONDO AZUL CORPORATIVO #0F4C81) ================= -->*/}
      <section className="bg-brand-blueSecondary text-white text-left py-16 lg:py-20 relative overflow-hidden" data-purpose="strategic-horizon" id="proposito">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/*<!-- Header Block -->*/}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
                Nuestro Horizonte Estratégico
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Ingeniería de vanguardia con <span className="text-brand-accentOrange">propósito claro.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                Estructuramos nuestras capacidades técnicas para transformar infraestructura convencional en activos de alto desempeño y gobernanza tecnológica integral.
              </p>
            </div>
          </div>
          {/*<!-- 3 Cards: Propósito, Misión, Visión -->*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*<!-- Card 1: PROPÓSITO -->*/}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/15 flex flex-col justify-between hover:bg-white/[0.14] transition duration-200">
              <div>
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-brand-accentOrange mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-200 block mb-1">Propósito</span>
                <h3 className="text-lg font-bold text-white mb-2.5">Espacios Eficientes y Sostenibles</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  Integrar ingeniería y tecnología para crear espacios más eficientes, controlables y sostenibles para las personas y el entorno.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-brand-accentOrange">
                <span>Enfoque bioclimático e IoT</span>
              </div>
            </div>
            {/*<!-- Card 2: MISIÓN -->*/}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-7 border-2 border-brand-accentOrange flex flex-col justify-between relative shadow-lg">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand-accentOrange text-white text-[10px] font-bold uppercase tracking-wider">
                Eje Operativo
              </div>
              <div>
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-accentOrange block mb-1">Misión</span>
                <h3 className="text-lg font-bold text-white mb-2.5">Soluciones de Alto Desempeño</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  Diseñamos, integramos y ejecutamos soluciones que optimizan el desempeño de las edificaciones y generan valor tangible a inversionistas y ocupantes.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-white">
                <span>Rigor técnico en cada entrega</span>
              </div>
            </div>
            {/*<!-- Card 3: VISIÓN -->*/}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/15 flex flex-col justify-between hover:bg-white/[0.14] transition duration-200">
              <div>
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-brand-bluePrimary mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-200 block mb-1">Visión</span>
                <h3 className="text-lg font-bold text-white mb-2.5">Liderazgo y Referencia Regional</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                  Ser referente en Panamá y la región en ingeniería de edificaciones inteligentes mediante innovación sostenida y calidad comprobada.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-brand-bluePrimary">
                <span>Expansión e innovación continua</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quienes />
      
      <Footer />
    </>
  )
}

export default quienes;