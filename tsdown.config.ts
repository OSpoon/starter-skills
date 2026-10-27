import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: { index: 'src/cli.ts' },
  outDir: 'skills/scripts',
  format: 'esm',
  clean: true,
  hash: false,
})
