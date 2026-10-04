import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GENERAL_MESSAGE } from '../config/messages'
import WhatsAppButton from './WhatsAppButton'
import logo from '../assets/logo.png'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `w-fit border-b-2 pb-1 transition-colors hover:text-pwesh-purple ${
    isActive ? 'border-pwesh-purple text-pwesh-purple' : 'border-transparent'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 border-b border-pwesh-lilac bg-pwesh-paper text-pwesh-ink">
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
        <img src={logo} alt="PWESH BEAUTY HUB Logo" className="h-10 w-auto" />
        <span className="font-display text-2xl font-semibold text-pwesh-purple">
          PWESH BEAUTY HUB
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Services
        </NavLink>
        <NavLink to="/gallery" className={linkClass}>
          Gallery
        </NavLink>
        <NavLink to="/training" className={linkClass}>
          Training
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Desktop Call to Action */}
      <div className="hidden lg:block">
        <WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
      </div>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        className="md:hidden text-2xl p-1 text-pwesh-purple"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full flex flex-col gap-4 pt-4 pb-2 border-t border-pwesh-lilac/30 mt-3">
          <NavLink to="/" end onClick={closeMenu} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/gallery" onClick={closeMenu} className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/training" onClick={closeMenu} className={linkClass}>
            Training
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={linkClass}>
            Contact
          </NavLink>

          {/* WhatsApp Button on Mobile */}
          <div className="pt-2 lg:hidden">
            <WhatsAppButton message={GENERAL_MESSAGE} label="Chat on WhatsApp" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar