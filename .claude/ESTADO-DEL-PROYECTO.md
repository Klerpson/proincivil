# Estado del proyecto — PROINCIVIL

**Última actualización:** 2026-10-28

## Iniciativas activas

| Iniciativa | Estado | Detalle |
|---|---|---|
| Investigación de mercado, keywords y arquitectura | ✅ Cerrada 2026-09-22 | `_plans/investigacion-web-seo-proincivil.md` (v2) + `_plans/research/` |
| Construcción del sitio Jekyll (82 URLs) | ✅ Compila y valida 2026-09-22 | Todo el contenido escrito como borrador; falta aprobación del cliente, fotografía real y publicación |
| Equipo real y retratos con camiseta | 🟡 Implementación local 2026-10-16 | Diseño aprobado en Home, Nosotros y Equipo; siete perfiles, Liquid + CSS y ajuste mínimo de posición móvil. `_plans/equipo-2026-10-16/` |
| Comparación con formulario comercial del cliente | 🟡 Revisada 2026-10-16 | Redes y correo integrados localmente; propuesta editorial por página en `_plans/comparacion-brief-proincivil-2026-10-16.md`; pendientes porcentajes, Tacuara y alcance Perú |
| Validación SEO de prioridades y solapamientos | 🟡 Auditada 2026-10-16, implementación pendiente | Ranki: 31 keywords CO, 9 PE y 5 SERP; mapa de intenciones y competencia en `_plans/seo-prioridades-2026-10-16/estrategia-seo.md` |
| Aprobación de contenido por el cliente | ⏳ No iniciada | Todo el contenido es borrador hasta aprobación escrita (contrato) |
| Publicación en GitHub Pages | ✅ 2026-09-22 | https://klerpson.github.io/proincivil/ · repo https://github.com/Klerpson/proincivil (público) |
| Dominio propio + indexación | ⏳ Bloqueada | Falta que PROINCIVIL compre `proincivil.com`; hasta entonces `vista_previa: true` |
| Entrega de pendientes al cliente | ✅ 2026-09-22 | `_plans/PENDIENTES-Y-PREGUNTAS-PROINCIVIL.md` y `.pdf` (5 páginas, 11 preguntas) |
| Fase SEO mensual | ⏳ Arranca al entregar el sitio | Plan de 12 meses en la sección 13 de la investigación |
| Nueva identidad de marca (Estudio dositres) sobre «Plano vivo» | 🟡 Aplicada local 2026-10-21, compila y valida, sin commitear | Paleta, Manrope/Garet y logos en tokens y archivos, sin tocar reglas CSS/JS. Falta aprobación visual. Ver bitácora |
| Keyword research por ciudades de Colombia | 🟡 Investigación cerrada 2026-10-27; `/zonas/pereira/` en borrador retenido | `_plans/research/ciudades-colombia-2026-10-27.md`: ranking de ciudades, gaps, TF-IDF, PAA. Siguen Bogotá, Barranquilla, guía de licencia en Bogotá y posts de sismo |
| Reestructuración del menú de servicios y cobertura nacional (pedido de la clienta del 27-10) | 🟡 Implementada local 2026-10-27, sin commitear | 5 familias en lugar de 6, 4 URLs nuevas (vías, refracción sísmica, topografía, verticalidad), BIM retirada con redirect, home con «ingenieros estructurales en Colombia» y «desde 2019». Investigación en `_plans/research/reestructuracion-servicios-2026-10-27.md`; 12 preguntas en `_plans/pendientes/servicios-2026-10-27.md` |
| Rediseño total «Plano vivo» + contenido según el formulario del 14-10 | 🟡 Home y piloto implementados localmente 2026-10-21, sin commitear | Borrado todo el CSS/JS/markup visual anterior (Pliego y Plano sellado descartados). Dirección: `_plans/direccion-diseno-plano-vivo-2026-10-21.md`; fuente de contenido: `_plans/brief-contenido-2026-10-21.md`. Falta: aprobación visual del cliente, diseño fino de hub/article/project/post y tuteo de la prosa de las colecciones retenidas |

## Pendientes del cliente (bloquean publicación)

Consolidado en `_plans/pendientes/*.md` (cada redactor deja los suyos). Los críticos:

1. Cifras oficiales: años (+5 / +7), proyectos (+50 / +100), m². Hoy `_config.yml` usa las del flyer.
2. ✅ Correo público confirmado 2026-10-16 mediante formulario del 2026-10-14, Z2: `proyectos@proincivil.com`, aplicado en `_config.yml`. E2 es contacto principal `gerencia@proincivil.com`; no confundirlo con el público. No se probó recepción del buzón.
3. Autorización para publicar nombres de proyectos y clientes (Honda/Super Motos, Hotel The One, Tacuara).
4. Datos de cada proyecto marcados `PENDIENTE` (año, niveles) y fotografías B/N.
5. Equipo: recibidos nombres, formación y fotos de siete personas (2026-10-16). Kateryn Andrea Palacio y Camilo Tamayo Restrepo actualizados; Valentina y Juan Felipe añadidos. Pendientes: apellidos de quienes solo enviaron nombre, matrículas y aprobación visual del retoque con IA.
6. Textos institucionales aprobados sin la palabra "construcción".
7. Rangos de precio (o negativa expresa) para `_cuanto-cuesta/`.
8. Umbrales vigentes de Ley 1796 / Decreto 945 confirmados por el Ing. Tamayo.
9. Endpoint de formulario (Formspree/Web3Forms) → `form_endpoint` en `_config.yml`; GA4 → `ga4_id`;
   verificación de Search Console → `google_site_verification`; Google Business Profile → `social.google_business`.
10. Logo vectorial: el estudio entregó variantes PNG del logo nuevo (2026-10-21) y están en `img/logo-proincivil*.png`; sigue pendiente el vectorial (SVG/AI).

## Problemas abiertos

- 🟡 SEO editorial: title del servicio de interventoría y blog coinciden en «cuándo es obligatoria». Separar enfoque comercial e informativo. Zonas y glosario siguen retenidos; revisar Home/Envigado y evaluación/glosario de patología antes de activarlos. No hay diagnóstico de canibalización real con GSC en esta revisión.

- 🟠 Nuevo formulario (2026-10-14): declara 97 % de aprobación en primera radicación, mientras el sitio aún mantiene 100 % en Home, diseño y curadurías. Segunda tanda editorial debe reconciliar el dato y las menciones repetidas; no extrapolar el porcentaje global a casos individuales.
- 🟠 Tacuara: R2 del formulario ubica el caso en Dosquebradas, Risaralda y distingue diagnóstico terminado/vulnerabilidad en curso; la ficha local aún dice Antioquia y necesita revisión de alcance, descripción y clasificación territorial.
- 🟡 Enfoque comercial del formulario: diseño como principal, patología/vulnerabilidad como segundo foco, cobertura Colombia–Perú y diagnóstico con información previa. Propuesta por página documentada; no aplicada durante la comparación. Revisar promesas de propuesta/diagnóstico en 24 h.

- 🟠 Imágenes: 14 juegos de fotografía recuperados del PDF del portafolio para ~40 páginas, así que
  algunas fichas de proyecto muestran una foto **referencial** de otro proyecto (documentado en
  `_plans/pendientes/README.md`). Falta la fotografía B/N propia del cliente.
- 🟡 Formulario inactivo hasta configurar `form_endpoint` (muestra aviso + WhatsApp).
- 🟡 Nav de escritorio con paneles por `:hover`; en pantallas táctiles grandes (tablet horizontal) el
  panel se abre con el checkbox. Verificar en iPad.
- 🟡 Colecciones retenidas (normativa, glosario, zonas, edificaciones, cuánto cuesta): listas de disparadores y datos corregidos, pero la prosa sigue en usted. Pasar a tuteo antes de activarlas.
- 🟡 Política de datos queda en usted (texto legal). Confirmar con el usuario si también va en tuteo.
- 🟡 `Portafolio.pdf` y `Flyer Proincivil.pdf` de `_plans/` pesan 0 bytes: pedir de nuevo los archivos al cliente.
- 🟡 Por confirmar con la clienta: nombre oficial del CEC, si COPNIA se refiere a matrículas del equipo, "Diseño integral" del Hotel Aldea, afirmaciones "15–30 %" y "cero colapsos", testimonio de Energética (viene del sitio anterior, el formulario no trae testimonios).
- 🟡 Las fotos `hero-estructura` (home) y `estructura-metalica` (piloto) parecen la misma toma: conviene otra foto real para el piloto.

## Backlog

- Posts de sismo con plantilla `< 24 h` tras cada evento sentido en Antioquia (categoría `sismos`).
- `/recursos/` con checklists descargables (documentos para curaduría, revisión post-sismo).
- Reseñas de Google en la home cuando existan (nunca `aggregateRating` hardcodeado).
- Página de empresa en LinkedIn y perfil de Google Business (NAP idéntico al de `_config.yml`).

## Bitácora

### 2026-10-27 (tarde) — Todos los enlaces de WhatsApp salen de un include
- El usuario preguntó por botones de WhatsApp «con otra maquetación». El de las FAQ ya venía de `button.html` (variante `contorno`, a propósito). Fuera del include había `wa.me` a mano sin mensaje en el pie (las 50 páginas), en la lista de contacto (los 2 números) y en el flotante (con su propio bloque de mensaje en `default.html`).
- Nuevo `_includes/wa-href.html`: arma la URL con número y mensaje prellenado. Lo usan `button.html` y `sticky-cta-mobile.html`; se borró el bloque duplicado de `default.html`. `button.html` suma `numero=` y la variante `texto` (enlace normal sin icono, para párrafos y listas). El pie y contacto pasan por `button.html`; dirección técnica usa `whatsapp_2` con su propio mensaje. Contacto lleva `wa_mensaje`. Documentado en `.claude/CLAUDE.md`.
- Verificado: 322 enlaces `wa.me` en el build, 0 sin mensaje, 0 mal codificados, todos con `data-location`; `auditoria.py` ya no avisa de `wa.me` sin mensaje; `validar-site.py` 0 problemas. Sin commit.

