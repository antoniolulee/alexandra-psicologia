# Criterios de Revisión de Código (REVIEW.md)

Este documento define las directrices y filtros para revisiones de código en `alexandra-psicologia`.

## 1. Qué constituye un fallo crítico aquí
- Rotura del build de Jekyll (`bundle exec jekyll build` falla).
- Etiquetas HTML no cerradas o markup roto que degrade la renderización o accesibilidad.
- Regresiones de Cumulative Layout Shift (CLS): imágenes `<img>` añadidas sin `width` y `height`.
- Errores de sintaxis en JSON-LD (Schema.org) o ausencia de escape con `jsonify`.
- Filtración de tracking analítico en páginas legales o antes del consentimiento de cookies.
- Commits que incluyan atribuciones automáticas de IA (`Co-Authored-By`).

## 2. Rutas excluidas de la revisión
Omitir durante la revisión de diffs los siguientes ficheros generados o dependencias:
- `_site/**`
- `node_modules/**`
- `.jekyll-cache/**`
- `assets/css/tailwind.css` (fichero compilado, revisar `assets/css/main.css` o `tailwind.config.js`)
- `package-lock.json` y `Gemfile.lock` (salvo cambios deliberados de dependencias)

## 3. Límite de observaciones menores (Nit cap)
- Máximo 3 observaciones estilísticas/menores (nits) por revisión. Si hay más, se priorizan las 3 de mayor impacto y se omiten las restantes.

## 4. Rutas con aprobación humana obligatoria
Estos ficheros nunca deben publicarse sin validación humana directa:
- Textos legales y de privacidad: `legal.md`, `privacidad.md`, `cookies.md`.
- Afirmaciones clínicas, diagnósticas o credenciales sanitarias en `_data/site.yml`, `_data/especialidades/` o páginas de servicios.

## 5. Formato del resumen de revisión
El informe de revisión siempre debe comenzar con el recuento exacto de hallazgos:
> `X findings: Y blockers, Z nits`
