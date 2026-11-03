# Pwesh Beauty Hub

A responsive website built for **Pwesh Beauty Hub**, a beauty studio and training centre located in Ojodu Berger, Lagos, Nigeria.

The website gives prospective customers a place to explore the studio's services, view previous work, discover available training courses, and make enquiries directly through WhatsApp.

**Live Website:** https://pwesh-beauty-hub.netlify.app/

---

## About the Project

Pwesh Beauty Hub is a client website designed to establish the studio's online presence and make it easier for potential customers to discover its services and training programmes.

The website focuses on presenting the studio's work visually, providing useful business information, and creating straightforward enquiry paths for visitors interested in booking a service or learning more about a course.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

## Pages and Sections

- **Home:** Introduces the studio through a hero section with a video pop-up, featured services, selected work, training information, testimonials, and a studio introduction.
- **Services:** Displays available beauty services with category filters and individual booking enquiry buttons.
- **Gallery:** Showcases the studio's work with category filters and an interactive image viewer.
- **Training:** Presents the available training courses, practical learning information, and certificates.
- **About:** Introduces the studio and its owner.
- **Contact:** Provides the studio's location, Google Maps directions, opening hours, and social media links.
- **404 Page:** Provides a dedicated page for routes that do not exist.

## Key Features

### WhatsApp Enquiries
- Service-specific WhatsApp enquiry buttons with pre-filled messages.
- Sticky WhatsApp contact bar on mobile devices.
- Centralised configuration for the WhatsApp number and message templates.

### Interactive Gallery
- Category-based gallery filtering.
- Image viewer with next and previous navigation.
- Keyboard navigation using the arrow keys.
- Escape key and outside-click support for closing the viewer.

### Video and Testimonials
- YouTube Shorts video pop-up.
- Testimonial slider with automatic transitions.
- Swipe support for touch devices.
- Pauses on hover and touch interaction.
- Respects reduced-motion preferences.

### Responsive Navigation
- Mobile-friendly hamburger navigation.
- Responsive layouts across mobile phones, tablets, and desktop screens.

### Centralised Configuration
Important content and contact details can be managed through configuration files, including:
- WhatsApp number and enquiry messages.
- Social media links.
- Testimonials.
- Video information.

### SEO and Accessibility
- Page-specific titles and meta descriptions.
- Favicon configuration.
- `robots.txt` file.
- Main landmark structure.
- Improved slider tap-target sizes.
- Reduced-motion support.

## Performance Optimisation

The website was tested using Google Lighthouse on mobile.

| Category | Score |
|---|---:|
| Performance | 91 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Some optimisation work included:

- Compressing and converting images to WebP where appropriate.
- Preloading the hero image with high priority.
- Improving the main landmark structure.
- Increasing slider interaction target sizes.
- Providing a valid `robots.txt` file.

The hero image preload improvement helped increase the Performance score from 52 to 79 during optimisation.

*Lighthouse scores represent the test results recorded during development and may vary depending on testing conditions.*

## Project Structure

```text
pwesh-beauty-hub/
├── public/
│   ├── ceo.jpeg
│   ├── favicon.png
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── _redirects
│
├── src/
│   ├── assets/
│   │   ├── Images and graphics
│   │   └── Logo and other visual assets
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageMeta.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StickyWhatsAppBar.tsx
│   │   ├── StudioSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── TrainingSection.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   ├── config/
│   │   ├── messages.ts
│   │   ├── social.ts
│   │   ├── testimonials.ts
│   │   ├── video.ts
│   │   └── whatsapp.ts
│   │
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Services.tsx
│   │   └── Training.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Installation and Setup

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Damilola-Dev1/pwesh-beauty-hub.git
```

2. Navigate into the project directory:

```bash
cd pwesh-beauty-hub
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Deployment

The website is deployed on Netlify.

**Live Website:** https://pwesh-beauty-hub.netlify.app/

## Author

**Damilola Samuel A.**  
Frontend Developer based in Lagos, Nigeria.

- GitHub: https://github.com/Damilola-Dev1

---

*This project was developed for Pwesh Beauty Hub. Studio photographs were used with permission.*
