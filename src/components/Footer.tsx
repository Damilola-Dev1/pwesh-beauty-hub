import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../config/whatsapp'
import { GENERAL_MESSAGE } from '../config/messages'
import { INSTAGRAM_URL, TIKTOK_URL } from '../config/social'
import logoLight from '../assets/logo-light.png'

const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(GENERAL_MESSAGE)

function Footer() {
return (
<footer className="flex flex-col gap-3 p-6 pb-20 bg-pwesh-night text-pwesh-lilac md:flex-row md:items-center md:justify-between md:pb-6">
<div className="flex items-center gap-3">
<img src={logoLight} alt="" className="h-12 w-auto" />
<div>
<span className="block font-display text-2xl font-semibold text-white">PWESH BEAUTY HUB</span>
<p className="mt-1 text-sm">Beauty services and training</p>
</div>
</div>
<nav className="flex flex-wrap gap-x-4 gap-y-2">
<Link to="/" className="transition-colors hover:text-white">Home</Link>
<Link to="/services" className="transition-colors hover:text-white">Services</Link>
<Link to="/gallery" className="transition-colors hover:text-white">Gallery</Link>
<Link to="/training" className="transition-colors hover:text-white">Training</Link>
<Link to="/about" className="transition-colors hover:text-white">About</Link>
<Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
</nav>
<div className="flex flex-wrap items-center gap-5">
<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="PWESH BEAUTY HUB on Instagram" className="transition-colors hover:text-white">
<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" /></svg>
</a>
<a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="PWESH BEAUTY HUB on TikTok" className="transition-colors hover:text-white">
<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.4 2.6 2.2 4.3 5 4.5" /></svg>
</a>
<a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" >
Chat with us on WhatsApp
</a>
</div>
</footer>
)
}

export default Footer