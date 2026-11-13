---
title: Integración API con Google Search Console
description: Guía de configuración de la Service Account y uso del script gsc-query.mjs para consultar rendimiento de búsqueda.
author: Antonio Lu Lee
date: 2026-11-11
status: active
tags: [seo, search-console, api, tools]
---

# Integración API con Google Search Console

Este documento describe la integración directa con la API de Google Search Console para que el asistente de IA y los subagentes consulten métricas reales de rendimiento (consultas, clics, impresiones, CTR y posiciones medias) sin salir del entorno.

---

## 1. El Script: `01-TOOLS/gsc-query.mjs`

El script está construido en Node.js nativo utilizando los módulos estándar `crypto` y `fetch` (sin dependencias externas añadidas a `package.json`).

### Opciones de ejecución:
```bash
# Consultar las principales palabras clave (últimos 28 días)
node 01-TOOLS/gsc-query.mjs --type queries --limit 25

# Consultar las páginas con más impresiones y clics
node 01-TOOLS/gsc-query.mjs --type pages --limit 20

# Ampliar el período de análisis (ej. últimos 90 días)
node 01-TOOLS/gsc-query.mjs --days 90 --type queries

# Salida en JSON para procesamiento por subagentes
node 01-TOOLS/gsc-query.mjs --type queries --json
```

---

## 2. Pasos para Configurar la Service Account (Google Cloud)

Para que el script tenga acceso de lectura a los datos de `alexandrabarroso.com`:

### Paso 1: Habilitar la API en Google Cloud
1. Entra en [Google Cloud Console](https://console.cloud.google.com/) con tu cuenta `antoniolulee@gmail.com`.
2. Crea un proyecto nuevo (ej. `alexandra-psicologia-seo`) o selecciona uno existente.
3. Ve a **APIs y servicios** $\rightarrow$ **Biblioteca**.
4. Busca **Google Search Console API** y pulsa **Habilitar**.

### Paso 2: Crear la Cuenta de Servicio (Service Account)
1. Ve a **IAM y administración** $\rightarrow$ **Cuentas de servicio**.
2. Pulsa en **+ Crear cuenta de servicio**.
3. Nombre: `gsc-reader` (el ID se generará automáticamente, ej. `gsc-reader@tu-proyecto.iam.gserviceaccount.com`).
4. Pulsa **Crear y continuar** y luego **Listo** (no necesita roles en Google Cloud, solo permisos dentro de Search Console).
5. **Copia el email de la cuenta de servicio creada.**

### Paso 3: Descargar la Clave JSON
1. En el listado de cuentas de servicio, haz clic sobre la que acabas de crear (`gsc-reader`).
2. Ve a la pestaña **Claves** (Keys).
3. Pulsa **Agregar clave** $\rightarrow$ **Crear clave nueva**.
4. Selecciona el formato **JSON** y pulsa **Crear**.
5. Se descargará un archivo en tu ordenador.
6. Renómbralo y colócalo en:
   ```text
   01-TOOLS/keys/gsc-credentials.json
   ```

### Paso 4: Autorizar la Cuenta en Google Search Console
1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Selecciona la propiedad `alexandrabarroso.com`.
3. Ve a **Ajustes** (en el menú lateral izquierdo) $\rightarrow$ **Usuarios y permisos**.
4. Pulsa **Añadir usuario**.
5. Pega el email de la cuenta de servicio (el que termina en `@...iam.gserviceaccount.com`).
6. Permiso: Selecciona **Lector** (no necesita permisos de edición ni propietario).
7. Pulsa **Añadir**.

---

## 3. Seguridad y Privacidad

* La carpeta `01-TOOLS/keys/` y cualquier archivo `*credentials*.json` están estrictamente ignorados en `.gitignore`.
* La clave privada permanece exclusivamente en tu máquina local y jamás se commiteará al repositorio público de GitHub.
