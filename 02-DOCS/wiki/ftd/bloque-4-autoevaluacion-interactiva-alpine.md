---
author: Alexandra Barroso
branch: main
status: completed
lane: FTD
date: 2026-11-13
---
# FTD — Bloque 4: Autoevaluación Clínica Orientativa Interactiva en Alpine.js

## Intent
Diseñar e implementar una herramienta interactiva de orientación clínica no diagnóstica en **Alpine.js** (`#autoevaluacion`) para acompañar especialmente a mujeres que navegan de noche o desde el móvil con dudas sobre si pedir ayuda, ayudarlas a situar su momento actual y orientarlas hacia el área clínica adecuada y una primera toma de contacto por WhatsApp, garantizando privacidad local en navegador, coherencia estética con el sitio web y contención deontológica (`024`, `717 003 717`, `112`).

## Scope
- **Incluido:**
  - Soporte `[x-cloak]` en `assets/css/main.css` para evitar parpadeos (FOUC) y desplazamientos de diseño (CLS) antes de inicializar Alpine.js.
  - Configuración editorial, clínica y deontológica centralizada en `_data/autoevaluacion.yml` con **3 pasos breves** (`etapa`, `sintoma`, `interferencia`), eliminando la fase 4 comercial/marketiniana.
  - Rediseño visual e interactivo en `_includes/autoevaluacion.html` alineado con el sistema de diseño editorial del sitio (`bg-secondary`, tarjetas `rounded-lg`, bordes `1px`, acento superior `from-primary to-accent`, tipografía `font-heading`, grid en 2 columnas en escritorio y Dark Mode WCAG AA).
  - Corrección del bug de `x-model` con `:value` en `<template x-for>` mediante renderizado estático Liquid de `<fieldset>`, `<legend>` y `<input type="radio">` con atributos `value` nativos y enlace `:checked` + `@change="selectOption(...)"`.
  - Integración en `index.html` y actualización del microcopy en `_includes/for-whom.html` y `_layouts/especialidad.html` (`1 min`).
  - Verificación de build CSS/Jekyll, estructura estática del DOM, lógica de las 5 ramas en Node, JSON-LD válido (`JSON.parse()`), Zero CLS (`width` y `height` en `<img>`) y evaluación `npx @ericrisco/rsc risk`.
- **Excluido:**
  - Envío o almacenamiento de respuestas clínicas en servidores o cookies de terceros (el procesamiento ocurre 100% en memoria local del navegador).
  - Diagnósticos automatizados, textos promocionales invasivos o promesas de curación.

## Checklist
- [x] Consultar `modern-web-guidance` para accesibilidad en formularios multipaso y grupos de opciones · Consultadas guías `forms`, `brand-consistent-forms` y `accessibility`
- [x] Actualizar FTD `02-DOCS/wiki/ftd/bloque-4-autoevaluacion-interactiva-alpine.md` · Documento actualizado con el rediseño de 3 pasos y la corrección de Alpine.js
- [x] Centralizar los 3 pasos clínicos y textos sobrios en `_data/autoevaluacion.yml` · Eliminada la fase 4 y definidos `steps` (`etapa`, `sintoma`, `interferencia`)
- [x] Rediseñar `_includes/autoevaluacion.html` con renderizado estático Liquid, estilo editorial del sitio y JS Alpine sin `x-model` sobre `:value` · HTML estático con radios nativos, diseño coherente, `totalSteps: 3` y 5 ramas clínicas funcionales
- [x] Ajustar microcopy de duración (`1 min`) en `_includes/for-whom.html` y `_layouts/especialidad.html` · Enlaces coherentes con los 3 pasos
- [x] Ejecutar `npm run build:css`, `bundle exec jekyll build`, validación `node -e` sobre `_site/` y `npx @ericrisco/rsc risk` · Build con código 0, DOM estático verificado, JSON-LD válido, Zero CLS y Tier 1 registrado

## Evidence
- `npm run build:css`: compilado `./assets/css/tailwind.css` en `370ms` con código `0`; verificadas en CSS las utilidades nuevas (`py-1.5`, `h-1.5`, `min-h-[52px]`, `min-h-[48px]`, `min-h-[44px]`, `bg-primary/5`, `border-primary/40`, `dark:bg-dark-secondary-alt`).
- `bundle exec jekyll build`: generado `_site/` (`26` archivos HTML) en `0.106s` con código `0`.
- Validación `node -e` sobre `_site/`:
  - `missingRadios: []`, `hasNecesidad: false`, `hasTemplateForRadios: false`, `hasXModelOnRadio: false` en `_site/index.html`.
  - Validación funcional de `autoevaluacionClinica('34644873567')`: `totalSteps === 3`, bloqueo con aviso accesible al avanzar sin selección, las 5 ramas (`perinatal+impacto_medico`, `perinatal+hipervigilancia`, `infertilidad+tristeza_culpa`, `duelo_perinatal+tristeza_culpa`, `trauma_apego+desgaste_relacional`) con `missingTargetPages: []`, y `whatsappUrl()` integrando de forma coherente las 3 respuestas (`etapa`, `sintoma`, `interferencia`) más la orientación sugerida.
  - Auditoría global de `_site/`: `64` bloques `<script type="application/ld+json">` válidos (`jsonLdErrors: []`), `0` violaciones Zero CLS (`clsViolations: []`) y `0` enlaces internos rotos (`brokenLinks: []`).
- `npx --offline @ericrisco/rsc risk`: evaluado como `tier 1` (`classes: default, docs`, `reviewers: 1`, `human approval: not required`).

## Next
- Revisar visualmente la sección `#autoevaluacion` en el navegador (móvil/escritorio y modo claro/oscuro) para confirmar la experiencia interactiva final.
