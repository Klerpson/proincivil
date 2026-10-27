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
1. Abre `_includes/critical-css/base.css` y `_includes/css/primitivas.css`. Si la forma existe, úsala:
   `.marco`, `.flujo`, `.rotulo`, `.acciones`, `.seccion` (`--compacta`, `--papel`, `--plano`, `--oscura`),
   `.encabezado`, `.rejilla` (`--3`, `--4`), `.dos-columnas` (`--centro`, `--aparte`), `.pieza` (`--enlace`,
   `--oscura`), `.lista` (`--flecha`, `--no`), `.cifras`/`.cifra`, `.pasos` (`--texto`),
   `.resumen`, `.nota` (`--sello`), `.datos`, `.texto-largo`, `.tabla`, `.articulo`, `.figura`, `.lamina`,
   `.cita`. Componentes: `.barra`, `.menu`, `.boton` (`--contorno`), `.enlace-flecha`, `.portada`,
   `.cabecera`, `.migas`, `.sellos`, `.cajetin`, `.preguntas`, `.cierre`, `.formulario`, `.flotante`,
   `.razones`, `.equipo`/`.persona`, `.tira`, `.pie`, `.progreso`, `.plano` (ejes). Escenas: ver
   «Escenas reutilizables». No escribas CSS nuevo.
2. Misma forma con otra piel → modificador `--variante` en la primitiva.
3. Componente irreducible con comportamiento propio → clase nueva en `_includes/css/componentes.css`
   (o `secciones.css` si es de la home), documentada en este archivo.
4. Una clase describe una FORMA, nunca un TEMA (`.pieza`, no `.tarjeta-servicio`).
5. Todo el CSS va en capas (`reset, primitivas, componentes, utilidades`). Si algo no se aplica, revisa
   la capa antes que la especificidad y mide con `getComputedStyle` sobre el build.

## Arquitectura CSS real (Plano vivo, 2026-10-21)
```
_includes/critical-css/base.css   tokens, reset, primitivas de base, barra, menú, botones — inline
_includes/critical-css/hero.css   portada (firma: ejes del plano), cabecera, migas, sellos — inline
_includes/critical-css/critical.html   arma el <style> + preload de /css/style.css
_includes/css/primitivas.css      formas reutilizables
_includes/css/componentes.css     cajetín, preguntas, cierre, formulario, flotante
_includes/css/secciones.css       razones, equipo, tira (piezas propias de la home)
_includes/css/escenas.css         escenas reutilizables (_includes/escenas/*.html)
_includes/css/footer.css          pie
_includes/css/motion.css          todo el movimiento (animation-timeline dentro de @supports y
                                  prefers-reduced-motion); la firma de la portada vive en hero.css
css/style.css                     compilador ({% include %} de los módulos), layout: compress
```
No hay carga condicional por layout. No usar `@import`. `{% render %}` no existe en Jekyll: `{% include %}`.

## Tokens (usar estos, no inventar)
`--azul --azul-2 --marfil --papel --tinta --tinta-suave --trazo --ambar --linea --linea-fuerte
--linea-clara --cuadricula-oscura --cuadricula-clara --cuadricula-medida --fuente --fuente-mono --margen
--barra-alto --menu-alto --curva`. El ámbar solo en conversión (botón sólido y flotante).

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
- JS mínimo (`js/main.js`): evento GA4 de WhatsApp, botón del menú móvil, menú que se oculta al bajar,
  flotante oculto sobre la portada, enlaces externos. `js/motion.js`: contador `m-count`. FAQ exclusivo con
  `<details name>` nativo; sin JS el menú queda como fila desplazable. **Solo comentarios de bloque en JS dentro de HTML.**
- CTA WhatsApp: `{% include button.html texto="…" data_location="…" %}`; enlaces internos con
  `{{ '/ruta/' | relative_url }}`; nunca `wa.me` a mano.
- Front matter no procesa Liquid: rutas estáticas dentro de `faqs`, `excerpt`, etc.

## Escenas reutilizables (`_includes/escenas/`, 2026-10-21)

Cada escena de la home es un include con parámetros y datos de `_config.yml`, `_data` o el front matter.
Nunca se copia su markup a mano. CSS en `escenas.css`, movimiento en `motion.css`, JS en `js/motion.js`.

