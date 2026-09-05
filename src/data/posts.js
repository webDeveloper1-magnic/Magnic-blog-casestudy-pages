// Content mirrors what is actually published on magnic.in/blog.
// Add new entries here as real articles go live.

// Every tab that can appear, in display order. `categories` below is filtered down
// to those a post actually uses, so a tab can never render an empty result set.
const CATEGORY_LABELS = [
  { slug: 'all', label: 'All Articles', short: 'All' },
  { slug: 'news', label: 'Latest News', short: 'News' },
  { slug: 'product-launches', label: 'Product Launches', short: 'Launches' },
  { slug: 'guides', label: 'Guides & Comparisons', short: 'Guides' },
  { slug: 'exhibitions', label: 'Exhibitions & Events', short: 'Events' },
  { slug: 'awards', label: 'Awards & Achievements', short: 'Awards' },
]

export const posts = [
  {
    slug: 'cma-quadra-best-startup-award-2020',
    title: 'Magnic Wins the CMA Quadra Best Start-up Award',
    excerpt:
      'The Coimbatore Management Association named Magnic Technologies its Quadra Best Start-up — presented to founder Karthikeyan Chandran by C.K. Ranganathan of CavinKare, one month after the Ferrous Particle Detector reached the market.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2020-02-27',
    dateLabel: '27 Feb 2020',
    readingTime: 2,
    author: 'Magnic Team',
    image: '/images/awards/cma-quadra.webp',
    imageAlt: 'CMA Quadra Best Start-up Award 2020 trophy, Magnic Technologies',
    videoHeading: 'Watch the presentation',
    videos: [
      {
        youtubeId: '8YfUUD3lG_M',
        title: 'Magnic Technologies awarded the CMA Quadra Best Start-up Award',
      },
    ],
    body: [
      'Mr. Karthikeyan Chandran, Managing Director of Magnic Technologies Pvt Ltd, received the CMA (Coimbatore Management Association) Quadra Best Start-up Award from Mr. C.K. Ranganathan, Chairman and Managing Director of CavinKare Private Ltd, in Coimbatore on Thursday 27th February 2020.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'What the award recognised',
        body: [
          'The Quadra awards are the Coimbatore Management Association’s recognition of enterprise in the region — judged by people who run businesses, in a city built on engineering and manufacturing rather than software.',
          'The timing mattered. The award came roughly a month after the world’s first Ferrous Particle Detector Machine reached jewellery manufacturers, and it recognised the company for exactly the thing that machine represented: an engineering team choosing a narrow, unglamorous industrial problem and solving it properly.',
        ],
      },
      {
        type: 'text',
        heading: 'From a software job to a machine shop',
        body: [
          'Karthikeyan graduated in Electrical and Electronic Engineering and left a software development job to build machines instead — the decision the company still traces itself back to.',
          'Receiving the award from C.K. Ranganathan carried its own weight: CavinKare is one of Tamil Nadu’s best-known examples of a business built from a small start into a national brand.',
        ],
      },
      {
        type: 'gallery',
        heading: 'The recognitions since',
        intro:
          'The CMA Quadra award was one of several. Magnic has since been recognised by NITI Aayog, DST–ISBA and Startup India, and holds a Government of India patent for the Ferrous Particle Detector.',
        images: [
          { src: '/images/awards/cma-quadra.webp', alt: 'CMA Quadra Best Start-up Award' },
          { src: '/images/awards/dst-isba.webp', alt: 'DST–ISBA Startup Award' },
          { src: '/images/awards/startup-india.webp', alt: 'Startup India recognition certificate' },
          { src: '/images/awards/patent-certificate.webp', alt: 'Government of India patent certificate' },
        ],
      },
    ],
    tags: ['CMA Quadra', 'Award', 'Coimbatore', 'Start-up'],
  },

  // ---------------------------------------------------------------------------
  // Awards archive — one card per recognition, sourced from magnic.in/awards.
  // `dateLabel` is omitted where the site records no date; those entries carry a
  // `date` for sort order only and show no date on the card.
  // ---------------------------------------------------------------------------
  {
    slug: 'ferrous-particle-detector-patent',
    title: 'Patent Granted for the Ferrous Particle Detector',
    excerpt:
      'The Government of India granted Magnic Technologies a patent for its invention, the Ferrous Particle Detector — the technology behind every FIDM machine in the field.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2021-01-01',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/patent-certificate.webp',
    imageAlt: 'Government of India patent certificate for the Ferrous Particle Detector',
    body: [
      'Patented for our invention “Ferrous Particle Detector” by the Government of India.',
      'The patent covers the detection method behind the FIDM machines — the ability to identify a ferrous particle under 1 mg, sized as small as 2.0mm × 0.25mm, inside a finished gold jewel without damaging the piece.',
    ],
    tags: ['Patent', 'FIDM', 'Government of India'],
  },
  {
    slug: 'startup-india-recognition',
    title: 'Recognised by Startup India',
    excerpt:
      'Startup India recognised Magnic Technologies for innovative, impactful ideas and solutions in the jewellery industry.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2023-11-01',
    dateLabel: 'November 2023',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/startup-india.webp',
    imageAlt: 'Startup India recognition certificate',
    body: [
      'Recognized by Startup India for the innovative impactful ideas and solutions.',
      'The recognition covers the company’s work across both product lines — ferrous particle detection for gold quality control, and the EasyCLIQ automated photography studios.',
    ],
    tags: ['Startup India', 'Recognition'],
  },
  {
    slug: 'south-jewellery-show-award',
    title: 'South Jewellery Show — Participation Award',
    excerpt:
      'Recognised for participating in South India’s premier B2B exhibition on gems and jewellery, organised by GES India Inc.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2023-04-01',
    dateLabel: 'April 2023',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/south-jewellery-show.webp',
    imageAlt: 'South Jewellery Show participation award',
    body: [
      'Awarded for participating in South India’s premier B2B Exhibition on gems & jewellery, organised by GES India Inc.',
      'Magnic showcased its full product portfolio at the show, meeting jewellers looking to modernise both their photography and their quality control processes.',
    ],
    tags: ['South Jewellery Show', 'Exhibition', 'GES India'],
  },
  {
    slug: 'niti-aayog-best-startup-award',
    title: 'Best Start-up Award — NITI Aayog',
    excerpt:
      'Magnic Technologies received the Best Start-up award organised by NITI Aayog, the Government of India’s public policy think tank.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2022-06-01',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/niti-aayog.webp',
    imageAlt: 'NITI Aayog Best Start-up award',
    body: ['Awarded for best start-up award organised by NITI AAYOG.'],
    tags: ['NITI Aayog', 'Award', 'Start-up'],
  },
  {
    slug: 'dst-isba-startup-award',
    title: 'DST – ISBA Startup Award',
    excerpt:
      'Best Start-up award organised by DST – ISBA, received while incubated at Kongu Engineering College.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2022-03-01',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/dst-isba.webp',
    imageAlt: 'DST – ISBA Startup Award',
    body: [
      'Best Start-up award organised by DST – ISBA Startup award, incubated at Kongu Engineering College.',
    ],
    tags: ['DST-ISBA', 'Award', 'Kongu Engineering College'],
  },
  {
    slug: 'startup-mania-erode-entrepreneurship-conclave',
    title: 'Startup Mania — Erode Entrepreneurship Conclave',
    excerpt:
      'Recognised for taking part in the panel discussion at the Erode Entrepreneurship Conclave.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2022-01-01',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/startup-mania.webp',
    imageAlt: 'Startup Mania award, Erode Entrepreneurship Conclave',
    body: [
      'Awarded for being part of the panel discussion at the Erode Entrepreneurship Conclave for Best Startup Mania.',
    ],
    tags: ['Startup Mania', 'Erode', 'Panel'],
  },
  {
    slug: 'gjiif-chennai-2019',
    title: 'GJIIF Chennai 2019 — Participation Award',
    excerpt:
      'Award for participation in GJIIF (Gem & Jewellery India International Fair) Chennai 2019, India’s largest B2B exhibition for South Indian jewellery.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2019-01-01',
    dateLabel: '2019',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/gjiif-2019.webp',
    imageAlt: 'GJIIF Chennai 2019 participation award',
    body: [
      'Award for participation in GJIIF (Gem & Jewellery India International fair) in Chennai 2019, India’s largest B2B Exhibition for South Indian Jewellery.',
    ],
    tags: ['GJIIF', 'Chennai', 'Exhibition'],
  },
  {
    slug: 'gjiif-chennai-2018',
    title: 'GJIIF Chennai 2018 — Participation Award',
    excerpt:
      'Award for participation in GJIIF (Gem & Jewellery India International Fair) Chennai 2018, presented by the Madras Jewellers & Diamond Merchants’ Association.',
    category: 'awards',
    categoryLabel: 'Awards & Achievements',
    date: '2018-03-01',
    dateLabel: 'March 2018',
    readingTime: 1,
    author: 'Magnic Team',
    image: '/images/awards/gjiif-2018.webp',
    imageAlt: 'GJIIF Chennai 2018 participation award',
    body: [
      'Award for participation in GJIIF (Gem & Jewellery India International fair) in Chennai 2018, India’s largest B2B Exhibition for South Indian Jewellery.',
      'The award was presented by the Madras Jewellers & Diamond Merchants’ Association in appreciation of Magnic’s participation in the fair.',
    ],
    tags: ['GJIIF', 'Chennai', 'Exhibition', 'MJDMA'],
  },
  {
    slug: 'magnic-at-iijs-bharat-premiere',
    title: 'Magnic at IIJS Bharat Premiere',
    excerpt:
      'Over 2,100 exhibitors across two venues, and one recurring conversation at our stand: jewellers are done outsourcing photography and done finding iron the hard way.',
    // Primary category drives the pill label; `also` lists extra tabs it appears under.
    category: 'news',
    categoryLabel: 'Latest News',
    also: ['exhibitions'],
    date: '2026-08-14',
    dateLabel: '14 Aug 2026',
    readingTime: 4,
    author: 'Magnic Team',
    // Placeholder: a free-licensed exhibition-hall photo (Unsplash License, commercial
    // use permitted). It depicts a different trade show — replace with a real photo
    // from the Magnic stand as soon as one is available.
    image: '/images/expo/exhibition-hall.jpg',
    imageAlt: 'A busy indoor exhibition hall filled with trade-show stands',
    heroStyle: 'cover',
    body: [
      'IIJS Bharat Premiere, organised by the Gem & Jewellery Export Promotion Council (GJEPC), is ranked among the world’s top B2B jewellery trade shows. It hosts over 2,100 exhibitors across massive dual venues — the Jio World Convention Centre and the Bombay Exhibition Centre.',
      'Magnic Technologies exhibited across the show. For a company that builds machines rather than jewellery, an event like this is the shortest route to the people who actually run the problems we solve — manufacturers, retailers and hallmarking centres, in one place, for several days.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Why a machine manufacturer exhibits at a jewellery show',
        body: [
          'Our buyers are not shopping for gold. They are the manufacturer whose polishing line keeps sending out pieces with iron in them, and the retailer whose new collection is sitting in a tray waiting on a photographer.',
          'Those problems are hard to explain in a brochure and obvious in thirty seconds of demonstration. Put a contaminated chain on a conveyor and let a visitor watch the machine find the pin. Put their own piece on a turntable and hand them a publish-ready image before they walk away. That is why we exhibit.',
        ],
      },
      {
        type: 'gallery',
        heading: 'What we brought',
        intro:
          'The full range, so a visitor could see the whole path from a retail counter to a large-format production floor.',
        images: [
          { src: '/images/expo/fidm.webp', alt: 'Ferrous Particle Detector Machine' },
          { src: '/images/expo/mini.png', alt: 'EasyCLIQ MINI' },
          { src: '/images/expo/x1.png', alt: 'EasyCLIQ X1' },
          { src: '/images/articles/price-x3.png', alt: 'EasyCLIQ X3' },
        ],
      },
      {
        type: 'usecases',
        heading: 'The three conversations that kept repeating',
        intro: 'Across the show, visitors arrived with the same handful of problems.',
        items: [
          {
            title: '“How do we stop outsourcing?”',
            text: 'Retailers tired of packing stock off to a photographer and waiting days for images. The MINI answered it for counter-sized operations; the X1 for anyone shooting a full collection.',
          },
          {
            title: '“Will it handle a full haram?”',
            text: 'The question every South Indian bridal manufacturer asked first. The X3’s 60 cm turntable and large-format chamber exist precisely because compact studios cannot.',
          },
          {
            title: '“Can you really find the pin?”',
            text: 'The FIDM demo answered itself. A scan in under three seconds, and a camera photograph showing exactly where the ferrous particle sits inside the piece.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The show in numbers',
        items: [
          { value: '2,100+', label: 'Exhibitors at the show' },
          { value: '2', label: 'Venues — Jio World & Bombay Exhibition Centre' },
          { value: '5', label: 'Magnic machines demonstrated' },
          { value: 'GJEPC', label: 'Organising council' },
        ],
      },
      {
        type: 'text',
        heading: 'What we took away from it',
        body: [
          'The consistent theme was that jewellers are no longer asking whether to bring photography and quality control in-house — they are asking which machine fits their floor and their volume. That is a different conversation from the one we were having a few years ago, and a much shorter one.',
          'If you visited the stand and want to carry on where we left off, book a demo and we will photograph your own jewellery, or scan your own stock for ferrous contamination, before you commit to anything.',
        ],
      },
    ],
    tags: ['IIJS', 'GJEPC', 'Exhibition', 'Mumbai'],
  },
  {
    slug: 'ferrous-particle-detector-machine-launch',
    title: "World's First Ferrous Particle Detector Machine",
    excerpt:
      'Polishing pins get trapped inside gold jewellery where nobody can see them. Before FIDM, they were dug out by hand — and roughly 5% still slipped through. Here is what changed on the shop floor once the machine arrived.',
    category: 'product-launches',
    categoryLabel: 'Product Launches',
    date: '2020-01-25',
    dateLabel: '25 Jan 2020',
    readingTime: 2,
    author: 'Magnic Team',
    image: '/images/expo/fidm.webp',
    imageAlt: 'Magnic Ferrous Particle Detector Machine V4.0 Standard',
    // Titles taken from the actual YouTube listings.
    videos: [
      {
        youtubeId: '6xrkmFsWCnc',
        title: 'Gold Purity Checking Machine — Full Explanatory Video',
      },
      {
        youtubeId: 'ZAwI0eYvmLk',
        title: 'Gold Testing Machine — Unique Technology for Finding Iron Inside the Gold',
      },
      {
        youtubeId: 'Erg9XCgK56A',
        title: 'How to Operate the MAGNIC V4.0 — Ferrous Impurity Detection Machine?',
      },
    ],
    body: [
      'In gold jewellery manufacturing, jewels are polished in a washer machine using small magnetized pins, with powerful electromagnets at the bottom. The pins are tiny — 2mm long and 0.5mm in diameter — and during tumbling they can lodge inside the small pores of a jewel and stay there.',
      'Once a pin is inside, nothing about the piece looks wrong. It passes visual inspection, it goes on the counter, and the iron only surfaces later — when a customer complains, when the piece comes back for exchange, or when a retailer pays gold rate for weight that was never gold.',
    ],
    // Content and imagery below are taken from magnic.in/products/ferrous-particle-detector
    // and the product videos on the Magnic YouTube channel.
    sections: [
      {
        type: 'text',
        heading: 'The problem, before FIDM existed',
        image: '/images/fidm/problems-in-jewel-industry.webp',
        imageAlt: 'Ferrous pin trapped inside a gold jewel',
        body: [
          'The industry’s answer was to remove the pins by hand. An operator worked through the batch piece by piece, hunting for something 2mm long buried in a pore, with no way to know whether a given jewel contained one at all.',
          'It was slow, it tied up skilled people, and it did not actually work. Even after manual testing, around 5% of pieces still carried a defect through to the customer.',
        ],
      },
      {
        type: 'comparison',
        heading: 'What changed after the launch',
        intro:
          'The same batch of jewellery, handled two different ways — before the Ferrous Particle Detector Machine, and after it.',
        beforeLabel: 'Before FIDM',
        afterLabel: 'After FIDM',
        pairs: [
          {
            before: 'Operators searched each jewel by hand for a 2mm pin, with no indication of which pieces were even affected.',
            after: 'Every piece is scanned automatically in under 3 seconds as it moves along the conveyor.',
          },
          {
            before: 'Around 5% of defects still reached the customer after manual inspection.',
            after: 'Sensitivity down to 2.0mm × 0.25mm catches iron under 1 mg — including pins the eye and the hand both miss.',
          },
          {
            before: 'Even when a pin was suspected, finding it meant probing the piece and risking damage.',
            after: 'A camera-based locating system pinpoints the exact position of the pin on a real-time photograph.',
          },
          {
            before: 'Inspection needed experienced staff, and throughput was limited by how many of them you had.',
            after: 'An Android touchscreen interface means non-specialists can run it with no training — up to 10× less manpower.',
          },
          {
            before: 'Retailers buying back old gold had no way to verify it before paying gold rate for it.',
            after: 'Every incoming piece is certified at the counter before the transaction is made.',
          },
          {
            before: 'Defects surfaced after the sale, as complaints, returns and disputes over weight.',
            after: 'Defective and clean pieces are segregated on the conveyor before anything leaves the floor.',
          },
        ],
      },
      {
        type: 'usecases',
        heading: 'Where it earns its place',
        intro: 'Three points in the gold supply chain where the machine is doing real work today.',
        items: [
          {
            title: 'Manufacturers',
            text: 'Installed as a quality gate straight after the tumbling and polishing line, so no contaminated piece reaches dispatch or a vendor.',
          },
          {
            title: 'Retailers',
            text: 'Used at the old-gold buy-back counter to verify what is actually being purchased, protecting both the margin and the customer relationship.',
          },
          {
            title: 'Hallmarking Centres',
            text: 'Runs as a pre-certification check at volume — the installed base certifies over 20,000 kg of gold every day.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The result, in numbers',
        items: [
          { value: '< 3 Sec', label: 'To scan a jewel for iron defects' },
          { value: '< 1 mg', label: 'Of iron reliably detected' },
          { value: '250+', label: 'Customers across the globe' },
          { value: '20,000+', label: 'Kg of gold certified per day' },
        ],
      },
      {
        type: 'problemsolutions',
        heading: 'Every part of the machine answers a problem from the floor',
        solutionLabel: 'How FIDM solves it',
        intro:
          'None of this was designed in the abstract. Each capability exists because a jeweller ran into a specific wall.',
        items: [
          {
            title: 'Ultra Sensitive Sensor',
            problem:
              'The pins that cause the damage are 2mm long and 0.5mm wide — far below what a hand check or a weighing scale can resolve.',
            solution:
              'Sensitivity of 2.0mm × 0.25mm detects iron under 1 mg, so the smallest lodged pin registers.',
            image: '/images/fidm/ultra-sensitive-sensor.webp',
          },
          {
            title: 'Camera-based Detect Locating System',
            problem:
              'Knowing a jewel is contaminated is only half the job. Operators still had to find the pin, often probing and risking damage to the piece.',
            solution:
              'A real-time photograph pinpoints exactly where the pin sits, so it can be removed cleanly the first time.',
            image: '/images/fidm/camera-based-detect-locating-system.webp',
          },
          {
            title: 'Artificial Intelligence',
            problem:
              'A jewellery factory floor is electrically hostile — polishing motors and the electromagnets in the washer machines throw off interference that fools a plain sensor.',
            solution:
              'AI filtering cuts failure detection by 90% even in noisy environments, so the reading holds up next to running machinery.',
            image: '/images/fidm/artificial-intelligence.webp',
          },
          {
            title: 'High Speed Conveyor Design',
            problem:
              'A fast test is wasted if someone still has to sort the batch by hand afterwards — the bottleneck just moves down the line.',
            solution:
              'Pieces travel the conveyor and defective ones are segregated from clean ones as they are scanned.',
            image: '/images/fidm/highspeed-conveyor-design.webp',
          },
          {
            title: 'Intuitive Android-based Touch Screen',
            problem:
              'Tying quality control to a handful of trained specialists caps throughput and stops entirely when they are on leave.',
            solution:
              'An Android touchscreen interface any staff member can operate with no training — and up to 10× less manpower on the task.',
            image: '/images/fidm/intitive-android-based-touch-screen.webp',
          },
          {
            title: 'Adjustable Height',
            problem:
              'Bridal sets, thick bangles and layered haarams do not fit through a fixed scanning gap sized for thin chains.',
            solution:
              'Scanning height adjusts up to 7cm, so double-sized jewels go through the same machine (dual scan model).',
            image: '/images/fidm/adjustable-height.webp',
          },
          {
            title: 'Compact & Light Weight',
            problem:
              'Neither a working factory floor nor a retail counter has a spare corner for a large inspection rig.',
            solution:
              'A 1450 × 400 × 200mm footprint that fits into an existing line or sits behind the counter.',
            image: '/images/fidm/compact-light-weight.webp',
          },
          {
            title: 'Online Remote Drive',
            problem:
              'A machine down in a regional workshop used to mean waiting days for an engineer to travel out to it.',
            solution:
              'The machine can be serviced and monitored from anywhere in the world, so most issues are resolved without a site visit.',
            image: '/images/fidm/online-remote-anydesk.webp',
          },
          {
            title: 'IOT 4.0 Compatible',
            problem:
              'Owners running several branches had no way to see what was actually being scanned, or whether the check was being done at all.',
            solution:
              'Machine data is stored online and viewable from a mobile app or the web, across every shift and location.',
            image: '/images/fidm/iot-4-compatable.webp',
          },
        ],
      },
      {
        type: 'specs',
        heading: 'The two machines doing this work',
        intro:
          'Both models run the same detection; the difference is throughput and the space you have for it.',
        tables: [
          {
            title: 'V4.0 Standard',
            image: '/images/expo/fidm.webp',
            imageAlt: 'FIDM V4.0 Standard',
            rows: [
              ['Checking Time', '3 sec/component (Dual scan)'],
              ['Dimensions (L×B×H)', '1450mm × 400mm × 200mm'],
              ['Power', '50Hz, 230V, 1 Phase, 60W'],
              ['Operating Temp', '0 to 40 °C'],
              ['Motor Speed', '100 Rpm'],
            ],
          },
          {
            title: 'V4.0 Compact',
            image: '/images/fidm/v4-compact.webp',
            imageAlt: 'FIDM V4.0 Compact',
            rows: [
              ['Checking Time', '6 sec/component (Single scan)'],
              ['Dimensions (L×B×H)', '850mm × 450mm × 200mm'],
              ['Power', '50Hz, 230V, 1 Phase, 60W'],
              ['Operating Temp', '0 to 40 °C'],
              ['Motor Speed', '100 Rpm'],
            ],
          },
        ],
      },
    ],
    tags: ['FIDM', 'Product Launch', 'Patented'],
  },
  {
    slug: 'easycliq-holo-360-photography-studio-launch',
    title: 'EasyCLIQ HOLO — The 360° Jewellery Photography Studio',
    excerpt:
      'Photographing jewellery used to mean a photographer, a lighting rig, and hours of editing before a single piece went online. HOLO takes a product from the turntable to a publish-ready image in under two minutes.',
    category: 'product-launches',
    categoryLabel: 'Product Launches',
    date: '2022-08-08',
    dateLabel: '08 Aug 2022',
    readingTime: 4,
    author: 'Magnic Team',
    image: '/images/expo/holo.webp',
    imageAlt: 'EasyCLIQ HOLO 360° jewellery photography studio',
    // Titles taken from the actual YouTube listings.
    videos: [
      {
        youtubeId: 'KLP3RhHIN4g',
        title: 'EasyCLIQ — Magnic Technologies Pvt Ltd',
      },
      {
        youtubeId: 'eq-60-HB4qQ',
        title: 'Customer Story — Sri Krishna Nagai Maligai, Madurai',
      },
    ],
    body: [
      'EasyCLIQ is a comprehensive jewellery photography studio that creates quality photos on par with professional photography. It speeds up image capturing, completely reduces the post-production burden, streamlines photography sessions, and can directly publish the photos in both digital and print mediums.',
      'EasyCLIQ is unique and compact, and it enables you to take perfect shots of your products in a 360° spin while retaining their true colour and highlighting every intrinsic detail — ultimately saving your most valuable resources: time, money, and manpower.',
    ],
    // Content and imagery below are taken from magnic.in/products/easycliq-holo
    sections: [
      {
        type: 'text',
        heading: 'The problem, before EasyCLIQ',
        image: '/images/holo/quality-photos.webp',
        imageAlt: 'Manual jewellery photography setup',
        body: [
          'For a jewellery business the photograph is the storefront. A buyer scrolling a marketplace decides in seconds, and they decide on the image — not the piece.',
          'Getting that image was the hard part. Someone had to set the light exposure by hand for every piece, and gold, silver, diamonds and coloured stones each behave differently under the same lamp. Get it wrong and the metal reads with a colour cast — antique gold in particular came out looking nothing like the piece in the tray.',
          'Then came the part nobody counted: post-production. Cutting the background out of every shot, correcting the tone, resizing for each platform. A seasonal collection of a few hundred SKUs simply did not scale, and the work needed a professional to do it at all.',
        ],
      },
      {
        type: 'comparison',
        heading: 'What changed after the launch',
        intro:
          'The same collection, shot two ways — with a photographer and an editing queue, and with an EasyCLIQ studio on the counter.',
        beforeLabel: 'Before EasyCLIQ',
        afterLabel: 'After EasyCLIQ',
        pairs: [
          {
            before: 'Light exposure was set by trial and error for every piece, and getting it right depended on the photographer’s eye.',
            after: 'Pre-defined light and reflection settings are saved and recalled, cutting setting time by 75%.',
          },
          {
            before: 'Antique and coloured gold photographed with a colour cast, so the image misrepresented the actual piece.',
            after: '90+ CRI lighting retains the true colour of the product, removing the need for photo enhancement.',
          },
          {
            before: 'Every image went into an editing queue for background removal and correction before it could be used.',
            after: 'Background removal happens automatically on capture — the post-production step disappears.',
          },
          {
            before: 'Small apertures meant part of the piece fell out of focus; matching multiple shots by hand was slow.',
            after: 'Ultra-focus captures multiple focus points and merges them into one high-clarity image in seconds.',
          },
          {
            before: 'Shooting required a professional photographer, so output was capped by their availability.',
            after: 'A marketing staff member can operate it with little effort — one customer reported output up nearly 70%.',
          },
          {
            before: 'Still images only, exported and reformatted by hand for each platform.',
            after: '360° spins, videos and print-ready formats export directly for web, catalogue, flyer or hoarding.',
          },
        ],
      },
      {
        type: 'gallery',
        heading: 'What comes out of it',
        intro: 'Unretouched output from an EasyCLIQ studio — no external editing applied.',
        images: [
          { src: '/images/holo/sample-necklace.webp', alt: 'Gemstone necklace shot in EasyCLIQ' },
          { src: '/images/holo/sample-diamond-ring.webp', alt: 'Diamond ring shot in EasyCLIQ' },
          { src: '/images/holo/sample-earring.webp', alt: 'Earring shot in EasyCLIQ' },
          { src: '/images/holo/sample-peacock-ring.webp', alt: 'Peacock ring shot in EasyCLIQ' },
        ],
      },
      {
        type: 'usecases',
        heading: 'Where it earns its place',
        intro: 'Three places the studio replaces a workflow that used to need outside help.',
        items: [
          {
            title: 'Retail Showrooms',
            text: 'Sits on the counter so new stock is photographed and posted to social media the day it arrives, without booking a photographer.',
          },
          {
            title: 'Manufacturers & Wholesalers',
            text: 'Catalogues a full collection in-house, so new designs reach buyers and the online marketplace without waiting on a studio.',
          },
          {
            title: 'Online Sellers',
            text: 'Produces 360° spins and clean cutouts to the format marketplaces demand, straight out of the machine.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The result, in numbers',
        items: [
          { value: '< 2 Min', label: 'To the best shot for social media' },
          { value: '75%', label: 'Reduction in setting time' },
          { value: '100,000+', label: 'Photo clicks recorded globally' },
          { value: '60+', label: 'Canon camera models supported' },
        ],
      },
      {
        type: 'problemsolutions',
        heading: 'Every part of the studio answers a problem from the shop floor',
        intro:
          'Shoot, edit and publish — each stage exists because a jeweller was losing time somewhere in it.',
        items: [
          {
            title: 'Shoot — Controlled Studio Lighting',
            problem:
              'Photographers set exposure by hand for each piece, and gold, silver and gemstones all render differently under the same light.',
            solution:
              'Light intensity is controllable from 0 to 25,000 lux with 90+ CRI, and settings are pre-defined per product so every shoot starts correct.',
            image: '/images/holo/shoot.webp',
          },
          {
            title: 'Shoot — 360° Turntable',
            problem:
              'A static photograph cannot show a buyer what a piece looks like from the side, and shooting each angle by hand multiplies the work.',
            solution:
              'A turntable running 0–10 rpm captures a full 360° spin, producing interactive views and video without repositioning the piece.',
            image: '/images/holo/hardware-features.webp',
          },
          {
            title: 'Edit — Ultra-Focus Image Processing',
            problem:
              'At the apertures needed for jewellery detail, part of the piece always falls out of focus, and merging shots by hand is slow work.',
            solution:
              'Ultra-focus captures the product at multiple focus points and merges them into a single high-clarity picture in a fraction of a second.',
            image: '/images/holo/crystal-clear.webp',
          },
          {
            title: 'Edit — Automatic Background Removal',
            problem:
              'Cutting the background from every image was a routine, unavoidable cost that scaled directly with catalogue size.',
            solution:
              'The background is removed precisely on every capture and the image sharpened to global ecommerce standards, with no manual step.',
            image: '/images/articles/cmp-bg-removal.webp',
          },
          {
            title: 'Publish — Direct Export',
            problem:
              'Finished images still had to be resized and reformatted for the website, the marketplace, the catalogue and the print run.',
            solution:
              'Still images, 360° spins and videos export as scalable formats for digital platforms and for print — catalogue, flyer or hoarding.',
            image: '/images/holo/publish.webp',
          },
        ],
      },
      {
        type: 'specs',
        heading: 'The machine doing this work',
        tables: [
          {
            title: 'EasyCLIQ HOLO',
            image: '/images/expo/holo.webp',
            imageAlt: 'EasyCLIQ HOLO studio',
            rows: [
              ['LED CRI', '90+'],
              ['Light Intensity', '0–25,000 lux (Controllable)'],
              ['Turntable Motor Speed', '0–10 Rpm (Controllable)'],
              ['Supported Camera', 'All Canon Cameras'],
              ['Ornament Load', '1 Kg'],
              ['Power Supply', '230V | Max 400W'],
              ['Dimensions', '610L × 680W × 772H'],
              ['Product Weight', '90 Kg'],
            ],
          },
        ],
      },
    ],
    tags: ['EasyCLIQ HOLO', 'Product Launch', '360° Photography'],
  },
  {
    slug: 'easycliq-mini-in-house-photography-studio-launch',
    title: 'EasyCLIQ MINI — AI-Powered Jewellery Photography, Entirely In-House',
    excerpt:
      'Smaller jewellers sent their stock out to a photographer, waited days, and paid per shoot — then paid again for a model shoot to show the piece worn. MINI puts an AI-powered studio on the counter and does both.',
    category: 'product-launches',
    categoryLabel: 'Product Launches',
    also: ['news'],
    date: '2026-05-29',
    dateLabel: '29 May 2026',
    readingTime: 4,
    author: 'Magnic Team',
    image: '/images/expo/mini.png',
    imageAlt: 'EasyCLIQ MINI compact jewellery photography studio',
    // Title taken from the actual YouTube listing.
    videos: [
      {
        youtubeId: 'n-AmbKBKplw',
        title:
          'Stop Outsourcing! Create Professional Jewellery Photos & Videos In-House — MINI Photography Machine',
      },
    ],
    body: [
      'Looking to capture stunning, professional-looking photos and videos of your jewellery products? Look no further than EasyCLIQ MINI — a compact and user-friendly product photography studio machine from Magnic Technologies Pvt Ltd.',
      'The EasyCLIQ MINI Jewellery Product Photography Studio Machine is designed to transform the way jewellery businesses create stunning visuals, making professional photography simple, fast, and completely in-house.',
      'What makes it more than a lightbox is the AI. The software removes the background on every capture, and it places the ornament onto a model — so a piece can be shown both as a clean cutout and as it looks when worn, without booking a photographer or a model for either.',
    ],
    // Content and imagery below are taken from magnic.in/products/easycliq-mini
    sections: [
      {
        type: 'text',
        heading: 'The problem, before EasyCLIQ MINI',
        image: '/images/mini/precision-camera-mount-system.webp',
        imageAlt: 'EasyCLIQ MINI precision camera mount',
        body: [
          'A large studio makes sense for a manufacturer shooting thousands of SKUs. For a single showroom or a small workshop, it never did — the floor space alone ruled it out, let alone the cost.',
          'So smaller jewellers outsourced. That meant packing up gold stock, sending it to a photographer, and waiting days for images to come back. Every shoot carried a fee, every reshoot carried another, and the pieces were off the premises the whole time.',
          'The alternative was worse: phone photos under showroom lighting, which flatten the metal and misrepresent the stones. Either way, the images going online were not made by the people who knew the jewellery best.',
        ],
      },
      {
        type: 'comparison',
        heading: 'What changed after the launch',
        intro:
          'The same new collection, handled two ways — sent out to a photographer, or shot on the counter before the shop opens.',
        beforeLabel: 'Before MINI',
        afterLabel: 'After MINI',
        pairs: [
          {
            before: 'Stock was packed up and sent out to a photographer, leaving the premises for days at a time.',
            after: 'The jewellery never leaves the showroom — the studio sits on the counter and the piece goes straight back in the case.',
          },
          {
            before: 'Images came back days later, so a new collection could not be listed the week it arrived.',
            after: 'A piece goes from the turntable to a publish-ready image in under 3 minutes.',
          },
          {
            before: 'Every shoot carried a fee, and every reshoot carried another one.',
            after: 'One machine, no per-shoot cost and no software subscription — reshoot as many times as you like.',
          },
          {
            before: 'A full studio needed floor space a single showroom could not spare.',
            after: 'A compact footprint designed to sit on a retail counter, not to occupy a room.',
          },
          {
            before: 'Results varied between shoots, so a catalogue never looked like one consistent set.',
            after: 'Template memory recalls the exact light and camera settings per product type, so every SKU matches.',
          },
          {
            before: 'Showing a piece as it looks when worn meant a second shoot — hiring a model, and paying for the studio time to go with it.',
            after: 'The AI places the ornament onto a model in software, so the worn view comes out of the same capture.',
          },
          {
            before: 'Smaller budgets meant settling for weaker tooling than the big manufacturers used.',
            after: 'MINI runs the same AI-powered EasyCLIQ software as the X1 and X3 — the capability is identical.',
          },
        ],
      },
      {
        type: 'gallery',
        heading: 'What comes out of it',
        intro: 'Output shot in an EasyCLIQ studio — no external editing applied.',
        images: [
          { src: '/images/mini/sample-necklace.webp', alt: 'Antique gold necklace' },
          { src: '/images/mini/sample-ring.webp', alt: 'Diamond flower ring in rose and white gold' },
          { src: '/images/mini/sample-earrings.webp', alt: 'Gold and enamel chandelier earrings' },
          { src: '/images/mini/sample-bangle.webp', alt: 'Antique temple-style gold bangle pair' },
        ],
      },
      {
        type: 'usecases',
        heading: 'Who it was built for',
        intro: 'The businesses a full-size studio was never going to fit.',
        items: [
          {
            title: 'Retail Counters',
            text: 'Small enough to live behind the counter, so new arrivals are photographed and posted the same morning they are unpacked.',
          },
          {
            title: 'Small Studios',
            text: 'Professional results without the floor space or the capital a large-format studio demands.',
          },
          {
            title: 'Growing Businesses',
            text: 'The same AI-powered software as the X1 and X3, so the workflow learned on a MINI carries over when volume justifies an upgrade.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The result, in numbers',
        items: [
          { value: '< 3 Min', label: 'Product to publish-ready image' },
          { value: '1-Click', label: 'AI background removal' },
          { value: 'AI', label: 'Ornament placed onto a model' },
          { value: '90+', label: 'LED CRI for true colour' },
        ],
      },
      {
        type: 'problemsolutions',
        heading: 'Every part of the studio answers a problem from the counter',
        intro:
          'The MINI drops the robotics of the larger machines, but nothing that affects the photograph itself — and it runs the full AI-powered software suite.',
        items: [
          {
            title: 'AI Model Placement',
            problem:
              'A buyer wants to see how a piece sits when worn, but a model shoot means hiring a model, a photographer and studio time — a second production on top of the product shoot.',
            solution:
              'The AI places the ornament onto a model directly in the software, so the worn view is generated from the same capture as the product shot.',
            image: '/images/mini/ai-powered-software.webp',
          },
          {
            title: 'Professional 10-Light Studio System',
            problem:
              'Showroom lighting flattens metal and throws a colour cast, and gold, silver, diamonds and coloured stones all need different treatment.',
            solution:
              '2 key, 2 rim, 2 bottom turntable, 2 background fill and 2 spot lights, each independently controllable from 3000K warm white to 6000K cool daylight.',
            image: '/images/mini/studio-10-light-system.webp',
          },
          {
            title: 'Precision Camera Mount',
            problem:
              'Handheld or tripod shooting means the framing shifts between pieces, so a catalogue never looks like a matched set.',
            solution:
              'A purpose-built mount holds your Canon at the exact angle for each jewellery category — consistent composition across thousands of shots.',
            image: '/images/mini/precision-camera-mount-system.webp',
          },
          {
            title: 'Backlighted Bottom Turntable',
            problem:
              'A shadow pooling under the product is the clearest giveaway of an amateur shot, and it is tedious to remove afterwards.',
            solution:
              'A motorised, back-illuminated turntable eliminates under-product shadow for a clean floating look, and drives smooth 360° spins.',
            image: '/images/mini/backlighted-bottom-turntable.webp',
          },
          {
            title: 'Dual Turntable System',
            problem:
              'Necklaces and earrings photographed flat on a surface do not show how the piece actually hangs when worn.',
            solution:
              'Top and bottom turntables give a full 360° — hanging shots from above and full rotation from below, in one compact studio.',
            image: '/images/mini/dual-turntable-system.webp',
          },
          {
            title: 'AI-Powered Background Removal',
            problem:
              'Cutting out every image was the hidden cost of going online, and it grew with every new SKU.',
            solution:
              'AI removal with proprietary Light Mask technology delivers a clean cutout on every capture — no selection tools, no manual editing, no post-production queue.',
            image: '/images/mini/bg-removal-before-after.webp',
          },
          {
            title: 'Template Making',
            problem:
              'Re-dialling light and camera settings for every shoot wasted time and still produced drift between batches.',
            solution:
              'Save the settings once per product type and recall them with one click, so results stay identical across the catalogue.',
            image: '/images/mini/sw-template-making.webp',
          },
          {
            title: 'Scratch-Free Jewellery Mannequins',
            problem:
              'Props and stands that mark or scratch a piece are unacceptable when the stock is gold you intend to sell.',
            solution:
              'Premium acrylic mannequins with matte and glossy black turntables protect the jewellery across thousands of shoots.',
            image: '/images/mini/scratch-free-mannequins.webp',
          },
          {
            title: 'Web-Ready Publish Page',
            problem:
              'Finished images still needed resizing, compressing and naming before anything could be uploaded.',
            solution:
              'Automatic resizing, compression and barcode-tagged file saving — images are platform-ready the moment you hit Publish.',
            image: '/images/mini/sw-web-ready-publish.webp',
          },
        ],
      },
      {
        type: 'specs',
        heading: 'The machine doing this work',
        tables: [
          {
            title: 'EasyCLIQ MINI',
            image: '/images/expo/mini.png',
            imageAlt: 'EasyCLIQ MINI',
            rows: [
              ['Power Supply', '230V | 50Hz | 1 Phase'],
              ['Operating Temp.', '0°C to 40°C'],
              ['LED CRI', '90+'],
              ['Colour Temperature', '3000K – 6000K (Variable)'],
              ['Turntable', 'Top + Bottom (360° Both)'],
              ['Supported Camera', 'All Canon Camera Models'],
              ['Best For', 'Compact studios & retail counters'],
            ],
          },
        ],
      },
    ],
    tags: ['EasyCLIQ MINI', 'Product Launch', 'AI-Powered', 'In-House Photography'],
  },
  {
    slug: 'easycliq-x1-ai-robotic-photography-studio-launch',
    title: "EasyCLIQ X1 — The World's First AI-Powered Robotic Jewellery Photography Studio",
    excerpt:
      'A lightbox lights the piece. Someone still has to move the camera for every angle — and the angles never quite match between SKUs. X1 hands that job to a robot.',
    category: 'product-launches',
    categoryLabel: 'Product Launches',
    also: ['news'],
    date: '2026-07-06',
    dateLabel: '06 Jul 2026',
    readingTime: 5,
    author: 'Magnic Team',
    image: '/images/expo/x1.png',
    imageAlt: 'EasyCLIQ X1 AI-powered robotic jewellery photography studio',
    // Titles taken from the actual YouTube listings.
    videos: [
      {
        youtubeId: 'WOom_qzO9dQ',
        title: 'Capture Gold & Diamond Jewellery Products Like a Pro with EasyCLIQ X1',
      },
      {
        youtubeId: '-VG7y3iBSa8',
        title: 'From Photos to 360° Videos — Our EasyCLIQ X1 Photography Studio Machine Does It All',
      },
      {
        youtubeId: 'sZ8ueaLj8rY',
        title: 'Automated Jewellery Photography Saves Time & Boosts Sales | EasyCLIQ X1',
      },
    ],
    body: [
      'The EasyCLIQ X1 is the world’s first AI-powered robotic photography studio built specifically for the jewellery industry. It automates the entire photography workflow — from lighting to background removal — delivering flawless, catalogue-ready images in under 3 minutes.',
      'Precision robotic sliders position the camera at every required angle automatically, while the integrated 360° top and bottom turntable ensures not a single facet of your jewellery goes unnoticed. The result: interactive 3D product views that boost your e-commerce conversions.',
    ],
    // Content and imagery below are taken from magnic.in/products/easycliq-x1
    sections: [
      {
        type: 'text',
        heading: 'The problem, before EasyCLIQ X1',
        image: '/images/x1/mount.jpg',
        imageAlt: 'Robotic camera mount capturing a piece of jewellery',
        body: [
          'A lightbox solves lighting. It does not solve the camera. Marketplaces want five to eight images of every SKU from set angles, and somebody still has to move the camera to each one — loosen the mount, reposition, re-focus, shoot, repeat.',
          'Done by hand, those angles drift. The ring photographed on Monday sits a few degrees off the one photographed on Friday, and a catalogue that should look like a matched set looks assembled from different shoots. Going from a macro detail shot to a full-product overview meant moving the rig again.',
          'Hanging pieces were worse. A necklace laid flat does not show how it falls, and propping it up put a stand in the frame that then had to be edited out of every image.',
        ],
      },
      {
        type: 'comparison',
        heading: 'What changed after the launch',
        intro:
          'The same SKU, shot two ways — with a camera someone repositions by hand, and with one a robot places.',
        beforeLabel: 'Before X1',
        afterLabel: 'After X1',
        pairs: [
          {
            before: 'The camera was loosened, moved and re-focused by hand for every required angle.',
            after: 'A YZ-axis robotic slider with tilt and zoom positions the camera at any angle in a single click.',
          },
          {
            before: 'Angles drifted between sessions, so a catalogue never looked like one consistent set.',
            after: 'Robotic positioning is repeatable to the same coordinates across thousands of pieces — no reshooting, ever.',
          },
          {
            before: 'Necklaces and pendants were laid flat, or propped on a stand that had to be edited out afterwards.',
            after: 'A dedicated top turntable suspends the piece in mid-air — natural, wear-ready presentation with no visible support.',
          },
          {
            before: 'Moving between macro detail and a full-product overview meant physically rebuilding the setup.',
            after: 'Tilt and zoom shift from close detail to full overview without anyone touching the machine.',
          },
          {
            before: 'Cinematic product video needed a camera operator, or simply did not get made.',
            after: 'The same robotic motion shoots video and 360° spins in the same pass as the stills.',
          },
          {
            before: 'Every image went into an editing queue for background removal before it could be published.',
            after: 'AI removal with Light Mask technology delivers a clean cutout on capture — and the AI can place the ornament onto a model for the worn view.',
          },
        ],
      },
      {
        type: 'gallery',
        heading: 'What comes out of it',
        intro: 'Output shot in an EasyCLIQ X1 — no external editing applied.',
        images: [
          { src: '/images/x1/sample-necklace.webp', alt: 'Antique gold choker with ruby and emerald' },
          { src: '/images/x1/sample-ring.webp', alt: 'Diamond ring, front view' },
          { src: '/images/x1/sample-earrings.webp', alt: 'Gold heart earrings' },
          { src: '/images/x1/sample-bangle.webp', alt: 'Antique gold bangle with gemstones' },
        ],
      },
      {
        type: 'usecases',
        heading: 'Who it was built for',
        intro: 'Businesses where the catalogue is large enough that consistency stops being optional.',
        items: [
          {
            title: 'Jewellery Studios',
            text: 'Shooting a full collection to one repeatable standard, where every piece has to match the last across every angle.',
          },
          {
            title: 'Online Retailers',
            text: 'Producing the five-to-eight angle sets and 360° spins marketplaces expect, straight out of one machine.',
          },
          {
            title: 'Brands Producing Video',
            text: 'Cinematic reveal footage per SKU without a camera operator, using the same robotic motion as the stills.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The result, in numbers',
        items: [
          { value: "World's 1st", label: 'AI robotic jewellery studio' },
          { value: '< 3 Min', label: 'Product to publish-ready image' },
          { value: '360°', label: 'Top & bottom turntable spin' },
          { value: '1-Click', label: 'AI background removal' },
        ],
      },
      {
        type: 'problemsolutions',
        heading: 'Every part of the studio answers a problem from the floor',
        intro:
          'What separates the X1 from a lightbox is that it moves — and what separates it from a camera rig is that it remembers.',
        items: [
          {
            title: 'Precision Robotic Camera Controls',
            problem:
              'Repositioning the camera by hand for every angle was slow, and no two operators framed a piece the same way twice.',
            solution:
              'A YZ-axis robotic slider with tilt and zoom captures every angle with unmatched repeatability — no repositioning, no reshooting.',
            image: '/images/x1/robotic-arm-controls.webp',
          },
          {
            title: 'Top Turntable — Hanging Shots',
            problem:
              'A necklace photographed flat does not show how it hangs, and any stand used to lift it ends up in the frame.',
            solution:
              'A dedicated top turntable suspends pendants, necklaces and earrings in mid-air — no stand, no support arm, just the jewellery, perfectly centred.',
            image: '/images/mini/dual-turntable-system.webp',
          },
          {
            title: '360° Top & Bottom Turntable',
            problem:
              'Static images cannot show a buyer the sides and back of a piece, and shooting each rotation by hand multiplies the work.',
            solution:
              'A dual turntable system delivers a full 360° spin from above and below, producing the interactive 3D views that lift e-commerce conversion.',
            image: '/images/x1/turntable-studio.webp',
          },
          {
            title: 'Professional 10-Light Studio System',
            problem:
              'Gold, silver, diamonds and coloured gemstones all render differently, and a fixed lighting setup flatters one at the expense of the rest.',
            solution:
              '2 key, 2 rim, 2 bottom turntable, 2 background fill and 2 spot lights, each independently controllable from 3000K to 6000K at 90+ CRI.',
            image: '/images/x1/hw-lighting-studio.webp',
          },
          {
            title: 'AI Model Placement',
            problem:
              'Showing a piece as it looks when worn meant a separate production — a model, a photographer, and studio time on top of the product shoot.',
            solution:
              'The AI places the ornament onto a model in software, so the worn view is generated from the same capture as the product shot.',
            image: '/images/x1/ai-software.webp',
          },
          {
            title: 'AI-Powered Background Removal',
            problem:
              'Cutting the background from every image was an unavoidable cost that scaled directly with the size of the catalogue.',
            solution:
              'AI removal enhanced with proprietary Light Mask technology delivers a precise cutout on every capture — no selection tools, no post-production.',
            image: '/images/x1/bg-removal-necklace.webp',
          },
          {
            title: 'Template Making',
            problem:
              'Rebuilding the light and camera setup for each product category wasted time and reintroduced drift between batches.',
            solution:
              'Save all light settings, colour temperatures and robotic camera positions per category, then recall the exact setup with one click.',
            image: '/images/mini/sw-template-making.webp',
          },
          {
            title: 'Web-Ready Publish Page',
            problem:
              'Finished images still needed resizing, compressing and naming before a single one could be uploaded.',
            solution:
              'Automatic resizing, compression and barcode-tagged file saving — images are platform-ready the moment you hit Publish.',
            image: '/images/mini/sw-web-ready-publish.webp',
          },
        ],
      },
      {
        type: 'specs',
        heading: 'The machine doing this work',
        tables: [
          {
            title: 'EasyCLIQ X1',
            image: '/images/expo/x1.png',
            imageAlt: 'EasyCLIQ X1',
            rows: [
              ['Power Supply', '230V | 50Hz | 1 Phase | 1300W'],
              ['Operating Temperature', '0°C to 40°C'],
              ['Machine Weight', '80 KGS'],
              ['Maximum Object Weight', 'Top – 1 KG | Bottom – 5 KG'],
              ['Turntable Size', '40 cm'],
              ['Machine Dimensions', '1000mm (L) × 710mm (W) × 1300mm (H)'],
              ['LED CRI', '90+'],
              ['Supported Camera', 'All Canon Camera Models'],
            ],
          },
        ],
      },
    ],
    tags: ['EasyCLIQ X1', 'Product Launch', 'AI-Powered', 'Robotic'],
  },
  {
    slug: 'easycliq-x3-large-format-photography-robot-launch',
    title: 'EasyCLIQ X3 — One Studio for Every Product You Sell',
    excerpt:
      'A jewellery studio cannot photograph a shoe. Businesses with mixed catalogues ran two workflows, or outsourced everything that would not fit. X3 takes a 60 cm turntable and 10 KG on the bottom plate.',
    category: 'product-launches',
    categoryLabel: 'Product Launches',
    also: ['news'],
    date: '2026-02-03',
    dateLabel: '03 Feb 2026',
    readingTime: 5,
    author: 'Magnic Team',
    image: '/images/articles/price-x3.png',
    imageAlt: 'EasyCLIQ X3 large-format AI robotic product photography studio',
    // Titles taken from the actual YouTube listings.
    videos: [
      {
        youtubeId: 'G4w7H-gI8rQ',
        title: 'Newly Launched X3 AI Robotic Photography Studio Machine — Jubilant Expo',
      },
      {
        youtubeId: 'dqC5OEe-fLM',
        title: 'EasyCLIQ X3 AI-Robotic Product Photography Studio Takes Perfect Photos',
      },
      {
        youtubeId: 'uY0AN0HX-II',
        title: 'Customer Story — ANS Jewellery, Salem',
      },
    ],
    body: [
      'EasyCLIQ X3 is a large-format AI-powered robotic photography studio built for e-commerce businesses with diverse product catalogues. Its bigger studio chamber and advanced robotic arm handle everything from delicate jewellery to bulky footwear and bags.',
      'The X3’s precision robotic camera arm captures products from every angle automatically, while the AI software manages lighting, camera settings and background removal. Consistent, catalogue-quality images at scale — ready to publish on any platform in seconds.',
    ],
    // Content and imagery below are taken from magnic.in/products/easycliq-x3
    sections: [
      {
        type: 'text',
        heading: 'The problem, before EasyCLIQ X3',
        image: '/images/x3/inside.jpg',
        imageAlt: 'Inside the EasyCLIQ X3 studio chamber',
        body: [
          'A studio sized for rings and pendants does exactly one job well. The moment a business also sells handbags, footwear, electronics or anything with real bulk, that machine stops being the answer — the product physically will not fit on the plate.',
          'So catalogues got split. Jewellery went through the studio; everything else went to an outside photographer, or onto a table under a softbox. Two workflows, two visual standards, and a storefront where half the images plainly did not match the other half.',
          'Long bridal pieces had the same problem from the other direction. A haram that runs the length of the frame needs a chamber built for it, not a compact box it has to be folded into.',
        ],
      },
      {
        type: 'comparison',
        heading: 'What changed after the launch',
        intro:
          'A mixed catalogue, handled two ways — split across a studio and an outside photographer, or run through one machine.',
        beforeLabel: 'Before X3',
        afterLabel: 'After X3',
        pairs: [
          {
            before: 'Anything bulkier than jewellery would not fit the plate, so it went to an outside photographer.',
            after: 'A 60 cm turntable takes up to 10 KG on the bottom plate — shoes, bags and boxed electronics included.',
          },
          {
            before: 'Jewellery and non-jewellery images came from different setups, so the storefront looked inconsistent.',
            after: 'Every category runs through the same machine, the same lighting and the same software — one visual standard.',
          },
          {
            before: 'Long bridal pieces and full harams had to be folded or cropped to fit a compact chamber.',
            after: 'A large-format chamber holds a full-length haram without compromising the composition.',
          },
          {
            before: 'Placing a large product meant reaching into the chamber from the front and disturbing the setup.',
            after: 'Two-sided slidable doors open for easy placement and provide natural side lighting at the same time.',
          },
          {
            before: 'Cinematic product video meant a camera operator, a rig, and a separate shoot per SKU.',
            after: 'Cinematography mode uses the robotic arm for dynamic reveal footage — automated, and repeatable for every SKU.',
          },
          {
            before: 'Every image still went into an editing queue before it could be published.',
            after: 'AI removal with Light Mask delivers a clean cutout on capture — and the AI can place an ornament onto a model for the worn view.',
          },
        ],
      },
      {
        type: 'gallery',
        heading: 'What comes out of it',
        intro:
          'Four different product categories, one machine — no external editing applied.',
        images: [
          { src: '/images/x3/sample-haram.webp', alt: 'Antique temple-style long haram necklace' },
          { src: '/images/x3/sample-bag.webp', alt: 'Green leather bag, e-commerce product shot' },
          { src: '/images/x3/sample-shoe.webp', alt: 'Running shoe, e-commerce product shot' },
          { src: '/images/x3/sample-cutter.webp', alt: 'Electric fabric cutter, e-commerce product shot' },
        ],
      },
      {
        type: 'usecases',
        heading: 'Who it was built for',
        intro: 'Businesses whose catalogue outgrew a jewellery-sized studio.',
        items: [
          {
            title: 'Multi-Category Retailers',
            text: 'Jewellery, footwear, bags, electronics and cosmetics shot to one standard, without a second setup or a second vendor.',
          },
          {
            title: 'Bridal Jewellery Manufacturers',
            text: 'Full-length harams and heavy bridal sets photographed at their real size, in a chamber built to hold them.',
          },
          {
            title: 'High-Volume E-Commerce',
            text: 'Catalogue-quality stills, 360° spins and reveal video for every SKU, produced at the pace a marketplace listing schedule demands.',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'The result, in numbers',
        items: [
          { value: '10 KG', label: 'Maximum load on the bottom turntable' },
          { value: '60 cm', label: 'Large-format turntable' },
          { value: '< 3 Min', label: 'Product to publish-ready image' },
          { value: '360°', label: 'Top & bottom full spin' },
        ],
      },
      {
        type: 'problemsolutions',
        heading: 'Every part of the studio answers a problem from the floor',
        intro:
          'The X3 keeps everything the X1 does, then adds what a mixed, large-format catalogue actually needs.',
        items: [
          {
            title: 'Advanced Robotic Camera Arm',
            problem:
              'A slider built around small jewellery cannot reach the angles a boot or a handbag needs, and repositioning by hand reintroduces the inconsistency.',
            solution:
              'A precision robotic arm positions the camera at any angle across a far wider range of product sizes, with zero manual repositioning.',
            image: '/images/x3/robotic-arm.jpg',
          },
          {
            title: 'Two-Sided Slidable Doors',
            problem:
              'Loading a large product through a single front opening meant knocking the setup and re-checking the lighting each time.',
            solution:
              'Side-access doors with integrated lights allow effortless placement while delivering natural side lighting simultaneously. Place, close, shoot.',
            image: '/images/x3/slidable-doors.webp',
          },
          {
            title: 'Cinematography Mode',
            problem:
              'Product reveal video was a separate production — an operator, a rig, and footage that never matched between SKUs.',
            solution:
              'The robotic arm shoots cinematic reveal videos with dynamic camera movement, fully automated and perfectly repeatable across the catalogue.',
            image: '/images/x3/cinematography-mode.webp',
          },
          {
            title: '360° Dual Turntable System',
            problem:
              'Buyers of bags and footwear want to see the back and the sole, and static images simply do not answer those questions.',
            solution:
              'Top and bottom turntables deliver a complete 360° spin, handling products up to 10 KG on the bottom plate.',
            image: '/images/x3/dual-turntable-top.webp',
          },
          {
            title: 'Professional 10-Light Studio System',
            problem:
              'Gold, leather, fabric and moulded plastic each reflect differently — a lighting setup tuned for one flattens the others.',
            solution:
              '2 key, 2 rim, 2 bottom turntable, 2 background fill and 2 spot lights, each controllable from 3000K to 6000K at 90+ CRI.',
            image: '/images/x3/studio-lighting-rim.webp',
          },
          {
            title: 'Top Turntable — Hanging Shots',
            problem:
              'Necklaces and hanging accessories laid flat do not show how the piece falls, and a visible stand has to be edited out.',
            solution:
              'A dedicated top turntable suspends pendants, necklaces and hanging accessories in mid-air, with no visible support.',
            image: '/images/x3/top.jpg',
          },
          {
            title: 'AI Model Placement',
            problem:
              'Showing a piece worn meant a second production — a model, a photographer and studio time on top of the product shoot.',
            solution:
              'The AI places the ornament onto a model in software, so the worn view comes out of the same capture as the product shot.',
            image: '/images/mini/ai-powered-software.webp',
          },
          {
            title: 'AI-Powered Background Removal',
            problem:
              'Across a mixed catalogue, cutting out every image was the single largest recurring cost of going online.',
            solution:
              'AI removal with proprietary Light Mask technology produces a precise cutout on every capture, whatever the product category.',
            image: '/images/mini/bg-removal-before-after.webp',
          },
          {
            title: 'Template Making',
            problem:
              'Switching between product categories meant rebuilding the lighting and camera setup, and drifting from the last batch.',
            solution:
              'Save light settings, colour temperatures and robotic camera positions per category, and recall the exact setup with one click.',
            image: '/images/mini/sw-template-making.webp',
          },
        ],
      },
      {
        type: 'specs',
        heading: 'The machine doing this work',
        tables: [
          {
            title: 'EasyCLIQ X3',
            image: '/images/articles/price-x3.png',
            imageAlt: 'EasyCLIQ X3',
            rows: [
              ['Power Supply', '230V | 50Hz | 1 Phase | 1600W'],
              ['Operating Temperature', '0°C to 40°C'],
              ['Machine Weight', '140 KGS'],
              ['Maximum Object Weight', 'Top – 1 KG | Bottom – 10 KG'],
              ['Turntable Size', '60 cm'],
              ['Machine Dimensions', '1340mm (L) × 965mm (W) × 1800mm (H)'],
              ['LED CRI', '90+'],
              ['Supported Camera', 'All Canon Camera Models'],
            ],
          },
        ],
      },
    ],
    tags: ['EasyCLIQ X3', 'Product Launch', 'AI-Powered', 'Multi-Category'],
  },
  {
    slug: 'jewellery-photography-machine-price-guide-2026',
    title: 'What Does a Jewellery Photography Machine Cost? (2026 Price Guide)',
    excerpt:
      'What does a jewellery photography machine cost in 2026? Market price tiers, EasyCLIQ MINI, X1, X3 and HOLO prices, hidden costs, and how to calculate the ROI.',
    category: 'buying-guide',
    categoryLabel: 'Buying Guide',
    also: ['guides'],
    date: '2026-06-26',
    dateLabel: '26 Jun 2026',
    readingTime: 11,
    author: 'Karthik',
    featured: true,
    pillar: true,
    image: '/images/articles/price-hero.jpg',
    imageAlt: 'Jewellery photographed in an EasyCLIQ studio',
    imageFit: 'cover',
    // Content and imagery taken from magnic.in/blog/jewellery-photography-machine-price-guide-2026
    body: [
      'Automated jewellery photography machines typically range from around USD 2,000 for a compact studio to USD 12,000+ for large-format robotic systems. The EasyCLIQ MINI starts near USD 2,100, the HOLO near USD 4,750, the X1 near USD 9,400 and the X3 near USD 11,500 — with software included and most jewellers recovering the cost by cutting outsourced photography and editing.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'What you are actually paying for',
        body: [
          'The price of a jewellery photography studio is driven by a few clear factors. The biggest are the size of jewellery it can handle, the camera and lighting system, whether it includes robotic camera motion and 360° video, and how complete the software automation is.',
          'A small fixed-lighting box with a built-in camera sits at the bottom of the range. A large-format studio with your own DSLR, ten controllable lights, a robotic camera and a full AI software suite sits at the top — because it does dramatically more, and replaces a photographer, an editor and a videographer.',
        ],
      },
      {
        type: 'text',
        heading: 'Market price tiers in 2026',
        image: '/images/articles/price-compact.jpg',
        imageAlt: 'Compact jewellery photography setup',
        body: [
          'Entry tier (around USD 2,000–4,000): compact lightboxes for small jewellery — rings, earrings, short chains. Good value if you never shoot large pieces.',
          'Mid tier (around USD 4,000–9,000): more capable studios with better lighting, 360° spin and stronger software, suitable for most jewellers and online sellers.',
          'Large / robotic tier (around USD 9,000–12,000+): large-format and robotic studios that photograph big bridal pieces, add cinematic video, and automate the entire workflow end to end.',
        ],
      },
      {
        type: 'specs',
        heading: 'EasyCLIQ price points (indicative)',
        intro:
          'Software is included on every model, and live currency conversion is shown on each product page.',
        tables: [
          {
            title: 'The EasyCLIQ range',
            image: '/images/articles/price-x3.png',
            imageAlt: 'EasyCLIQ X3 large-format jewellery photography studio',
            rows: [
              ['EasyCLIQ MINI', '≈ USD 2,100 — compact, retail counters'],
              ['EasyCLIQ HOLO', '≈ USD 4,750 — 360° spin studio'],
              ['EasyCLIQ X1', '≈ USD 9,400 — robotic, most popular'],
              ['EasyCLIQ X3', '≈ USD 11,500 — large-format, multi-category'],
            ],
          },
        ],
      },
      {
        type: 'text',
        heading: 'Hidden costs to watch',
        body: [
          'The advertised price is not the whole cost. Watch for software subscriptions that recur every month or year, background-removal or editing features locked behind higher tiers, and the editing time you still pay staff for if the machine does not finish the job.',
          'For imported machines, also factor in shipping, customs and — most importantly — the cost and delay of service and spare parts. A studio that is down for weeks waiting on an overseas part is expensive in lost listings. EasyCLIQ includes its software with no subscription and is supported locally across India and the Gulf.',
        ],
      },
      {
        type: 'text',
        heading: 'ROI: in-house vs outsourced',
        image: '/images/articles/price-inhouse.jpg',
        imageAlt: 'High-quality jewellery image produced in-house',
        body: [
          'The simplest way to judge value is to compare against what you spend now. If outsourced photography and editing costs, say, USD 1–3 per image and you shoot a few hundred SKUs a month, you are spending several thousand dollars a year — often more than the machine costs once.',
          'Beyond the direct saving, bringing photography in-house means same-day catalogue updates, full control over quality and styling, and the ability to produce 360° spins and video that outsourced stills cannot match. For most active jewellers, the studio pays for itself within the first year.',
        ],
      },
      {
        type: 'text',
        heading: 'How to choose the right budget',
        body: [
          'Match the machine to your jewellery, not to the lowest price. If you only shoot small pieces, an entry studio like the MINI is enough. If your range includes large bridal jewellery or you want robotic video, the X1 or X3 will serve you for years and cover your whole catalogue.',
          'When comparing quotes, normalise them: include software, editing time and support over three years, not just the upfront price. The best way to finalise a budget is to see your own jewellery photographed and get a formal quote.',
        ],
      },
    ],
    tags: ['Pricing', 'ROI', 'Buying Guide'],
  },
  {
    slug: 'easycliq-vs-gemlightbox-vs-orbitvu',
    title: 'EasyCLIQ vs GemLightbox vs Orbitvu Micro: Which Jewellery Photography Studio Is Right for You?',
    excerpt:
      'Compare EasyCLIQ, GemLightbox and Orbitvu Micro jewellery photography studios on capacity, 360° video, AI editing, price and support to choose the right one.',
    category: 'comparison',
    categoryLabel: 'Comparison',
    also: ['guides'],
    date: '2026-06-28',
    dateLabel: '28 Jun 2026',
    readingTime: 9,
    author: 'Karthik',
    featured: false,
    image: '/images/articles/cmp-hero.jpg',
    imageAlt: 'Jewellery photographed automatically inside an EasyCLIQ studio',
    imageFit: 'cover',
    // Content and imagery taken from magnic.in/blog/easycliq-vs-gemlightbox-vs-orbitvu
    body: [
      'EasyCLIQ is a fully automated jewellery photography studio that captures true-colour 360° photos and spin videos in under three minutes. Compared with compact lightboxes like GemLightbox and Orbitvu Micro, it photographs much larger jewellery, uses your own Canon DSLR for higher image quality, includes built-in AI background removal and robotic 360° video, and is made in India with on-site service.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Why the right photography studio matters for jewellers',
        body: [
          'For a jewellery business, product photography is not a nice-to-have — it is the storefront. Online buyers decide in seconds based on how a piece looks, and marketplaces, social media and your own website all demand clean, consistent, true-colour images. Poor photos cost you sales, even on beautiful jewellery.',
          'The challenge is that traditional photography is slow and expensive. Hiring a photographer, styling each piece, shooting, then editing out backgrounds can take 15–30 minutes per item. For a catalogue of hundreds of SKUs that refreshes every season, that simply does not scale. This is why automated photography studios have become standard equipment for serious jewellers.',
          'But not all studios are equal. Below we compare three popular options — EasyCLIQ, GemLightbox and Orbitvu Micro — on the things that actually affect your results and your costs.',
        ],
      },
      {
        type: 'usecases',
        heading: 'The six things to compare',
        intro:
          'Before looking at any brand, decide what matters for your business. In practice, six factors separate a studio that transforms your workflow from one that frustrates you within a month.',
        items: [
          { title: 'Capacity', text: 'The largest piece it can physically photograph.' },
          { title: 'Image quality', text: 'The camera and the lighting system it uses.' },
          { title: 'Automation', text: 'How much it does for you versus how much you still do manually.' },
          { title: 'Video', text: 'Whether it produces 360° spin and motion video, not just stills.' },
          { title: 'Total cost', text: 'Hardware, software subscriptions and editing time combined.' },
          { title: 'Support', text: 'Installation, training, warranty and spare parts where you are.' },
        ],
      },
      {
        type: 'text',
        heading: 'Capacity: can it shoot your largest pieces?',
        image: '/images/articles/cmp-long-necklace.jpg',
        imageAlt: 'A long necklace captured in full inside the EasyCLIQ X1',
        body: [
          'This is the single biggest differentiator for Indian and Gulf jewellers. Compact lightboxes such as GemLightbox and Orbitvu Micro are designed for small items — rings, earrings, pendants and short chains. They do an excellent job within that size, but a long haaram, a bridal set or a large temple necklace will not physically fit.',
          'The EasyCLIQ X1 and X3 are built for exactly these pieces. The X1 handles everything from rings to long necklaces, while the X3 takes a 60 cm turntable and up to 10 KG on the bottom plate — large enough for the biggest bridal jewellery, and even footwear and handbags. The compact EasyCLIQ MINI covers smaller pieces for retail counters.',
          'If your range includes anything large, capacity alone often decides the comparison: one EasyCLIQ can cover your entire catalogue, where a compact box would force you back to manual photography for your statement pieces.',
        ],
      },
      {
        type: 'text',
        heading: 'Image quality: the camera and lighting',
        image: '/images/articles/cmp-lighting.jpg',
        imageAlt: 'Independently controllable studio lighting inside the EasyCLIQ X1',
        body: [
          'Image quality comes down to two things: the camera and the lighting. EasyCLIQ works with your own Canon DSLR or mirrorless camera, so you get a full-size sensor and professional optics. Many compact studios rely on a built-in fixed camera or a smartphone, which limits resolution and macro detail.',
          'Lighting is just as important. The EasyCLIQ X1 uses ten independently controllable lights with adjustable colour temperature from 3000K (warm) to 6000K (cool daylight) and 90+ CRI, so gold reads as gold and diamonds sparkle without a colour cast. Fixed-lighting boxes give you far less control over how metal and gemstones render.',
        ],
      },
      {
        type: 'text',
        heading: 'Automation and software: a lightbox vs a full studio',
        image: '/images/articles/cmp-bg-removal.webp',
        imageAlt: 'One-click AI background removal on a piece of jewellery',
        body: [
          'A lightbox lights your product; a studio finishes the whole job. EasyCLIQ runs proprietary AI software that automates background removal (with Light Mask technology for clean edges), focus stacking for full-depth sharpness, template memory so every SKU in a category is shot identically, and one-click export to web-ready formats.',
          'GemLightbox and Orbitvu Micro both offer software, but typically as an app or licensed package — and background removal or advanced editing can sit behind subscription tiers. With EasyCLIQ the software is included, with no recurring subscription, and it is the same suite across the MINI, X1, X3 and HOLO.',
          'The practical effect is on time: because EasyCLIQ removes the editing step entirely, a piece goes from the turntable to a publish-ready image in under three minutes.',
        ],
      },
      {
        type: 'text',
        heading: '360° spin video and interactive imagery',
        image: '/images/articles/cmp-360.jpg',
        imageAlt: 'Multi-angle 360° spin output from EasyCLIQ',
        body: [
          'Stills sell, but interactive 360° spins sell more. All three studios can produce a 360° spin, but EasyCLIQ goes further with a top-and-bottom turntable (so necklaces can be suspended for natural, wear-ready shots) and, on the X1 and X3, robotic camera motion for cinematic reveal videos — the kind of footage that usually needs a film crew.',
          'These spins and videos export as ready-to-publish GIFs and MP4s for your website, marketplaces and social media, with no third-party video editing.',
        ],
      },
      {
        type: 'text',
        heading: 'Total cost of ownership and support',
        body: [
          'Sticker price is only part of the story. Factor in software subscriptions, the editing time you still pay for, and the cost and delay of importing a machine and getting it serviced. A cheaper box that still needs manual editing — or that takes weeks to repair — can cost more over a year.',
          'EasyCLIQ is designed and manufactured in Coimbatore, India, which keeps pricing competitive and, crucially, means local installation, training, warranty and spare parts across India and the Gulf. The EasyCLIQ MINI starts at around USD 2,100 and the X1 at around USD 9,400, with software included.',
        ],
      },
      {
        type: 'text',
        heading: 'Which should you choose?',
        body: [
          'If you only ever shoot small pieces and want the lowest possible entry cost, a compact lightbox can be enough. But if your catalogue includes larger jewellery, if you want the higher quality of your own DSLR, or if you want to eliminate editing and produce 360° video — EasyCLIQ is built for that, and one machine covers your whole range.',
          'The best way to decide is to see your own jewellery photographed. Book a free demo and compare the results side by side.',
        ],
      },
    ],
    tags: ['Comparison', 'GemLightbox', 'Orbitvu'],
  },
  {
    slug: 'how-to-photograph-large-indian-bridal-haaram-jewellery',
    title: 'How to Photograph Large Indian Bridal & Haaram Jewellery',
    excerpt:
      'How to photograph large Indian bridal jewellery and long haarams in true colour — lighting, background, framing, and an automated studio that does it in minutes.',
    category: 'how-to',
    categoryLabel: 'How-To',
    also: ['guides'],
    date: '2026-06-27',
    dateLabel: '27 Jun 2026',
    readingTime: 8,
    author: 'Karthik',
    featured: false,
    image: '/images/articles/bridal-hero.jpg',
    imageAlt: 'A large Indian bridal necklace photographed in true colour',
    imageFit: 'cover',
    // Content and imagery taken from
    // magnic.in/blog/how-to-photograph-large-indian-bridal-haaram-jewellery
    body: [
      'To photograph large bridal jewellery and long haarams well, you need even, shadow-free lighting with accurate colour, a background that drops out cleanly, and enough physical space to frame the full piece. An automated studio like the EasyCLIQ X1 or X3 captures full-length necklaces in true colour and 360° in under three minutes — no professional photographer required.',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Why large jewellery is uniquely hard to photograph',
        image: '/images/articles/bridal-detail.jpg',
        imageAlt: 'A detailed bridal necklace captured with even lighting',
        body: [
          'Large Indian bridal jewellery combines three of the hardest problems in product photography at once. The pieces are highly reflective — polished gold and faceted stones throw light in every direction. They are intensely detailed — every bead, kundan setting and engraving needs to stay sharp. And they are simply big, so they are difficult to light evenly and to fit in frame.',
          'Hand-held or improvised photography struggles with all three: you get uneven lighting, colour casts that make gold look pale or orange, hard shadows under the piece, and parts of a long haaram drifting out of focus. The result rarely does justice to the jewellery.',
        ],
      },
      {
        type: 'text',
        heading: 'Lighting: rendering gold and gemstones in true colour',
        body: [
          'Colour accuracy is everything with gold. Use high-CRI lighting (90+ CRI) so colours render faithfully, and make the colour temperature adjustable — warmer light (around 3000K) flatters yellow gold, while cooler light (toward 6000K) suits white metals and diamonds. A fixed single light source cannot do both.',
          'You also want multiple lights you can control independently — key lights, rim lights and fill lights — so you can shape highlights on a curved surface and bring out facets without blowing out the metal. The goal is even illumination with controlled, intentional highlights, not glare.',
        ],
      },
      {
        type: 'text',
        heading: 'Background and shadows',
        image: '/images/articles/bridal-clean-bg.jpg',
        imageAlt: 'Jewellery on a clean, shadow-free background',
        body: [
          'For ecommerce you almost always want a pure white or transparent background. The cleanest way to achieve this is not heavy editing but a back-illuminated surface that lifts the background to white and removes the shadow beneath the piece at capture time.',
          'When the background is clean to begin with, automated background removal produces a crisp, accurate cutout — no manual masking, no halo around fine chains, and consistent results across every image.',
        ],
      },
      {
        type: 'text',
        heading: 'Capturing the full length: framing and space',
        image: '/images/articles/bridal-top-turntable.jpg',
        imageAlt: 'Top turntable suspending a necklace for a wear-ready shot',
        body: [
          'A long haaram needs to be shown at its full length, ideally as it would be worn. A top turntable that suspends the necklace lets you photograph it hanging naturally, while a large bottom turntable handles pieces laid flat. Either way, you need enough working space and a frame tall enough for the full piece.',
          'This is where compact lightboxes hit their limit — they are built for small items and cannot accommodate a full bridal necklace. A studio designed for large jewellery, like the EasyCLIQ X1 or X3, is built around this requirement.',
        ],
      },
      {
        type: 'text',
        heading: 'Consistency across hundreds of SKUs',
        body: [
          'One stunning photo is not the goal — a few hundred consistent photos are. When images vary in lighting, angle and colour, your catalogue looks unprofessional and your marketplace listings underperform.',
          'The way to achieve consistency is to lock your setup: save lighting, colour temperature and camera position as a template per product category, then recall it with one click for every piece in that category. This guarantees identical results across the whole catalogue and across staff members.',
        ],
      },
      {
        type: 'text',
        heading: 'The automated approach with EasyCLIQ',
        body: [
          'The EasyCLIQ X1 and X3 are purpose-built for large Indian jewellery. They combine a multi-light, high-CRI studio, a back-illuminated turntable, a top turntable for suspended shots, and AI software that removes backgrounds, stacks focus for full sharpness, and creates 360° spins automatically.',
          'In practice the workflow is simple: place the piece, select the saved template for its category, and press shoot. Within three minutes you have publish-ready stills, a 360° spin and, on the X1 and X3, a cinematic video — all in true colour, all consistent, with no photographer or editor in the loop.',
        ],
      },
    ],
    tags: ['Bridal', 'Lighting', 'Technique'],
  },
  {
    slug: 'easycliq-jewellery-content-for-social-media-marketing',
    title: 'How to Turn Jewellery Photography into Social Media Marketing Content',
    excerpt:
      'Create professional jewellery photos, 360° spins and videos in-house, then turn them into consistent marketing content for Instagram, Facebook, YouTube, WhatsApp and your online store.',
    category: 'how-to',
    categoryLabel: 'Marketing Guide',
    also: ['guides', 'news'],
    date: '2026-09-02',
    dateLabel: '2 Sep 2026',
    readingTime: 7,
    author: 'Magnic Technologies',
    featured: false,
    image: '/images/articles/social-guide-hero.jpg',
    imageAlt: 'Professional jewellery photography prepared for social-media and digital marketing',
    imageFit: 'cover',
    videoHeading: 'Customer review and EasyCLIQ content',
    videos: [
      {
        src: '/images/sakthijewellersvideos/sakthi_jewellery_review.mp4',
        type: 'video/mp4',
        poster: '/images/articles/cmp-360.jpg',
        title: 'Sakthi Jewellers on using EasyCLIQ content for jewellery marketing',
      },
      {
        youtubeId: '7pZ0rP5Ufw8',
        title: 'Jewellery photography and video content created with EasyCLIQ',
      },
    ],
    body: [
      'Jewellery photographs are no longer used only in printed catalogues. A well-prepared set of product images can become Instagram posts, Facebook creatives, YouTube videos, WhatsApp promotions, ecommerce listings and digital advertisements.',
      'The process begins with accurate, high-quality jewellery visuals. Those master images and videos are then cleaned, resized, branded and adapted to suit the format and audience of each social-media platform.',
    ],
    sections: [
      {
        type: 'steps',
        heading: 'How to Turn Jewellery Photos into Social Media Posts and Blogs',
        intro:
          'Use these three stages to move from a physical jewellery piece to polished visual content that is ready for social media, blog articles and digital campaigns.',
        groups: [
          {
            heading: 'Step-by-Step Preparation',
            image: '/images/articles/social-guide-preparation.jpg',
            imageAlt: 'A gold necklace being cleaned and prepared for professional photography',
            items: [
              {
                title: 'Clean the piece',
                text: 'Polish the jewellery and remove fingerprints, dust and smudges before photography so macro images show only the intended finish and fine details.',
              },
              {
                title: 'Plan the content',
                text: 'Decide whether the jewellery will be used for a product launch, festive campaign, styling guide, customer enquiry or ecommerce listing. This determines the angles and formats to capture.',
              },
              {
                title: 'Create the master visuals',
                text: 'Capture a sharp hero photograph, close-up details, additional angles and a short spin or movement video while preserving the true colour of the metal and gemstones.',
              },
            ],
          },
          {
            heading: 'AI Generation & Lifestyle Transformation',
            image: '/images/articles/social-guide-ai-lifestyle.jpg',
            imageAlt: 'A jewellery photograph transformed from product presentation to an AI-assisted model visual',
            items: [
              {
                title: 'Remove the background',
                text: 'Isolate the jewellery on a transparent or clean solid background so one master image can be reused in multiple designs.',
              },
              {
                title: 'Create model shots',
                text: 'Place the clean jewellery cutout on a suitable model to create lifestyle and virtual try-on visuals without organising a separate photoshoot for every product.',
              },
              {
                title: 'Change the setting',
                text: 'Place the product in luxury, seasonal, bridal or festive environments while keeping the jewellery itself clear, accurate and visually dominant.',
              },
            ],
          },
          {
            heading: 'Social Media & Blog Layout',
            image: '/images/articles/social-guide-publishing.jpg',
            imageAlt: 'Jewellery marketing visuals adapted for a blog, tablet and mobile video format',
            items: [
              {
                title: 'Design reusable templates',
                text: 'Build a consistent layout for new arrivals, festive collections, product features and blog banners using the same brand colours, typography and logo placement.',
              },
              {
                title: 'Format for each channel',
                text: 'Prepare square and portrait posts for Instagram and Facebook, vertical videos for Reels and YouTube Shorts, lightweight files for WhatsApp, and wide images for blog and website banners.',
              },
              {
                title: 'Write short, useful copy',
                text: 'Lead with the design value, material, occasion or styling benefit. Finish with a clear action such as sending an enquiry, visiting the showroom or exploring the collection.',
              },
              {
                title: 'Publish and reuse',
                text: 'Schedule the content and reuse the strongest visuals across Stories, catalogues, advertisements, blog articles and customer follow-up messages.',
              },
            ],
          },
        ],
      },
      {
        type: 'text',
        heading: 'From Jewellery Images to Social Media Content',
        image: '/images/articles/cmp-bg-removal.webp',
        imageAlt: 'A clean jewellery photograph prepared for social-media content',
        body: [
          'Start with a clean master photograph that represents the jewellery accurately—its colour, finish, stones and fine details. Additional angles, close-up images and short videos give the marketing team enough material to tell a complete product story.',
          'The master visual can then be placed on a branded background, combined with a product name or campaign message, and resized for each channel. A single photograph may become a square Instagram post, a portrait Story, a Facebook advertisement, a WhatsApp catalogue image and an ecommerce listing.',
          'Movement adds another layer of communication. A 360° spin or short product video can become an Instagram Reel, Facebook video, YouTube Short or product demonstration, helping customers inspect the jewellery before visiting the showroom.',
        ],
      },
      {
        type: 'text',
        heading: 'Where EasyCLIQ Fits Into This',
        image: '/images/articles/price-inhouse.jpg',
        imageAlt: 'Jewellery product photography being produced through an in-house workflow',
        imageSize: 'compact',
        bodyStyle: 'bullets',
        body: [
          'Place the jewellery and let the X1 automate lighting and camera positioning, producing studio-quality master images without requiring photography experience.',
          'Use the robotic camera controls and top-and-bottom turntables to capture detailed angles, 360° spins and smooth product videos in the same workflow.',
          'Apply one-click AI-powered background removal and the built-in editing tools to create clean PNG, JPEG and animated GIF assets with less post-production.',
          'Use the software’s resizing, compression and publishing tools to prepare consistent files for social media, blogs, ecommerce pages and digital campaigns.',
        ],
      },
      {
        type: 'text',
        heading: 'The Sakthi Jewellers experience',
        body: [
          'In the accompanying customer review, Sakthi Jewellers explains how imagery and video produced with the photography machine support their marketing activity. Their experience shows the practical value of bringing content creation closer to the showroom team: products can be photographed, prepared and used in promotions without depending on a new external production cycle each time.',
          'This is where EasyCLIQ becomes more than studio equipment. It gives the jewellery business a repeatable content engine—one that connects product photography directly with day-to-day digital marketing.',
        ],
      },
      {
        type: 'text',
        heading: 'From faster content to a stronger brand',
        body: [
          'The strongest advantage is consistency. When every product is photographed with the same lighting, framing and colour accuracy, the brand looks more professional across every customer touchpoint.',
          'Faster in-house production also lets the marketing team respond to new arrivals, festivals, price-led campaigns and customer enquiries while the opportunity is still relevant. Instead of waiting for content, the business can build its marketing calendar around products that are ready to publish.',
        ],
      },
    ],
    tags: ['EasyCLIQ', 'Social Media Marketing', 'Jewellery Photography', 'Customer Story'],
  },
  {
    slug: 'easycliq-x3-multicategory-social-media-content',
    title: 'How to Turn Product Photography into Social Media Marketing Content',
    excerpt:
      'Turn footwear, handbags, electronics, fashion products, accessories and cosmetics into professional social-media images and videos with a repeatable EasyCLIQ X3 workflow.',
    category: 'how-to',
    categoryLabel: 'Marketing Guide',
    also: ['guides', 'news'],
    date: '2026-09-03',
    dateLabel: '3 Sep 2026',
    readingTime: 8,
    author: 'Magnic Technologies',
    featured: false,
    image: '/images/articles/x3-multicategory-social-hero.jpg',
    imageAlt:
      'EasyCLIQ X3 photography studio producing social-media-ready images for footwear, handbags, cosmetics and electronics',
    imageFit: 'cover',
    body: [
      'Social-media marketing depends on a steady supply of clear product photographs, lifestyle visuals and short videos. The process applies to products of many sizes—from cosmetics and accessories to shoes, handbags, electronics and larger fashion items.',
      'A useful workflow should first create accurate master visuals, then transform and format them for each digital channel. Once that process is clear, a large-format automated studio such as EasyCLIQ X3 can make the production stage faster and more repeatable.',
    ],
    sections: [
      {
        type: 'steps',
        heading: 'How to Turn Product Images into Social Media Marketing Content',
        intro:
          'Begin with the product and marketing goal. These three stages apply to footwear, handbags, electronics, fashion items, accessories, cosmetics and other ecommerce products.',
        groups: [
          {
            heading: 'Product Preparation & Shot Planning',
            image: '/images/articles/x3-multicategory-step-preparation.jpg',
            imageAlt: 'Footwear, a handbag, cosmetics and electronics being prepared for product photography',
            items: [
              {
                title: 'Clean and inspect each product',
                text: 'Remove dust, fingerprints, loose threads and packaging marks so close-up images show a finished, sale-ready product.',
              },
              {
                title: 'Plan around product size',
                text: 'Measure the product and choose the right framing for small cosmetics, medium accessories, shoes, handbags or larger fashion products.',
              },
              {
                title: 'Define the campaign goal',
                text: 'Decide whether the content is for a launch, product demonstration, seasonal campaign, ecommerce listing or customer enquiry.',
              },
              {
                title: 'Create a shot list',
                text: 'Plan the hero view, side and detail angles, 360° spin and short movement video needed for the selected channels.',
              },
            ],
          },
          {
            heading: 'Image Creation & Lifestyle Transformation',
            image: '/images/articles/x3-multicategory-step-transformation.jpg',
            imageAlt: 'Shoe and handbag photographs transformed into clean cutouts and lifestyle marketing visuals',
            items: [
              {
                title: 'Capture accurate master visuals',
                text: 'Create clear photographs, detail views and product videos that preserve the real colour, shape, texture and material.',
              },
              {
                title: 'Remove the background',
                text: 'Prepare a clean cutout that can be reused on white, transparent, branded or campaign-specific backgrounds.',
              },
              {
                title: 'Create lifestyle settings',
                text: 'Place shoes, bags, cosmetics and accessories into realistic environments that communicate their intended use and audience.',
              },
              {
                title: 'Maintain product accuracy',
                text: 'Keep the product design and colour consistent when creating alternate backgrounds, model visuals or promotional compositions.',
              },
            ],
          },
          {
            heading: 'Social Media & Blog Layout',
            image: '/images/articles/x3-multicategory-step-publishing.jpg',
            imageAlt: 'Multi-category product visuals formatted for blogs, ecommerce and short social videos',
            items: [
              {
                title: 'Format for each channel',
                text: 'Prepare square and portrait posts, vertical short videos, wide blog banners, lightweight messaging assets and ecommerce images.',
              },
              {
                title: 'Use consistent templates',
                text: 'Keep colours, spacing and product positioning consistent across launches, seasonal campaigns and catalogue updates.',
              },
              {
                title: 'Write product-led copy',
                text: 'Highlight the material, function, size, design benefit or use case, then finish with a clear enquiry or purchase action.',
              },
              {
                title: 'Publish and reuse',
                text: 'Reuse the strongest images and videos across social posts, advertisements, blog articles, product pages and sales messages.',
              },
            ],
          },
        ],
      },
      {
        type: 'text',
        heading: 'Where EasyCLIQ X3 Fits Into This',
        image: '/images/x3/inside.jpg',
        imageAlt: 'The large-format working chamber inside the EasyCLIQ X3',
        imageSize: 'wide-short',
        bodyStyle: 'bullets',
        body: [
          'Its large-format chamber, 60 cm turntable and 10 KG bottom-load capacity accommodate products ranging from cosmetics and accessories to footwear, handbags and electronics.',
          'The precision robotic camera arm captures repeatable photographs and dynamic product videos without manually repositioning the camera for every angle.',
          'Top and bottom turntables create complete 360° views for ecommerce pages, social-media demonstrations and interactive product presentations.',
          'Ten independently controlled studio lights help reproduce different materials, colours and surface finishes accurately across product categories.',
          'AI-powered background removal, focus stacking, saved templates and built-in editing reduce the work between photography and marketing.',
          'The publish workflow prepares PNG, JPEG, GIF and video assets that can be resized and compressed for social media, blogs, ecommerce and digital campaigns.',
        ],
      },
      {
        type: 'usecases',
        heading: 'Content One X3 Workflow Can Supply',
        intro:
          'Each finished product set can be adapted into several customer-facing formats.',
        items: [
          {
            title: 'Instagram & Facebook',
            text: 'Hero posts, carousels, festive creatives, Stories and short product-reveal videos.',
          },
          {
            title: 'YouTube',
            text: 'Vertical Shorts, 360° demonstrations and collection showcase videos.',
          },
          {
            title: 'WhatsApp',
            text: 'Lightweight product images and short videos for direct customer conversations and catalogues.',
          },
          {
            title: 'Website & Ecommerce',
            text: 'Consistent product photographs, detail views, clean-background images and interactive spins.',
          },
          {
            title: 'Digital Advertising',
            text: 'Reusable cutouts and videos for launches, festive campaigns and location-specific promotions.',
          },
          {
            title: 'Sales & Catalogues',
            text: 'Approved visual assets for digital catalogues, reseller presentations and showroom follow-ups.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'A Content System, Not Another Individual Shoot',
        image: '/images/x3/studio-lighting-rim.webp',
        imageAlt: 'Controlled professional lighting inside the EasyCLIQ X3 studio',
        imageSize: 'wide-short',
        imagePosition: 'bottom',
        body: [
          'The main advantage of EasyCLIQ X3 is repeatability. Once a team saves the correct setup for a product category, future pieces can follow the same lighting, framing and output standard. A campaign no longer depends on recreating the original shoot from memory.',
          'That consistency gives marketing teams a dependable content pipeline. New arrivals can move from the studio to social media and ecommerce while they are still commercially relevant, with photographs and videos that look like one coordinated brand.',
        ],
      },
    ],
    tags: ['EasyCLIQ X3', 'Product Photography', 'Social Media', 'Multi-Category Ecommerce'],
  },
  {
    slug: 'complete-product-photography-checklist-ecommerce',
    title: 'A Complete Product Photography Checklist for Ecommerce Businesses',
    excerpt:
      'A practical shoot-to-publish checklist covering product preparation, shot planning, image dimensions, file naming, compression and final ecommerce quality checks.',
    category: 'how-to',
    categoryLabel: 'Marketing Guide',
    also: ['guides', 'news'],
    date: '2026-09-03',
    dateLabel: '3 Sep 2026',
    readingTime: 8,
    author: 'Magnic Technologies',
    featured: false,
    image: '/images/articles/ecommerce-product-photography-checklist-hero.jpg',
    imageAlt:
      'An organised ecommerce photography workflow built around an EasyCLIQ X3 studio, prepared products, a checklist and publish-ready images',
    imageFit: 'cover',
    body: [
      'Successful ecommerce photography is not only about taking an attractive picture. Every product needs to move through the same repeatable process—from cleaning and shot planning to file naming, compression and publishing.',
      'This checklist helps retailers, manufacturers and ecommerce teams create complete, consistent product listings while reducing missed angles, reshoots, oversized files and publishing delays.',
    ],
    sections: [
      {
        type: 'steps',
        heading: 'The Complete Shoot-to-Publish Checklist',
        intro:
          'Use these four stages for every product. Keeping the order consistent makes the workflow easier to train, repeat and scale.',
        groups: [
          {
            heading: 'Preparation & Product Readiness',
            image: '/images/articles/ecommerce-checklist-preparation.jpg',
            imageAlt:
              'Footwear, a handbag, cosmetics and electronics prepared with cleaning tools, colour references, SKU tags and a photography shot list',
            items: [
              {
                title: 'Inspect the product',
                text: 'Check for dust, fingerprints, loose threads, scratches, uneven labels, packaging marks or anything that will become obvious in a close-up image.',
              },
              {
                title: 'Clean and assemble it',
                text: 'Polish reflective surfaces, shape soft products, fasten straps, align moving parts and prepare every accessory that belongs in the listing.',
              },
              {
                title: 'Confirm product accuracy',
                text: 'Match the item against its SKU, colour, size and variant information before photography begins.',
              },
              {
                title: 'Choose the presentation',
                text: 'Select the background, surface, support, hanging method or turntable that shows the product naturally without distracting from it.',
              },
            ],
          },
          {
            heading: 'Shot List & Visual Coverage',
            items: [
              {
                title: 'Capture the hero view',
                text: 'Create one clean image that immediately communicates the product’s shape, colour and most recognisable features.',
              },
              {
                title: 'Add essential angles',
                text: 'Photograph the front, back, both sides and top or bottom whenever those views help the customer evaluate the product.',
              },
              {
                title: 'Record important details',
                text: 'Include close-ups of materials, texture, fasteners, controls, stitching, stones, labels or workmanship.',
              },
              {
                title: 'Show scale and use',
                text: 'Add an in-context or lifestyle image when customers need help understanding the product’s size, fit or intended use.',
              },
              {
                title: 'Plan movement',
                text: 'Capture a 360° spin or short video for products where shape, mechanism, shine or movement cannot be explained by still images alone.',
              },
            ],
          },
          {
            heading: 'Image Size, Naming & Compression',
            image: '/images/articles/ecommerce-checklist-publishing.jpg',
            imageAlt:
              'Finished ecommerce product images being organised, resized, optimised and published from a professional content workstation',
            items: [
              {
                title: 'Create one high-quality master',
                text: 'Keep a full-resolution, colour-corrected original before making marketplace, website or social-media versions.',
              },
              {
                title: 'Use consistent dimensions',
                text: 'Choose one aspect ratio and canvas size for each sales channel so product grids remain aligned and professional.',
              },
              {
                title: 'Name files clearly',
                text: 'Use a predictable structure such as SKU-colour-view-number instead of camera-generated filenames.',
              },
              {
                title: 'Choose the right format',
                text: 'Use JPEG or WebP for most photographs, PNG when transparency is required, and GIF or video for movement.',
              },
              {
                title: 'Compress carefully',
                text: 'Reduce file weight enough for fast loading while checking that edges, textures, gradients and small details remain clean.',
              },
            ],
          },
          {
            heading: 'Publishing & Final Quality Check',
            items: [
              {
                title: 'Check the complete set',
                text: 'Confirm that every required angle and variant is present and that no image belongs to a different SKU.',
              },
              {
                title: 'Review colour and sharpness',
                text: 'Compare the images with the physical product and inspect important details at full size.',
              },
              {
                title: 'Test the crop',
                text: 'Preview the listing on desktop and mobile to ensure the product is not cut off by responsive thumbnails.',
              },
              {
                title: 'Add useful metadata',
                text: 'Write descriptive alternative text and product information that helps accessibility, search and internal asset management.',
              },
              {
                title: 'Verify the live page',
                text: 'After publishing, open the actual listing and confirm image order, loading speed, zoom quality, 360° playback and mobile behaviour.',
              },
            ],
          },
        ],
      },
      {
        type: 'usecases',
        heading: 'The Minimum Image Set for a Strong Product Listing',
        intro:
          'The exact number depends on the product, but a useful ecommerce set normally includes these visual roles.',
        items: [
          {
            title: 'Hero Image',
            text: 'A clear primary view with consistent framing and enough space around the product.',
          },
          {
            title: 'Alternate Angles',
            text: 'Views that explain the product’s full shape, construction and functional areas.',
          },
          {
            title: 'Detail Close-Ups',
            text: 'Sharp images of materials, finishes, features and quality indicators.',
          },
          {
            title: 'Scale or Context',
            text: 'A visual that helps customers understand dimensions, fit or real-world use.',
          },
          {
            title: 'Clean Cutout',
            text: 'A transparent or plain-background asset for listings, catalogues and campaigns.',
          },
          {
            title: '360° or Video',
            text: 'Movement-based content for products that benefit from inspection from every angle.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Where EasyCLIQ Fits Into This Checklist',
        bodyStyle: 'bullets',
        body: [
          'Controlled studio lighting helps teams reproduce colour and surface details consistently from one product to the next.',
          'Camera positioning and automated rotation make it easier to repeat planned angles, close-ups, 360° spins and product videos.',
          'Focus stacking helps retain detail across products where one photograph cannot keep every important area sharp.',
          'AI-powered background removal produces clean cutouts without sending every image through a separate manual editing process.',
          'Saved templates can recall lighting and camera settings for each product category, reducing setup differences between operators and sessions.',
          'Built-in resizing, compression and export tools shorten the path from the approved master image to a publish-ready ecommerce asset.',
        ],
      },
      {
        type: 'text',
        heading: 'Make the Checklist Part of the Workflow',
        body: [
          'A checklist creates value only when the team uses it for every SKU. Keep the approved shot list and file rules close to the photography station, assign responsibility for the final quality check, and update the process whenever a marketplace or website requirement changes.',
          'The result is not simply better photography. It is a dependable visual-content system that helps products reach the online store faster, keeps the catalogue consistent and gives customers enough information to buy with confidence.',
        ],
      },
    ],
    tags: ['Product Photography', 'Ecommerce Checklist', 'Image Optimisation', 'EasyCLIQ'],
  },
  {
    slug: 'in-house-vs-outsourced-product-photography',
    title: 'In-House vs Outsourced Product Photography: Which Is Better?',
    excerpt:
      'Compare turnaround time, consistency, total cost, creative control and scalability to choose the right product-photography model for your business.',
    category: 'how-to',
    categoryLabel: 'Comparison Guide',
    also: ['guides', 'news'],
    date: '2026-09-03',
    dateLabel: '3 Sep 2026',
    readingTime: 8,
    author: 'Magnic Technologies',
    featured: false,
    image: '/images/articles/in-house-vs-outsourced-product-photography-hero.jpg',
    imageAlt:
      'A balanced comparison between products prepared for an external studio and products photographed in-house using an EasyCLIQ X3 studio',
    imageFit: 'cover',
    body: [
      'Outsourcing and in-house product photography can both produce excellent results. The better choice depends on how often you launch products, how quickly content is needed, how specialised the creative work is and whether your team can maintain a repeatable internal process.',
      'The comparison should therefore consider the complete workflow—not only the price of one photograph. Shipping, coordination, reshoots, staff time, equipment, training, editing and publishing all affect the real cost and speed of production.',
    ],
    sections: [
      {
        type: 'comparison',
        heading: 'In-House and Outsourced Photography Compared',
        intro:
          'Use these factors to evaluate the model that fits your catalogue, team and content calendar.',
        beforeLabel: 'Outsourced',
        afterLabel: 'In-House',
        pairs: [
          {
            before:
              'Turnaround includes preparing a brief, packing or transporting products, studio scheduling, review and revision time.',
            after:
              'Products can be photographed as soon as they arrive, making same-day listings and campaign updates possible.',
          },
          {
            before:
              'A skilled external studio can deliver a polished style, but consistency depends on using the same team, brief and setup each time.',
            after:
              'Saved setups and one internal standard can keep framing, lighting and output consistent across routine catalogue work.',
          },
          {
            before:
              'Costs are project-based and easy to approve for occasional shoots, but repeat shoots, logistics and revisions accumulate as volume grows.',
            after:
              'Equipment and training require an initial investment, while the cost per product can fall as the same system handles more SKUs.',
          },
          {
            before:
              'Creative direction is agreed through briefs and review rounds, which is useful for specialist campaigns but can slow small changes.',
            after:
              'The team can test angles, update a shot or respond to a product change immediately without booking another session.',
          },
          {
            before:
              'Extra volume depends on studio availability, delivery coordination and the supplier’s capacity during busy seasons.',
            after:
              'Daily output can grow through templates, trained operators and a defined internal queue, provided the equipment matches the catalogue.',
          },
          {
            before:
              'Specialist photographers, stylists, models and elaborate locations are available when a campaign requires high-concept creative production.',
            after:
              'Routine product listings, detail images and 360° views are easier to standardise, while complex campaigns may still need external specialists.',
          },
        ],
      },
      {
        type: 'usecases',
        heading: 'When Outsourcing Is the Better Choice',
        intro:
          'External production remains valuable when the work depends more on specialist creativity than repeated catalogue output.',
        items: [
          {
            title: 'Occasional Shoots',
            text: 'A small number of launches may not justify permanent equipment, space and training.',
          },
          {
            title: 'Campaign Production',
            text: 'Models, locations, set construction and complex art direction benefit from a specialist crew.',
          },
          {
            title: 'Limited Internal Capacity',
            text: 'Outsourcing can protect the team’s time when no one can own photography and quality control.',
          },
        ],
      },
      {
        type: 'usecases',
        heading: 'When In-House Photography Is the Better Choice',
        intro:
          'Internal production is strongest when speed, repeatability and ongoing catalogue volume matter every week.',
        items: [
          {
            title: 'Frequent New Arrivals',
            text: 'Products can move from receiving to photography and publishing without waiting for an external booking.',
          },
          {
            title: 'High SKU Volume',
            text: 'A repeatable station can reduce coordination time and the cost per finished product set.',
          },
          {
            title: 'Fast Content Updates',
            text: 'The team can reshoot variants, promotions and customer requests while the product is still on site.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Calculate the Real Cost Per Finished SKU',
        image: '/images/articles/outsourced-photography-coordination.jpg',
        imageAlt:
          'Products packed with shot briefs, schedules and approval sheets for an outsourced photography workflow',
        bodyStyle: 'bullets',
        body: [
          'For outsourcing, include photography fees, product transport, packing, insurance, styling, editing, revisions and the internal time spent coordinating each shoot.',
          'For in-house production, include equipment, camera, workspace, training, operator time, software, maintenance and the expected number of products photographed over the system’s useful life.',
          'Compare complete approved product sets—not individual clicks. One SKU may require a hero image, alternate angles, details, a clean cutout and a 360° spin.',
          'Measure missed opportunities as well. A lower quoted price may still be expensive if products wait several days before they can be listed or promoted.',
        ],
      },
      {
        type: 'text',
        heading: 'Where EasyCLIQ Fits Into an In-House Workflow',
        image: '/images/articles/in-house-easycliq-product-capture.jpg',
        imageAlt:
          'EasyCLIQ X3 photographing a footwear product inside its chamber with other ecommerce products ready for capture',
        bodyStyle: 'bullets',
        body: [
          'A controlled photography chamber reduces the need to rebuild lighting and backgrounds for every routine product.',
          'Automated camera positioning and turntables support repeatable angles, 360° spins and product videos with less manual handling.',
          'Saved templates help different operators produce a consistent catalogue style across repeated product categories.',
          'Focus stacking, background removal and built-in editing reduce the amount of post-production required after capture.',
          'Publish-ready exports help the team move approved images into ecommerce listings, catalogues and marketing channels more quickly.',
          'Different EasyCLIQ models allow the workflow to be matched to product size, catalogue variety, available space and production volume.',
        ],
      },
      {
        type: 'text',
        heading: 'For Many Businesses, the Best Answer Is Hybrid',
        image: '/images/articles/hybrid-product-photography-workflow.jpg',
        imageAlt:
          'EasyCLIQ X3 handling routine in-house product photography beside a separate specialist campaign photography set',
        body: [
          'The choice does not have to be permanent or absolute. A practical hybrid model keeps frequent catalogue photography, reshoots and 360° content in-house while using external photographers for major campaigns, model shoots and location-based creative work.',
          'This approach gives the business speed and control for daily ecommerce operations without giving up specialist creative production when a campaign genuinely requires it. The right decision is the one that removes the largest bottleneck in the current content workflow.',
        ],
      },
    ],
    tags: ['Product Photography', 'In-House Photography', 'Outsourcing', 'EasyCLIQ'],
  },
]

export const featuredPost = posts.find((p) => p.featured) ?? posts[0]

// Only surface tabs that at least one post can actually fill. Hand-maintaining this
// list is what left "Hallmarking Centres" permanently empty and hid three articles.
const USED_SLUGS = new Set(posts.flatMap((p) => [p.category, ...(p.also ?? [])]))

export const categories = CATEGORY_LABELS.filter(
  (c) => c.slug === 'all' || USED_SLUGS.has(c.slug),
)

/**
 * Flatten everything a reader can actually see on a post into one lowercase string,
 * so search covers body copy, section content, specs and tags — not just the title.
 * Built once at module load rather than per keystroke.
 */
function buildSearchText(post) {
  const parts = [
    post.title,
    post.excerpt,
    post.categoryLabel,
    post.author,
    post.dateLabel,
    ...(post.tags ?? []),
    ...(post.body ?? []),
    ...(post.videos ?? []).map((v) => v.title),
  ]

  for (const s of post.sections ?? []) {
    parts.push(s.heading, s.intro)
    parts.push(...(s.body ?? []))
    for (const item of s.items ?? []) {
      parts.push(item.title, item.text, item.problem, item.solution, item.value, item.label)
    }
    for (const group of s.groups ?? []) {
      parts.push(group.heading, group.imageAlt)
      for (const item of group.items ?? []) parts.push(item.title, item.text)
    }
    for (const pair of s.pairs ?? []) parts.push(pair.before, pair.after)
    for (const img of s.images ?? []) parts.push(img.alt)
    for (const t of s.tables ?? []) {
      parts.push(t.title)
      for (const row of t.rows ?? []) parts.push(...row)
    }
  }

  return parts.filter(Boolean).join(' | ').toLowerCase()
}

const SEARCH_INDEX = new Map(posts.map((p) => [p.slug, buildSearchText(p)]))

/** True when every whitespace-separated term appears somewhere in the post. */
export function postMatchesQuery(post, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return true
  const haystack = SEARCH_INDEX.get(post.slug) ?? ''
  return terms.every((t) => haystack.includes(t))
}
