import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import DemoCta from '../components/DemoCta'
import Reveal from '../components/Reveal'
import ScrollTabs from '../components/ScrollTabs'
import {
  caseStudies,
  industries,
  productLines,
  clientStats,
  clientLogos,
  hallmarkCentres,
} from '../data/caseStudies'

function SafeImg({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <img
      src={src}
      alt={alt || ''}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}

function Initials({ name }) {
  const letters = name
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary font-heading text-sm font-bold text-white"
      aria-hidden="true"
    >
      {letters}
    </div>
  )
}

/** Company logo where one exists, initials tile otherwise. */
function CompanyMark({ study }) {
  const [failed, setFailed] = useState(false)
  if (!study.logo || failed) return <Initials name={study.company} />
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white p-1">
      <img
        src={study.logo}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}

function StatsBand() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-page py-4">
        <Reveal>
          <div className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
            {clientStats.map((s) => (
              <div key={s.label} className="px-2 py-8 text-center md:px-6">
                <div className="font-heading text-3xl font-extrabold tabular-nums text-primary md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-ink-light">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StoryVideo({ study }) {
  const [playing, setPlaying] = useState(false)
  if (!study.video?.youtubeId) return null

  // Facade: show the thumbnail until clicked, so seven embeds do not each load
  // the YouTube player when the page opens.
  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${study.video.title}`}
        className="group/vid relative block w-full overflow-hidden rounded-card border border-line bg-black shadow-card"
      >
        <span className="block aspect-video w-full">
          <SafeImg
            src={study.thumb}
            alt=""
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover/vid:scale-[1.03] group-hover/vid:opacity-100"
          />
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-card-hover transition duration-300 group-hover/vid:scale-110">
            <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
              <path d="M19 11 0 22V0z" fill="#2c2e83" />
            </svg>
          </span>
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 text-left">
          <span className="block font-heading text-[13px] font-semibold leading-snug text-white">
            {study.video.title}
          </span>
          {study.videoDate && (
            <span className="mt-0.5 block text-[11px] text-white/70">{study.videoDate}</span>
          )}
        </span>
      </button>
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-card border border-line bg-black pt-[56.25%] shadow-card">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${study.video.youtubeId}?autoplay=1`}
        title={study.video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function CaseStudyCard({ study }) {
  return (
    <article className="card">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line p-6 md:p-8">
        <div className="flex items-start gap-4">
          <CompanyMark study={study} />
          <div>
            <h2 className="font-heading text-xl font-bold leading-snug text-primary md:text-2xl">
              {study.company}
            </h2>
            <p className="mt-1 text-sm">
              {study.person}
              {study.role ? ` · ${study.role}` : ''} · {study.location}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block rounded bg-teal px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.09em] text-white">
            {study.industryLabel}
          </span>
          <a
            href={study.productHref}
            className="inline-block rounded bg-accent px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.09em] text-primary transition hover:brightness-95"
          >
            {study.product}
          </a>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div>
          <h3 className="font-heading text-lg font-bold leading-snug text-ink md:text-xl">
            {study.headline}
          </h3>

          <div className="mt-6 flex flex-col gap-5">
            <div className="border-l-2 border-line pl-4">
              <p className="eyebrow !text-ink-light">The challenge</p>
              <p className="mt-2 text-sm leading-relaxed">{study.challenge}</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="eyebrow">What they deployed</p>
              <p className="mt-2 text-sm leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-card border border-line bg-surface">
            {study.metrics.map((m) => (
              <div key={m.label} className="px-3 py-5 text-center">
                <div className="font-heading text-lg font-extrabold tabular-nums text-primary md:text-xl">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-ink-light">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-7 rounded-card border border-line border-l-[4px] border-l-primary bg-surface px-6 py-5">
            <p className="text-[15px] italic leading-relaxed text-ink">“{study.quote}”</p>
            <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-light">
              {study.quoteAttribution ?? `${study.person}, ${study.role} — ${study.company}`}
            </footer>
          </blockquote>
        </div>

        <div className="lg:pt-1">
          <p className="eyebrow mb-3">Hear it from them</p>
          <StoryVideo study={study} />
        </div>
      </div>
    </article>
  )
}

function LogoWall() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="container-page py-12 md:py-16">
        <Reveal>
          <p className="eyebrow">Trusted by</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary md:text-[28px]">
            Jewellers and hallmarking centres running Magnic machines
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((c) => (
              <div
                key={c.name}
                className="group/logo flex aspect-[3/2] items-center justify-center bg-white p-4 transition duration-300 hover:bg-surface"
                title={c.name}
              >
                <SafeImg
                  src={c.src}
                  alt={c.name}
                  className="max-h-full max-w-full object-contain opacity-80 transition duration-300 group-hover/logo:opacity-100"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="eyebrow mt-10">Hallmarking centres</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:max-w-lg">
            {hallmarkCentres.map((c) => (
              <div
                key={c.name}
                className="flex h-24 items-center justify-center rounded-card border border-line bg-white p-4 shadow-card"
                title={c.name}
              >
                <SafeImg src={c.src} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  const [industry, setIndustry] = useState('all')
  const [line, setLine] = useState('all-products')

  const visible = useMemo(
    () =>
      caseStudies
        .filter((c) => (industry === 'all' ? true : c.industry === industry))
        .filter((c) => (line === 'all-products' ? true : c.line === line)),
    [industry, line],
  )

  return (
    <>
      <PageHeader
        crumb="Case Studies"
        eyebrow="Proven in the field"
        title="What changes after a Magnic machine arrives"
        description="Real deployments from retailers, manufacturers and hallmarking centres — the bottleneck they had, the machine they chose, and the result in their own words."
      />

      <section className="container-page py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-3">
          <ScrollTabs
            options={industries}
            active={industry}
            onSelect={setIndustry}
            label="Filter by client type"
          />
          <ScrollTabs
            options={productLines}
            active={line}
            onSelect={setLine}
            label="Filter by machine"
          />
          <p className="text-xs text-ink-light">
            Showing {visible.length} of {caseStudies.length} customer stories
          </p>
        </div>

        {visible.length > 0 ? (
          <div className="flex flex-col gap-8">
            {visible.map((study, i) => (
              <Reveal key={study.slug} delay={Math.min(i, 2) * 90}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
            <p className="font-heading text-base font-semibold text-ink">
              No published stories match this combination
            </p>
            <p className="mt-2 text-sm">
              Try a different segment or machine — or ask sales for references in your category.
            </p>
          </div>
        )}

        <div className="mt-10 rounded-card border border-dashed border-line-strong bg-surface px-6 py-8 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-ink">
            More stories in progress
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed">
            With 750+ machines in the field, we're publishing new stories each month across
            retailers, manufacturers and hallmarking centres. Want to be featured?
          </p>
          <a href="/contact" className="btn-outline mt-5">
            Share your story
          </a>
        </div>
      </section>

      <LogoWall />

      <StatsBand />

      <div className="pt-14">
        <DemoCta
          title="Ready to see the same results?"
          body="Book a demo and we'll photograph your own jewellery — or scan your own stock for ferrous contamination — before you commit to anything."
        />
      </div>
    </>
  )
}
