---
author: Antonio Lu Lee
branch: main
status: completed
---
# Guía Maestra de GEO/AEO y SEO Clínico E-E-A-T

## Intent
Definir y asentar el estándar normativo de redacción, optimización para motores de respuesta generativa (GEO/AEO) y posicionamiento orgánico clínico bajo directrices E-E-A-T sanitarias, garantizando que los subagentes operen con criterios idénticos, predecibles y deontológicamente seguros.

## Scope
- Redactar la guía maestra completa en `02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md`.
- Estandarizar las reglas de citabilidad por IA (Perplexity, Gemini, ChatGPT Search): formato BLUF (Bottom Line Up Front), densidad fáctica, tablas de síntesis y fragmentos atómicos.
- Establecer las salvaguardas ético-sanitarias YMYL (E-E-A-T): lenguaje no patologizante, límites deontológicos, disclaimers obligatorios y recursos de emergencia (024, 717 003 717, 112).
- Delimitar las directrices y contratos operativos para los 3 subagentes de contenido y SEO.
- Registrar la nueva guía en el índice central `02-DOCS/wiki/index.md`.
- Fuera de alcance: instanciar el código o prompts de los subagentes (fase posterior) o redactar nuevos posts de blog.

## Checklist
- [x] Crear el documento normativo en `02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md` · Documento redactado con especificaciones técnicas completas
- [x] Actualizar el mapa de conocimiento en `02-DOCS/wiki/index.md` · Enlace y descripción incorporados
- [x] Registrar la decisión en `02-DOCS/wiki/harness/decisions.md` · Entrada añadida al registro histórico
- [x] Verificar consistencia documental y validar compilación del sitio (`bundle exec jekyll build`) · Validación superada con código 0

## Evidence
- Archivo `02-DOCS/wiki/seo/guia-maestra-geo-aeo-seo-clinico.md` creado con 6 secciones exhaustivas (fundamentos YMYL, arquitectura GEO/AEO, SEO on-page clínico, contratos para subagentes, disclaimers y DoD de contenido).
- Enlace operativo reflejado en `02-DOCS/wiki/index.md`.
- Decisión técnica archivada en `02-DOCS/wiki/harness/decisions.md`.
- Build de Jekyll ejecutado sin advertencias ni errores (`done in 0.146 seconds`).

## Next
- Proceder a la instanciación de los 3 subagentes autónomos incorporando esta guía como directriz en su contexto o prompt de arranque.
