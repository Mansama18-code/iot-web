


function Proyectos_Lista() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <main className="py-16 text-left bg-surface max-w-full">
                <div className="max-w-7xl mx-auto px-margin">
                    {/*<!-- Section subheader notice -->*/}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-outline-variant/40">
                        <div>
                            <span className="text-xs font-label-uppercase text-primary font-semibold tracking-wider uppercase">Fichas de Auditoría Técnica</span>
                            <h2 className="text-headline-md font-headline-md text-on-surface mt-1">Estructura Estandarizada de Caso de Estudio</h2>
                        </div>
                        
                    </div>
                    {/*<!-- 4 PROJECTS GRID -->*/}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
                        {/*<!-- PROYECTO 1 -->*/}
                        <article className="project-card flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-category="bms">
                            {/*<!-- Card Image Header -->*/}
                            <div className="relative h-64 overflow-hidden group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern central water chiller mechanical room featuring high-capacity centrifugal chillers with blue steel piping, digital sensors, pressure gauges, and automated control valves in a pristine corporate high-rise facility in Panama City. Crisp industrial lighting, architectural corporate engineering photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTFIeXdrU9Js8R314HLfAn4Y4k2xoSr6sT8qvn349Vg21X8eVDIiQnP28l_zW-qidE2F8h8E4xzgAT7WQBHxlJDgogHk4_5menvB0u10T4xKmaSxVKeFG8f3DA6QkfLKknlYmB9aWxyVsGLmHoLDO1seBszXlbx9xbLysZyVXJHxIpYo-9dKk7cyGkRWvfKqQWuo5fVhw06NSzCg2yf2-tHF4ejKgL9J5w_UL8ED3I"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                {/*<!-- Badges -->*/}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-label-uppercase bg-primary text-on-primary font-semibold tracking-wide">
                                        AUTOMATIZACIÓN &amp; BMS
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                            Ciudad de Panamá, Panamá
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                        Torre Global Bank / Corporativo Clase A
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Card Body with Slide Fields -->*/}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                                <div className="space-y-3.5 text-body-md">
                                {/*<!-- Servicio -->*/} 
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">settings_suggest</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Servicio</span>
                                            <span className="text-sm font-medium text-on-surface">Automatización &amp; Control BMS</span>
                                        </div>
                                    </div>
                                {/*<!-- Alcance -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">domain_verification</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Alcance</span>
                                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                                Centralización operativa de 3 chillers centrífugos de 450 TR, monitoreo de 32 manejadoras de aire y submedición por piso.
                                            </p>
                                        </div>
                                    </div>
                                {/*<!-- Tecnología -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">memory</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Tecnología</span>
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">BACnet/IP</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Niagara 4</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">DDC Schneider / JCI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Resultado Highlight Box -->*/}
                                <div className="p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-container/30">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                        <span className="text-xs font-label-uppercase text-tertiary font-bold tracking-wide">RESULTADO COMPROBADO</span>
                                    </div>
                                    <p className="text-sm font-semibold text-on-surface">
                                                    31% de reducción comprobada en consumo de kWh y respuesta a incidencias en menos de 10 minutos.
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                                    <span className="text-xs text-outline font-body-sm">Auditoría Post-Entrega: 180 días</span>
                                    <a className="text-button-text font-button-text text-sm text-primary hover:text-secondary inline-flex items-center gap-1 group" href="#contacto">
                                        <span>Ver ficha técnica</span>
                                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        {/*<!-- PROYECTO 2 -->*/}
                        <article className="project-card flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-category="bim">
                                                    {/*<!-- Card Image Header -->*/}
                            <div className="relative h-64 overflow-hidden group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Digital 3D BIM model rendering of mechanical piping, HVAC ducted ventilation, and medical gas lines color-coded in cyan, green, and copper, overlaid on a modern hospital building floorplan. Technological precision visualization with clash detection overlays and clean high-tech engineering styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRF_VgQJT0aQMC1Do-TlS97_NB2J-2YLv9msycUdZD9joZ_2dhvNBX0ZUNS_KGj7e7_L0UYYuL6HhApx_Tb6qbkRsVb8ru6t_07ds2mFyCQN08_t1NFJ5BoPPvF9vhgJel8K7ZvA2UzeYZisVx5-DfYSW7uaizxm04I9Tgh5aP-K_a8uizTA3fRVhCW0YtTVxVhob63c8YeNwHuJlZph8eP-rn8StojpfEcttl1y_O"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    {/*<!-- Badges -->*/}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-label-uppercase bg-[#0F4C81] text-surface-bright font-semibold tracking-wide">
                                            BIM &amp; COORDINACIÓN MEP
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                        <div>
                                            <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Costa del Este, Panamá
                                            </p>
                                            <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                                Hospital Metropolitano San Cristóbal / Salud Crítica
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Card Body with Slide Fields -->*/}
                                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                                    <div className="space-y-3.5 text-body-md">
                                        {/*<!-- Servicio -->*/}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                                <span className="material-symbols-outlined text-lg">view_in_ar</span>
                                            </div>
                                            <div>
                                                <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Servicio</span>
                                                <span className="text-sm font-medium text-on-surface">Modelado BIM LOD 400 &amp; Coordinación MEP</span>
                                            </div>
                                        </div>
                                        {/*<!-- Alcance -->*/}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                                <span className="material-symbols-outlined text-lg">domain_verification</span>
                                            </div>
                                            <div>
                                                <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Alcance</span>
                                                <p className="text-sm text-on-surface-variant leading-relaxed">
                                                    Virtualización constructiva sin colisiones para gases medicinales, ductos HVAC con presión diferencial en 8 quirófanos y redes eléctricas de emergencia.
                                                </p>
                                            </div>
                                        </div>
                                        {/*<!-- Tecnología -->*/}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                                <span className="material-symbols-outlined text-lg">deployed_code</span>
                                            </div>
                                            <div>
                                                <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Tecnología</span>
                                                <div className="flex flex-wrap gap-1.5 mt-1">
                                                    <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Autodesk Revit MEP</span>
                                                    <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Navisworks Manage</span>
                                                    <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Scan to BIM LiDAR</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Resultado Highlight Box -->*/}
                                    <div className="p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-container/30">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                            <span className="text-xs font-label-uppercase text-tertiary font-bold tracking-wide">RESULTADO COMPROBADO</span>
                                        </div>
                                        <p className="text-sm font-semibold text-on-surface">
                                            Cero colisiones críticas en obra física (Clash-Free) y ahorro estimado de $120,000 en reprocesos de obra.
                                        </p>
                                    </div>
                                    {/*<!-- Footer Action -->*/}
                                    <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                                        <span className="text-xs text-outline font-body-sm">Validación: LOD 400 As-Built</span>
                                        <a className="text-button-text font-button-text text-sm text-primary hover:text-secondary inline-flex items-center gap-1 group" href="#contacto">
                                            <span>Ver ficha técnica</span>
                                            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                        </article>  
                        
                        {/*<!-- PROYECTO 3 -->*/}
                        <article className="project-card flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-category="bms">
                        {/*<!-- Card Image Header -->*/}
                            <div className="relative h-64 overflow-hidden group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Electrical automation control panel retrofit with neatly organized terminal blocks, Siemens and Johnson Controls DDC controllers, Ethernet switches, and variable frequency drives inside a commercial building mechanical room. High resolution engineering documentation style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuLlLyz7RMziOxCNrGIhRSjhiZY7sYQNe-2J7qye33Y4wvHKG7wWLZk7qy5fbHvRr-WEUWzq_YRJJQwgz_97EXxkgPC4PTC7S7wVnbtFsYVelBtioDPfHxKq04QZTd_lr2hHZtQgALnSMcD2EW1a2fusXJspMFBuca3lJ2l8MRB7RYpnuM8OpmxYvIpFN62nLmYjAScI9KRzgIhUBG6itBGr-zWrE9-RHY8PynWYhQ"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                {/*<!-- Badges -->*/}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-label-uppercase bg-primary text-on-primary font-semibold tracking-wide">
                                        RETROFIT TECNOLÓGICO BMS
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Punta Pacífica, Panamá
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                            Mall Multiplaza Pacific - Ala Ejecutiva / Comercial
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Card Body with Slide Fields -->*/}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                                <div className="space-y-3.5 text-body-md">
                                    {/*<!-- Servicio -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">published_with_changes</span>
                                        </div>
                                        <div>
                                        <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Servicio</span>
                                        <span className="text-sm font-medium text-on-surface">Retrofit Tecnológico &amp; Control DDC</span>
                                    </div>
                                </div>
                                {/*<!-- Alcance -->*/}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-lg">domain_verification</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Alcance</span>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">
                                            Sustitución de controladores neumáticos obsoletos por microprocesadores abiertos DDC en planta de agua helada y 45 cajas VAV sin interrumpir operaciones comerciales.
                                        </p>
                                    </div>
                                </div>
                                {/*<!-- Tecnología -->*/}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Tecnología</span>
                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">BACnet MS/TP &amp; IP</span>
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Variadores VFD</span>
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Lazos PID Sintonizados</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Resultado Highlight Box -->*/}
                            <div className="p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-container/30">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                    <span className="text-xs font-label-uppercase text-tertiary font-bold tracking-wide">RESULTADO COMPROBADO</span>
                                </div>
                                    <p className="text-sm font-semibold text-on-surface">
                                        Amortización de la inversión en 14 meses y eliminación total de zonas sobreenfriadas en pasillos comunes.
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                                    <span className="text-xs text-outline font-body-sm">Cero Tiempo de Inactividad Comercial</span>
                                    <a className="text-button-text font-button-text text-sm text-primary hover:text-secondary inline-flex items-center gap-1 group" href="#contacto">
                                        <span>Ver ficha técnica</span>
                                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    {/*<!-- PROYECTO 4 -->*/}
                    <article className="project-card flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-category="iot">
                        {/*<!-- Card Image Header -->*/}
                        <div className="relative h-64 overflow-hidden group">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Interior of an ultra-modern corporate office building in Costa del Este Panama showing sleek air quality indoor environmental sensors mounted on walls with ambient LED indicators and open sustainable wooden architecture. Professional clean daylight photography with green building certifications." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjst7ql4tJwRXN-Q3mYYiRjRQsZDjYqKEXpbxGSGIUNViAgHjYfCMjjO64qPwf54NZBfEUg2ditwt9TWHkdXfheopUyaroMA8VWDzz6NyuVAaN2Ixi2_1rvQUb1_A49FHuzpHQTvbOPc0kYoTaHWwrvp2UG1ptsKASnXLYdY2nixV395bbsNFVoJsaiWjLC7vYCqG4dExd5bjPyyXvYkpSTcdxAxnFbqoaEiXyfMfL"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            {/*<!-- Badges -->*/}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-label-uppercase bg-tertiary-container text-on-tertiary font-semibold tracking-wide">
                                        CALIDAD DE AIRE &amp; ESG
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Costa del Este, Panamá
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                            Complejo Corporativo Costa del Este / Sostenibilidad LEED
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Card Body with Slide Fields -->*/}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                                <div className="space-y-3.5 text-body-md">
                                    {/*<!-- Servicio -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">eco</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Servicio</span>
                                            <span className="text-sm font-medium text-on-surface">Telemetría IoT &amp; Gobernanza ESG</span>
                                        </div>
                                    </div>
                                    {/*<!-- Alcance -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">domain_verification</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Alcance</span>
                                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                                Integración de 65 estaciones de calidad de aire interior (IAQ: PM2.5, CO2, TVOC, HR) acopladas a la renovación forzada de aire exterior de los sistemas de ventilación.
                                            </p>
                                        </div>
                                    </div>
                                    {/*<!-- Tecnología -->*/}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-lg">network_check</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-label-uppercase text-outline font-semibold uppercase block">Tecnología</span>
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Sensores Modbus/BACnet</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Cloud API REST</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">LEED v4.1 O+M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Resultado Highlight Box -->*/}
                                <div className="p-4 rounded-xl bg-tertiary-fixed/20 border border-tertiary-container/30">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                                        <span className="text-xs font-label-uppercase text-tertiary font-bold tracking-wide">RESULTADO COMPROBADO</span>
                                    </div>
                                    <p className="text-sm font-semibold text-on-surface">
                                        Obtención de certificación LEED Gold y disminución comprobada del absentismo reportado en oficinas de arrendatarios.
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                                    <span className="text-xs text-outline font-body-sm">Acreditación: LEED Gold Certified</span>
                                    <a className="text-button-text font-button-text text-sm text-primary hover:text-secondary inline-flex items-center gap-1 group" href="#contacto">
                                        <span>Ver ficha técnica</span>
                                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>    
                        </article>
                    </div>
                </div>
            </main>
    
    
        </>);
    
}

export default Proyectos_Lista;