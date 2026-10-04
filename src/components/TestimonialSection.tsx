const quote = 'Professional, clean and genuinely welcoming. I always leave feeling like I made the right choice.'
const author = 'Toluwani, Lagos'

function TestimonialSection() {
return (

<section className="bg-pwesh-lilac px-6 py-12 md:px-16 md:py-20"> <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 md:gap-16"> <figure> <span className="block font-display text-6xl leading-none text-pwesh-purple md:text-8xl" aria-hidden="true">“</span> <blockquote className="font-display text-xl italic leading-snug text-pwesh-night md:text-4xl">{quote}</blockquote> <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-pwesh-purple md:mt-6 md:text-sm">{author}</figcaption> </figure> <div className="aspect-[4/5] w-full rounded-2xl bg-white/60"></div> </div> </section> ) }

export default TestimonialSection