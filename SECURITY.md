# Security and privacy notes

- Serve the site over HTTPS.
- Keep webhook endpoints and provider credentials out of client-side source code.
- Configure any connected n8n webhook to accept requests only from the deployed portfolio origin where practical.
- Do not send confidential or sensitive information through Promptless unless the connected workflow and provider are approved to process it.
- Review third-party scripts, embeds and dependencies before adding them.
- Static hosting security headers (for example Content-Security-Policy, Referrer-Policy and X-Content-Type-Options) should be configured at the hosting layer; a static HTML meta tag is not a complete substitute.
