function Servicios() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <section className="py-16 lg:py-20 bg-brand-lightBg" data-purpose="core-services-cards" id="servicios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col" data-purpose="service-card">
              <div className="h-52 w-full overflow-hidden">
                <img alt="Sistemas Mecánicos y HVAC Industrial" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuz5A9pecMQf-a89GmIDuALIKz_zy7UEIa7eGH1yA7WISf3f_xNhRW1TRUhN44iu-Eh-KyzncY4TPm9s60DSclRdGTJJRkbjCfLMUvugCK0N2MNwh_MDpvqJMhH6Obmzl8Mt2hGZj4sFVDf9TCXvw_L16GzAMbaJAvW62oLj1vXeXS7gF0NiIawOHW1NJ_NC3Mz_l7hCCEPrPMIGRxFlMPVJiadfUMz75mTA0gTU7-HvjIA9KeRXpq0g"/>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-brand-bluePrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <h3 className="text-base font-bold text-brand-darkText">Servicios MEP</h3>
                  </div>
                  <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                      Diseño, instalación y optimización de sistemas mecánicos, eléctricos y de plomería.
                  </p>
                </div>
                <div>
                  <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#">
                    <span>Ver servicios</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col" data-purpose="service-card">
              <div className="h-52 w-full overflow-hidden">
                <img alt="Automatización y Control BMS" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24X8zw4FP7dDjtkccrnx98huJfzrMHI3JsaM3cn8wN4X0sKx0woI51oxAjcW98o7Y8SQ13F_ET-ZMFvhk2GknS7ZORWy-by5cebSDWrKpDTsGyaizJEnAlmvfafXKxqbXEQ_PhVc_ameh7LK3bL7M0IojfODn6vLosqgzx_Fnzw0Jc6hffercIqx_Tu7dIZBSRSxrKwx1fCrSe7N5mBppWYNjKQUSQvxkidVP_jShWI8cxQIZSHZxnQ"/>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-brand-bluePrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <h3 className="text-base font-bold text-brand-darkText">Automatización y Control</h3>
                  </div>
                  <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                        Sistemas BMS, DDC, IoT y domótica para una gestión inteligente.
                  </p>
                </div>
                <div>
                  <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#">
                    <span>Ver soluciones</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                  </a>
                </div>
              </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col" data-purpose="service-card">
            <div className="h-52 w-full overflow-hidden">
              <img alt="BIM y Coordinación de Proyectos" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvGU4MlbgO3GWjNQ_Enu9w1zKykqHlMkRkalEkljfppymg-r7lggdNAvexznpS07rSNv2AC27gvZprR4_bIQ4LIRE7YJIlnmDlWDX4-j7uwSFfQg-ZDVaqB2-AlGvRwI703AYq0vSO-9E2_obQglAeOEPkKXzLA0PJtJA2_uArrJDttVdhGPLvx6VkVn8TXO0O7G9Za81HOyFSmidBz2ocC-xIn7BaAB7QLOvqUPhMawHlQJwfMR3laQ"/>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-brand-bluePrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  <h3 className="text-base font-bold text-brand-darkText">BIM y Coordinación</h3>
                </div>
                <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                  Modelado, coordinación y supervisión para proyectos sin sorpresas.
                </p>
              </div>
              <div>
                <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#">
                  <span>Ver proyectos</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

      <section className="relative bg-brand-blueSecondary text-white py-12 overflow-hidden border-t border-blue-900" data-purpose="metrics-strip">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img alt="Background Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByp2dnJXtc9UVUU7fODOocqhRtaakA_R1V0L0H4GlRxuhJLrV8jb1HCKL0M_s1FbjfBI-VMGDMJdfqNjf88zdBuUC_SkqVlpunFJY-J6j4HphsV1G1_rFOhEgQs-FkjPWFEvxyqd9d4vU-AP1ouEYsG1a_wcYwerj9hwaQhFwU32UZw_9KzSXtHHNOiYm4nsTnewaEVOFsczhAbkbzZ2c5lhvrpBR5H0xOa_JBK4gIBMaquS89qTY8fg"/>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3.5" data-purpose="metric-item">
              <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-brand-bluePrimary bg-white/5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white">+30%</div>
                <div className="text-xs text-gray-300 font-normal">Eficiencia energética</div>
              </div>
            </div>
     
            <div className="flex items-center justify-center md:justify-start gap-3.5" data-purpose="metric-item">
              <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-brand-bluePrimary bg-white/5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
              </div>
              <div>
              <div className="text-2xl font-bold tracking-tight text-white">+40%</div>
              <div className="text-xs text-gray-300 font-normal">Reducción de incidencias</div>
            </div>
          </div>
     
          <div className="flex items-center justify-center md:justify-start gap-3.5" data-purpose="metric-item">
            <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-brand-bluePrimary bg-white/5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white leading-tight">Espacios</div>
              <div className="text-xs text-gray-300 font-normal">más confortables</div>
            </div>
          </div>
     
          <div className="flex items-center justify-center md:justify-start gap-3.5" data-purpose="metric-item">
            <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-brand-bluePrimary bg-white/5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white leading-tight">Menor huella</div>
              <div className="text-xs text-gray-300 font-normal">de carbono</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Servicios;