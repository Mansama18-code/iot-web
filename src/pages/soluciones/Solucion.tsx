
import './Solucion.css'; 

function Solucion() {
    // const [count, setCount] = useState(0)

    return (
        <>
        {/*<!-- 3. ENFOQUE DIFERENCIAL (SERVICIOS VS. SOLUCIONES) -->*/}
        <section className="py-12 bg-surface-container border-y border-outline-variant/60">
          <div className="max-w-7xl mx-auto px-margin">
            <div className="text-left bg-gradient-to-r from-secondary to-primary text-white p-8 md:p-10 rounded-2xl shadow-hover relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-white">
                <span className="material-symbols-outlined text-[220px]" data-icon="psychology_alt">psychology_alt</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[28px]" data-icon="lightbulb">lightbulb</span>
                  </div>
                  <div>
                    <span className="font-label-uppercase text-label-uppercase text-tertiary-fixed tracking-widest block mb-1">FILOSOFÍA DE INGENIERÍA IOT</span>
                      <h2 className="font-headline-md text-headline-sm md:text-headline-md font-bold leading-tight mb-2">
                        ¿Por qué hablar de Soluciones y no solo de Servicios?
                      </h2>
                    <p className="font-body-md text-body-md text-white/90 max-w-3xl leading-relaxed">
                      <strong className="text-white font-semibold">SERVICIOS</strong> = Lo que Ingeniería IoT sabe hacer (diseño MEP, código, instalación física). <br className="hidden sm:inline"/>
                      <strong className="text-tertiary-fixed font-semibold">SOLUCIONES</strong> = El dolor específico que tu edificio, tus finanzas y tus usuarios necesitan resolver con urgencia.
                    </p>
                  </div>
                </div>
                <a className="shrink-0 bg-white hover:bg-surface-container-low text-primary font-button-text text-button-text px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm" href="#contacto">
                  Plantear un Desafío →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* 4. DESGLOSE DETALLADO DE LAS 6 SOLUCIONES CLAVE */}
        <section className="py-20 lg:py-28 bg-surface-container-lowest" id="catalogo-soluciones">
          <div className="max-w-7xl mx-auto px-margin">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-label-uppercase text-label-uppercase text-primary font-semibold tracking-wider block mb-2">CATÁLOGO ESTRATÉGICO</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
                  Respuestas de Ingeniería a Problemas Complejos
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Estructuramos nuestras capacidades en seis soluciones modulares diseñadas para resolver puntos críticos de ineficiencia, sobrecostos y riesgo operativo.
                </p>
            </div>
            {/* Grid of 6 High-Precision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solución 01: Edificios Inteligentes */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Integrated BMS command center screen showing digital twins and floor plans of a smart corporate building in Panama, high contrast clean graphic UI in blue and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPOXXMHZPsl3L0jXldJaTjG1a4CR_HhdBTxtqIDMeND5fuhJs8bzRYKp2jKR7BynWHDpUnS0hdPu6lPUNUfzt4cFfWPK2vOGR3sjqa4nVAHnbOvHoTw1y634jrLnHYrAm0sIgkRZzENEMLFR07aOSvlxw6CUtiazqvFn0mUa4XJRRE44QZ-xPLpc0QobzcxgmqgrEs97cig12Eemo0hMdGSeuWblYINs4xnV1R9-LK"/>
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                      SOLUCIÓN 01
                    </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined text-[28px]" data-icon="domain">domain</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Edificios Inteligentes</h3>
                  <p className="font-body-sm text-[13px] text-primary-container font-medium mb-4">Integración centralizada de sistemas MEP y BMS</p>
                  {/*<!-- Pain Point Box -->*/}
                  <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                    <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                      <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                        Sistemas aislados (HVAC, iluminación, control de acceso) que no se comunican, provocando silos operativos, fallas no detectadas y sobrecostos.
                      </p>
                  </div>
                  {/*<!-- Solution & Benefits -->*/}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                    Implementamos una plataforma unificada bajo protocolos abiertos (BACnet/IP, Modbus, MQTT) que consolida toda la operación técnica en un único panel de comando.
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary-container" data-icon="check_circle">check_circle</span>
                      <span>Visibilidad total en tiempo real</span>
                    </li>
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary-container" data-icon="check_circle">check_circle</span>
                      <span>-60% tiempo de respuesta a incidencias</span>
                    </li>
                  </ul>
                  <a className="inline-flex items-center gap-2 font-button-text text-button-text text-primary hover:text-primary-container transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                    <span>Cotizar integración de edificio</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
              {/*<!-- Solución 02: Eficiencia Energética -->*/}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Digital energy metering analyzer installed inside a clean industrial electrical switchboard cabinet showing active kilowatt hour readings in sharp high detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2W88EQRwK0zclm16UJ1iy7aV_nb_QIoMt0PjnkGLu2dAM21V_uB4K3UGhpE_1VggUgxB-LphbJBAYuz6-5XLSFTxyeYK4waPwdTDHg787X8tIK48ivx8bDimVIYXEQ7hBvYizHELU6rQlBLmtJbVdHUzmyL-3lNb2kCUXS-0y1tZTdSvUXuui8RzbGQacN0WQRgNGAQDZJfGuPSr5uI_LzxbtAydbJt5CdonmjAW"/>
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                    SOLUCIÓN 02
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container mb-4">
                    <span className="material-symbols-outlined text-[28px]" data-icon="energy_savings_leaf">energy_savings_leaf</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Eficiencia Energética</h3>
                  <p className="font-body-sm text-[13px] text-tertiary-container font-medium mb-4">Monitoreo continuo y optimización de consumo</p>
                  {/*<!-- Pain Point Box -->*/}
                  <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                    <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                    <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                      Facturas eléctricas elevadas, picos de demanda descontrolados y penalizaciones tarifarias recurrentes en el mercado eléctrico panameño.
                    </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                    Auditoría energética automatizada, submedición por pisos o cargas críticas y algoritmos que nivelan demandas energéticas sin comprometer el confort.
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="check_circle">check_circle</span>
                      <span>Ahorros de 20% a 40% en kWh facturado</span>
                    </li>
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="check_circle">check_circle</span>
                      <span>Datos listos para certificación LEED &amp; EDGE</span>
                    </li>
                  </ul>
                  <a className="inline-flex items-center gap-2 font-button-text text-button-text text-tertiary-container hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                    <span>Auditar mi consumo energético</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
              {/* Solución 03: Automatización HVAC */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Rooftop chiller plant and insulated air duct distribution system with automated motorized valves and sensors in an architectural building setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhhuwnDhjxVDTTcwOprl-ba9uLH8giq-D367ujNzBG4vA9gAhfFWezP5WrXQxbboiCsqaHU6jT6fHGuShZ8HdcvEbBhNdrqM7v6XaXOJBo9XAyDnGb7Mq9bebv6zrs4rrmkhpZ8LGDoEG_RGCepwtmPa-Qcy72QlW81f1N16zOSpOOTnOuZDl7dUjCXuJnl-6J01dYglCUKExHuVIhhkuwQOfsvLGY9PtaOJO9pIkQ"/>
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                  SOLUCIÓN 03
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-[28px]" data-icon="hvac">hvac</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Automatización HVAC</h3>
                <p className="font-body-sm text-[13px] text-secondary font-medium mb-4">Control inteligente de climatización y equipos</p>
                {/*<!-- Pain Point Box -->*/}
                <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                  <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    Chillers y manejadoras de aire operando al 100% sin modulación, quejas recurrentes de usuarios y desgaste prematuro de compresores.
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                  Control Digital Directo (DDC) con lazos PID sintonizados, variadores de frecuencia (VFD) y modulación de flujo según la carga térmica y ocupación real.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-secondary" data-icon="check_circle">check_circle</span>
                    <span>Confort térmico adaptativo sin zonas frías</span>
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-secondary" data-icon="check_circle">check_circle</span>
                    <span>+40% extensión en vida útil de compresores</span>
                  </li>
                </ul>
                <a className="inline-flex items-center gap-2 font-button-text text-button-text text-secondary hover:text-primary transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                  <span>Optimizar sistema HVAC</span>
                  <span>→</span>
                </a>
              </div>
            </div>
            {/* Solución 04: Monitoreo IoT & Telemetría */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Industrial IoT wireless sensor mounted on water pipe and motor pump transmitting telemetry data with clean LED indicator light in mechanical room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkVVEUa3u38qT5HE2t3MMGAPmveBFZdj-bN0UjWbjlcdHfEz2u41DS-mTiNqHfHvVJV0s7ARY9xLGvTP3Wqrtdj3cAjghVU3FQ7RLxI3A-WFi2dj9Bb_evrKpMmRiG9mtCLoCgy16LvpV50fttFb_fv8xr0P9vr8OSxiFxNvf3AlZSAFdqEzClcV1gyH3F9fEoXCMM49pTfw2qCnmoBQf_3cOpKpzjXfNgxYYb3k-"/>
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                  SOLUCIÓN 04
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]" data-icon="sensors">sensors</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Monitoreo IoT &amp; Telemetría</h3>
                <p className="font-body-sm text-[13px] text-primary-container font-medium mb-4">Sensores, datos y alertas operativas 24/7</p>
                {/*<!-- Pain Point Box -->*/}
                <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                  <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    Mantenimiento puramente correctivo ("apaga-fuegos") cuando una bomba se traba, se quema un motor o se inunda un cuarto técnico.
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                  Redes inalámbricas LoRaWAN y gateways industriales que censan vibración, temperatura, fugas y calidad de aire con tableros web en tiempo real.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary-container" data-icon="check_circle">check_circle</span>
                    <span>Alertas push inmediatas al smartphone</span>
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary-container" data-icon="check_circle">check_circle</span>
                    <span>Diagnósticos predictivos pre-falla</span>
                  </li>
                </ul>
                <a className="inline-flex items-center gap-2 font-button-text text-button-text text-primary hover:text-primary-container transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                  <span>Implementar telemetría IoT</span>
                  <span>→</span>
                </a>
              </div>
            </div>
            {/* Solución 05: Modernización de Instalaciones (Retrofit) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img className="w-full h-Namefull object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Electrical engineer upgrading an older mechanical automation control panel with modern digital modules and labeled wiring in commercial facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf09NHJoDvo11npgp09GHXos8DoqaSE3d8t-LPW3q4sBGp5tuBTkw_Ms4mkjTpRk_mZy3JJ5tWMnKimU-alC1bz3-YbuL33y-N9TTyf0VkJUkP80R1N2nUu-20ZuoRUjNDIJedUGJ_GTOWkK95Nr_HXGBYV_5g5C6nugMBCwQwiM6nlQB00UJPWf-jJGrgNmjurWd28hM9xRfHm2vGgV4-bRrpIA08wDvBhT_UDLMs"/>
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                    SOLUCIÓN 05
                  </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]" data-icon="upgrade">upgrade</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Modernización de Instalaciones</h3>
                <p className="font-body-sm text-[13px] text-tertiary-container font-medium mb-4">Retrofit tecnológico sin parar operaciones</p>
                {/* Pain Point Box */}
                <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                  <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    Edificaciones de 10 a 25 años con equipamiento descontinuado, sin repuestos y con protocolos propietarios cerrados que impiden crecer.
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                  Estrategia de Retrofit por fases: sustitución de controladores obsoletos por tecnología abierta y escalable sin interrumpir a los ocupantes.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="check_circle">check_circle</span>
                    <span>Revalorización del activo inmobiliario</span>
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="check_circle">check_circle</span>
                    <span>Inversión hasta 65% menor que reemplazo total</span>
                  </li>
                </ul>
                <a className="inline-flex items-center gap-2 font-button-text text-button-text text-tertiary-container hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                  <span>Evaluar plan de retrofit</span>
                  <span>→</span>
                </a>
              </div>
            </div>
            {/*<!-- Solución 06: Smart Homes & Domótica Residencial -->*/}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxurious modern smart apartment interior with integrated ambient lighting keypad and wall mounted touch panel displaying climate and audio settings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACSQhmAuil-0Vnz5b1u3GizCfhfete4bZxke6SXashM43rOiXlBaUcz-SJDItZ05hcaSIJZW2LXkHhS_cdukJRhKOw1p3VhAEhGdW2oyIR-Ozr5aop5mgkiZsUbUEDpr-Rm01kKwkVjkpecCcTDC6I7vm8dR1Ck2UVOBQTzBPRe5Df5foceDVW4HMYFVH9svSlESU7Z3mKn5Y6MCaSXaeIzEhl8FyPHgbJJmz70cKy"/>
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-primary border border-slate-200">
                  SOLUCIÓN 06
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-[28px]" data-icon="home_app_logo">home_app_logo</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Smart Homes de Alto Nivel</h3>
                  <p className="font-body-sm text-[13px] text-secondary font-medium mb-4">Automatización residencial, confort y seguridad</p>
                  {/*<!-- Pain Point Box -->*/}
                  <div className="bg-surface-container-low rounded-xl p-3.5 mb-4 border-l-4 border-error/70">
                    <span className="text-[11px] font-bold text-error tracking-wider uppercase block mb-1">El Desafío Crítico:</span>
                      <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                        Complejidad frustrante con múltiples mandos y apps no interconectadas para aire acondicionado, audio, persianas, cámaras e iluminación.
                      </p>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow">
                    Ecosistemas integrados basados en estándares de grado profesional (KNX, Crestron, Control4) adaptados al estilo de vida de residencias exclusivas.
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary" data-icon="check_circle">check_circle</span>
                      <span>Escenas integradas personalizadas con 1 toque</span>
                    </li>
                    <li className="flex items-center gap-2 font-body-sm text-[13px] text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary" data-icon="check_circle">check_circle</span>
                      <span>Máxima privacidad y control seguro remoto</span>
                    </li>
                  </ul>
                  <a className="inline-flex items-center gap-2 font-button-text text-button-text text-secondary hover:text-primary transition-colors group-hover:translate-x-1 duration-200 mt-auto" href="#contacto">
                    <span>Automatizar residencia</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* 5. MATRIZ DE APLICABILIDAD POR SECTOR */}
          <section className="py-20 bg-surface-container-low border-y border-outline-variant/60">
            <div className="max-w-7xl mx-auto px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <span className="font-label-uppercase text-label-uppercase text-primary font-semibold tracking-wider block mb-2">SECTORES VERTICALES</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface">
                    ¿Cómo se Aplican en tu Sector?
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-3 md:mt-0">
                  Diseñamos soluciones personalizadas que respetan los requerimientos técnicos y estándares regulatorios de cada industria.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Sector 1: Hotelería */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-hover transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined" data-icon="hotel">hotel</span>
                  </div>
                  <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-2">Hotelería &amp; Hospitalidad</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Gestión inteligente de habitaciones (GRMS). Ahorro energético en habitaciones vacías y confort óptimo en check-in.
                  </p>
                  <span className="font-label-uppercase text-[11px] font-semibold text-primary block">Clave: VRF &amp; Sensores PIR</span>
                </div>
              {/* Sector 2: Torres Corporativas */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-hover transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-2">Torres Corporativas</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Sub-medición energética para cobros justos a inquilinos y control centralizado de chillers y ventilación mecánica.
                </p>
                <span className="font-label-uppercase text-[11px] font-semibold text-secondary block">Clave: BMS Central &amp; LEED</span>
              </div>
              {/* Sector 3: Retail & Malls */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-hover transition-all">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary-container mb-4">
                  <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-2">Centros Comerciales</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Control horario de áreas comunes, control de calidad del aire interior (IAQ) y monitoreo de bombeo hidroneumático.
                </p>
                <span className="font-label-uppercase text-[11px] font-semibold text-tertiary-container block">Clave: Horarios &amp; Calidad Aire</span>
              </div>
              {/* Sector 4: Hospitales */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-hover transition-all">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600 mb-4">
                  <span className="material-symbols-outlined" data-icon="local_hospital">local_hospital</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-2">Hospitales &amp; Salud</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Control riguroso de presión positiva/negativa en quirófanos, filtración HEPA y monitoreo ininterrumpido de plantas de respaldo.
                </p>
                <span className="font-label-uppercase text-[11px] font-semibold text-red-600  block">Clave: Presión Crítica &amp; Redundancia</span>
              </div>
              {/*<!-- Sector 5: Logística e Industria -->*/}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-hover transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-800/10 flex items-center justify-center text-slate-800 mb-4">
                  <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                </div>
                <h4 className="font-headline-sm text-body-lg font-bold text-on-surface mb-2">Industria &amp; Logística</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  Telemetría de cuartos fríos y bodegas refrigeradas con trazabilidad de cadena de frío y alertas tempranas por falla.
                </p>
                <span className="font-label-uppercase text-[11px] font-semibold text-slate-800 block">Clave: Telemetría LoRaWAN &amp; Alarmas</span>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- 6. PROCESO DE ACOMPAÑAMIENTO AL CLIENTE -->*/}
        <section className="py-20 lg:py-24 bg-surface-container-lowest" id="proceso">
          <div className="max-w-7xl mx-auto px-margin">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-uppercase text-label-uppercase text-primary font-semibold tracking-wider block mb-2">METODOLOGÍA DE VALOR</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-3">
                De la Detección del Problema al Retorno Real
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Un proceso transparente sin sorpresas técnicas ni sobrecostos imprevistos.
              </p>
            </div>
            <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white font-bold flex items-center justify-center mb-6 text-lg">
                  01
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Evaluación y Diagnóstico</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Estudio de Requerimientos, inspección técnica y difinición de alcance.
                </p>
              </div>
              {/*<!-- Step 2 -->*/}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center mb-6 text-lg">
                  02
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Propuesta Comercial / Aprobación</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Detalle de solución, presupuesto, cronograma, orden de proceder y firma de contrato.
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-white font-bold flex items-center justify-center mb-6 text-lg">
                  03
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Ingeniería y diseño</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Gestión de cálculos, planos, arquitectura de sistemas y modelos BIM, soluciones de automatización.
                </p>
              </div>
              {/*<!-- Step 4 -->*/}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-on-surface text-white font-bold flex items-center justify-center mb-6 text-lg">
                  04
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Coordinación y Aprobación</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Revisión interdisciplinaria, interferencias y aprobación de cliente. 
                </p>
              </div>

              {/*<!-- Step 5 -->*/}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white font-bold flex items-center justify-center mb-6 text-lg">
                  05
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Implementación de diseño o proyecto</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Instalación, programación o emisión de planos finales.
                </p>
              </div>

              {/*<!-- Step 6 -->*/}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center mb-6 text-lg">
                  06
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Pruebas y aseguramiento de Calidad</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Inspección, validación, puesta en marcha y correciones.
                </p>
              </div>

              {/*<!-- Step 7 -->*/}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-soft flex flex-col">
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-white font-bold flex items-center justify-center mb-6 text-lg">
                  07
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Entrega y soporte</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Documentación o acta final de entrega y cierre, capacitaciones, garantía y plan de mantenimiento.
                </p>
              </div>

            </div>
          </div>
        </section>
        {/*<!-- 7. BANNER DE CONVERSIÓN CTA -->*/}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0F4C81] via-[#0B355A] to-[#0A192F] text-white relative overflow-hidden" id="contacto">
          {/* Ambient geometric accent */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-margin relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-tertiary-fixed font-label-uppercase text-label-uppercase tracking-wider mb-4">
                CONSULTORÍA ESPECIALIZADA EN PANAMÁ
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold leading-tight mb-4">
                ¿Tienes un reto específico de climatización, consumo o automatización en tu edificio?
              </h2>
              <p className="font-body-lg text-body-lg text-white/80 mb-8 leading-relaxed">
                Permite que nuestro equipo de ingenieros evalúe tus instalaciones sin costo de compromiso. Te presentaremos un plan técnico claro y con retorno verificable.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a className="bg-tertiary-container hover:bg-tertiary text-on-tertiary font-button-text text-button-text px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group" href="mailto:contacto@ingenieriaio.com">
                  <span>Solicitar cotización personalizada</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                </a>
                <a className="border-2 border-primary-container text-white hover:bg-primary-container/20 font-button-text text-button-text px-8 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2" href="tel:+5073000000">
                  <span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
                  <span>Agendar videollamada con un ingeniero</span>
                </a>
              </div>
              <p className="font-body-sm text-[12px] text-white/60 mt-6">
                Atención comercial en Ciudad de Panamá, Costa del Este, Panamá Pacífico y Provincias Centrales.
              </p>
            </div>
          </div>
        </section>
            
        </>);

}
export default Solucion;