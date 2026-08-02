import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "netlify-dist");
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const target = path.resolve(root, relative);
  if (!target.startsWith(`${root}${path.sep}`)) {
    response.writeHead(400).end();
    return;
  }
  try {
    const metadata = await stat(target);
    if (!metadata.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "content-type": mimeTypes[path.extname(target)] || "application/octet-stream" });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    createReadStream(path.join(root, "404.html")).pipe(response);
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
const origin = `http://127.0.0.1:${address.port}`;

try {
  const [home, image, missing] = await Promise.all([
    fetch(`${origin}/`),
    fetch(`${origin}/atlas/tablero-iluminado.webp`),
    fetch(`${origin}/ruta-inexistente`),
  ]);
  const homeHtml = await home.text();
  const checks = [
    [home.status === 200, "La portada no responde con HTTP 200."],
    [home.headers.get("content-type")?.startsWith("text/html"), "La portada no se sirve como HTML."],
    [homeHtml.includes('id="tablero"'), "La portada servida no contiene el atlas visual."],
    [image.status === 200, "La imagen principal no responde con HTTP 200."],
    [image.headers.get("content-type") === "image/webp", "La imagen tiene un tipo MIME incorrecto."],
    [missing.status === 404, "Una ruta inexistente no responde con HTTP 404."],
  ];
  const failures = checks.filter(([passes]) => !passes).map(([, message]) => message);
  if (failures.length) throw new Error(failures.join("\n"));
  console.log("HTTP smoke test passed: HTML, image asset and 404 route");
} finally {
  await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}
