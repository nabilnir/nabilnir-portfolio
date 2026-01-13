'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const XIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/nabilnir' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/nabil-mahmud-6b35033a2/' },
    { name: 'X', icon: XIcon, url: 'https://x.com/NabilNir' },
    { name: 'Email', icon: Mail, url: 'mailto:nirarhan@gmail.com' },
  ]

  const footerLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
  ]

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center">
              <img src="/mylogo.png" alt="Nabil" className="h-8 md:h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark max-w-xs">
              Full-stack MERN developer crafting exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-text-dark mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-text-dark mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text-muted-light dark:text-text-muted-dark hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 md:mb-0">
            © {currentYear} Nabil Mahmud. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}