# proincivil.com

Sitio corporativo de **PROINCIVIL S.A.S.** — firma de ingeniería estructural y consultoría técnica en
Envigado, Antioquia (Colombia). Jekyll estático sobre GitHub Pages, sin frameworks de CSS ni JS.

> **Estado: vista previa para aprobación del cliente.** Todas las páginas salen con `noindex` y
> `robots.txt` bloquea el rastreo (`vista_previa: true` en `_config.yml`). El contenido es un borrador
> hasta que PROINCIVIL lo apruebe por escrito.

## Qué está publicado

| Sección | URLs | Estado |
|---|---|---|
| Inicio | 1 | Publicada |
| Servicios (hub + 14 páginas) | 15 | Publicada |
| Proyectos (hub + 9 fichas) | 10 | Publicada |
| Corporativas (nosotros, equipo, independencia técnica, cómo cotizar, contacto, política de datos) | 6 | Publicada |
| Blog (hub + 3 artículos) | 4 | Publicada |
| Normativa (NSR-10 por títulos, Ley 400, Ley 1796, licencias) | 12 | **Retenida** (fase SEO) |
| Glosario estructural | 13 | **Retenida** (fase SEO) |
| Tipos de edificación | 8 | **Retenida** (fase SEO) |
| Zonas de cobertura | 7 | **Retenida** (fase SEO) |
| ¿Cuánto cuesta? | 5 | **Retenida** (fase SEO) |

Las secciones retenidas están escritas y versionadas, pero fuera del sitio: se controlan con
`secciones_publicadas` en `_config.yml`. Añadir el nombre de la sección a esa lista y recompilar la
devuelve al menú, al pie, a los CTA y al sitemap sin tocar nada más.

## Desarrollo

```bash
bundle install
bundle exec jekyll serve --port 4001       # http://127.0.0.1:4001/
bundle exec jekyll build
python _scripts/validar-site.py            # enlaces, Liquid, JSON-LD, H1 — debe dar 0
python _scripts/lint-frontmatter.py        # front matter de las colecciones — debe dar 0
```

En Windows el shim `bundle` de WindowsApps está roto: usar
`& C:\Ruby33-x64\bin\bundle.bat exec jekyll build`.

## Estructura

```
_layouts/     compress → default → home | page | hub | service | article | project | post
_includes/    head, nav, header, footer, picture, button, faqs, cta-final, tarjeta, schema-*
              critical-css/  CSS crítico inline (tokens, reset por capas, nav, hero)
              css/           módulos compilados en css/style.css
_data/        navegacion.yml · breadcrumb_names.yml · fotos.yml (anchos reales de cada foto)
_servicios/ _proyectos/ _posts/                 publicadas
_normativa/ _glosario/ _edificaciones/ _zonas/ _cuanto-cuesta/   retenidas
_scripts/     validar-site.py · lint-frontmatter.py
img/fotos/    fotografía del cliente procesada (B/N, varios anchos, JPG + WebP)
.claude/      manual del proyecto: CLAUDE.md, ESTADO-DEL-PROYECTO.md, skills y documentación
```

Antes de tocar nada, leer `.claude/CLAUDE.md` y `.claude/ESTADO-DEL-PROYECTO.md`.

## Paso a producción

1. `vista_previa: false` en `_config.yml` (quita noindex y publica el robots.txt real).
2. `url: "https://www.proincivil.com"` y `baseurl: ""`.
3. Restaurar el archivo `CNAME` con `www.proincivil.com` y apuntar el DNS.
4. Configurar `form_endpoint`, `ga4_id` y `google_site_verification`.
5. Recompilar y validar.

---

Desarrollo: [juli.com.co](https://juli.com.co)
