---
name: seo-technical
description: Auditoría y setup técnico SEO de proincivil.com (head, canonical, schema, sitemap, robots, Core Web Vitals, GitHub Pages). Se activa con "auditoría técnica", "meta tags", "schema", "sitemap", "robots", "Core Web Vitals", o al tocar _config.yml, head.html o los includes schema-*.
---

# SEO técnico — PROINCIVIL

## Configuración de referencia
`_config.yml`: `url: https://www.proincivil.com` (sin barra final), `baseurl: ""`, `plugins:
jekyll-sitemap, jekyll-feed, jekyll-redirect-from` (lista blanca de GitHub Pages), sin `timezone`,
`repository:` marcador. Colecciones con `permalink` propio; `defaults` fijan layout y `schemaType`.

## Head (`_includes/head.html`)
Title/description por página con fallback a `site.site_meta`; canonical absoluta desde `page.url` o
`page.canonical`; robots `index, follow, max-image-preview:large` salvo `noindex`; OG/Twitter con
`page.image`/`og_image` (por defecto `/img/og-proincivil.jpg`); geo meta Envigado; favicons; manifest;
feed y sitemap; fuentes Google con preconnect; CSS crítico inline; preload del hero en home; GA4 solo en
producción y con `ga4_id`.

## Schema (todo por includes, nunca a mano)
| Include | Cuándo | Fuente |
|---|---|---|
| `schema-organization.html` | Todas | `site.empresa`, `site.contact`, `site.social`, `site.equipo` (ProfessionalService + LocalBusiness + Organization, `taxID` = NIT) |
| `schema-website.html` | Home | — |
| `schema-breadcrumb.html` | Todas menos home | `page.url` + `_data/breadcrumb_names.yml` + `titulo_corto` |
| `schema-service.html` | `schemaType: Service` (servicios, cuanto-cuesta, edificaciones, zonas) | `serviceType`, `area_servida`, `categoria`, `audiencia_meta` |
| `schema-article.html` | `schemaType: Article` (normativa, glosario, posts) | `datePublished`, `dateModified`, `author` (slug de `site.equipo`) |
| `schema-project.html` | `schemaType: Project` (proyectos) | `ficha` |
| `schema-faq-page.html` | `faqs:` presente | `faqs` (answer → markdownify → strip_html) |
| `schema-person.html` | `persona: true` | `site.equipo` |

Validar en https://validator.schema.org y Rich Results Test. Nunca `aggregateRating`/`review` sin reseñas
verificables enlazadas al perfil de Google Business.

## Checklist de auditoría
- [ ] `python _scripts/validar-site.py` sin hallazgos (JSON-LD válido, un H1, sin Liquid crudo, sin enlaces rotos).
- [ ] Canonical www en todas las páginas; apex → www en DNS + "Enforce HTTPS" en GitHub Pages; `CNAME` en raíz.
- [ ] `sitemap.xml` (jekyll-sitemap) sin páginas `noindex`/`sitemap: false`; enviado a Search Console.
- [ ] `robots.txt` permite bots de IA y referencia el sitemap absoluto.
- [ ] Title ≤ 72, description 150-165 y H1 con keyword en cada página (lint de front matter).
- [ ] Imágenes con `width/height/alt`; hero con `fetchpriority="high"`; el resto `loading="lazy"`.
- [ ] LCP < 2,5 s móvil, CLS < 0,1, INP < 200 ms (PageSpeed Insights). CSS crítico ~15 KB; `style.css` cargado con preload.
- [ ] NAP idéntico en sitio, Google Business Profile, Instagram, LinkedIn (página de empresa), Facebook.
- [ ] `llms.txt`, `humans.txt`, `.well-known/security.txt`, `manifest.json` presentes.
- [ ] Redirecciones: `redirect_from:` en el front matter de la página destino (jekyll-redirect-from); nunca meta-refresh a mano.

## Migración desde el sitio anterior
El sitio viejo era una SPA con una sola URL (`/` y anclas `#servicios`, `#proyectos`, `#contacto`): no hay
URLs antiguas que redirigir. Canonical previa ya era `https://www.proincivil.com/`.

## Salida de auditoría
Formato: Elementos correctos / Advertencias (media) / Errores críticos (alta) / Plan de acción con fechas
absolutas / Próxima auditoría (+60 días). Registrar en `ESTADO-DEL-PROYECTO.md`.
