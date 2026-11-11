---
type: constitution
title: Alexandra Barroso Psicología — Constitution
description: The non-negotiable principles every development and content phase obeys.
tags: [sdd, constitution]
timestamp: 2026-11-11T20:22:00Z
topic: sdd
version: v1.0.0
status: ratified
---

# Alexandra Barroso Psicología — Constitution

> Version: v1.0.0 · Ratified: 2026-11-11 · Last amended: 2026-11-11
> The non-negotiable principles every rsc-sdd phase obeys.

## 1. Stack canon

1. **Runtimes & Engine:** Ruby 3.x (Jekyll 3.10+) and Node.js 18+ (Tailwind build pipeline). Pinned via `Gemfile.lock` and `package-lock.json`.
2. **Fixed Frameworks:** Jekyll (SSG para GitHub Pages) + Tailwind CSS v3.4 + Alpine.js v3.x.
3. **Dependency lock:** `Gemfile.lock` y `package-lock.json` siempre versionados y commiteados.

## 2. Quality bar

4. **Zero-error build:** `bundle exec jekyll build` debe completarse sin advertencias ni fallos.
5. **CSS Compilation:** `npm run build:css` debe generar `assets/css/tailwind.css` minificado y purgado.
6. **Schema Validation:** Todo marcado Schema.org JSON-LD debe ser sintácticamente válido y sanitizado con `jsonify`.

## 3. Conventions

7. **Modularidad arquitectónica:** Datos estructurados en `_data/`, componentes reusables en `_includes/`, plantillas en `_layouts/`, y contenido en `_posts/` o `especialidades/`.
8. **Commits semánticos:** Convención Conventional Commits (`feat:`, `fix:`, `perf:`, `refactor:`, `docs:`, `chore:`).

## 4. Branching & shipping

9. **Trunk / Feature workflow:** Desarrollo en ramas temáticas (`feature/*`, `content/*`, `fix/*`) con integración a `main`. Deploy automatizado mediante GitHub Pages.
10. **Autoría humana exclusiva:** Commits y autoría atribuibles al usuario responsable (`Antonio Lu Lee`). Prohibido añadir atribuciones o footers de asistencia IA (`Co-Authored-By`).

## 5. Security & privacy floor

11. **Cumplimiento RGPD/LOPD:** Consentimiento explícito de cookies antes de tracking analítico. Las páginas legales (`/legal/`, `/privacidad/`, `/cookies/`) se configuran con `robots: noindex, nofollow` y `track: false`.
12. **Cero credenciales en repositorio:** Ninguna clave privada o secreto se commitea en el repositorio.

## 6. UX & accessibility floor

13. **Accesibilidad mínima WCAG 2.1 AA:** Contraste tipográfico >= 4.5:1, áreas de toque >= 44x44px, foco visible (`focus-visible`) y soporte para `prefers-reduced-motion`.
14. **Dark Mode resiliente:** Detección de preferencia de sistema con override manual persistido en `localStorage` sin saltos visuales (FOUC).

## 7. Performance budgets

15. **Zero CLS (Cumulative Layout Shift = 0):** Toda etiqueta `<img>` debe declarar dimensiones explícitas `width` y `height`.
16. **Optimización LCP:** Imagen hero principal precargada (`rel="preload"`) y carga asíncrona de fuentes externas.

## 8. Knowledge & decisions

17. **Registro de decisiones:** Toda decisión técnica o de diseño relevante se añade a `02-DOCS/wiki/harness/decisions.md`.

---

## Definition of Done (DoD)

Un cambio solo está listo para merge y producción cuando:

- [ ] `bundle exec jekyll build` compila con código 0.
- [ ] `npm run build:css` compila sin errores y con purga aplicada.
- [ ] No hay regresiones de layout shift (imágenes con `width` y `height`).
- [ ] Schemas JSON-LD validados sin fallos de parseo.
- [ ] Páginas legales excluidas de indexación y tracking.
- [ ] Commits formateados bajo Conventional Commits y sin atribuciones de IA.
- [ ] Decisiones de arquitectura añadidas al log.

---

## Amendment log (append-only)

| Date | Version | Change | Why |
|------|---------|--------|-----|
| 2026-11-11 | v1.0.0 | Ratificación formal de la constitución del proyecto. | Aprobada por el usuario responsable para gobernar las fases de desarrollo ASDD. |
