import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(projectRoot, 'site');
const outputDir = path.join(projectRoot, 'dist');
const configuredOrigin = process.env.PUBLIC_SITE_ORIGIN;
const confirmedOrigin = process.env.PUBLIC_SITE_ORIGIN_CONFIRMED;

if (!configuredOrigin) {
  throw new Error('Yayın alan adı seçilmeden build yapılmaz. PUBLIC_SITE_ORIGIN değerini ayarlayın.');
}
const normalizedOrigin = configuredOrigin.replace(/\/$/, '');
let parsedOrigin;
try {
  parsedOrigin = new URL(normalizedOrigin);
} catch {
  throw new Error('PUBLIC_SITE_ORIGIN geçerli bir HTTPS origin olmalıdır.');
}
const reservedHostname = new Set([
  'example.com', 'example.net', 'example.org', 'localhost', 'localhost.localdomain',
]);
if (
  parsedOrigin.protocol !== 'https:' ||
  parsedOrigin.origin !== normalizedOrigin ||
  parsedOrigin.username ||
  parsedOrigin.password ||
  parsedOrigin.search ||
  parsedOrigin.hash ||
  reservedHostname.has(parsedOrigin.hostname.toLowerCase()) ||
  /\.(?:invalid|example|test|localhost)$/i.test(parsedOrigin.hostname)
) {
  throw new Error('PUBLIC_SITE_ORIGIN yalnızca gerçek bir HTTPS alan adı origin’i olmalı; yol, kimlik bilgisi ve sorgu içermemelidir.');
}
if (confirmedOrigin !== normalizedOrigin) {
  throw new Error('Yayın alan adını açıkça onaylamak için PUBLIC_SITE_ORIGIN_CONFIRMED değerini origin ile birebir aynı ayarlayın.');
}
const originHostname = parsedOrigin.hostname.toLowerCase();
if (originHostname === 'mersinapartotel.net' || originHostname.endsWith('.mersinapartotel.net')) {
  throw new Error('mersinapartotel.net eski canlı içerik alan adıdır; kullanıcı yeni proje için farklı alan adı kullanacağını belirtti. Bu origin ile build/yayın yapılmaz.');
}

// Keep generated HTML and the WebDev route manifest synchronized from one source.
const pageGenerator = await import('./generate-pages.mjs');
await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(sourceDir, outputDir, { recursive: true });

const manifest = JSON.parse(await readFile(path.join(outputDir, 'manus-routes.json'), 'utf8'));
if (!Array.isArray(manifest.routes)) {
  throw new Error('manus-routes.json bir routes listesi içermelidir.');
}
const routes = manifest.routes.map((entry) => entry?.path);
const requiredRoutes = new Set(['/', ...pageGenerator.pages.map((page) => page.route), '/yasal.html']);
if (routes.length !== requiredRoutes.size || [...requiredRoutes].some((route) => !routes.includes(route))) {
  throw new Error(`Sitemap manifesti tam olarak ana sayfa, yasal sayfa ve ${pageGenerator.pages.length} içerik rotasını içermelidir.`);
}
if (routes.some((route) => typeof route !== 'string' || !route.startsWith('/') || route.startsWith('//') || /[?#\s\\]/.test(route) || route.includes('..'))) {
  throw new Error('manus-routes.json statik sayfalar için geçersiz bir path içeriyor.');
}
if (new Set(routes).size !== routes.length) {
  throw new Error('manus-routes.json içinde yinelenen sayfa rotası var.');
}

function fileForRoute(route) {
  if (route === '/') return path.join(outputDir, 'index.html');
  if (route.endsWith('/')) return path.join(outputDir, route.slice(1), 'index.html');
  if (route.endsWith('.html')) return path.join(outputDir, route.slice(1));
  throw new Error(`Statik klasör rotası / ile bitmeli: ${route}`);
}

const pendingContactRoutes = [];
for (const route of routes) {
  const html = await readFile(fileForRoute(route), 'utf8');
  if (html.includes('contact-pending')) pendingContactRoutes.push(route);
}
if (pendingContactRoutes.length > 0) {
  throw new Error(`Doğru telefon/WhatsApp hedefi doğrulanmadan indexable production build yapılamaz: ${pendingContactRoutes.join(', ')}`);
}

const shareImage = `${normalizedOrigin}/manus-storage/mersin-apart-otel-lobi-resepsiyon_2e39306f.jpeg`;
for (const route of routes) {
  const filePath = fileForRoute(route);
  const html = await readFile(filePath, 'utf8');
  const marker = '<!-- PUBLIC_URL_METADATA -->';
  const previewNoindex = '<meta name="robots" content="noindex, nofollow">';
  if (!html.includes(marker) || !html.includes(previewNoindex)) {
    throw new Error(`SEO metadata yer tutucusu veya Preview noindex etiketi bulunamadı: ${route}`);
  }
  const absoluteUrl = `${normalizedOrigin}${route}`;
  const tags = [
    '<meta name="robots" content="index, follow">',
    `<link rel="canonical" href="${absoluteUrl}">`,
    `<meta property="og:url" content="${absoluteUrl}">`,
    `<meta property="og:image" content="${shareImage}">`,
    '<meta property="og:image:alt" content="Mersin Apart Otel lobi ve resepsiyon alanı">',
    `<meta name="twitter:image" content="${shareImage}">`,
  ].join('\n  ');
  const productionHtml = html
    .replace(previewNoindex, tags.split('\n  ')[0])
    .replace(marker, tags.split('\n  ').slice(1).join('\n  '));
  await writeFile(filePath, productionHtml, 'utf8');
}

const locations = routes.map((route) => `  <url><loc>${normalizedOrigin}${route}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locations}\n</urlset>\n`;
await writeFile(path.join(outputDir, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(
  path.join(outputDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${normalizedOrigin}/sitemap.xml\n`,
  'utf8',
);

console.log(`Statik site ${normalizedOrigin} için hazırlandı: ${routes.length} sayfa; ${outputDir}.`);
