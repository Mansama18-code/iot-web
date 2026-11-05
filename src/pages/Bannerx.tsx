import './Home.css'


function Banner() {
   
  
    return (
        <>
            <section className="header-hero relative overflow-hidden border-b border-gray-100" data-purpose="hero-section">

                <div className="tamano absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none">
                    <img alt="Modern Smart Building" className="w-full h-full object-cover object-center" src="../src/assets/luis-quintero.jpg"/>
                    <div className="absolute inset-0 hero-mask-gradient"></div>
                </div>
                <div className="mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
                    <div className="max-w-2xl">

                        <p className="text-xs font-semibold tracking-wider text-brand-grayMuted uppercase mb-4">
                            Orgullosos de ser Panameños, comprometidos con la innovación y la sostenibilidad.
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-brand-darkText mb-6">
                            Diseñamos e integramos soluciones para proyectos  <br/>
                            <span className="text-brand-blueSecondary"> residenciales, comerciales </span><br/>
                            <span className="text-brand-bluePrimary"> e industriales.</span>
                        </h1>
                        {/*<p className="text-base sm:text-lg text-brand-grayMuted font-normal leading-relaxed mb-8 max-w-xl">
                            Conocenos Más... { /* Puede ser un botón 
                        </p>
                        */}

                       
                    </div>

                    
                </div>
            </section>
           

            
        </>

    )
} 
    

export default Banner;