### 2026-10-27 (tarde) — Menú de servicios con 5 familias, 4 páginas nuevas y el sitio deja de presentarse solo en Envigado
**Contexto:** la clienta pidió: «evaluación post-sismo»; vulnerabilidad dentro de patología; «Suelos» con geotecnia (estudio de suelos) y línea sísmica; topografía y análisis de verticalidad separados, sin BIM; quitar carports y cimentaciones del menú y añadir vías; cobertura en toda Colombia y Perú desde 2019; aprovechar «ingeniero(s) estructural(es) + ciudad». Decisiones del usuario: página propia para línea sísmica (alcance PENDIENTE) y para verticalidad; dos ítems «Diseño estructural en concreto y acero» y «Estructuras metálicas» (sin URL de concreto); vías según intención de búsqueda, recordando que diseñan y no construyen.
- Ubersuggest CO, 27-10: ingenieros estructurales 70 (pico de 390 en ago-2026), ingeniero estructural 390 (la mitad es empleo), Bogotá 50, Medellín 40, Pereira 20; evaluación post sismo 10; refracción sísmica 40 + MASW 20; levantamiento topográfico 590; diseño placa huella 170 (SERP con PDF y DA 1); pavimento rígido 480; «pavimentos colombia» es marca; estructuras metálicas 2.900; estructuras de concreto 50. Tablas y SERP en `_plans/research/reestructuracion-servicios-2026-10-27.md`.
- Menú (`_data/navegacion.yml`) y paneles (`_data/familias.yml`): 5 familias. Panel de Servicios con `disposicion: columnas` → `.menu__panel--columnas` en `base.css` (columnas CSS que se llenan por altura, `column-span: all` para «Todos los servicios»): 4 columnas a 1.152 px de panel, 3 a 880 px, sin celdas vacías.
- Nuevas: `/servicios/diseno-de-vias-y-pavimentos/`, `/servicios/refraccion-sismica/`, `/servicios/levantamiento-topografico/` (con `redirect_from: /servicios/bim-y-topografia/`) y `/servicios/analisis-de-verticalidad/` (caso Tacuara). `bim-y-topografia.md` borrada; su BIM pasó a un H2 de diseño estructural. Cimentaciones conserva su URL fuera del menú, enlazada desde geotecnia, el hub y las páginas que ya la citaban.
- Editadas: post-sismo (H1, title y menú con «post-sismo»; dato del sismo del 10-08-2026 y salto de búsquedas de 30 a 390), estructuras metálicas (sin carports en H1/title, H2 propio de estructuras para paneles solares), diseño estructural (H2 de concreto y acero, «ingeniero calculista», BIM, amenaza sísmica por ciudad según el Apéndice A-4), geotecnia (título «Geotecnia (estudio de suelos)», enlaces a línea sísmica, vías y cimentaciones), vulnerabilidad, curadurías y descriptions de evaluación, reforzamiento, interventoría y STI sin «Medellín/Antioquia». `orden` renumerado del 1 al 17; slugs en `lint-frontmatter.py`; servicios de Hotel Aldea, IE Yerbal y Tacuara actualizados.
- Cobertura: home «Ingenieros estructurales en Colombia que optimizan sin comprometer», title «Ingenieros estructurales en Colombia y Perú», eyebrow «Desde 2019 · Sede en Envigado · Colombia y Perú»; `_config.yml` (description, `site_meta`, `fundacion` confirmada), nosotros, equipo, contacto, hub de servicios, eyebrow por defecto de `header.html`, `manifest.json`, `llms.txt`, `knowsAbout` del schema. Envigado queda como sede (NAP). Patrón para las zonas (otro chat): H1 «Ingenieros estructurales en [ciudad]».
- Verificado: lint 71/0, build 50 páginas, `validar-site.py` 0 problemas, redirect de BIM correcto, 0 `style=` en el HTML servido, sin desborde a 390 y 320 px en 14 páginas, 1 H1 por página, contador de paneles «05», 0 carports y 0 BIM en el menú. `auditoria.py`: CSS crítico 5.039 B gzip (presupuesto 5.120); los avisos de wa.me y clases sin uso ya existían. `revisor-geo` aplicado en las 4 páginas nuevas, solo en lo verificable: vías cita la Resolución 4401 de 2017 (guía de placa huella del INVÍAS) y el Manual de diseño geométrico 2008, con H2 nuevo de vías terciarias; topografía cita la Resolución 462 de 2017 (MAGNA-SIRGAS) y la Ley 70 de 1979, y quita los equipos sin confirmar; refracción corrige la tabla A.2.4-1 (signos y arcilla blanda en E), el procedimiento A.2.4.5, el alcance de ASTM D5777-18 (solo ondas P) y añade la microzonificación; verticalidad cita la tolerancia de ACI 117-10 como referencia de construcción. Borradas del cuerpo las cifras de Ubersuggest. Seis verificaciones técnicas añadidas a los pendientes (13 a 18). Build final: lint 71/0, 50 páginas, 0 problemas. Sin commit.

### 2026-10-28 (tarde) — Las 7 zonas en el layout `zona` con datos verificados
**Contexto:** el usuario pidió llevar el diseño de Pereira a las otras seis zonas.
- Verificación de fuentes por un agente (citas textuales y URL): NSR-10 Título A 2010 (tabla A.2.3-2 y apéndice A-4) para Medellín, Envigado, Rionegro, La Ceja, El Retiro, Puerto Triunfo, Bogotá (intermedia, Aa 0,15), **Mutatá (alta, Aa 0,25) y Betulia 05093 (alta, Aa 0,20)**, Barranquilla (baja, Aa 0,10) y Pereira (alta, Aa 0,25, verificado en el mismo PDF). Curadurías de Medellín (4, Alcaldía). Microzonificación de Medellín 1999, Valle de Aburrá 2002, detallada para 7 municipios + Itagüí y Bello, armonización AMVA–Uniandes 2015-2016. 10 municipios del AMVA. Cenizas volcánicas de ≈1 m en Rionegro y ≈2 m en Llanogrande sobre el Batolito Antioqueño. Depósitos de vertiente en Envigado y El Poblado. Decreto 523 de 2010 de Bogotá (16 zonas de respuesta sísmica). Arcillas expansivas en Barranquilla.
- Escena firma distinta por zona (para no clonar páginas): Envigado = protocolo de lote en ladera + corte de vertiente; Medellín = árbol diseño/revisión/edificio existente + interventoría del Hotel The One; Área Metropolitana = árbol por municipio + 3 verificaciones antes de radicar; Oriente = corte de cenizas + árbol casa/bodega/edificio; Antioquia = protocolo de colegio público + árbol Mutatá/Betulia/Puerto Triunfo + 5 casos; Colombia = árbol diseño tipo en 3 ciudades + coordinación remota + 3 casos.
- Componentes: ficha sin ubicador cuando la zona no tiene puntos (`ficha-zona__rejilla--sin-mapa`), cajetín 2×2 con 4 datos y último dato a 2 columnas con 5, recuadro del ubicador acotado al plano y coordenada en la esquina, `zoom.foto`/`zoom.alt` propios, `nombre_amenaza` en `_data/ciudades.yml`, casos que ya no muestran valores PENDIENTE de la ficha. Fotos de 440 px reemplazadas como cabecera o zoom.
- Promesas de plazo retiradas («visita el mismo día»). Verificado: lint 71/0, build 50/0, 0 PENDIENTE y 0 `style=` en las 7 zonas, 390/320 px sin desborde, Lighthouse móvil Envigado y Antioquia 100/100 (SEO 69 por noindex). Sin commit.
- Pendientes con la clienta: número de curadurías de Envigado (sin fuente oficial; el sitio dice Primera y Segunda), qué entidad licencia en Rionegro, La Ceja y El Retiro, si Hispania está en amenaza alta como Betulia, y aprobación de todo el texto nuevo.

### 2026-10-28 — Acceso a las zonas desde todo el sitio
**Contexto:** el usuario preguntó por dónde se llega a las zonas (solo estaban en el submenú Nosotros y en el pie).
- Menú: «Zonas» pasa a primer nivel (entre Proyectos y Nosotros) con submenú Antioquia (5) / Resto del país (2) y «Mapa de proyectos y zonas»; se quitó de Nosotros. El pie sigue igual.
- Home: escena `mapa` (id `mapa-proyectos`) después del equipo + banda «Ver las 7 zonas donde trabajamos».
- Fichas de proyecto: enlace «Ingeniería estructural en {lugar}: amenaza sísmica, suelos y curadurías» según `zona:`. Tacuara pasa de `zona: colombia` a `zona: pereira`.
- Servicios: bloque «Por ciudad» (`#por-ciudad`) generado con las zonas que listan el servicio en `relacionados`; anclas «Diseño estructural en el Área Metropolitana». Nuevo campo `lugar` en cada zona (forma dentro de una frase). 13 servicios lo muestran.
- Resultado: cada zona recibe enlaces de 48 páginas. Lint 71/0, build 50 páginas/0 problemas, 390/320 px sin desborde. Sin commit.
- Pendiente: solo Pereira usa el layout `zona` con ficha, protocolo y mapa; las otras 6 siguen en el layout de servicio, de usted y sin datos con fuente.

### 2026-10-27 (noche) — Más puntos de WhatsApp y botón verde en la barra
**Contexto:** el usuario solo veía el botón del hero y pidió el CTA de la barra en el mismo verde del principal.
- `nav.html`: el «Conversemos» de la barra fija pasa de contorno a sólido verde (`--ambar`), más compacto (`.barra .boton`). Decisión del usuario: se aparta de la regla «un botón sólido por pantalla» en la primera pantalla (barra + hero).
- Escenas con botón opcional `boton{texto, mensaje, variante}` y data-location propio: `protocolo` (por paso, `protocolo-paso-N`), `decision`, `corte` (`suelo`), `foco` (= id), `ficha-zona` (`ficha`, con `pregunta`), `mapa` (`mapa`). `faqs.html` cierra con «¿Tu pregunta no está aquí? Pregúntanos por WhatsApp» (contorno, `preguntas`) en todo el sitio. Layout `service`: botón sólido tras los entregables (`entregables`).
- Pereira pasa de 2 a 11 CTA (7 en el cuerpo, mensajes prellenados por contexto: fotos de grietas, reforzar o demoler, estudio de suelos, observaciones de curaduría); hub de zonas 7; servicios 8; home 7. Sin data-location repetidos. Lint 0, validación 50 páginas/0, 320 px sin desborde. Sin commit.

