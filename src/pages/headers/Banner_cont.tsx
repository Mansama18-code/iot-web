
function Banner_cont() {
   
  
    return (
        <>
            {/* BANNER DE CONTACTO */}
           <section className="header-hero relative overflow-hidden border-b border-gray-100" data-purpose="hero-section">

                <div className="tamano absolute inset-y-0 right-0 w-full lg:w-full pointer-events-none">
                    <img alt="Modern Smart Building" className="w-full h-full object-cover object-center" src="./panama51.png"/>
                    <div className="absolute inset-0 hero-mask-gradient"></div>
                </div>
                <div className="mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
                    <div className="max-w-2xl">

                        

                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-brand-darkText mb-6">
                            <span className="text-brand-blueSecondary">Tu idea a un click de distancia</span>
                        </h1>
                        <p className="text-base sm:text-lg text-brand-grayMuted font-normal leading-relaxed mb-8 max-w-xl">
                            Estamos para ayudarte a encontrar la mejor solución para tu proyecto o negocio.
                        </p>
                        
                    </div>

                    
                </div>
            </section>
            


        </>

    );
} 
    

export default Banner_cont;