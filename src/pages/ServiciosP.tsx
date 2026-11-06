import Nav from '../Nav.tsx';

function ServiciosP() {
  return (
    <>
      <div >
        <Nav/>
      </div>
      {/*<!-- BEGIN: SECTION 1 - Diseños MEP -->*/}
      <section className="py-16 lg:py-20 bg-brand-lightBg text-left" id="mep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
                Capacidad 01
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
                Diseños MEP: Mecánica, Electricidad y Plomería
              </h2>
              <p className="text-sm sm:text-base text-brand-grayMuted max-w-2xl mt-3 leading-relaxed">
                Desarrollo riguroso de planos e ingenierías de detalle bajo estándares ASHRAE, NEC y NFPA, diseñados para optimizar el ciclo de vida y garantizar la eficiencia energética de la edificación.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-brand-grayBorder text-brand-blueSecondary shadow-xs">
                Acreditación Profesional SPIA &amp; ASHRAE
              </span>
            </div>
          </div>
          {/*<!-- Grid de 4 Cards estilo Home -->*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*<!-- MEP 1: Mecánica & HVAC -->*/}
            <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v18m0-18l3 3m-3-3l-3 3m0 12l3 3 3-3M3 12h18m-18 0l3-3m-3 3l3 3m12-6l3 3-3 3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-brand-darkText mb-2.5">Mecánica &amp; HVAC</h3>
                <p className="text-xs text-brand-grayMuted leading-relaxed mb-5">
                  Cálculo psicrométrico, selección de plantas de agua helada (Chillers), VRF/VRV, redes de conductos y ventilación forzada para control de calidad de aire interior.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Eficiencia térmica ASHRAE 90.1</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Modelado de cargas térmicas</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Presurización de escaleras</span>
                  </li>
                </ul>
              </div>
              <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1 pt-4 border-t border-gray-100" href="#contacto">
                <span>Consultar cálculo HVAC</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
              </a>
            </div>
            {/*<!-- MEP 2: Electricidad -->*/}
            <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-brand-darkText mb-2.5">Electricidad</h3>
                <p className="text-xs text-brand-grayMuted leading-relaxed mb-5">
                  Ingeniería eléctrica de potencia y distribución en baja y media tensión, subestaciones eléctricas, centros de carga, cálculos de cortocircuito y protecciones.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Generación crítica y sistemas UPS</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Puesta a tierra y pararrayos</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-brand-darkText">
                    <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                    <span>Código NEC / RIE Panamá</span>
                  </li>
                </ul>
              </div>
              <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1 pt-4 border-t border-gray-100" href="#contacto">
                <span>Consultar diseño eléctrico</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
              </a>
            </div>
            {/*<!-- MEP 3: Plomería & NFPA -->*/}
            <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
              </div>
              <h3 className="text-base font-bold text-brand-darkText mb-2.5">Plomería &amp; NFPA</h3>
              <p className="text-xs text-brand-grayMuted leading-relaxed mb-5">
                Dimensionamiento hidráulico para suministro de agua potable con bombeo hidroneumático inteligente, drenaje sanitario, reutilización de pluviales y contra incendio.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Redes de rociadores (NFPA 13)</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Bombeo de presión constante</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Trampas de grasa y tratamiento</span>
                </li>
              </ul>
            </div>
            <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1 pt-4 border-t border-gray-100" href="#contacto">
              <span>Consultar diseño hidráulico</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
            </a>
          </div>
            {/*<!-- MEP 4: Coordinación MEP -->*/}
          <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-brand-darkText mb-2.5">Coordinación MEP</h3>
              <p className="text-xs text-brand-grayMuted leading-relaxed mb-5">
                          Integración espacial multidisciplinaria anticipada para erradicar inconsistencias entre tuberías, ductos y bandejas antes de compras y construcción física.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Cero reprocesos en obra</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Planos de taller para fabricación</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-brand-darkText">
                  <svg className="w-4 h-4 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  <span>Matriz de holguras sísmicas</span>
                </li>
              </ul>
            </div>
            <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1 pt-4 border-t border-gray-100" href="#contacto">
              <span>Solicitar coordinación</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
            </a>
          </div>
        </div>
      </div>
      </section>{/*
      <!-- END: SECTION 1 -->
      <!-- BEGIN: SECTION 2 - BIM & Digitalización -->*/}
      <section className="py-16 lg:py-20 bg-white border-b border-brand-grayBorder text-left" id="bim">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
                        Capacidad 02
                      </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
                        BIM &amp; Digitalización: Virtualización y precisión constructiva
                      </h2>
              <p className="text-sm sm:text-base text-brand-grayMuted mt-3 leading-relaxed">
                        Transformamos planos 2D convencionales en modelos de información de la construcción (BIM) tridimensionales de alta fidelidad. Desarrollamos gemelos digitales paramétricos que asisten en la cuantificación, presupuestación y operación.
                    </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <div className="bg-brand-lightBg px-4 py-2.5 rounded-xl border border-brand-grayBorder flex items-center gap-2.5">
                <svg className="w-5 h-5 text-brand-bluePrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                <div>
                <div className="font-bold text-xs text-brand-darkText">Estándar ISO 19650</div>
                <div className="text-[11px] text-brand-grayMuted">Gestión digital de información</div>
              </div>
            </div>
            <div className="bg-brand-lightBg px-4 py-2.5 rounded-xl border border-brand-grayBorder flex items-center gap-2.5">
              <svg className="w-5 h-5 text-brand-bluePrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
              <div>
                <div className="font-bold text-xs text-brand-darkText">Modelos LOD 300 - 400</div>
                  <div className="text-[11px] text-brand-grayMuted">Precisión constructiva exacta</div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- 3 Featured Bento Cards con Fotos Reales estilo Home -->*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*<!-- BIM 1 -->*/}
            <article className="bg-white rounded-2xl overflow-hidden shadow-clean hover:shadow-clean-hover border border-brand-grayBorder flex flex-col group transition-all duration-300">
              <div className="h-52 w-full overflow-hidden relative">
                <img alt="Modelado BIM Paramétrico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvqq99qyCTo01g9Y1Gs3pDqbKYC8hc7NM-NEHZq3xIFE2noQ2KJILc0CqLMWUDqXWmEneDmuuxPC4IK2f1WJ6B_fCl9222OrRuAd6Y1D9ipVWJDTg6FwTBE9M-odH050XRNNrUp_-8ccm_vhFuJx2y2k4avu5mtcyhLqATF9zHxzeskgLQyN9HvcCcBA7eNP8I7p57sLGhwWqkbvxz5K7AG0Dvy0G2m8kz_5FAHVQB"/>
                <div className="absolute top-3.5 left-3.5 bg-brand-blueSecondary/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                  Autodesk Revit &amp; Navisworks
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-brand-darkText mb-2">Modelado BIM Paramétrico</h3>
                  <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                    Creación de modelos de información constructiva detallados para todas las disciplinas. Extracción automática de cómputos métricos, tablas de cantidades exactas y compatibilización espacial.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brand-grayMuted">LOD 300 - LOD 400</span>
                  <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#contacto">
                    <span>Conocer más</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  </a>
                </div>
              </div>
            </article>
            {/*<!-- BIM 2 -->*/}
            <article className="bg-white rounded-2xl overflow-hidden shadow-clean hover:shadow-clean-hover border border-brand-grayBorder flex flex-col group transition-all duration-300">
              <div className="h-52 w-full overflow-hidden relative">
                <img alt="Coordinación &amp; Detección de Interferencias" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVIKcY6plv4rNvsYz6Hf-4NeDZxLVxDuAMcCYqz8sLk5T4SRx15bI42yqMYeVXVdHmqhMRaMYQF4BYh-GRJozD_u4eX3HYRhNFLrt9qixW836B0EkgDmxJMY-4_t9i07lFJkZ6A1epnyCsZUHkcyWyYdKf3KuBaz8Hv5Le4g4o5aZ3D4iebmcaeJEPUdLzbNLnFxkuRN8XuyOkaBN5qor_8jelL_yMI2vr7pRktNfG"/>
                <div className="absolute top-3.5 left-3.5 bg-brand-accentOrange text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  Clash Detection Automatizado
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-brand-darkText mb-2">Coordinación &amp;   Detección</h3>
                  <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                    Auditorías de colisiones duras (Hard Clashes) y tolerancias de mantenimiento (Soft Clashes). Emisión de informes estructurados BCF (BIM Collaboration Format) para contratistas generales.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brand-grayMuted">Ahorro hasta 18% en obra</span>
                  <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#contacto">
                    <span>Conocer más</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  </a>
                </div>
              </div>
            </article>
            {/*<!-- BIM 3 -->*/}
            <article className="bg-white rounded-2xl overflow-hidden shadow-clean hover:shadow-clean-hover border border-brand-grayBorder flex flex-col group transition-all duration-300">
              <div className="h-52 w-full overflow-hidden relative">
                <img alt="Scan to BIM / Láser 3D" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-z23x2uKYa08kY5u_QYWUvacLoRUOFhmnOVhSMQpsGn1XLEuKhQKErO6PGuAoKe_dut5wkD_FCvUlDHGcSCkNwh02P_2wZ_0hRE_oQvMK6_6xMcwHRCZz5ZWAc3Wh31Np8btL5vZanSE03ds_ocz6Avil4In_HBANQkP9wzWQ1ub_ek2pa0d2Tc5eqAb6iXe0ip6dRCC55bydHMUAy66iVblwPDQmy2JMoJ87X6Kj"/>
                <div className="absolute top-3.5 left-3.5 bg-brand-bluePrimary text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  Levantamiento LiDAR 3D
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-brand-darkText mb-2">Scan to BIM / Láser 3D</h3>
                  <p className="text-xs text-brand-grayMuted leading-relaxed mb-6">
                    Levantamiento de instalaciones existentes mediante nubes de puntos de alta densidad. Modelamos el estado 'As-Built' real para proyectos de remodelación, modernización o auditoría técnica.
                  </p>  
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brand-grayMuted">Nube de puntos + Revit</span>
                  <a className="inline-flex items-center text-xs font-semibold text-brand-accentOrange hover:underline gap-1" href="#contacto">
                    <span>Conocer más</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/*<!-- END: SECTION 2 -->
         <!-- BEGIN: SECTION 3 - Automatización & Control -->*/}
      <section className="py-16 lg:py-20 bg-brand-lightBg text-left" id="automatizacion">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
              Capacidad 03
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
              Automatización &amp; Control: <span className="text-brand-blueSecondary">Cerebro Operacional del Edificio</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-grayMuted mt-3 leading-relaxed">
              Sistemas que toman decisiones autónomas para equilibrar el confort de los ocupantes y el uso racional de la energía mediante controladores lógicos de campo y supervisión centralizada.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/*<!-- Left: BMS Featured Card -->*/}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-brand-grayBorder shadow-clean flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                    <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-lightBg text-brand-blueSecondary border border-brand-grayBorder">
                  Protocolo Nativo BACnet / IP
                </span>
              </div>
            <h3 className="text-xl font-bold text-brand-darkText mb-3">
              BMS (Building Management Systems)
            </h3>
            <p className="text-xs sm:text-sm text-brand-grayMuted mb-6 leading-relaxed">
              Diseño, suministro y puesta en marcha de estaciones de trabajo y servidores BMS que integran la supervisión en tiempo real de plantas enfriadoras (chillers), bombas de condensación, unidades manejadoras de aire (UMA) y subestaciones eléctricas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-gray-100">
                <div className="font-bold text-xs text-brand-darkText mb-1">Sinópticos Dinámicos</div>
                <div className="text-[11px] text-brand-grayMuted leading-normal">Visualización gráfica 3D del estado de operación de cada equipo.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-gray-100">
                <div className="font-bold text-xs text-brand-darkText mb-1">Alarmas Inteligentes</div>
                <div className="text-[11px] text-brand-grayMuted leading-normal">Notificaciones     tempranas vía correo ante anomalías operativas.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-gray-100">
                <div className="font-bold text-xs text-brand-darkText mb-1">Programación Horaria</div>
                <div className="text-[11px] text-brand-grayMuted leading-normal">Encendido y apagado optimizado por calendarios y feriados.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-gray-100">
                <div className="font-bold text-xs text-brand-darkText mb-1">Historiador de Datos</div>
                <div className="text-[11px] text-brand-grayMuted leading-normal">Tendencias para auditorías energéticas y mantenimiento predictivo.</div>
              </div>
            </div>
          </div>
          <a className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-blueSecondary hover:bg-opacity-90 self-start transition" href="#contacto">
            <span>Diseñar solución BMS para tu edificio</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
          </a>
        </div>
            {/* <!-- Right: DDC & Lazos PID --> */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-brand-grayBorder shadow-clean flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-accentOrange flex items-center justify-center mb-6">
              <svg className="w-7 h-7 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-darkText mb-3">
              Control Digital Directo (DDC)
            </h3>
            <p className="text-xs sm:text-sm text-brand-grayMuted mb-6 leading-relaxed">
              Programación precisa a nivel de microprocesador para controladores lógicos programables de campo. Implementamos lazos PID de respuesta rápida para modulación de válvulas y variadores de frecuencia (VFD).
            </p>
            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-2.5 text-xs text-brand-darkText">
                <svg className="w-4 h-4 text-brand-accentOrange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                <div>
                  <span className="font-semibold block">Control de Presión Diferencial</span>
                  <span className="text-brand-grayMuted text-[11px]">Ajuste de velocidad de bombas secundarias para reducir energía.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-brand-darkText">
                <svg className="w-4 h-4 text-brand-accentOrange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                <div>
                  <span className="font-semibold block">Ventilación por Demanda (DCV)</span>
                  <span className="text-brand-grayMuted text-[11px]">Regulación de aire fresco según niveles de CO2 en recintos cerrados.</span>
                </div>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-brand-darkText">
              <svg className="w-4 h-4 text-brand-accentOrange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
              <div>
                <span className="font-semibold block">Tableros de Control Certificados</span>
                <span className="text-brand-grayMuted text-[11px]">Ensamblados y rotulados bajo directrices y normativas UL 508A.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-3.5 rounded-xl bg-brand-lightBg border border-gray-100 text-[11px]">
          <span className="font-semibold text-brand-grayMuted uppercase tracking-wider block mb-1">Compatibilidad garantizada:</span>
          <span className="text-brand-darkText font-medium">Johnson Controls • Siemens • Honeywell • Schneider Electric • Distech Controls</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*<!-- END: SECTION 3 -->
         <!-- BEGIN: SECTION 4 - IoT & Smart Buildings (Banda Azul Oscura Corporativa #0F4C81 como en Home) -->*/}
<section className="bg-brand-blueSecondary text-white text-left py-16 lg:py-20 relative overflow-hidden" id="iot">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="max-w-3xl mb-12">
      <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
        Capacidad 04
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        IoT &amp; Smart Buildings: <span className="text-brand-accentOrange">Conectividad y Telemetría en la Nube</span>
      </h2>
      <p className="text-sm sm:text-base text-gray-200 font-light mt-3 leading-relaxed">
        Llevamos los datos de las instalaciones electromecánicas a la nube para generar información accionable que reduce costos de operación, extiende la vida útil de los activos y promueve la sostenibilidad.
      </p>
    </div>
    {/*<!-- 4 Bento Cards para IoT -->*/}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/*<!-- IoT 1 -->*/}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/15 text-brand-accentOrange flex items-center justify-center mb-4">
            <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 className="text-base font-bold text-white mb-2">Domótica &amp; Inmótica</h3>
          <p className="text-xs text-gray-200 leading-relaxed mb-4">
            Control unificado de iluminación, cortinas motorizadas, accesos biométricos y climatización zoned para residencias de lujo y oficinas de alta gama.
          </p>
        </div>
        <div className="pt-3 border-t border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-brand-accentOrange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
          <span>Apple Home, KNX &amp; Crestron</span>
        </div>
      </div>
     {/*<!-- IoT 2 -->*/}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/15 text-brand-bluePrimary flex items-center justify-center mb-4">
            <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 className="text-base font-bold text-white mb-2">Monitoreo &amp; Cloud</h3>
          <p className="text-xs text-gray-200 leading-relaxed mb-4">
            Telemetría remota 24/7 de sensores ambientales (PM2.5, CO2, TVOC), vibración de rodamientos en bombas y consumo hídrico con dashboards en smartphone.
          </p>
        </div> 
        <div className="pt-3 border-t border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
          <span>AWS IoT Core &amp; Azure IoT</span>
        </div>
      </div>
            {/*<!-- IoT 3 -->*/}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/15 text-brand-accentOrange flex items-center justify-center mb-4">
            <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 className="text-base font-bold text-white mb-2">Redes LoRaWAN &amp; IoT</h3>
          <p className="text-xs text-gray-200 leading-relaxed mb-4">
            Despliegue de pasarelas (Gateways) LoRaWAN de largo alcance, redes Zigbee y puentes Modbus-to-MQTT para digitalizar edificios sin cableados invasivos.
          </p>
        </div>
        <div className="pt-3 border-t border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-brand-accentOrange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
        <span>Sensores grado industrial</span>
      </div>
    </div>
            {/*<!-- IoT 4 -->*/}
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all">
      <div>
        <div className="w-10 h-10 rounded-xl bg-white/15 text-brand-bluePrimary flex items-center justify-center mb-4">
          <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <h3 className="text-base font-bold text-white mb-2">Gestión Energética ESG</h3>
        <p className="text-xs text-gray-200 leading-relaxed mb-4">
          Sub-medición por circuitos eléctricos y chillers. Análisis tarifario y cálculo de huella de carbono para certificaciones LEED, EDGE y reportes corporativos.
        </p>
      </div>
      <div className="pt-3 border-t border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-brand-bluePrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
        <span>Ahorro promedio 25-35% mensual</span>
      </div>
    </div>
  </div>
          {/*<!-- Barra de Telemetría Inferior -->*/}
  <div className="mt-10 bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
        <div>
          <div className="font-bold text-xs sm:text-sm text-white">Ecosistema IoT Operativo en Panamá</div>
          <div className="text-[11px] text-gray-300">+4,850 puntos de datos procesados por minuto en tiempo real</div>
        </div>
      </div>
      <a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-accentOrange hover:bg-brand-accentOrangeHover transition shadow-sm" href="#contacto">
        <span>Solicitar demo de monitoreo IoT</span>
      </a>
    </div>
  </div>
</section>
      {/*<!-- END: SECTION 4 -->
         <!-- BEGIN: SECTION 5 - Capacitación Técnica -->*/}
<section className="py-16 lg:py-20 bg-white border-b border-brand-grayBorder text-left" id="capacitacion">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
      <div className="lg:col-span-7">
        <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
          Capacidad 05
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
          Capacitación Técnica Especializada
        </h2>
        <p className="text-sm sm:text-base text-brand-grayMuted mt-3 leading-relaxed">
          Transferencia tecnológica y formación in-company y abierta para ingenieros, técnicos de mantenimiento y operadores de edificios en Panamá y la región.
        </p>
      </div>
      <div className="lg:col-span-5 flex lg:justify-end">
        <div className="bg-brand-lightBg p-4 rounded-xl border border-brand-grayBorder max-w-sm">
          <div className="font-bold text-xs text-brand-darkText mb-1 flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-accentOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            <span>Certificación Oficial de Horas</span>
          </div>
          <p className="text-[11px] text-brand-grayMuted leading-relaxed">
            Programas con horas de desarrollo profesional continuo para agremiados y profesionales de ingeniería.
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/*<!-- Curso 1 -->*/}
      <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-4">
          <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <h3 className="text-sm font-bold text-brand-darkText mb-2">BIM / Revit MEP</h3>
        <p className="text-xs text-brand-grayMuted leading-relaxed mb-4">
          Modelado paramétrico de ductos, tuberías y circuitos eléctricos. Rutinas Dynamo y detección de colisiones con Navisworks.
        </p>
        <span className="text-[11px] font-semibold text-brand-bluePrimary">Modalidad: Teórico-Práctico (40h)</span>
      </div>
      {/*<!-- Curso 2 -->*/}
      <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-4">
          <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      <h3 className="text-sm font-bold text-brand-darkText mb-2">Automatización BMS</h3>
      <p className="text-xs text-brand-grayMuted leading-relaxed mb-4">
          Secuencias lógicas de control para plantas de agua helada, lazos PID, optimización horaria y gestión de alarmas operativas.
      </p>
      <span className="text-[11px] font-semibold text-brand-bluePrimary">Modalidad: Laboratorio Simulado (32h)</span>
    </div>
    {/*<!-- Curso 3 -->*/}
    <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-4">
        <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </div>
      <h3 className="text-sm font-bold text-brand-darkText mb-2">Programación PLC</h3>
      <p className="text-xs text-brand-grayMuted leading-relaxed mb-4">
          Lógica Ladder, Bloques de Funciones (FBD) y Texto Estructurado para autómatas industriales en climatización y bombeo.
      </p>
      <span className="text-[11px] font-semibold text-brand-bluePrimary">Modalidad: Banco de Prueba Práctico</span>
    </div>
    {/*<!-- Curso 4 -->*/}
    <div className="bg-white rounded-2xl p-6 border border-brand-grayBorder shadow-clean hover:shadow-clean-hover transition-all">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-bluePrimary flex items-center justify-center mb-4">
          <svg className="w-5 h-5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <h3 className="text-sm font-bold text-brand-darkText mb-2">Redes BACnet &amp; MQTT</h3>
        <p className="text-xs text-brand-grayMuted leading-relaxed mb-4">
          Topologías de red MS/TP, IP, diagnósticos con Wireshark y configuración de pasarelas IoT a plataformas en la nube.
        </p>
        <span className="text-[11px] font-semibold text-brand-bluePrimary">Modalidad: Especialización Avanzada</span>
      </div>
    </div>
  </div>
