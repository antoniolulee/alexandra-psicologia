---
author: Antonio Lu Lee
branch: main
status: in-progress
---
# Optimización SEO/GEO de /terapia-emdr/ y Post de Apego Ansioso (GSC Quick Wins)

## Intent
Aplicar las mejoras basadas en los datos reales de Google Search Console para impulsar:
1. La landing `/terapia-emdr/` (+1.825 impresiones en pos 63) con H1 exacto, estructura BLUF y tabla comparativa.
2. El post `2026-01-05-apego-ansioso-relaciones.md` (pos 11.67) al Top 5 mediante estructura BLUF, tabla comparativa, FAQPage Schema, citas científicas E-E-A-T y disclaimer sanitario.

## Scope
- Editar `_data/especialidades/terapia-emdr.yml` (optimizar `hero.headline`, `hero.badge`, `que_es` con BLUF y tabla comparativa de estimulación bilateral online).
- Editar `_posts/2026-01-05-apego-ansioso-relaciones.md` (añadir `seo_title`, `seo_description`, `faq` en front matter, estructura BLUF, tabla comparativa, sección FAQ visible, referencias científicas y disclaimer sanitario).
- Validar con `bundle exec jekyll build` y verificar la salida JSON-LD generada en `_site/`.
- Fuera de alcance: tocar otras especialidades o modificar layouts HTML.

## Checklist
- [x] Optimizar `_data/especialidades/terapia-emdr.yml` · H1, BLUF y tabla comparativa añadidos
- [x] Optimizar `_posts/2026-01-05-apego-ansioso-relaciones.md` · Front matter `seo_title`/`seo_description`, BLUF, tabla comparativa, citas y disclaimer añadidos
- [x] Verificar build de Jekyll y JSON-LD en `_site/` · `bundle exec jekyll build` OK (0.444s) y `FAQPage` válido en ambas URLs

## Evidence
- `bundle exec jekyll build` completado con código de salida `0` en `0.444s`.
- Verificación en `_site/terapia-emdr/index.html`: `<h1>`, `alt` de imagen hero y `BreadcrumbList` actualizados a `"Terapia EMDR Online para Adultos: Especialista en Trauma"`, más esquema `FAQPage` presente en línea 1095.
- Verificación en `_site/relaciones/2026/01/05/apego-ansioso-relaciones/index.html`: `<title>`, `og:title` y `twitter:title` actualizados a `"Apego Ansioso en la Pareja: Señales, Causas y Cómo Sanarlo"`, más esquema `FAQPage` presente en línea 1025.

## Next
- Desplegar cambios a `main` y solicitar reindexación en Search Console o pasar a optimizar `/psicologia-perinatal/` y `/duelo-gestacional/`.
