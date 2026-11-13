---
author: Alexandra Barroso
branch: main
status: completed
lane: FTD
date: 2026-11-13
---
# FTD — Refactorización y Simplificación Arquitectónica (Fases 1, 2 y 3)

## Intent
Simplificar la arquitectura de plantillas, datos y estilos de la web de Alexandra Barroso Psicología eliminando código muerto, duplicación de fuentes de verdad, clases Tailwind dinámicas riesgosas y repetición en `_layouts/` e `_includes/`, preservando al 100% el contrato observable de `_site/` (URLs, SEO, JSON-LD, CTAs de WhatsApp y Zero CLS).

## Scope
- **Incluido:**
  - **Fase 1 (Limpieza e higiene CSS/Datos):** Eliminar `_data/design.yml` y `_data/articles.yml`, retirar `jekyll-seo-tag` no usado, eliminar `footer_specialties` duplicado en `_data/site.yml`, sustituir clases dinámicas `{{ column.color }}` en `_includes/sobre-mi/experiencia.html` y reemplazar gradientes inline por utilidades Tailwind.
  - **Fase 2 (Desacoplamiento y escalabilidad editorial):** Mover fallbacks de `_layouts/especialidad.html` y CTAs por clúster de `_layouts/post.html` a `_data/site.yml`; normalizar categoría del post de adolescentes preservando su `permalink` legacy y añadir `permalink` explícito al post legacy de apego ansioso; simplificar filtro en `blog/index.html` y añadir `defaults` de posts y especialidades en `_config.yml`.
  - **Fase 3 (Unificación de layouts e includes):** Hacer que `_layouts/especialidad.html`, `_layouts/post.html` y `_layouts/404.html` hereden de `_layouts/default.html`; extraer `_includes/icon.html`, `_includes/date-es.html`, `_includes/faq-accordion.html`, `_includes/faq-schema.html` y `_includes/post-card.html`.
- **Excluido:**
  - Migración de `especialidades/*.md` a Jekyll Collections.
  - Incorporación de bundlers JS o cambios de comportamiento funcional/visual.

## Checklist
- [x] Capturar baseline observable del `_site/` actual (`/tmp/baseline-contract.json`) · Contrato baseline guardado con las 26 páginas HTML
- [x] Fase 1: Eliminar archivos huérfanos, `jekyll-seo-tag`, `footer_specialties` y corregir Tailwind/gradientes inline · `npm run build:css` y `bundle exec jekyll build` con código 0
- [x] Fase 2: Mover defaults y CTAs a `_data/site.yml`, normalizar blog y configurar `defaults` en `_config.yml` · Equivalencia de URLs, filtros y metadatos verificada
- [x] Fase 3: Unificar layouts sobre `default.html` y extraer includes (`icon`, `date-es`, `faq-accordion`, `faq-schema`, `post-card`) · Equivalencia 100% frente al baseline, Zero CLS y 0 enlaces rotos
- [x] Ejecutar `npx @ericrisco/rsc risk` y registrar decisión en `02-DOCS/wiki/harness/decisions.md` · Tier evaluado y decisión registrada

## Evidence
- **Compilación CSS (`npm run build:css`):** exit 0 (`Done in 384ms.`), con utilidades estáticas compiladas (incluyendo `.dark\:hover\:text-dark-secondary:hover:is(.dark *)` y gradientes Tailwind sin estilos inline).
- **Build Jekyll (`bundle exec jekyll build`):** exit 0 (`done in 0.101 seconds.`).
- **Equivalencia de contrato y calidad en `_site/`:** `26` páginas HTML, `64` bloques JSON-LD Schema.org válidos, `0` diferencias respecto al contrato baseline, `0` violaciones Zero CLS (`width`/`height` en `<img>`), `0` enlaces internos rotos y `3` tarjetas en "Artículos Recientes" de la Home.
- **Evaluación de riesgo y revisión (`ftd`):** `npx --offline @ericrisco/rsc risk` → `tier 1` (`reviewers: 1`). Revisor independiente en contexto limpio (`RESEARCH`) reportó `4 findings: 1 blocker, 3 nits`; se corrigió el bloqueante de contraste Dark Mode WCAG AA / hover en `_layouts/post.html:143`, `blog/index.html:33`, `_layouts/especialidad.html:375` e `_includes/sobre-mi/cta.html:2,19` y los nits de plantilla (`limit: 3` en `_includes/articles.html:28` y eliminación de `seen_hub_urls` sin uso en `_layouts/especialidad.html`), quedando todo reverificado tras la última edición.

## Next
- La arquitectura queda simplificada y lista para publicar nuevos artículos y especialidades mediante YAML/Markdown sin duplicar plantillas ni configuraciones manuales.

