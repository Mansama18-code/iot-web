import './Home.css'


function Banner() {
   
  
    return (
        <>


            {/*<!-- BANNER -->*/}
            <div className="banner">
                <div className="banner-interior">
                    <div className="banner-iconos-wrap">
                        <div className="banner-iconos">
                            <div className="icono-caja" title="Conectividad IoT">🌐</div>
                            <div className="icono-caja" title="Automatización DDC">⚙️</div>
                            <div className="icono-caja grande" title="Modelado BIM">🏗️</div>
                            <div className="icono-caja" title="Diseño y Planos MEP">📐</div>
                            <div className="icono-caja grande" title="Integración de Sistemas" >🔗</div>
                        </div> {/*style="margin-top:-12px;"*/}
                        {/*<div className="banner-badge">
                <span>🤝 Integrador certificado</span>
                <strong>Reliable Controls</strong>
              </div>*/}
                    </div>
                    <div className="banner-texto">
                        <h1><span>Bienvenido</span></h1>
                        <p>Somos una empresa panameña especializada en soluciones avanzadas innovadoras. Nuestro compromiso es aportar valor real mediante ingeniería aplicada, análisis técnico riguroso y una ejecución que integra desempeño, sostenibilidad y transformación digital.</p>
                        {/*Como Cliente, Consultor o Distribuidor usa el acceso seguro para obtener actualizaciones de software, información de productos y más.
              <button className="btn-cuenta">Solicitar una Cuenta</button>*/}
                    </div>
                </div>
            </div>
      
        </>

    )
} 
    

export default Banner;