</section>
      {/*<!-- END: SECTION 5 -->
<!-- BEGIN: Metodología de Ejecución (4 Pasos Rigurosos) -->*/}
<section className="py-16 lg:py-20 bg-brand-lightBg text-left">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
        Metodología Comprobada
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-darkText">
        Cómo ejecutamos nuestros servicios
      </h2>
      <p className="text-sm sm:text-base text-brand-grayMuted mt-3 leading-relaxed">
        Un proceso sistemático de 4 etapas que asegura cumplimiento normativo, control de presupuesto y cero sorpresas en la entrega de la obra.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/*<!-- Step 1 -->*/}
      <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">01</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
              <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
          <h3 className="text-sm font-bold text-brand-darkText mb-2">Diagnóstico &amp; Factibilidad</h3>
          <p className="text-xs text-brand-grayMuted leading-relaxed">
            Levantamiento técnico en sitio, análisis de factibilidad energética, evaluación de cargas y términos de referencia iniciales.
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
                <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
            </div>
            <h3 className="text-sm font-bold text-brand-darkText mb-2">Ingeniería &amp; BIM</h3>
            <p className="text-xs text-brand-grayMuted leading-relaxed">
              Memorias de cálculo, planos detallados, selección de equipos de alta eficiencia y modelado paramétrico 3D sin colisiones.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 2 • Diseño LOD 400</div>
        </div>
            {/*<!-- Step 3 -->*/}
        <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-extrabold text-brand-bluePrimary/30">03</span>
              <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
                <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
            </div>
            <h3 className="text-sm font-bold text-brand-darkText mb-2">Puesta en Marcha (Cx)</h3>
            <p className="text-xs text-brand-grayMuted leading-relaxed">
              Instalación de controladores, comisionamiento (Commissioning) y calibración hidrónica/aerólica según tolerancias de diseño.
            </p>
          </div>
        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 3 • Pruebas TAB</div>
      </div>
      {/* <!-- Step 4 --> */}
      <div className="bg-white p-6 rounded-2xl border border-brand-grayBorder shadow-clean flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-extrabold text-brand-bluePrimary/30">04</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-bluePrimary flex items-center justify-center">
              <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            </div>
          </div>
          <h3 className="text-sm font-bold text-brand-darkText mb-2">Soporte &amp; Telemetría</h3>
          <p className="text-xs text-brand-grayMuted leading-relaxed">
            Monitoreo continuo IoT, capacitación del personal operativo y contratos de mantenimiento predictivo y preventivo.
          </p>
        </div>
        <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-brand-grayMuted font-medium">Fase 4 • Operación Continua</div>
      </div>
    </div>
  </div>
</section>
      {/* <!-- BEGIN: CTA Section de Cierre (Estilo Home) --> */}
<section className="bg-brand-blueSecondary text-left text-white py-16 lg:py-20" id="contacto">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8">
        <span className="text-xs uppercase font-semibold text-brand-bluePrimary tracking-wider block mb-2">
          Atención Profesional Inmediata
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          ¿Necesitas soporte técnico o diseño especializado para tu próximo proyecto?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 font-light max-w-2xl leading-relaxed">
          Conversemos con tu equipo de proyectos o gerencia técnica para definir el alcance, costos y cronograma de implementación de tus sistemas MEP, HVAC, BIM o IoT en Panamá.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-brand-accentOrange font-bold">•</span>
            <span>Ciudad de Panamá, Panamá</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-accentOrange font-bold">•</span>
            <span>ingenieria@iotpanama.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-accentOrange font-bold">•</span>
            <span>+507 300-4567</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
        <a className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-accentOrange hover:bg-brand-accentOrangeHover transition shadow-sm text-center" href="#">
          <span>Solicitar cotización</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
          </svg>
        </a>
        <a className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-transparent border border-white hover:bg-white/10 transition text-center" href="#">
          Agendar reunión técnica
        </a>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
}

export default ServiciosP;