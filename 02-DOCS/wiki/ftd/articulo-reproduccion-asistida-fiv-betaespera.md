---
author: Alexandra Barroso
branch: main
status: completed
---
# FTD — Bloque 3: Artículo de Impacto Psicológico en Reproducción Asistida, FIV y Betaespera

## Intent
Redactar, optimizar para GEO/AEO, auditar deontológicamente y publicar el artículo sobre el impacto psicológico en reproducción asistida, FIV, betaespera y duelo genético (`/blog/impacto-psicologico-reproduccion-asistida-fiv/`), actualizar `articulos_relacionados` en `_data/especialidades/infertilidad.yml` y sincronizar la arquitectura de enlazado en `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md`.

## Scope
- **Incluido:**
  - Creación de `_posts/2026-11-13-impacto-psicologico-reproduccion-asistida-fiv.md` con `author: "Alexandra Barroso"`, permalink `/blog/impacto-psicologico-reproduccion-asistida-fiv/`, estructura BLUF (45-65 palabras por cada `##` y `###`), tabla comparativa de fases de reproducción asistida, 4 FAQs con Schema `FAQPage`, referencias científicas oficiales (SEF, ESHRE, PubMed/NIH, APA) y disclaimer sanitario (`024`, `717 003 717`, `112`).
  - Actualización de `articulos_relacionados` en `_data/especialidades/infertilidad.yml` para destacar el nuevo artículo en `/infertilidad/`.
  - Actualización de `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y registro en `02-DOCS/wiki/index.md`.
  - Verificación técnica completa: `npm run build:css`, `bundle exec jekyll build`, validación de JSON-LD con `JSON.parse()`, auditoría de BLUF y Zero CLS (`width` y `height` en imágenes) sobre `_site/`.
- **Excluido:**
  - Redacción de otros artículos del Bloque 3 o implementación del Bloque 4 (test interactivo).
  - Modificación de plantillas `_layouts/` o eliminación de rutas históricas Vía 1.

## Checklist
- [x] Crear documento FTD en `02-DOCS/wiki/ftd/articulo-reproduccion-asistida-fiv-betaespera.md` · Creado antes de editar y cerrado con evidencias
- [x] Redactar, optimizar para GEO/AEO y auditar deontológicamente `_posts/2026-11-13-impacto-psicologico-reproduccion-asistida-fiv.md` · Publicado con veredicto APROBADO (`11/11` BLUF entre `45` y `58` palabras, tabla de 5 fases, 4 FAQs, 5 referencias y disclaimer `024`/`717 003 717`/`112`)
- [x] Actualizar `articulos_relacionados` en `_data/especialidades/infertilidad.yml` · Enlace `/blog/impacto-psicologico-reproduccion-asistida-fiv/` añadido en primera posición
- [x] Actualizar `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md` · Tablas de soporte, estado de enlazado y mapa FTD actualizados
- [x] Ejecutar `npm run build:css` y `bundle exec jekyll build` con código de salida 0 · CSS en `332ms` y Jekyll en `0.23s`
- [x] Validar en `_site/` sintaxis JSON-LD (`BreadcrumbList`, `FAQPage`, `BlogPosting`/`MedicalWebPage`) con `JSON.parse()`, CTA contextual a `/infertilidad/`, BLUF (45-65 palabras) y Zero CLS (`width`/`height`) · `64` bloques JSON-LD válidos (`0` errores) en `26` HTML y `0` imágenes sin dimensiones

## Evidence
- `_posts/2026-11-13-impacto-psicologico-reproduccion-asistida-fiv.md`: creado con `author: "Alexandra Barroso"`, `permalink: /blog/impacto-psicologico-reproduccion-asistida-fiv/`, `categories: [Salud Perinatal]` y `tags: [infertilidad, reproduccion-asistida, fiv, betaespera, duelo-genetico, psicologia-perinatal, terapia-emdr]` (activando el CTA contextual a `/infertilidad/`). Incluye tabla comparativa de 5 etapas, pautas para la betaespera, bloque sobre duelo invisible y duelo genético en ovodonación, 4 FAQs, 5 referencias científicas (SEF, Gameiro et al. 2015 / ESHRE en PubMed `26345684`, Boivin et al. 2011 en PubMed `21345903`, Rooney & Domar 2018 en PubMed `29946210`, APA) y disclaimer sanitario (`024`, `717 003 717`, `112`).
- `_data/especialidades/infertilidad.yml`: actualizado `articulos_relacionados` con las 3 guías clínicas del clúster, encabezadas por `/blog/impacto-psicologico-reproduccion-asistida-fiv/`.
- `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md`: actualizados con el nuevo artículo publicado y su documento FTD.
- `npm run build:css`: compilado `assets/css/tailwind.css` en `332ms` con código `0`.
- `bundle exec jekyll build`: generado `_site` en `0.23s` con código `0`.
- Auditoría automatizada `node -e` tras el último build: `26` archivos HTML escaneados en `_site/`, `64` bloques `<script type="application/ld+json">` parseados con `JSON.parse()` sin errores (en el nuevo post: `Psychologist`, `BreadcrumbList`, `FAQPage` con `4` preguntas y `BlogPosting+MedicalWebPage`), `0` imágenes sin atributos `width` y `height` (Zero CLS), `11/11` párrafos BLUF en el rango exacto `45-65` palabras (`45` a `58` palabras), enlace pilar `/infertilidad/` en el primer tercio, CTA contextual a `/infertilidad/` en `_site/blog/impacto-psicologico-reproduccion-asistida-fiv/index.html`, enlace al artículo en `_site/infertilidad/index.html` y `_site/blog/index.html`, `0` enlaces a landings ocultas Vía 1 y teléfonos `024`, `717 003 717` y `112` verificados.

## Next
- Continuar el Bloque 3 con el artículo de trauma obstétrico y parto traumático con EMDR (`/blog/parto-traumatico-tept-posparto-terapia-emdr/`) o ejecutar el Bloque 4 (autoevaluación interactiva en Alpine.js).
