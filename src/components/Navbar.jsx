'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center cursor-pointer"
        >
          <img src="/mylogo.png" alt="Nabil" className="h-8 md:h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-black dark:text-white hover:text-orange-500 transition-colors cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-500 transition-colors cursor-pointer">About</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-orange-500 transition-colors cursor-pointer">Skills</a>
          <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-orange-500 transition-colors cursor-pointer">Education</a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-orange-500 transition-colors cursor-pointer">Projects</a>
        </div>

        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-pill text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          Contact
        </a>

        <button
          className="md:hidden text-gray-900 dark:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block text-black dark:text-white hover:text-orange-500 transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block hover:text-orange-500 transition-colors cursor-pointer">About</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="block hover:text-orange-500 transition-colors cursor-pointer">Skills</a>
            <a href="#education" onClick={(e) => scrollToSection(e, 'education')} className="block hover:text-orange-500 transition-colors cursor-pointer">Education</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="block hover:text-orange-500 transition-colors cursor-pointer">Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block hover:text-orange-500 transition-colors cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}