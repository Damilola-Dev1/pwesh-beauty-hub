import { Link } from 'react-router-dom'

function NotFound() {
return (
<section className="bg-pwesh-paper px-6 py-20 md:px-16 md:py-32">
<div className="mx-auto max-w-3xl text-center">
<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple">Page not found</p>
<h1 className="font-display text-7xl font-semibold leading-none text-pwesh-purple md:text-9xl">404</h1>
<h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-pwesh-night md:text-5xl">
This page is <em className="italic text-pwesh-purple">not here.</em>
</h2>
<p className="mx-auto mt-5 max-w-md text-pwesh-night/80">
The link may be broken or the page may have moved. Let us take you back to where the beauty is.
</p>
<div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
<Link to="/" className="inline-flex items-center rounded-full bg-pwesh-purple px-6 py-3 font-semibold text-white transition-colors hover:bg-pwesh-night">
Back to Home
</Link>
<Link to="/services" className="font-semibold text-pwesh-purple underline underline-offset-4 transition-colors hover:text-pwesh-night">
View our services
</Link>
</div>
</div>
</section>
)
}

export default NotFound