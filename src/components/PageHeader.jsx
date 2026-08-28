import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, description, crumb }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page py-6 md:py-8">
        <Reveal variant="down" as="nav" className="mb-2.5 text-xs text-ink-light">
          <span aria-label="Breadcrumb">
            <a href="/" className="transition hover:text-primary">
              Home
            </a>
            <span className="mx-2 text-line">/</span>
            <span className="text-ink">{crumb}</span>
          </span>
        </Reveal>

        <Reveal variant="left" delay={60}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>

        <Reveal variant="up" delay={130}>
          <h1 className="mt-1.5 max-w-3xl font-heading text-2xl font-bold leading-tight text-primary md:text-[32px]">
            {title}
          </h1>
        </Reveal>

        <Reveal variant="up" delay={210}>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed md:text-[15px]">{description}</p>
        </Reveal>
      </div>
    </section>
  )
}
