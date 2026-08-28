// Customer stories. Video IDs, titles and publish dates are taken from the
// Magnic Technologies YouTube channel; logos from magnic.in/case-studies.

// Clients are filtered by region rather than trade segment — Magnic sells into India
// and overseas, and that distinction is what a visitor is actually looking for.
// `regions` below keeps only those with a published study, so a tab is never empty.
const REGION_LABELS = [
  { slug: 'all', label: 'All Clients' },
  { slug: 'india', label: 'Indian Clients' },
  { slug: 'international', label: 'International Clients' },
]

const PRODUCT_LINE_LABELS = [
  { slug: 'all-products', label: 'All Machines' },
  { slug: 'easycliq', label: 'EasyCLIQ Photography' },
  { slug: 'fidm', label: 'Ferrous Particle Detector' },
]

export const caseStudies = [
  {
    slug: 'sri-krishna-nagai-maligai',
    company: 'Sri Krishna Nagai Maligai',
    person: 'Sivashanker',
    role: 'Director',
    industry: 'retailer',
    industryLabel: 'Retailer',
    line: 'easycliq',
    location: 'Madurai, Tamil Nadu',
    region: 'india',
    product: 'EasyCLIQ X1',
    productHref: '/products/easycliq-x1',
    logo: '/images/clients/sri-krishna-nagai-maligai.webp',
    thumb: '/images/clients/thumb-srikrishna.jpg',
    video: { youtubeId: 'eq-60-HB4qQ', title: 'Customer Stories — Sri Krishna Nagai Maligai, Madurai' },
    videoDate: '27 May 2022',
    headline: 'Antique jewellery photographed in true colour — output up 70%',
    challenge:
      'An in-house photographer struggled to set the right light exposure for the fine detailing on antique pieces, and social media collections were shot manually one at a time.',
    solution:
      'EasyCLIQ with template memory per product category, so every antique set is lit and framed identically without re-adjusting exposure.',
    metrics: [
      { value: '70%', label: 'Increase in output' },
      { value: 'True', label: 'Antique colour retention' },
      { value: 'No', label: 'Photographer required' },
    ],
    quote:
      'Before EasyCLIQ, our in-house photographer found it difficult to set the right light exposure for perfect detailing. EasyCLIQ enabled us to enhance the actual original colour of the antique jewellery. We have increased our output by nearly 70%. Now our marketing person can even shoot the professional photos with little effort.',
  },
  {
    slug: 'joy-alukkas',
    company: 'Joy Alukkas',
    person: 'Head Office team',
    role: 'Thrissur',
    industry: 'retailer',
    industryLabel: 'Retailer',
    line: 'fidm',
    location: 'Thrissur, Kerala',
    region: 'india',
    product: 'Ferrous Particle Detector',
    productHref: '/products/ferrous-particle-detector',
    logo: '/images/clients/joyalukkas.webp',
    thumb: '/images/clients/thumb-joyalukkas.jpg',
    video: { youtubeId: '5SPYDDtkxLo', title: 'Customer Stories — Joy Alukkas, Head Office Thrissur' },
    videoDate: '06 Jul 2022',
    headline: 'Ferrous detection deployed at one of India’s largest jewellery groups',
    challenge:
      'At the scale a national retail group operates, a single contaminated piece reaching a customer is a brand problem, not just a quality one — and iron lodged during polishing is invisible on inspection.',
    solution:
      'The patented Ferrous Particle Detector Machine, scanning pieces in under three seconds and pinpointing the exact location of any ferrous particle found.',
    metrics: [
      { value: '< 3 Sec', label: 'Per piece scanned' },
      { value: '< 1 mg', label: 'Iron detected' },
      { value: 'Patented', label: 'Govt. of India technology' },
    ],
  },
  {
    slug: 'ans-jewellery',
    company: 'ANS Jewellery',
    person: 'Bashiyam',
    role: 'Managing Director',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'easycliq',
    location: 'Salem, Tamil Nadu',
    region: 'india',
    product: 'EasyCLIQ X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: '/images/clients/thumb-ans.jpg',
    video: { youtubeId: 'uY0AN0HX-II', title: 'Customer Stories — ANS Jewellery, Salem' },
    videoDate: '06 Jul 2022',
    headline: 'A fourth-generation manufacturer moved cataloguing in-house',
    challenge:
      'Cataloguing was the main bottleneck in the gold business — new collections could not reach the online marketplace fast enough to matter.',
    solution:
      'EasyCLIQ X3 large-format studio handling the full range, from delicate pieces to bulky bridal sets, on a single machine.',
    metrics: [
      { value: '4th', label: 'Generation manufacturer' },
      { value: '10 KG', label: 'Max load handled' },
      { value: 'In-house', label: 'Cataloguing moved' },
    ],
    quote:
      'We are a fourth-generation jewellery manufacturer. Cataloguing was our main problem in this gold business. I appreciate the Magnic Technologies team for introducing such a machine to relieve our process-related pain points. Now we can launch our products to the online market space in no time.',
  },
  {
    slug: 'sunil-jewellers',
    company: 'Sunil Jewellers',
    person: 'Sunil Jewellers team',
    role: 'Mumbai',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'fidm',
    location: 'Mumbai, Maharashtra',
    region: 'india',
    product: 'Ferrous Particle Detector',
    productHref: '/products/ferrous-particle-detector',
    logo: '/images/clients/sunil-jewellers.webp',
    thumb: '/images/clients/thumb-sunil.jpg',
    video: { youtubeId: 'Z9q06_uTzC0', title: 'Customer Stories — Sunil Jewellers, Mumbai' },
    videoDate: '15 Aug 2022',
    headline: 'Protecting brand reputation on every gold transaction',
    challenge:
      'Buying and selling gold without a way to verify what is inside a piece exposes a manufacturer to bad transactions and to contamination arriving from vendors.',
    solution:
      'The Ferrous Particle Detector Machine as a verification step, catching iron before a piece is accepted or dispatched.',
    metrics: [
      { value: '10×', label: 'Less manpower on QC' },
      { value: '3 Sec', label: 'Dual-scan cycle time' },
      { value: 'Vendor', label: 'Incoming gold verified' },
    ],
  },
  {
    slug: 'vysyaraju-jewellers',
    company: 'Vysyaraju Jewellers',
    person: 'Vysyaraju Jewellers',
    role: 'Andhra Pradesh',
    industry: 'retailer',
    industryLabel: 'Retailer',
    line: 'easycliq',
    location: 'Andhra Pradesh',
    region: 'india',
    product: 'EasyCLIQ Flexi X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: '/images/clients/thumb-vysyaraju.jpg',
    video: {
      youtubeId: 'ecEZvmNIyv8',
      title: 'Vysyaraju Jewellers — More enticing jewellery images with EasyCLIQ Flexi X3',
    },
    videoDate: '19 Apr 2025',
    headline: 'An ecommerce jewellery photoshoot, produced in-house',
    challenge:
      'Selling jewellery online demands imagery that holds a buyer’s attention in a marketplace listing — a standard that outsourced product stills rarely reach.',
    solution:
      'EasyCLIQ Flexi X3, used for a full ecommerce jewellery photoshoot conceptualised with photographer Rifaz and team.',
    metrics: [
      { value: 'Flexi X3', label: 'Machine deployed' },
      { value: 'E-comm', label: 'Shoot concept' },
      { value: 'In-house', label: 'Production' },
    ],
  },
  {
    slug: 'dvaar-silver-international',
    company: 'Dvaar Silver International',
    person: 'Dvaar Silver International Pvt Ltd',
    role: 'Client testimonial',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'easycliq',
    location: 'India',
    region: 'india',
    product: 'EasyCLIQ',
    productHref: '/products',
    logo: null,
    thumb: '/images/clients/thumb-dvaar.jpg',
    video: {
      youtubeId: 'UV8OykerLAY',
      title: 'Dvaar Silver International — Achieved great photography results',
    },
    videoDate: '02 Jun 2025',
    headline: 'Great photography results on silver, a notoriously hard metal to shoot',
    challenge:
      'Silver is highly reflective and picks up every stray light source in a room, which makes consistent, true-colour product photography difficult without a controlled studio.',
    solution:
      'An EasyCLIQ studio with independently controllable high-CRI lighting, giving repeatable results across the range.',
    metrics: [
      { value: '90+', label: 'CRI lighting' },
      { value: 'Silver', label: 'Speciality metal' },
      { value: 'Repeatable', label: 'Across the range' },
    ],
  },
  {
    slug: 'leading-studio-flexi-x3',
    company: "India's Leading Studio",
    person: 'Studio team',
    role: 'Professional studio',
    industry: 'manufacturer',
    industryLabel: 'Professional Studio',
    line: 'easycliq',
    location: 'India',
    region: 'india',
    product: 'EasyCLIQ Flexi X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: '/images/clients/thumb-leading-studio.jpg',
    video: {
      youtubeId: 'GRq012Roo8Y',
      title: 'Mastering jewellery photography with EasyCLIQ Flexi X3',
    },
    videoDate: '26 Apr 2025',
    headline: 'A professional studio adopts automation rather than competing with it',
    challenge:
      'A studio shooting jewellery commercially lives on throughput and consistency — the two things manual multi-angle photography is worst at.',
    solution:
      'EasyCLIQ Flexi X3 as the studio’s jewellery workflow, delivering repeatable multi-angle capture at volume.',
    metrics: [
      { value: 'Flexi X3', label: 'Machine deployed' },
      { value: 'Volume', label: 'Built for throughput' },
      { value: 'Pro', label: 'Studio adoption' },
    ],
  },

  // ---------------------------------------------------------------------------
  // International deployments. Country and machine are confirmed; the company
  // names below are placeholders pending sign-off, so each carries
  // `namePending: true` and renders a "Client name to be confirmed" note.
  // Replace `company` and add person/role/headline/challenge/solution/metrics
  // once the real details arrive. No video or image, by request.
  // ---------------------------------------------------------------------------
  {
    slug: 'international-bahrain',
    namePending: true,
    company: 'Jewellery Manufacturer — Bahrain',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'easycliq',
    location: 'Bahrain',
    region: 'international',
    product: 'EasyCLIQ X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: null,
    headline: 'Heavy Gulf bridal gold catalogued without leaving the premises',
    challenge:
      'Gulf bridal jewellery runs large and heavy — full sets and wide collars that a compact studio cannot physically hold. Photographing them meant either an outside studio or a compromise on how the piece was framed.',
    solution:
      'EasyCLIQ X3, whose 60 cm turntable and 10 KG bottom plate take a complete bridal set at its real size, with the AI software handling lighting and background removal in the same pass.',
    metrics: [
      { value: '60 cm', label: 'Turntable size' },
      { value: '10 KG', label: 'Max load' },
      { value: '< 3 Min', label: 'To publish-ready' },
    ],
    quote:
      'The X3 handles our heaviest bridal sets at full size, and the images are ready to publish the same day.',
    quotePending: true,
  },
  {
    slug: 'international-cambodia',
    namePending: true,
    company: 'Jewellery Manufacturer — Cambodia',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'easycliq',
    location: 'Cambodia',
    region: 'international',
    product: 'EasyCLIQ X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: null,
    headline: 'A manufacturer brought product photography in-house entirely',
    challenge:
      'Reaching buyers online meant sending stock out to a photographer and waiting on the results, with no control over turnaround and no consistency between batches.',
    solution:
      'EasyCLIQ X3 installed on site, so every piece is shot, cut out and exported by their own team using saved templates per product category.',
    metrics: [
      { value: 'In-house', label: 'Photography moved' },
      { value: '1-Click', label: 'AI background removal' },
      { value: '360°', label: 'Spin output' },
    ],
    quote:
      'Everything is shot in our own factory now. The templates mean a new batch looks the same as the last one.',
    quotePending: true,
  },
  {
    slug: 'international-malaysia',
    namePending: true,
    company: 'Jewellery Manufacturer — Malaysia',
    industry: 'manufacturer',
    industryLabel: 'Manufacturer',
    line: 'easycliq',
    location: 'Malaysia',
    region: 'international',
    product: 'EasyCLIQ X3',
    productHref: '/products/easycliq-x3',
    logo: null,
    thumb: null,
    headline: 'One studio covering gold, gemstones and a mixed product range',
    challenge:
      'A catalogue spanning plain gold, gemstone-set pieces and accessories needs different lighting for each — a fixed setup flatters one material at the expense of the others.',
    solution:
      'EasyCLIQ X3 with ten independently controllable lights from 3000K to 6000K at 90+ CRI, saved as a template per material so each category is shot on its own settings.',
    metrics: [
      { value: '10', label: 'Controllable lights' },
      { value: '90+', label: 'LED CRI' },
      { value: '3000–6000K', label: 'Colour temperature' },
    ],
    quote:
      'Gold and stones need different light. We set each one once and the machine remembers it.',
    quotePending: true,
  },
]

