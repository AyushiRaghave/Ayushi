# Promptless — product direction and MVP specification

## Product definition

Promptless is a task-first layer for connected AI workflows. It helps a person describe the work they need done, supply the context that changes the result, and send a structured task to an AI workflow. The value is not prompt generation by itself; it is reducing the effort between intention and a usable deliverable.

## Primary user promise

**Get useful work out of AI. Start with the task, not the prompt.**

This promise depends on three product behaviours:
1. The user can start in ordinary task language.
2. The workflow captures only context that materially affects the deliverable.
3. The connected workflow returns a complete, task-specific result that can be reviewed, refined and reused.

## MVP audience

Start with people who already use AI for recurring professional tasks but spend time improving instructions, supplying context and correcting outputs:
- solo professionals and freelancers.
- Small-business operators.
- Product, design and operations professionals.

Do not optimise the first release equally for casual consumers, enterprise teams and technical developers. Their security, collaboration and integration needs are materially different.

## Core loop

1. Select or search for the task.
2. Provide the minimum required context.
3. Send a structured request to the connected workflow.
4. Review the result and its status.
5. Copy, download, save or continue the result into another workflow.
6. Reuse saved context on a later task.

## Workflow boundaries

The ten workflows remain available as entry points, but they share a smaller set of capabilities:

| Capability | Workflows |
|---|---|
| Communication | Email Writer, Thread Generator, Message Refiner |
| Structuring | Prompt Builder, Brief Generator |
| Problem solving | Problem Solver, Workaround Finder |
| Reflection | Reflection & Next Step |
| Decision support | Compare & Decide |
| Digital creation | Webpage Builder |

This is a navigational grouping, not a claim that every workflow is equally mature.

## Product requirements

### Task discovery
- Search workflow names and descriptions.
- Explain the expected deliverable before asking for inputs.
- Show realistic multi-field examples.
- Preserve in-progress form values when switching workflows.

### Task framing
- Mark essential and optional information accurately.
- Avoid asking the same information in multiple fields.
- Use field labels and examples that describe the user's situation rather than internal prompt terminology.
- Include the task's expected deliverable and quality bar in the connected request.

### Result review
- Distinguish local illustrative examples from connected workflow results.
- Never label a result as verified or ready to use solely because a request succeeded.
- Support copy, download, save and workflow hand-off.
- Preserve user input after an error.
- Apply a client timeout and show an actionable retry path.

### Continuity
- Save only when the user explicitly asks.
- Store saved results locally on the device.
- Allow a result to become context for another workflow.
- Keep local history bounded and deletable.

### Trust
- Explain when form content is sent to a configured webhook.
- Never claim local examples use an AI model.
- Keep provider credentials out of the static frontend.
- Make research evidence and safety boundaries explicit.

## Non-goals for this prototype

- Built-in model hosting or API key management.
- Automatic web research in local sample mode.
- Claims of verified output quality.
- User accounts, cloud sync or team collaboration.
- Autonomous execution of external actions.
- Mental-health treatment or crisis support.
- Analytics or tracking that collects task content.

## Success measures to validate

- Workflow selection time.
- Form abandonment by field.
- Time to a user-accepted deliverable.
- Number of substantial revisions.
- Copy, download and save rates.
- Repeat use of the same workflow.
- Use of saved context and workflow hand-off.
- User preference versus their existing AI workflow.

These measures are proposed; no performance results are claimed.
