/**
 * Caps every image at MAX_EDGE on its long side and re-encodes it. The originals are
 * far larger than any slot they render into — one 2400x5189 file was being painted
 * into a ~150px tile, which costs bandwidth and, worse, decode memory on mobile.
 *
 * Run:  node scripts/resize-images.mjs --apply
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

const APPLY = process.argv.includes('--apply')
const MAX_EDGE = 1600

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (/\.(png|jpe?g|webp)$/i.test(e.name)) out.push(p)
  }
  return out
}

const files = walk('public/images')
let before = 0
let after = 0
const changed = []

for (const f of files) {
  const size = statSync(f).size
  before += size

  // Decode from a buffer, not the path: sharp keeps a handle on a path-based input,
  // and on Windows that makes the later writeFileSync to the same path fail.
  const img = sharp(readFileSync(f))
  const meta = await img.metadata()
  const long = Math.max(meta.width || 0, meta.height || 0)

  // Leave small files alone; re-encoding them gains nothing and can lose quality.
  if (long <= MAX_EDGE && size < 300 * 1024) {
    after += size
    continue
  }

  const resized = img.resize({
    width: meta.width >= meta.height ? Math.min(meta.width, MAX_EDGE) : null,
    height: meta.height > meta.width ? Math.min(meta.height, MAX_EDGE) : null,
    withoutEnlargement: true,
  })

  const ext = f.toLowerCase()
  const out = ext.endsWith('.png')
    ? await resized.png({ compressionLevel: 9, palette: true }).toBuffer()
    : ext.endsWith('.webp')
      ? await resized.webp({ quality: 82 }).toBuffer()
      : await resized.jpeg({ quality: 82, mozjpeg: true }).toBuffer()

  // Never write a file that came out larger than the original.
  if (out.length >= size) {
    after += size
    continue
  }

  changed.push({
    file: f,
    from: size,
    to: out.length,
    dims: `${meta.width}x${meta.height}`,
    buf: out,
  })
  after += out.length
}

changed.sort((a, b) => b.from - a.from)
for (const c of changed.slice(0, 12)) {
  console.log(
    `${(c.from / 1048576).toFixed(2)}MB -> ${(c.to / 1048576).toFixed(2)}MB  ${c.dims}  ${c.file}`,
  )
}
console.log(`\nfiles changed: ${changed.length}`)
console.log(`total: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`)

if (!APPLY) {
  console.log('\n(dry run — pass --apply to write)')
  process.exit(0)
}
let written = 0
const failed = []
for (const c of changed) {
  try {
    writeFileSync(c.file, c.buf)
    written++
  } catch (e) {
    failed.push(`${c.file} :: ${e.code}`)
  }
}
console.log(`\nwritten: ${written}`)
if (failed.length) {
  console.log(`failed:  ${failed.length}`)
  failed.forEach((f) => console.log('  ' + f))
  process.exitCode = 1
}
