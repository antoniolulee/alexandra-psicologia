---
author: Alexandra Barroso
branch: main
status: completed
---
# FTD — Hiperespecialización en Salud de la Mujer, Psicología Perinatal y Reproducción Asistida (Bloques 1 y 2)

## Intent
Documentar la investigación de mercado, análisis competitivo y mapa SEO ampliado de 25 temáticas en `02-DOCS/wiki/seo/`, y ejecutar los Bloques 1 y 2 de optimización técnica y de conversión (CRO) sobre la Home, la página Sobre Mí, las landings de especialidad y el blog para alinear todo el sitio con la hiperespecialización clínica (PIR + EMDR) en salud de la mujer y perinatal.

## Scope
- **Incluido:**
  - Documentación estratégica en `02-DOCS/wiki/seo/estrategia-hiperespecializacion-salud-mujer-perinatal.md` y registro en `02-DOCS/wiki/index.md` y `02-DOCS/wiki/harness/decisions.md`.
  - Alineación de Home (`_data/site.yml`, `_includes/for-whom.html`) y Sobre Mí (`_data/sobre_mi.yml`) hacia salud perinatal, fertilidad, duelo y trauma EMDR con tarjetas clicables y testimonios representativos.
  - Reingeniería de `_layouts/especialidad.html` y `_data/especialidades/*.yml` (las 6 landings activas: `psicologia-perinatal`, `duelo-gestacional`, `infertilidad`, `terapia-emdr`, `trauma-apego`, `duelo`) con `<h1>` híbrido SEO+empático, bloque de autoridad clínica PIR, 3 pasos de primer contacto y retorno Hub → Spoke de artículos relacionados.
  - Evolución de `_layouts/post.html` (Schema JSON-LD `BlogPosting`, bio PIR, CTA contextual con enlace al pilar y fallback de 3 posts relacionados) y `blog/index.html` (SEO del índice y filtros Alpine.js por categoría).
- **Excluido:**
  - Bloque 3 (redacción de nuevos artículos de blog) y Bloque 4 (test interactivo nocturno).
  - Eliminación de las 6 landings históricas ocultas por política Vía 1.

## Checklist
- [x] Crear `02-DOCS/wiki/seo/estrategia-hiperespecializacion-salud-mujer-perinatal.md` y actualizar `02-DOCS/wiki/index.md` y `02-DOCS/wiki/harness/decisions.md` · Documentación ratificada y enlazada
- [x] Optimizar Home (`_data/site.yml`, `_includes/hero.html`, `_includes/for-whom.html`) y Sobre Mí (`_data/sobre_mi.yml`) · Hero simplificado original restaurado manteniendo la credencial `Especialista en Psicología Clínica vía PIR (Colegiada CV-13539)`, 4 tarjetas clicables y testimonios alineados
- [x] Optimizar `_layouts/especialidad.html` y las 6 landings activas en `_data/especialidades/*.yml` · `<h1>` híbridos, barra y caja PIR, pasos WhatsApp y retorno Hub → Spoke verificados
- [x] Añadir JSON-LD `BlogPosting`, CTA contextual y mejoras de `blog/index.html` y `_layouts/post.html` · 6 `BlogPosting`/`MedicalWebPage` validados y filtros Alpine.js operativos
- [x] Ejecutar verificación completa (`npm run build:css`, `bundle exec jekyll build`, validación `JSON.parse()` en `_site/` y revisión Zero CLS `width`/`height`) · Todos aprobados con código 0

## Evidence
- `npm run build:css`: compilado y minificado `assets/css/tailwind.css` en `320ms` con código `0`.
- `bundle exec jekyll build`: generado `_site` en `0.192s` con código `0` sin errores ni advertencias.
- Validación `node -e` sobre `_site/`: `25` archivos HTML escaneados, `60` bloques `<script type="application/ld+json">` válidos (`0` errores de parseo JSON, incluidos `6` esquemas `["BlogPosting", "MedicalWebPage"]`), `0` imágenes sin atributos `width` y `height` (Zero CLS), `0` rutas Vía 1 eliminadas y las `6` landings activas (`psicologia-perinatal`, `duelo-gestacional`, `infertilidad`, `terapia-emdr`, `trauma-apego`, `duelo`) verificadas con `<h1>` híbrido, barra y caja PIR, pasos de primer contacto y lecturas recomendadas.

## Next
- Ejecutar Bloque 3 (redacción del Artículo 3 sobre pensamientos intrusivos posparto o artículo pilar de reproducción asistida / FIV y betaespera) o Bloque 4 (autoevaluación interactiva en Alpine.js).