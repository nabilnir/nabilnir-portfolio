'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ children, className, yRange = [0, -100] }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <motion.section
      className={className}
      style={{ y }}
    >
      {children}
    </motion.section>
  )
}
