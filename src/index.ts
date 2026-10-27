export function format(items: readonly string[]): string {
  return items.map(item => `- ${item}`).join('\n')
}
