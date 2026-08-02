import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";
import { createHash } from "node:crypto";
import {
  cp,
  mkdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "netlify-dist");
const publicDirectory = path.join(root, "public");
const siteUrl = (process.env.URL || "https://manuales-poder-real.netlify.app").replace(/\/$/, "");
const title = "Los Manuales del Poder Real | Ciencia, filosofía y práctica";
const description =
  "Manual crítico y práctico sobre Maquiavelo, Sun Tzu y Han Feizi, teoría de juegos, sociología, psicología, control social e inteligencia artificial.";

const vite = await createServer({
  appType: "custom",
  configFile: false,
  logLevel: "error",
  plugins: [react()],
  root,
  server: { middlewareMode: true },
});

let renderedPage;
try {
  const pageModule = await vite.ssrLoadModule("/app/page.tsx");
  renderedPage = renderToStaticMarkup(createElement(pageModule.default));
} finally {
  await vite.close();
}

const sourceCss = await readFile(path.join(root, "app", "globals.css"), "utf8");
const staticCss = sourceCss.replace(/^@import\s+"tailwindcss";\s*/m, "");
const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Los Manuales del Poder Real",
  description,
  inLanguage: "es",
  dateModified: "2026-08-02",
  image: `${siteUrl}/og-image.jpg`,
  mainEntityOfPage: `${siteUrl}/`,
  about: ["Poder", "Teoría de juegos", "Filosofía política", "Psicología política", "Control social", "Inteligencia artificial"],
};
const schemaJson = JSON.stringify(schema).replace(/</g, "\\u003c");
const schemaHash = createHash("sha256").update(schemaJson).digest("base64");

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <meta name="theme-color" content="#142b3d">
    <link rel="canonical" href="${siteUrl}/">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="/manifest.webmanifest">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="es_ES">
    <meta property="og:title" content="Los Manuales del Poder Real">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${siteUrl}/">
    <meta property="og:image" content="${siteUrl}/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Los Manuales del Poder Real">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${siteUrl}/og-image.jpg">
    <link rel="stylesheet" href="/styles.css">
    <script type="application/ld+json">${schemaJson}</script>
    <script src="/site.js" defer></script>
  </head>
  <body>${renderedPage}</body>
</html>
`;

const clientScript = `(() => {
  const progress = document.querySelector('.reading-progress');
  const updateProgress = () => {
    if (!progress) return;
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = maximum > 0 ? String((window.scrollY / maximum) * 100) + '%' : '0%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  document.querySelector('[data-action="print"]')?.addEventListener('click', () => window.print());

  const search = document.querySelector('#author-search');
  const cards = Array.from(document.querySelectorAll('.thinker-card[data-search-text]'));
  const grid = document.querySelector('.thinker-grid');
  let empty = document.querySelector('#author-empty');
  if (!empty && grid) {
    empty = document.createElement('p');
    empty.id = 'author-empty';
    empty.className = 'empty-state';
    empty.textContent = 'No hay coincidencias. Prueba con percepción, estrategia, normas o instituciones.';
    empty.hidden = true;
    grid.appendChild(empty);
  }
  const normalize = (value) => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
  search?.addEventListener('input', () => {
    const query = normalize(search.value.trim());
    let visible = 0;
    for (const card of cards) {
      const match = normalize(card.dataset.searchText || '').includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    }
    if (empty) empty.hidden = visible !== 0;
  });
})();
`;

const notFound = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <title>Página no encontrada | Los Manuales del Poder Real</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body class="not-found-page"><main class="not-found-box"><span>404</span><h1>Esta casilla no existe.</h1><p>La dirección solicitada no forma parte del manual. Puedes volver al índice para continuar la lectura.</p><a href="/">Volver al manual →</a></main></body>
</html>
`;

const manifest = {
  name: "Los Manuales del Poder Real",
  short_name: "Poder Real",
  description,
  lang: "es",
  start_url: "/",
  display: "standalone",
  background_color: "#f6f1e7",
  theme_color: "#142b3d",
  icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
};

const netlifyHeaders = `/*
  Content-Security-Policy: default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'self' 'sha256-${schemaHash}'; style-src 'self'; upgrade-insecure-requests
`;

await rm(output, { force: true, recursive: true });
await mkdir(output, { recursive: true });
await cp(publicDirectory, output, { recursive: true });
await Promise.all([
  writeFile(path.join(output, "index.html"), html),
  writeFile(path.join(output, "404.html"), notFound),
  writeFile(path.join(output, "styles.css"), staticCss),
  writeFile(path.join(output, "site.js"), clientScript),
  writeFile(path.join(output, "_headers"), netlifyHeaders),
  writeFile(path.join(output, "manifest.webmanifest"), JSON.stringify(manifest, null, 2)),
  writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`),
  writeFile(
    path.join(output, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc><lastmod>2026-08-02</lastmod></url></urlset>\n`,
  ),
]);

console.log(`Netlify static site generated in ${path.relative(root, output)}`);
