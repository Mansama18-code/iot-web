import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
import Banner from './Bannerx.tsx';
import './quienes.css'
function quienes() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <header className="menu-logo">
        
        <Nav />
        <Banner />
       
      </header>
      <br></br>
      <div >
          <center>🇵🇦</center>
      </div>
      <div className="seccion-tarjetas">
            <h3 className="quienesSomos">INGENIERÍA IOT: Somos una empresa panameña especializada en soluciones avanzadas de automatización, 
          control y tecnologías MEP, HVAC, IoT y edificaciones inteligentes. Nuestro equipo está conformado 
          por ingenieros idóneos con amplia experiencia en diseño, integración y puesta en marcha de 
          sistemas críticos para proyectos residenciales, comerciales e industriales. Operamos bajo 
          altos estándares técnicos, regulaciones locales y prácticas internacionales que garantizan 
          precisión, confiabilidad y seguridad en cada entrega.
          <br></br>
          <br></br>
          Aplicamos metodologías de gestión de proyectos basadas en estándares PMP, asegurando una 
          planificación clara, control estricto del alcance, análisis de riesgos, administración 
          efectiva del cronograma y supervisión continua de la calidad. Este enfoque nos permite 
          ejecutar proyectos con consistencia, eficiencia y trazabilidad completa, alineados con 
          los objetivos estratégicos y operativos de nuestros clientes.
          <br></br>
          <br></br>
          Nuestra experiencia incluye sistemas DDC, BMS, integración IoT, domótica avanzada, 
          monitoreo energético, modelación BIM-MEP, mantenimiento inteligente y soluciones de 
          conectividad orientadas a la optimización del desempeño de los activos. Diseñamos 
          infraestructuras tecnológicas robustas y escalables que incrementan la eficiencia 
          operativa, reducen costos, extienden la vida útil de los equipos y elevan la experiencia 
          de automatización dentro de cualquier tipo de edificación.
          <br></br>
          <br></br>
          Como empresa panameña innovadora, nuestro compromiso es aportar valor real mediante 
          ingeniería aplicada, análisis técnico riguroso y una ejecución que integra desempeño, 
          sostenibilidad y transformación digital en cada proyecto.
        
          </h3>
      </div>
      <div className="seccion-imagen">
        <div className="imagen-container">
          <div>
             <img src="../assets/program.png" alt="Engineering" width="70px" height="70px" />
          </div>
          <h4 className="imagen-titulo">Ingeniería Aplicada</h4>
        </div>
        <div className="imagen-container">
          <div>
            <img src="../src/assets/exploratory-analysis.png" alt="Analysis" width="70px" height="70px" />
          </div>
          <h4 className="imagen-titulo">Análisis Riguroso</h4>   
        </div>
        <div className="imagen-container">
          <div>
            <img src="../src/assets/good-feedback.png" alt="Performance" width="70px" height="70px" />
          </div>
          <h4 className="imagen-titulo">Desempeño</h4>
        </div>
        <div className="imagen-container">
          <div>
            <img src="../src/assets/planet-earth.png" alt="Sostenibility" width="70px" height="70px" />
          </div>
          <h4 className="imagen-titulo">Sostenibilidad</h4>
        </div>
        <div className="imagen-container">
          <div>
            <img src="../src/assets/manufacturing.png" alt="Digital Transformation" width="70px" height="70px" />
          </div>
          <h4 className="imagen-titulo">Transformación Digital</h4>
        </div>


      </div>
     
      <Footer />
    </>
  )
}

export default quienes;