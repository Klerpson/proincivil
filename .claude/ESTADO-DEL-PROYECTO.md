# Estado del proyecto — PROINCIVIL

**Última actualización:** 2026-09-22

## Iniciativas activas

| Iniciativa | Estado | Detalle |
|---|---|---|
| Investigación de mercado, keywords y arquitectura | ✅ Cerrada 2026-09-22 | `_plans/investigacion-web-seo-proincivil.md` (v2) + `_plans/research/` |
| Construcción del sitio Jekyll (82 URLs) | ✅ Compila y valida 2026-09-22 | Todo el contenido escrito como borrador; falta aprobación del cliente, fotografía real y publicación |
| Aprobación de contenido por el cliente | ⏳ No iniciada | Todo el contenido es borrador hasta aprobación escrita (contrato) |
| Publicación en GitHub Pages + dominio | ⏳ No iniciada | Crear repo, configurar `repository:` y CNAME, DNS apex → www |
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

- 🟠 Imágenes: todas son SVG provisionales de línea (`img/placeholder-*.svg`). Sustituir por fotografía
  B/N del cliente manteniendo `width/height/alt`.
- 🟡 `repository: proincivil/proincivil.com` en `_config.yml` es un marcador (jekyll-feed lo exige para
  compilar); ajustar al repo real.
- 🟡 Formulario inactivo hasta configurar `form_endpoint` (muestra aviso + WhatsApp).
- 🟡 Nav de escritorio con paneles por `:hover`; en pantallas táctiles grandes (tablet horizontal) el
  panel se abre con el checkbox. Verificar en iPad.

## Backlog

- Posts de sismo con plantilla `< 24 h` tras cada evento sentido en Antioquia (categoría `sismos`).
- `/recursos/` con checklists descargables (documentos para curaduría, revisión post-sismo).
- Reseñas de Google en la home cuando existan (nunca `aggregateRating` hardcodeado).
- Página de empresa en LinkedIn y perfil de Google Business (NAP idéntico al de `_config.yml`).

## Bitácora

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