/**
 * Maps a machine name to its product-launch article. `/products/*` belongs to the
 * live site and is not a route here, so linking there would fall through to the
 * catch-all and land the reader on the blog index.
 */
const LAUNCH_POSTS = [
  [/ferrous|fidm/i, 'ferrous-particle-detector-machine-launch'],
  [/holo/i, 'easycliq-holo-360-photography-studio-launch'],
  [/mini/i, 'easycliq-mini-in-house-photography-studio-launch'],
  [/x3/i, 'easycliq-x3-large-format-photography-robot-launch'],
  [/x1/i, 'easycliq-x1-ai-robotic-photography-studio-launch'],
]

/** Returns the in-app launch-article path for a machine, or null if there isn't one. */
export function launchPostHref(product) {
  if (!product) return null
  // X3 is checked before X1 so "Flexi X3" cannot match the X1 pattern first.
  const hit = LAUNCH_POSTS.find(([re]) => re.test(product))
  return hit ? `/blog/${hit[1]}` : null
}

const USED_REGIONS = new Set(caseStudies.map((c) => c.region))
const USED_LINES = new Set(caseStudies.map((c) => c.line))

export const regions = REGION_LABELS.filter((r) => r.slug === 'all' || USED_REGIONS.has(r.slug))

export const productLines = PRODUCT_LINE_LABELS.filter(
  (l) => l.slug === 'all-products' || USED_LINES.has(l.slug),
)

