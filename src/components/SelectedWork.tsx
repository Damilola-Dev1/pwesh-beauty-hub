import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import lashesImage from '../assets/work-lashes.webp'
import tattooImage from '../assets/work-tattoo.webp'
import teethImage from '../assets/work-teeth.webp'
import bracesImage from '../assets/work-braces.webp'
import nailsImage from '../assets/work-nails.webp'

interface Work {
label: string
image?: string
alt?: string
}

const works: Work[] = [
{ label: 'Lashes', image: lashesImage, alt: 'Lash extensions close up' },
{ label: 'Brows' },
{ label: 'Tattoo', image: tattooImage, alt: 'Script tattoos on a forearm and a thigh' },
{ label: 'Teeth Whitening', image: teethImage, alt: 'Teeth after whitening' },
{ label: 'Braces', image: bracesImage, alt: 'Braces on teeth' },
{ label: 'Nails', image: nailsImage, alt: 'Stiletto nails with white tips and a black pattern' },
]

function SelectedWork() {
const gridRef = useRef<HTMLDivElement>(null)
const [visible, setVisible] = useState(false)

// Watches the grid. When about 15% of it is on screen, we switch visible to true once.
useEffect(() => {
const node = gridRef.current
if (!node) return

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      setVisible(true)
      observer.disconnect()
    }
  },
  { threshold: 0.15 }
)

observer.observe(node)
return () => observer.disconnect()

}, [])

return (
<section className="bg-pwesh-purple-deep px-6 py-16 md:px-16 md:py-20">
<div className="mx-auto max-w-6xl">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-lilac">Selected work</p>
<h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">Real People.<br />Beautiful Results.</h2>
<p className="mt-4 max-w-md text-white/80">A glimpse at some of the work we're proud to put our name behind.</p>
</div>
<Link to="/gallery" className="group inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 transition-colors hover:text-pwesh-lilac">
View full gallery
<svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
</Link>
</div>
<div ref={gridRef} className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
{works.map((work, index) => (
<div
key={work.label}
style={{ transitionDelay: visible ? index * 100 + 'ms' : '0ms' }}
className={
'group relative aspect-[3/4] overflow-hidden rounded-2xl bg-pwesh-lilac transition-all duration-700 ease-out motion-reduce:transition-none lg:aspect-[4/3] ' +
(visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0')
}
>
{work.image && (
<img src={work.image} alt={work.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
)}
<span
aria-hidden="true"
style={{ transitionDelay: visible ? index * 100 + 700 + 'ms' : '0ms' }}
className={
'pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1200ms] ease-out motion-reduce:hidden ' +
(visible ? 'translate-x-[400%]' : '-translate-x-full')
}
/>
<span className="absolute bottom-3 left-3 rounded-full bg-pwesh-night/70 px-3 py-1 text-xs font-semibold text-white">{work.label}</span>
</div>
))}
</div>
</div>
</section>
)
}

export default SelectedWork