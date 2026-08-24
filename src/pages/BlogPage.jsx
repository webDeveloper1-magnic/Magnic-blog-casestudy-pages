import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ScrollTabs from '../components/ScrollTabs'
import PageHeader from '../components/PageHeader'
import DemoCta from '../components/DemoCta'
import { posts, categories } from '../data/posts'

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
  return (
    // Product shots are transparent cutouts, so the tile needs a white ground and
    // object-contain — object-cover would slice the edges off the machine.
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-gradient-to-b from-white to-surface p-4">
      <img
        src={post.image}
        alt={post.imageAlt || ''}
        loading="lazy"
        onError={() => setFailed(true)}
        className="max-h-full max-w-full object-contain transition-transform duration-500 ease-reveal group-hover:scale-[1.06]"
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

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((p) =>
        active === 'all' ? true : p.category === active || p.also?.includes(active),
      )
      .filter((p) =>
        q ? p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) : true,
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [active, query])

  return (
    <>
      <PageHeader
        crumb="Blog"
        eyebrow="News & Updates"
        title="What's new at Magnic Technologies"
        description="Product launches, exhibitions, awards and practical guides from the team that designs and builds the machines."
      />

      <section className="container-page py-10 md:py-12">
        <div className="mb-7 flex flex-col gap-4">
          <div className="relative sm:max-w-xs sm:self-end">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full rounded-full border border-line bg-white px-5 py-2 text-sm outline-none transition focus:border-primary"
            />
          </div>
          <ScrollTabs
            options={categories}
            active={active}
            onSelect={setActive}
            label="Filter articles by category"
          />
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              // Stagger by column so a row appears to settle in together.
              <Reveal key={post.slug} delay={(i % 3) * 90} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
            <p className="font-heading text-base font-semibold text-ink">No articles found</p>
            <p className="mt-2 text-sm">
              Try a different topic or clear your search to see all {posts.length} articles.
            </p>
          </div>
        )}
      </section>

      <div className="pt-10">
        <DemoCta />
      </div>
    </>
  )
}