/**
 * "All Clients" alternates Indian and international stories rather than listing all of
 * one then all of the other, so overseas customers are visible without scrolling past
 * the whole Indian roster. Whichever list is longer supplies the tail.
 */
export function interleaveByRegion(list) {
  const india = list.filter((c) => c.region === 'india')
  const abroad = list.filter((c) => c.region !== 'india')
  const out = []
  for (let i = 0; i < Math.max(india.length, abroad.length); i++) {
    if (india[i]) out.push(india[i])
    if (abroad[i]) out.push(abroad[i])
  }
  return out
}

// Logo wall — customers listed on magnic.in/case-studies.
export const clientLogos = [
  { name: 'GRT Jewellers', src: '/images/clients/grt-jewellers.webp' },
  { name: 'Malabar Gold & Diamonds', src: '/images/clients/malabar-gold-diamonds.webp' },
  { name: 'Joyalukkas', src: '/images/clients/joyalukkas.webp' },
  { name: 'Kalyan Jewellers', src: '/images/clients/kalyan-jewellers.webp' },
  { name: 'Titan', src: '/images/clients/titan.webp' },
  { name: 'Lalithaa Jewellery', src: '/images/clients/lalithaa-jewellery.webp' },
  { name: 'Bhima Diamonds', src: '/images/clients/bhima-diamonds.webp' },
  { name: 'Thangamayil', src: '/images/clients/thangamayil.webp' },
  { name: 'Sree Kumaran Thangamaligai', src: '/images/clients/sree-kumaran-thangamaligai.webp' },
  { name: 'Mohanlal Jewellers', src: '/images/clients/mohanlal-jewellers.webp' },
  { name: 'Sri Krishna Nagai Maligai', src: '/images/clients/sri-krishna-nagai-maligai.webp' },
  { name: 'Sunil Jewellers', src: '/images/clients/sunil-jewellers.webp' },
]

export const hallmarkCentres = [
  { name: 'Emerald Hallmark', src: '/images/clients/emerald-hallmark.webp' },
  { name: 'DHC Hallmark', src: '/images/clients/dhc-hallmark.webp' },
  { name: 'Quality ASSAY', src: '/images/clients/quality-assay.webp' },
]

export const clientStats = [
  { value: '750+', label: 'Customers globally' },
  { value: '250+', label: 'FIDM installations' },
  { value: '20,000+', label: 'Kg gold certified daily' },
  { value: '10+', label: 'Years of excellence' },
]
