import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GENERAL_MESSAGE } from '../config/messages'
import { STUDIO_VIDEO_ID } from '../config/video'
import WhatsAppButton from '../components/WhatsAppButton'
import ServicesSection from '../components/ServicesSection'
import SelectedWork from '../components/SelectedWork'
import TrainingSection from '../components/TrainingSection'
import TestimonialSection from '../components/TestimonialSection'
import StudioSection from '../components/StudioSection'

function Home() {
const [isVideoOpen, setIsVideoOpen] = useState(false)

useEffect(() => {
if (!isVideoOpen) return

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    setIsVideoOpen(false)
  }
}

window.addEventListener('keydown', handleKeyDown)

return () => {
  window.removeEventListener('keydown', handleKeyDown)
}

}, [isVideoOpen])

return (
<>
<section className="relative flex min-h-[40rem] items-end overflow-hidden bg-pwesh-night px-6 pb-32 pt-16 md:min-h-[38rem] md:items-center md:px-16 md:py-16">
<img src="/ceo.jpeg" fetchPriority="high" alt="Adekunle Precious, CEO of PWESH BEAUTY HUB" className="absolute inset-0 h-full w-full object-cover object-[50%_15%] md:inset-auto md:right-0 md:top-0 md:w-[55%]" />
<div className="absolute inset-0 bg-linear-to-t from-pwesh-night/90 via-pwesh-night/55 to-transparent md:hidden"></div>
<div className="absolute inset-0 hidden bg-linear-to-r from-pwesh-night from-40% via-pwesh-night/60 via-50% to-transparent to-68% md:block"></div>
<div className="relative max-w-xl">
<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-lilac motion-safe:animate-fade-up">Lagos, Nigeria</p>
<h1 className="max-w-md font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl motion-safe:animate-fade-up motion-safe:[animation-delay:100ms]">More than beauty.<br /><em className="inline-block italic text-pwesh-lilac motion-safe:animate-fade-up motion-safe:[animation-delay:400ms]">It’s you.</em></h1>
<p className="mt-4 max-w-md text-sm text-white/90 md:text-base motion-safe:animate-fade-up motion-safe:[animation-delay:550ms]">Lashes, brows, nails, tattoo, braces and teeth whitening — plus hands-on beauty training for those ready to learn the craft.</p>
<div className="mt-6 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:700ms]">
<WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
<Link to="/services" className="group inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 transition-colors hover:text-pwesh-lilac">
Explore services
<svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
</Link>
</div>
</div>
<button type="button" onClick={() => setIsVideoOpen(true)} className="absolute bottom-6 right-4 z-10 flex flex-col items-center gap-2 text-center text-xs font-semibold text-white drop-shadow-md md:bottom-10 md:right-10">
<span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/70 backdrop-blur-sm">
<span className="absolute inset-0 rounded-full bg-white/40 motion-safe:animate-ping"></span>
<svg viewBox="0 0 24 24" className="relative h-6 w-6 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
</span>
Watch our studio
</button>
</section>
<ServicesSection />
<SelectedWork />
<TrainingSection />
<TestimonialSection />
<StudioSection />
{isVideoOpen && (
<div className="fixed inset-0 z-[60] flex items-center justify-center bg-pwesh-night/80 p-4">
<div className="relative aspect-[9/16] h-[80vh] max-h-[40rem] max-w-full">
<button type="button" onClick={() => setIsVideoOpen(false)} aria-label="Close video" className="absolute -top-10 right-0 text-3xl text-white">✕</button>
{STUDIO_VIDEO_ID ? (
<iframe
className="h-full w-full rounded-lg"
src={'https://www.youtube-nocookie.com/embed/' + STUDIO_VIDEO_ID + '?autoplay=1&rel=0&playsinline=1'}
title="Watch our studio"
allow="autoplay; encrypted-media; picture-in-picture"
allowFullScreen
></iframe>
) : (
<div className="flex h-full w-full items-center justify-center rounded-lg bg-pwesh-night p-6 text-center text-white">Our studio video is coming soon.</div>
)}
</div>
</div>
)}
</>
)
}

export default Home