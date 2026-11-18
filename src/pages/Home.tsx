import './Home.css';

import './tailwind-configs.js';
import '../Nav.css';
import Nav from '../Nav.tsx';
import Banners from './headers/Banners.tsx';
import Monitor from './Monitor.tsx';
import Valor from './Valor.tsx';
import Cta from './Cta.tsx';
import Servicios from './servicios/Servicios.tsx';
import Footer from '../Footer.tsx';



function Home() {
    // const [count, setCount] = useState(0)
  
    return (
        <>
            <head>    
                <title>Ingeniería IOT</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" href="/ingenieria_logo.png" />
                
                <link href="https://fonts.googleapis.com" rel="preconnect"/>
                <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
                
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
             

            </head>
            
            <header className="w-full bg-white border-b border-gray-100 top-0 z-50 ">
                <div >
                
                    <Nav/>
                    <Banners/>
                    
                 </div>
                 
            </header>
            <div>
                <Monitor />
                <Valor />
                {/*Qué Hacemos*/}
                <Servicios />
                {/*<!-- BEGIN: Como Trabajamos -->*/}
                <section className="py-16 lg:py-20 bg-brand-lightBg ">
                <div className="max-w-7xl mx-auto px-6 ">
                    <div className="text-center max-w-2xl mx-auto mb-12 ">
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
                        ¿Cómo Trabajamos?
                    </h2>
                    <p className="text-sm sm:text-base text-brand-grayMuted mt-3 leading-relaxed">
                        Un proceso sistemático de 7 etapas que asegura cumplimiento normativo, control de presupuesto y cero sorpresas en la entrega de la obra.
                    </p>
                    </div>
                    <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/*<!-- Step 1 -->*/}
                    <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">01</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-brand-darkText mb-2">Evaluación y Diagnóstico</h3>
                        <p className="text-xs text-brand-grayMuted leading-relaxed">
                            Estudio de requerimientos, inspección técnica y estrablecer alcance.
                        </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 1 • Auditoría Inicial</div>
                        </div>
                        {/*<!-- Step 2 -->*/}
                        <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">02</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            
                            </div>
                            </div>
                            <h3 className="text-sm font-bold text-brand-darkText mb-2">Propuesta Comercial/ Aprobación</h3>
                            <p className="text-xs text-brand-grayMuted leading-relaxed">
                                Detalle de solución, presupuesto, cronograma, orden de proceder y firma de contrato.
                            </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 2 • Acuerdo </div>
                        </div>
                            {/*<!-- Step 3 -->*/}
                        <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">03</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                               <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"></path></svg>             
                            </div>
                            </div>
                            <h3 className="text-sm font-bold text-brand-darkText mb-2">Ingeniería y Diseño</h3>
                            <p className="text-xs text-brand-grayMuted leading-relaxed">
                                Gestión de cálculos, planos, arquitectura de sistemas y modelos BIM, soluciones de automatización.
                            </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 3 • Diseño</div>
                    </div>
                    {/* <!-- Step 4 --> */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">04</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-brand-darkText mb-2">Soporte &amp; Telemetría</h3>
                        <p className="text-xs text-brand-grayMuted leading-relaxed">
                            Monitoreo continuo IoT, capacitación del personal operativo y contratos de mantenimiento predictivo y preventivo.
                        </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 4 • Operación Continua</div>
                            </div>
                            {/* <!-- Step 5 --> */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">05</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-brand-darkText mb-2">Implementación del Proyecto</h3>
                        <p className="text-xs text-brand-grayMuted leading-relaxed">
                            Instalación, programación o emisión de planos finales.
                        </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 5 • Entrega del Proyecto</div>
                    </div>

                    {/* <!-- Step 6 --> */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">06</span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                                <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-brand-darkText mb-2">Pruebas y Aseguramiento de Calidad</h3>
                        <p className="text-xs text-brand-grayMuted leading-relaxed">
                            Inspección, validación, puesta en marcha y correcciones.
                        </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 4 • Ajustes</div>
                    </div>

                    {/* <!-- Step 7 --> */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
                        <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">07 </span>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-brand-darkText mb-2">Entrega y Soporte</h3>
                        <p className="text-xs text-brand-grayMuted leading-relaxed">
                            Documentación o acta final de entrega y cierre, capacitaciones, garantía y plan de mantenimiento.
                        </p>
                        </div>
                        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 4 • Cierre</div>
                    </div>
                            
                    </div>
                </div>
                </section>
                <Cta/>
            </div>
            <Footer />
        
            
                

            



        </>
    )
};
export default Home;