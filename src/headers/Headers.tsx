import './Headers.css';



const Headers = () => {


    const handleClick = () => {
        console.log('HICE CLICK');

    }

    return (
    <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img alt="Modern industrial control room with monitors and automated systems" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6togIuyYWLuxd--uRxaD7IUW2ZHIjSKlnUbghYRR4o6VOf6EBKjWzcRydVX-9hQF9NQxxvc6u6MVBgCDrlKOlrREjSOUcdLJ1J2YffeU_-t-88Cc8jyBHrjFhbOwOyc_U4YJQKySAW4suo1aoAT54Q4MZydM8erobWl97MzLtQzvS-7gm3BFISbSh4InH2oWSN3y0CB22YM5NeaVM9jxPq_nb4ny3r1ByqZJfFleeg5-40AH12QhfjA7gUq4MrJXntKVS6iOD5EK9" />
            <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-2xl space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">Tecnología de Vanguardia</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                    CREAMOS <span className="text-primary italic">SOLUCIONES</span> DE VANGUARDIA
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
                    Automatización y Control para el futuro industrial. Elevamos la eficiencia operativa mediante ingeniería de precisión.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button onClick={handleClick} className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                        INICIAR PROYECTO
                        <span className="material-symbols-outlined">trending_flat</span>
                    </button>
                    <button id='servicios' className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all backdrop-blur-md border border-white/20 flex items-center justify-center gap-2">
                        VER SERVICIOS
                    </button>
                </div>
            </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
            <span className="material-symbols-outlined text-white/50 text-3xl">keyboard_double_arrow_down</span>
        </div>
    </section>
    )
}
export default Headers;