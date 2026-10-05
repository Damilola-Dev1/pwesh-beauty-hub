import { Link } from 'react-router-dom'
import introImage from '../assets/services-intro.webp'

const services = ['Lashes', 'Brows', 'Tattoo', 'Piercing', 'Teeth Whitening', 'Braces', 'Nails']

function ServicesSection() {
  return (
    <section className="bg-pwesh-paper px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-pwesh-lilac">
          <img
            src={introImage}
            alt="Close-up of an eye with lash extensions and shaped brows"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple">Our services</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-pwesh-night md:text-5xl">
            Precision<br />in <em className="italic text-pwesh-purple">every detail.</em>
          </h2>
          <p className="mt-4 max-w-md text-pwesh-night/80">
            From lashes and brows to nails, tattoo, piercing, braces and teeth whitening, our services are designed around precision, hygiene and results you can see.
          </p>
          <Link
            to="/services"
            className="group mt-6 inline-flex items-center gap-2 font-semibold text-pwesh-purple underline underline-offset-4 transition-colors hover:text-pwesh-night"
          >
            Explore all services
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
          </Link>
        </div>

        <ul className="md:col-span-2 lg:col-span-1">
          {services.map((service, index) => (
            <li key={service} className="flex items-baseline gap-4 border-b border-pwesh-lilac py-4 first:border-t">
              <span className="font-display text-xl text-pwesh-purple">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-display text-2xl font-semibold text-pwesh-night">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection