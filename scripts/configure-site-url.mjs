#!/usr/bin/env node
/**
 * Configure canonical URLs and generate sitemap/robots for a deployed static site.
 * Usage: node scripts/configure-site-url.mjs https://example.com/ [optional-base-path]
 */
import fs from 'node:fs';
import path from 'node:path';

const raw = process.argv[2];
if (!raw) {
  console.error('Usage: node scripts/configure-site-url.mjs https://your-domain.example/');
  process.exit(1);
}
let site;
try { site = new URL(raw); } catch { throw new Error('Provide a valid absolute HTTPS site URL.'); }
if (site.protocol !== 'https:') throw new Error('Production canonical URLs must use HTTPS.');
site.hash = ''; site.search = '';
const base = site.href.endsWith('/') ? site.href : site.href + '/';
const pages = [
  ['index.html', 'weekly', '1.0'],
  ['promptless.html', 'monthly', '0.8'],
  ['linkedin-home-feed.html', 'monthly', '0.7'],
  ['youtube-playlist-organizer.html', 'monthly', '0.7'],
];
for (const [file] of pages) {
  const full = path.resolve(process.cwd(), file);
  if (!fs.existsSync(full)) throw new Error(`Missing expected page: ${file}`);
  let html = fs.readFileSync(full, 'utf8');
  const canonical = `${base}${file === 'index.html' ? '' : file}`;
  html = html.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>\s*/gi, '');
  html = html.replace(/<meta\b[^>]*(?:property|name)=["'](?:og:url|twitter:url)["'][^>]*>\s*/gi, '');
  html = html.replace('</head>', `  <link rel="canonical" href="${canonical}">\n  <meta property="og:url" content="${canonical}">\n</head>`);
  html = html.replace(/<meta\b[^>]*>/gi, tag => {
    if (!/(?:property|name)=["'](?:og:image|twitter:image)["']/i.test(tag)) return tag;
    return tag.replace(/content=(["'])(assets\/social\/[^"']+\.png)\1/i, (_match, quote, asset) => `content="${base}${asset}"`);
  });
  html = html.replace(/("url"\s*:\s*")\{\{SITE_URL\}\}\/?(")/g, `$1${base}$2`);
  html = html.replace(/"@id"\s*:\s*"\{\{SITE_URL\}\}\/#([^"]+)"/g, `"@id":"${base}#$1"`);
  fs.writeFileSync(full, html);
}
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([file,freq,priority]) => `  <url><loc>${base}${file === 'index.html' ? '' : file}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync('sitemap.xml', xml);
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\nDisallow: /docs/\nDisallow: /scripts/\n\nSitemap: ${base}sitemap.xml\n`);
console.log(`Configured ${pages.length} canonical pages for ${base}`);
