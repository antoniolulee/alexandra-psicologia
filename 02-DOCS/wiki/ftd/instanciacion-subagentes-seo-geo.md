---
author: Antonio Lu Lee
branch: main
status: completed
---
# Instanciación y Configuración de Subagentes GEO/AEO y SEO Clínico

## Intent
Definir, registrar y activar los tres subagentes especializados (`redactor-clinico`, `optimizador-geo`, `auditor-deontologico`) bajo las directrices obligatorias de la Guía Maestra (`02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md`), garantizando un flujo de trabajo predecible y estandarizado para la producción y optimización de contenidos en el sitio web de Alexandra Barroso Psicología.

## Scope
- Crear las definiciones persistentes en `.gemini/agents/redactor-clinico.md`, `.gemini/agents/optimizador-geo.md` y `.gemini/agents/auditor-deontologico.md`.
- Invocar la herramienta `define_subagent` en la sesión de Antigravity para registrar los 3 subagentes en el entorno de ejecución activo.
- Vincular explícitamente en el prompt de cada subagente la consulta obligatoria de `02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md` y `02-DOCS/wiki/seo/arquitectura-enlaces-topic-clusters.md`.
- Actualizar el índice central de conocimiento en `02-DOCS/wiki/index.md` y registrar la decisión en `02-DOCS/wiki/harness/decisions.md`.
- Fuera de alcance: redactar publicaciones completas de blog en esta iteración.

## Checklist
- [x] Crear definición persistente de `redactor-clinico` en `.gemini/agents/redactor-clinico.md` · Archivo creado con prompt especializado
- [x] Crear definición persistente de `optimizador-geo` en `.gemini/agents/optimizador-geo.md` · Archivo creado con reglas BLUF y citabilidad
- [x] Crear definición persistente de `auditor-deontologico` en `.gemini/agents/auditor-deontologico.md` · Archivo creado con checklist DoD y E-E-A-T
- [x] Registrar los 3 subagentes en el entorno en vivo mediante `define_subagent` · Subagentes registrados en Antigravity
- [x] Actualizar `02-DOCS/wiki/index.md` con las referencias a los subagentes · Enlaces incorporados en el mapa
- [x] Registrar la decisión en `02-DOCS/wiki/harness/decisions.md` · Registro histórico actualizado
- [x] Ejecutar build de validación (`bundle exec jekyll build`) · Validación superada con código 0

## Evidence
- Tres definiciones de agentes creadas en `.gemini/agents/` (`redactor-clinico.md`, `optimizador-geo.md`, `auditor-deontologico.md`).
- Tres subagentes registrados y listos para invocación mediante `define_subagent`.
- Mapa de conocimiento `02-DOCS/wiki/index.md` actualizado con la tabla de subagentes.
- Build de Jekyll ejecutado con código de salida 0.

## Next
- Iniciar la ejecución colaborativa de los subagentes para la redacción y optimización del primer artículo estratégico del clúster perinatal o trauma/EMDR.
