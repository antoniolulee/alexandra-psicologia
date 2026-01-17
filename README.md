# 🧠 Alexandra Barroso - Psicóloga Clínica

Página web profesional para Alexandra Barroso, Psicóloga Clínica Online Colegiada.

> **Stack**: Jekyll (Ruby) + Tailwind CSS v3.4 + Alpine.js + GitHub Pages

---

## � Tabla de Contenidos

1. [Requisitos Previos](#-requisitos-previos)
2. [Instalación Paso a Paso](#-instalación-paso-a-paso)
3. [Comandos Disponibles](#-comandos-disponibles)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Cómo Personalizar](#-cómo-personalizar)
6. [Solución de Problemas](#-solución-de-problemas)
7. [Deploy en Producción](#-deploy-en-producción)

---

## 🔧 Requisitos Previos

Antes de empezar, necesitas instalar estas herramientas en tu ordenador:

### 1. Ruby (para Jekyll)

```bash
# En macOS (con Homebrew):
brew install ruby

# En Windows: Descarga de https://rubyinstaller.org/

# Verificar instalación:
ruby --version   # Debe mostrar 2.7 o superior
```

### 2. Bundler (gestor de gemas de Ruby)

```bash
gem install bundler

# Verificar instalación:
bundler --version
```

### 3. Node.js (para Tailwind CSS)

```bash
# En macOS (con Homebrew):
brew install node

# En Windows: Descarga de https://nodejs.org/

# Verificar instalación:
node --version   # Debe mostrar 18 o superior
npm --version
```

---

## 🚀 Instalación Paso a Paso

Sigue estos pasos **en orden** la primera vez que clones el proyecto:

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/antoniolulee/alexandra-psicologia.git
cd alexandra-psicologia
```

### Paso 2: Instalar dependencias de Ruby (Jekyll)

```bash
bundle install
```

> ⏳ Esto puede tardar 1-2 minutos. Instalará Jekyll y sus plugins.

### Paso 3: Instalar dependencias de Node (Tailwind CSS)

```bash
npm install
```

> ⏳ Esto instalará Tailwind CSS y sus dependencias.

### Paso 4: Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### Paso 5: Abrir en el navegador

```
http://localhost:4000
```

¡Listo! 🎉 Deberías ver la web funcionando.

---

## 💻 Comandos Disponibles

| Comando | Descripción | Cuándo usarlo |
|---------|-------------|---------------|
| `npm run dev` | Inicia Jekyll + Tailwind en modo desarrollo | **Uso diario** para desarrollar |
| `npm run build:css` | Compila Tailwind CSS (minificado) | Antes de hacer deploy |
| `npm run watch:css` | Compila Tailwind CSS y vigila cambios | Si solo trabajas con CSS |
| `bundle exec jekyll serve` | Solo servidor Jekyll (sin Tailwind) | Para debug de Jekyll |
| `bundle exec jekyll build` | Genera sitio estático en `_site/` | Para deploy manual |

### Ejemplo de flujo de desarrollo típico:

```bash
# 1. Abrir terminal en la carpeta del proyecto
cd alexandra-psicologia

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir http://localhost:4000 en tu navegador
# 4. Los cambios se refrescan automáticamente
# 5. Para parar: Ctrl + C
```

---

## 📁 Estructura del Proyecto

```
alexandra-psicologia/
│
├── 📄 _config.yml           # Configuración global de Jekyll
├── 📄 package.json          # Scripts de npm y dependencias
├── 📄 tailwind.config.js    # Configuración de Tailwind CSS
│
├── 📂 _data/                # ⭐ CONTENIDO EDITABLE (YAML)
│   ├── site.yml             # Textos de página principal (index)
│   ├── sobre_mi.yml         # Textos de página "Sobre Mí"
│   ├── seo.yml              # Meta tags, Open Graph, Schema.org
│   ├── design.yml           # Colores, tipografías, espaciado
│   └── articles.yml         # Artículos del blog
│
├── 📂 _includes/            # Componentes HTML reutilizables
│   ├── head.html            # <head> con meta tags y CSS
│   ├── header.html          # Navegación
│   ├── hero.html            # Sección principal (index)
│   ├── about.html           # Resumen "Sobre mí" (index)
│   ├── for-whom.html        # Para quién
│   ├── specialties.html     # Especialidades
│   ├── testimonials.html    # Testimonios
│   ├── faq.html             # Preguntas frecuentes
│   ├── cta.html             # Botón flotante WhatsApp
│   ├── footer.html          # Pie de página
│   │
│   └── 📂 sobre-mi/         # Componentes específicos "Sobre Mí"
│       ├── hero.html        # Hero con imagen y título
│       ├── stats.html       # Estadísticas (años, PIR, etc.)
│       ├── metodologia.html # Enfoque terapéutico
│       ├── trayectoria.html # Formación y experiencia
│       ├── experiencia.html # Visión clínica
│       ├── supervision.html # Para profesionales
│       └── cta.html         # CTA final
│
├── 📂 _layouts/
│   └── default.html         # Layout principal (estructura base)
│
├── 📂 assets/
│   ├── css/
│   │   ├── main.css         # Entrada de Tailwind (directives)
│   │   ├── tailwind.css     # CSS compilado (NO EDITAR)
│   │   └── custom.css       # Estilos personalizados adicionales
│   └── images/              # Imágenes del sitio
│
├── 📂 _site/                # ⚠️ Sitio compilado (AUTOGENERADO)
│
├── 📄 index.html            # Página principal
├── 📄 sobre-mi.md           # Página "Sobre Mí"
├── 📄 robots.txt            # Instrucciones para bots
└── 📄 sitemap.xml           # Mapa del sitio para SEO
```

### Archivos importantes para editar contenido:

| Archivo | Qué contiene | Ejemplo de cambio |
|---------|--------------|-------------------|
| `_data/site.yml` | Contenido de página principal | Cambiar precios, testimonios, FAQs |
| `_data/sobre_mi.yml` | Contenido de página "Sobre Mí" | Editar biografía, trayectoria |
| `_data/seo.yml` | SEO y meta tags | Actualizar título o descripción |
| `_data/design.yml` | Colores y tipografías | Cambiar paleta de colores |
| `assets/images/` | Fotos e imágenes | Añadir foto de perfil |

---

## 🏗️ Arquitectura Modular

### Patrón de Diseño

Este proyecto sigue una arquitectura **modular basada en componentes**:

```
Página (.html/.md) → Includes (componentes) → Datos (YAML)
```

**Ejemplo: `index.html`**
```liquid
{% include hero.html %}        {# Lee de site.data.site.hero #}
{% include about.html %}       {# Lee de site.data.site.about #}
{% include testimonials.html %} {# Lee de site.data.site.testimonials #}
```

**Ejemplo: `sobre-mi.md`**
```liquid
{% include sobre-mi/hero.html %}  {# Lee de site.data.sobre_mi.hero #}
{% include sobre-mi/stats.html %} {# Lee de site.data.sobre_mi.stats #}
```

### Convenciones para Nuevas Páginas

1. **Datos**: Crear `_data/[nombre_pagina].yml` con el contenido
2. **Componentes**: Crear `_includes/[nombre-pagina]/` con los includes específicos
3. **Página**: Crear `[nombre-pagina].md` con solo includes
4. **Acceso a datos**: Usar `site.data.[nombre_pagina].[seccion]`

### Guía para IA

> **IMPORTANTE**: Si eres un asistente de IA trabajando en este proyecto, sigue estas reglas:

1. **Nunca hardcodear texto** en HTML. Siempre usar datos de `_data/*.yml`
2. **Crear componentes reutilizables** en `_includes/` para cada sección visual
3. **Mantener coherencia visual** usando las clases Tailwind existentes (ver `tailwind.config.js`)
4. **Una página = un archivo de datos** (ej: `sobre-mi.md` → `sobre_mi.yml`)
5. **Documentar cambios** actualizando este README si la estructura cambia

---

## ✏️ Cómo Personalizar

### Cambiar textos y contenido

Edita `_data/site.yml`:

```yaml
# Ejemplo: cambiar nombre
identity:
  name: "Tu Nombre"
  title: "Psicóloga Clínica"

# Ejemplo: cambiar precio
services:
  - name: "Terapia Individual"
    duration: "60 min"
    price: "90€"
```

### Cambiar colores

Edita `_data/design.yml` y `tailwind.config.js`:

```javascript
// tailwind.config.js
colors: {
  'primary': '#5d6b5b',      // Verde Salvia (botones, acentos)
  'secondary': '#f9f8f4',    // Crema (fondos)
  'accent': '#b8860b',       // Dorado (detalles)
}
```

### Cambiar número de WhatsApp

En `_data/site.yml`:

```yaml
contact:
  whatsapp: "34600000000"  # Sin + ni espacios
```

### Añadir imágenes

1. Coloca las imágenes en `assets/images/`
2. Referéncialas en `_data/site.yml` o directamente en HTML:

```yaml
# _data/site.yml
about:
  image: "/assets/images/alexandra-about.jpg"
```

### Gestionar Redes Sociales (Instagram/LinkedIn)

Actualmente Instagram y LinkedIn están **desactivados** (ocultos). Para activarlos:

**1. Instagram (Footer):**
Edita `_data/site.yml` y elimina el símbolo `#` al inicio de la línea:

```yaml
contact:
  # Antes (oculto):
  # instagram: "https://instagram.com/..."
  
  # Después (visible):
  instagram: "https://instagram.com/tu-usuario"
```

**2. LinkedIn (SEO Schema):**
Edita `_data/seo.yml`:

```yaml
sameAs:
  # Antes (oculto):
  # - "https://linkedin.com/in/..."
  
  # Después (visible):
  - "https://linkedin.com/in/tu-usuario"
```

---

## 🔧 Solución de Problemas

### ❌ Error: "Tailwind classes not working"

**Causa**: El CSS de Tailwind no se está compilando.

**Solución**:
```bash
# 1. Parar el servidor (Ctrl + C)
# 2. Recompilar CSS
npm run build:css
# 3. Reiniciar servidor
npm run dev
```

### ❌ Error: "bundle: command not found"

**Causa**: Bundler no está instalado.

**Solución**:
```bash
gem install bundler
bundle install
```

### ❌ Error: "Port 4000 already in use"

**Causa**: Ya hay otro servidor corriendo en ese puerto.

**Solución**:
```bash
# Opción 1: Usar otro puerto
bundle exec jekyll serve --port 4001

# Opción 2: Matar el proceso en el puerto 4000
lsof -i :4000  # Ver qué proceso usa el puerto
kill -9 <PID>  # Matar el proceso
```

### ❌ Los estilos no se actualizan

**Causa**: Caché del navegador.

**Solución**: Recarga con `Cmd + Shift + R` (Mac) o `Ctrl + Shift + R` (Windows).

### ❌ Error al instalar gemas en macOS

**Solución**:
```bash
# Instalar herramientas de desarrollo de Xcode
xcode-select --install

# Reintentar
bundle install
```

---

## 🌐 Deploy en Producción

### Opción A: GitHub Pages (Recomendado)

1. **Sube el código a GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deploy"
   git push origin main
   ```

2. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Save

3. **Tu sitio estará en**:
   ```
   https://[tu-usuario].github.io/alexandra-psicologia/
   ```

### Opción B: Build manual

```bash
# 1. Compilar CSS para producción
npm run build:css

# 2. Generar sitio estático
bundle exec jekyll build

# 3. Los archivos están en _site/
# Sube el contenido de _site/ a tu hosting
```

---

## ✨ Características del Diseño

### Paleta de Colores "Quiet Luxury"

| Color | Código | Uso |
|-------|--------|-----|
| Verde Salvia | `#5d6b5b` | Botones, acentos (transmite autoridad y calma) |
| Crema Cálido | `#f9f8f4` | Fondos (transmite calidez) |
| Dorado Mate | `#b8860b` | Detalles sutiles (transmite exclusividad) |

### Tipografía

| Fuente | Familia | Uso |
|--------|---------|-----|
| Playfair Display | Serif | Títulos (elegancia) |
| Lato | Sans-serif | Cuerpo (legibilidad) |
| Allura | Cursiva | Firma personal |

### Funcionalidades

- ✅ **Modo Oscuro**: Detecta preferencia del sistema + toggle manual
- ✅ **Responsive**: Mobile-first, funciona en todos los dispositivos
- ✅ **SEO Optimizado**: Meta tags, Schema.org, Open Graph
- ✅ **Rendimiento**: CSS minificado, imágenes lazy-loaded
- ✅ **WhatsApp**: Botón flotante siempre visible

---

## 📸 Imágenes Requeridas

Añade estas imágenes en `assets/images/`:

| Archivo | Tamaño Recomendado | Uso |
|---------|-------------------|-----|
| `alexandra-hero.jpg` | 800×1000px | Foto principal del hero |
| `alexandra-about.jpg` | 600×800px | Foto sección "Sobre mí" |
| `og-image.jpg` | 1200×630px | Imagen para compartir en redes |
| `logos/*.svg` | Variable | Logos de medios donde aparece |

---

## 📄 Licencia

© 2026 Alexandra Barroso. Todos los derechos reservados.

---

## 🆘 ¿Necesitas Ayuda?

Si usas un asistente de IA (como Cursor, GitHub Copilot, etc.), puedes preguntarle cosas como:

- "¿Cómo cambio el color principal de la web?"
- "Quiero añadir una nueva sección de servicios"
- "¿Cómo subo esto a producción?"

La estructura de este proyecto está diseñada para que sea fácil de entender tanto para humanos como para IAs.
