---
titulo_corto: "DES, DMO y DMI"
orden: 6
title: "DES, DMO y DMI: capacidad de disipación de energía NSR-10 | Glosario"
description: "Qué significan DES, DMO y DMI en la NSR-10: niveles de capacidad de disipación de energía sísmica, qué zona de amenaza exige cada uno y cómo cambian el refuerzo."
h1: "DES, DMO y DMI: capacidad de disipación de energía"
eyebrow: "Glosario"
excerpt: "Tres siglas que aparecen en toda memoria de cálculo y definen cuánto acero de confinamiento lleva su estructura y cuánto sismo puede absorber."
resumen: "DES, DMO y DMI son los tres niveles de capacidad de disipación de energía que define la NSR-10 para los sistemas estructurales: especial, moderada y mínima. La zona de amenaza sísmica fija el nivel mínimo exigido (alta exige DES, intermedia al menos DMO, baja admite DMI). A mayor nivel, más ductilidad, más detallado de refuerzo y mayor coeficiente de reducción R de las fuerzas sísmicas."
datePublished: 2026-09-22
dateModified: 2026-09-22
about: "Capacidad de disipación de energía según la NSR-10"
servicios: [diseno-estructural, revision-independiente-de-disenos]
relacionados: [ductilidad, sistema-aporticado, estribos]
sin_cta_cabecera: true
---

## Qué significan las siglas

La NSR-10 permite diseñar la estructura para fuerzas sísmicas menores que las elásticas, a cambio de que sea capaz de deformarse en el rango inelástico y disipar energía. Cuánta energía puede disipar depende de su [ductilidad]({{ site.baseurl }}/glosario/ductilidad/), y el reglamento la clasifica en tres niveles:

| Nivel | Nombre | Zona de amenaza donde se exige como mínimo | Coeficiente R (pórticos de concreto, orientativo) |
|---|---|---|---|
| DMI | Capacidad mínima de disipación de energía | Baja | 2,5 |
| DMO | Capacidad moderada | Intermedia (Medellín, Envigado, Área Metropolitana) | 5,0 |
| DES | Capacidad especial | Alta (Urabá, occidente antioqueño, entre otras) | 7,0 |

Un nivel superior siempre puede usarse en una zona que exige uno inferior; lo contrario no. Los valores de R dependen también del sistema estructural y están en el [Título A]({{ site.baseurl }}/normativa/nsr-10/titulo-a/).

## Qué cambia en la práctica

El nivel no es solo un número en el análisis: define el detallado del refuerzo en el [Título C]({{ site.baseurl }}/normativa/nsr-10/titulo-c/) (concreto) y el Título F (acero). Pasar de DMO a DES en un pórtico de concreto implica [estribos]({{ site.baseurl }}/glosario/estribos/) de confinamiento más cerrados y más largos en los extremos de vigas y columnas, ganchos sísmicos a 135°, verificación explícita de columna fuerte-viga débil, diseño de nudos por capacidad y límites más estrictos de cuantía y de empalmes. En acero, exige conexiones precalificadas y riostras diseñadas por capacidad.

La contrapartida es que un R mayor reduce las fuerzas de diseño: la estructura DES puede tener elementos más esbeltos que la DMO. La elección entre "más concreto con menos ductilidad" y "menos concreto con más acero de confinamiento" es una decisión de diseño con impacto directo en el presupuesto y en la facilidad de construcción. La tomamos con el cliente y el constructor en mente.

## Un ejemplo real

La I.E. Pavarandó Grande, en Mutatá (zona de amenaza alta), se diseñó con pórticos **DES** y chequeo de ductilidad; un colegio equivalente en Envigado podría diseñarse en DMO con un detallado menos exigente. Y en las [revisiones independientes]({{ site.baseurl }}/servicios/revision-independiente-de-disenos/) uno de los hallazgos más comunes es el inverso: memorias que usan el R de DES con planos detallados en DMO. Ese diseño no es conservador, es inseguro, porque toma la reducción de fuerzas de una ductilidad que la estructura no tiene.
