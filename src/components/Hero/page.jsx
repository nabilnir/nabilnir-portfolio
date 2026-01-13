'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: glowY }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-hero-glow dark:bg-hero-glow-dark pointer-events-none" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-full py-2 pl-2 pr-5 shadow-sm border border-gray-100 dark:border-gray-700 mb-8"
            >
              <span className="relative flex h-8 w-8 items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
              </span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="heading-large leading-none mb-4">
                I AM<br />
                <span className="text-gradient">NABIL</span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Center Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Text */}
              <motion.h2 
                className="font-sans text-6xl md:text-7xl lg:text-8xl text-gray-300 dark:text-gray-700 absolute -top-16 lg:-top-24 w-full text-center z-0 whitespace-nowrap opacity-80"
                style={{ y: textY }}
              >
                Hey, <span className="font-light">there</span>
              </motion.h2>

              {/* Image Container */}
              <motion.div 
                className="relative z-10 mt-12 w-full max-w-md mx-auto aspect-3/4"
                style={{ scale: imageScale }}
              >
                <div className="w-full h-full rounded-b-full overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
                  <Image
                    src="/images/hero/profile.jpg"
                    alt="Your Name - MERN Stack Developer"
                    width={400}
                    height={533}
                    className="w-full h-full object-cover object-top image-mask-gradient"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 order-3 lg:text-right"
          >
            <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark max-w-xs ml-auto mb-12">
              Specialized in MongoDB, Express.js, React, and Node.js. Building scalable web applications with modern technologies.
            </p>

            <div className="flex flex-col items-end space-y-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-condensed font-bold uppercase tracking-tight leading-tight text-right">
                MERN STACK<br />
                <span className="text-outline-stroke">DEVELOPER</span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-text-muted-light dark:text-text-muted-dark mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-text-muted-light dark:border-text-muted-dark rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-text-muted-light dark:bg-text-muted-dark rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}