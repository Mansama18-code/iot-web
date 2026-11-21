


function Proyectos_Lista() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <main className="py-16 text-left bg-surface max-w-full">
                <div className="max-w-7xl mx-auto px-margin">
                    {/*<!-- Section subheader notice -->*/}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-outline-variant/40">
                        <div>
                            <span className="text-xs font-label-uppercase text-primary font-semibold tracking-wider uppercase">Fichas de</span>
                            <h2 className="text-headline-md font-headline-md text-on-surface mt-1">Proyectos</h2>
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
                                        ETIQUETA #1
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                            Localidad 1
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                            Proyecto 1
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
                                            <span className="text-sm font-medium text-on-surface">Nombre del Servicio 1</span>
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
                                                Descripción del Alcance
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
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech1</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech2</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech3</span>
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
                                                    Descripción del Resultado...
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                               
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
                                           ETIQUETA #2
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                        <div>
                                            <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Localidad 2
                                            </p>
                                            <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                                Proyecto 2
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
                                                <span className="text-sm font-medium text-on-surface">Nombre del Servicio 2</span>
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
                                                    Descripción del Alcance 2
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
                                            Descripción del Resultado 2
                                        </p>
                                    </div>
                                    {/*<!-- Footer Action -->*/}
                                    
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
                                        ETIQUETA #3
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Localidad 3
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                            Proyecto 3
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
                                        <span className="text-sm font-medium text-on-surface">Nombre del Servicio 3</span>
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
                                            Descripción del Alcance 3
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
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech1</span>
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech2</span>
                                            <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech3</span>
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
                                        Descripción del Resultado 3
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                                
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
                                        ETIQUETA #4
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                                    <div>
                                        <p className="text-xs font-body-sm text-surface-container-high flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                                                Localidad 4
                                        </p>
                                        <h3 className="text-headline-sm font-headline-sm text-white font-bold drop-shadow">
                                            Proyecto 4
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
                                            <span className="text-sm font-medium text-on-surface">Descripción del Alcance 4</span>
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
                                                Descripción del Resultado 4
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
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech 1</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech 2</span>
                                                <span className="px-2 py-0.5 rounded bg-surface-container text-xs font-body-sm text-primary font-medium">Tech 3</span>
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
                                        Descripción del Resultado 4
                                    </p>
                                </div>
                                {/*<!-- Footer Action -->*/}
                                
                            </div>    
                        </article>
                    </div>
                </div>
            </main>
    
    
        </>);
    
}

export default Proyectos_Lista;