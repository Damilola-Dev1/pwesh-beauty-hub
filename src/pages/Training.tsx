import WhatsAppButton from '../components/WhatsAppButton'
import { GENERAL_MESSAGE } from '../config/messages'

const afterTraining = 'You will do practicals and be issued a certificate after the training.'

const courses = [
{
name: 'Lash Extension',
tag: 'Precise',
description: 'Hands-on lash extension training in the studio, with real tools and personal guidance.',
outcome: 'You will learn how to prepare a client, apply lash extensions with care, and advise on looking after the finished set.',
},
{
name: 'Teeth Whitening',
tag: 'Bright',
description: 'Practical teeth whitening training, taught step by step in the studio.',
outcome: 'You will learn how to prepare a client, carry out a whitening session carefully, and give clear aftercare advice.',
},
{
name: 'Fashion Braces',
tag: 'Stylish',
description: 'Practical fashion braces training, taught step by step in the studio.',
outcome: 'You will learn the practical steps of working with fashion braces and how to guide clients on looking after them.',
},
{
name: 'Piercing',
tag: 'Careful',
description: 'Hands-on piercing training with a strong focus on hygiene.',
outcome: 'You will learn how to prepare, work hygienically, and give clients clear aftercare advice.',
},
{
name: 'Tattoo',
tag: 'Creative',
description: 'Hands-on tattoo training, taught in the studio with personal guidance.',
outcome: 'You will learn how to plan a design with a client, work hygienically, and give clear aftercare advice.',
},
]

function Training() {
return (
<div className="min-h-screen bg-pwesh-paper">
<section className="px-6 pb-8 pt-16 md:px-16 md:pt-24">
<div className="mx-auto max-w-6xl">
<p className="mb-3 text-xs font-bold uppercase tracking-widest text-pwesh-purple">Beauty training</p>
<h1 className="font-display text-5xl font-semibold leading-[1.1] text-pwesh-night md:text-6xl">
Learn. Practice. <em className="italic text-pwesh-purple">Grow.</em>
</h1>
<p className="mt-4 max-w-xl text-pwesh-night/80">Hands-on training in lash extension, teeth whitening, fashion braces, piercing and tattoo, taught in the studio with real tools, real practice and personal guidance. Finish with a certificate.</p>
</div>
</section>

  <section className="px-6 pb-16 pt-8 md:px-16 md:pb-20">
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <article
          key={course.name}
          className="flex flex-col rounded-2xl border border-pwesh-lilac bg-white p-6 transition-all duration-300 focus-within:border-pwesh-purple hover:border-pwesh-purple hover:shadow-lg hover:shadow-pwesh-purple/10 motion-safe:hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-pwesh-purple">{String(index + 1).padStart(2, '0')}</span>
            <span className="rounded-full bg-pwesh-lilac px-3 py-1 text-xs font-semibold text-pwesh-purple">{course.tag}</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold text-pwesh-night">{course.name}</h2>
          <p className="mt-3 text-pwesh-night/80">{course.description}</p>
          <div className="mt-4 flex-1 border-t border-pwesh-lilac pt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-pwesh-purple">After this course</p>
            <p className="mt-2 text-sm leading-relaxed text-pwesh-night/80">{course.outcome}</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-pwesh-night">{afterTraining}</p>
          </div>
          <div className="mt-6">
            <WhatsAppButton
              message={'Hello PWESH BEAUTY HUB, I would like to enquire about the ' + course.name + ' course.'}
              label={'Enquire about ' + course.name}
            />
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className="bg-pwesh-lilac px-6 py-12 md:px-16 md:py-16">
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      <h2 className="font-display text-3xl font-semibold text-pwesh-night md:text-4xl">Ready to start? <em className="italic text-pwesh-purple">Ask us anything.</em></h2>
      <WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
    </div>
  </section>
</div>

)
}

export default Training