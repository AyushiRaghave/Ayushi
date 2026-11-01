#!/usr/bin/env python3
"""Generate canonical URLs, sitemap.xml and robots.txt for the live domain.

Usage:
  python generate_seo.py https://www.yourdomain.com
Run from the directory containing index.html and the portfolio HTML pages.
"""
import sys, re, json
from pathlib import Path
from urllib.parse import urlparse

if len(sys.argv) != 2:
    raise SystemExit("Usage: python generate_seo.py https://www.yourdomain.com")
site = sys.argv[1].strip().rstrip("/")
parsed = urlparse(site)
if parsed.scheme != "https" or not parsed.netloc:
    raise SystemExit("Use the final HTTPS domain, e.g. https://www.example.com")

pages = [
    "index.html",
    "linkedin-home-feed.html",
    "youtube-playlist-organizer.html",
    "promptless.html",
    "the-forgotten-customer.html",
    "the-personalisation-paradox.html",
    "the-trust-before-the-transaction.html",
]
for filename in pages:
    path = Path(filename)
    if not path.exists():
        raise SystemExit(f"Missing expected page: {filename}")
    html = path.read_text(encoding="utf-8")
    canonical = f'<link rel="canonical" href="{site}/" />' if filename == "index.html" else f'<link rel="canonical" href="{site}/{filename}" />'
    html = re.sub(r'<link\b[^>]*rel=["\']canonical["\'][^>]*>', '', html, flags=re.I)
    html = html.replace("</head>", canonical + "\n</head>", 1)
    og_url = f'<meta property="og:url" content="{site}/" />' if filename == "index.html" else f'<meta property="og:url" content="{site}/{filename}" />'
    html = re.sub(r'<meta\b[^>]*property=["\']og:url["\'][^>]*>', '', html, flags=re.I)
    html = html.replace("</head>", og_url + "\n</head>", 1)
    og_image = f'<meta property="og:image" content="{site}/assets/ayushi-hero.png" />\n<meta name="twitter:image" content="{site}/assets/ayushi-hero.png" />'
    html = re.sub(r'<meta\b[^>]*property=["\']og:image["\'][^>]*>', '', html, flags=re.I)
    html = re.sub(r'<meta\b[^>]*name=["\']twitter:image["\'][^>]*>', '', html, flags=re.I)
    html = html.replace("</head>", og_image + "\n</head>", 1)
    html = re.sub(r'"url"\s*:\s*"\{\{SITE_URL\}\}/"', '"url": '+json.dumps(site+"/"), html)
    path.write_text(html, encoding="utf-8")

urls = [f"{site}/" if f == "index.html" else f"{site}/{f}" for f in pages]
items = "\n".join(f"  <url><loc>{u}</loc></url>" for u in urls)
sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+items+'\n</urlset>\n'
Path("sitemap.xml").write_text(sitemap, encoding="utf-8")
Path("robots.txt").write_text("User-agent: *\nAllow: /\n\nSitemap: "+site+"/sitemap.xml\n", encoding="utf-8")
print("Generated canonical URLs, sitemap.xml and robots.txt for", site)
