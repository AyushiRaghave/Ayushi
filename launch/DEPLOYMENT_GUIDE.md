# Deployment guide: GitHub to Vercel

## Site type

This repository is a static multi-page website built with HTML, CSS and JavaScript. It has no framework-specific build step.

## 1. Keep the deployment root correct

The directory Vercel deploys must contain `index.html` and `assets/` at the same level.

If the repository itself contains the site files, use the repository root as Vercel's Root Directory.

If the repository contains a wrapper folder (for example, `gtm_work/`) and the site files are inside it, set `gtm_work` as Vercel's Root Directory. Do not deploy the parent directory while leaving the homepage nested one level below it.

## 2. Import the GitHub repository into Vercel

In the Vercel project settings use:

- Framework Preset: `Other`
- Root Directory: the directory containing `index.html`
- Build Command: empty
- Output Directory: `.` (the selected project root)
- Install Command: empty

No build command or dependency installation is required for this static site.

## 3. Configure production URLs

After the Vercel deployment has a stable HTTPS URL, run this command from the directory containing the four HTML pages:

```bash
node scripts/configure-site-url.mjs https://your-project.vercel.app/
```

Use your connected custom domain instead if it is already active over HTTPS. Commit the generated HTML metadata, `sitemap.xml` and updated `robots.txt`, then push to GitHub so Vercel redeploys.

If the domain changes, rerun the script from a clean checkout using the new canonical URL.

## 4. Verify all routes and assets

Test each page directly:

- `/`
- `/promptless.html`
- `/linkedin-home-feed.html`
- `/youtube-playlist-organizer.html`

On each page, inspect the browser Network panel and confirm there are no 404 responses for local CSS, JavaScript, images, fonts or favicon files.

Also test page-to-page navigation, in-page anchor links, keyboard interactions, the contact form and Promptless's local preview.

## 5. Verify discoverability files

Confirm these URLs load:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

The sitemap and canonical URLs must use the real production domain.

## 6. Rollback

Keep the previous successful Vercel deployment available. If a launch blocker appears, promote the previous deployment, fix the issue in GitHub, and redeploy. Avoid editing production files manually.
