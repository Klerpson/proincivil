# Estado del proyecto — PROINCIVIL

**Última actualización:** 2026-10-16

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
10. Logo vectorial (el actual es un recorte del PDF del portafolio, `img/logo-proincivil*.png`).

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

## Backlog

- Posts de sismo con plantilla `< 24 h` tras cada evento sentido en Antioquia (categoría `sismos`).
- `/recursos/` con checklists descargables (documentos para curaduría, revisión post-sismo).
- Reseñas de Google en la home cuando existan (nunca `aggregateRating` hardcodeado).
- Página de empresa en LinkedIn y perfil de Google Business (NAP idéntico al de `_config.yml`).

## Bitácora

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
