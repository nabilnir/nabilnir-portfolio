'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-display italic text-2xl font-bold text-gray-900 dark:text-white">
          Nabil.
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="text-black dark:text-white hover:text-orange-500 transition-colors">Home</Link>
          <Link href="/experience" className="hover:text-orange-500 transition-colors">Works</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
        </div>
        
        <Link href="/contact" className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-pill text-sm font-medium hover:scale-105 transition-transform duration-200">
          Contact
        </Link>
        
        <button 
          className="md:hidden text-gray-900 dark:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-black dark:text-white hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/experience" className="block hover:text-orange-500 transition-colors">Works</Link>
            <Link href="/about" className="block hover:text-orange-500 transition-colors">About</Link>
            <Link href="/services" className="block hover:text-orange-500 transition-colors">Services</Link>
            <Link href="/contact" className="block hover:text-orange-500 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
