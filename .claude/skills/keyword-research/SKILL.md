---
name: keyword-research
description: Investigación de keywords para PROINCIVIL con el MCP de Ubersuggest (Colombia, locId 2170, es) antes de crear contenido. Se activa con "keywords", "volumen de búsqueda", "Ubersuggest", "qué buscan", "investigación de palabras clave".
---

# Keyword research — PROINCIVIL

## Herramienta
MCP Ubersuggest conectado (`mcp__claude_ai_Ubersuggest__*`), tier gratuito. Parámetros fijos: `locId:
2170` (Colombia), `language: "es"`. Medellín: `locId: 1003654`. Herramientas útiles: `match_keywords`
(1-3 semillas, volumen/SD/CPC), `keyword_overview` (tendencia mensual), `serp_analysis` (quién rankea,
AI Overview, Local Pack), `google_suggestions` (autocompletado, sin métricas; la salida es grande: procesar
con Python), `domain_keywords`/`domain_overview` (competidores), `content_ideas`.

## Ya investigado (no repetir)
`_plans/investigacion-web-seo-proincivil.md` §7 tiene ~30 consultas del 2026-09-22 con volúmenes por
cluster (diseño, metálicas, evaluación, post-sismo, geotecnia, cimentaciones, contenciones, interventoría,
licencias/curadurías, BIM, NSR-10) y las preguntas del autocompletado. Empezar por ahí; solo consultar
Ubersuggest para keywords nuevas o para refrescar tendencias.

## Particularidades del sector
- Volúmenes colombianos bajos: 100-300/mes con intención comercial es una keyword valiosa; las locales
  ("diseño estructural medellin") tienen 10-40/mes → se ganan con GBP y páginas de zona, no con H1.
- Mucho tráfico NSR-10 y de glosario es de estudiantes: sirve para autoridad y AI Overviews, no para
  conversión. Priorizar por (volumen/50) × (100 − SD) × multiplicador de intención (transaccional 2,
  comercial 1,5, informacional 1, navegacional 0,5).
- Todas las SERPs objetivo muestran AI Overview y People Also Ask: cada página necesita `resumen`
  citable y `faqs`.
- "patología estructural" (170/mes, SD 9) sí es viable como keyword secundaria; "patología" sola es médica.
- Picos post-sismo ("ingeniero estructural medellin" 30 → 170 en ago-2026): mantener la página de
  evaluación post-sismo y publicar un post en < 24 h tras cada sismo sentido.

## Filtro anti-fragmentación
Antes de asignar una URL nueva a una keyword: ¿ya existe una página que responde lo mismo con otro
wording? → variante en `faqs:`/H2 de la página dueña, no URL nueva.

## Salida
Tabla priorizada (Quick wins / Medio plazo / Long-tail) con Keyword · Vol · SD · Intención · URL destino
(de la arquitectura de `.claude/CLAUDE.md`) · Acción. Cluster semántico y keyword principal + 3-5
secundarias para la pieza a escribir.
