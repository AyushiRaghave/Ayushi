# Portfolio

A static, multi-page portfolio covering product thinking, UX, digital product concepts and selected work.

## Start here

The homepage is `index.html`. The site also includes three dedicated project pages:

| Page | What it covers |
|---|---|
| `index.html` | Portfolio homepage, experience, services and selected work |
| `linkedin-home-feed.html` | Product teardown of LinkedIn feed controls |
| `youtube-playlist-organizer.html` | Product opportunity analysis and proposed UX |
| `promptless.html` | Promptless, an AI-assisted task workflow prototype |

## Run locally

From this directory, start any static HTTP server and open the local address it provides. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Do not open individual HTML files using `file://` for final testing. A local server more closely matches the deployed environment.

## Deploy with GitHub and Vercel

This is a static HTML/CSS/JavaScript site. It does not require a framework or a build step.

1. Extract the delivery ZIP.
2. Put the **contents of this directory** in the root of your GitHub repository. `index.html` must be at the repository root, alongside `assets/`.
3. Push the changes to GitHub.
4. In Vercel, import the GitHub repository.
5. Set **Framework Preset** to `Other`.
6. Leave the **Build Command** empty.
7. Leave the **Output Directory** as `.` (the repository root).
8. Deploy.

If you keep the site inside a subfolder in your GitHub repository instead, set that folder as Vercel's **Root Directory**. Do not point Vercel at the repository parent while `index.html` is nested below it.

### Expected deployed structure

The deployed root must look like this:

```text
/
├── index.html
├── promptless.html
├── linkedin-home-feed.html
├── youtube-playlist-organizer.html
├── assets/
├── site.webmanifest
├── robots.txt
└── llms.txt
```

Keep `assets/` beside the HTML pages. The pages use relative asset paths; moving the HTML pages or `assets/` into separate folders will break styles, scripts, images and favicons.

### Configure the production domain

After choosing the Vercel production URL, run this from the site root:

```bash
node scripts/configure-site-url.mjs https://your-project.vercel.app/
```

Use your custom domain instead if it is already connected and serving HTTPS. This generates canonical URLs, absolute social preview URLs, `sitemap.xml` and a domain-specific `robots.txt`.

If you change domains later, run the script again from a clean checkout using the new URL, then commit and redeploy.

## Post-deployment checks

Open each URL directly, not just through homepage navigation:

- `/`
- `/promptless.html`
- `/linkedin-home-feed.html`
- `/youtube-playlist-organizer.html`

Then verify:

- CSS, JavaScript, images and favicons load on all four pages.
- Navigation between the homepage and project pages works.
- In-page section links land on the correct headings.
- `/robots.txt`, `/sitemap.xml` and `/llms.txt` load.
- The contact interaction works.
- Promptless's local preview works; live generation requires a separately configured webhook.

## Project notes

- `docs/` contains product and QA notes.
- `launch/` contains the launch plan, checklist and deployment guidance.
- `scripts/configure-site-url.mjs` configures production URLs and generates the sitemap.
- `CHANGELOG.md` records revisions.
- `SECURITY.md` describes the security reporting process.

## Promptless

Promptless is one of the portfolio's featured projects, not the purpose of this repository. It is a task-first interface prototype for shaping a user's request before passing it to a connected AI workflow.

The local examples demonstrate task framing and interface behaviour; they do not call an AI model. Live generation requires a user-configured webhook. See `docs/connected-workflow-contract.md` for the request/response contract and `docs/product-direction.md` for the product direction.

## Evidence and project status

Project pages distinguish product concepts, proposed solutions and prototype behaviour from shipped features or measured outcomes. No customer adoption, production deployment or business impact is implied where it has not been verified.
