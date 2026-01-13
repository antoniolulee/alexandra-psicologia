# Alexandra Barroso - Psicóloga Clínica

Página web profesional para Alexandra Barroso, Psicóloga Clínica. Construida con Jekyll y optimizada para SEO.

## 🚀 Inicio Rápido

### Requisitos Previos
- Ruby 2.7+
- Bundler (`gem install bundler`)

### Instalación Local

```bash
# Instalar dependencias
bundle install

# Ejecutar servidor de desarrollo
bundle exec jekyll serve

# Abrir http://localhost:4000
```

### Deploy en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch" → main
4. Tu sitio estará en `https://[usuario].github.io/[repo]`

## 📁 Estructura

```
├── _config.yml          # Configuración Jekyll
├── _data/
│   ├── site.yml         # Contenido editable (textos, servicios, etc.)
│   ├── seo.yml          # Configuración SEO
│   ├── design.yml       # Tokens de diseño (colores, tipografía)
│   └── articles.yml     # Artículos del blog
├── _layouts/
│   └── default.html     # Layout principal
├── _includes/           # Componentes reutilizables
├── assets/
│   ├── css/custom.css   # Estilos personalizados
│   └── images/          # Imágenes (añadir aquí)
└── index.html           # Página principal
```

## ✏️ Personalización

### Cambiar Contenido
Edita `_data/site.yml` para modificar:
- Nombre, título, contacto
- Servicios y precios
- Testimonios
- Preguntas frecuentes

### Cambiar Colores
Edita `_data/design.yml` para modificar:
- Paleta de colores (light/dark mode)
- Tipografías
- Espaciado

### Cambiar SEO
Edita `_data/seo.yml` para modificar:
- Meta tags
- Open Graph
- Schema.org

## 📸 Imágenes Requeridas

Añade las siguientes imágenes en `assets/images/`:

- `alexandra-hero.jpg` - Foto Hero (recomendado: 800x1000px)
- `alexandra-about.jpg` - Foto Sobre Mí (recomendado: 600x800px)
- `og-image.jpg` - Open Graph (1200x630px)
- `logos/` - Logos de medios (SVG preferido)

## 🌙 Modo Oscuro

El sitio soporta modo oscuro:
- Detecta automáticamente la preferencia del sistema
- Toggle manual en el header
- Persistencia en localStorage

## 📱 Responsive

- Mobile-first design
- Menú hamburguesa en móvil
- Botones táctiles de mínimo 44px
- Botón WhatsApp flotante siempre visible

## 📈 SEO Incluido

- Meta tags optimizados
- Open Graph y Twitter Cards
- Schema.org JSON-LD (Psychologist)
- Sitemap automático
- Robots.txt

## 📄 Licencia

© 2026 Alexandra Barroso. Todos los derechos reservados.