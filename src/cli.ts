import process from 'node:process'
import { format } from './index.ts'

const recipients = process.argv.slice(2)
const names = recipients.length > 0 ? recipients : ['world']

if (names.some(name => !name.trim() || /[\r\n]/u.test(name))) {
  process.stderr.write('Names must be non-empty, single-line text.\n')
  process.exitCode = 1
}
else {
  const greetings = names.map(name => `Hello, ${name.trim()}!`)
  process.stdout.write(`${format(greetings)}\n`)
}
