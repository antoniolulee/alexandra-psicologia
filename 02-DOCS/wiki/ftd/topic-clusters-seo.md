---
author: Antonio Lu Lee
branch: main
status: in-progress
---
# Topic Clusters y Arquitectura de Enlaces Internos SEO

## Intent
Definir la arquitectura interna de enlaces y la estrategia de Topic Clusters para los 3 pilares clave del sitio web (Salud Perinatal, Trauma/Apego/EMDR, y Regulación Emocional/Neurodivergencia) con el fin de maximizar la autoridad tópica (E-E-A-T) y transferir PageRank hacia las páginas transaccionales de especialidades.

## Scope
- Documentar el mapa exhaustivo de Topic Clusters para los 3 pilares clave en `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md`.
- Definir URLs pilar, URLs satélite de especialidades y artículos informacionales recomendados por clúster.
- Establecer las reglas de anclaje (anchor texts), jerarquía de enlaces internos y flujo de conversión.
- Registrar el nuevo documento en el mapa de conocimiento `02-DOCS/wiki/index.md`.
- Fuera de alcance: modificar el código fuente Jekyll o redactar los artículos de blog completos.

## Checklist
- [x] Crear el documento de arquitectura de enlaces y topic clusters en `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` · Archivo creado y verificado
- [x] Actualizar `02-DOCS/wiki/index.md` enlazando el nuevo documento · Enlace añadido en tabla de SEO
- [x] Aplicar los enlaces internos en los 3 artículos de blog existentes (`_posts/`) · Enlaces añadidos y validados con build
- [x] Ejecutar self-check de lectura y coherencia documental · Verificación completada con éxito (`bundle exec jekyll build` OK)

## Evidence
- Archivo `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md` generado con especificación técnica completa de los 3 clústeres y reglas de anclaje.
- Índice central `02-DOCS/wiki/index.md` actualizado con sección SEO y enlace al mapa de clústeres.
- Enlaces internos integrados en `2026-01-05-apego-ansioso-relaciones.md` (hacia `/trauma-apego/` y `/terapia-emdr/`), `2026-01-10-ansiedad-vs-estres.md` (hacia `/ansiedad-estres/`) y `2025-12-28-hablar-adolescente-salud-mental.md` (hacia `/autoestima/` y `/sobre-mi/`).
- Build de Jekyll ejecutado sin advertencias ni errores.

## Next
- Definir la creación de agentes y subagentes especializados en SEO, GEO/AEO (IA) y marketing digital para el proyecto.

