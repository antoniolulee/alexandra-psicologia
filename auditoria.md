# Auditoría Técnica y SEO - Alexandra Barroso Psicología

## Resumen Ejecutivo

El proyecto es un sitio web profesional para una psicóloga clínica, construido con **Jekyll** + **TailwindCSS** + **Alpine.js**. En general, está muy bien estructurado con una buena base SEO, pero existen oportunidades de mejora tanto técnicas como de posicionamiento.

---

## Estado Actual

### Stack Tecnológico
- **Framework**: Jekyll (GitHub Pages compatible)
- **CSS**: TailwindCSS (compilado a 54KB)
- **JavaScript**: Alpine.js (modo oscuro, colapsables, menú móvil)
- **Fuentes**: Google Fonts (Playfair Display, Lato, Allura)
- **Analytics**: Google Analytics 4 configurado

### Estructura de Contenido
- 1 página principal (`index.html`)
- 1 página "Sobre Mí" completa
- 2 landing pages de especialidades (EMDR, Perinatal)
- 3 artículos de blog
- 3 páginas legales (Legal, Privacidad, Cookies)

---

## 🟢 Puntos Fuertes

### SEO
1. **Schema.org completo** - JSON-LD bien estructurado con tipo `Psychologist`
2. **Open Graph y Twitter Cards** configurados correctamente
3. **Meta tags dinámicos** por página (title, description)
4. **Canonical URLs** implementadas
5. **robots.txt y sitemap.xml** presentes
6. **Google My Business integrado** (coordenadas de Valencia)
7. **Keywords bien elegidas** en `seo.yml`

### Técnico
1. **Preload de la imagen LCP** (hero) para mejorar rendimiento
2. **Fuentes cargadas de forma no bloqueante** (print onload pattern)
3. **Dark mode** con persistencia en localStorage
4. **Diseño responsive** completo
5. **Accesibilidad básica**: focus-visible, touch targets de 44px
6. **prefers-reduced-motion** respetado
7. **Arquitectura modular** con _includes y _data separados

---

## 🔴 Mejoras Críticas

### SEO

#### 1. Falta `hreflang` para contenido bilingüe
El Schema indica `availableLanguage: ["Spanish", "English"]` pero no hay implementación `hreflang`. Si se ofrecen servicios en inglés, debería existir contenido o al menos indicar idioma alternativo.

**Recomendación**: O eliminar "English" del Schema, o añadir meta hreflang si hay planes de internacionalización.

---

#### 2. Imágenes sin atributo `alt` descriptivo en algunos casos
Algunas imágenes usan el nombre de la persona como alt, pero no describen el contenido visual.

**Impacto**: SEO de imágenes y accesibilidad.

---

#### 3. Solo 3 artículos de blog
El blog es esencial para SEO de long-tail keywords. Con solo 3 artículos, el potencial de tráfico orgánico es limitado.

**Recomendación**: Crear calendario editorial con al menos 2-4 artículos mensuales.

---

#### 4. Solo 2 landing pages de especialidades
El Schema lista 12+ especialidades (`knowsAbout`) pero solo existen 2 landing pages.

**Recomendación prioritaria**: Crear landing pages para las especialidades faltantes (ansiedad, duelo, tdah, etc.). Cada una de estas es una keyword de alto valor.

---

#### 5. Falta breadcrumb Schema en posts
Los posts tienen breadcrumb visual pero no Schema `BreadcrumbList`.

**Impacto**: Los breadcrumbs no aparecerán en los resultados de Google.

---

#### 6. No hay FAQ Schema en la página principal
La sección FAQ existe pero no está marcada con `FAQPage` Schema.

**Impacto**: Perdes los rich snippets de FAQ en Google.

---

### Técnico

#### 7. CSS TailwindCSS sin purgar más agresivamente
El archivo `tailwind.css` tiene **54KB**. Para un sitio de este tamaño, debería ser ~15-25KB.

---

#### 8. Imágenes en WebP ✓ pero sin dimensiones explícitas
Falta `width` y `height` en los `<img>` tags.

**Impacto**: Causa CLS (Cumulative Layout Shift) que afecta Core Web Vitals.

---

#### 9. Falta página 404 personalizada
No se detectó un archivo `404.html` o `404.md`.

---

## 🟡 Mejoras Recomendadas

| Prioridad | Mejora | Impacto Estimado |
|-----------|--------|------------------|
| **Alta** | Crear más landing pages de especialidades | +30-50% tráfico orgánico |
| **Alta** | Añadir FAQPage Schema | Rich snippets en SERPs |
| **Alta** | Más contenido de blog (SEO content) | Long-tail keywords |
| **Media** | BreadcrumbList Schema en posts | Mejor CTR en resultados |
| **Media** | Optimizar imágenes con width/height | Mejor Core Web Vitals |
| **Baja** | Añadir reviews/testimonios Schema | Social proof en SERPs |

---

## Resumen de Prioridades

### Sprint 1 (SEO rápido)
1. ✍️ Añadir FAQPage Schema
2. ✍️ Corregir "Quanto" → "Cuánto" en FAQ
3. ✍️ Añadir width/height a imágenes

### Sprint 2 (Contenido)
1. 📝 Crear 3-5 landing pages de especialidades adicionales
2. 📝 Escribir 4 artículos de blog nuevos
3. ✍️ Añadir BreadcrumbList Schema

### Sprint 3 (Performance)
1. 🔧 Optimizar TailwindCSS (reducir bundle)
2. 🔧 Crear 404.html
3. 🔧 Lazy loading images
