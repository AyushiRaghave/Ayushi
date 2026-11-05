# Promptless connected-workflow contract

## Request

`POST application/json`

```json
{
  "toolType": "research_synthesizer",
  "product": "Promptless",
  "schemaVersion": 1,
  "task": {
    "name": "Compare & Decide",
    "intendedDeliverable": "A decision comparison that shows what is known, what is missing and what should decide the choice.",
    "suitableFor": "Evaluating alternatives before making a decision.",
    "qualityBar": [
      "Uses traceable and current sources when research is required",
      "Separates evidence, assumptions and unknowns",
      "Compares options against the supplied criteria"
    ]
  },
  "input": {
    "question": "Which option best fits the stated decision?",
    "options": "Option A\nOption B",
    "source_material": "User-supplied notes or source excerpts",
    "criteria": "Reliability\nTotal cost\nEase of adoption",
    "format": "Recommendation with reasoning"
  }
}
```

`toolType` is one of:

- `cold_email`
- `thread_generator`
- `prompt_architect`
- `webpage_builder`
- `brief_generator`
- `problem_solver`
- `workaround_suggester`
- `life_coach`
- `research_synthesizer`
- `message_refiner`

`input` contains the values from that workflow's form. Validate fields server-side; never assume browser validation is sufficient.

## Success response

Return one complete deliverable in a JSON string field:

```json
{
  "output": "# Result\n\nThe complete task-specific deliverable..."
}
```

The client also accepts `content`, `text`, `answer`, `completion` or `message`, including when nested under `result`, `body`, `data` or `response`.

## Error response

```json
{
  "success": false,
  "error": "The requested workflow is not configured."
}
```

Use a non-2xx HTTP status for transport or server failures. Do not return an HTML error page as a successful result.

## Quality contract by task

- Email: complete message, appropriate ask, no fabricated relationship or claims.
- Thread: complete connected posts based on user-supplied points; do not invent evidence.
- Prompt: explicit objective, context, constraints, output contract and acceptance criteria.
- Webpage: valid HTML, responsive layout, accessible structure, no invented product claims.
- Brief: objective, audience, scope, deliverables, constraints, acceptance criteria and open decisions.
- Problem solving: distinguish reported facts, hypotheses and unknowns; provide testable next steps.
- Workaround: alternatives must respect permissions, data integrity and security boundaries.
- Reflection: practical, non-clinical support; route crisis or mental-health needs to appropriate support.
- Research: retrieve current sources when required, cite them, compare like with like and disclose evidence gaps.
- Message refinement: preserve intent, facts and relationship context; return actual rewritten variants when requested.

## Operational requirements

- HTTPS, CORS allow-list, server-side validation, rate limits and request-size limits.
- Provider/API credentials remain server-side, never in the static frontend.
- Set endpoint-level timeouts and idempotency controls.
- Avoid storing sensitive content in logs.
- Return a complete result or a clear error; do not return a success response with an empty output.
