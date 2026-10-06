import { Link } from 'react-router-dom'
import { INSTAGRAM_URL, TIKTOK_URL } from '../config/social'
import logoLight from '../assets/logo-light.png'

function Footer() {
return (
<footer className="flex flex-col items-center gap-8 bg-pwesh-night px-6 pb-24 pt-10 text-center text-pwesh-lilac md:flex-row md:justify-between md:gap-3 md:p-6 md:text-left">
<div className="flex flex-col items-center gap-3 md:flex-row">
<img src={logoLight} alt="" className="h-14 w-auto md:h-12" />
<div>
<span className="block font-display text-2xl font-semibold text-white">PWESH BEAUTY HUB</span>
<p className="mt-1 text-sm">Beauty services and training</p>
</div>
</div>
<nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start md:gap-x-4 md:gap-y-2">
<Link to="/" className="transition-colors hover:text-white">Home</Link>
<Link to="/services" className="transition-colors hover:text-white">Services</Link>
<Link to="/gallery" className="transition-colors hover:text-white">Gallery</Link>
<Link to="/training" className="transition-colors hover:text-white">Training</Link>
<Link to="/about" className="transition-colors hover:text-white">About</Link>
<Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
</nav>
<div className="flex items-center justify-center gap-6 md:gap-5">
<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="PWESH BEAUTY HUB on Instagram" className="transition-colors hover:text-white">
<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" /></svg>
</a>
<a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="PWESH BEAUTY HUB on TikTok" className="transition-colors hover:text-white">
<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.4 2.6 2.2 4.3 5 4.5" /></svg>
</a>
</div>
</footer>
)
}

export default Footer