import { useState } from 'react'
import WhatsAppButton from '../components/WhatsAppButton'

interface Service {
  name: string
  category: string
  image: string
  description: string
  tag: string
}

const categoryFilters = ['All', 'Lashes & Brows', 'Smile & Body', 'Nails'] as const

const services: Service[] = [
  {
    name: 'Lashes',
    category: 'Lashes & Brows',
    image: 'https://images.unsplash.com/photo-1583001809873-a1284a563176?q=80&w=800&auto=format&fit=crop',
    description: 'Lash sets applied with care and precision, shaped to suit your natural eyes.',
    tag: 'Custom fit'
  },
  {
    name: 'Brows',
    category: 'Lashes & Brows',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop',
    description: 'Brow shaping and styling that frames your face with a clean, natural look.',
    tag: 'Precision'
  },
  {
    name: 'Tattoo',
    category: 'Smile & Body',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop',
    description: 'Hygienic body art, planned with you before the first line is drawn.',
    tag: 'Hygienic'
  },
  {
    name: 'Piercing',
    category: 'Smile & Body',
    image: '', // Gracefully handled by placeholder fallback below
    description: 'Careful, hygienic piercing, with the placement discussed with you first.',
    tag: 'Careful'
  },
  {
    name: 'Teeth Whitening',
    category: 'Smile & Body',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    description: 'A gentle whitening session for a brighter, more confident smile.',
    tag: 'Bright smile'
  },
  {
    name: 'Braces',
    category: 'Smile & Body',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    description: 'Braces fitted with care, with clear guidance on looking after them.',
    tag: 'Guided care'
  },
  {
    name: 'Nails',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    description: 'Nail shaping and polish, with the colour and style chosen by you.',
    tag: 'Your style'
  }
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-pwesh-paper">
      {/* Hero Header Section */}
      <section className="px-6 pb-12 pt-16 md:px-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-pwesh-purple">
                PWESH Beauty Hub
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.1] text-pwesh-night md:text-6xl">
                Precision<br />
                in <em className="italic text-pwesh-purple">every detail.</em>
              </h1>
            </div>
            <p className="max-w-md text-base leading-relaxed text-pwesh-night/80">
              From lashes and brows to tattoo, piercing, teeth whitening, braces and nails, our services are designed around precision, hygiene and results you can see.
            </p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="mt-12 flex flex-wrap gap-2 border-b border-pwesh-lilac/40 pb-6">
            {categoryFilters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-pwesh-purple text-white shadow-md shadow-pwesh-purple/20'
                    : 'border border-pwesh-lilac/50 bg-white/80 text-pwesh-night/70 hover:bg-white hover:text-pwesh-night'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-6 pb-20 pt-4 md:px-16 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-pwesh-lilac/60 bg-white shadow-sm transition-all duration-300 focus-within:border-pwesh-purple hover:border-pwesh-purple/80 hover:shadow-xl hover:shadow-pwesh-purple/10 motion-safe:hover:-translate-y-1.5"
            >
              {/* Service Image Header */}
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-pwesh-lilac">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-display text-lg font-semibold text-pwesh-purple/70">
                    {service.name}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Number Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold text-pwesh-purple backdrop-blur-md">
                  {String(services.indexOf(service) + 1).padStart(2, '0')}
                </span>

                {/* Feature Tag */}
                <span className="absolute bottom-3 right-4 rounded-full bg-pwesh-night/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>

              {/* Service Body Content */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-pwesh-night transition-colors group-hover:text-pwesh-purple">
                  {service.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-pwesh-night/75">
                  {service.description}
                </p>

                {/* Booking Action */}
                <div className="mt-6 border-t border-pwesh-lilac/30 pt-4">
                  <WhatsAppButton
                    message={`Hello PWESH BEAUTY HUB, I would like to book ${service.name}.`}
                    label={`Book ${service.name}`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}