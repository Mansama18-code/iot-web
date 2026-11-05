import './Cta.css';

function Cta() {
    return (
        <section className="bg-brand-blueSecondary text-white text-left py-14 lg:py-16 relative overflow-hidden" data-purpose="cta-section" id="contacto">
            
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img alt="Architecture Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByp2dnJXtc9UVUU7fODOocqhRtaakA_R1V0L0H4GlRxuhJLrV8jb1HCKL0M_s1FbjfBI-VMGDMJdfqNjf88zdBuUC_SkqVlpunFJY-J6j4HphsV1G1_rFOhEgQs-FkjPWFEvxyqd9d4vU-AP1ouEYsG1a_wcYwerj9hwaQhFwU32UZw_9KzSXtHHNOiYm4nsTnewaEVOFsczhAbkbzZ2c5lhvrpBR5H0xOa_JBK4gIBMaquS89qTY8fg"/>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
                            Consultoría &amp; Ingeniería en Panamá
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                                ¿Tienes un proyecto de ingeniería, <span className="text-brand-accentOrange">automatización o digitalización?</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                            Permite que nuestro equipo evalúe tus requerimientos de MEP, BMS o IoT para maximizar la eficiencia operacional y el valor de tus instalaciones.
                        </p>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 flex-shrink-0">
                        <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-accentOrange hover:bg-brand-accentOrangeHover transition shadow-md" href="#">
                            <span>Solicitar cotización</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
    }

    export default Cta;