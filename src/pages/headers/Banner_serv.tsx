
function Banner_serv() {
   
  
    return (
        <>
            {/* BANNER DE SERVICIOS */}
           <section className="header-hero relative overflow-hidden border-b border-gray-100" data-purpose="hero-section">

                <div className="tamano absolute inset-y-0 right-0 w-full lg:w-full pointer-events-none">
                    <img alt="Modern Smart Building" className="w-full h-full object-cover object-center" src="./panama4.png"/>
                    <div className="absolute inset-0 hero-mask-gradient"></div>
                </div>
                <div className="mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
                    <div className="max-w-2xl">

                        

                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-brand-darkText mb-6">
                            <span className="text-brand-blueSecondary">Conoce Nuestros Servicios</span>
                        </h1>
                        <p className="text-base sm:text-lg text-brand-grayMuted font-normal leading-relaxed mb-8 max-w-xl">
                            Entendemos tus necesidades y te ofrecemos soluciones a medida.
                        </p>
                        
                    </div>

                    
                </div>
            </section>
            


        </>

    );
} 
    

export default Banner_serv;