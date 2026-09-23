---
name: copywriter
description: Redacción y revisión de contenido para PROINCIVIL (páginas de servicio, edificaciones, zonas, guías normativas, glosario, fichas de proyecto, posts). Se activa con "escribe", "redacta", "nuevo artículo", "página de servicio", "revisa el texto", "mejora la redacción".
---

# Copywriter — PROINCIVIL

Adaptada de la skill de ALMO Clinic. Aquí no hay pacientes ni precios: hay arquitectos, constructoras,
administradores de P.H., aseguradoras y entidades públicas que necesitan un especialista estructural.

## Antes de escribir
- Keyword objetivo y sus preguntas de autocompletado: `_plans/investigacion-web-seo-proincivil.md` §7.
- ¿Es servicio, edificación, zona, guía normativa, término de glosario, proyecto o post? Test de embudo:
  intención transaccional/comercial → colección con layout `service`; informacional/normativa → `article`
  o post; nombre propio de edificio → `_proyectos`.
- Antes de crear una URL nueva: ¿otra página ya responde lo mismo con otras palabras? Consolidar en
  `faqs:` de la página dueña en vez de fragmentar.
- Lee un archivo modelo: `_servicios/diseno-estructural.md`, `_normativa/nsr-10.md`,
  `_proyectos/tacuara-club-residencial.md`.

## Estructura de página de servicio (8 bloques, patrón Engical/Ingek)
H1 por disparador → `resumen` citable (40-60 palabras) → cuerpo: qué es / cómo lo hacemos / tipos o tabla /
qué nos diferencia → `cuando` (5-7 disparadores) → `entregables` → `despues` (+ nota de independencia) →
`factores` (+ enlace a `cuanto_cuesta`) → `audiencias` → casos (`proyectos`) → `faqs` (6-8, respondiendo
preguntas reales del autocompletado) → CTA → `relacionados` y `normativa`.

## Reglas de contenido (contrato + criterio)
- **Nunca** "construimos", "nuestras obras", "ejecutamos". Siempre: diseñamos, evaluamos y supervisamos; la
  obra la ejecuta el constructor que usted elija.
- **Nunca** cifras en COP, ni datos de clientes, fechas, niveles o matrículas no confirmados → `PENDIENTE`
  y registro en `_plans/pendientes/`.
- **Nunca** garantizar resultados de posicionamiento ni de aprobación futura; la cifra "100 % de aprobación en
  primera radicación" es histórica y va tal cual.
- Umbrales legales (Ley 1796, Decreto 945, A.10): lenguaje prudente y verificación con el ingeniero.
- Casos reales disponibles: Tacuara (post-sismo, ATC-20, 6 torres, +780 aptos), Pavarandó (DES, pilas con
  campana, suelo C, 4.544 m²), Puerto Perales (3.600 m²), Yerbal (+13.000 m² educación), Hotel Aldea
  (+5.000 m², optimización), Hotel The One (interventoría, 15 niveles), carports (1.366 y 715 m²,
  conexiones precalificadas), Super Motos/Honda (repotenciación), Betulia (geotecnia y contenciones).

## Estilo
- Español de Colombia, trato de usted, mayúscula solo en la primera palabra de títulos y nombres propios.
- Arranques directos con el dato o el problema; sin "en este artículo", "todo lo que necesita saber",
  "es importante destacar", "en conclusión".
- H2 con keyword y contenido específico ("Qué revisa la curaduría en el componente estructural"), nunca
  genéricos ("Beneficios", "Proceso").
- 60-70 % prosa en párrafos de 2-4 líneas; 15-20 % tablas; blockquotes para datos destacados; listas de
  máximo 4-6 ítems.
- Keyword en title, H1, primeras 100 palabras, description y alt del hero; 3-6 enlaces internos con
  anchor descriptivo a URLs de la arquitectura.
- Contenido no-commodity: dato propio, caso real, criterio del ingeniero. Si cualquier firma podría
  publicarlo igual, reescribir.

## Validación
`python _scripts/lint-frontmatter.py <carpeta>` → 0 errores. Comprobar que `hero` existe, que los slugs
referenciados están en la lista ESPERADOS y que `title` ≤ 72 y `description` 150-165.

## Post de sismo (plantilla, publicar < 24 h)
Título "Sismo de M x,x en <lugar>, <fecha>: qué revisar en su edificio" · datos del SGC · qué revisar
(ATC-20 simplificado) · cuándo llamar a un ingeniero · qué no hacer · CTA a
`/servicios/evaluacion-post-sismo/` · categoría `sismos`.
