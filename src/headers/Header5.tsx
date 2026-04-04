import './Headers.css';



const Headers5 = () => {

    return (
    <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img alt="Modern industrial control room with monitors and automated systems" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6togIuyYWLuxd--uRxaD7IUW2ZHIjSKlnUbghYRR4o6VOf6EBKjWzcRydVX-9hQF9NQxxvc6u6MVBgCDrlKOlrREjSOUcdLJ1J2YffeU_-t-88Cc8jyBHrjFhbOwOyc_U4YJQKySAW4suo1aoAT54Q4MZydM8erobWl97MzLtQzvS-7gm3BFISbSh4InH2oWSN3y0CB22YM5NeaVM9jxPq_nb4ny3r1ByqZJfFleeg5-40AH12QhfjA7gUq4MrJXntKVS6iOD5EK9" />
            <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-2xl space-y-6 animate-fade-in-up ">
               
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                    
                      <span className="text-primary">  PROYECTOS REALIZADOS </span>
                        {/*<span className="text-primary italic">NUESTROS</span>*/} 
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
                    Conoce lo que dicen nuestros clientes sobre nosotros y los proyectos que hemos realizado. Estamos orgullosos de compartir nuestras experiencias y resultados contigo.
                </p>
                
            </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
            <span className="material-symbols-outlined text-white/50 text-3xl">keyboard_double_arrow_down</span>
        </div>
    </section>
    )
}
export default Headers5;