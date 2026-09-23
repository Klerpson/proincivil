"""Validación post-build sobre _site/ (bundle exec jekyll build NUNCA avisa de Liquid roto).
Uso: python _scripts/validar-site.py
Cualquier hallazgo es un bug."""
import json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT = os.path.join(BASE_DIR, "_site")

# En GitHub Pages el sitio vive bajo /<repo>/: los enlaces llevan ese prefijo pero en _site no existe.
BASEURL = ""
try:
    with open(os.path.join(BASE_DIR, "_config.yml"), encoding="utf-8") as _f:
        for _l in _f:
            if _l.startswith("baseurl:"):
                BASEURL = _l.split(":", 1)[1].strip().strip('"').strip("'").rstrip("/")
                break
except OSError:
    pass
problemas = []
urls_locales = set()
paginas = []
for dp, dn, fn in os.walk(ROOT):
    for f in fn:
        if f.endswith(".html"):
            p = os.path.join(dp, f)
            rel = "/" + os.path.relpath(p, ROOT).replace("\\", "/")
            rel = re.sub(r"index\.html$", "", rel)
            urls_locales.add(rel)
            paginas.append((rel, p))

def existe(href):
    href = href.split("#")[0].split("?")[0]
    if not href or href.startswith(("http", "mailto:", "tel:", "//", "data:")):
        return True
    if not href.startswith("/"):
        return True
    if BASEURL:
        if href == BASEURL:
            href = "/"
        elif href.startswith(BASEURL + "/"):
            href = href[len(BASEURL):]
        else:
            return False   # enlace absoluto que olvidó relative_url
    if href == "/":
        return os.path.exists(os.path.join(ROOT, "index.html"))
    candidato = os.path.join(ROOT, href.lstrip("/").replace("/", os.sep))
    if href.endswith("/"):
        return os.path.exists(os.path.join(candidato, "index.html"))
    return os.path.exists(candidato) or os.path.exists(candidato + ".html")

for rel, p in paginas:
    html = open(p, encoding="utf-8", errors="ignore").read()
    if 'href=""' in html:
        problemas.append(f"{rel}: href vacío")
    if re.search(r"\{\{|\}\}|\{%", html):
        problemas.append(f"{rel}: Liquid sin procesar")
    if "href=\"'" in html:
        problemas.append(f"{rel}: comilla rota en href")
    for m in re.finditer(r'src="(/img/[a-zA-Z0-9_-]+)"', html):
        problemas.append(f"{rel}: imagen sin extensión {m.group(1)}")
    for m in re.finditer(r'(?:href|src)="([^"]+)"', html):
        if not existe(m.group(1)):
            problemas.append(f"{rel}: enlace roto → {m.group(1)}")
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        try:
            json.loads(m.group(1))
        except json.JSONDecodeError as e:
            problemas.append(f"{rel}: JSON-LD inválido ({e.msg} en pos {e.pos}): {m.group(1)[max(0,e.pos-60):e.pos+40]!r}")
    h1s = re.findall(r"<h1[ >]", html)
    if len(h1s) != 1 and "/404" not in rel:
        problemas.append(f"{rel}: {len(h1s)} H1")
    if "<title>" not in html:
        problemas.append(f"{rel}: sin <title>")

problemas = sorted(set(problemas))
print(f"Páginas: {len(paginas)} · Problemas: {len(problemas)}")
for x in problemas[:200]:
    print(" -", x)
sys.exit(1 if problemas else 0)
