# CLAUDE.md — Archivo maestro del proyecto PROINCIVIL

## Primer paso obligatorio

Antes de diagnosticar, editar o proponer nada, lee completo
[`.claude/ESTADO-DEL-PROYECTO.md`](ESTADO-DEL-PROYECTO.md): iniciativas en curso, bitácora, problemas
abiertos y pendientes del cliente. El historial de git no sirve como contexto. Al terminar cualquier
sesión que cambie el estado del proyecto, actualízalo siguiendo la skill `estado-proyecto`.

## El proyecto

**PROINCIVIL S.A.S.** (NIT 901.697.902-8) es una firma de ingeniería estructural y consultoría técnica en
Envigado, Antioquia: diseño sismorresistente NSR-10, evaluación y patología estructural, vulnerabilidad
sísmica, reforzamiento, geotecnia y estudios de suelos, cimentaciones, muros de contención, interventoría
de diseños, revisión independiente, supervisión técnica independiente, acompañamiento ante curadurías y
BIM. Vende a arquitectos, constructoras, promotores, administraciones de P.H., aseguradoras, entidades
públicas y empresas de energía solar.

**URL de destino:** https://www.proincivil.com (canónica con `www`) · **Vista previa actual:**
https://klerpson.github.io/proincivil/ · **Idioma:** solo español (es-CO) · **Hosting:** GitHub Pages
(solo plugins de la lista blanca: jekyll-sitemap, jekyll-feed, jekyll-redirect-from) · **Contratos:**
prestación de servicios de diseño y desarrollo web + SEO mensual. Los documentos (contratos,
investigación de mercado, pendientes del cliente) viven en `_plans/`, **fuera del repositorio**.

**Alcance publicado hoy:** home, servicios, proyectos, páginas corporativas y blog. Normativa,
glosario, zonas, edificaciones y «cuánto cuesta» están escritos y versionados pero **retenidos para la
fase SEO**: se controlan con `secciones_publicadas` en `_config.yml` (añadir la sección y recompilar
los devuelve al menú, al pie y a los CTA). El sitio corre con `vista_previa: true` (noindex + robots
bloqueado) hasta que el cliente apruebe el contenido y exista el dominio.

### Regla contractual innegociable

**El sitio debe decir de forma inequívoca que PROINCIVIL diseña, evalúa y supervisa y que NO ejecuta
obras de construcción.** Aplica a diseño, estructura, textos, títulos, schema y a cualquier contenido SEO
posterior. Está en el objeto de ambos contratos. Nunca escribir "construimos", "nuestras obras",
"ingeniería que construye" ni eslóganes similares; convertirlo en argumento: independencia técnica sin
conflicto de interés.

### Otras reglas de contenido

- **El cliente aprueba por escrito todo contenido antes de publicar** (cláusulas de contenido de ambos
  contratos). Todo dato no confirmado (fechas, niveles, nombres de clientes, matrícula, cifras) se marca
  `PENDIENTE` y se registra en `_plans/pendientes/*.md`, nunca se inventa.
- **Fuente única de datos de contacto, cifras y equipo: `_config.yml`** (`site.empresa`, `site.contact`,
  `site.cifras`, `site.equipo`). Nunca escribir teléfonos, correos, NIT o cifras a mano.
- **Sin precios en COP** hasta que el cliente autorice rangos; las páginas de `_cuanto-cuesta/` explican
  factores, alcance y plazos.
- **"Patología estructural"** es keyword secundaria (H2, FAQ, glosario), no H1 de servicio: el bigrama
  tiene 170 búsquedas/mes limpias, pero la palabra suelta es médica (reserva del contrato SEO).
- Tono: técnico, sobrio, trato de usted, mayúscula solo inicial en títulos, sin clichés de IA, 60-70 %
  prosa, tablas cuando aporten. Ver skill `copywriter`.
- Keywords, competencia, arquitectura y plan de contenidos: `_plans/investigacion-web-seo-proincivil.md`
  (v2) y `_plans/research/*.md`. No re-investigar lo que ya está ahí.

## Arquitectura del sitio