### 2026-10-27 (tarde) — Pereira y hub de zonas rediseñados con escenas; zonas activadas en local
**Contexto:** el usuario rechazó el borrador de Pereira («artículo de periódico mal hecho, párrafos gigantes, sin maquetación») y pidió páginas a la altura del resto, con 21st.dev y skills de diseño, y un hub de zonas espectacular.
- Referencias 21st.dev: Interactive Globe Explorer (lista de ciudades sincronizada con el mapa) y Timeline de Aceternity (línea que se traza con el scroll), reimplementadas en CSS/JS nativo.
- Nuevo layout `zona` y 5 escenas reutilizables (catálogo en la skill `dev-jekyll`): `mapa` (plano de levantamiento con retícula y coordenadas reales de `_data/ciudades.yml`; completo en el hub, mini con cruz de replanteo en cada zona), `ficha-zona` (ubicador + `.datos--cajetin` con fuente por dato), `protocolo` (5 pasos después del temblor), `decision` (árbol reforzar/reparar/demoler) y `corte` (cenizas de 6 a 20 m sobre roca, sondeo que perfora). `foco` admite `texto`. `hub` admite `mapa:`.
- `_zonas/pereira.md` reescrito solo con front matter estructurado (cero prosa de artículo, cero PENDIENTE visibles). `zonas.html`: mapa de 8 lugares reales, amenaza alta/intermedia/baja con DES/DMO/DMI, a distancia vs en sitio y tarjetas de las 7 zonas.
- **Zonas activadas** (`secciones_publicadas` + `output: true` + hub publicado). Sigue `vista_previa: true` (noindex). Las otras 6 zonas tienen títulos de bloque con ciudad, pero su prosa sigue en usted y con el diseño de servicio: rehacerlas con el layout `zona` antes de un push.
- Verificado: lint 68/0, build 46 páginas/0 problemas, 0 `style=` en el HTML de zonas, sin CSS sin uso, 390/320 px sin desborde, Lighthouse móvil Pereira 100/96 (proporción de foto en `casos`, previo) y hub 100/100; SEO 69 por noindex. Servidor local en el puerto 4001. Sin commit.

### 2026-10-27 — Keyword research por ciudades y borrador de Pereira
**Contexto:** el usuario pidió atacar ciudades del país: keyword research completo, competencia, TF-IDF, gaps, keywords de oportunidad, long tail y preguntas de «Más preguntas».
- Fuentes: Ubersuggest CO (30 consultas: semillas, 8 SERP, dominio), Google CO desde Chrome (42 búsquedas con PAA y relacionadas; Google mostró CAPTCHA en las últimas 4 y se paró ahí, sin esquivarlo), TF-IDF de 24 páginas que rankean (script en el scratchpad de la sesión), `_plans/Guiones Proincivil — Pauta Pereira.pdf`. Sin GSC (sitio en noindex).
- Resultado en `_plans/research/ciudades-colombia-2026-10-27.md`. Orden: **Pereira** (SERP vacía, Tacuara + ARTICO, pauta Meta activa sin aterrizaje orgánico; temblor pereira 1.600, curaduría 1 pereira 590) > Bogotá (licencia 260, estudio de suelos 140) > Barranquilla > Bucaramanga y Cali solo si la clienta confirma que atiende allá. Descartado «ingeniero civil + ciudad» (SERP 100 % empleo); «estructuras metálicas + ciudad» es intención de fabricación → solo H2 de diseño.
- Nuevo `_zonas/pereira.md` (retenido con el resto de zonas): H1 con Pereira y Dosquebradas, post-sismo, informe para aseguradora, reforzar o demoler, suelos, curadurías 1 y 2, casos Tacuara y ARTICO, 7 FAQ de PAA. Slug añadido a `lint-frontmatter.py`; `colombia.md` pasa a `orden: 7`.
- `_layouts/service.html`: `relacionados_titulo` y `normativa_titulo` opcionales (los títulos por defecto ponían la ciudad en minúscula en todas las zonas: «Normas que aplicamos en envigado»). Documentado en `.claude/docs/frontmatter-variables.md`. Las otras 6 zonas siguen con el bug hasta que se les pongan los `*_titulo`.
- Verificado: lint 68/0, build 38 páginas/0 problemas; build con zonas activadas en el scratchpad: Pereira sin desborde a 390 y 320 px, 0 imágenes rotas, 0 `style=`. `revisor-geo` aplicado en lo verificable: sismo del 10-08-2026 (7,4 Mw, SGC) en la intro, suelos con fuente (cenizas de 6 a 20 m, Unilibre 2012), zonificación CARDER–Uniandes 1999, hero_alt «imagen de referencia», FAQ de aseguradora acotada a Tacuara, 2 FAQ nuevas (sismorresistente por año de norma, costo de reforzar sin COP), H2 y títulos de bloque con dato. Quedan 5 PENDIENTE visibles (Aa/Av en cuerpo y FAQ, microzonificación adoptada, licencias en Dosquebradas, cobertura Eje Cafetero): resolver antes de activar zonas. Sin commit.

### 2026-10-21 — Nueva identidad de marca (carpeta «Identidad New Branding», Estudio dositres) sobre «Plano vivo»
**Contexto:** el usuario pidió aplicar la identidad (colores, fuentes, logos) sin cambiar reglas de CSS ni JS. Antes se trajo `origin/main` (rediseño «Plano vivo», `d5b8df9`); un primer parche sobre el sistema anterior se descartó y se rehízo sobre los tokens nuevos.
- **Paleta de marca:** blanco grisáceo `#E8E8E8`, verde grisáceo `#929C93`, gris oscuro verdoso `#6E706D`, negro verdoso `#1E2221`. En `_includes/critical-css/base.css` cambian solo los **valores** de los tokens (los nombres `--azul`, `--marfil`, `--ambar`… se conservan): `--azul`/`--tinta` → `#1E2221`, `--azul-2` → `#2A2F2D`, `--marfil` → `#E8E8E8`, `--papel` → `#F4F5F4`, `--tinta-suave` → `#565955` (5,8:1), `--trazo` → `#929C93`. **Botones de conversión:** `--ambar` → verde WhatsApp `#25D366` con texto `#1E2221` (8,5:1); es el único color fuera de la paleta de marca (la identidad es monocromática verde/gris). El usuario lo eligió entre rojo coral, naranja de seguridad, rojo vivo, verde grisáceo y verde WhatsApp. Si el cliente lo rechaza, basta cambiar ese valor (y el `rgb(37 211 102 / …)` del resplandor en `motion.css`). Los `rgb()` literales de hero, componentes, escenas, footer, motion y primitivas se convirtieron a los RGB de marca. El gris `#6E706D` solo da 4,1:1 con texto claro, por eso no se usó como fondo de botón.
- **Fuentes:** Manrope (principal) para titulares y cuerpo; Garet Book (secundaria) en `--fuente-mono` (rótulos, cotas y cifras). woff2 con subconjunto latino en `fonts/`, `@font-face` y respaldos con métricas ajustadas (reemplazan «Inter respaldo» y «JetBrains Mono respaldo») al inicio de `base.css`, `preload` de Manrope en `head.html`; sin Google Fonts. Garet solo existe en Book: el `@font-face` declara 400–800 para que el navegador no simule negrita.
- **Logos e íconos:** `img/logo-proincivil.png` y `-blanco.png` = variante vertical con «Seguridad estructural» (475×351; ancho/alto actualizados en `nav.html`, `footer.html` y `schema-organization.html`). Favicons, apple-touch y Android regenerados con el símbolo sobre `#1E2221`; `og-proincivil.jpg` rehecho; `theme-color`, `manifest.json` y `humans.txt` actualizados.
- **Jekyll local:** instalado en la sesión (Jekyll 3.10.0 como GitHub Pages + sitemap, feed, redirect-from, kramdown-parser-gfm) sin permisos de administrador; se compila con `JEKYLL_NO_BUNDLER_REQUIRE=1` porque el `Gemfile.lock` es de Windows. Build 38 páginas, `lint-frontmatter.py` 0 errores, `validar-site.py` 0 problemas. Verificado con capturas a 1440 y 390 px: fuentes cargadas, sin desborde horizontal.
- **A revisar:** el brandbook usa «Transformamos ideas en obras» y «Diseño y Construcción», que chocan con la regla contractual (no ejecutamos obra); no se llevó nada de eso al sitio. Manrope no tiene cursiva real. `img/equipo-placeholder.svg` y `_scripts/md-a-pdf.py` conservan colores viejos. Sin commit.

