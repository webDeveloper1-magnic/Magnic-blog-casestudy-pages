import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DemoCta from '../components/DemoCta'
import Reveal from '../components/Reveal'
import ReadingProgress from '../components/ReadingProgress'
import { posts } from '../data/posts'

function VideoFrame({ video }) {
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-card border border-line bg-black pt-[56.25%] shadow-card">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {video.title && (
        <p className="mt-2.5 font-heading text-sm font-semibold leading-snug text-ink">
          {video.title}
        </p>
      )}
    </div>
  )
}

function VideoRail({ videos, heading = 'Watch it in action' }) {
  if (!videos?.length) return null

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <h2 className="mb-4 border-b border-line pb-3 font-heading text-sm font-bold uppercase tracking-wider text-ink">
        {heading}
      </h2>
      <div className="flex flex-col gap-6">
        {videos.map((v) => (
          <VideoFrame key={v.youtubeId} video={v} />
        ))}
      </div>
    </aside>
  )
}

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

function SectionHeading({ children }) {
  return <h2 className="mb-4 font-heading text-xl font-bold text-primary md:text-[26px]">{children}</h2>
}

function TextSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      <SafeImg
        src={section.image}
        alt={section.imageAlt}
        className="mb-5 w-full rounded-card border border-line bg-white object-contain shadow-card"
      />
      <div className="flex flex-col gap-4">
        {section.body.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed md:text-base">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

function ComparisonSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mb-6 text-[15px] leading-relaxed md:text-base">{section.intro}</p>
      )}

      <div className="flex flex-col gap-4">
        {section.pairs.map((pair, i) => (
          <div key={i} className="grid gap-px overflow-hidden rounded-card border border-line bg-line shadow-card sm:grid-cols-2">
            <div className="bg-surface px-5 py-4">
              <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-ink-light">
                {section.beforeLabel}
              </span>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-light">{pair.before}</p>
            </div>
            <div className="relative bg-white px-5 py-4">
              <span
                className="absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-accent font-heading text-xs font-bold text-primary sm:flex"
                aria-hidden="true"
              >
                →
              </span>
              <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                {section.afterLabel}
              </span>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-ink">{pair.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GallerySection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mb-6 text-[15px] leading-relaxed md:text-base">{section.intro}</p>
      )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {section.images.map((img) => (
          <div
            key={img.src}
            className="card flex aspect-square items-center justify-center p-3"
          >
            <SafeImg src={img.src} alt={img.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

function UseCasesSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mb-6 text-[15px] leading-relaxed md:text-base">{section.intro}</p>
      )}
      <div className="grid gap-4 sm:grid-cols-3">
        {section.items.map((u) => (
          <div key={u.title} className="rounded-card border border-line border-t-[3px] border-t-primary bg-white px-5 py-5 shadow-card">
            <h3 className="font-heading text-sm font-bold text-primary">{u.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed">{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StatsSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line shadow-card">
        {section.items.map((s) => (
          <div key={s.label} className="bg-white px-4 py-5 text-center">
            <div className="font-heading text-2xl font-extrabold tabular-nums text-primary">
              {s.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-ink-light">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SpecsSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mb-6 text-[15px] leading-relaxed md:text-base">{section.intro}</p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        {section.tables.map((t) => (
          <div key={t.title} className="card">
            <SafeImg
              src={t.image}
              alt={t.imageAlt}
              className="w-full border-b border-line bg-white object-contain p-3"
            />
            <div className="px-5 py-4">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
                {t.title}
              </h3>
              <table className="mt-3 w-full text-[13px]">
                <tbody>
                  {t.rows.map(([k, v]) => (
                    <tr key={k} className="border-b border-line last:border-none">
                      <td className="py-2 pr-3 align-top text-ink-light">{k}</td>
                      <td className="py-2 text-right align-top font-medium text-ink">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function BenefitsSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="flex flex-col gap-3">
        {section.items.map((b) => (
          <div key={b.title} className="rounded-card border border-line border-l-[3px] border-l-accent bg-white px-5 py-4 shadow-card">
            <h3 className="font-heading text-sm font-bold text-ink">{b.title}</h3>
            <p className="mt-1 text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProblemSolutionsSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mb-6 text-[15px] leading-relaxed md:text-base">{section.intro}</p>
      )}
      <div className="flex flex-col gap-5">
        {section.items.map((item) => (
          <div key={item.title} className="card grid sm:grid-cols-[190px_1fr]">
            <SafeImg
              src={item.image}
              alt={item.title}
              className="aspect-[16/9] w-full border-b border-line bg-white object-contain p-3 sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r"
            />
            <div className="px-5 py-5">
              <h3 className="font-heading text-base font-bold leading-snug text-ink">
                {item.title}
              </h3>
              <div className="mt-3 border-l-2 border-line pl-4">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-ink-light">
                  The problem
                </span>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-light">{item.problem}</p>
              </div>
              <div className="mt-3 border-l-2 border-accent pl-4">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  How FIDM solves it
                </span>
                <p className="mt-1 text-[13.5px] font-medium leading-relaxed text-ink">
                  {item.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection({ section }) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2">
        {section.items.map((f) => (
          <div key={f.title} className="card flex flex-col">
            <SafeImg
              src={f.image}
              alt={f.title}
              className="aspect-[16/9] w-full border-b border-line bg-white object-contain p-2"
            />
            <div className="flex-1 px-5 py-4">
              <h3 className="font-heading text-sm font-bold leading-snug text-ink">{f.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const SECTION_RENDERERS = {
  text: TextSection,
  comparison: ComparisonSection,
  gallery: GallerySection,
  usecases: UseCasesSection,
  problemsolutions: ProblemSolutionsSection,
  stats: StatsSection,
  specs: SpecsSection,
  benefits: BenefitsSection,
  features: FeaturesSection,
}

function PostSections({ sections }) {
  if (!sections?.length) return null
  return (
    <div className="mt-14 flex flex-col gap-14">
      {sections.map((section, i) => {
        const Renderer = SECTION_RENDERERS[section.type]
        return Renderer ? (
          <Reveal key={i}>
            <Renderer section={section} />
          </Reveal>
        ) : null
      })}
    </div>
  )
}

function NotFound() {
  return (
    <section className="container-page py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-2xl font-bold md:text-3xl">Article not found</h1>
      <p className="mx-auto mt-3 max-w-md leading-relaxed">
        This article may have been moved or is not published yet.
      </p>
      <Link to="/blog" className="btn-primary mt-7">
        Back to all articles
      </Link>
    </section>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const hasVideos = post.videos?.length > 0
  const isPhotoHero = post.heroStyle === 'cover'

  return (
    <>
      <ReadingProgress />
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-primary to-primary-2">
        {/* Two hero treatments. A photograph fills the band edge to edge; a product
            cutout floats on the gradient, aligned to the content gutter. */}
        {post.image && isPhotoHero && (
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${post.image})` }}
            role="img"
            aria-label={post.imageAlt || ''}
          />
        )}
        {/* Scrim keeps the headline legible over a photographic hero. It is painted
            BEFORE the cutout below so a product or award image is never tinted by it —
            certificates and engraved plaques become unreadable under a colour wash. */}
        <div
          className={[
            'pointer-events-none absolute inset-0',
            isPhotoHero
              ? 'bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60'
              : 'bg-gradient-to-r from-primary via-primary/80 to-primary/20 md:to-transparent',
          ].join(' ')}
          aria-hidden="true"
        />
        {post.image && !isPhotoHero && (
          <div className="pointer-events-none absolute inset-0">
            <div className="container-page relative h-full">
              <div
                className="absolute inset-y-0 right-0 w-full bg-contain bg-center bg-no-repeat bg-origin-content px-5 opacity-25 sm:px-6 md:w-[50%] md:bg-right md:opacity-100 lg:px-8"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={post.imageAlt || ''}
              />
            </div>
          </div>
        )}

        <div className="container-page relative flex flex-col justify-center py-10 md:min-h-[50vh] md:py-12">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
            <Link to="/blog" className="transition hover:text-accent">
              Blog
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/90">{post.categoryLabel}</span>
          </nav>

          <div className="max-w-xl">
            <span
              className={[
                'inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.09em]',
                post.category === 'news' ? 'bg-accent text-primary' : 'bg-white/15 text-white',
              ].join(' ')}
            >
              {post.categoryLabel}
            </span>

            <h1 className="mt-4 text-2xl font-bold leading-tight text-white md:text-[36px]">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/70">
              {post.dateLabel && (
                <>
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  <span className="text-white/30">•</span>
                </>
              )}
              <span>{post.readingTime} min read</span>
              <span className="text-white/30">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page py-10 md:py-14">
        {/* Two columns only when there is a video rail to fill the second one.
            Without videos the content centres instead of leaving a dead gutter. */}
        <div
          className={
            hasVideos
              ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14'
              : 'mx-auto max-w-4xl'
          }
        >
          {/* Left — article content */}
          <div>
            {post.excerpt && (
              <p className="mb-8 border-l-4 border-accent bg-surface px-5 py-4 text-base leading-relaxed text-ink md:text-lg">
                {post.excerpt}
              </p>
            )}

            {post.body?.length ? (
              <div className="flex flex-col gap-5">
                {post.body.map((para, i) => (
                  <p key={i} className="text-[15px] leading-relaxed md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="border border-dashed border-line bg-surface px-5 py-8 text-center text-sm">
                Full article content coming soon.
              </p>
            )}

            <PostSections sections={post.sections} />

            {post.tags?.length ? (
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                <span className="mr-1 font-heading text-xs font-semibold uppercase tracking-wider text-ink-light">
                  Tags
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-8">
              <Link
                to="/blog"
                className="font-heading text-xs font-semibold uppercase tracking-wider text-primary"
              >
                ← Back to all articles
              </Link>
            </div>
          </div>

          {/* Right — video rail */}
          <VideoRail videos={post.videos} heading={post.videoHeading} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-page pb-14">
          <h2 className="mb-6 border-b border-line pb-4 text-xl font-bold">Read next</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col border border-line bg-white p-6 transition hover:border-primary/40 hover:shadow-[0_2px_18px_rgba(44,46,131,0.08)]"
              >
                <span className="mb-3 inline-block self-start bg-teal/10 px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.1em] text-teal-2">
                  {p.categoryLabel}
                </span>
                <h3 className="text-base font-semibold leading-snug transition group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 text-xs text-ink-light">{p.dateLabel}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <DemoCta />
    </>
  )
}
