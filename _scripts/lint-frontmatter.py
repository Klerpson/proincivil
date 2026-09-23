"""Lint de front matter de las colecciones SIN compilar Jekyll (varios redactores en paralelo).
Uso: python _scripts/lint-frontmatter.py [ruta-o-carpeta ...]   (sin args: todas las colecciones)
Comprueba: YAML válido, claves obligatorias, longitud de title/description, slugs referenciados
existentes (contra la arquitectura esperada), hero existente, faqs bien formadas."""
import os, re, sys, glob
sys.stdout.reconfigure(encoding="utf-8")
try:
    import yaml
except ImportError:
    print("Falta PyYAML: pip install pyyaml"); sys.exit(2)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ESPERADOS = {
    "servicios": ["diseno-estructural","estructuras-metalicas","evaluacion-estructural","vulnerabilidad-sismica","evaluacion-post-sismo","reforzamiento-estructural","geotecnia-estudio-de-suelos","cimentaciones","muros-de-contencion-y-taludes","interventoria-de-disenos","revision-independiente-de-disenos","supervision-tecnica-independiente","curadurias-y-licencias","bim-y-topografia"],
    "cuanto-cuesta": ["diseno-estructural","estudio-de-suelos","evaluacion-estructural","interventoria"],
    "edificaciones": ["propiedad-horizontal","instituciones-educativas","hoteles","carports-y-cubiertas-fotovoltaicas","bodegas-y-naves-industriales","vivienda-1-y-2-pisos","sedes-comerciales-y-retail"],
    "zonas": ["envigado","medellin","area-metropolitana","oriente-antioqueno","antioquia","colombia"],
    "normativa": ["nsr-10","titulo-a","titulo-b","titulo-c","titulo-e","titulo-f","titulo-h","titulo-i","ley-400-de-1997","ley-1796-de-2016","licencia-de-construccion-colombia"],
    "proyectos": ["tacuara-club-residencial","ie-pavarando-grande-mutata","ie-puerto-perales","ie-yerbal-y-educacion-publica","hotel-aldea-puerto-triunfo","hotel-the-one-laureles","carports-fotovoltaicos","super-motos-honda","infraestructura-deportiva-betulia"],
}
OBLIG = {
    "servicios": ["titulo_corto","orden","title","description","h1","excerpt","hero","hero_alt","resumen","cuando","entregables","faqs","datePublished","dateModified"],
    "cuanto-cuesta": ["titulo_corto","orden","title","description","h1","excerpt","hero","hero_alt","resumen","factores","faqs","datePublished","dateModified"],
    "edificaciones": ["titulo_corto","orden","title","description","h1","excerpt","hero","hero_alt","resumen","cuando","faqs","datePublished","dateModified"],
    "zonas": ["titulo_corto","orden","title","description","h1","excerpt","hero","hero_alt","resumen","faqs","datePublished","dateModified"],
    "normativa": ["titulo_corto","orden","title","description","h1","excerpt","resumen","indice","servicios","faqs","datePublished","dateModified"],
    "glosario": ["titulo_corto","title","description","h1","excerpt","resumen","servicios","datePublished","dateModified"],
    "proyectos": ["titulo_corto","orden","eyebrow","title","description","h1","excerpt","hero","hero_alt","ficha","servicios","datePublished","dateModified"],
    "posts": ["title","description","h1","excerpt","categories","servicios","datePublished","dateModified"],
}

def front(path):
    txt = open(path, encoding="utf-8").read()
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", txt, re.S)
    if not m:
        return None, None, "sin front matter"
    try:
        return yaml.safe_load(m.group(1)) or {}, m.group(2), None
    except yaml.YAMLError as e:
        return None, None, f"YAML inválido: {str(e).splitlines()[0]}"

def coleccion_de(path):
    rel = os.path.relpath(path, ROOT).replace("\\", "/")
    top = rel.split("/")[0]
    return top[1:] if top.startswith("_") else None

archivos = []
args = sys.argv[1:] or [os.path.join(ROOT, "_" + c) for c in list(ESPERADOS) + ["glosario", "posts"]]
for a in args:
    if os.path.isdir(a):
        archivos += glob.glob(os.path.join(a, "**", "*.md"), recursive=True)
    elif os.path.isfile(a):
        archivos.append(a)

errores = 0
for p in sorted(archivos):
    col = coleccion_de(p)
    fm, body, err = front(p)
    rel = os.path.relpath(p, ROOT)
    def e(msg):
        global errores; errores += 1; print(f"  ✗ {rel}: {msg}")
    if err:
        e(err); continue
    for k in OBLIG.get(col, []):
        if k not in fm or fm[k] in (None, "", []):
            e(f"falta `{k}`")
    t = str(fm.get("title", ""))
    if len(t) > 72: e(f"title de {len(t)} caracteres (máx. 72)")
    d = str(fm.get("description", ""))
    if d and not 120 <= len(d) <= 170: e(f"description de {len(d)} caracteres (ideal 150-160)")
    # `hero` es el nombre base de una foto de /img/fotos (ver _data/fotos.yml), no una ruta.
    if fm.get("hero"):
        h = str(fm["hero"])
        if h.startswith("/") or h.endswith((".svg", ".jpg", ".png", ".webp")):
            e(f"hero debe ser el nombre base de la foto, no una ruta: {h}")
        elif not glob.glob(os.path.join(ROOT, "img", "fotos", h + "-*.jpg")):
            e(f"hero no existe en /img/fotos: {h}")
    if fm.get("image") and not os.path.exists(os.path.join(ROOT, str(fm["image"]).lstrip("/"))):
        e(f"image no existe: {fm['image']}")
    rel_col = "servicios" if col in ("edificaciones", "zonas", "cuanto-cuesta") else col
    for k, colref in (("proyectos","proyectos"),("relacionados", rel_col),("normativa","normativa"),("servicios","servicios")):
        if k == "relacionados" and col == "glosario": colref = None
        for s in fm.get(k, []) or []:
            if colref and colref in ESPERADOS and s not in ESPERADOS[colref]:
                e(f"`{k}` referencia slug desconocido: {s}")
    if fm.get("cuanto_cuesta") and fm["cuanto_cuesta"].rstrip("/").split("/")[-1] not in ESPERADOS["cuanto-cuesta"]:
        e(f"cuanto_cuesta apunta a slug desconocido: {fm['cuanto_cuesta']}")
    for i, f in enumerate(fm.get("faqs", []) or []):
        if not isinstance(f, dict) or "question" not in f or "answer" not in f:
            e(f"faq #{i+1} sin question/answer")
    if body is not None:
        if "{{" in body or "{%" in body and col != "posts":
            pass
        palabras = len(re.findall(r"\w+", body))
        minimo = 250 if col == "proyectos" else 350
        if col in ("servicios","edificaciones","zonas","cuanto-cuesta","normativa","proyectos","posts") and palabras < minimo:
            e(f"cuerpo corto ({palabras} palabras)")
    if fm.get("resumen") and not 30 <= len(str(fm["resumen"]).split()) <= 80:
        e(f"resumen de {len(str(fm['resumen']).split())} palabras (ideal 40-60)")
    if re.search(r"(?i)\b(construimos|ejecutamos obras?)\b(?!\s*(de construcción)?[^.]*\bno\b)", body or "") and not re.search(r"(?i)no (ejecutamos|construimos)", body or ""):
        e("cuerpo dice que construyen: revisar mensaje 'no ejecutamos obra'")

print(f"Archivos revisados: {len(archivos)} · Errores: {errores}")
sys.exit(1 if errores else 0)
