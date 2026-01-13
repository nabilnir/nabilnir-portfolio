'use client'

import { useState } from 'react'
import HeroTypewriter from '@/components/HeroTypewriter'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.target
    const formDataObj = new FormData(form)
    formDataObj.append("access_key", "dd6c6ae3-c297-4c80-857d-168ae80876f2")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      number: '01',
      title: 'Website Design',
      description: 'The full cycle of services to create and launch a website from scratch or redesign a live website along.',
    },
    {
      number: '02',
      title: 'Mobile App',
      description: 'We create elegant user experiences for applications that achieve business goals and make users happy.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Bringing designs to life with clean code and modern technologies like Webflow, React, and Tailwind.',
    },
    {
      number: '04',
      title: 'The Full Package',
      description: 'Get the best of both worlds: a website, captured youthful energy and get fully functional design.',
    },
  ]

  const projects = [
    {
      id: 'civix',
      title: 'CiviX',
      category: 'Full-Stack • Public Utility',
      description: 'A digital platform for citizens to report public infrastructure issues with a gamified reward system.',
      image: '/civix.png',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase', 'Tailwind'],
      liveLink: 'https://civix-auth-system.web.app/',
      githubLink: 'https://github.com/nabilnir/civix-frontend',
      challenges: 'Implementing real-time status tracking and a complex role-based dashboard for citizens and admins.',
      future: 'Adding AI-based image recognition to automatically categorize reported issues.',
      featured: true,
    },
    {
      id: 'eco-track',
      title: 'Eco-Track',
      category: 'Sustainability • React App',
      description: 'A platform to help users monitor their carbon footprint and engage in environmental challenges.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      liveLink: 'https://eco-track-client-site.web.app/',
      githubLink: 'https://github.com/nabilnir/Eco-Track-Client',
      challenges: 'Designing an intuitive calculation engine for various lifestyle activities.',
      future: 'Integration with smart home devices for automated tracking.',
      new: true,
    },
    {
      id: 'toy-tropia',
      title: 'ToyTropia',
      category: 'E-Commerce • Kids Marketplace',
      description: "A vibrant and playful online marketplace for kids' toys, designed to help families discover and support local toy sellers.",
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop',
      tech: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Firebase', 'React Router'],
      liveLink: 'https://toytropia-com.web.app/',
      githubLink: 'https://github.com/programming-hero-web-course2/b12-a9-firesheild-nabilnir',
      challenges: "Implementing secure authentication and local seller integration while maintaining a playful, kid-friendly design.",
      future: "Adding AI-powered toy recommendations and a community blog for toy reviews.",
      featured: true,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-20 md:pt-28 pb-12 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-glow dark:bg-hero-glow-dark pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
            <div className="lg:col-span-4 flex flex-col items-start order-2 lg:order-1 relative h-full py-6 lg:py-10">
              <div className="inline-flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-full py-2 pl-2 pr-5 shadow-sm border border-gray-100 dark:border-gray-700 mb-8 animate-fade-in-up self-start">
                <span className="relative flex h-8 w-8 items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Available for new opportunities</span>
              </div>
              <div className="flex flex-col space-y-0 leading-none mt-auto">
                <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-condensed font-bold uppercase tracking-tighter text-gray-900 dark:text-white leading-none">
                  Nabil
                </h1>
                <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-condensed font-bold uppercase tracking-tighter text-gray-900 dark:text-white leading-none">
                  Mahmud
                </h1>
              </div>
            </div>
            <div className="lg:col-span-4 relative flex flex-col items-center order-1 lg:order-2 self-center">
              <h2 className="font-display italic text-5xl md:text-5xl lg:text-[12rem] text-gray-800 
              dark:text-gray-100 absolute mr-[35rem] top-3 w-full  z-0 
              whitespace-nowrap opacity-20 dark:opacity-10 pointer-events-none">
                Hello, <span className="font-light">there</span>
              </h2>
              <div className="relative z-10 mt-12 w-full max-w-md mx-auto aspect-[3/4] lg:aspect-auto">
                <img
                  alt="Portrait of Nabil Mahmud"
                  className="w-full h-full object-cover object-top lg:rounded-b-full drop-shadow-2xl"
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                  src="/me.png"
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col lg:items-end text-right lg:text-right order-3 relative h-full py-6 lg:py-10">
              <div className="flex flex-col items-end mb-12 lg:mt-40">
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs ml-auto mb-8">
                  MERN-Stack Web Developer & Machine Learning Enthusiast. Building scalable, production-ready applications.
                </p>
                <div className="flex flex-col items-end gap-6">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download Resume
                  </a>
                  <div className="flex gap-4">
                    <a href="https://github.com/nabilnir" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-orange-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href="https://linkedin.com/in/nabil-mahmud-6b35033a2/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-orange-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a href="https://x.com/NabilNir" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-orange-500 transition-colors" aria-label="X (formerly Twitter)">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com/nabilarhannir" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-orange-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end mt-auto mb-6">
                <HeroTypewriter />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background-light dark:bg-background-dark relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-condensed font-bold uppercase text-center mb-16 tracking-tight">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={project.title} className={`group cursor-pointer ${project.offset ? 'mt-0 md:mt-24' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-surface-dark aspect-[4/3] mb-6">
                  <img
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                  />
                  {project.detailImage && (
                    <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[60%] shadow-2xl rounded-[2rem] overflow-hidden border-8 border-gray-900 dark:border-gray-800 transition-transform duration-500 group-hover:translate-y-[-20px]">
                      <img alt="App screen detail" className="w-full h-auto block" src={project.detailImage} />
                    </div>
                  )}
                  {project.featured && (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-surface-dark/90 backdrop-blur p-6 rounded-xl shadow-lg transform transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-semibold mb-2 text-primary dark:text-white">Featured Project</p>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark">A comprehensive rebrand for a leading tech startup.</p>
                      </div>
                    </>
                  )}
                  {project.new && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">NEW</div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-1">{project.title}</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{project.category}</p>
                  </div>
                  <a href={`/portfolio/${project.id}`} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-orange-500 hover:text-white transition-all">
                    Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">I can help you with</h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {services.map((service, index) => (
              <div key={service.number} className={`group py-8 md:py-0 md:px-6 relative ${index === 0 ? 'first:pl-0' : ''} ${index === services.length - 1 ? 'lg:last:pr-0' : ''}`}>
                <span className="font-serif italic text-6xl text-gray-200 dark:text-gray-800 absolute -top-4 left-4 -z-10 group-hover:text-primary/20 transition-colors">{service.number}</span>
                <div className="relative z-10 pt-4">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-black dark:border-white pb-0.5 hover:text-primary hover:border-primary transition-colors cursor-pointer" href="#contact">
                    See More
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
              Turning code <br />
              <span className="font-serif normal-case italic font-light text-primary">into community</span> solutions.
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 max-w-lg">
              My journey started with a curiosity for how things work, leading me to a B.Sc. in Computer Science and Engineering. I love building scalable web applications and exploring the intersection of AI/ML with the web. When I'm not coding, you can find me researching new technologies or contributing to open source.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-display font-bold mb-2">5+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Completed Projects</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2">18+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Different Countries</div>
              </div>
              <div>
                <div className="text-5xl font-display font-bold mb-2 text-nowrap">6 month</div>
                <div className="text-sm font-medium uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">Experience</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-800/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="Professional developer workstation with a curved monitor showing code"
                className="w-full h-full object-cover"
                src="/workstation.png"
              />
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-black/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-[180px] transform translate-x-4 md:translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="text-xs font-bold uppercase tracking-wider">Workspace</div>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed">Modern setup optimized for high-performance development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="py-24 bg-gray-50 dark:bg-surface-dark/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide">Experience & Skills</h2>
          </div>
          <div className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-0 border-y border-gray-200 dark:border-gray-700">
              {/* Frontend Row */}
              <div className="contents group">
                <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Frontend</div>
                <div className="md:col-span-1 text-xl font-bold py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">UI & Interaction</div>
                <div className="md:col-span-2 flex flex-wrap gap-6 items-center py-8 px-4 border-b border-gray-200 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="React" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">React</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all dark:invert" alt="Next.js" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Next.js</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Tailwind" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Tailwind</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="JavaScript" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">JavaScript</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <svg className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0l6.74 24L24 12.64 17.26 0z" /></svg>
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity px-1 text-center leading-tight">Framer Motion</span>
                  </div>
                </div>
              </div>

              {/* Backend Row */}
              <div className="contents group">
                <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Backend</div>
                <div className="md:col-span-1 text-xl font-bold py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Service & Data</div>
                <div className="md:col-span-2 flex flex-wrap gap-6 items-center py-8 px-4 border-b border-gray-200 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Node.js" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Node.js</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all dark:invert" alt="Express.js" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Express.js</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="MongoDB" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">MongoDB</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Firebase" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Firebase</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="/tanstack.webp" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Query" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity text-center leading-tight">TanStack Query</span>
                  </div>
                </div>
              </div>

              {/* AI Integration Row */}
              <div className="contents group">
                <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">AI Integration</div>
                <div className="md:col-span-1 text-xl font-bold py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Intelligent Dev</div>
                <div className="md:col-span-2 flex flex-wrap gap-6 items-center py-8 px-4 border-b border-gray-200 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="/copilot.webp" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Copilot" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">GitHub Copilot</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="/cursor.webp" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Cursor" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Cursor</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="/antigravity.webp" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Antigravity" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Antigravity</span>
                  </div>
                </div>
              </div>

              {/* Design Row */}
              <div className="contents group">
                <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Design</div>
                <div className="md:col-span-1 text-xl font-bold py-8 px-4 flex items-center border-b md:border-b-0 border-gray-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Creative Tools</div>
                <div className="md:col-span-2 flex flex-wrap gap-6 items-center py-8 px-4 border-b border-gray-200 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-7 h-7 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Figma" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Figma</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Canva" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Canva</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Photoshop" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Photoshop</span>
                  </div>
                </div>
              </div>

              {/* Tools Row */}
              <div className="contents group">
                <div className="md:col-span-1 text-sm font-bold text-text-muted-light dark:text-text-muted-dark py-8 px-4 flex items-center group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Tools & Others</div>
                <div className="md:col-span-1 text-xl font-bold py-8 px-4 flex items-center group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">Environment</div>
                <div className="md:col-span-2 flex flex-wrap gap-6 items-center py-8 px-4 border-gray-200 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-surface-dark transition-colors">
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Git" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Git</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Python" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Python</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="VS Code" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">VS Code</span>
                  </div>
                  <div className="group/skill relative flex flex-col items-center gap-2">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-8 h-8 filter grayscale group-hover/skill:grayscale-0 transition-all" alt="Postman" />
                    <span className="text-[10px] uppercase font-bold opacity-0 group-hover/skill:opacity-100 transition-opacity">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24 border-t border-gray-100 dark:border-gray-800">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark/50 border border-gray-100 dark:border-gray-800 hover:border-orange-500/30 transition-all">
            <span className="text-sm font-bold text-orange-500">2025 - 2029 (Expected)</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">B.Sc. in Computer Science & Engineering</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-4">Faridpur Engineering College</p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Currently pursuing my bachelor's degree with a focus on core computer science fundamentals, data structures, algorithms, and machine learning research.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark/50 border border-gray-100 dark:border-gray-800 hover:border-orange-500/30 transition-all">
            <span className="text-sm font-bold text-orange-500">Completed</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">Higher Secondary Certificate (HSC)</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-4">BCIC College</p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Completed my secondary education with a strong background in science and mathematics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-20 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] blur-circle pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-circle pointer-events-none rounded-full -translate-x-1/3 translate-y-1/4 opacity-70"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Available for new opportunities
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-8">
              Let&apos;s work <br /> <span className="italic font-light text-gray-400 dark:text-gray-600">together.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
            <div className="lg:col-span-5 space-y-12">
              <div className="group">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Contact Details</h3>
                <div className="space-y-6">
                  <a className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300" href="mailto:nabil.mahmud.cse@gmail.com">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover/item:border-accent/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Mail me at</p>
                      <p className="text-xl font-display italic group-hover/item:text-accent transition-colors">nirarhan@gmail.com</p>
                    </div>
                  </a>
                  <a className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300" href="https://wa.me/8801976866745" target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover/item:border-accent/30 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Message on WhatsApp</p>
                      <p className="text-xl font-display italic group-hover/item:text-accent transition-colors">+880 1976 866745</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Socials</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://linkedin.com/in/nabil-mahmud-6b35033a2/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="https://github.com/nabilnir" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 shadow-sm" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href="https://x.com/NabilNir" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 shadow-sm" aria-label="X (formerly Twitter)">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com/nabilarhannir" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 shadow-sm" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Location</h3>
                <p className="text-lg font-display italic">Faridpur, Bangladesh</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Available for remote work worldwide</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        className="peer block w-full border-0 border-b border-gray-200 dark:border-gray-700 bg-transparent py-3 px-0 text-primary dark:text-white placeholder-transparent focus:border-black dark:focus:border-white focus:ring-0 sm:text-lg transition-colors"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="absolute left-0 -top-3.5 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900 dark:peer-focus:text-gray-200" htmlFor="name">Your Name</label>
                    </div>
                    <div className="relative group">
                      <input
                        className="peer block w-full border-0 border-b border-gray-200 dark:border-gray-700 bg-transparent py-3 px-0 text-primary dark:text-white placeholder-transparent focus:border-black dark:focus:border-white focus:ring-0 sm:text-lg transition-colors"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="absolute left-0 -top-3.5 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900 dark:peer-focus:text-gray-200" htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-4" htmlFor="service">What service do you need?</label>
                    <div className="flex flex-wrap gap-3">
                      {['Web Design', 'Development', 'Product Design', 'Other'].map((service) => (
                        <label key={service} className="cursor-pointer">
                          <input
                            className="peer sr-only"
                            name="service"
                            type="radio"
                            value={service}
                            checked={formData.service === service}
                            onChange={handleChange}
                          />
                          <span className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 peer-checked:bg-black peer-checked:text-white dark:peer-checked:bg-white dark:peer-checked:text-black dark:peer-checked:border-white transition-all">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea
                      className="peer block w-full border-0 border-b border-gray-200 dark:border-gray-700 bg-transparent py-3 px-0 text-primary dark:text-white placeholder-transparent focus:border-black dark:focus:border-white focus:ring-0 sm:text-lg resize-none transition-colors"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label className="absolute left-0 -top-3.5 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900 dark:peer-focus:text-gray-200" htmlFor="message">Tell me about your project</label>
                  </div>
                  <div className="pt-8 flex flex-col items-center gap-6">
                    {submitStatus === 'success' && (
                      <p className="text-green-500 font-medium bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg animate-fade-in-up">
                        ✓ Message sent successfully!
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-500 font-medium bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg animate-fade-in-up">
                        ✗ Failed to send. Please try again.
                      </p>
                    )}

                    <button
                      className="group relative inline-flex h-14 w-full md:w-auto items-center justify-center overflow-hidden rounded-full bg-orange-500 text-white px-12 font-bold transition-all duration-300 hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/20"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span className="mr-2 text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Your data is encrypted and safe</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
