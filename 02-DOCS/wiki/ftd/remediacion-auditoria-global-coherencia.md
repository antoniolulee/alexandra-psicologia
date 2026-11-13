---
author: Alexandra Barroso
branch: main
status: completed
---
# FTD — Remediación Integral de Auditoría Web (SEO, Coherencia, Accesibilidad y Rendimiento)

## Intent
Corregir los errores técnicos, de SEO, coherencia de negocio/legal, accesibilidad WCAG 2.1 AA, Dark Mode y rendimiento detectados en la auditoría global del sitio web de Alexandra Barroso Psicología.

## Scope
- **Incluido:**
  - SEO y Build: Corrección de `<title>` en Home y `/sobre-mi/`, actualización de descripción global y exclusión de `assets/images/Alejandra_LQ/` en `_config.yml` (manteniendo `Alejandra_LQ-79.webp` en producción), preload LCP de `/sobre-mi/` y ampliación de JSON-LD `Psychologist` (`addressRegion` y `availableService`) en `_includes/head.html`.
  - Coherencia geográfica, propuesta de valor y legal: Unificación en Valencia (`_data/site.yml`, `legal.md`), alineación del CTA y FAQ hacia la 1.ª valoración gratuita de 15 min, eliminación de mención a Skype, renderizado Markdown en `_includes/faq.html` con `strip_html` en JSON-LD y corrección tipográfica del `<h1>` en `_includes/sobre-mi/hero.html`.
  - Blog y Sitemap Vía 1: Fechas en español en `_layouts/post.html` y `blog/index.html`, ajuste de filtro en `/blog/` para incluir `Adolescentes` bajo `Bienestar Emocional`, eliminación de tabla duplicada en `2026-01-05-apego-ansioso-relaciones.md`, corrección de categoría, `permalink` explícito y disclaimers sanitarios (`024`, `717 003 717`, `112`) en los posts de 2026-01-10 y 2025-12-28, y `sitemap: false` en las 6 landings ocultas por Vía 1.
  - UI, Dark Mode y 404: Tokens `surface` y `dark-surface` en `tailwind.config.js`, estilos Dark Mode en `legal.md`, `privacidad.md`, `cookies.md` y `_includes/legal/section.html`, actualización de `404.md` y `_layouts/404.html` (`font-accent`, `cookie-consent.html`, `robots: noindex, nofollow`), y contraste WCAG AA (`dark:text-dark-secondary`) en botones primarios e iconos.
- **Excluido:**
  - Redacción de nuevos artículos del Bloque 3 o implementación del Bloque 4.
  - Eliminación física de las 6 páginas ocultas por Vía 1 o de archivos fuente en `assets/images/Alejandra_LQ/`.

## Checklist
- [x] Crear FTD `02-DOCS/wiki/ftd/remediacion-auditoria-global-coherencia.md` y enlazar en `02-DOCS/wiki/index.md` · Documento creado y enlazado
- [x] Corregir `_config.yml`, `index.html`, `sobre-mi.md` y `_includes/head.html` (títulos SEO, preload `/sobre-mi/`, JSON-LD y exclusión de `assets/images/Alejandra_LQ/`) · `<title>` de Home y `/sobre-mi/` corregidos; `_site/` pasa a `2.7M` sin copiar la carpeta en bruto
- [x] Unificar ubicación Valencia, propuesta de valor, FAQ Markdown/JSON-LD y `<h1>` de `/sobre-mi/` (`_data/site.yml`, `legal.md`, `_includes/faq.html`, `_includes/sobre-mi/hero.html`) · Verificado sin asteriscos crudos, sin `elige.,`, sin Skype y sin HTML en `FAQPage`
- [x] Corregir fechas en español, blog posts antiguos y `sitemap: false` en las 6 landings ocultas Vía 1 · Fechas en español verificadas, `0` rutas Vía 1 ocultas en `_site/sitemap.xml`, `0` enlaces rotos
- [x] Actualizar `tailwind.config.js`, páginas legales en Dark Mode, `404.md`/`_layouts/404.html` y contraste WCAG AA en botones · `bg-surface`/`dark:bg-dark-surface` compilados y `404.html` con `noindex, nofollow` + cookies
- [x] Ejecutar `npm run build:css`, `bundle exec jekyll build` y auditoría técnica automatizada sobre `_site/` · CSS en `312ms`, Jekyll en `0.144s`, `64` JSON-LD válidos y `0` incumplimientos Zero CLS

## Evidence
- `npm run build:css`: compilado `assets/css/tailwind.css` en `312ms` con código `0`, generando `.bg-surface` y `.dark\:bg-dark-surface`.
- `bundle exec jekyll build`: generado `_site/` (`2.7M` totales tras excluir `assets/images/Alejandra_LQ/` manteniendo `Alejandra_LQ-79.webp`) en `0.144s` con código `0`.
- Auditoría automatizada `node -e` sobre los `26` archivos HTML de `_site/`:
  - `64` bloques `<script type="application/ld+json">` parseados con `JSON.parse()` sin errores y `0` etiquetas HTML en `FAQPage`.
  - `0` imágenes sin atributos `width` y `height` (Zero CLS).
  - `0` referencias `href`/`src` internas rotas (`brokenRefs: []`).
  - `<title>` Home: `"Alexandra Barroso | Psicóloga Clínica Online (PIR) · Salud Perinatal y EMDR"`; `<title>` Sobre Mí: `"Sobre Mí | Alexandra Barroso · Psicóloga Clínica vía PIR (CV-13539)"` con `rel="preload"` para `Alejandra_LQ-79.webp`.
  - `0` ocurrencias de `**llamada`, `elige.,`, `Skype` o nombres de mes en inglés; fechas del blog renderizadas en español (`"13 de noviembre de 2026"`).
  - `_site/404.html` verificado con `content="noindex, nofollow"`, `font-accent` y modal de cookies; `_site/legal/index.html` con `dark:prose-invert` y fuero unificado en Valencia; `0` landings Vía 1 ocultas presentes en `_site/sitemap.xml`.

## Next
- Continuar el Bloque 3 con el artículo de **Trauma Obstétrico y Parto Traumático con EMDR** (`/blog/parto-traumatico-tept-posparto-terapia-emdr/`) o ejecutar el **Bloque 4** (autoevaluación interactiva en Alpine.js).
