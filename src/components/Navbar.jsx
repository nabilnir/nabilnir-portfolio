'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 left-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl z-[45] flex flex-col pt-24"
          >
            <div className="px-8 py-8 flex flex-col space-y-8 h-full overflow-y-auto">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Education', id: 'education' },
                { name: 'Projects', id: 'portfolio' },
                { name: 'Contact', id: 'contact' },
              ].map((link, idx) => (
                <motion.a
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-4xl font-display italic hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12 mt-auto border-t border-gray-100 dark:border-gray-800"
              >
                <p className="text-sm text-gray-500 mb-2">Get in touch</p>
                <p className="text-xl font-medium">nirarhan@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}