### 2026-10-21 — Lavado de cara total «Plano vivo» y contenido según el formulario del cliente
**Contexto:** el usuario pidió borrar todo el diseño (CSS, JS y markup visual), conservar la investigación y estructura SEO, el equipo y las fotos reales, buscar dirección en 21st.dev y reordenar el contenido según `_plans/datos-cliente.csv` (formulario del 14-10), la investigación y `_plans/research/`.
- Decisiones del usuario: dirección «Plano vivo» (de 4 propuestas), descartar sin guardar la capa sin commitear de Plano sellado, piloto `/servicios/diseno-estructural/`, **tuteo** en todo el sitio, WhatsApp principal +57 319 497 6516 (Kateryn), 14 URLs agrupadas en las 6 familias del formulario, medir antes de crear URLs.
- Ubersuggest (CO, 21-10): peritaje estructural 20/mes, regalías 30 (informacional), concepto técnico, grietas en columnas y repotenciación sin datos; reforzamiento 170. **Ninguna URL nueva**: todo como H2/FAQ.
- Diseño reescrito desde cero: tokens azul plano/marfil/ámbar (ámbar solo en conversión, texto azul sobre ámbar 5,96:1), Inter + JetBrains Mono (fuera Playfair y peso 900), barra fija logo + CTA, menú en barra secundaria que se oculta al bajar, portada con ejes de plano que se trazan al cargar y derivan con `animation-timeline` (firma), cotas en tarjetas (apoyo), cajetín sticky en servicio. Todos los layouts e includes con markup nuevo; cero `style=` (honeypot con `hidden`), FAQ exclusivo con `<details name>`. JS nuevo sin dependencias.
- Contenido: home reordenada (6 familias, 3 diferenciadores, 3 casos del formulario, resultados, equipo, con quién sí/no, normas NSR-10/E.030/AISC 358, CEC). Piloto con E.030/Perú, AISC 358, regalías y 15–30 % desde `_config.yml` (`cifras.ahorro_sobrecostos`). Datos corregidos: 100 % → 97 %, Tacuara (patología multiinstrumento para el anticipo, vulnerabilidad en curso, sin ATC-20 atribuido), promesas de 24 h/horas, frases ambiguas sobre obra, ARTICO y Betulia ampliados, Perú en schema, `email_gerencia` y `cobertura` en `_config.yml`.
- Corrección de bitácora: los documentos `_plans/direccion-diseno-pliego-2026-10-20.md`, `_plans/direccion-diseno-plano-sellado-2026-10-20.md`, `_plans/seo-prioridades-2026-10-16/` y `_plans/comparacion-brief-proincivil-2026-10-16.md` citados abajo **no existen en este checkout**.
- Verificado: lint 67/0, build 38 páginas, `validar-site.py` 0, sin clases en HTML sin CSS, 0 `style=`, 0 «100 %» y 0 frases afirmativas de obra en el texto publicado; sin desborde a 390/320 px en 10 páginas de todas las plantillas; `getComputedStyle` de tokens; movimiento reducido deja el plano estático. Lighthouse: ver resultado en la sesión.
- Lighthouse 20 páginas (móvil): Performance 91 (igual), Accesibilidad 100 (antes 91), Buenas prácticas 96, SEO 66 por `noindex`; 0 links rotos. Corregido después: CLS por fuentes (respaldos con métricas y Google Fonts sin bloquear), `sizes` de retratos, manifest con rutas relativas, reflow en `main.js`.
- Flujos multiagente: tuteo verificado de las 45 páginas retenidas; revisión adversarial en 5 frentes (33 hallazgos confirmados por 2 escépticos, aplicados: foco azul/ámbar según fondo, Escape devuelve el foco, menú no se oculta con foco dentro, H1 dentro de `<main>`, flotante oculto hasta que JS lo muestra, etiquetas de cifras autónomas, matiz «según PROINCIVIL» en resultados, COPNIA retirado hasta confirmar matrículas, Perú como «atención», aliados como «te referimos empresas con las que hemos trabajado»); subtítulos con dato en los 13 servicios y cifras desde `site.cifras`. Lección: los verificadores compararon contra 8afb6da y revirtieron cambios intencionales; se restauraron a mano.
- **Feedback del usuario al cierre:** el diseño sigue siendo «básico, un blog bonito». Quiere escenas inmersivas coreografiadas con el scroll que persuadan (ej.: letras de un título que se vuelven fotos y se funden en un CTA a pantalla completa). Propuesta pendiente de aprobación: guion por escenas de home y Diseño estructural + prototipo de 2-3 escenas antes de integrar. La capa actual queda como base técnica (contenido, SEO, accesibilidad).
- **Animaciones (respuesta al reclamo «no las veo»):** diagnóstico: nada las bloqueaba (Windows con animaciones activas, `prefers-reduced-motion` = no); simplemente casi no existían (ejes de la portada 1,1 s al cargar + hovers). Se reescribió `_includes/css/motion.css` con escenas ligadas al scroll (`animation-timeline`): barrido de títulos, trazo de rótulos y cotas, secciones oscuras que se abren desde una ventana, cascada de tarjetas, fotos que se revelan como plano impreso, retratos de gris a color, línea de proceso que se dibuja, tira que se desliza, cierre a pantalla completa con luz giratoria y botón con pulso. Portada: H1 que se asienta, subrayado que se traza, foto que se abre y crece con el scroll, resplandor que sigue el cursor. 130 animaciones activas en la home (antes ~5). Firefox y movimiento reducido: estático. Video: `_plans/animaciones-home-2026-10-21.mp4`. Corregido bug Liquid: `| append` en títulos por defecto pegaba texto a títulos explícitos (FAQ de la home, servicios).
- **Escenas inspiradas en 21st.dev (el usuario: «mucho mejor», pidió más):** marquesina gigante de normas y servicios (Scroll Text Marquee), las 6 familias como paneles a pantalla completa que se apilan y se hunden (Stacking Cards/Services Stack), galería horizontal fija de los 10 proyectos (Horizontal Scroll Gallery), escena «ESTRUCTURA» con foto dentro de las letras que se atraviesa hasta un CTA a pantalla completa (idea del usuario), títulos palabra por palabra (Text Reveal Mask) y botón magnético con foco de luz. 322 animaciones en la home; sin desborde a 390/320. Lección: escalar ×28 la palabra con foto tumbó la pestaña de pruebas (capa gigante); se cambió a ×4 + revelado circular.
- **Fotos de archivo:** 7 imágenes del Historic American Engineering Record (Library of Congress, dominio público) vía Wikimedia Commons, a escala de grises y con el borde del negativo recortado (`img/fotos/stock-*`, 768/1200/1920, JPG+WebP). Solo como ambiente; nunca como proyectos de PROINCIVIL. Créditos en `_plans/stock/creditos.md`. Unsplash (401) y Openverse (timeout) no respondieron. Requieren aprobación de la clienta. Video: `_plans/escenas-home-2026-10-21.mp4`.
- **Ajustes pedidos tras «¡lo lograste!»:** (1) desborde horizontal en móvil (420 px en 390): lo causaba la foto de «Independencia técnica» escalada 1,25× por la animación de revelado en un contenedor sin recorte, y 5 px más por la foto de la cabecera interior; se recorta dentro de `<picture>` y `body { overflow-x: clip }` queda como red de seguridad (no rompe sticky). Verificado: 0 px de exceso en 10 páginas a 390 y 320. (2) Paneles de servicios en escritorio: texto centrado en vertical sobre sombra lateral, con entradas individuales (número desde la izquierda, rótulo que se traza, título palabra por palabra, párrafo de desenfocado a nítido, enlaces en cascada). (3) Galería de proyectos: más separación, fotos en 4:3 (proporción real de las fuentes), inclinación más suave, encabezado alineado. La foto del Hotel The One (`estructura-obra`, 380 px) se ve borrosa: pedir una de mayor resolución. (4) Equipo: inclinación 3D según el cursor, línea de escaneo y subrayado del nombre.
- **Imágenes con IA desde Canva Pro (pedido del usuario):** 5 imágenes de ambiente (`img/fotos/ia-*`): Valle de Aburrá al atardecer (fondo del CTA final en todas las páginas), mesa con planos y modelo 3D («Cómo trabajamos» y cabecera del piloto Diseño estructural), conexión de acero, grieta en columna con regleta y ladera con muro (paneles 1, 2 y 4; el arriostramiento HAER pasó al panel de vulnerabilidad). Saturación −18 % para convivir con la paleta. Créditos y advertencia en `_plans/stock/creditos.md`: son ilustraciones, no proyectos; revisar condiciones de uso comercial de Canva y aprobación de la clienta. Quedan sin uso `stock-arco-concreto`, `stock-plano-cercha` y `stock-pila-cimentacion`.
- **Casos y enlaces de salida (pedido: «saturado de texto y sin animación»):** la sección de casos de la home pasa a escena dividida (referencia 21st: Sticky Content Wrapper / Scroll 01). En escritorio, la foto queda fija a la izquierda y cambia con un barrido `clip-path` al caso activo (IntersectionObserver en `js/motion.js`, clases `caso--activo`, `casos__medio--activo`, `casos--vivo`). Cada caso muestra número, lugar, título enlazado, el resultado en grande y 3 datos; Situación / Qué hicimos / Resultado van en `<details>` «Ver el caso completo» (siguen en el HTML). En móvil, cada caso lleva su foto encima. Fotos: Tacuara `fachada-vidrio`, ARTICO `stock-plano-cercha` y Betulia `institucion-educativa`, todas rotuladas «Imagen de referencia». «Ver los 14 servicios» y «Ver todos los proyectos» pasan a `.enlace-mayor` (referencia: Arrow Fill Button / Flip Links): banda con contador `site.servicios.size` / `site.proyectos.size`, texto grande, flecha en círculo y relleno al pasar, en `--trazo`/azul y nunca en ámbar. Corregido: el `\s` del JS que divide palabras cortaba en el espacio duro («97 / %»).
- **Escenas en todo el sitio (pedido: «haz lo que aprendiste en el resto de la web… reutilizables»):** las escenas de la home pasan a `_includes/escenas/` (paneles, galería, casos, zoom, marquesina, foco y enlace mayor), con CSS en `_includes/css/escenas.css` y datos en `_data/familias.yml` (6 familias, fuente única para la home y `/servicios/`), `_data/marquesinas.yml` y el front matter. La home se reescribió con los includes y sale igual. Uso:
  - cabecera interior con los ejes del plano (`plano-ejes.html`, antes `portada__plano`), entrada del H1 y apertura de la foto;
  - `/servicios/` con los paneles (H2 largos) y la marquesina;
  - los 14 servicios con «cuándo» en lista en foco, entregables en pasos, casos con foto fija si hay 2 o más proyectos, zoom con una palabra por servicio (`zoom:` en el front matter, títulos sacados del propio contenido; las cifras salen de `site.cifras` con `{clave}`) y banda hacia el hub;
  - `/proyectos/` con galería, casos (bloque `caso:` en Tacuara, ARTICO y Betulia; los demás usan su ficha) y marquesina de normas;
  - fichas con el resultado destacado, galería de los otros proyectos y banda;
  - nosotros con marquesina, misión con inclinación 3D (`.inclinable`) y banda hacia independencia; independencia técnica con zoom «INDEPENDENCIA»;
  - posts y artículos con barra de progreso de lectura solo CSS (`.progreso`).

  La marquesina de credenciales no menciona COPNIA ni el CEC (pendientes de confirmar). Borradas las clases muertas `.familias`, `.pieza--destacada`, `.pieza__enlaces` y `.lista--dos`. Corregido: el título del cierre de las fichas salía en minúscula («¿necesitas…»). Documentado en la skill `dev-jekyll` (catálogo de escenas) y en `.claude/docs/frontmatter-variables.md`. Pendiente: fotos de baja resolución (Hotel Aldea `estructura-metalica`, Hotel The One) se ven ampliadas en la foto fija de los casos.
