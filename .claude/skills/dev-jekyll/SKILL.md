---
name: dev-jekyll
description: Maquetación y desarrollo en Jekyll (HTML, CSS, Liquid) para PROINCIVIL. Se activa con "maquetar", "crear layout", "desarrollar página", "CSS", "Jekyll", "Liquid", o al trabajar en _layouts/, _includes/, css/, js/ o archivos .html.
---

# Dev Jekyll — PROINCIVIL

Heredada de la skill homónima de ALMO Clinic (`C:\dev\sitios\almo\.claude\skills\dev-jekyll\skill.md`),
adaptada a este proyecto: monolingüe, GitHub Pages, sin precios, con la regla "no ejecutamos obra".

## Cuándo usarla
Layouts, includes, páginas HTML, CSS, Liquid, componentes. No para redactar (→ `copywriter`), ni para SEO
on-page (→ `seo-onpage`), ni auditorías técnicas (→ `seo-technical`).

## Compuerta antes de escribir CSS
1. Abre `_includes/css/primitivas.css` y `secciones.css`. Si la forma existe (`.section`,
   `.section--crema`, `.section--bosque`, `.wrapper`, `.flow`, `.grid` con `--grid-min`, `.dos_columnas`,
   `.section-header`, `.tile` y variantes, `.list_check`, `.cifras`, `.resumen`, `.nota`, `.ficha`,
   `.figura`, `.cita`, `.articulo`/`.indice`, `.contenido`, `.pasos`, `.sectores`; y con imagen:
   `.hero`, `.lamina`, `.trio`, `.split`, `.tira`, `.testimonio`, `.tile--media`), úsala. No escribas
   CSS nuevo.
2. Misma forma con otra piel → modificador `--variante` en la primitiva.
3. Componente irreducible con comportamiento propio → clase nueva en `_includes/css/componentes.css`,
   documentada en este archivo.
4. Una clase describe una FORMA, nunca un TEMA (`.tile`, no `.tarjeta-servicio`).
5. Escribir la regla no es aplicarla: el reset y las reglas de elemento viven en `@layer reset`; las
   primitivas en `@layer primitivas`. Una regla SIN capa gana siempre a una con capa — si algo no se
   aplica, revisa la capa antes que la especificidad, y mide con `getComputedStyle` sobre el build.

## Arquitectura CSS real
```
_includes/critical-css/base.css   tokens (:root), @layer reset, nav, botones — inline en <head>, todas las páginas
_includes/critical-css/hero.css   hero home, cabecera interior, migas, badges — inline
_includes/critical-css/critical.html   arma el <style> + preload de /css/style.css
_includes/css/primitivas.css      @layer primitivas
_includes/css/componentes.css     faq, cta-final, formulario, sticky, persona, tabla, sectores
_includes/css/footer.css
css/style.css                     compilador ({% include %} de los módulos), layout: compress
```
No hay carga condicional por layout. No usar `@import`. `{% render %}` no existe en Jekyll: `{% include %}`.

## Tokens (usar estos, no inventar)
`--color-crema --color-blanco --color-tinta --color-bosque --color-oliva --color-oliva-texto
--color-oliva-claro --color-gris --color-linea --color-linea-clara` · `--fuenteTitulos` (Fraunces)
`--fuenteTexto` (Inter) `--fuenteMono` (JetBrains Mono) · `--text-display/h1/h2/h3/body/small/eyebrow/stat`
· `--space-xs…3xl`, `--section-padding`, `--content-width`, `--wrapper-inset` · `--radius-sm/md/pill` ·
`--elev-1-border`, `--elev-2`, `--ease`.

## Estándares
- HTML semántico (`header/nav/main/section/article/aside/footer`), un solo H1 por página.
- Grid/Flex con `auto-fit/minmax(min(100%, X), 1fr)`; texto fluido con `clamp()`; en un `clamp()` que
  controle un ancho, el mínimo nunca en px sin `min(100%, …)`.
- **Imágenes: siempre con `{% include picture.html nombre="…" alt="…" ratio="4x3" sizes="…" %}`.** El
  include lee `_data/fotos.yml` (generado desde `/img/fotos`), arma `srcset` con WebP + JPG y solo pide
  anchos que existen. `eager=true` únicamente en la imagen del héroe. Nunca escribir `<img src="/img/…">`
  a mano para fotografía.
- **Pipeline de fotos:** los originales están en `/img/_extraidas` (extraídos de los PDF del cliente);
  el script de procesado (blanco y negro, contraste, anchos, JPG+WebP) vive en el scratchpad de la
  sesión y se documenta aquí. Al añadir fotos: procesar a `/img/fotos/<nombre>-<ancho>.jpg|webp`,
  regenerar `_data/fotos.yml` y apuntar `hero:`/`image:` de la página.
