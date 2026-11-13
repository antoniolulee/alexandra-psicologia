---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Consolidación en 2 Super-Verticales (Opción A + Vía 1) y Optimización de Quick Wins de Search Console

## Intent
Reestructurar la arquitectura de especialidades de la web hacia 2 Super-Verticales estratégicos (**Salud Perinatal y Reproductiva** y **Trauma, Apego y Terapia EMDR**) ocultando las 6 especialidades restantes de la navegación sin eliminar sus URLs (Vía 1 para evitar errores 404), e implementar optimizaciones SEO on-page y Rich Snippets (`FAQPage` + `BreadcrumbList`) orientadas a los Quick Wins detectados en Google Search Console.

## Scope
- **Incluido:**
  - Reestructuración de Home (`_data/site.yml`, `_includes/specialties.html`), Footer (`_includes/footer.html`) y SEO global (`_data/seo.yml`, `_includes/head.html`).
  - Incorporación de acordeón FAQ, RGPD (`cookie-consent.html`) y JSON-LD (`FAQPage` + `BreadcrumbList`) en `_layouts/especialidad.html` y `_layouts/post.html`.
  - Optimización semántica y bloque `faq:` en las 6 páginas activas: `psicologia-perinatal.yml`, `duelo-gestacional.yml`, `infertilidad.yml`, `terapia-emdr.yml`, `trauma-apego.yml` y `duelo.yml`.
  - Impulso del Quick Win `_posts/2026-01-05-apego-ansioso-relaciones.md` y refuerzo de enlazado interno en los otros 2 posts existentes.
  - Actualización de documentación SEO (`arquitectura-enlaces-topic-clusters.md`, `benchmark-articulos-salud-perinatal.md`, `decisions.md`, `index.md`).
- **Excluido:**
  - Eliminar archivos `.md` de `especialidades/` o `.yml` de `_data/especialidades/` (se mantiene Vía 1).
  - Redactar nuevos artículos completos del blog perinatal.

## Checklist
- [x] Reestructurar `_data/site.yml`, `_includes/specialties.html`, `_includes/footer.html`, `_data/seo.yml` y `_includes/head.html` · Verificado en `_site/index.html` y JSON-LD válido
- [x] Actualizar `_layouts/especialidad.html` y `_layouts/post.html` con FAQ, RGPD y Schemas JSON-LD (`BreadcrumbList`, `FAQPage`) · Validados 23 bloques JSON-LD con `JSON.parse()`
- [x] Optimizar las 6 landings activas (`psicologia-perinatal.yml`, `duelo-gestacional.yml`, `terapia-emdr.yml`, `trauma-apego.yml`, `infertilidad.yml`, `duelo.yml`) · Compiladas sin errores y verificadas con `BreadcrumbList` + `FAQPage`
- [x] Optimizar los 3 artículos existentes en `_posts/` (Quick Win apego ansioso + interlinking a 2 pilares) · Compilado y validado `FAQPage` en `_site/relaciones/2026/01/05/apego-ansioso-relaciones/index.html`
- [x] Actualizar documentación SEO (`arquitectura-enlaces-topic-clusters.md`, `benchmark-articulos-salud-perinatal.md`, `decisions.md`, `index.md`) · Documentación actualizada y enlazada
- [x] Ejecutar controles obligatorios (`npm run build:css`, `bundle exec jekyll build`, validación `JSON.parse()` en `_site/`, `rsc risk`) · Todos aprobados con salida 0

## Evidence
- `npm run build:css`: compilado en `301ms` con código de salida `0`.
- `bundle exec jekyll build`: generado `_site` en `0.673s` con código de salida `0`.
- Validación `node -e` con `JSON.parse()`: `23` bloques `<script type="application/ld+json">` válidos en `_site/index.html` (`Psychologist, FAQPage`), las 6 landings activas (`Psychologist, BreadcrumbList, FAQPage`) y `_site/relaciones/2026/01/05/apego-ansioso-relaciones/index.html` (`Psychologist, BreadcrumbList, FAQPage`).
- Verificación Vía 1 en `_site/`: las `6` páginas ocultas del menú (`tdah-adultos`, `ansiedad-estres`, `autoestima`, `depresion`, `toc`, `trastornos-personalidad`) siguen compiladas sin errores `404`.
- `npx --offline @ericrisco/rsc risk`: clasificado como `tier 1` (`classes: default, docs`, `human approval: not required`).

## Next
- Redactar el primer artículo satélite de alto impacto del vertical perinatal (*Duelo perinatal y gestacional* o *Baby blues vs. depresión posparto*) o el artículo técnico de *Terapia EMDR online para adultos* siguiendo `02-DOCS/wiki/seo/benchmark-articulos-salud-perinatal.md`.