| Include | Qué hace | Parámetros | Dónde se usa |
|---|---|---|---|
| `paneles.html` | paneles a pantalla completa que se apilan | `items` (def. `site.data.familias`), `largo` (h2 + `titulo_largo`) | home (h3), hub `/servicios/` (`paneles: true`) |
| `galeria.html` | cinta horizontal fija de proyectos | `slugs`, `excluir`, `rotulo`, `titulo`, `id` | home, hub `/proyectos/` (`galeria:`), ficha (otros proyectos) |
| `casos.html` | casos con foto fija que cambia con el caso activo | `slugs`, `rotulo`, `titulo`, `id`, `clase`, `enlace` | home, hub `/proyectos/` (`casos:`), servicios con 2+ `proyectos` |
| `zoom.html` | palabra con foto dentro que se atraviesa hasta un CTA a pantalla completa | `palabra`, `textura` (acero/concreto/plano/ladera), `foto`, `alt`, `rotulo`, `titulo`, `texto`, `boton`, `data_location`; `{clave}` → `site.cifras.clave` | home, servicios con `zoom:`, independencia técnica |
| `marquesina.html` | marquesina gigante decorativa | `cual` (clave de `_data/marquesinas.yml`) | home, `/servicios/`, `/proyectos/`, nosotros |
| `foco.html` | lista de frases que se iluminan al cruzar el centro | `items`, `rotulo`, `titulo`, `id`, `clase` | «cuándo» de cada servicio |
| `enlace-mayor.html` | banda con contador, texto grande y flecha en círculo | `url`, `texto`, `numero`, `variante` (`claro`), `banda` | home, servicios, fichas, nosotros, posts |
| `mapa.html` | plano de levantamiento con retícula y puntos reales (`_data/ciudades.yml`); lista grande sincronizada con el plano (JS en `motion.js`) | `modo` (`completo`/`mini`), `activa`, `rotulo`, `titulo`, `texto` | hub `/zonas/` (`mapa:`), ficha de cada zona (mini con cruz de replanteo) |
| `ficha-zona.html` | ubicador mini + cajetín de datos con fuente (`.datos--cajetin`) | `ficha{rotulo, titulo, items[{etiqueta, valor, nota, fuente, url}]}`, `activa` | layout `zona` |
| `protocolo.html` | pasos sobre una línea que se traza con el scroll; nodos que se encienden | `protocolo{rotulo, titulo, texto, pasos[{titulo, texto, ensayos[{nombre, que}]}]}` | layout `zona` |
| `decision.html` | árbol: origen que se abre en ramas A/B/C con quién ejecuta la obra | `decision{rotulo, titulo, origen, ramas[{resultado, sigue}], ejecuta, nota}`, `clase` | layout `zona` |
| `corte.html` | corte geológico (punteado = depósito, rayado = roca) con sondeo que perfora | `suelo{rotulo, titulo, parrafos[], estratos[{nombre, espesor}], sondeo, fuente, url, enlace}` | layout `zona` |

CTA dentro de escenas (2026-10-27): `protocolo` (por paso), `decision`, `corte`, `foco`, `ficha-zona` y `mapa` aceptan `boton{texto, mensaje, variante}` y pintan `button.html` con data-location propio; `faqs.html` cierra siempre con un botón contorno. El CTA de la barra es sólido verde.

Layout `zona` (`_layouts/zona.html`, 2026-10-27): página de ciudad armada solo con escenas desde el front matter (ejemplo completo: `_zonas/pereira.md`). Nunca prosa larga de artículo en una zona: cada dato va en su escena. Lección: un contenedor con `overflow: hidden` se vuelve contenedor de scroll y `animation-timeline: view()` se mide contra él (la animación queda a medias); usar `overflow: clip`. Y con `writing-mode: vertical-*` las propiedades lógicas del propio elemento giran: usar físicas.

Además: `plano-ejes.html` (ejes del plano en `.portada` y `.cabecera`, parámetros `v` y `h`), `.progreso`
(barra de lectura en `post` y `article`, solo CSS) e `.inclinable` (inclinación 3D según el cursor,
reutiliza el JS de los retratos).

Datos de los casos: el bloque `caso:` del proyecto (`lugar`, `foto`, `foto_nota`, `titulo`, `resultado`,
`datos[]`, `situacion`, `hicimos`, `logro`); si falta, la `ficha`. Los valores `PENDIENTE` no se muestran.

Reglas: máximo una escena fija o de pantalla completa por cada tres secciones; un `data_location` único
por zoom (`zoom-<slug>`); el texto de cada escena vive en el HTML (la palabra del zoom y la marquesina son
`aria-hidden` y repiten lo que ya dice la página). Sin soporte de `animation-timeline` (Firefox) o con
movimiento reducido, todo queda estático y legible.

## Layouts e includes
Ver `.claude/docs/frontmatter-variables.md` para lo que consume cada layout. `header.html` pinta la
cabecera según `page.layout` (`home` → `.portada`; resto → `.cabecera`). Los hubs (`layout: hub`) listan
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

## Estructura visual de la home (Plano vivo)

`.portada` azul con cuadrícula y ejes A–C/1–2 (texto arriba, foto real debajo con cota de normas) →
cifras en `.seccion--plano` → marquesina → paneles (6 familias) + enlace mayor → `.razones` →
independencia en `.seccion--oscura` con `.lamina` → casos → galería → resultados → `.equipo` → `.pasos` →
con quién sí/no → `.datos` de normas → `.cita` → zoom → FAQ → `.tira` → `.cierre`. Las páginas interiores
usan `.cabecera` con ejes del plano (`--media` si hay `hero`).

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
