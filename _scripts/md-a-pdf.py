# -*- coding: utf-8 -*-
"""Convierte un entregable Markdown de _plans/ en PDF con la identidad de PROINCIVIL.
Uso: python _scripts/md-a-pdf.py _plans/ARCHIVO.md [salida.pdf]"""
import os, sys, markdown, fitz

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = sys.argv[1] if len(sys.argv) > 1 else "_plans/PENDIENTES-Y-PREGUNTAS-PROINCIVIL.md"
dst = sys.argv[2] if len(sys.argv) > 2 else os.path.splitext(src)[0] + ".pdf"

texto = open(os.path.join(ROOT, src), encoding="utf-8").read()
cuerpo = markdown.markdown(texto, extensions=["tables", "sane_lists"])

CSS = """
body { font-family: sans-serif; font-size: 9.5pt; line-height: 1.5; color: #1E1F1C; }
h1 { font-size: 19pt; color: #1F2A20; margin-bottom: 2pt; line-height: 1.15; }
h2 { font-size: 13pt; color: #3B4A34; margin-top: 16pt; margin-bottom: 4pt; border-bottom: 1px solid #C9CFC2; padding-bottom: 3pt; }
h3 { font-size: 10.5pt; color: #3B4A34; margin-top: 11pt; margin-bottom: 3pt; }
p { margin: 0 0 6pt 0; }
ul, ol { margin: 0 0 7pt 0; padding-left: 14pt; }
li { margin-bottom: 2.5pt; }
table { width: 100%; border-collapse: collapse; margin: 5pt 0 9pt 0; font-size: 8.5pt; }
/* Tampoco `background` en th: mismo repintado en las tablas que cruzan el salto de página. */
th { color: #1F2A20; text-align: left; padding: 4pt 5pt; border: 1px solid #C9CFC2; border-bottom: 2pt solid #4A5D3F; }
td { padding: 4pt 5pt; border: 1px solid #D8DCD2; vertical-align: top; }
/* Sin `background` en blockquote: MuPDF repinta el fondo de un bloque que cruza el salto de
   página y deja barras grises sueltas al final del documento. El filete izquierdo basta. */
blockquote { margin: 8pt 0; padding: 1pt 0 1pt 10pt; border-left: 2.5pt solid #4A5D3F; }
blockquote p { margin: 0 0 6pt 0; }
code { font-family: monospace; font-size: 8.5pt; background: #F0EEE7; }
hr { border: 0; border-top: 1px solid #C9CFC2; margin: 12pt 0; }
a { color: #3B4A34; }
strong { color: #1F2A20; }
"""

story = fitz.Story(html=f"<html><body>{cuerpo}</body></html>", user_css=CSS)
ANCHO, ALTO = fitz.paper_size("a4")
MARGEN_X, MARGEN_SUP, MARGEN_INF = 52, 56, 56
marco = fitz.Rect(MARGEN_X, MARGEN_SUP, ANCHO - MARGEN_X, ALTO - MARGEN_INF)
medio = fitz.Rect(0, 0, ANCHO, ALTO)

# Story se dibuja con DocumentWriter; el pie se añade después reabriendo el PDF.
import io
buf = io.BytesIO()
escritor = fitz.DocumentWriter(buf)
mas = True
while mas:
    dispositivo = escritor.begin_page(medio)
    mas, _ = story.place(marco)
    story.draw(dispositivo)
    escritor.end_page()
escritor.close()

doc = fitz.open("pdf", buf.getvalue())
for i, p in enumerate(doc, start=1):
    p.draw_line(fitz.Point(MARGEN_X, ALTO - 38), fitz.Point(ANCHO - MARGEN_X, ALTO - 38), color=(0.79, 0.81, 0.76), width=0.6)
    p.insert_text(fitz.Point(MARGEN_X, ALTO - 26), "PROINCIVIL S.A.S. · Sitio web · 22 de septiembre de 2026",
                  fontsize=7.5, fontname="helv", color=(0.42, 0.44, 0.40))
    p.insert_text(fitz.Point(ANCHO - MARGEN_X - 14, ALTO - 26), str(i), fontsize=7.5, fontname="helv", color=(0.42, 0.44, 0.40))
pagina = doc.page_count

salida = os.path.join(ROOT, dst)
doc.set_metadata({"title": "PROINCIVIL — Sitio web: vista previa, pendientes y preguntas",
                  "author": "Julián Andrés Franco Bedoya", "subject": "Entregable de revisión del sitio web"})
doc.save(salida, garbage=4, deflate=True)
print(f"{dst} · {pagina} páginas · {os.path.getsize(salida)//1024} KB")
