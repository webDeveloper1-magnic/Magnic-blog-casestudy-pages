# Magnic Content Pages — Blog & Case Studies

Standalone React + Tailwind prototype of two redesigned pages for magnic.in.
Built for MD review before merging into the main website.

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:5180

- `/blog` — redesigned Blog page
- `/case-studies` — redesigned Case Studies page

Any other path redirects to `/blog`. These are the only two pages in scope.

## Brand tokens

Pulled from the live site so the pages drop in without restyling:

| Token | Value | Use |
|---|---|---|
| `primary` | `#2c2e83` | Headings, buttons, nav |
| `primary-2` | `#244b92` | Hover states, gradients |
| `accent` | `#fbb040` | CTAs, highlights |
| `teal` / `teal-2` | `#009fc3` / `#128FC5` | Eyebrows, category pills |
| `ink` / `ink-light` | `#3a3a3c` / `#666` | Body text |
| `surface` | `#f5f7fa` | Section backgrounds |
| `line` | `#e0e0e0` | Borders |

Fonts: **Montserrat** (headings), **Nunito** (body) — same as the live site.

## What changed vs. the current site

**Blog**
- Featured "pillar guide" slot to anchor a topic cluster instead of a flat post list
- Category filtering + search
- Sidebar: topic counts, newsletter capture, product cross-link
- Reading time, author byline and date on every card
- Empty state when a filter returns nothing

**Case Studies**
- Structured challenge → solution → measured result per client, instead of a bare quote
- Metrics pulled out of the testimonial into a scannable band
- Filter by retailer / manufacturer / hallmarking centre
- Each study links to the specific machine deployed
- Second study (ANS Jewellery) surfaced — it was only on the X3 product page before

## Scope notes

- Nav links to Company, Products, Service & Parts and Contact point at live site paths (`/products`, `/contact`, …) so they resolve after merge.
- Article detail pages and product pages are out of scope.
- Post and case study content lives in `src/data/` — swap for a CMS or API on merge.
