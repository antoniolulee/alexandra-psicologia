---
author: Antonio Lu Lee
branch: main
status: completed
---
# Remediación de Auditoría Técnica y Cumplimiento RGPD

## Intent
Corregir las vulnerabilidades críticas y discrepancias técnicas detectadas durante la auditoría técnica del sitio: fuga de documentación interna en sitemap/build, infracción de RGPD en consentimiento de cookies y carga prematura de GA4, imágenes de Open Graph inexistentes, enlaces internos con redirección 301 y prevención de FOUC en modo oscuro.

## Scope
- Excluir del build de Jekyll en `_config.yml` todos los directorios y archivos de tooling/harness (`01-TOOLS/`, `02-DOCS/`, `AGENTS.md`, `GEMINI.md`, `package*.json`, `tailwind.config.js`, etc.).
- Adecuar `_includes/cookie-consent.html` y `_includes/head.html` a la directriz AEPD/RGPD: consentimiento explícito (botones Aceptar / Rechazar), sin auto-cierre ni consentimiento tácito, y carga condicional de GA4 solo tras aceptación.
- Corregir en `_data/seo.yml` las rutas de imágenes Open Graph y Twitter Cards hacia imágenes existentes en `assets/images/`.
- Añadir trailing slash a los enlaces legales en `_data/site.yml` (`/legal/`, `/privacidad/`, `/cookies/`).
- Añadir script inline síncrono en `_includes/head.html` para prevenir FOUC en modo oscuro.

## Checklist
- [x] Actualizar `_config.yml` con la lista completa de exclusiones · Verificado
- [x] Adaptar `_includes/cookie-consent.html` a RGPD con botones Aceptar / Rechazar explícitos · Verificado
- [x] Adaptar `_includes/head.html` para carga condicional de GA4 y prevención de FOUC · Verificado
- [x] Corregir rutas de Open Graph y Twitter Card en `_data/seo.yml` · Verificado
- [x] Normalizar URLs legales en `_data/site.yml` con trailing slash · Verificado
- [x] Ejecutar build de Jekyll y verificar que `_site/02-DOCS` y `_site/sitemap.xml` no contengan archivos internos · Verificado con código 0

## Evidence
- `_config.yml` configurado con exclusiones completas; `_site/` y `sitemap.xml` limpios de archivos internos.
- `_data/seo.yml` actualizado con imagen Open Graph existente `/assets/images/alexandra-hero.webp`.
- `_data/site.yml` actualizado con trailing slashes en enlaces legales para evitar redirecciones 301.
- `bundle exec jekyll build` ejecutado en 0.25s sin advertencias ni errores.

## Next
- Generar commit semántico y hacer push a `origin/main`.