- Sin commit (pendiente de revisión del usuario).

### 2026-10-20 — Rediseño "Plano sellado": interactividad con 21st.dev como referencia visual
**Contexto:** el usuario pidió borrar el diseño CSS/JS existente conservando contenido, datos e imágenes,
y rehacerlo a mano usando el conector de 21st.dev como inspiración ("inmersivo e interactivo"), acorde a
la temática de ingeniería estructural. Detalle completo, piezas de 21st usadas y lo descartado en
`_plans/direccion-diseno-plano-sellado-2026-10-20.md`.
- Checkpoint de seguridad commiteado antes de tocar nada (`8afb6da`): rediseño "Pliego" + parallax +
  motion.css/js que estaban sin commitear desde sesiones anteriores. `.impeccable/` añadido a
  `.gitignore` (caché de herramienta, no contenido del proyecto).
- Capa de interacción nueva, Nivel 1 CSS + Nivel 2 JS mínimo (sin dependencias): resplandor que sigue el
  cursor + cuatro marcas de registro de esquina (mismo trazo que `.ficha`) en `.tile--enlace`
  (`_includes/css/secciones.css`, propaga a las 14 fichas de servicio + 9 de proyectos vía
  `tarjeta.html`) y en `.trio__item` de la home; revelado de tinta del wordmark fantasma del pie
  (`_includes/css/footer.css`). Un único listener genérico en `js/main.js`
  (`[data-spotlight]` + `pointermove`, activo solo con puntero fino).
- Paleta y tipografía de "Pliego" (crema + acento rojo, Inter 900 + Playfair itálica) se conservaron sin
  rehacer: el usuario no pidió explícitamente cambiar el color, solo la interactividad. Pendiente
  confirmar si el rechazo del cliente a "Pliego" incluía eso.
