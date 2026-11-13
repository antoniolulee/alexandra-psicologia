---
title: Arquitectura de Enlaces Internos y Topic Clusters SEO (2 Super-Verticales)
description: Modelo definitivo de silos y enlazado interno para los 2 pilares estratégicos de Alexandra Barroso Psicología (Opción A + Vía 1), respaldado por Search Console.
author: Antonio Lu Lee
date: 2026-11-13
status: ratified
tags: [seo, topic-clusters, internal-linking, architecture, option-a, via-1]
---

# Arquitectura de Enlaces Internos y Topic Clusters SEO

Este documento define la estructura definitiva de **Topic Clusters (Hub & Spoke)** consolidada en **2 Super-Verticales (Opción A + Vía 1)** para concentrar la autoridad temática (*Topical Authority*) y transferir *PageRank* hacia las 6 páginas clave respaldadas por los datos reales de Google Search Console (`sc-domain:alexandrabarroso.com`: 4.504 impresiones y 32 clics en los últimos 3 meses).

> **Política Vía 1 (Ocultar sin borrar):** Las 6 páginas activas de los 2 Super-Verticales concentran todo el enlazado interno desde Home, Footer y Blog. Las otras 6 landings históricas (`ansiedad-estres`, `autoestima`, `depresion`, `tdah-adultos`, `toc`, `trastornos-personalidad`) permanecen publicadas fuera de la navegación principal para evitar errores `404` y preservar impresiones ya indexadas (p. ej. `/tdah-adultos/` con 250 impresiones).

---

## 1. Fundamentos del Modelo Topic Cluster (2 Super-Verticales)

```text
                       [ Home / Inicio ]
                               │
           ┌───────────────────┴───────────────────┐
           ▼                                       ▼
[ Pilar 1: Salud Perinatal ]           [ Pilar 2: Trauma, Apego y EMDR ]
  /psicologia-perinatal/                 /terapia-emdr/
           │                                       │
     ┌─────┴─────┐                           ┌─────┴─────┐
     ▼           ▼                           ▼           ▼
[/duelo-gestacional/] [/infertilidad/] [/trauma-apego/] [/duelo/]
     │           │                           │           │
     └─► Posts Blog ◄─┘                      └─► Posts Blog ◄─┘
```

1. **Página Pilar (Pillar / Money Page):** Landing de especialidad de alto valor transaccional que ataca la intención de búsqueda comercial/transaccional (BOFU) con esquema `FAQPage` y `BreadcrumbList`.
2. **Sub-Pilares (Especialidades Satélite):** Landings de nicho integradas directamente dentro de cada Super-Vertical.
3. **Contenido Satélite (Blog Posts / Cluster):** Artículos informacionales que responden a dolores, dudas, síntomas o preguntas frecuentes (TOFU / MOFU).
4. **Hiperenlaces Recíprocos:** Todo artículo satélite enlaza obligatoriamente hacia las 6 páginas activas de los 2 Super-Verticales con texto ancla descriptivo y hacia artículos hermanos del mismo clúster.

---

## 2. Clúster 1: Salud Perinatal y Reproductiva

### A. Estructura Jerárquica y Tracción en Search Console
* **Página Pilar Principal:** `/psicologia-perinatal/` (1.342 impresiones · Target: *salud perinatal online* [pos 17,6], *psicologia perinatal online* [470 imp], *psicóloga perinatal online*, *psicóloga postparto online*)
* **Sub-Pilares / Satélites Transaccionales:**
  * `/duelo-gestacional/` (100 impresiones, pos 17,6 · Target: *duelo gestacional*, *terapia de duelo perinatal*, *muerte perinatal*)
  * `/infertilidad/` (Target: *apoyo psicológico infertilidad*, *psicología reproducción asistida*, *FIV* y *duelo genético*)

### B. Contenidos de Soporte (Blog Posts)

| Título Propuesto | Intención de Búsqueda | Enlace Principal (Anchor) | Enlace Secundario (Anchor) |
|---|---|---|---|
| *Duelo perinatal y gestacional: cómo transitar la pérdida de un bebé* | Emocional / Dolor | `/duelo-gestacional/` ("terapia de duelo perinatal online") | `/psicologia-perinatal/` ("psicología perinatal online") |
| *Baby blues vs. depresión posparto: diferencias, duración y cuándo pedir ayuda* | Informacional (Sintomática) | `/psicologia-perinatal/` ("salud perinatal online") | `/terapia-emdr/` ("terapia EMDR online") |
| *Pensamientos intrusivos en el posparto: miedo a hacer daño a tu bebé* | Psicoeducación clínica | `/psicologia-perinatal/` ("psicóloga postparto online") | `/trauma-apego/` ("regulación del sistema nervioso") |
| *El desgaste psicológico en reproducción asistida (FIV y ovodonación)* **(Publicado: `/blog/impacto-psicologico-reproduccion-asistida-fiv/`)** | Afrontamiento | `/infertilidad/` ("apoyo psicológico en infertilidad y reproducción asistida") | `/duelo-gestacional/` ("duelo gestacional y perinatal") |
| *Superar un parto traumático y violencia obstétrica con EMDR* | Trauma / Solución | `/terapia-emdr/` ("especialista en trauma EMDR online") | `/psicologia-perinatal/` ("acompañamiento perinatal") |

---

## 3. Clúster 2: Trauma, Apego y Terapia EMDR

