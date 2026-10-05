import WhatsAppButton from './WhatsAppButton'
import { GENERAL_MESSAGE } from '../config/messages'

const location = 'Olutola Gate, opposite Miliki FM, Ojodu Berger, Lagos, Nigeria'
const days = 'Monday - Friday'
const hours = '9:00 AM - 7:00 PM'
const homeService = 'Home service available. Message us on WhatsApp to schedule an appointment.'
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(location)

function StudioSection() {
return (
<section className="bg-pwesh-paper px-6 py-16 md:px-16 md:py-20">
<div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
<div className="aspect-[4/3] w-full rounded-2xl bg-pwesh-lilac"></div>
<div>
<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple">Visit the studio</p>
<h2 className="font-display text-4xl font-semibold leading-tight text-pwesh-night md:text-5xl">Come by. <em className="italic text-pwesh-purple">We'd love to meet you.</em></h2>
<p className="mt-4 max-w-md text-pwesh-night/80">Whether you're coming for a service, a consultation or training, our studio is ready for you.</p>
<ul className="mt-6 space-y-3 text-pwesh-night">
<li className="flex items-start gap-3">
<svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-pwesh-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>
<span>{location}</span>
</li>
<li className="flex items-start gap-3">
<svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-pwesh-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
<span>{days}, {hours}</span>
</li>
<li className="flex items-start gap-3">
<svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-pwesh-purple" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /></svg>
<span>{homeService}</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-4">
<WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
<a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-semibold text-pwesh-purple underline underline-offset-4 transition-colors hover:text-pwesh-night">
Get directions
<svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
</a>
</div>
</div>
</div>
</section>
)
}

export default StudioSection