---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Imágenes temáticas libres de copyright para los artículos del blog

## Intent
Sustituir la fotografía de la psicóloga (`/assets/images/alexandra-about.webp`) que aparece actualmente como imagen destacada en los 7 artículos del blog por fotografías temáticas de alta calidad, libres de derechos de autor (Unsplash Free License), optimizadas en `.webp` (`1200x675`, ratio 16:9) y alineadas con cada tema clínico y la estética de la web.

## Scope
- **Incluido:**
  - Búsqueda y descarga de 7 fotografías libres de copyright (Unsplash License, excluyendo `plus.unsplash.com`) adaptadas a cada artículo en `assets/images/blog/*.webp`.
  - Redimensionado y optimización a `1200x675` WebP (`-quality 82`) con verificación visual de cada imagen.
  - Actualización del campo `image:` en el frontmatter de los 7 archivos de `_posts/`.
  - Actualización de `og_image` en `_includes/head.html` para priorizar `page.image` en los artículos del blog.
  - Compilación de CSS/Jekyll y validación técnica sobre `_site/`.
- **Excluido:**
  - Cambio de fotografías de la psicóloga en Home, `/sobre-mi/` o landings de especialidades.
  - Redacción o edición de contenido textual de los artículos.

## Checklist
- [x] Crear FTD `02-DOCS/wiki/ftd/imagenes-tematicas-articulos-blog.md` y enlazarlo en `02-DOCS/wiki/index.md` · Documento creado y enlazado en la tabla FTD
- [x] Buscar, descargar, convertir a `1200x675` WebP y verificar visualmente las 7 imágenes temáticas en `assets/images/blog/` · 7 archivos `.webp` (`1200x675`) verificados visualmente sin marcas de agua ni recortes defectuosos
- [x] Actualizar el campo `image:` de los 7 posts en `_posts/` y `og_image` en `_includes/head.html` · Los 7 frontmatters apuntan a `/assets/images/blog/*.webp` y `head.html` usa `page.image` como respaldo de `og_image`
- [x] Ejecutar `npm run build:css`, `bundle exec jekyll build`, `npx --offline @ericrisco/rsc risk` y auditoría técnica sobre `_site/` · CSS compilado en `328ms`, Jekyll en `0.119s` (`0` errores), `64` JSON-LD válidos, `0` imágenes sin `width`/`height` y `0` referencias a `alexandra-about.webp` en tarjetas/artículos

## Evidence
- **Imágenes generadas y verificadas (`identify assets/images/blog/*.webp`):**
  - `assets/images/blog/hablar-adolescente-salud-mental.webp` — `1200x675` (`54948B`, Unsplash `photo-1617638436040-76505e75940f`)
  - `assets/images/blog/apego-ansioso-relaciones.webp` — `1200x675` (`32660B`, Unsplash `photo-1513267000941-598abe7be16f`)
  - `assets/images/blog/ansiedad-vs-estres.webp` — `1200x675` (`69968B`, Unsplash `photo-1783930523805-45a34f8706ef`)
  - `assets/images/blog/baby-blues-depresion-posparto.webp` — `1200x675` (`32432B`, Unsplash `photo-1765010608917-23001bd2415c`)
  - `assets/images/blog/duelo-perinatal-gestacional.webp` — `1200x675` (`15010B`, Unsplash `photo-1533621574977-02a1c943e6b9`)
  - `assets/images/blog/reproduccion-asistida-fiv.webp` — `1200x675` (`61948B`, Unsplash `photo-1542338347-4fff3276af78`)
  - `assets/images/blog/pensamientos-intrusivos-posparto.webp` — `1200x675` (`22450B`, Unsplash `photo-1504439158909-5a2f08876082`)
- **Build y Risk:**
  - `npm run build:css`: compilado en `328ms` (código `0`).
  - `bundle exec jekyll build`: compilado en `0.119s` (código `0`).
  - `npx --offline @ericrisco/rsc risk`: `tier 1` (`classes: default, docs`, `reviewers: 1`, `human approval: not required`).
  - Revisión de contexto limpio (Tier 1, subagente `research`): veredicto `APPROVE` (`0 blockers, 0 should-fix, 0 nits`); verificada la cadena `og_image` en `_includes/head.html`, Zero-CLS (`width`/`height`), `64` JSON-LD válidos y `7/7` `.webp` en `1200x675`.
- **Auditoría sobre `_site/` (`26` archivos HTML):**
  - `7/7` `.webp` presentes en `_site/assets/images/blog/` con dimensiones `1200x675`.
  - `64` bloques `<script type="application/ld+json">` parseados con `0` errores; todos los `BlogPosting.image` y `<meta property="og:image">` de los 7 artículos apuntan a `https://alexandrabarroso.com/assets/images/blog/<slug>.webp`.
  - `0` imágenes sin `width`/`height` (`missingDims: []`), `0` rutas locales rotas (`brokenLocalImgs: []`) y `0` apariciones de `alexandra-about.webp` en las tarjetas del blog (`_site/index.html`, `_site/blog/index.html`) ni en las páginas de artículos.

## Next
- Revisar visualmente los artículos en el navegador local o hacer commit de los cambios junto con el resto del trabajo pendiente en `main`.
