
import './Banners.css';




const Banners = () => {
  //const [count, setCount] = useState(0)
    
  
    
    return (
      
       <>  
            <section className="header-hero relative overflow-hidden border-b border-gray-100" data-purpose="hero-section">

                <div className="tamano absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none">
                    <img alt="Modern Smart Building" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPg69awuUUo64onYonN9mx3tE4xoIFeLlTN3bW2i_jHEGSPzMboVHy-Vwxr3hATii4wVb62IbNVgFu_6ve38tdIT1V1u2MNG3b74NYF1LY_X-Zkc38K8y07Zdx8dobBTp0OiBi-6hHyqd1g-EGjjJXh1ng9PxpivSUNhS8DmQ2tbhsp22n_4wtXfMZ9fBVmHsCFTP0tVJqzZ-ybvlV7Rrej_QGzykllMwlHT01AcYcRDwYvDej-FzqQ"/>
                    <div className="absolute inset-0 hero-mask-gradient"></div>
                </div>
                <div className="mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
                    <div className="max-w-2xl">

                        <p className="text-xs font-semibold tracking-wider text-brand-grayMuted uppercase mb-4">
                            Edificaciones inteligentes, personas más conectadas
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-brand-darkText mb-6">
                            Soluciones MEP, HVAC e IoT para desarrollar espacios<br/>
                            <span className="text-brand-blueSecondary">más eficientes,</span><br/>
                            <span className="text-brand-bluePrimary">seguros y sostenibles.</span>
                        </h1>

                            <p className="text-base sm:text-lg text-brand-grayMuted font-normal leading-relaxed mb-8 max-w-xl">
                                Diseño, automatización, control y mantenimiento con tecnología, experiencia y un enfoque humano.
                            </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-brand-accentOrange hover:bg-brand-accentOrangeHover transition shadow-sm" data-purpose="cta-solicitar" href="#contacto">
                                <span>Solicitar cotización</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                </svg>
                            </a>
                            <a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-brand-blueSecondary bg-white border border-brand-blueSecondary hover:bg-blue-50 transition" data-purpose="cta-servicios" href="#servicios">
                                        Conocer nuestros servicios
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex absolute top-12 right-12 lg:right-24 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 badge-shadow items-center gap-3.5 max-w-xs" data-purpose="floating-badge">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-brand-bluePrimary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-brand-darkText">Eficiencia energética</p>
                            <p className="text-[11px] text-brand-grayMuted">para un futuro sostenible</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
        
    
    )
}

export default Banners;