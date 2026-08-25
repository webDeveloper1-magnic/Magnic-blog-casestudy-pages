/**
 * Finds byte-identical images under public/images, keeps one canonical copy of each,
 * deletes the rest, and rewrites every reference in src/ to the canonical path.
 *
 * Run:  node scripts/dedupe-images.mjs --apply
 * Without --apply it only reports what it would do.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, unlinkSync } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'

const APPLY = process.argv.includes('--apply')
const toWeb = (p) => '/' + p.split(/[\\/]/).slice(1).join('/') // public/images/x -> /images/x

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const files = walk('public/images')
const byHash = new Map()
for (const f of files) {
  const h = createHash('md5').update(readFileSync(f)).digest('hex')
  if (!byHash.has(h)) byHash.set(h, [])
  byHash.get(h).push(f)
}

/**
 * Paths that share bytes but are meant to depict DIFFERENT subjects. These are content
 * errors (the wrong photo was saved), not reuse — merging them would make the mistake
 * permanent and invisible. Reported instead, for a human to supply the correct image.
 */
const CONTENT_CONFLICTS = [
  ['public/images/articles/bridal-hero.jpg', 'public/images/articles/cmp-long-necklace.jpg'],
  ['public/images/awards/niti-aayog.webp', 'public/images/awards/the-impactor.webp'],
]
const isConflict = (g) =>
  CONTENT_CONFLICTS.some((pair) => pair.every((p) => g.some((f) => f.split(/[\\/]/).join('/') === p)))

const allGroups = [...byHash.values()].filter((g) => g.length > 1)
const conflicts = allGroups.filter(isConflict)
const groups = allGroups.filter((g) => !isConflict(g))
const renames = []
let recovered = 0

for (const g of groups) {
  g.sort()
  const keep = g[0]
  for (const drop of g.slice(1)) {
    recovered += statSync(drop).size
    renames.push({ from: toWeb(drop), to: toWeb(keep), file: drop })
  }
}

if (conflicts.length) {
  console.log('SKIPPED — same bytes, different intended subject (needs the right photo):')
  for (const g of conflicts) console.log('  ' + g.map(toWeb).join('  ==  '))
  console.log()
}

console.log(`duplicate groups: ${groups.length}`)
console.log(`redundant files:  ${renames.length}`)
console.log(`recoverable:      ${(recovered / 1048576).toFixed(2)} MB\n`)
for (const r of renames) console.log(`  ${r.from}\n    -> ${r.to}`)

if (!APPLY) {
  console.log('\n(dry run — pass --apply to make the changes)')
  process.exit(0)
}

// Rewrite references before deleting, so a failure mid-way leaves files intact.
const srcFiles = walk('src').filter((f) => /\.(jsx?|css)$/.test(f))
let edits = 0
for (const f of srcFiles) {
  let s = readFileSync(f, 'utf8')
  const before = s
  for (const r of renames) s = s.split(r.from).join(r.to)
  if (s !== before) {
    writeFileSync(f, s, 'utf8')
    edits++
  }
}

let deleted = 0
for (const r of renames) {
  unlinkSync(r.file)
  deleted++
}

console.log(`\nsource files rewritten: ${edits}`)
console.log(`files deleted:          ${deleted}`)
