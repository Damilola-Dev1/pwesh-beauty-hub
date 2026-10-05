export interface Testimonial {
id: number
quote: string
name: string
area: string
service: string
demo?: boolean
}

// DEMO TESTIMONIALS: sample text only, to be replaced with real client quotes before launch.
// When a quote is real and approved by the client, remove the demo line from that entry.
export const testimonials: Testimonial[] = [
{
id: 1,
quote: 'Professional, clean and genuinely welcoming. I always leave feeling like I made the right choice.',
name: 'Toluwani',
area: 'Lagos',
service: 'Lashes',
demo: true,
},
{
id: 2,
quote: 'My brows have never looked this neat. She listened to what I wanted and took her time.',
name: 'Amaka',
area: 'Ojodu',
service: 'Brows',
demo: true,
},
{
id: 3,
quote: 'The finish was clean and the design was exactly what I showed her. I got so many compliments.',
name: 'Bisola',
area: 'Lagos',
service: 'Nails',
demo: true,
},
{
id: 4,
quote: 'A very hygienic setup and a steady hand. The lettering came out sharp and just as I pictured it.',
name: 'Chidera',
area: 'Ikeja',
service: 'Tattoo',
demo: true,
},
{
id: 5,
quote: 'Everything was explained clearly before we started, and I felt comfortable the whole time.',
name: 'Funmi',
area: 'Berger',
service: 'Teeth Whitening',
demo: true,
},
{
id: 6,
quote: 'Quick, careful and clean. I was nervous, but she made it easy.',
name: 'Kemi',
area: 'Lagos',
service: 'Piercing',
demo: true,
},
]