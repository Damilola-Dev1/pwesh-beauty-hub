import { useEffect, useState } from 'react'
import WhatsAppButton from '../components/WhatsAppButton'
import { GENERAL_MESSAGE } from '../config/messages'
import tattooBow from '../assets/gallery-tattoo-bow.webp'
import nailsLeopard from '../assets/gallery-nails-leopard.webp'
import bracesMetal from '../assets/gallery-braces-metal.webp'

type GalleryStyle = {
id: string
category: string
name: string
images: string[]
}

const filters = ['All', 'Lashes', 'Brows', 'Tattoo', 'Piercing', 'Teeth Whitening', 'Braces', 'Nails']

const galleryStyles: GalleryStyle[] = [
{ id: 'lashes-classic', category: 'Lashes', name: 'Classic', images: [] },
{ id: 'lashes-hybrid', category: 'Lashes', name: 'Hybrid', images: [] },
{ id: 'lashes-volume', category: 'Lashes', name: 'Volume', images: [] },
{ id: 'lashes-mega-volume', category: 'Lashes', name: 'Mega Volume', images: [] },
{ id: 'lashes-wet-set', category: 'Lashes', name: 'Wet Set', images: [] },
{ id: 'lashes-anime-set', category: 'Lashes', name: 'Anime Set', images: [] },
{ id: 'brows-ombre', category: 'Brows', name: 'Ombre', images: [] },
{ id: 'brows-microblading', category: 'Brows', name: 'Microblading', images: [] },
{ id: 'brows-micro-shading', category: 'Brows', name: 'Micro Shading', images: [] },
{ id: 'brows-combo', category: 'Brows', name: 'Combo Brows', images: [] },
{ id: 'tattoo', category: 'Tattoo', name: 'Tattoo', images: [tattooBow] },
{ id: 'piercing', category: 'Piercing', name: 'Piercing', images: [] },
{ id: 'teeth-scaling-polishing', category: 'Teeth Whitening', name: 'Scaling and Polishing', images: [] },
{ id: 'braces-metal', category: 'Braces', name: 'Metal Braces', images: [bracesMetal] },
{ id: 'braces-power-chain', category: 'Braces', name: 'Power Chain', images: [] },
{ id: 'nails', category: 'Nails', name: 'Nails', images: [nailsLeopard] },
]

function bookingMessage(style: GalleryStyle) {
const what = style.name === style.category ? style.name : style.category + ' (' + style.name + ')'
return 'Hello PWESH BEAUTY HUB, I would like to book ' + what + '.'
}

function Gallery() {
const [selectedFilter, setSelectedFilter] = useState('All')
const [selectedStyle, setSelectedStyle] = useState<GalleryStyle | null>(null)
const [slideIndex, setSlideIndex] = useState(0)

const visibleStyles = selectedFilter === 'All'
? galleryStyles
: galleryStyles.filter(style => style.category === selectedFilter)

const photoCount = selectedStyle ? selectedStyle.images.length : 0

useEffect(() => {
if (!selectedStyle) return
const count = selectedStyle.images.length

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') setSelectedStyle(null)
  if (count > 1 && event.key === 'ArrowRight') setSlideIndex(index => (index + 1) % count)
  if (count > 1 && event.key === 'ArrowLeft') setSlideIndex(index => (index - 1 + count) % count)
}

window.addEventListener('keydown', handleKeyDown)
return () => window.removeEventListener('keydown', handleKeyDown)

}, [selectedStyle])

function openStyle(style: GalleryStyle) {
setSlideIndex(0)
setSelectedStyle(style)
}

function showNext() {
if (photoCount > 1) setSlideIndex(index => (index + 1) % photoCount)
}

function showPrevious() {
if (photoCount > 1) setSlideIndex(index => (index - 1 + photoCount) % photoCount)
}

return (
<div className="min-h-screen bg-pwesh-paper">
<section className="px-6 pb-8 pt-16 md:px-16 md:pt-24">
<div className="mx-auto max-w-6xl">
<p className="mb-3 text-xs font-bold uppercase tracking-widest text-pwesh-purple">Gallery</p>
<h1 className="font-display text-5xl font-semibold leading-[1.1] text-pwesh-night md:text-6xl">
Real People.<br />
<em className="italic text-pwesh-purple">Beautiful Results.</em>
</h1>
<p className="mt-4 max-w-xl text-pwesh-night/80">A glimpse at some of the work we're proud to put our name behind.</p>

      <div className="mt-10 flex gap-2 overflow-x-auto border-b border-pwesh-lilac/40 pb-6 md:flex-wrap md:overflow-visible">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
            className={
              'shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ' +
              (selectedFilter === filter
                ? 'bg-pwesh-purple text-white shadow-md shadow-pwesh-purple/20'
                : 'border border-pwesh-lilac/50 bg-white/80 text-pwesh-night/70 hover:bg-white hover:text-pwesh-night')
            }
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  </section>

  <section className="px-6 pb-12 pt-4 md:px-16">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3">
      {visibleStyles.map((style) => (
        <button
          key={style.id}
          type="button"
          onClick={() => openStyle(style)}
          className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-pwesh-lilac text-left transition-all duration-300 hover:shadow-xl hover:shadow-pwesh-purple/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pwesh-purple lg:aspect-[4/3]"
        >
          {style.images[0] ? (
            <img
              src={style.images[0]}
              alt={style.category + ' ' + style.name}
              className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              loading="lazy"
            />
          ) : null}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-pwesh-purple">{style.category}</span>
          <span className="absolute bottom-3 left-3 rounded-full bg-pwesh-night/70 px-3 py-1 text-xs font-semibold text-white">{style.name}</span>
        </button>
      ))}
    </div>
  </section>

  <section className="bg-pwesh-lilac px-6 py-12 md:px-16 md:py-16">
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      <h2 className="font-display text-3xl font-semibold text-pwesh-night md:text-4xl">Like what you see? <em className="italic text-pwesh-purple">Let's talk.</em></h2>
      <WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
    </div>
  </section>

  {selectedStyle && (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-pwesh-night/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={selectedStyle.category + ' ' + selectedStyle.name + ' photos'}
      onClick={() => setSelectedStyle(null)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-pwesh-paper p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setSelectedStyle(null)}
          aria-label="Close photos"
          className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-pwesh-night"
        >
          ✕
        </button>

        <div className="relative aspect-[4/5] max-h-[55vh] w-full overflow-hidden rounded-xl bg-pwesh-lilac">
          {photoCount > 0 ? (
            <img
              src={selectedStyle.images[slideIndex]}
              alt={selectedStyle.category + ' ' + selectedStyle.name + ' photo ' + (slideIndex + 1)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm font-semibold text-pwesh-purple">Photos coming soon</div>
          )}

          {photoCount > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-pwesh-night"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-pwesh-night"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-pwesh-night/70 px-3 py-1 text-xs font-semibold text-white">
                {slideIndex + 1} / {photoCount}
              </span>
            </>
          )}
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple">{selectedStyle.category}</p>
        <h2 className="font-display text-3xl font-semibold text-pwesh-night">{selectedStyle.name}</h2>
        <div className="mt-4">
          <WhatsAppButton message={bookingMessage(selectedStyle)} label={'Book ' + selectedStyle.name} />
        </div>
      </div>
    </div>
  )}
</div>

)
}

export default Gallery