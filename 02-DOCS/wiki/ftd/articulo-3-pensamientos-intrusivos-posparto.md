---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Artículo 3 del Clúster Perinatal: Pensamientos Intrusivos en el Posparto

## Intent
Redactar, optimizar para GEO/AEO, auditar deontológicamente y publicar en `_posts/` el Artículo 3 del clúster de Salud Perinatal (*Pensamientos intrusivos en el posparto: por qué tienes miedo a hacer daño a tu bebé (y por qué no lo harás)*), alineado con la guía maestra E-E-A-T, el benchmark perinatal y la arquitectura de 2 Super-Verticales (Opción A + Vía 1).

## Scope
- **Incluido:**
  - Creación de `_posts/2026-11-13-pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe.md` con permalink `/blog/pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe/`.
  - Párrafos BLUF (45-65 palabras tras cada `##` y `###`), tabla comparativa (*TOC Posparto (egodistónico) vs. Psicosis Posparto (egosintónico)*), 4 FAQs conversacionales en cuerpo y frontmatter `faq:`, referencias científicas oficiales y disclaimer sanitario (`024`, `717 003 717`, `112`).
  - Enlazado interno conforme a Topic Clusters y Vía 1: enlace pilar en el primer tercio a `/psicologia-perinatal/`, enlaces secundarios a `/trauma-apego/`, `/terapia-emdr/` y `/blog/baby-blues-vs-depresion-posparto-diferencias/`, sin enlazar a las 6 páginas ocultas por Vía 1.
  - Actualización de `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md`.
  - Validación técnica con `npm run build:css`, `bundle exec jekyll build`, `JSON.parse()` de todos los JSON-LD en `_site/blog/pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe/index.html`, auditoría automatizada de BLUF, enlaces y teléfonos, y `npx @ericrisco/rsc risk`.
- **Excluido:**
  - Redacción de los artículos 4 al 10 del vertical perinatal.
  - Modificación de plantillas `_layouts/` o páginas pilar consolidadas.

## Checklist
- [x] Crear documento FTD en `02-DOCS/wiki/ftd/articulo-3-pensamientos-intrusivos-posparto.md` · Documento creado antes de iniciar cambios y cerrado con evidencias
- [x] Redactar y publicar `_posts/2026-11-13-pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe.md` siguiendo `redactor-clinico`, `optimizador-geo` y `auditor-deontologico` · Publicado con veredicto APROBADO
- [x] Actualizar `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md` · Tablas sincronizadas
- [x] Ejecutar `npm run build:css` y `bundle exec jekyll build` con código de salida 0 · CSS en `302ms` y Jekyll en `0.298s`
- [x] Validar con `node -e` y `JSON.parse()` todos los bloques `<script type="application/ld+json">` de `_site/blog/pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe/index.html` · 3 bloques JSON-LD válidos (`Psychologist`, `BreadcrumbList`, `FAQPage` con 4 preguntas)
- [x] Auditar con `node -e` los párrafos BLUF (45-65 palabras), enlaces internos (sin Vía 1 ocultas) y disclaimer sanitario (`024`, `717 003 717`, `112`) · 11/11 párrafos BLUF entre 50 y 57 palabras; enlaces y teléfonos verificados
- [x] Ejecutar `npx @ericrisco/rsc risk` y verificar cumplimiento FTD · `tier 1` (`classes: default, docs`, `reviewers: 1`, `human approval: not required`)

## Evidence
- `_posts/2026-11-13-pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe.md`: creado con frontmatter `faq:` (4 preguntas), tabla comparativa (*TOC Posparto / Fobias de Impulsión (Egodistónico) vs. Psicosis Posparto / Puerperal (Egosintónico)*), explicación neurobiológica (amígdala, eje HPA y metáfora del detector de humos hipersensible), efecto rebote paradójico y fusión pensamiento-acción, 5 referencias científicas (Abramowitz et al. 2003 en PubMed `12826092`, Fairbrother & Woody 2008 en PubMed `18463941`, Fairbrother et al. 2022 en PubMed `35235718`, APA, COP y Ministerio de Sanidad) y disclaimer sanitario (`024`, `717 003 717`, `112`).
- `npm run build:css`: compilado en `302ms` con código de salida `0`.
- `bundle exec jekyll build`: compilado `_site` en `0.298s` con código de salida `0`, generando `_site/blog/pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe/index.html`.
- Validación `node -e` con `JSON.parse()` sobre `_site/blog/pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe/index.html`: 3 bloques JSON-LD válidos (`Psychologist`, `BreadcrumbList`, `FAQPage (questions=4)`).
- Auditoría `node -e` de `_posts/2026-11-13-pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe.md`: `11/11` párrafos BLUF tras encabezados `##` y `###` dentro del rango `45-65` palabras (`50` a `57` palabras tanto en conteo limpio como raw), enlaces activos presentes (`/psicologia-perinatal/` en el primer tercio, `/trauma-apego/`, `/terapia-emdr/`, `/blog/baby-blues-vs-depresion-posparto-diferencias/`), `0` enlaces hacia las 6 landings ocultas por Vía 1 y teléfonos `024`, `717 003 717` y `112` incluidos.
- `npx @ericrisco/rsc risk`: `tier 1` (`classes: default, docs`, `reviewers: 1`, `human approval: not required`).

## Next
- Abordar el Artículo 4 del clúster perinatal (*El duelo desautorizado: por qué duele tanto un aborto espontáneo en las primeras semanas*).