- JS mínimo (`js/main.js`): tracking de WhatsApp, cierre de nav, un FAQ abierto, enlaces externos. Nav y FAQ
  funcionan sin JS (checkbox / `<details>`). **Solo comentarios de bloque en JS dentro de HTML.**
- CTA WhatsApp: `{% include button.html texto="…" data_location="…" %}`; enlaces internos con
  `{{ '/ruta/' | relative_url }}`; nunca `wa.me` a mano.
- Front matter no procesa Liquid: rutas estáticas dentro de `faqs`, `excerpt`, etc.

## Layouts e includes
Ver `.claude/docs/frontmatter-variables.md` para lo que consume cada layout. `header.html` pinta la
cabecera según `page.layout` (`home` → `.hero`; resto → `.cabecera`). Los hubs (`layout: hub`) listan
colecciones por `orden` o por `grupos`.

## Build y validación (obligatorio)
```powershell
& C:\Ruby33-x64\bin\bundle.bat exec jekyll build
python _scripts/validar-site.py        # 0 hallazgos o es un bug
python _scripts/lint-frontmatter.py    # antes de compilar contenido nuevo
```
`jekyll build` nunca avisa de Liquid mal escrito. Verifica responsive a **390px** (no 480). Servidor local:
`… exec jekyll serve --port 4001`; captura con Chrome DevTools MCP y comprueba
`document.documentElement.scrollWidth === clientWidth`.

## Estructura visual de la home (referencia de diseño aprobada)

Héroe a sangre completa con foto y barra transparente → `.lamina` (panel crema con esquinas superiores
redondeadas que sube sobre el héroe) con intro + cifras → `.trio` de accesos con foto → rejilla de
servicios con `.tile--media` → `.split` dentro de `.section--bosque` (foto a sangre de un lado, texto del
otro) → proyectos → pasos → `.testimonio` centrado → audiencias → FAQ → `.tira` de galería a sangre →
CTA final. Las páginas interiores usan `.cabecera--media` (texto + foto 4:3).

## Caso documentado (2026-09-22)
`ol li { list-style: decimal }` del reset numeraba las migas de pan y los pasos en móvil; se corrigió con
`list-style: none` en `.breadcrumb li` y `.pasos li`. Lección: cualquier `<ol>` nuevo debe declarar su
propio `list-style`.

## Selector de perfiles (2026-10-16)

`_includes/equipo.html` y `.selector` en `_includes/css/componentes.css`: forma con comportamiento propio de selección nativa por radios, retrato protagonista y directorio. Datos exclusivamente de `site.equipo`. Un único include en Home, Nosotros y Equipo. Escritorio usa grid y `display: contents`; cada radio ocupa la misma fila de grid que su etiqueta con posición relativa. En móvil cada persona tiene una caja posicionada que contiene etiqueta, radio y perfil. Sin reglas generadas por cada persona ni dependencia de `:has`. `js/main.js` estabiliza las pulsaciones en ambos tamaños.

`picture.html` acepta `width` y `height` opcionales (sin cambiar sus valores por defecto): retratos 960×1280, miniaturas 48×64; `_data/fotos.yml` declara resoluciones reales (360/720/960 y 48/96). El retrato se muestra con máximo 480 CSS px y altura automática; miniaturas con ancho 48 px y altura automática. Las anclas existentes de los perfiles se conservan en sus etiquetas visibles.

Caso móvil: un radio oculto absoluto bajo `display: contents` puede recibir foco en el inicio del fieldset. Posicionarlo dentro de su fila evita ese salto. Además, cerrar un perfil anterior mueve las filas inferiores: el listener móvil conserva el rectángulo de la etiqueta y compensa solo esa diferencia, con foco `preventScroll`. Las pruebas de regresión deben medir la posición tras una pulsación real, sin llamar a `scrollIntoView` después del clic.

Caso escritorio (2026-10-16): limitar el listener a `max-width:600px` dejó activo el salto nativo en computador (741 px al elegir Valentina). El listener ahora previene la activación de la etiqueta y selecciona/focaliza sin scroll en todos los anchos. Escritorio conserva `scrollY`; móvil conserva la posición de la etiqueta usando `scrollBy` sobre la posición actual, porque el anclaje nativo puede haber compensado ya la contracción. No sumar la diferencia móvil al `scrollY` previo: puede aplicar dos veces la compensación. `_layouts/default.html` versiona la URL del JS con la fecha de compilación para invalidar caché.

Regresión: `revisar-salto-real.cjs` mantiene `scroll-behavior:smooth` real, registra cada fotograma tras pointerdown y cubre escritorio/móvil en las tres páginas. En escritorio comprobar desplazamiento del documento, en móvil desplazamiento de la etiqueta. Una captura o un único valor final no detecta saltos intermedios. La prueba anterior desactivaba el scroll suave y solo cubría móvil.
