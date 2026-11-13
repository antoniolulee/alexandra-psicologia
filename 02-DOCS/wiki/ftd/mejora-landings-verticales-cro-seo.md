---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Mejora de Landings Verticales (CRO WhatsApp + CTR + SEO/GEO)

## Intent
Rediseñar la plantilla de especialidades (`_layouts/especialidad.html`, `_includes/cta.html`, `_includes/head.html`) y optimizar el copy y marcado semántico de las landings verticales siguiendo el Enfoque Híbrido aprobado: profundidad total en las 3 landings de Salud de la Mujer (`duelo-gestacional`, `psicologia-perinatal`, `infertilidad`) y ajuste base de consistencia en las 3 de Trauma/EMDR (`terapia-emdr`, `trauma-apego`, `duelo`), para aumentar visitas orgánicas, CTR en Google Search Console y contactos cualificados por WhatsApp.

## Scope
- **Incluido:**
  - Actualización de `_includes/head.html` (`preload` LCP en landings) y `_includes/cta.html` (mensaje de WhatsApp contextual por vertical).
  - Rediseño de `_layouts/especialidad.html`: H1 de doble capa (`headline` + `headline_seo`), CTA único a WhatsApp con microcopy reductor de fricción, barra de credenciales PIR/CV-13539, soporte BLUF, iconos SVG en tarjetas + CTA intermedio, sección de 3 pasos por WhatsApp, bloque de autoridad clínica y lecturas del clúster, y `BreadcrumbList` con `seo.breadcrumb`.
  - Optimización profunda (CTR, BLUF 45-65 palabras, tablas comparativas, FAQs y enlaces a artículos satélite) en `duelo-gestacional.yml`, `psicologia-perinatal.yml` e `infertilidad.yml`.
  - Ajuste base de consistencia (`seo.breadcrumb`, `hero.headline` + `headline_seo`, `cta_text`, `microcopy`, `que_es.bluf`, iconos y `articulos_relacionados`) en `terapia-emdr.yml`, `trauma-apego.yml` y `duelo.yml`.
  - Controles obligatorios (`npm run build:css`, `bundle exec jekyll build`, validación `JSON.parse()`, Zero CLS `width`/`height`, enlaces WhatsApp, `verify.sh` de `landing-copy`, `rsc risk` y revisión en contexto limpio).
- **Excluido:**
  - Modificar las 6 landings ocultas por política Vía 1 (`ansiedad-estres`, `autoestima`, `depresion`, `tdah-adultos`, `toc`, `trastornos-personalidad`), más allá de asegurar que compilen sin errores gracias a fallbacks en Liquid.
  - Inventar testimonios de pacientes o métricas clínicas no verificadas.

## Checklist
- [x] Actualizar `_includes/head.html` y `_includes/cta.html` · `preload` LCP y WhatsApp contextual verificados en `_site/`
- [x] Rediseñar `_layouts/especialidad.html` con fallbacks seguros · Las 12 especialidades compilan sin errores y pasan Zero CLS (`width`/`height`), `BreadcrumbList` y contraste WCAG 2.1 AA (`dark:text-dark-secondary`, ratio 5.89:1)
- [x] Optimizar en profundidad `duelo-gestacional.yml`, `psicologia-perinatal.yml` e `infertilidad.yml` · Verificado en `_site/` y validado con `landing-copy/scripts/verify.sh`
- [x] Aplicar ajuste base de consistencia en `terapia-emdr.yml`, `trauma-apego.yml` y `duelo.yml` · Verificado en `_site/` con JSON-LD y enlaces WhatsApp correctos
- [x] Ejecutar controles obligatorios (`npm run build:css`, `bundle exec jekyll build`, validación `JSON.parse()` + `width`/`height` + enlaces WhatsApp, `verify.sh`, `rsc risk` y revisión FTD en contexto limpio) · Ronda 1 (`CHANGES REQUESTED`) corregida y Ronda 2 aprobada (`APPROVE`, 0 findings)
- [x] Actualizar `02-DOCS/wiki/index.md` y `02-DOCS/wiki/harness/decisions.md` · Entradas registradas

## Evidence
- `npm run build:css` ejecutado tras los cambios finales → código de salida `0` (`Done in 337ms`).
- `bundle exec jekyll build` ejecutado tras los cambios finales → código de salida `0` (`done in 0.334 seconds`).
- Validación automatizada en Node sobre `_site/`: `12` páginas de especialidades compiladas, `30` bloques JSON-LD válidos con `JSON.parse()`, preload LCP presente, `width`/`height` en todas las `<img>`, `3` enlaces contextuales WhatsApp en `<main>` (+ `1` en CTA flotante `cta.html`) por vertical activo, sin mención posparto fuera de `psicologia-perinatal`, y sin backfill perinatal en páginas ocultas Vía 1 (`tdah-adultos`, etc.).
- `bash .rsc/skills/landing-copy/scripts/verify.sh _site/duelo-gestacional/index.html _site/psicologia-perinatal/index.html _site/infertilidad/index.html` → código de salida `0` (0 errores duros, 0 términos prohibidos; 1 advertencia de verbos CTA en `infertilidad`).
- `npx --offline @ericrisco/rsc risk` → `tier 1` (`reviewers: 1`, `human approval: not required`).
- Revisión en contexto limpio (`79d3c262-c8cf-495a-a791-269fef1298e1`):
  - **Ronda 1:** `CHANGES REQUESTED` (1 blocker: mención al bebé en fallback `pasos_whatsapp`; 2 should-fix: backfill `hub_posts` en Vía 1 y contraste Dark Mode en botones CTA; 3 nits: `|` en `span.block` del H1, longitud `seo.title`/`seo.description` y `related_category` en `duelo.yml`).
  - **Ronda 2:** `APPROVE` (`0 findings: 0 blockers, 0 nits`), con recordatorio de revisión humana para afirmaciones clínicas (`REVIEW.md` §4).

## Next
- Revisión clínica humana por Alexandra de los textos, credenciales y afirmaciones médicas en `_data/especialidades/*.yml` antes de realizar commit y publicación en `main`.
