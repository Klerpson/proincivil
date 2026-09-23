---
name: estado-proyecto
description: Mantiene el contexto persistente del proyecto PROINCIVIL entre sesiones vía .claude/ESTADO-DEL-PROYECTO.md. Se activa al EMPEZAR (leer el estado primero) y al TERMINAR una sesión con cambios, o con "actualiza el estado", "bitácora", "qué se ha avanzado".
---

# Estado del proyecto — PROINCIVIL

## Al empezar
Leer completo `.claude/ESTADO-DEL-PROYECTO.md`. Si el trabajo toca una iniciativa con carpeta propia en
`_plans/`, leer también esa carpeta. Los pendientes del cliente viven en `_plans/pendientes/*.md`.

## Al terminar una sesión con cambios
1. Actualizar "Última actualización" (fecha absoluta `YYYY-MM-DD`).
2. Añadir entrada de bitácora arriba del todo:
   ```
   ### YYYY-MM-DD — Título corto
   **Contexto:** por qué se hizo.
   - Qué cambió, con rutas exactas. Detalle largo → carpeta en _plans/ y puntero aquí.
   - Qué quedó sin terminar o sin commitear.
   ```
3. Actualizar la tabla de iniciativas y reconciliar "Problemas abiertos" (✅ RESUELTO fecha / nuevo con
   severidad 🔴🟠🟡) y "Pendientes del cliente" (tachar lo que el cliente ya confirmó y actualizar
   `_config.yml` en el mismo cambio).
4. Backlog: lo pendiente no urgente.

## Reglas
- Índice + bitácora, no vertedero. Las reglas permanentes van en `CLAUDE.md`; las lecciones de bugs, en la
  skill correspondiente como "Caso documentado".
- Fechas absolutas siempre. No confiar en `git log`.
- Cuando el cliente confirme un dato `PENDIENTE`, actualizar `_config.yml` o el archivo de contenido y
  borrar la marca en el mismo cambio.
