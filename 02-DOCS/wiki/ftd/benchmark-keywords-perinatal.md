---
author: Antonio Lu Lee
branch: main
status: completed
---
# FTD — Benchmark de Competidores y Estrategia de Palabras Clave: Salud Perinatal, Muerte Perinatal y Posparto

## Intent
Investigar a los principales competidores del sector de la psicología perinatal en España (*Somos Estupendas*, *Instituto Europeo de Salud Mental Perinatal*, *Mamá No Estás Sola*, *Umamanita*, etc.), extraer sus palabras clave informacionales más rentables y definir un documento estratégico con la hoja de ruta de los 10 artículos clave para dominar el vertical orgánicamente y alimentar las páginas transaccionales de Alexandra Barroso Psicología.

## Scope
- Investigar mediante búsqueda web las plataformas y artículos mejor posicionados en España sobre: salud perinatal, muerte/pérdida perinatal, duelo gestacional y posparto.
- Documentar el benchmark de competidores con fortalezas, debilidades y brechas de contenido en `02-DOCS/wiki/seo/benchmark-articulos-salud-perinatal.md`.
- Construir la matriz de palabras clave con volúmenes estimados, intención de búsqueda, dificultad y URLs destino.
- Diseñar la hoja de ruta editorial priorizada con los 10 artículos informacionales específicos para conquistar el nicho.
- Actualizar el índice central de conocimiento en `02-DOCS/wiki/index.md`.
- Validar la integridad del sitio web mediante `bundle exec jekyll build`.

## Checklist
- [x] Análisis de competidores y búsqueda web en el mercado español · Completado
- [x] Creación del documento canónico de benchmark y keywords en `02-DOCS/wiki/seo/benchmark-articulos-salud-perinatal.md` · Completado
- [x] Definición de los 10 artículos informacionales con títulos H1, slugs, estructura y enlaces internos · Completado
- [x] Actualización del mapa de conocimiento en `02-DOCS/wiki/index.md` · Completado
- [x] Verificación del build estático de Jekyll · Completado sin errores

## Evidence
- Archivo de estrategia `02-DOCS/wiki/seo/benchmark-articulos-salud-perinatal.md` generado con 8 secciones completas, matrices de keywords y arquitectura BLUF/GEO.
- Mapa de conocimiento `02-DOCS/wiki/index.md` enlazando el nuevo informe de benchmark y el FTD correspondiente.
- Compilación `bundle exec jekyll build` ejecutada con éxito en 0.29s sin advertencias.

## Next
- Iniciar la redacción clínica del Artículo 1 (*Duelo perinatal y gestacional*) mediante el subagente `redactor-clinico` siguiendo la guía maestra E-E-A-T.
