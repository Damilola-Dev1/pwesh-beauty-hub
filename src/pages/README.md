PWESH BEAUTY HUB

A responsive website for PWESH BEAUTY HUB, a beauty studio and training centre in Ojodu Berger, Lagos, Nigeria. The site shows the studio’s services, a photo gallery of real work, in-studio training courses and contact details, and sends customer enquiries straight to WhatsApp.

Live site: https://pwesh-beauty-hub.netlify.app

About the project

This is a real project built for a real business. The studio offers lashes, brows, tattoo, piercing, teeth whitening, braces and nails, and also runs training courses. The goal was a fast, mobile-first site where a visitor can see the work and book in one tap on WhatsApp.

Pages
=> Home: hero with studio video pop-up, services, selected work, training, testimonials and a studio block
=> Services: all services with filter tabs and a Book button for each
=> Gallery: filter tabs and one tile per style, each opening a photo slider pop-up
=> Training: the five courses offered, with practicals and certificates
=> About: meet the owner, what the studio does and how it works
=> Contact: Google map, directions link, opening hours and social links
=> 404: a friendly page for unknown addresses

Features
=> WhatsApp enquiry buttons with a ready-written message for each service, plus a sticky WhatsApp bar on mobile
=> Gallery photo slider with next and previous arrows, keyboard arrows, Escape to close and click outside to close
=> Testimonial slider that changes automatically, can be swiped, pauses on hover and touch, and stays still for visitors who prefer reduced motion
=> Studio video pop-up that plays a YouTube Short
=> Mobile hamburger menu and a layout that works from phone to laptop
=> Settings kept in simple config files (WhatsApp number, messages, social links, video, testimonials) so content can change without touching the page code
=> Per-page titles and descriptions for search engines and link sharing, a favicon and a robots.txt file

Built with
=> React
=> TypeScript
=> Tailwind CSS
=> Vite
=> React Router

Hosted on Netlify, with the code on GitHub

Performance and quality
=> Lighthouse results on mobile for the live site:

=> Performance: 91
=> Accessibility: 100
=> Best Practices: 100
=> SEO: 100

Steps taken to get there:

=> Photos converted to WebP and compressed
=> The hero photo is preloaded with high priority, which raised Performance from 52 to 79 on its own
=> A main landmark and larger tap areas on the slider controls for accessibility
=> A valid robots.txt for SEO

Project structure
=> src/pages: one file for each page
=> src/components: Navbar, Footer, WhatsApp buttons and the page sections
=> src/config: WhatsApp number, messages, social links, video and testimonials
=> src/assets: photos and logos
=> public: favicon, robots.txt and the redirects file that makes page refreshes work on Netlify

Run it on your computer
git clone https://github.com/Damilola-Dev1/pwesh-beauty-hub.git
cd pwesh-beauty-hub
npm install
npm run dev

To make a production build:
npm run build
Notes

Photos are used with the studio’s permission
Author

Damilola, a frontend developer based in Lagos, Nigeria.

GitHub: https://github.com/Damilola-Dev1