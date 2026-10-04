import { Link } from 'react-router-dom'

const works = ['Lashes', 'Brows', 'Tattoo', 'Teeth Whitening', 'Braces', 'Nails']

function SelectedWork() {
return (

<section className="bg-pwesh-purple-deep px-6 py-16 md:px-16 md:py-20"> <div className="mx-auto max-w-6xl"> <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"> <div> <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pwesh-lilac">Selected work</p> <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">Real People.<br />Beautiful Results.</h2> <p className="mt-4 max-w-md text-white/80">A glimpse at some of the work we're proud to put our name behind.</p> </div> <Link to="/gallery" className="group inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 transition-colors hover:text-pwesh-lilac"> View full gallery <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg> </Link> </div> <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3"> {works.map((work) => ( <div key={work} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-pwesh-lilac lg:aspect-[4/3]"> <span className="absolute bottom-3 left-3 rounded-full bg-pwesh-night/70 px-3 py-1 text-xs font-semibold text-white">{work}</span> </div> ))} </div> </div> </section> ) }

export default SelectedWork