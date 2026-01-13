'use client'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase tracking-tight mb-8">
              I am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">Madison</span>
            </h1>
            <div className="flex items-center space-x-4 mb-8">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium bg-white dark:bg-surface-dark px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-800">
                Available for new opportunities
              </span>
            </div>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-md leading-relaxed">
              Specialized in Web Design, UX/UI, Webflow, and Front End Development. I create digital products that are functional and beautiful.
            </p>
          </div>
          <div className="relative fade-in-up delay-200 h-[500px] w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 via-yellow-50 to-transparent dark:from-orange-900/20 dark:via-yellow-900/10 dark:to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800">
              <img 
                alt="Portrait of Madison" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90" 
                src="me.png"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-xl border border-white/20">
                  <h3 className="font-display text-2xl uppercase font-bold text-white mb-1">Digital Product Designer</h3>
                  <p className="text-white/80 text-sm">Crafting user-centric experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
              Turning my vision <br/>
              <span className="font-serif normal-case italic font-light text-primary">into solutions</span> for <br/> 
              the work on.
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 max-w-lg">
              My journey involves transforming abstract ideas into tangible digital realities. I focus on clarity, purpose, and aesthetics.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-display font-bold mb-2">89+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Completed Projects</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2">18+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Different Countries</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2">98%</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2">5+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-800/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                alt="Modern clean workstation with multiple monitors and creative tools" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB3vDQXYv49L3VNhe-9845zIW5THaozwsHlstu6X7ICLIaj2cNN72ZHnl6tSdmaou10kYBjeN68xpWmDyH_1N6GFx6dAtnVWsYM3fGNHAcPd8dJb1bTch9GgxnPg8modD0QjiPtHnOY5TyL8V4qGyVtZuqztBUBZFPAs6R_dqxUYT5MOKV0O0li9MyBb2MUTWiYI8ExXn8WOrIfIsy5TCmHMgmyBbjXvekHBpUOsF_LuM4h1ztgXlXaLRr9jbcvLNvhAv0MRvpb_hr"
              />
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-black/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-[180px] transform translate-x-4 md:translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="text-xs font-bold uppercase">Workstation</div>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Optimized for high-performance design workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="py-24 bg-gray-50 dark:bg-surface-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide">Experience & Skills</h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-b border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-colors px-4 rounded-lg">
              <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark self-center">2016-24</div>
              <div className="md:col-span-1 text-xl font-bold self-center">Visual Design</div>
              <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted-light dark:text-text-muted-dark self-center">
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Figma</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">After Effects</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Photoshop</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Final Cut</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Midjourney</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-b border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-colors px-4 rounded-lg">
              <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark self-center">2018-24</div>
              <div className="md:col-span-1 text-xl font-bold self-center">Development</div>
              <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted-light dark:text-text-muted-dark self-center">
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Webflow</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">HTML & CSS</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">JavaScript</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Xano</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">React</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-b border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-colors px-4 rounded-lg">
              <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark self-center">2022-24</div>
              <div className="md:col-span-1 text-xl font-bold self-center">Project Management</div>
              <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted-light dark:text-text-muted-dark self-center">
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Notion</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Google Tables</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">Microsoft To Do</span>
                <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">TickTick</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

