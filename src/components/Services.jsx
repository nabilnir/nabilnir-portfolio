'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Database, Globe, Palette, Smartphone, Zap } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and MongoDB.',
  },
  {
    icon: Globe,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development using the MERN stack to deliver complete web applications.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting beautiful, user-centered designs with attention to detail and accessibility.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring seamless experiences across all devices and screen sizes.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, SEO, and overall user experience.',
  },
]

export default function Services() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.section 
      className="section-padding bg-gray-50 dark:bg-surface-dark"
      style={{ y }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-display mb-4">Services</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-surface-medium p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
