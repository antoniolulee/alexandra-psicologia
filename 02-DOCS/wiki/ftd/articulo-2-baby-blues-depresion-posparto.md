---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Artículo 2 del Clúster Perinatal: Baby Blues vs. Depresión Posparto

## Intent
Redactar, optimizar para GEO/AEO, auditar deontológicamente y publicar en `_posts/` el Artículo 2 del clúster de Salud Perinatal (*Baby blues vs. depresión posparto: diferencias clave, duración y cuándo pedir ayuda profesional*), alineado con la guía maestra E-E-A-T, el benchmark perinatal y la arquitectura de 2 Super-Verticales (Opción A + Vía 1).

## Scope
- **Incluido:**
  - Creación de `_posts/2026-11-13-baby-blues-vs-depresion-posparto-diferencias.md` con permalink `/blog/baby-blues-vs-depresion-posparto-diferencias/`.
  - Párrafos BLUF (45-65 palabras tras cada `##` y `###`), tabla comparativa (*Baby Blues vs. Depresión Posparto vs. Psicosis Puerperal*), explicación de la Escala de Edimburgo (EPDS), 4 FAQs conversacionales en cuerpo y frontmatter `faq:`, referencias científicas oficiales y disclaimer sanitario (`024`, `717 003 717`, `112`).
  - Enlazado interno conforme a Topic Clusters y Vía 1: enlace pilar en el primer tercio a `/psicologia-perinatal/`, enlaces secundarios a `/trauma-apego/`, `/blog/duelo-perinatal-gestacional-fases-apoyo/` y `/terapia-emdr/`, sin enlazar a las 6 páginas ocultas por Vía 1.
  - Actualización de `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md`.
  - Validación técnica con `npm run build:css`, `bundle exec jekyll build`, `JSON.parse()` de todos los JSON-LD en `_site/blog/baby-blues-vs-depresion-posparto-diferencias/index.html`, auditoría automatizada de BLUF, enlaces y teléfonos, y `npx @ericrisco/rsc risk`.
- **Excluido:**
  - Redacción de los artículos 3 al 10 del vertical perinatal.
  - Modificación de plantillas `_layouts/` o páginas pilar consolidadas.

## Checklist
- [x] Crear documento FTD en `02-DOCS/wiki/ftd/articulo-2-baby-blues-depresion-posparto.md` · Documento creado antes de iniciar cambios y cerrado con evidencias
- [x] Redactar y publicar `_posts/2026-11-13-baby-blues-vs-depresion-posparto-diferencias.md` siguiendo `redactor-clinico`, `optimizador-geo` y `auditor-deontologico` · Publicado con veredicto APROBADO
- [x] Actualizar `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md` · Tablas sincronizadas
- [x] Ejecutar `npm run build:css` y `bundle exec jekyll build` con código de salida 0 · CSS en `336ms` y Jekyll en `0.277s`
- [x] Validar con `node -e` y `JSON.parse()` todos los bloques `<script type="application/ld+json">` de `_site/blog/baby-blues-vs-depresion-posparto-diferencias/index.html` · 3 bloques JSON-LD válidos (`Psychologist`, `BreadcrumbList`, `FAQPage` con 4 preguntas)
- [x] Auditar con `node -e` los párrafos BLUF (45-65 palabras), enlaces internos (sin Vía 1 ocultas) y disclaimer sanitario (`024`, `717 003 717`, `112`) · 12/12 párrafos BLUF entre 48 y 55 palabras; enlaces y teléfonos verificados
- [x] Ejecutar `npx @ericrisco/rsc risk` y verificar cumplimiento FTD · `tier 0` (`classes: docs`, `reviewers: 0`)

## Evidence
- `_posts/2026-11-13-baby-blues-vs-depresion-posparto-diferencias.md`: creado con frontmatter `faq:` (4 preguntas), tabla comparativa (*Baby Blues vs. Depresión Posparto vs. Psicosis Puerperal*), apartado sobre la Escala de Edimburgo (EPDS), 5 referencias científicas (APA, OMS, Ministerio de Sanidad, Cox et al. 1987 en PubMed, Stewart & Vigod 2019 en PubMed) y disclaimer sanitario (`024`, `717 003 717`, `112`).
- `npm run build:css`: compilado en `336ms` con código de salida `0`.
- `bundle exec jekyll build`: compilado `_site` en `0.277s` con código de salida `0`, generando `_site/blog/baby-blues-vs-depresion-posparto-diferencias/index.html`.
- Validación `node -e` con `JSON.parse()` sobre `_site/blog/baby-blues-vs-depresion-posparto-diferencias/index.html`: 3 bloques JSON-LD válidos (`Psychologist`, `BreadcrumbList`, `FAQPage (questions=4)`).
- Auditoría `node -e` de `_posts/2026-11-13-baby-blues-vs-depresion-posparto-diferencias.md`: `12/12` párrafos BLUF tras encabezados `##` y `###` dentro del rango `45-65` palabras (`48` a `55` palabras tanto en conteo limpio como raw), enlaces activos presentes (`/psicologia-perinatal/` en el primer tercio, `/trauma-apego/`, `/blog/duelo-perinatal-gestacional-fases-apoyo/`, `/terapia-emdr/`), `0` enlaces hacia las 6 landings ocultas por Vía 1 y teléfonos `024`, `717 003 717` y `112` incluidos.
- `npx @ericrisco/rsc risk`: `tier 0` (`classes: docs`, `reviewers: 0`, `human approval: not required`).

## Next
- Abordar el Artículo 3 del clúster perinatal (*Pensamientos intrusivos en el posparto: por qué tienes miedo a hacer daño a tu bebé y por qué no lo harás*).
