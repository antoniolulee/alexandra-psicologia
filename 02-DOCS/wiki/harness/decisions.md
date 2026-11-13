# Harness decisions

- Accepted plan `73e48b4d47a80cc33afe5eaffb711b75572fb94c446d201d4a3efeba81fec130`.
- Project kind: software.
- SDD: deferred.
- 2026-11-11: Activado flujo ASDD a petición del usuario. Ratificada constitution v1.0.0 y establecido REVIEW.md.

- Accepted plan `1cc53d00fdbebb6bcebe07a92c5bd3d65ac2f12012dceda0da50aa52a8e87830`.
- Project kind: software.
- SDD: selected.
- 2026-11-11: Ratificada la Guía Maestra de GEO/AEO y SEO Clínico E-E-A-T (`02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md`) como norma previa e imperativa a la instanciación de subagentes autónomos de redacción y optimización.
- 2026-11-11: Instanciados y configurados los 3 subagentes de contenido y SEO (`redactor-clinico`, `optimizador-geo`, `auditor-deontologico`) en el entorno de ejecución y persistidos bajo `.gemini/agents/`.
- 2026-11-13: Consolidación de la arquitectura SEO en 2 Super-Verticales (**Opción A**: *Salud Perinatal y Reproductiva* y *Trauma, Apego y Terapia EMDR*) aplicando **Vía 1** (ocultar de Home/Footer las 6 páginas restantes sin eliminarlas para evitar errores 404). Activación de Rich Snippets (`FAQPage` y `BreadcrumbList` JSON-LD) en landings y blog tras los hallazgos de Search Console (`02-DOCS/wiki/seo/auditoria-search-console-2026-11-11.md`).
- 2026-11-13: Hiperespecialización en Salud de la Mujer, Psicología Perinatal y Reproducción Asistida (`02-DOCS/wiki/seo/estrategia-hiperespecializacion-salud-mujer-perinatal.md`): alineación de Home (`_data/site.yml`, `_includes/for-whom.html`) y `/sobre-mi/` con credencial hospitalaria PIR + EMDR, implementación de `<h1>` híbridos SEO+empáticos, bloque de autoridad PIR, 3 pasos de primer contacto y retorno Hub→Spoke en `_layouts/especialidad.html`, más Schema `BlogPosting` y CTAs contextuales en `_layouts/post.html`.
- 2026-11-13: Enfoque Híbrido CRO/CTR en Landings Verticales (`02-DOCS/wiki/ftd/mejora-landings-verticales-cro-seo.md`): unificación de `_layouts/especialidad.html`, `_includes/head.html` (LCP preload) y `_includes/cta.html` (WhatsApp dinámico) con botón CTA WCAG AA (`dark:text-dark-secondary`), aislamiento de `pasos_whatsapp` posparto solo en `psicologia-perinatal.yml`, eliminación de relleno `hub_posts` en landings Vía 1 y optimización profunda de `duelo-gestacional.yml`, `psicologia-perinatal.yml` e `infertilidad.yml` más consistencia base en `terapia-emdr.yml`, `trauma-apego.yml` y `duelo.yml`.
- 2026-11-13: Refactorización y simplificación arquitectónica en 3 fases sin sobreingeniería (`02-DOCS/wiki/ftd/refactorizacion-simplificacion-arquitectura.md`): eliminación de datos/dependencias muertas (`_data/design.yml`, `_data/articles.yml`, `jekyll-seo-tag`, `footer_specialties`), centralización de `especialidad_defaults` y `blog` (`categories`, `author_bio`, `cluster_ctas`) en `_data/site.yml`, `defaults` de `_config.yml`, preservación explícita de `permalink` legacy en posts anteriores, herencia unificada de `_layouts/{especialidad,post,404}.html` sobre `_layouts/default.html` y extracción de `_includes/{icon,date-es,faq-accordion,faq-schema,post-card}.html` conservando equivalencia total de `_site/` (26 HTML, 64 JSON-LD, 0 CLS).
