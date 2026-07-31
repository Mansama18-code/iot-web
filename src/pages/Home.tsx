import Nav from '../Nav.tsx';

import Footer from '../Footer.tsx';
//import { useRef } from 'react';

import './Home.css'

//import Headers from '../headers/Headers.tsx';

//import testIcon from '../assets/imagen_test.jpg';

//import './App.css'

function Home() {
 // const [count, setCount] = useState(0)
  
  return (
      <>  
        
        <head>    
            <title>Ingeniería IOT</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body>
        <Nav />
          {/*<!-- INICIO -->*/}
          <div className="seccion-noticias" id="inicio">
              <div>
            {/*<h2 >📰 Inicio</h2>*/}
                <h2 className="noticias-sub">Mantente al tanto de los proyectos que hemos desarrollado y lo que viene próximamente en Ingeniería IOT.</h2>
              </div><br></br>
              <div className="noticias-grid">

                <div className="noticia-card destacada">
                  <div className="noticia-tag proximamente">Próximamente</div>
                  <div className="noticia-img">🏗️</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">Q3 2026</span>
                    <h3>Lanzamiento de la nueva plataforma SCADA en la nube</h3>
                    <p>Estamos finalizando el desarrollo de nuestra plataforma de monitoreo remoto BAS/BMS con dashboards en tiempo real accesibles desde cualquier dispositivo.</p>
                    <a href="#" className="noticia-link">Leer más →</a>
                  </div>
                </div>

                <div className="noticia-card">
                  <div className="noticia-tag completado">Proyecto Finalizado</div>
                  <div className="noticia-img">🏢</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">Junio 2026</span>
                    <h3>Automatización de Torre Corporativa Costa del Este</h3>
                    <p>Implementamos control DDC integral para climatización, iluminación y seguridad en un edificio de 18 pisos.</p>
                    <a href="#" className="noticia-link">Ver caso de éxito →</a>
                  </div>
                </div>

                <div className="noticia-card">
                  <div className="noticia-tag completado">Proyecto Finalizado</div>
                  <div className="noticia-img">🏭</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">Mayo 2026</span>
                    <h3>Modernización de planta industrial en Colón</h3>
                    <p>Migración de sistema de control obsoleto a arquitectura BACnet/IP con más de 400 puntos de monitoreo.</p>
                    <a href="#" className="noticia-link">Ver caso de éxito →</a>
                  </div>
                </div>

                <div className="noticia-card">
                  <div className="noticia-tag proximamente">Próximamente</div>
                  <div className="noticia-img">🎓</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">Agosto 2026</span>
                    <h3>Ciclo de capacitaciones gratuitas en diseño MEP</h3>
                    <p>Abriremos inscripciones para webinars sobre diseño de sistemas eléctricos, HVAC y contra incendio con nuestros plugins de Revit.</p>
                    <a href="#" className="noticia-link">Reservar cupo →</a>
                  </div>
                </div>

                <div className="noticia-card">
                  <div className="noticia-tag completado">Proyecto Finalizado</div>
                  <div className="noticia-img">🏥</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">Marzo 2026</span>
                    <h3>Sistema contra incendio para hospital regional</h3>
                    <p>Diseño e instalación de red de sprinklers e hidrantes bajo normativa NFPA 13/14 para instalación de 6,000 m².</p>
                    <a href="#" className="noticia-link">Ver caso de éxito →</a>
                  </div>
                </div>

                <div className="noticia-card">
                  <div className="noticia-tag proximamente">Próximamente</div>
                  <div className="noticia-img">🤝</div>
                  <div className="noticia-cuerpo">
                    <span className="noticia-fecha">2026</span>
                    <h3>Nueva alianza con distribuidores en Centroamérica</h3>
                    <p>Estamos ampliando nuestra red de distribución de materiales DDC y software MEP a Costa Rica y Guatemala.</p>
                    <a href="#" className="noticia-link">Más información →</a>
                  </div>
                </div>

              </div>
          </div>

          {/*<!-- SERVICIOS -->*/}
          <div className="seccion-tarjetas">
            <h2>Nuestros Servicios</h2>
            <div className="grid-tarjetas">
              <div className="tarjeta"><div className="tarjeta-icono">⚡</div><h3>Automatización Industrial</h3><p>Soluciones IoT para optimizar procesos y monitoreo en tiempo real.</p></div>
              <div className="tarjeta"><div className="tarjeta-icono">📡</div><h3>Conectividad IoT</h3><p>Integración de dispositivos y sensores para comunicación segura en red.</p></div>
              <div className="tarjeta"><div className="tarjeta-icono">📊</div><h3>Análisis de Datos</h3><p>Dashboards y reportes inteligentes para la toma de decisiones.</p></div>
              <div className="tarjeta"><div className="tarjeta-icono">🛠️</div><h3>Soporte Técnico</h3><p>Asistencia especializada para instalación, configuración y mantenimiento.</p></div>
            </div>
          {/* style="margin-top:2.5rem;" */} 
          <br></br>
          <br></br>
            <h2 >Diseño y Modelado BIM/VDC</h2>
            <p className="servicios-sub">Acompañamos cada proyecto desde el diseño hasta la operación, combinando modelado BIM, planificación constructiva y desarrollo de software a la medida.</p>
            <div className="grid-tarjetas">
              <div className="tarjeta">
                <div className="tarjeta-icono">🏗️</div>
                <h3>Producción BIM Arquitectónico</h3>
                <p>Nuestro equipo de arquitectos combina diseño, construcción y normativa para adaptarse a las plantillas y especificaciones de cada cliente.</p>
              </div>
              <div className="tarjeta">
                <div className="tarjeta-icono">📅</div>
                <h3>Secuenciación 4D y Costeo 5D</h3>
                <p>Aprovechamos el BIM 4D para una planificación y comunicación eficientes, junto con cronogramas de costos 5D para un análisis a fondo.</p>
              </div>
              <div className="tarjeta">
                <div className="tarjeta-icono">🏢</div>
                <h3>BIM 6D/7D para Gestión de Instalaciones</h3>
                <p>Aplicamos Building Information Modeling para gestión de instalaciones y estrategias de gemelo digital (Digital Twin) para propietarios.</p>
              </div>
              <div className="tarjeta">
                <div className="tarjeta-icono">🧱</div>
                <h3>Creación de Contenido BIM</h3>
                <p>Desarrollamos contenido BIM para fabricantes de productos, enfocado en la experiencia de usuario dentro de proyectos reales.</p>
              </div>
              <div className="tarjeta">
                <div className="tarjeta-icono">💻</div>
                <h3>Desarrollo de Software BIM</h3>
                <p>Nuestro equipo de innovación es tu socio dedicado: con raíces profundas en construcción, creamos soluciones de software a la medida.</p>
              </div>
              <div className="tarjeta">
                <div className="tarjeta-icono">✅</div>
                <h3>Consultoría VDC de Constructibilidad</h3>
                <p>Combinamos personal de campo con especialistas VDC/BIM desde etapas tempranas, detectando problemas de constructibilidad y normativa antes de llegar a obra.</p>
              </div>
            </div>
          </div>

          {/*<!-- DESCARGAS en página -->*/}
          <div className="seccion-descargas">
            <h2>📥 Descargas</h2>
            <div className="desc-grid">
              <div className="desc-tarjeta" > {/*onclick="abrirModal(null,'ddc')"*/}
                <div className="desc-icono">🔧</div>
                <h3>Materiales DDC</h3>
                <p>Controladores, sensores, actuadores y accesorios para sistemas de control directo digital.</p>
                <span className="btn-ver">Ver Catálogo →</span>
              </div>
              {/*onclick="abrirModal(null,'mep')"*/}
              <div className="desc-tarjeta" >
                <div className="desc-icono">💻</div>
                {/*style="font-size:.65rem;background:var(--azul-oscuro);color:#fff;padding:.1rem .4rem;border-radius:20px;vertical-align:middle;"*/}
                <h3>Software MEP <span className='stilo'>IOT</span></h3>
                <p>Software propietario de Ingeniería IOT para diseño MEP: plomería, HVAC, incendio, eléctrico y automatización.</p>
                <span className="btn-ver">Ver Software →</span>
              </div>
              {/*onclick="abrirModal(null,'revit')"*/}
              <div className="desc-tarjeta" >
                <div className="desc-icono">🧩</div>
                {/*style="font-size:.65rem;background:var(--naranja);color:#fff;padding:.1rem .4rem;border-radius:20px;vertical-align:middle;"*/}
                <h3>Plugins Revit <span className="stilo">NUEVO</span></h3>
                <p>Extensiones para Autodesk Revit desarrolladas por Ingeniería IOT para MEP, BIM y automatización.</p>
                <span className="btn-ver">Ver Plugins →</span>
              </div>
              <div className="desc-tarjeta">
                <div className="desc-icono">🔄</div>
                <h3>Actualizaciones Firmware</h3>
                <p>Últimas versiones de firmware y drivers para tus dispositivos IoT.</p>
                <span className="btn-ver">Ver Versiones →</span>
              </div>
            </div>
          </div>
      
          <Footer />
      </body>
    </>
  )
}

export default Home;