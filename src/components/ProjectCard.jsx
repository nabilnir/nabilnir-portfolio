'use client'

import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30 * (index + 1)])

  return (
    <motion.div
      className="group bg-white dark:bg-surface-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
      style={{
        y,
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-orange-500/20 dark:from-primary/10 dark:to-orange-500/10 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/20 dark:text-primary/10">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
          {project.category}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