- Comparador antes/después (patrón de 21st) documentado pero **no implementado**: no hay fotografía
  antes/después real en `_data/fotos.yml` (pendiente #4 de este archivo); se evitó inventar el contenido.
- Verificado: build 38 páginas, `validar-site.py` 0 problemas, mecanismo de revelado confirmado por
  `getComputedStyle` y forzado visual, sin errores de consola propios. **Sin verificar en navegador real
  a 390/320 px**: la ventana del automatizador de Chrome de esta sesión no bajó de 500 px de ancho
  (límite de la herramienta); repetir antes de dar el lote por cerrado.
- Sin commitear (pendiente de revisión visual del usuario).

### 2026-10-20 — Rediseño visual completo "Pliego" (reemplaza crema/oliva)
**Contexto:** el cliente dijo que el diseño actual (crema/oliva/bosque, serif editorial, inspirado en
"Northline Atelier", documentado en `investigacion-web-seo-proincivil.md §10`) no lo convenció. Pidió
empezar de cero el diseño visual de todo el sitio a la vez, conservando contenido y SEO, usando como
referencia la estética (no el código) de un template Next.js de portafolio en `_plans/final/`.
Especificación completa, decisiones descartadas y verificación en
`_plans/direccion-diseno-pliego-2026-10-20.md`.
- Tokens renombrados `--color-oliva*` → `--color-acento*` (rojo `#9D2127`) y recoloreados
  `--color-tinta`/`--color-bosque`; tipografía de titulares Fraunces → Inter 900, con Playfair Display
  itálica como acento puntual en `<em>`. Archivos: `_includes/critical-css/base.css`,
  `_includes/critical-css/hero.css`, `_includes/css/primitivas.css`, `_includes/css/secciones.css`,
  `_includes/css/componentes.css`, `_includes/css/footer.css`, `_includes/head.html`.
- Nuevo `_includes/css/motion.css` (reveal Nivel 1) y `js/motion.js` (contador `m-count`), cargados desde
  `css/style.css` y `_layouts/default.html`. `js/main.js` extendido (no reemplazado): la barra de
  navegación ahora se oculta al bajar y reaparece al subir en todas las páginas.
- Verificado: build limpio, `validar-site.py` 38/0, cero `--color-oliva` suelto, todos los tokens nuevos
  con uso real, `motion.css` 526 B y `main.js+motion.js` 1,9 KB gzip (dentro de presupuesto),
  sin desborde a 390/320 px en home/servicios/proyecto, sin errores de consola, contraste del acento
  9,34:1 y 7,51:1 (AAA) sobre crema/blanco.
- Sin commitear. Falta Lighthouse (`auditar-sitio`) y mostrar capturas antes/después al cliente.

### 2026-10-20 — Parallax del héroe de home con CSS puro (sin dependencias)
**Contexto:** se pidió adaptar un componente React de ejemplo (GSAP + Lenis + shadcn, imágenes de stock)
a este sitio. Jekyll/GitHub Pages no tiene pipeline de build para npm, y las fotos de stock no son
admisibles (dato del negocio). Se acordó con el usuario: héroe de home, foto real ya procesada, sin JS.
- `_includes/critical-css/hero.css`: `.hero__fondo img` escala 1.12 y se desplaza ±4% en `translate` con
  `animation-timeline: view()` nativo (sin JS, sin librerías). Envuelto en `@supports (animation-timeline:
  view())`; sin soporte, la foto queda fija como antes. `@media (prefers-reduced-motion: reduce)` lo
  desactiva. Usa `hero-estructura`, la foto real ya asignada al héroe — no se añadieron imágenes nuevas.
- Verificado: build, `validar-site.py` (0), `CSS.supports` + `Animation.getAnimations()` en consola
  confirman el `ViewTimeline` corriendo, 390 px y 320 px sin desborde horizontal (`scrollWidth ===
  clientWidth`), capturas en ambos anchos.
- Sin commitear.

### 2026-10-16 — Validación SEO de prioridades del formulario con Ranki
**Contexto:** el usuario pidió contrastar la comparación anterior con búsqueda, competencia e intenciones, usando Ranki desde su navegador.
- Ranki autenticado en Brave: Bulk Search Volume de 31 consultas Colombia y 9 Perú; cinco SERP con país Colombia/Spanish. Volúmenes CO mostrados: diseño 320, patología estructural 480, vulnerabilidad 40, reforzamiento 210, suelos 1.000. No se interpreta LOW del módulo como dificultad orgánica ni guion como cero demanda; no se comparan con cifras antiguas de Ubersuggest como si fueran una tendencia.
- `_plans/seo-prioridades-2026-10-16/estrategia-seo.md`: mapa de intención para Home, hub y 14 servicios; fronteras entre evaluación/vulnerabilidad/post-sismo/reforzamiento, casos y contenido retenido. Fotografías de las SERP y métricas en JSON, captura Ranki y `inventario-build.json` en la misma carpeta.
- Competidores revisados en sus sitios: Ingenil, SIO/JH, PMT, DOING, AIT, AVe, Ingetecho y Wilkatek. SERP generales de patología/vulnerabilidad mezclan academia e información; diseño local también mezcla empleo/cursos. Local Pack observado en las consultas locales; no se atribuyen tráfico, DA, CWV o conversiones a competidores.
- Refinamiento de propuesta anterior: Home conserva paraguas de firma y deriva a diseño, patología/evaluación y vulnerabilidad. No crear nuevas landing por sinónimos; reforzar las existentes y enlazar casos. Solapamiento concreto de interventoría: title comercial para servicio, obligatoriedad para blog. Revisión previa a habilitar zonas/glosario/sectores; expansión Perú depende de alcance real y contenido diferenciado, no clonación de países.
- Build local disponible: 37 HTML con noindex, sin title/canonical duplicadas ni H1 múltiples. No se consultó GSC de PROINCIVIL: no afirmar canibalización real ni ausencia absoluta. Se conserva vista previa y todas las URLs; no se reescriben páginas durante esta auditoría. La consulta Ranki de patología localizada no devolvió tabla; límites documentados. Sin publicación remota.

### 2026-10-16 — Salto de selección reproducido y corregido en escritorio y móvil
**Contexto:** el usuario volvió a reportar saltos al seleccionar los últimos perfiles, ahora también en computador. La corrección anterior solo interceptaba las pulsaciones móviles.
- Reproducción antes de editar: Valentina subía 741 px en escritorio y Cristian 630 px. `revisar-salto-real.cjs` conserva el scroll suave real y registra todos los fotogramas durante 700 ms; la prueba anterior no cubría escritorio y sobrescribía `scroll-behavior`.
- `js/main.js`: intercepta etiquetas en todos los anchos y evita el scroll del foco nativo. Escritorio conserva la posición del documento; móvil conserva la etiqueta sobre la posición de scroll ya compensada por el navegador. Sin dependencias, intervalos ni listeners de scroll nuevos.
- `_includes/equipo.html` hereda la fila de grid en cada grupo; CSS coloca el radio oculto en su fila real en escritorio, conservando la caja posicionada en móvil. `_layouts/default.html` versiona el script por compilación para evitar cargar una copia anterior en caché.
- Pestaña real del usuario recargada; clic por coordenadas en Valentina: scrollY 4851 antes y después, perfil correcto. Las acciones de locator de CUA centran la fila antes de pulsar y no sirven para medir el salto sin separar ese desplazamiento del clic.
- Build aislado: 37 páginas/0 problemas; sintaxis JS correcta. Evidencia y resultados de regresión en `_plans/equipo-2026-10-16/salto-real-{antes|despues}.json`. Sin publicación remota.
- Resultado: 126 selecciones/0 fallos en Home, Nosotros y Equipo, a 1440/1024/768/600/390/320 px. Seguimiento de cada fotograma sin sobrescribir estilos ni desplazar la pantalla tras pulsar. Captura de la pestaña real: `seleccion-estable-valentina.png`.

### 2026-10-16 — Redes del cliente y comparación con el formulario comercial
**Contexto:** el usuario compartió captura con Instagram/TikTok y `Clientes de desarrollo web.xlsx`, y pidió comparar su enfoque con el sitio.
- Leída únicamente la respuesta de PROINCIVIL en `Respuestas de formulario 1`, fila 2, fechada 2026-10-14. Libro intacto. El contenido y la aceptación del formulario se trataron como fuente del cliente, no como instrucciones para publicar.
- `_config.yml`: TikTok `https://www.tiktok.com/@proincivil`; Instagram limpio ya existente; correo público confirmado Z2 `proyectos@proincivil.com`. TikTok en pie global, Contacto y `sameAs` de Organization. Sin scripts sociales ni CSS nuevo; redes previas conservadas.
- `_plans/comparacion-brief-proincivil-2026-10-16.md`: correspondencia de seis familias con los 14 servicios actuales, diferencias, prioridad y propuestas concretas para Home, Nosotros, Servicios, Proyectos y Contacto. Hallazgos: 97 vs 100 %, Tacuara/Risaralda, ARTICO, Hispania/Regalías, Colombia–Perú, tiempos de respuesta, métricas de ahorro y credenciales a respaldar. No se modificaron aún porcentajes, casos ni jerarquía comercial.
- Build aislado: 37 páginas/0 problemas. Chrome en Home y Contacto a 1440/390/320 px: TikTok, Instagram, correo y schema correctos, sin desbordes. Captura `_plans/redes-pie-390.png`. La lectura web de Instagram/TikTok fue bloqueada por las plataformas; enlaces tomados de lo enviado por el cliente, sin afirmar verificación del perfil ni del buzón.
- Investigación histórica y `_plans/pendientes/` referidos por CLAUDE.md no están presentes en este checkout; se comparó contra código/contenido disponible. Sin commit, push ni publicación remota.

### 2026-10-16 — Cristian desde el original y selección móvil estable
**Contexto:** el usuario volvió a enviar el original de Cristian por pixelación y reportó que las pulsaciones en móvil devolvían al título.
- `cristian-camiseta-v2.png` en `_plans/equipo-2026-10-16/`: nueva edición ImageGen desde la foto original, camiseta negra y fondo blanco. Derivados directos con un remuestreo, `img/fotos/equipo-cristian-v2-{360|720|960}` y miniaturas 48/96, JPG/WebP. `_config.yml` y `_data/fotos.yml` apuntan a nombres nuevos para evitar caché antigua. Revisado a 480 CSS px y DPR 1/2.
- CSS móvil: `.selector__item` forma una caja posicionada y el radio oculto queda junto a su etiqueta. Esto elimina el salto de foco al inicio del fieldset. Al cerrar un retrato anterior también cambia la altura del documento: `js/main.js` conserva la posición de la fila pulsada con un listener delegado por galería, sin librerías, temporizadores ni eventos de scroll nuevos. La selección y el contenido siguen disponibles sin JS, pero la estabilización completa usa este ajuste.
- Prueba anterior reproducía el fallo; `revisar-scroll.cjs` comprueba pulsaciones táctiles en las tres páginas, 320/390/600 px, con y sin JS. A diferencia de la revisión anterior, no desplaza la página después del clic. Evidencia en `validacion-scroll*.json`; capturas `cristian-v2-{1|2}x.png` y `cristian-movil-corregido.png`.
- Build: 37 páginas/0 problemas. Regresión de imágenes, siete perfiles y teclado: 30 combinaciones de ruta/ancho/densidad correctas. Sin commit, push ni publicación remota.
- Resultado final táctil: 126 selecciones/0 fallos; las 63 con JS conservan la fila a menos de 2 px de su posición en pointerdown. Las otras 63 comprueban que la selección sigue funcionando sin JS. Se retiró la transición móvil de padding para evitar desplazamientos tardíos por cambio de líneas.

### 2026-10-16 — Mejora de nitidez de los retratos grandes
**Contexto:** el usuario reportó pixelación en el retrato protagonista después de integrar el componente.
- Se verificó el archivo cargado en Chrome y en la pestaña real de Codex: 720 px para 480 CSS px a DPR 1 y 960 px a DPR 2. Se mantuvo el diseño y se mejoró la codificación de las imágenes.
- Siete parejas de retratos `img/fotos/equipo-*-hd-{720|960}.{webp|jpg}`, generadas directamente desde los PNG originales de revisión con un solo remuestreo Lanczos, WebP calidad 96 y JPG calidad 94 (sin submuestreo de color). Conserva encuadre, rostro y fondo blanco; sin IA adicional ni ampliación de la fuente.
- `_config.yml`: `foto_retrato` independiente de `foto_nombre`; `_includes/equipo.html` usa ese campo para la foto grande y conserva las miniaturas originales. `_data/fotos.yml` declara los nuevos tamaños. Nombres nuevos evitan reutilizar los archivos antiguos en caché. Sin cambios de CSS ni JS.
- Capturas de comparación `calidad-antes-{1|2}x.png` y `calidad-despues-{1|2}x.png` en `_plans/equipo-2026-10-16/`. Vista previa recompilada, 37 páginas/0 problemas; selección y resolución verificadas en las tres páginas a cinco anchos y DPR 1/2.
- Sin commit, push ni publicación remota.

### 2026-10-16 — Integración del diseño aprobado en las tres páginas
**Contexto:** el usuario aprobó la maqueta con medidas naturales y pidió integrarla.
- `_includes/equipo.html` sustituye las tarjetas en `index.html`, `nosotros.html` y `nosotros/equipo.html`. Incluye título aprobado, retrato protagonista, directorio de siete personas y mensaje de independencia técnica. Liquid lee `site.equipo`; cargo, formación y especialidad opcionales. Se retira `_includes/equipo-tarjetas.html` y el CSS `tile--retrato` sin uso.
- `.selector` en `_includes/css/componentes.css`: selección con radios HTML y combinadores CSS, sin JS ni `:has`; estados de foco/selección, teclado y movimiento reducido. En móvil el perfil aparece debajo de su nombre. Anclas de autoría conservadas en etiquetas visibles.
- Imágenes de la maqueta llevadas a `img/fotos/`: retratos adicionales 960×1280 y miniaturas 48×64/96×128 en JPG/WebP; `_data/fotos.yml` actualizado. `picture.html` admite dimensiones HTML opcionales, sin cambiar el comportamiento de las imágenes existentes. Sin alto forzado, recorte CSS ni ampliación sobre píxeles disponibles a DPR 1/2.
- Validación: lint 66 archivos/0 errores; build 37 páginas/0 problemas. Chrome con JS desactivado: 30 combinaciones de ruta/ancho/densidad (tres páginas, cinco anchos 1440/768/600/390/320 y DPR 1/2), siete selecciones por combinación, teclado, dimensiones y resolución correctos; un H1 y sin IDs duplicados ni desbordes. Capturas `integrado-{home|nosotros|equipo}-{1440|390}.png` y `validacion-integracion.json` en `_plans/equipo-2026-10-16/`.
- Vista previa actualizada en puerto 4002. Sin commit, push ni publicación remota.

### 2026-10-16 — Medidas y carga adaptativa de imágenes en la maqueta
**Contexto:** el usuario autorizó preparar tamaños definitivos y evitar recortes o ampliación forzada por CSS.
- `reconstruir-maqueta.py` y `maqueta-equipo.html`: retratos 3:4 a 360×480, 720×960 y 960×1280, con srcset/sizes; ancho máximo visible 480 px y altura automática, sin object-fit ni altura forzada.
- Miniaturas 3:4 independientes de 48×64 y 96×128 para densidades 1x/2x; mismo encuadre, sin cover. Las 14 miniaturas suman 16.912 bytes. Derivados en `_plans/equipo-2026-10-16/maqueta-assets/`; se retiraron siete archivos antiguos sin referencias.
- Chrome con JS desactivado: siete perfiles a 1440, 768, 600, 390 y 320 px con DPR 1 y 2. Proporción 3:4, carga completa, imagen elegida con suficientes píxeles para tamaño×densidad, sin desbordes; teclado correcto. Capturas actualizadas.
- Solo afecta a la maqueta del puerto 4004. Sin integración del rediseño en el sitio ni publicación remota.

### 2026-10-16 — Maqueta sin JavaScript y fondo blanco de Cristian
**Contexto:** el usuario aprobó la dirección visual y pidió priorizar HTML/CSS/Liquid y corregir el fondo gris de Cristian.
- `_plans/equipo-2026-10-16/maqueta-equipo.html`: reemplaza la selección por JS por radios HTML y CSS `:checked`/`:has`. Siete perfiles estáticos; cero scripts y dependencias JS. En móvil el perfil seleccionado aparece debajo de su nombre, sin desplazamiento programado. Se conservan los estilos de la propuesta, teclado y movimiento reducido.
- Fotografías separadas en `maqueta-assets/`, reutilizables por retrato y miniatura. HTML de unos 16 KB; incluye todos los perfiles desde el primer documento. `reconstruir-maqueta.py` permite regenerar desde `_config.yml` (no se ejecuta en el navegador).
- Cristian: edición ImageGen limitada al fondo blanco; original corregido `cristian-camiseta-blanco.png`, cuatro derivados JPG/WebP sustituidos en `img/fotos/` y vista previa recompilada. Original gris conservado como historial.
- Validación: maqueta con JavaScript desactivado a 1440, 768, 390 y 320 px, siete selecciones correctas y navegación por flechas; sin desbordes. Build de 37 páginas/0 problemas. Capturas actualizadas, incluida `cristian-fondo-blanco.png`.
- La nueva disposición sigue en maqueta (puerto 4004); el include de tarjetas del sitio no se ha sustituido. Sin publicación remota.

### 2026-10-16 — Maqueta alternativa del equipo, sin cambiar el sitio
**Contexto:** el usuario pidió un diseño más dinámico y evitar el hueco de la octava tarjeta con siete personas.
- Propuesta independiente `_plans/equipo-2026-10-16/maqueta-equipo.html`: retrato protagonista y directorio interactivo con siete personas. Al pulsar un nombre cambian foto, cargo y formación; móvil vuelve al retrato para mostrar la selección. Sin rotación automática; respeta movimiento reducido y controles nativos de teclado.
- Conserva paleta crema/oliva/bosque y tipografías Fraunces/Inter/JetBrains Mono. Datos leídos de `_config.yml` al generar la maqueta; fotografías existentes embebidas, sin nueva edición de retratos.
- Chrome: siete selecciones probadas a 1440, 768, 390 y 320 px; sin errores JS ni desbordes. Capturas `maqueta-1440.png` y `maqueta-390.png` en la misma carpeta.
- Servidor de maqueta en http://127.0.0.1:4004/maqueta-equipo.html. El sitio de puerto 4002 y el include actual quedan intactos; propuesta pendiente de elección del usuario. Sin publicación remota.

### 2026-10-16 — Ampliación a siete retratos con formación actualizada
**Contexto:** el usuario entregó fotos y formación de Kateryn Andrea Palacio, Camilo Tamayo Restrepo, Valentina y Juan Felipe para aplicar la camiseta corporativa e integrarlos como los tres anteriores.
- `_config.yml`: actualiza a Kateryn (CEO/CFO, magíster en Business Intelligence and Big Data, FP&A) y a Camilo (nombre completo y especialidad); añade Valentina (arquitecta) y Juan Felipe (coordinador de proyectos, ingeniero civil especialista en estructuras). Conserva slugs/anclas de dirección y autoría de Camilo.
- `_includes/equipo-tarjetas.html`: formación y especialidad opcionales debajo del cargo. El mismo include muestra las siete personas en inicio, Nosotros y Equipo.
- `nosotros/equipo.html`: elimina el bloque de dirección sin foto, ya incorporado en la rejilla; amplía presentación a ingeniería, arquitectura y gestión.
- Cuatro retratos editados con ImageGen, fondo claro y camiseta negra; detalle y prompts en `_plans/equipo-2026-10-16/ampliacion-equipo.md`.
- Validación final: lint 66 archivos/0 errores, build 37 páginas/0 problemas. Chrome en Home, Nosotros y Equipo a 1440, 390 y 320 px: siete retratos, nombres/formación correctos, sin imágenes rotas, desborde ni IDs duplicados; siete Person en las dos páginas corporativas. Vista previa actualizada en puerto 4002.
- Sin commit ni publicación remota; pendiente revisión visual del cliente.

### 2026-10-16 — Equipo también en la home y revisión local completa
**Contexto:** el usuario pidió valorar su presencia en inicio y revisar todos los cambios en local.
- `index.html`: incorpora `_includes/equipo-tarjetas.html` después de independencia técnica y antes de proyectos, con presentación breve y enlace al equipo completo. Sin CSS adicional; conserva las primitivas existentes y el mensaje de que PROINCIVIL diseña, evalúa y supervisa, sin ejecutar obra.
- Revisión en Chrome de Home, Nosotros y Equipo a 1440, 390 y 320 px: tres retratos cargados por página, cero imágenes rotas en main, cero desbordamientos y cero IDs duplicados; un H1 por página. Validación de 37 páginas sin problemas y lint de 66 archivos sin errores.
- Capturas de las tres secciones en escritorio y móvil e informe `validacion-local.json` en `_plans/equipo-2026-10-16/`. Las capturas de sección ocultan solo las barras fijas para evitar superposiciones en el archivo; las comprobaciones se hicieron con las barras visibles.
- Vista previa local en el puerto 4002, con configuración actual. Sin commit ni publicación remota.

### 2026-10-16 — Correspondencia de nombres y fotos confirmada
- El usuario confirmó el orden Sebastián (camisa azul), Yerli (gafas y cabello rizado), Cristian (saco oscuro). Se retiraron las marcas provisionales en `_config.yml` y `_plans/equipo-2026-10-16/README.md`.
- Sin cambios visuales ni publicación remota.

### 2026-10-16 — Equipo con retratos y camiseta corporativa
**Contexto:** el usuario entregó tres fotos, nombres y formación, y autorizó editar la camiseta e incorporarlos al proyecto.
- `_config.yml`: Sebastián, Yerli y Cristian, asociados por orden de envío, confirmado por el usuario; se mantiene dirección y gerencia existentes. Sin apellidos ni credenciales inventadas.
- `_includes/equipo-tarjetas.html`, `nosotros.html`, `nosotros/equipo.html`, `_includes/css/secciones.css` y `_data/fotos.yml`: tarjetas verticales compartidas, foto responsive y metadatos actualizados. Se conserva el mensaje de diseño, evaluación y supervisión sin ejecución de obra.
- Tres retratos editados con ImageGen, 12 derivados JPG/WebP (403 KB). Originales editados, prompts y comprobaciones en `_plans/equipo-2026-10-16/`, excluido del sitio y del repositorio.
- Validación final: lint de 66 archivos y build de 37 páginas sin errores; validar-site con 0 problemas en compilación aislada. Chrome a 1440, 390 y 320 px: 3 retratos cargados, 5 perfiles Person y sin desborde en ambas rutas. Capturas en `_plans/equipo-2026-10-16/`.
- Sin commit ni publicación remota. Correspondencia foto/nombre confirmada; pendiente aprobación visual del cliente.
- Entorno: Ruby documentado 3.3 ya no existe; Ruby 3.4 funciona con ejecución autorizada fuera del bloqueo del sandbox.

### 2026-10-07 — Auditoría SEO del build: alt por defecto en cada foto
- **154 de 267 imágenes salían con `alt=""`.** `tarjeta.html` lo tenía escrito a mano y
  `galeria-tira.html` repetía el mismo alt en sus seis fotos. Ahora `_data/fotos_alt.yml` da un alt
  por defecto a cada foto y `picture.html` cae a él cuando quien la llama no pasa uno (el filtro
  `default` de Liquid trata `""` como falso, así que `alt=""` también cae). Quedan 37: el segundo logo
  del nav, con `aria-hidden="true"` — correcto.
- Los alt por defecto **describen solo lo que se ve**, sin atribuir autoría ni nombrar clientes: parte
  de las fotos son referenciales y la autoría sigue PENDIENTE. El `hero_alt` del front matter manda
  sobre el valor por defecto cuando el dato esté confirmado.
- La tira de la home pasa a `role="group"` con `aria-label` para el conjunto; cada foto lleva su alt.
- Verificado completo: 36 URLs en el sitemap, 0 páginas huérfanas (todas con ≥2 enlaces internos
  entrantes), 0 imágenes sin `alt` ni sin `width/height`, los 27 enlaces de `llms.txt` apuntan a
  páginas publicadas, JSON-LD válido en todos los tipos de página (ProfessionalService+LocalBusiness+
  Organization, WebSite, BreadcrumbList, Service, CreativeWork, BlogPosting, FAQPage, Person).

#### Hueco conocido: `lastmod` del sitemap (decisión pendiente)
Solo 3 de las 36 URLs llevan `<lastmod>`: jekyll-sitemap lee `page.last_modified_at` o `page.date`, y
las páginas declaran `dateModified`. Dos salidas, ninguna gratis:
- Renombrar `dateModified` → `last_modified_at` en los 81 archivos con fecha y ajustar sus cuatro
  consumidores (`head.html`, `schema-article.html`, `article.html`). Una sola clave, sin duplicar.
- Escribir un `sitemap.xml` propio en la raíz (tiene prioridad sobre el del plugin) que lea
  `dateModified`. Un archivo, pero se renuncia al filtrado que el plugin ya hace bien.
Sin urgencia: el sitio está en `noindex`. Decidir antes de publicar en el dominio.

### 2026-10-07 — Limpieza del repositorio: 162 MB → 12 MB
- **`Python/` (151 MB, 2.253 archivos)** se había copiado por error en la raíz y entró en el commit
  `21aca48`. Jekyll copia a `_site` cualquier carpeta de la raíz que no esté en `exclude`, así que
  GitHub Pages estaba publicando un intérprete completo. Borrada; la instalación real vive en
  `%LOCALAPPDATA%\Python` y sigue intacta.
- **`img/_extraidas/`** (12 PNG, 6,3 MB: originales en color recortados del PDF del portafolio) pasó a
  `_plans/fotos-originales/`. Es material fuente, no activo del sitio: fuera del build y fuera del
  repositorio público, pero disponible para recortar fotos nuevas.
- **Borrados los 9 SVG provisionales de línea** (`placeholder-*.svg`, `hero-portico.svg`): sin uso desde
  el rediseño con fotografía. Quedan `equipo-placeholder.svg` (lo usa `site.equipo[].foto`) y los logos.
- **Corregido:** `nosotros.html` seguía con `hero: "/img/placeholder-plano.svg"`. Tras el rediseño,
  `hero` es un **nombre base de foto** que `picture.html` busca en `_data/fotos.yml`; una ruta no
  resuelve y la cabecera `cabecera--media` se pintaba con el hueco de imagen vacío. Ahora
  `fachada-vidrio`.
- **Prevención:** `Python/`, `__pycache__/`, `*.pyc` y `node_modules/` en `.gitignore`, y `Python`,
  `__pycache__`, `*.pyc` en el `exclude` de `_config.yml` (`.gitignore` no lo evita: Jekyll no lo lee).
- Verificado: build de 37 páginas, `lint-frontmatter.py` y `validar-site.py` en 0. `_site` pesa 4 MB.
- Falso positivo en el camino: `critical-css/critical.html` parecía huérfano porque `default.html` lo
  incluye con ruta de subcarpeta, no por nombre de archivo. Al buscar includes sin uso hay que buscar
  `carpeta/archivo.html`, no solo el basename.

### 2026-10-01 — Pie de página corregido
- Causa: `repeat(auto-fit, …)` detrás de otra pista en `grid-template-columns` es CSS inválido; el
  navegador descartaba la regla y todo el pie caía en una columna (1.451 px de alto en escritorio).
- Ahora `.footer__grid` (marca | columnas) y `.footer__columnas` en flex con `.footer__columna--contacto`
  más ancha: 534 px de alto en escritorio. Sin desborde a 390 ni 320 px; `validar-site.py` en 0.
- Retirado `#fff` fijo, `<small>` y la repetición de «no ejecutamos obras» en la línea legal (sigue en el
  texto de marca); borde superior para separarlo del bloque CTA, del mismo verde.

### 2026-09-22 (cierre) — Publicación en GitHub Pages con alcance recortado
**Contexto:** el usuario pidió publicar el núcleo comercial y retener el contenido SEO como palanca
para vender el servicio mensual, más un documento de pendientes para el cliente.
- **Repositorio:** https://github.com/Klerpson/proincivil (público, rama `main`, 231 archivos, 8 MB).
  `_plans/` queda **fuera del repositorio** (contratos, RUT, investigación y pendientes: datos
  personales y comerciales) vía `.gitignore`. `.claude/` sí se versiona, sin cifras de contrato.
- **Pages:** https://klerpson.github.io/proincivil/ · build `legacy` desde `main` / raíz. Verificado:
  36 URLs en 200, las 5 secciones retenidas en 404, `noindex` en todas y robots.txt con `Disallow: /`.
- **Alcance publicado (36 URLs):** inicio, servicios (hub + 14), proyectos (hub + 9), corporativas (6)
  y blog (hub + 3 artículos). **Retenidas (45):** normativa, glosario, edificaciones, zonas y
  cuanto-cuesta — `output: false` en las colecciones y `published: false` en sus hubs.
- **Mecanismo reversible:** `secciones_publicadas` en `_config.yml` filtra menú, pie, CTA de cabecera,
  botón de «cuánto cuesta» y bloques de relacionados. Añadir una sección a esa lista y recompilar la
  devuelve a todo el sitio; no hay enlaces sueltos que arreglar.
- **Modo vista previa:** `vista_previa: true` → noindex global + robots bloqueado. `url` y `baseurl`
  apuntan a github.io/proincivil; `CNAME` eliminado hasta que exista el dominio.
- **Corregido en el camino:** 105 enlaces internos en prosa llevaban `/ruta/` sin `baseurl` y se
  romperían bajo GitHub Pages; ahora usan `{{ site.baseurl }}` (inocuo cuando baseurl esté vacío).
  `validar-site.py` aprende `baseurl` desde `_config.yml`. `repository:` pasó de marcador a
  `Klerpson/proincivil` (jekyll-github-metadata aborta el build si no resuelve).
- **Entregable al cliente:** `_plans/PENDIENTES-Y-PREGUNTAS-PROINCIVIL.md` + PDF de 5 páginas generado
  con `_scripts/md-a-pdf.py`. Consolida los cinco archivos de `_plans/pendientes/` y cierra con **11
  preguntas numeradas** con espacio para responder.
- Pendiente de decisión comercial: qué parte de las 36 URLs se factura como contrato web y qué queda
  como adicional; y transferir el repositorio a la cuenta de PROINCIVIL al entregar.

### 2026-09-22 (noche) — Rediseño con fotografía real: el sitio deja de parecer un documento
**Contexto:** el cliente señaló que el diseño se leía como un artículo de blog y no como la referencia
visual aprobada (modelo3, Clarke House Inn): faltaban imágenes y jerarquía visual.
- **Fotografía real recuperada del PDF del portafolio** con PyMuPDF: estructura metálica, fachadas de
  concreto y vidrio, institución educativa, 4 tomas de carports fotovoltaicos, cubierta metálica,
  detalle de viga-columna y obra en construcción. Procesadas a B/N con contraste a
  `/img/fotos/<nombre>-<ancho>.jpg|webp` (14 juegos, 1,7 MB). Originales en `/img/_extraidas`.
- `_data/fotos.yml` (anchos disponibles por foto) + `_includes/picture.html` (srcset WebP/JPG que nunca
  pide un tamaño inexistente). `hero:` del front matter pasó de ruta a **nombre base de foto** en 43
  archivos; `image:` (OG) apunta a un JPG real.
- Nuevas formas en `_includes/css/secciones.css`: `.trio`, `.split`, `.tira`, `.testimonio`,
  `.tile--media`, `.tile__cinta`. `hero.css` reescrito: héroe a sangre con foto y degradado, `.lamina`
  superpuesta, `.cabecera--media`. Barra transparente sobre el héroe de la home (`.nav--solido` al
  bajar, 8 líneas en `js/main.js`) con logo blanco.
- Home reestructurada con el ritmo de la referencia; retiradas las ilustraciones de línea como imagen
  principal (siguen en `/img/placeholder-*.svg`, sin uso).
- Fotos de proyecto redistribuidas para que no se repita la misma imagen en una fila; el carácter
  **referencial** de algunas quedó documentado en `_plans/pendientes/README.md`.
- Verificado: 82 páginas, `validar-site.py` y `lint-frontmatter.py` en 0; sin desbordamiento horizontal
  a 390 px; 0 imágenes rotas.

### 2026-09-22 (tarde) — Contenido completo: 82 páginas compiladas y validadas
**Contexto:** cinco agentes redactaron las colecciones en paralelo; tres se cortaron por límite de sesión
y se completaron después (4 términos de glosario, pendientes, ajuste de longitudes de title/description).
- Colecciones completas: 14 `_servicios`, 4 `_cuanto-cuesta`, 7 `_edificaciones`, 6 `_zonas`,
  11 `_normativa` (nsr-10 + 7 títulos + 3 leyes/trámites), 12 `_glosario`, 9 `_proyectos`, 3 `_posts`.
- `python _scripts/lint-frontmatter.py` → 66 archivos, 0 errores. `bundle exec jekyll build` → 82 páginas.
  `python _scripts/validar-site.py` → 0 problemas (enlaces, Liquid, JSON-LD, H1).
- Corregido en el lint: `relacionados` de edificaciones/zonas/cuanto-cuesta referencia `_servicios`.
- `_config.yml`: `AGENTS.md` excluido del build (se compilaba como página con 2 H1).
- Pendientes del cliente consolidados en `_plans/pendientes/` (servicios-a, servicios-b, normativa,
  edificaciones-zonas, proyectos-blog): umbrales Ley 1796/Decreto 945, curadurías por municipio,
  clasificación de amenaza sísmica, plazos indicativos, autorización de nombres y cifras de proyectos.
- Revisión visual en Chrome (1366 px y 390 px): home, servicio, hub de servicios, guía Título A, zona.
- Sin git todavía: siguiente paso es `git init`, crear el repo del cliente y ajustar `repository:`.

### 2026-09-22 — Construcción del sitio a partir de la skill de Almo
**Contexto:** el sitio anterior era una SPA React con 0 keywords y DA 4; se decidió reconstruir en Jekyll
siguiendo la arquitectura y las skills del proyecto Almo (`C:\dev\sitios\almo\.claude`), sin límite de URLs.
- Base creada: `_config.yml` (fuente única de datos), `Gemfile`, `.gitignore`, `.gitattributes`,
  layouts (`compress, default, home, page, hub, service, article, project, post`), includes (head, nav,
  header, footer, button, breadcrumb, faqs, cta-final, tarjeta, relacionados, proyectos-relacionados,
  form, sticky-cta-mobile, date-es, schema-*), CSS por capas (`critical-css/base.css`, `hero.css`,
  `css/primitivas.css`, `componentes.css`, `footer.css` → `css/style.css`), `js/main.js`, `robots.txt`,
  `manifest.json`, `humans.txt`, `llms.txt`, `.well-known/security.txt`, `404.html`.
- Activos: logo recortado del PDF del portafolio (`img/logo-proincivil.png`, `-blanco.png`), favicons,
  `og-proincivil.jpg`, 10 SVG provisionales (`_scripts` de generación en el scratchpad de la sesión).
- Páginas escritas: home, hubs (servicios, proyectos, edificaciones, zonas, normativa, glosario,
  cuanto-cuesta, blog), nosotros (+ equipo, independencia), como-cotizar, contacto, politica-de-datos,
  y los tres ejemplos de esquema: `_servicios/diseno-estructural.md`, `_proyectos/tacuara-club-residencial.md`,
  `_normativa/nsr-10.md`.
- Scripts: `_scripts/validar-site.py` (post-build) y `_scripts/lint-frontmatter.py` (pre-build, con la
  lista de slugs esperados de la arquitectura).
- Decisiones: sin `timezone` en config (tzinfo en Windows); `repository:` marcador; fuentes Google
  (Fraunces + Inter + JetBrains Mono); nav y FAQ sin JS obligatorio (checkbox / details); mensaje de
  WhatsApp prellenado por página; paleta crema/tinta/oliva; imágenes en escala de grises por CSS.
- Contenido de colecciones (13 servicios, 4 cuanto-cuesta, 7 edificaciones, 6 zonas, 10 normativa,
  12 glosario, 8 proyectos, 3 posts) delegado a cinco agentes en paralelo con el lint como control.
- Sin commitear: el proyecto todavía no es repositorio git.

Vista previa activa conservada para revisión en `_plans/equipo-2026-10-16/vista-previa/`, puerto 4002. Se aísla de `_site` porque otro servidor existente lo sobrescribe con configuración antigua. Los temporales de validación se eliminaron.
