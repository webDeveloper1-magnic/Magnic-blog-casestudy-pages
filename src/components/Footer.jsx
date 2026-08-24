export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-primary text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
            MAGNIC
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Intelligent machines for the jewellery industry — patented ferrous particle detection
            and AI-powered product photography studios, designed and manufactured in Coimbatore.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/blog" className="transition hover:text-accent">Blog</a></li>
            <li><a href="/case-studies" className="transition hover:text-accent">Case Studies</a></li>
            <li><a href="/products" className="transition hover:text-accent">Products</a></li>
            <li><a href="/service-parts" className="transition hover:text-accent">Service &amp; Parts</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:sales@magnic.in" className="transition hover:text-accent">sales@magnic.in</a></li>
            <li><a href="tel:+91-8870222099" className="transition hover:text-accent">+91 88702 22099</a></li>
            <li className="pt-1 leading-relaxed text-white/60">Kalapatti West,<br />Coimbatore – 641048</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50">
          © {new Date().getFullYear()} Magnic Technologies Pvt. Ltd. — Prototype pages for review.
        </div>
      </div>
    </footer>
  )
}
