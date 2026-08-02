import { createHash } from "node:crypto";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "netlify-dist");
const required = [
  "index.html",
  "404.html",
  "styles.css",
  "site.js",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "_headers",
  "favicon.svg",
  "og-image.jpg",
  "atlas/hero-tablero.webp",
  "atlas/tablero-iluminado.webp",
  "atlas/macro-micro.webp",
  "atlas/atencion-foco.webp",
  "atlas/seguridad-terror.webp",
  "atlas/tablero-interior.webp",
];

await Promise.all(required.map((file) => access(path.join(output, file))));
const html = await readFile(path.join(output, "index.html"), "utf8");
const css = await readFile(path.join(output, "styles.css"), "utf8");
const headers = await readFile(path.join(output, "_headers"), "utf8");
const schemaJson = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || "";
const schemaHash = createHash("sha256").update(schemaJson).digest("base64");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const internalTargets = [...html.matchAll(/\bhref="#([^"]+)"/g)].map((match) => match[1]);
const missingTargets = [...new Set(internalTargets.filter((target) => !ids.includes(target)))];
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

const checks = [
  [html.startsWith("<!doctype html>"), "El documento no tiene un doctype válido."],
  [html.includes('lang="es"'), "Falta el idioma español en el documento."],
  [html.includes('name="viewport"'), "Falta la configuración adaptable de viewport."],
  [html.includes('name="author" content="Angel A. Urbina"'), "Falta la atribución profesional del autor."],
  [html.includes('id="modelo"'), "Falta el modelo esencial de seis palancas."],
  [html.includes('id="tablero"'), "Falta el nuevo atlas visual."],
  [html.includes('id="fuentes"'), "Falta la bibliografía."],
  [html.includes('rel="canonical"'), "Falta la URL canónica."],
  [html.includes('application/ld+json'), "Faltan los datos estructurados."],
  [headers.includes(`'sha256-${schemaHash}'`), "La política CSP no autoriza exactamente los datos estructurados."],
  [!html.includes("onClick="), "El HTML estático conserva eventos de React."],
  [!html.includes("@import \"tailwindcss\""), "El HTML contiene una importación de desarrollo."],
  [!css.includes("@import \"tailwindcss\""), "La hoja estática conserva la importación de Tailwind."],
  [(html.match(/<img\b/g) || []).length >= 6, "No se generaron todas las imágenes editoriales."],
  [(html.match(/<details class="depth-disclosure"/g) || []).length >= 10, "Falta la lectura progresiva de los apartados densos."],
  [(html.match(/<img\b[^>]*\balt=/g) || []).length === (html.match(/<img\b/g) || []).length, "Hay imágenes sin texto alternativo."],
  [missingTargets.length === 0, `Hay enlaces internos sin destino: ${missingTargets.join(", ")}`],
  [duplicateIds.length === 0, `Hay identificadores duplicados: ${duplicateIds.join(", ")}`],
  [[1120, 860, 560, 380].every((width) => css.includes(`@media (max-width: ${width}px)`)), "Faltan puntos de ruptura para ordenador, tableta o móvil."],
  [css.includes("-webkit-overflow-scrolling: touch"), "Las tablas extensas no declaran desplazamiento táctil."],
];

const failures = checks.filter(([passes]) => !passes).map(([, message]) => message);
if (failures.length) throw new Error(failures.join("\n"));

const size = (await stat(path.join(output, "index.html"))).size;
console.log(`Netlify validation passed: ${required.length} files checked, index.html ${size} bytes`);
