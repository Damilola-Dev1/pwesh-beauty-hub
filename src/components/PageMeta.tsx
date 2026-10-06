import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'PWESH BEAUTY HUB'

interface PageData {
title: string
description: string
}

const pages: Record<string, PageData> = {
'/': {
title: SITE_NAME + ' | Beauty Studio and Training in Lagos',
description:
'Beauty studio in Ojodu Berger, Lagos: lashes, brows, nails, tattoo, piercing, teeth whitening, braces and hands-on beauty training. Book on WhatsApp.',
},
'/services': {
title: 'Services | ' + SITE_NAME,
description:
'Lashes, brows, tattoo, piercing, teeth whitening, braces and nails at PWESH BEAUTY HUB in Ojodu Berger, Lagos. Book on WhatsApp.',
},
'/gallery': {
title: 'Gallery | ' + SITE_NAME,
description:
'Browse the styles and results from PWESH BEAUTY HUB in Ojodu Berger, Lagos: lashes, brows, nails, tattoo and more.',
},
'/training': {
title: 'Beauty Training | ' + SITE_NAME,
description:
'Hands-on beauty training in Lagos: lash extension, teeth whitening, fashion braces, piercing and tattoo, with a certificate. PWESH BEAUTY HUB, Ojodu Berger.',
},
'/about': {
title: 'About | ' + SITE_NAME,
description:
'Meet Adekunle Precious, CEO of PWESH BEAUTY HUB, a beauty studio and training centre in Ojodu Berger, Lagos.',
},
'/contact': {
title: 'Contact | ' + SITE_NAME,
description:
'Find PWESH BEAUTY HUB at Olutola Gate, opposite Miliki FM, Ojodu Berger, Lagos. Open Monday - Friday, 9:00 AM - 7:00 PM. Chat on WhatsApp.',
},
}

// Used when the address matches none of the pages above
const notFoundPage: PageData = {
title: 'Page not found | ' + SITE_NAME,
description:
'The page you are looking for could not be found. Go back to the PWESH BEAUTY HUB home page or browse our services.',
}

// Helper to update or create meta tags dynamically
function setMetaTag(selector: string, attrName: string, attrVal: string, content: string) {
let tag = document.querySelector(selector)
if (!tag) {
tag = document.createElement('meta')
tag.setAttribute(attrName, attrVal)
document.head.appendChild(tag)
}
tag.setAttribute('content', content)
}

export default function PageMeta() {
const { pathname } = useLocation()

useEffect(() => {
// Remove a trailing slash, except for the home page '/'
let cleanPath = pathname
if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
cleanPath = cleanPath.slice(0, -1)
}

const knownPage = pages[cleanPath]
const page = knownPage || notFoundPage

// 1. Title
document.title = page.title

// 2. Standard Description
setMetaTag('meta[name="description"]', 'name', 'description', page.description)

// 3. Open Graph (for WhatsApp, Facebook, LinkedIn previews)
setMetaTag('meta[property="og:title"]', 'property', 'og:title', page.title)
setMetaTag('meta[property="og:description"]', 'property', 'og:description', page.description)

// 4. Twitter Card
setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', page.title)
setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', page.description)

// 5. Search engines: list real pages, keep the 404 page out of search results
setMetaTag('meta[name="robots"]', 'name', 'robots', knownPage ? 'index, follow' : 'noindex, nofollow')

}, [pathname])

return null
}