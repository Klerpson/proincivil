---
name: competitor-analysis
description: Análisis de competencia en SERPs de Google Colombia para keywords de ingeniería estructural, geotecnia e interventoría. Se activa con "competencia", "qué rankea", "análisis SERP", "top resultados", o antes de escribir contenido estratégico.
---

# Análisis de competencia — PROINCIVIL

## Ya hecho (leer antes de repetir)
`_plans/research/competencia-colombia.md` (24 dominios: tráfico, DA, stack, páginas de servicio, blog,
CTA, keyword gap, content gap, convenciones de URL, 10 oportunidades) y
`_plans/research/benchmarks-internacionales.md` (30+ sitios de EE. UU., España, Italia y Chile; 23
patrones; qué copiar/adaptar/evitar). Competidores clave: sioingenieria.com (líder local por glosario),
davinci.com.co, interve.co, construinges.com.co, efeprimace.co, ingenil.com.

## Proceso para una keyword nueva
1. `mcp__claude_ai_Ubersuggest__serp_analysis` (keyword, `locId: 2170`, `language: "es"`): top 10, tipo de
   resultado (organic, local_pack, ai_overview, people_also_ask), DA.
2. Para los 5 primeros orgánicos: `ctx_fetch_and_index` (batch, concurrency 4) + `ctx_search` para
   extraer H1/H2, longitud, FAQ, schema, precios, CTA, si construyen o no.
3. Cuantificar: promedio de palabras, H2, imágenes, % con schema, % con FAQ, % con precios.
4. Gaps para PROINCIVIL: caso real con datos, independencia ("no ejecutamos obra"), 8 bloques de servicio,
   FAQ del autocompletado, `resumen` citable, schema Service+FAQPage, página por obligación legal o por
   tipo de edificación.
5. Title/description: patrón dominante vs propuesta diferenciada (disparador + cifra + marca).

## Salida
Tabla Top 5 (pos, dominio, title, palabras, H2, schema, insight) · patrones · gaps con acción e impacto
· estructura recomendada (H1/H2/H3, longitud objetivo = 110 % del promedio, schema, enlaces) · title y
description propuestos. Guardar en `_plans/research/serp-<keyword>.md` si el análisis es reutilizable.
