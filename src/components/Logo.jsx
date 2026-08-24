/**
 * Magnic logo. Two artwork files ship in /public/images/logo:
 *   logo2.png — blue ink, for LIGHT surfaces (the navbar)
 *   logo1.png — white ink, for DARK surfaces
 * Picking the wrong one renders the mark invisible, so the variant is explicit.
 */
export default function Logo({ variant = 'dark-ink', className = '' }) {
  const src = variant === 'light-ink' ? '/images/logo/logo1.png' : '/images/logo/logo2.png'

  return (
    <img
      src={src}
      alt="Magnic Technologies"
      width="102"
      height="90"
      className={['h-10 w-auto shrink-0 md:h-11', className].filter(Boolean).join(' ')}
    />
  )
}
