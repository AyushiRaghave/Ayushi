# Portfolio website

This repository contains the static portfolio website and is ready to publish with **GitHub Pages**.

## Publish with GitHub Pages

1. Create a GitHub repository. For a personal site, name it `YOUR-USERNAME.github.io`. For a project site, any repository name works.
2. Extract this ZIP and upload the **contents** of the folder to the repository root. Keep `assets/` and all HTML files in their existing locations.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for deployment. GitHub will show the published URL in the Pages settings.

## Included pages

- `index.html` — portfolio homepage
- `linkedin-home-feed.html` — LinkedIn product teardown
- `youtube-playlist-organizer.html` — YouTube playlist organizer
- `promptless.html` — Promptless product page
- `the-forgotten-customer.html` — customer reactivation storyboard
- `the-personalisation-paradox.html` — personalisation storyboard
- `the-trust-before-the-transaction.html` — trust and purchase-confidence storyboard

`readingroom_embedded_check.html` is an inspection copy, not a primary navigation destination.

## Deployment notes

- Do not upload the ZIP as a single file. Upload its extracted contents into the repository root.
- Preserve the folder structure, especially `assets/` and `assets/fonts/`.
- `.nojekyll` is included so GitHub Pages serves the static files without Jekyll processing.
- Asset references are relative, so images and fonts resolve from the GitHub Pages project path.
- `robots.txt` currently allows crawling. A sitemap and canonical URLs have not been generated because the final public domain is not yet known.

## When you connect a custom domain

After choosing the final HTTPS domain (and whether to use `www`), run:

```bash
python generate_seo.py https://www.your-real-domain.com
```

Then commit and push the generated `sitemap.xml`, updated `robots.txt`, and updated canonical/Open Graph URLs. Configure the custom domain and HTTPS in GitHub Pages. Do not run the generator with a placeholder domain.

## After publishing

Test the live homepage and each project/storyboard page, internal navigation, images, custom fonts, contact links, mobile layouts and keyboard navigation. GitHub Pages hosting does not verify Google Search Console ownership or guarantee search ranking; those steps happen after the site is public.