### A. Estructura Jerárquica y Tracción en Search Console
* **Página Pilar Principal:** `/terapia-emdr/` ("Gigante Dormido": 1.825 impresiones · Target: *terapia emdr online* [453 imp], *psicóloga emdr online* [366 imp], *psicóloga emdr para adultos online* [162 imp], *especialista en trauma emdr online* [160 imp])
* **Sub-Pilares / Satélites Transaccionales:**
  * `/trauma-apego/` (Target: *terapia trauma y apego online*, *sanar apego inseguro*, *heridas de la infancia*)
  * `/duelo/` (783 impresiones · Target: *terapia de duelo online*, *psicóloga duelo online*, *duelo complicado*)

### B. Contenidos de Soporte (Blog Posts)

| Título / Post | Intención de Búsqueda | Enlace Principal (Anchor) | Enlace Secundario (Anchor) |
|---|---|---|---|
| **Existente (Quick Win pos 11,67):** `apego-ansioso-relaciones.md` | Relacional / Identificación | `/trauma-apego/` ("terapia para el trauma y apego") | `/terapia-emdr/` ("terapia EMDR online") |
| *¿Cómo funciona la terapia EMDR online para adultos?* | Técnica / Confianza | `/terapia-emdr/` ("terapia EMDR online para adultos") | `/sobre-mi/` ("psicóloga clínica PIR acreditada") |
| *Trauma con 't minúscula' (Trauma relacional acumulativo): señales que normalizamos* | Concienciación | `/trauma-apego/` ("heridas del vínculo de apego") | `/terapia-emdr/` ("especialista en trauma EMDR") |
| *Por qué hablar del trauma en terapia a veces no es suficiente (y cómo actúa el EMDR)* | Comparativa / Decisión | `/terapia-emdr/` ("psicóloga EMDR especializada en trauma adultos") | `/duelo/` ("terapia de duelo online") |

---

## 4. Reglas de Enlazado Interno (Linking Governance)

1. **Regla de la Pirámide (Upward Link):**
   * Todo artículo de blog debe tener al menos un enlace hacia su página pilar dentro de los primeros tres párrafos (primer tercio del contenido).
   * El texto ancla (*anchor text*) debe ser contextual y descriptivo: evitar frases vacías como "haz clic aquí" o "más información". Usar "salud perinatal online", "terapia de duelo perinatal", "terapia EMDR online para adultos", etc.

2. **Regla de Hermandad Lateral (Sibling Cross-Linking):**
   * Artículos del mismo clúster deben enlazarse entre sí para distribuir el flujo de rastreo (ej. de *Depresión posparto* hacia *Duelo gestacional*).
   * Solo enlazar entre los 2 Super-Verticales cuando exista un puente clínico directo (ej. *Parto traumático* o *Muerte perinatal* hacia `/terapia-emdr/`).

3. **Cierre de Conversión (BOFU Bridge):**
   * Todo post de blog debe terminar con una caja destacada (CTA) que invite a agendar la valoración online con Alexandra, vinculada al pilar correspondiente.

4. **Retorno desde las Páginas Pilar:**
   * Las landing pages de especialidades incluirán preguntas frecuentes (`FAQPage` Schema) y enlaces recíprocos hacia sus páginas hermanas dentro del clúster.

---

## 5. Estado de Enlazado en Posts Existentes

| Post Actual | Enlaces Integrados |
|---|---|
| `2026-11-13-impacto-psicologico-reproduccion-asistida-fiv.md` | Artículo Reproducción Asistida (Bloque 3): tabla comparativa (*Fases de la reproducción asistida y desafíos emocionales*), BLUF 45-65 palabras, 4 FAQs (`FAQPage` Schema), referencias SEF/ESHRE/PubMed/APA, disclaimer sanitario y enlaces a `/infertilidad/`, `/psicologia-perinatal/`, `/duelo-gestacional/`, `/terapia-emdr/`, `/trauma-apego/` y `/blog/duelo-perinatal-gestacional-fases-apoyo/`. |
| `2026-11-13-pensamientos-intrusivos-posparto-miedo-hacer-dano-bebe.md` | Artículo 3 Perinatal: tabla comparativa (*TOC Posparto (egodistónico) vs. Psicosis Posparto (egosintónico)*), BLUF 45-65 palabras, 4 FAQs (`FAQPage` Schema), disclaimer sanitario y enlaces a `/psicologia-perinatal/`, `/trauma-apego/`, `/terapia-emdr/` y `/blog/baby-blues-vs-depresion-posparto-diferencias/`. |
| `2026-11-13-baby-blues-vs-depresion-posparto-diferencias.md` | Artículo 2 Perinatal: tabla comparativa (*Baby Blues vs. Depresión Posparto vs. Psicosis Puerperal*), BLUF 45-65 palabras, 4 FAQs (`FAQPage` Schema), disclaimer sanitario y enlaces a `/psicologia-perinatal/`, `/trauma-apego/`, `/terapia-emdr/` y `/blog/duelo-perinatal-gestacional-fases-apoyo/`. |
| `2026-11-13-duelo-perinatal-gestacional-fases-apoyo.md` | Artículo 1 Perinatal: tabla comparativa, BLUF 45-65 palabras, 4 FAQs (`FAQPage` Schema), disclaimer sanitario y enlaces a `/duelo-gestacional/`, `/psicologia-perinatal/` y `/terapia-emdr/`. |
| `2026-01-05-apego-ansioso-relaciones.md` | Quick Win (pos 11,67): tabla comparativa, bloque FAQ (`FAQPage` Schema) y enlaces a `/trauma-apego/` y `/terapia-emdr/`. |
| `2026-01-10-ansiedad-vs-estres.md` | Mantiene enlace histórico a `/ansiedad-estres/` (Vía 1) y añade enlace hacia `/terapia-emdr/`. |
| `2025-12-28-hablar-adolescente-salud-mental.md` | Mantiene enlaces históricos a `/autoestima/` y `/sobre-mi/` (Vía 1), reforzado con enlace a `/trauma-apego/`. |

