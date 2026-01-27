'use client'

export default function ExperiencePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
          Experience & Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-serif italic">
          A journey through my professional timeline and the tools I use to create digital experiences.
        </p>
      </div>
      <div className="max-w-6xl w-full border-t border-gray-200 dark:border-gray-800">
        <div className="group skill-row grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 dark:border-gray-800 items-start md:items-center">
          <div className="md:col-span-2 pl-2">
            <span className="font-display text-lg font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              2016-24
            </span>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white">
              Visual Design
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:hidden">Core visual competencies</p>
          </div>
          <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-2">
            <ul className="skill-list list-none pl-4 grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-2 w-full text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>Figma</li>
              <li>After Effects</li>
              <li>Photoshop</li>
              <li>Final Cut Pro</li>
              <li>Midjourney</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
        <div className="group skill-row grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 dark:border-gray-800 items-start md:items-center">
          <div className="md:col-span-2 pl-2">
            <span className="font-display text-lg font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              2018-24
            </span>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white">
              Development
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:hidden">Frontend & No-code</p>
          </div>
          <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-2">
            <ul className="skill-list list-none pl-4 grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-2 w-full text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>Webflow</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>Xano</li>
              <li>Tailwind CSS</li>
              <li>React (Basic)</li>
            </ul>
          </div>
        </div>
        <div className="group skill-row grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 dark:border-gray-800 items-start md:items-center">
          <div className="md:col-span-2 pl-2">
            <span className="font-display text-lg font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              2022-24
            </span>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white">
              Project Management
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:hidden">Organization & Workflow</p>
          </div>
          <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-2">
            <ul className="skill-list list-none pl-4 grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-2 w-full text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>Notion</li>
              <li>Google Tables</li>
              <li>Microsoft To Do</li>
              <li>TickTick</li>
              <li>Slack</li>
              <li>Linear</li>
            </ul>
          </div>
        </div>
        <div className="group skill-row grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 dark:border-gray-800 items-start md:items-center">
          <div className="md:col-span-2 pl-2">
            <span className="font-display text-lg font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              2020-23
            </span>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white">
              Art Direction
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:hidden">Creative Strategy</p>
          </div>
          <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-2">
            <ul className="skill-list list-none pl-4 grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-2 w-full text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>Brand Identity</li>
              <li>Storyboarding</li>
              <li>Photography</li>
              <li>Set Design</li>
              <li>Typography</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <a href="/resume.pdf" download="Nabil-Resume.pdf" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
          Download Resume
          <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </a>
      </div>
    </main>
  )
}