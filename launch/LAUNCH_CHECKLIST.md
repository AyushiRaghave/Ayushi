# Production launch checklist

## Release status

**Prepared:** release files, metadata, brand assets, deployment instructions and GTM plan.  
**Not yet production-verified:** domain configuration, hosting deployment, public crawler checks, Search Console, real-device browser QA and live contact path.

A package is not considered publicly launch-ready until all P0 items below are complete.

## P0 — required before public announcement

- [ ] Confirm final HTTPS domain and whether the site is a root domain or repository subpath.
- [ ] Run `node scripts/configure-site-url.mjs https://YOUR-DOMAIN/` from the project root.
- [ ] Confirm generated `sitemap.xml`, `robots.txt`, canonical tags, Open Graph URLs and JSON-LD URLs use the real domain.
- [ ] Deploy to the intended host and force HTTPS.
- [ ] Open all four pages from a clean browser session.
- [ ] Test primary navigation, project links, contact CTA, email link and LinkedIn link.
- [ ] Test Promptless local mode and connected mode separately; verify that local samples are labelled as examples and that the live webhook works before describing it as live.
- [ ] Test at 360px, 390px, 768px, 1024px and 1440px viewport widths.
- [ ] Test keyboard-only navigation, visible focus, Escape/Enter behaviour for custom controls and reduced motion.
- [ ] Test at least one screen reader flow (NVDA or VoiceOver).
- [ ] Check page load, layout shifts, image dimensions and font fallback on a throttled connection.
- [ ] Validate structured data and public social previews after the site is reachable.
- [ ] Confirm the contact email is monitored and the LinkedIn profile is current.
- [ ] Review the privacy/data-handling wording and ensure no test credentials or webhook secrets are in client-side code.

## P1 — within 7 days after launch

- [ ] Verify site ownership in Google Search Console.
- [ ] Submit `/sitemap.xml` in Google Search Console.
- [ ] Verify the site in Bing Webmaster Tools and submit the sitemap.
- [ ] Check indexing and crawl errors after search engines have had time to process the site.
- [ ] Share the site with 5–8 reviewers and complete the comprehension test in the GTM plan.
- [ ] Publish the LinkedIn launch post and update LinkedIn Featured.
- [ ] Send personalised outreach to 8–12 relevant contacts.
- [ ] Record qualified enquiries and recurring questions; do not infer conversion from impressions alone.

## P2 — within 30 days

- [ ] Review search queries, landing pages and referral sources.
- [ ] Improve the page that attracts the wrong audience or fails to explain its value.
- [ ] Publish one useful case-study insight per week.
- [ ] Re-check external references and project facts for accuracy.
- [ ] Decide whether analytics is necessary and, if so, choose a privacy-appropriate provider and document retention/consent settings.

## Release sign-off

- Domain: ______________________________
- Hosting: ______________________________
- Deployed URL: _________________________
- Browser QA owner/date: _________________
- Accessibility QA owner/date: ___________
- Contact path tested/date: ______________
- Public launch approved by/date: ________
