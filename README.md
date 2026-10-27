# starter-skills

[![License][license-src]][license-href]

`hello-world` is an agent skill that creates a short Markdown greeting list.

## Install

```sh
npx skills add OSpoon/starter-skills --skill hello-world
```

This installs the version on the repository's default branch.

## What it does

- Creates one greeting for each name as a Markdown bullet list.
- Uses `world` when no name is provided.
- Supports requested languages and tones using the included greeting guidance.

For example, given `Ada` and `Lin`, it returns:

```md
- Hello, Ada!
- Hello, Lin!
```

## License

[MIT](./LICENSE.md) [OSpoon](https://github.com/OSpoon)

<!-- Badges -->

[license-src]: https://img.shields.io/github/license/OSpoon/starter-skills.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/OSpoon/starter-skills/blob/main/LICENSE.md
