# Estado del proyecto — PROINCIVIL

**Última actualización:** 2026-10-01

## Iniciativas activas

| Iniciativa | Estado | Detalle |
|---|---|---|
| Investigación de mercado, keywords y arquitectura | ✅ Cerrada 2026-09-22 | `_plans/investigacion-web-seo-proincivil.md` (v2) + `_plans/research/` |
| Construcción del sitio Jekyll (82 URLs) | ✅ Compila y valida 2026-09-22 | Todo el contenido escrito como borrador; falta aprobación del cliente, fotografía real y publicación |
| Aprobación de contenido por el cliente | ⏳ No iniciada | Todo el contenido es borrador hasta aprobación escrita (contrato) |
| Publicación en GitHub Pages | ✅ 2026-09-22 | https://klerpson.github.io/proincivil/ · repo https://github.com/Klerpson/proincivil (público) |
| Dominio propio + indexación | ⏳ Bloqueada | Falta que PROINCIVIL compre `proincivil.com`; hasta entonces `vista_previa: true` |
| Entrega de pendientes al cliente | ✅ 2026-09-22 | `_plans/PENDIENTES-Y-PREGUNTAS-PROINCIVIL.md` y `.pdf` (5 páginas, 11 preguntas) |
| Fase SEO mensual | ⏳ Arranca al entregar el sitio | Plan de 12 meses en la sección 13 de la investigación |

## Pendientes del cliente (bloquean publicación)

Consolidado en `_plans/pendientes/*.md` (cada redactor deja los suyos). Los críticos:

1. Cifras oficiales: años (+5 / +7), proyectos (+50 / +100), m². Hoy `_config.yml` usa las del flyer.
2. Correo oficial: `gerenciaproincivil@gmail.com` (contrato) vs `proyectos@proincivil.com` (portafolio).
3. Autorización para publicar nombres de proyectos y clientes (Honda/Super Motos, Hotel The One, Tacuara).
4. Datos de cada proyecto marcados `PENDIENTE` (año, niveles) y fotografías B/N.
5. Equipo: formación, matrícula COPNIA, fotos.
6. Textos institucionales aprobados sin la palabra "construcción".
7. Rangos de precio (o negativa expresa) para `_cuanto-cuesta/`.
8. Umbrales vigentes de Ley 1796 / Decreto 945 confirmados por el Ing. Tamayo.
9. Endpoint de formulario (Formspree/Web3Forms) → `form_endpoint` en `_config.yml`; GA4 → `ga4_id`;
   verificación de Search Console → `google_site_verification`; Google Business Profile → `social.google_business`.
10. Logo vectorial (el actual es un recorte del PDF del portafolio, `img/logo-proincivil*.png`).

## Problemas abiertos

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
