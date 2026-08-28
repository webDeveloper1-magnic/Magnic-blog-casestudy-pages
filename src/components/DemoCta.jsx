import Reveal from './Reveal'

export default function DemoCta({
  title = 'See it with your own jewellery',
  body = 'Book a free demo and watch an EasyCLIQ studio photograph your own pieces — or see FIDM find a ferrous pin in seconds.',
}) {
  return (
    <section className="container-page">
      <Reveal variant="scale" className="grid items-center gap-8 rounded-card border border-line border-l-[4px] border-l-accent bg-surface px-7 py-10 shadow-card md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <h2 className="text-2xl font-bold md:text-[28px]">{title}</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary">Book a Demo</a>
          <a
            href="https://wa.me/918870222099"
            className="btn-outline"
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  )
}
