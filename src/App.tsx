import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Training from './pages/Training'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyWhatsAppBar from './components/StickyWhatsAppBar'
import PageMeta from './components/PageMeta'

function App() {
return (
<>
<PageMeta />
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/training" element={<Training />} />
</Routes>
<Footer />
<StickyWhatsAppBar />
</>
)
}

export default App