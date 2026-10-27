import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

function run(...args: string[]) {
  return spawnSync(process.execPath, [fileURLToPath(new URL('../skills/scripts/index.mjs', import.meta.url)), ...args], { encoding: 'utf8' })
}

describe('bundled skill scripts', () => {
  it('creates a greeting list for recipients', () => {
    const result = run('Ada', 'Lin')
    expect(result.status).toBe(0)
    expect(result.stdout).toBe('- Hello, Ada!\n- Hello, Lin!\n')
  })

  it('uses world when no recipient is provided', () => {
    const result = run()
    expect(result.status).toBe(0)
    expect(result.stdout).toBe('- Hello, world!\n')
  })

  it.each(['', 'Ada\nLin'])('rejects invalid names: %j', (name) => {
    const result = run(name)
    expect(result.status).toBe(1)
    expect(result.stderr).toContain('Names must be non-empty, single-line text.')
  })
})
