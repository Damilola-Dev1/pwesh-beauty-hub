import { useEffect, useState } from 'react'
import { testimonials } from '../config/testimonials'

const INTERVAL = 7000

function TestimonialSection() {
const [index, setIndex] = useState(0)
const [paused, setPaused] = useState(false)
const [touchStart, setTouchStart] = useState<number | null>(null)

const total = testimonials.length
const current = testimonials[index]

useEffect(() => {
if (paused || total < 2) return
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

const timer = window.setInterval(() => {
  setIndex((i) => (i + 1) % total)
}, INTERVAL)

return () => window.clearInterval(timer)

}, [paused, total])

function goTo(next: number) {
setIndex((next + total) % total)
}

function handleTouchEnd(clientX: number) {
if (touchStart !== null) {
const diff = clientX - touchStart
if (Math.abs(diff) > 50) {
goTo(diff < 0 ? index + 1 : index - 1)
}
}
setTouchStart(null)
setPaused(false)
}

if (!current) return null

return (
<section className="bg-pwesh-lilac px-6 py-12 md:px-16 md:py-20" aria-roledescription="carousel" aria-label="Client testimonials" >
<div className="mx-auto mb-8 max-w-6xl md:mb-12">
<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple">Client reviews</p>
<h2 className="font-display text-4xl font-semibold leading-tight text-pwesh-night md:text-5xl">What our <em className="italic text-pwesh-purple">clients</em> say</h2>
</div>

  <div
    className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 md:gap-16"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)}
    onBlurCapture={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setPaused(false)
      }
    }}
    onTouchStart={(e) => {
      setPaused(true)
      setTouchStart(e.touches[0].clientX)
    }}
    onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
  >
    <div className="grid">
      {testimonials.map((t, i) => {
        const isActive = i === index
        return (
          <figure
            key={t.id}
            aria-hidden={!isActive}
            className={
              'col-start-1 row-start-1 motion-safe:transition-opacity motion-safe:duration-500 ' +
              (isActive ? 'z-10 opacity-100' : 'invisible pointer-events-none opacity-0')
            }
          >
            <span className="block font-display text-6xl leading-none text-pwesh-purple md:text-8xl" aria-hidden="true">“</span>
            <blockquote className="font-display text-xl italic leading-snug text-pwesh-night md:text-4xl">{t.quote}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 md:mt-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pwesh-purple text-sm font-semibold text-white md:h-11 md:w-11" aria-hidden="true">{t.name.charAt(0)}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-pwesh-purple md:text-sm">{t.name + ', ' + t.area}</span>
            </figcaption>
          </figure>
        )
      })}
    </div>

    <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-pwesh-purple-deep p-4 text-center md:aspect-[5/4]">
      <span className="pointer-events-none absolute -left-2 -top-6 font-display text-[10rem] leading-none text-white/10 md:text-[16rem]" aria-hidden="true">“</span>
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-pwesh-rose/30 blur-3xl md:h-72 md:w-72" aria-hidden="true"></div>
      <p className="relative text-[0.65rem] font-semibold uppercase tracking-widest text-pwesh-lilac md:text-xs">Service</p>
      <span className="relative mt-3 font-display text-3xl italic text-white md:text-5xl">{current.service}</span>
      <span className="relative mt-4 h-px w-12 bg-pwesh-lilac/60" aria-hidden="true"></span>
      <p className="absolute bottom-3 font-display text-sm text-pwesh-lilac md:bottom-5 md:text-base">{String(index + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0')}</p>
    </div>

    <div className="col-span-2 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous testimonial"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pwesh-purple/40 text-pwesh-purple transition-colors hover:bg-pwesh-purple hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pwesh-purple"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12H4m6-6-6 6 6 6" /></svg>
      </button>

      <div className="flex items-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={'Show testimonial ' + (i + 1)}
            aria-current={i === index}
            className={'h-2.5 rounded-full transition-all ' + (i === index ? 'w-6 bg-pwesh-purple' : 'w-2.5 bg-pwesh-purple/30')}
          ></button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next testimonial"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pwesh-purple/40 text-pwesh-purple transition-colors hover:bg-pwesh-purple hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pwesh-purple"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
      </button>
    </div>
  </div>
</section>

)
}

export default TestimonialSection