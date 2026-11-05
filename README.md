# Promptless

Promptless is a task-first interface for getting useful work out of connected AI workflows. It helps people frame a task, provide relevant context and pass a structured request to an AI workflow without having to design the prompt themselves.

## Product principles

- Start with the user's job, not prompt syntax.
- Ask for the minimum context needed to produce a useful result.
- Make outputs task-specific and reviewable.
- Keep facts, assumptions and missing evidence distinct.
- Make the local example mode honest: it demonstrates the workflow and output structure; it does not call an AI model.
- Let users explicitly save work to this device. Do not persist task content without their action.
- Preserve form drafts when people switch workflows.
- Let users carry a result into a related workflow without copying it manually.
- Treat connected workflow output as a draft to review, not a guaranteed correct answer.

## Included workflows

| Workflow | Intended deliverable | Local example limitation |
|---|---|---|
| Email Writer | A relevant email draft with a clear next step | Uses supplied text and a deterministic email structure |
| Thread Generator | A connected thread draft using supplied points | Does not invent supporting facts; user must provide the key points |
| Prompt Builder | A reusable instruction with context, constraints and acceptance criteria | Builds the instruction locally; does not execute it |
| Webpage Builder | A responsive, self-contained HTML page | Creates a starting page from the brief; copy, claims and links need review |
| Brief Generator | An executable project brief | Structures supplied information and highlights open decisions |
| Problem Solver | A problem frame and testable next step | Organises the problem; does not diagnose on its own its cause |
| Workaround Finder | Contextual alternative routes around a blocker | Uses rule-based suggestions; validate permissions and technical feasibility |
| Reflection & Next Step | A practical reflection and manageable action | Not therapy, mental-health advice or crisis support |
| Compare & Decide | A comparison framework and evidence gaps | Does not browse or verify on its own evidence in local mode |
| Message Refiner | Lightly cleaned message variations | Local mode performs limited rule-based cleanup, not semantic AI rewriting |

## Running locally

Serve this folder from a local static web server and open `promptless.html`. A file:// preview may work, but a local server is more reliable for browser storage and integration testing.

Without a configured workflow, Promptless produces clearly labelled local examples. They are not AI-generated answers.

## Connected workflow contract

Promptless sends a JSON `POST` to the configured webhook:

```json
{
  "toolType": "cold_email",
  "product": "Promptless",
  "schemaVersion": 1,
  "task": {
    "name": "Email Writer",
    "intendedDeliverable": "A sendable email draft with a relevant opening, clear reason for contact and a natural next step.",
    "suitableFor": "Introductions, partnership requests and thoughtful follow-ups.",
    "qualityBar": [
      "Uses only supplied facts",
      "Makes the reason for contact specific",
      "Ends with a natural, low-friction next step"
    ]
  },
  "input": {
    "recipient": "A product leader at a B2B software company",
    "objective": "Introduce my product work and explore a relevant opportunity",
    "context": "A short, relevant background detail",
    "next_step": "a short conversation",
    "tone": "Professional"
  }
}
```

The endpoint should return JSON with one non-empty result field:

```json
{
  "output": "The complete generated deliverable..."
}
```

Accepted result keys are `output`, `content`, `text`, `answer`, `completion` or `message`. Nested `result`, `body`, `data` and `response` objects are also supported.

For a handled failure, return:

```json
{
  "success": false,
  "error": "A concise, user-safe explanation"
}
```

### Workflow requirements

- Use HTTPS in production.
- Configure CORS to allow the Promptless origin.
- Validate `toolType` and input fields server-side.
- Apply rate limits and request-size limits.
- Do not log sensitive form content by default.
- Return a useful error status and a concise JSON error.
- Return a complete deliverable, not instructions describing how the user could create one.
- Use current, traceable sources for research tasks and make source links part of the result.
- Never claim to have browsed, tested, calculated or verified something unless the workflow actually did so.

Promptless times out a generation request after 45 seconds. A timeout does not guarantee that the remote workflow stopped; the endpoint should also implement its own timeout and idempotency strategy.

## Returning to work\n\n- Workflow drafts remain in memory while switching between tools in the current page session.\n- Saved results are opt-in and kept locally on the device.\n- A saved result can be reopened or passed into another workflow as context.\n\n## Data handling

- The webhook URL is stored in browser local storage.
- Form data is sent to the configured endpoint only when the user generates a result.
- Saved results are stored in this browser on this device only, after the user selects **Save result**.
- Clearing browser storage removes locally saved work and the saved webhook URL.
- The endpoint owner and any connected AI provider may process the data sent to the webhook. Do not submit confidential or sensitive information unless the workflow is approved to handle it.

## Product status and evidence

Promptless is a prototype. The local examples demonstrate task framing and interface behaviour, not production AI capability, user adoption, measured productivity gains or validated output quality. A connected webhook can provide live generation, but its model, retrieval, safety, quality evaluation and reliability depend on the workflow configured by the user.


## SEO, answer-engine and deployment setup

The static pages include page-specific titles and descriptions, Open Graph/Twitter metadata, structured data, a branded social preview, favicon, touch icon, web manifest, `robots.txt`, and `llms.txt`.

### Configure production URLs

The portfolio intentionally does not hardcode a domain. Once the final HTTPS domain (including any GitHub Pages repository subpath) is known, run:

```bash
node scripts/configure-site-url.mjs https://your-domain.example/
```

For a GitHub Pages project site, include the repository path, for example:

```bash
node scripts/configure-site-url.mjs https://yourname.github.io/repository-name/
```

This generates canonical links, absolute social preview URLs, `sitemap.xml`, and a production `robots.txt`. Run it against a clean checkout before deployment. Do not deploy the unconfigured `robots.txt` as the final production version if a sitemap URL is required.

### Discoverability and answer engines

`llms.txt` provides a concise, factual map of the portfolio and project status. Structured data describes the person, prototype and product case studies without claiming official affiliations, customer outcomes or production usage. These measures improve machine readability; they do not guarantee rankings, citations or inclusion in AI answers.

### Static-hosting headers

Configure HTTPS redirects and security headers at the hosting layer. Recommended headers include `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a tested `Content-Security-Policy`. Do not add a restrictive CSP without testing the existing Google Fonts and any connected webhook.

## Go-to-market and production launch

The `launch/` directory contains the portfolio GTM plan, launch checklist, deployment guide and a privacy-conscious analytics event specification. The analytics file is a planning document only; no tracking script is installed. The public launch remains gated on choosing the real HTTPS domain, deploying, and completing the P0 checks in `launch/LAUNCH_CHECKLIST.md`.
