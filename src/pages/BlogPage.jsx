import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ScrollTabs from '../components/ScrollTabs'
import PageHeader from '../components/PageHeader'
import DemoCta from '../components/DemoCta'
import { posts, categories, postMatchesQuery } from '../data/posts'

function CategoryPill({ label, category }) {
  const isNews = category === 'news'
  return (
    <span
      className={[
        'inline-flex w-fit items-center gap-1.5 rounded px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.09em]',
        isNews ? 'bg-accent text-primary' : 'bg-teal text-white',
      ].join(' ')}
    >
      {isNews && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      )}
      {label}
    </span>
  )
}

function PostMeta({ post }) {
  // Some archive entries have no recorded date — show nothing rather than invent one.
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-light">
      {post.dateLabel && (
        <>
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span className="text-line">•</span>
        </>
      )}
      <span>{post.readingTime} min read</span>
      <span className="text-line">•</span>
      <span>By {post.author}</span>
    </div>
  )
}

function CardThumb({ post }) {
  const [failed, setFailed] = useState(false)
  if (!post.image || failed) return null

  // Two kinds of image need opposite treatment: a photograph should fill the tile
  // edge to edge, while a transparent product cutout must be contained on a light
  // ground — cover would slice the edges off the machine.
  const isPhoto = post.imageFit === 'cover' || post.heroStyle === 'cover'

  return (
    <div
      className={[
        'relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line',
        isPhoto ? 'bg-surface' : 'bg-gradient-to-b from-white to-surface p-4',
      ].join(' ')}
    >
      <img
        src={post.image}
        alt={post.imageAlt || ''}
        loading="lazy"
        onError={() => setFailed(true)}
        className={[
          'transition-transform duration-500 ease-reveal group-hover:scale-[1.06]',
          isPhoto ? 'h-full w-full object-cover' : 'max-h-full max-w-full object-contain',
        ].join(' ')}
      />
    </div>
  )
}

function PostCard({ post }) {
  return (
    <article className="card card-hover group relative flex h-full flex-col">
      <CardThumb post={post} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <CategoryPill label={post.categoryLabel} category={post.category} />
        <h3 className="font-heading text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
          {/* Stretched link: the whole card is the click target, but the accessible
              name stays on the title rather than the entire card contents. */}
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed">{post.excerpt}</p>
        <PostMeta post={post} />
      </div>
      <div className="flex items-center justify-between border-t border-line px-6 py-3.5">
        <span className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-primary">
          Read more
        </span>
        <span
          className="font-heading text-primary transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const trimmed = query.trim()
  const inCategory = (p) =>
    active === 'all' ? true : p.category === active || p.also?.includes(active)

  const visible = useMemo(
    () =>
      posts
        .filter(inCategory)
        .filter((p) => postMatchesQuery(p, trimmed))
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    [active, trimmed],
  )

  // If a search returns nothing here but does match elsewhere, say so rather than
  // leaving the reader thinking the term appears nowhere on the site.
  const matchesOutsideCategory = useMemo(
    () =>
      trimmed && visible.length === 0
        ? posts.filter((p) => postMatchesQuery(p, trimmed)).length
        : 0,
    [trimmed, visible.length],
  )

  return (
    <>
      <PageHeader
        crumb="Blog"
        eyebrow="News & Updates"
        title="What's new at Magnic Technologies"
        description="Product launches, exhibitions, awards and practical guides from the team that designs and builds the machines."
      />

      <section className="container-page py-7 md:py-9">
        {/* Search sits on its own line above the tabs. Side by side it stole 256px
            from the tab row, which clipped the last category at every viewport. */}
        <div className="mb-7">
          <div className="flex flex-col gap-2">
            <div className="w-full sm:w-64 sm:self-end">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              {/* This inner wrapper hugs the input exactly. The icons are centred
                  against it, so the outer pb-3 alignment padding cannot offset them. */}
              <div className="relative flex items-center">
                <svg
                  className="pointer-events-none absolute left-4 text-ink-light"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="m11 11 4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="blog-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  // appearance-none removes the native WebKit clear button, which would
                  // otherwise sit alongside our own.
                  className="w-full appearance-none rounded-full border border-line bg-white py-2 pl-10 pr-9 text-sm leading-5 outline-none transition focus:border-primary [&::-webkit-search-cancel-button]:appearance-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full text-ink-light transition hover:bg-surface hover:text-primary"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path
                        d="M1 1l8 8M9 1L1 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Full row width, so no category is ever clipped. */}
            <ScrollTabs
              options={categories}
              active={active}
              onSelect={setActive}
              label="Filter articles by category"
            />
          </div>
        </div>

        {trimmed && (
          <p aria-live="polite" className="mb-5 text-sm text-ink-light">
            {visible.length > 0 ? (
              <>
                <span className="font-semibold text-ink">{visible.length}</span>{' '}
                {visible.length === 1 ? 'article' : 'articles'} matching{' '}
                <span className="font-semibold text-ink">“{trimmed}”</span>
              </>
            ) : (
              <>
                No matches for <span className="font-semibold text-ink">“{trimmed}”</span>
                {active !== 'all' ? ' in this category' : ''}
              </>
            )}
          </p>
        )}

        {visible.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              // Stagger by column so a row appears to settle in together.
              <Reveal
                key={post.slug}
                variant="rise"
                delay={(i % 3) * 110}
                className="h-full"
              >
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
            <p className="font-heading text-base font-semibold text-ink">No articles found</p>
            {matchesOutsideCategory > 0 ? (
              <>
                <p className="mt-2 text-sm">
                  “{trimmed}” appears in {matchesOutsideCategory}{' '}
                  {matchesOutsideCategory === 1 ? 'article' : 'articles'} outside this category.
                </p>
                <button type="button" onClick={() => setActive('all')} className="btn-outline mt-5">
                  Search all articles
                </button>
              </>
            ) : (
              <>
                <p className="mt-2 text-sm">
                  Try a different topic or clear your search to see all {posts.length} articles.
                </p>
                {trimmed && (
                  <button type="button" onClick={() => setQuery('')} className="btn-outline mt-5">
                    Clear search
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </section>

      <div className="pt-6">
        <DemoCta />
      </div>
    </>
  )
}
