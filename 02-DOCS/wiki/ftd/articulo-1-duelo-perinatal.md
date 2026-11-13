---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Artículo 1 del Clúster Perinatal: Duelo Perinatal y Gestacional

## Intent
Redactar, optimizar para GEO/AEO, auditar deontológicamente y publicar en `_posts/` el Artículo 1 del clúster de Salud Perinatal (*Duelo perinatal y gestacional: cómo transitar la pérdida de un bebé y validar el dolor que nadie nombra*), alineado con la guía maestra E-E-A-T, el benchmark perinatal y la arquitectura de 2 Super-Verticales (Opción A + Vía 1).

## Scope
- **Incluido:**
  - Creación de `_posts/2026-11-13-duelo-perinatal-gestacional-fases-apoyo.md` con permalink `/blog/duelo-perinatal-gestacional-fases-apoyo/`.
  - Aplicación de párrafos BLUF (45-65 palabras tras cada `##` y `###`), tabla comparativa Markdown, 4 FAQs conversacionales en cuerpo y frontmatter `faq:`, referencias científicas oficiales y disclaimer sanitario (`024`, `717 003 717`, `112`).
  - Enlazado interno conforme a Topic Clusters y Vía 1: enlace pilar en el primer tercio a `/duelo-gestacional/`, enlaces secundarios a `/psicologia-perinatal/` y `/terapia-emdr/`, sin enlazar a las 6 especialidades ocultas.
  - Actualización de `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md`.
  - Validación técnica de CSS (`npm run build:css`), build Jekyll (`bundle exec jekyll build`), parseo `JSON.parse()` de todos los JSON-LD en `_site/blog/duelo-perinatal-gestacional-fases-apoyo/index.html` y auditoría automatizada de BLUF, enlaces y disclaimer.
- **Excluido:**
  - Redacción de los artículos 2 al 10 del vertical perinatal.
  - Modificación de plantillas `_layouts/` o páginas pilar ya consolidadas.

## Checklist
- [x] Crear documento FTD en `02-DOCS/wiki/ftd/articulo-1-duelo-perinatal.md` · Documento creado y completado
- [x] Redactar y publicar `_posts/2026-11-13-duelo-perinatal-gestacional-fases-apoyo.md` siguiendo `redactor-clinico`, `optimizador-geo` y `auditor-deontologico` · Publicado con veredicto APROBADO
- [x] Actualizar `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` y `02-DOCS/wiki/index.md` · Tablas sincronizadas
- [x] Ejecutar `npm run build:css` y `bundle exec jekyll build` con código de salida 0 · CSS en `281ms` y Jekyll en `0.228s`
- [x] Validar con `node -e` y `JSON.parse()` todos los bloques `<script type="application/ld+json">` de `_site/blog/duelo-perinatal-gestacional-fases-apoyo/index.html` · 3 bloques JSON-LD válidos (`Psychologist`, `BreadcrumbList`, `FAQPage` con 4 preguntas)
- [x] Auditar con `node -e` los párrafos BLUF (45-65 palabras), enlaces internos (sin Vía 1 ocultas) y disclaimer sanitario (`024`, `717 003 717`, `112`) · 12 párrafos BLUF entre 55 y 60 palabras; enlaces y disclaimer verificados

## Evidence
- `_posts/2026-11-13-duelo-perinatal-gestacional-fases-apoyo.md`: creado con frontmatter `faq:` (4 preguntas), tabla comparativa (*Duelo Gestacional vs. Duelo Perinatal vs. Duelo Desautorizado*), 5 referencias científicas (OMS, APA, Herbert et al. 2022 en PubMed, Doka 2002, Worden 2018) y disclaimer sanitario (`024`, `717 003 717`, `112`).
- `npm run build:css`: compilado en `281ms` con código de salida `0`.
- `bundle exec jekyll build`: compilado `_site` en `0.228s` con código de salida `0`, generando `_site/blog/duelo-perinatal-gestacional-fases-apoyo/index.html`.
- Validación `node -e` con `JSON.parse()` sobre `_site/blog/duelo-perinatal-gestacional-fases-apoyo/index.html`: 3 bloques JSON-LD válidos (`@type=Psychologist`, `@type=BreadcrumbList`, `@type=FAQPage` con `questions=4`).
- Auditoría `node -e` de `_posts/2026-11-13-duelo-perinatal-gestacional-fases-apoyo.md`: 12/12 párrafos BLUF tras encabezados `##` y `###` dentro del rango `45-65` palabras (`55` a `60` palabras), enlaces activos presentes (`/duelo-gestacional/`, `/psicologia-perinatal/`, `/terapia-emdr/`), `0` enlaces hacia las 6 landings ocultas por Vía 1 y teléfonos `024`, `717 003 717` y `112` incluidos.

## Next
- Abordar el Artículo 2 del clúster perinatal (*Baby blues vs. depresión posparto: diferencias clave, duración y cuándo pedir ayuda profesional*).
