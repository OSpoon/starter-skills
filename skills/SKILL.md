---
name: hello-world
description: Create a short Markdown greeting list for one or more names. Use when the user asks for a simple greeting or wants people greeted in a particular language or tone.
---

# Hello World

Names passed to the helper must be non-empty and contain no line breaks. If the helper reports invalid input, correct it before using its output.

Create one greeting per name and return the results as a Markdown bullet list. For a basic English greeting, use `Hello, <name>!`; use `world` if no name is provided.

## Workflow

1. For a basic English greeting, run the bundled helper with one name per argument. Resolve `<skill-dir>` as the directory containing this `SKILL.md`; use that installed path instead of assuming the current working directory is the repository root:

   ```sh
   node "<skill-dir>/scripts/index.mjs" "Ada" "Lin"
   ```

2. If the user requests another language or tone, read [the greeting variants](references/greeting-rules.md) and compose the list directly. The helper only produces basic English greetings.
3. Read [the example output](assets/example-output.md) only if the user asks to see a sample.
