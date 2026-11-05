import '../quienes.css';
import '../tailwind-configs.js';
function quienes_1() {
    // const [count, setCount] = useState(0)

    return (
        <>
            
        {/*<!-- ================= 4. VALORES FUNDAMENTALES (FONDO CLARO #F4F7FB) ================= -->*/}
            <section className="py-16 lg:py-20 text-left bg-brand-lightBg border-b border-gray-100" data-purpose="core-values">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
                                Cultura &amp; Principios
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
                                Nuestros Valores Fundamentales
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-grayMuted max-w-md leading-relaxed">
                            Pilares inquebrantables que guían cada cálculo térmico, esquema unifilar, integración BACnet y entrega de comisionamiento.
                        </p>
                    </div>
                    {/*<!-- Grid 6 Values -->*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/*<!-- Valor 1: Excelencia -->*/}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-brand-darkText mb-2">Excelencia</h3>
                                <p className="text-xs text-brand-grayMuted leading-relaxed">
                                    Rigor técnico absoluto en el cálculo MEP, dimensionamiento de HVAC y cumplimiento estricto de estándares internacionales (ASHRAE, NFPA, NEC).
                                </p>
                            </div>
                        </div>
                        {/*<!-- Valor 2: Innovación -->*/}
                        
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-brand-darkText mb-2">Innovación</h3>
                                <p className="text-xs text-brand-grayMuted leading-relaxed">
                                    Pioneros en integración de redes de sensores IoT, controladores abiertos BACnet/IP y gemelos digitales mediante plataformas BIM y BMS.
                                </p>
                            </div>
                        </div>
                        {/*<!-- Valor 3: Confiabilidad -->*/}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-brand-darkText mb-2">Confiabilidad</h3>
                                <p className="text-xs text-brand-grayMuted leading-relaxed">
                                    Sistemas tolerantes a fallos, redundancia en control HVAC y acuerdos de soporte operativo diseñados para infraestructura de misión crítica.
                                </p>
                            </div>
                        </div>
                        {/*<!-- Valor 4: Integridad -->*/}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017a2 2 0 01-1.789-1.106l-2.5-5A2 2 0 018 13.106V9a2 2 0 012-2h4a2 2 0 012 2v1zM6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h2V10z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-brand-darkText mb-2">Integridad</h3>
                                <p className="text-xs text-brand-grayMuted leading-relaxed">
                                    Transparencia contractual absoluta, objetividad técnica en la selección de fabricantes y fidelidad estricta al beneficio del cliente.
                                </p>
                            </div>
                        </div>
                        {/*<!-- Valor 5: Eficiencia -->*/}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                            </div>
                            <h3 className="text-base font-bold text-brand-darkText mb-2">Eficiencia</h3>
                            <p className="text-xs text-brand-grayMuted leading-relaxed">
                                Optimización constante del consumo de kWh eléctrico y agua mediante lazos PID sintonizados, variadores de frecuencia y análisis térmico.
                            </p>
                        </div>
                    </div>
                    {/*<!-- Valor 6: Sostenibilidad -->*/}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-bluePrimary mb-4 group-hover:scale-105 transition-transform">
                                <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-brand-darkText mb-2">Sostenibilidad</h3>
                            <p className="text-xs text-brand-grayMuted leading-relaxed">
                                Reducción tangible de la huella de carbono operacional, facilitando certificaciones internacionales como LEED, EDGE y reportes corporativos ESG.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default quienes_1;