# Los Manuales del Poder Real

Sitio editorial en español sobre poder, influencia y control social. Compara a Maquiavelo, Sun Tzu y Han Feizi con tradiciones políticas de distintas culturas, sociología contemporánea, psicología social e inteligencia artificial.

La edición 2.1 incorpora un atlas visual elaborado a partir de *The Illuminated Board* y *The Power Blueprint*, además de una revisión crítica del *Manual Práctico del Poder*. Integra teoría de juegos, BATNA, diseño de mecanismos, señales, compromisos, coaliciones y juegos repetidos; amplía la psicología del poder y añade protocolos responsables para organizaciones, negociación y crisis.

El material se presenta con atribución, cautelas empíricas y una separación explícita entre descripción, explicación científica, juicio normativo y aplicación práctica. El criterio editorial es comprender las dinámicas de poder para reconocerlas, ejercer autoridad legítima, limitarlas y resistir abusos; no para explotar vulnerabilidades.

## Publicar en Netlify desde GitHub

1. Crea un repositorio vacío en GitHub y sube el contenido de este proyecto.
2. En Netlify, elige **Add new site → Import an existing project** y conecta el repositorio.
3. Netlify leerá automáticamente `netlify.toml`:
   - comando: `npm run build:netlify`
   - directorio publicado: `netlify-dist`
   - Node.js: `22.13.0`
4. Publica. En producción, Netlify proporciona la variable `URL`, que el generador utiliza para la URL canónica, el sitemap y las etiquetas sociales.

No hacen falta funciones, base de datos ni variables secretas. Para un dominio propio, configúralo en **Domain management**; el siguiente despliegue actualizará automáticamente los metadatos canónicos.

## Desarrollo local

Requisitos: Node.js 22.13 o posterior y npm.

```bash
npm ci
npm run dev
```

Para construir exactamente la versión estática que publicará Netlify:

```bash
npm run build:netlify
npm run validate:netlify
npm run smoke:netlify
```

Abre `netlify-dist/index.html` mediante un servidor HTTP local; no directamente con `file://`, porque los recursos usan rutas desde la raíz.

```bash
npx serve netlify-dist
```

## Estructura principal

- `app/page.tsx`: contenido, navegación e interfaz del manual.
- `app/manual-data.ts`: autores, tradiciones, casos, glosario y bibliografía.
- `app/globals.css`: sistema visual y estilos adaptables e imprimibles.
- `public/atlas/`: imágenes optimizadas procedentes de los materiales aportados.
- `scripts/build-netlify.mjs`: render estático, metadatos SEO, sitemap y recursos.
- `scripts/validate-netlify.mjs`: controles de integridad y accesibilidad básicos.
- `scripts/smoke-netlify.mjs`: prueba HTTP de la portada, las imágenes y la página 404.
- `netlify.toml`: compilación, cabeceras de seguridad y caché.
- `.github/workflows/validate-netlify.yml`: validación automática en GitHub Actions.

## Actualizar contenido

La página se mantiene en React/TSX para conservar una única fuente editorial. El generador de Netlify la renderiza como HTML estático y añade JavaScript mínimo para el progreso de lectura, la búsqueda de autores y la impresión.

Después de cualquier cambio:

```bash
npm run build:netlify
npm run validate:netlify
npm run smoke:netlify
```

## Accesibilidad y privacidad

- Navegación semántica, jerarquía de encabezados y textos alternativos.
- Diseño adaptable, impresión limpia y respeto a `prefers-reduced-motion`.
- Sin analítica, cookies, formularios ni recursos de terceros.
- Política de seguridad de contenido y cabeceras defensivas configuradas en Netlify.

## Derechos del material visual

Las imágenes de `public/atlas/` derivan de los dos archivos aportados para esta edición. Antes de publicar el repositorio con una licencia abierta, confirma que tienes derecho a redistribuir esos materiales y define una licencia compatible. El código y el contenido no incluyen por defecto una concesión de derechos.