```
/                           index.html (layout home)
/servicios/                 servicios.html (hub) + _servicios/*.md (14, layout service)
/cuanto-cuesta/             cuanto-cuesta.html + _cuanto-cuesta/*.md (4, layout service)
/edificaciones/             edificaciones.html + _edificaciones/*.md (7, layout service)
/zonas/                     zonas.html + _zonas/*.md (6, layout service)
/normativa/                 normativa.html + _normativa/**.md (11, layout article; nsr-10/titulo-x anidados)
/glosario/                  glosario.html + _glosario/*.md (12, layout article)
/proyectos/                 proyectos.html + _proyectos/*.md (9, layout project)
/blog/                      blog.html + _posts/YYYY-MM-DD-slug.md (layout post, permalink /blog/:slug/)
/nosotros/ /nosotros/equipo/ /nosotros/independencia-tecnica/ /como-cotizar/ /contacto/ /politica-de-datos/
```

Layouts: `compress` → `default` (nav, header, main, footer, sticky CTA) → `home | page | hub | service |
article | project | post`. El header lo pinta `_includes/header.html` según `page.layout`. Los bloques de
una página de servicio (resumen, cuando, entregables, despues, factores, audiencias, proyectos,
relacionados, normativa, faqs) salen del front matter: ver `.claude/docs/frontmatter-variables.md`.

Navegación y footer: `_data/navegacion.yml`. Migas de pan: `_data/breadcrumb_names.yml` + `titulo_corto`.

## Convenciones técnicas

- **CSS:** `_includes/critical-css/base.css` + `hero.css` van inline en todas las páginas; el resto se
  compila en `css/style.css` desde `_includes/css/*.css`. Capas: `@layer reset, primitivas, componentes,
  utilidades`. **Antes de escribir CSS nuevo, usa una primitiva de `primitivas.css`** (`.section`,
  `.wrapper`, `.flow`, `.grid`, `.dos_columnas`, `.tile`, `.list_check`, `.cifras`, `.resumen`, `.nota`,
  `.ficha`, `.pasos`, `.articulo`). Misma forma con otra piel = modificador `--variante`. Una clase
  describe una forma, nunca un tema. Ver skill `dev-jekyll`.
- **CTA de WhatsApp:** siempre `{% include button.html texto="…" data_location="…" %}`. Nunca `wa.me` a
  mano. El mensaje prellenado se deriva del H1 o de `wa_mensaje`.
- **Schema:** lo emiten los includes según `schemaType` y `faqs:` del front matter. Nunca JSON-LD a mano
  en una página.
- **JS dentro de HTML: solo comentarios de bloque** (`layout: compress` une líneas; `//` se come el
  script).
- **Imágenes:** `/img/`, SVG provisionales `placeholder-*.svg` hasta que el cliente entregue fotografía
  B/N. Siempre `width`, `height`, `alt` y `loading="lazy"` salvo el hero.
- **Build:** `& C:\Ruby33-x64\bin\bundle.bat exec jekyll build` (PowerShell; el shim `bundle` de
  WindowsApps está roto). Servidor local: `… exec jekyll serve --port 4001`.
- **Validación obligatoria tras cada build:** `python _scripts/validar-site.py` (hrefs vacíos, Liquid sin
  procesar, comillas rotas, enlaces internos rotos, JSON-LD inválido, H1 duplicado). Y antes de compilar
  contenido nuevo: `python _scripts/lint-frontmatter.py`.
- Sin `timezone` en `_config.yml` (Windows exige tzinfo-data). `repository:` es un marcador hasta que
  exista el repo del cliente.

## Skills disponibles

`dev-jekyll` (maquetación, layouts, CSS, Liquid) · `copywriter` (páginas de servicio, guías, posts) ·
`seo-onpage` (optimizar páginas existentes) · `seo-technical` (head, schema, sitemap, CWV) ·
`keyword-research` (Ubersuggest MCP, locId 2170, es) · `competitor-analysis` (SERPs y competidores del
sector) · `estado-proyecto` (contexto entre sesiones). Flujo: keyword-research → competitor-analysis →
copywriter → seo-onpage.
