import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import DemoCta from '../components/DemoCta'
import Reveal from '../components/Reveal'
import ScrollTabs from '../components/ScrollTabs'
import CountUp from '../components/CountUp'
import {
  caseStudies,
  regions,
  interleaveByRegion,
  launchPostHref,
} from '../data/caseStudies'

function SafeImg({ src, alt, className, onFail }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <img
      src={src}
      alt={alt || ''}
      loading="lazy"
      onError={() => {
        setFailed(true)
        onFail?.()
      }}
      className={className}
    />
  )
}

/** Decorative opening quote mark, matching the reference layout. */
function QuoteMark() {
  return (
    <svg
      width="46"
      height="34"
      viewBox="0 0 46 34"
      className="mb-4 text-line-strong"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 34V19.6C0 8.8 5.9 1.3 17.6 0l1.7 5.4c-6.6 1.5-9.8 5-9.8 10.2h9.3V34H0Zm26.4 0V19.6C26.4 8.8 32.3 1.3 44 0l1.7 5.4c-6.6 1.5-9.8 5-9.8 10.2h9.3V34H26.4Z"
      />
    </svg>
  )
}

/** Click-to-play facade so a page of testimonials does not boot many players. */
function ReviewVideo({ study }) {
  const [playing, setPlaying] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)

  if (!study.video?.youtubeId) return null

  if (playing) {
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

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${study.video.title}`}
      className="group/vid relative block w-full overflow-hidden rounded-card border border-line bg-primary shadow-card"
    >
      <span className="block aspect-video w-full">
        <SafeImg
          src={study.thumb}
          alt=""
          onFail={() => setThumbFailed(true)}
          className="h-full w-full object-cover transition duration-700 group-hover/vid:scale-[1.04]"
        />
        {(!study.thumb || thumbFailed) && (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-2" />
        )}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card-hover transition duration-300 group-hover/vid:scale-110">
          <svg width="20" height="24" viewBox="0 0 20 24" aria-hidden="true">
            <path d="M19 12 0 24V0z" fill="#2c2e83" />
          </svg>
        </span>
      </span>
    </button>
  )
}

/** Branded panel for a client with no video, so the row never looks half-built. */
function ClientPanel({ study }) {
  const initials = study.company
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-card border border-line bg-gradient-to-br from-primary to-primary-2 p-8 text-center shadow-card">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 font-heading text-xl font-bold text-white">
        {initials}
      </span>
      <p className="mt-4 font-heading text-sm font-semibold text-white/90">{study.location}</p>
      <p className="mt-1 font-heading text-[11px] uppercase tracking-[0.14em] text-accent">
        {study.product}
      </p>
    </div>
  )
}

function ReviewRow({ study, flipped }) {
  const [open, setOpen] = useState(false)
  const hasDetail = Boolean(study.headline || study.challenge || study.solution)
  const panelId = `review-detail-${study.slug}`

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Copy column — order flips on alternate rows so the page has rhythm. */}
      <div className={flipped ? 'lg:order-2' : ''}>
        <h2 className="font-heading text-2xl font-bold leading-tight text-primary md:text-[28px]">
          {study.person && !study.namePending ? study.person : study.company}
        </h2>
        <p className="mt-1.5 font-heading text-[15px] font-bold text-ink">
          {study.namePending
            ? study.location
            : [study.role, study.company].filter(Boolean).join(', ')}
        </p>
        {study.namePending && (
          <p className="mt-1 text-xs italic text-ink-light">Client name to be confirmed</p>
        )}

        {/* A quote where we hold the customer's words; otherwise the outcome headline,
            presented as our own statement rather than dressed up as a testimonial. */}
        {study.quote ? (
          <div className="mt-6">
            <QuoteMark />
            {study.quotePending && (
              <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                Draft — awaiting client approval
              </p>
            )}
            <blockquote className="text-[15px] leading-relaxed text-ink-light md:text-base">
              {study.quote}
            </blockquote>
          </div>
        ) : (
          <div className="mt-6">
            {study.headline && (
              <p className="border-l-2 border-accent pl-4 text-[15px] font-medium leading-relaxed text-ink md:text-base">
                {study.headline}
              </p>
            )}
            <p className="mt-3 text-xs italic text-ink-light">
              Customer testimonial to follow
            </p>
          </div>
        )}

        {/* Expanded detail, revealed in place rather than on another page. */}
        {hasDetail && (
          <div
            id={panelId}
            hidden={!open}
            className="mt-6 rounded-card border border-line bg-surface p-6"
          >
            {/* Only repeat the headline here if the lead showed a quote instead. */}
            {study.headline && study.quote && (
              <p className="font-heading text-base font-bold leading-snug text-ink">
                {study.headline}
              </p>
            )}
            {study.challenge && (
              <div className="mt-4 border-l-2 border-line-strong pl-4">
                <p className="eyebrow !text-ink-light">The challenge</p>
                <p className="mt-1.5 text-sm leading-relaxed">{study.challenge}</p>
              </div>
            )}
            {study.solution && (
              <div className="mt-4 border-l-2 border-accent pl-4">
                <p className="eyebrow">What they deployed</p>
                <p className="mt-1.5 text-sm leading-relaxed">{study.solution}</p>
              </div>
            )}
            {study.metrics?.length > 0 && (
              <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
                {study.metrics.map((m) => (
                  <div key={m.label} className="bg-white px-3 py-4 text-center">
                    <div className="break-words font-heading text-base font-extrabold tabular-nums text-primary">
                      <CountUp value={m.value} />
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-ink-light">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {hasDetail && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group/more inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-primary"
            >
              {open ? 'Show less' : 'View more'}
              <span
                className={[
                  'transition-transform duration-300',
                  open ? 'rotate-90' : 'group-hover/more:translate-x-1',
                ].join(' ')}
                aria-hidden="true"
              >
                →
              </span>
            </button>
          )}
          {/* Goes to the machine's launch article, which is a real route here. */}
          <Link
            to={launchPostHref(study.product) ?? '/blog'}
            className="group/link inline-flex items-center gap-2 font-heading text-[13px] font-bold text-primary"
          >
            {study.product}
            <span
              className="transition-transform duration-300 group-hover/link:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Media column */}
      <div className={flipped ? 'lg:order-1' : ''}>
        {study.video?.youtubeId ? <ReviewVideo study={study} /> : <ClientPanel study={study} />}
      </div>
    </article>
  )
}

export default function CaseStudiesTwoPage() {
  const [region, setRegion] = useState('all')

  const visible = useMemo(() => {
    const matched = caseStudies.filter((c) => (region === 'all' ? true : c.region === region))
    // Alternate Indian and international so overseas clients are not all at the end.
    return region === 'all' ? interleaveByRegion(matched) : matched
  }, [region])

  return (
    <>
      <PageHeader
        crumb="Case Studies 2"
        eyebrow="In their own words"
        title="What our customers say"
        description="Jewellers and manufacturers on what changed after a Magnic machine arrived — read the short version, or open the full story."
      />

      <section className="container-page py-7 md:py-9">
        <Reveal className="mb-7 text-center sm:text-left">
          <p className="eyebrow">Client Reviews</p>
          <h2 className="mt-2 max-w-2xl font-heading text-xl font-bold leading-snug text-primary md:text-[26px]">
            Hear it from the jewellers running our machines
          </h2>
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed">
            Every review below comes from a business using a Magnic machine day to day —
            filter by region, then open any story for the full detail.
          </p>
        </Reveal>

        <div className="mb-8">
          <ScrollTabs
            options={regions}
            active={region}
            onSelect={setRegion}
            label="Filter reviews by client region"
            align="center"
          />
          <p className="mt-3 text-center text-xs text-ink-light sm:text-left">
            Showing {visible.length} of {caseStudies.length} customer stories
          </p>
        </div>

        {visible.length > 0 ? (
          <div className="flex flex-col gap-16 md:gap-24">
            {visible.map((study, i) => (
              <Reveal key={study.slug} variant={i % 2 === 0 ? 'left' : 'right'}>
                <ReviewRow study={study} flipped={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
            <p className="font-heading text-base font-semibold text-ink">
              No stories in this region yet
            </p>
            <p className="mt-2 text-sm">
              We're documenting more customer stories — check back soon.
            </p>
          </div>
        )}
      </section>

      <div className="pt-6">
        <DemoCta
          title="Want results like these?"
          body="Book a demo and we'll photograph your own jewellery — or scan your own stock for ferrous contamination — before you commit to anything."
        />
      </div>
    </>
  )
}
