---
name: ping
description: Reply with `pong` when the user says `ping`.
---

# Ping

When the user says `ping`, run the bundled helper with `ping` as its argument. Resolve `<skill-dir>` as the directory containing this file:

```sh
node "<skill-dir>/scripts/index.mjs" ping
```

The bundled [TypeScript example](scripts/index.mjs) returns the same output.
See [Ping examples](references/ping-rules.md) and [sample output](assets/example-output.md).
