import Nav from '../Nav.tsx'
import Footer from '../Footer.tsx'
import './quienes.css'

function quienes() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className='quienesSomos'>
        <h2> Sobre Nosotros  </h2>
        <p>
          <b>Ingeniería IOT</b> es una empresa panameña especializada en soluciones avanzadas de automatización, 
          control y tecnologías MEP, HVAC, IoT y edificaciones inteligentes. Nuestro equipo está conformado 
          por ingenieros idóneos con amplia experiencia en diseño, integración y puesta en marcha de 
          sistemas críticos para proyectos residenciales, comerciales e industriales. Operamos bajo 
          altos estándares técnicos, regulaciones locales y prácticas internacionales que garantizan 
          precisión, confiabilidad y seguridad en cada entrega.
 
        </p>
        <p>
          Aplicamos metodologías de gestión de proyectos basadas en estándares PMP, asegurando una 
          planificación clara, control estricto del alcance, análisis de riesgos, administración 
          efectiva del cronograma y supervisión continua de la calidad. Este enfoque nos permite 
          ejecutar proyectos con consistencia, eficiencia y trazabilidad completa, alineados con 
          los objetivos estratégicos y operativos de nuestros clientes.
        </p>
        <p>
          Nuestra experiencia incluye sistemas DDC, BMS, integración IoT, domótica avanzada, 
          monitoreo energético, modelación BIM-MEP, mantenimiento inteligente y soluciones de 
          conectividad orientadas a la optimización del desempeño de los activos. Diseñamos 
          infraestructuras tecnológicas robustas y escalables que incrementan la eficiencia 
          operativa, reducen costos, extienden la vida útil de los equipos y elevan la experiencia 
          de automatización dentro de cualquier tipo de edificación.
        </p>
        <p>
          Como empresa panameña innovadora, nuestro compromiso es aportar valor real mediante 
          ingeniería aplicada, análisis técnico riguroso y una ejecución que integra desempeño, 
          sostenibilidad y transformación digital en cada proyecto.
        </p>
      </div>
      
     
      <Footer />
    </>
  )
}

export default quienes;