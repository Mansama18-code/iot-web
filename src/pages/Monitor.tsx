        
function Monitor() {
    // const [count, setCount] = useState(0)
  
    return (
        <>
            
            <section className="bg-white border-b border-gray-100 py-6" data-purpose="service-highlights-bar">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center text-center">

                        <div className="flex flex-col items-center group cursor-pointer" data-purpose="highlight-item">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center text-brand-bluePrimary group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <circle cx="12" cy="12" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-brand-darkText">Diseño MEP</span>
                            <span className="text-[11px] text-brand-grayMuted">(HVAC, Eléctrico, Plomería)</span>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer" data-purpose="highlight-item">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center text-brand-bluePrimary group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-brand-darkText">Automatización</span>
                            <span className="text-[11px] text-brand-grayMuted">y Control BMS/IoT</span>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer" data-purpose="highlight-item">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center text-brand-bluePrimary group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-brand-darkText">Mantenimiento</span>
                            <span className="text-[11px] text-brand-grayMuted">Inteligente</span>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer" data-purpose="highlight-item">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center text-brand-bluePrimary group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-brand-darkText">BIM-MEP</span>
                            <span className="text-[11px] text-brand-grayMuted">y Coordinación</span>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer" data-purpose="highlight-item">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center text-brand-bluePrimary group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-brand-darkText">Conectividad</span>
                            <span className="text-[11px] text-brand-grayMuted">y Monitoreo</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Monitor;