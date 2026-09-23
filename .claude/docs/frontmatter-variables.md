# Variables de front matter — PROINCIVIL

Referencia de las variables que leen `head.html`, `header.html`, los layouts y los includes de schema.

## Comunes a todas las páginas (head.html + header.html)

| Variable | Uso | Obligatorio |
|---|---|---|
| `title` | `<title>`, twitter:title (≤ 72 caracteres) | Sí |
| `description` | meta description, og:description (150-165) | Sí |
| `h1` | H1 visible y og:title; admite `<em>` para el acento en itálica | Sí |
| `titulo_corto` | Migas de pan, tarjetas, breadcrumb schema | Recomendado |
| `eyebrow` | Rótulo sobre el H1 (mono, mayúsculas) | No |
| `excerpt` | Párrafo bajo el H1; en tarjetas si no hay `description` | Recomendado |
| `hero` | **Nombre base** de una foto de `/img/fotos` (p. ej. `estructura-metalica`), no una ruta. Los anchos disponibles están en `_data/fotos.yml`; `picture.html` elige el que existe | Según layout |
| `hero_alt` | Alt de la foto de cabecera | Con `hero` |
| `image` / `og_image` | Imagen OG (ruta completa, p. ej. `/img/fotos/estructura-metalica-1200.jpg`) | No |
| `badges` | Lista de chips con ✓ bajo el H1 | No |
| `cta_texto` | Texto del botón de WhatsApp de la cabecera | No |
| `cta_secundario` | `{ url, texto }` botón secundario en cabecera | No |
| `sin_cta_cabecera` | `true` oculta los botones de cabecera | No |
| `sin_cta` | `true` oculta el CTA final (layout page) | No |
| `wa_mensaje` | Mensaje prellenado de WhatsApp (si no, se deriva del H1) | No |
| `canonical` | Solo si difiere de `page.url` | No |
| `noindex`, `sitemap: false` | Páginas privadas/técnicas | No |
| `datePublished`, `dateModified` | Schema Article/Project y fecha lateral (YYYY-MM-DD) | Sí en colecciones |
| `breadcrumb_enabled: false` | Oculta migas | No |
| `faqs` | `[{question, answer}]` → acordeón + FAQPage automático (answer admite Markdown) | Recomendado |
| `persona: true` | Emite schema Person del equipo (`site.equipo`) | Solo nosotros/equipo |

## layout: service (servicios, cuanto-cuesta, edificaciones, zonas)

`resumen` (40-60 palabras, bloque "En resumen" + speakable) · `cuando` (lista) · `cuando_titulo` ·
`entregables` · `entregables_titulo` · `despues` (lista o texto) · `despues_titulo` · `factores` ·
`factores_titulo` · `cuanto_cuesta` (URL) · `audiencias` (`[{rol, texto}]`) · `proyectos` (slugs de
`_proyectos`) · `proyectos_titulo` · `relacionados` (slugs de `_servicios`) · `normativa` (slugs de
`_normativa`) · `serviceType`, `categoria`, `area_servida`, `audiencia_meta` (schema Service) · `orden`
(orden en hubs) · `grupo`.

## layout: article (normativa, glosario)

`resumen` · `indice` (`[{id, title}]`; los ids deben existir como `{#id}` en H2 del cuerpo) · `servicios`
(slugs) · `relacionados` (slugs de la misma colección) · `about` (schema) · `faqs`.

## layout: project (proyectos)

`ficha` (mapa: cliente, ubicacion, anio, sector, servicio, sistema, area, niveles, normativa, rol,
resultado — se imprime tal cual, `PENDIENTE` cuando falte) · `galeria` (`[{src, alt, pie}]`) · `testimonio`
(`{texto, autor, cargo}`) · `servicios` (slugs) · `edificacion` (slug) · `zona` (slug) · `eyebrow`.

## layout: post (_posts)

`categories` (`sismos | normativa | costos | casos`) · `tags` · `author` (slug de `site.equipo`, por
defecto `camilo-tamayo`) · `readingTime` · `resumen` · `indice` · `servicios` · `faqs` · `image`.

## layout: hub

`coleccion` (nombre de la colección) · `grupos` (`[{titulo, texto, slugs}]`; sin grupos lista todo por
`orden`).

## Reglas

- El front matter **nunca se procesa con Liquid**: en `faqs`, `excerpt`, etc. usar rutas estáticas
  (`/servicios/x/`), nunca `{{ }}`.
- `answer` de FAQ pasa por `markdownify`: admite enlaces y negritas en Markdown.
- Datos de empresa, contacto, cifras y equipo: solo desde `site.*` de `_config.yml`.
