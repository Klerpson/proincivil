---
name: seo-onpage
description: Optimización de páginas YA publicadas de proincivil.com (title, description, H1/H2, enlazado, FAQs, datos de Search Console). Se activa con "optimizar página", "mejorar SEO de", "revisar contenido", o al recibir datos de GSC.
---

# SEO on-page — PROINCIVIL

## Antes de optimizar
1. ¿Otra URL del sitio responde la misma intención? (grep de la keyword en `_servicios`, `_normativa`,
   `_posts`). Si hay duplicado real, consolidar primero (fusionar + `redirect_from`).
2. ¿Es contenido commodity? Si cualquier firma de ingeniería podría publicarlo igual, añadir dato propio,
   caso real (ver lista en `copywriter`) o criterio del ingeniero.
3. Leer el archivo completo y su front matter.

## Checklist por página
- `title` ≤ 72 con keyword al inicio y marca al final; `description` 150-165 con keyword + beneficio + CTA.
- `h1` único, con keyword, ≤ 70 caracteres; `titulo_corto` para migas.
- H2 con keywords secundarias y contenido específico (mínimo 4); jerarquía sin saltos.
- Keyword en primeras 100 palabras (en negrita), densidad 1-2,5 %.
- `resumen` de 40-60 palabras citable (AI Overviews) — obligatorio en servicios y guías.
- `faqs` 6-8 que respondan preguntas del autocompletado de Google CO (§7.3 de la investigación); sin
  duplicar preguntas que ya tiene otra URL.
- 3-6 enlaces internos con anchor descriptivo (servicio ↔ proyectos ↔ edificación ↔ normativa ↔ cómo cotizar).
- `proyectos`, `relacionados`, `normativa` rellenos con slugs válidos.
- `hero_alt` descriptivo; imágenes con dimensiones.
- `dateModified` actualizado (≥ `datePublished`).
- Mensaje "no ejecutamos obra" presente cuando aplique.

## Con datos de Search Console
- Posición 11-20 → añadir H2/FAQ específico para la query.
- Posición 1-10 con CTR < 3 % → reescribir title/description con el disparador o la cifra.
- Queries inesperadas con impresiones → ampliar sección o crear FAQ; si es otra intención, página nueva.

## Salida
Errores críticos / Mejoras importantes / Optimizaciones finas, con antes/después del front matter, y KPIs
a revisar en 60 días. Aplicar cambios en el archivo fuente, correr `lint-frontmatter.py`, compilar y
`validar-site.py`.
