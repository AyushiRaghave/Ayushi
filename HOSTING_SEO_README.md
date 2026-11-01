# Portfolio deployment & SEO handoff

## What is included
- Responsive hardening across the homepage, project pages, storyboards, Promptless and Reading Room.
- Mobile storyboard layouts that allow vertical reading instead of clipping slide content.
- Touch-swipe navigation for all three storyboards; existing arrow-key and in-scene navigation is retained.
- Page-specific titles, meta descriptions, Open Graph basics, Twitter cards and structured data.
- `generate_seo.py` to create domain-correct canonical URLs, `sitemap.xml` and `robots.txt`.
- `robots.txt` default that allows crawling.

## Important: one domain-specific step remains
A real canonical URL and sitemap must use the final public HTTPS domain. The domain was not present in the supplied project files, so no fake domain has been inserted.

After uploading the site files to the final domain, run this from the deployed site root (or run it locally immediately before deployment):

```bash
python generate_seo.py https://www.your-real-domain.com
```

This generates:
- `sitemap.xml` with the seven indexable portfolio URLs
- `robots.txt` with the sitemap location
- canonical URL tags and Open Graph URL tags on every indexable page

Do not use `example.com` in production. Choose one preferred host (`www` or non-`www`) and redirect the other to it over HTTPS.

## Google Search Console
Search Console cannot be activated or ownership verified from a ZIP. After DNS/hosting is configured:
1. Add the domain property in Google Search Console.
2. Verify ownership using the DNS TXT record Google provides (recommended for a domain property), or use the HTML file / meta tag method if you choose a URL-prefix property.
3. Submit `https://YOUR-DOMAIN/sitemap.xml`.
4. Inspect the homepage and each project URL. Request indexing after the site is publicly accessible.
5. Check Page indexing, Core Web Vitals, HTTPS and Mobile Usability / experience reports as data becomes available.

Verification requires access to your domain DNS or hosting account. Search Console data will not appear immediately.

## Keyword targeting
These are intent-led targets mapped to the portfolio's existing case studies and demonstrated work, not claims of verified search volume. Validate actual impressions and queries in Search Console after launch. Do not add services or keywords that the portfolio cannot substantiate.

| Page | Primary query theme | Supporting phrases |
|---|---|---|
| Homepage | product strategist; product strategy and UX | problem discovery, interaction design, web application design, AI product workflows |
| LinkedIn teardown | LinkedIn feed product teardown | feed relevance, product discovery, UX recommendations, user control |
| YouTube PRD | YouTube playlist organizer product requirements | saved videos, playlist workflow, duplicate handling, acceptance criteria |
| Promptless | AI workflow product design | guided AI workflows, AI product prototype, task-based AI tools |
| Forgotten Customer | customer retention strategy | customer reactivation, lifecycle engagement, saved progress, retention experience |
| Personalisation Paradox | role-based personalisation UX | workspace design, role-based dashboard, customer signals, product experience |
| Trust Before Transaction | ecommerce trust and purchase confidence | product evidence, customer decision-making, conversion experience |

### SEO content rules
- Use the mapped phrases naturally in page titles, headings, descriptions and relevant body copy.
- Do not add a `meta keywords` tag; Google does not use it.
- Avoid repeating keyword variants unnaturally. Useful, original case-study content and clear internal links matter more than keyword density.
- Keep project pages linked from the homepage with descriptive anchor text.
- Keep the Reading Room test page `noindex`; it is a standalone inspection copy of embedded content, not a separate search landing page.

## Hosting checklist
- Upload the contents of this folder to the public web root, not the enclosing ZIP folder.
- Configure HTTPS and redirect HTTP to HTTPS.
- Configure one canonical hostname and redirect the alternate hostname.
- Confirm all HTML pages and `/assets/` files return HTTP 200.
- Run `generate_seo.py` with the real domain and upload the generated `sitemap.xml` and `robots.txt`.
- Test links, images, fonts, project navigation, Reading Room, and the contact links on the live domain.
- Add a favicon and a social preview image if you have approved brand assets for them.
- Check the deployed pages with Google Search Console URL Inspection and PageSpeed Insights.

## Final pre-launch verification
The package is prepared for deployment, but hosting configuration is domain-specific. Before launch, verify the canonical host, HTTPS redirects, contact destinations, font loading, navigation and embedded Reading Room on the live domain. Test at minimum 360px, 768px and 1440px viewport widths, plus keyboard-only navigation and reduced-motion settings.

Static checks can catch broken references and syntax issues, but they cannot establish visual quality or real-world performance on every device. Run PageSpeed Insights and Google Search Console after deployment. Do not describe the site as fully production-verified until those live checks pass.


## Portfolio content update
The About section labels the employment-history tab **Corporate experience**. The self-directed 2024–present timeline entry has been removed; product projects remain represented in the Work section.
