'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: '2022-24',
    title: 'Full-Stack Development',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Next.js'],
  },
  {
    period: '2021-24',
    title: 'Frontend Development',
    skills: ['React', 'Redux', 'Tailwind CSS', 'Material-UI', 'Framer Motion'],
  },
  {
    period: '2020-24',
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'],
  },
  {
    period: '2023-24',
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
  },
]

export default function ExperienceSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-surface-dark/30 border-y border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display">Experience & Skills</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mt-4 max-w-2xl mx-auto">
            A journey through my professional timeline and the tools I use to create digital experiences.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-surface-dark transition-colors px-4 rounded-lg"
            >
              {/* Period */}
              <div className="md:col-span-2 pl-2">
                <span className="font-display text-lg font-medium text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text-light dark:text-text-dark">
                  {exp.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="md:col-span-6">
                <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Download Full Resume
            <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}