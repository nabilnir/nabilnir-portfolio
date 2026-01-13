'use client'

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Smart Home App',
      category: 'UI/UX Design • Mobile App',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDkH9RveeP6MjZmi9ajSDaLkUMgsOgJlZ_2R8AH2Qr-Cx2XcwfKkjwiTwcFozN9AIAt-OBQNUftx9KGjik0PnXr99V7qeex59bZ9Rd4lG4pvZCtI0fEbbMCZjY9eKAqXb9N1aDgxT-hee4Qe2BVaMiLwooZTTKkjAUL9rFwGQ1lAATaHwBu972r8tzLOA528huuinzOePpL2aan5jD48DnsotHoxrCJuONOk6OCb67_ciTcHmM3wQnIM3YL9obSAWiCIVOnZsDcIk',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTbCNzBjSNzB-FEFvYClgh66gOf9_26z90gRquVtD2FYu3gZ190x9awZDGmEzF31iom7sOHNByCDlZslz3Tl5iJWkXEcBIm1Dz3la8MEcTlmzPJBPCA7u-NnsSgiRVp0YmxTRMxS-w4enYhJka7PZcK39FSkNLybz3PI081wXw7nNrv8TpKa1Qh8bRZ5VTKGOJriu8geVZRdp1usn9kLcm1-yAXHyZuW94Dcblq6yv8014RTyoUqYOzfGDeN4U7S7qTVxJ1e7PLkp6',
      offset: false,
    },
    {
      title: 'Morsel Recipe Platform',
      category: 'Product Design • Branding',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVtK0IDIrxLbjnyPdP-7gU84nCKH3cS6MIaO9DUAOn4BRtuf3oWfFxTwJOhXdIh34pONO4uY7LdhzkuzMfGFKOqZ8V73wsscNLBVzncRttR46lCQ-yvBdSY8TzN7JsF_x_A3tdrkATVuQak6p19mtjpPAaQIq1YTPVDEw9Za6o_5a63xIaHDBkuFXNogxZNtXscvnqLAHG9H6tp1qEkwgfEln3s9yQf_5xWJbMQP1y-3_YJCdd13VDFpQg5v2tteGrke7xtlJJsbH1',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCLn1lYHY6hMRnhRujdTfeBuZr9vQKX1p4FBb7XREQg5MfL8WzGjauQa5nWUix3Xnj-y9MHqkSwaX4bu4i1RHRHnoqKUZzJAvZn2EWH1MDKZkle7NvvyFRLk5AuNzCP8KUlT2sRQ3hlhbV3L8PXgvuT7N2REAlN5xf2Bao9N9dXbi7TKKjznyi8fFRMcRbQRwVKsCw_lFs4PsW9k8zBv1UUCLHLeU_E1_mb1AEahrLNEDoLlz60a3qa3DdWJOPNvYUzzCqPUhS2Jxk',
      offset: true,
    },
    {
      title: 'TechFlow Rebrand',
      category: 'Identity • Web Design',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyIREz0gB6xm0p5qNszwiGjO5aEA5FwC5_5IYTTMYA5nnAVUDupmS3FWV4iPp3UZ6i5kzGM0Jb0_K--PdDmIgVa8fk4PtnMK8OBd5Moim2JTDYcD6BaSqXOG-3p9rjfsqR1mVeZSgwUABuh19nOMHglHJ8cdbWxCBaOK3DA49MTae1BLhqWQj5vPfbtmqiPZ_egg669E-PknuhtXtTYB46Md1jdBVKSUTusjq5vTRyE7Dg_Xdsg5qY_JLaB7OgM1rLHKoa-_4LB3v0',
      offset: false,
      featured: true,
    },
    {
      title: 'Neo Bank Dashboard',
      category: 'Fintech • Dashboard UI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvM1TxYXB-pZzIJiGMEL12XHq_r66jN30YfFxjQOzZphPLj5TaaObi9HTcNx5_ALVTJXlx77t2fdlSzJHyCy5-IYcFJFyOYUBRbZPuD1TLBwny2hlERO8cCvQk79cdIexK42dFQxiI-760ow63OcFd8mKjq85EEAmxJvXU_cGbMCIdYc5Qqc1n2Ry-GT1D1PhT3TTBT1zixwnhYBIRd1QyExJR-5Qs51vHbaISCrQiHMD_6C5VoulwwQAa26-4lnM5N8s5AlUyB2Qt',
      offset: true,
      new: true,
    },
  ]

  return (
    <>
      <header className="relative w-full min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-hero-glow dark:bg-hero-glow-dark pointer-events-none"></div>
        <h1 className="font-display italic text-6xl md:text-8xl lg:text-9xl text-center mb-0 z-0 absolute top-[15%] md:top-[18%] left-1/2 transform -translate-x-1/2 w-full whitespace-nowrap opacity-90 dark:opacity-80">
          Hey, <span className="font-light">there</span>
        </h1>
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end h-full mt-20 md:mt-32">
          <div className="md:col-span-3 flex flex-col justify-end pb-12 order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm w-fit mb-8 md:mb-16">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="text-xs font-medium">Available for new opportunities</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter">
                I AM<br/>MADISON
              </h2>
            </div>
          </div>
          <div className="md:col-span-6 flex justify-center items-end relative h-[50vh] md:h-[70vh] order-1 md:order-2">
            <img 
              alt="Portrait of Madison, digital product designer" 
              className="h-full w-auto object-cover object-center image-mask drop-shadow-2xl relative z-10" 
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj86m7O1TyXF2UjpjB23oZas_4yXsixyg9S6pWqJ1pVx-xQhQYl2UuUg1RpankOKkEn6Ge6qOUZJcHuvrewB8wd3X2EDS--YgqR6Sudl9xMtM5wtcmM8v-8uomaryH-oGcFEY0HghsSR9Cf7gqmPzrvcGWCr8i_fBPdvLWdd_ScLVElV-MBIKtURipt0nxSbctTwWJnanOnk4iwmjLO6hmS31tj8uexcumDFTw3YkgKCKg9rJRSile1b5jo3hPYzr4fcev83AhF-Qh"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-end pb-12 md:pb-12 text-right md:text-left order-3">
            <p className="text-sm md:text-base text-muted-light dark:text-muted-dark mb-12 md:mb-24 leading-relaxed max-w-[200px] ml-auto md:ml-0">
              Specialized in Web Design, UX / UI, Webflow, and Front End Development.
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tight text-right md:text-left">
              DIGITAL<br/>PRODUCT<br/>DESIGNER
            </h2>
          </div>
        </div>
      </header>
      <section className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-center mb-16 tracking-tight">Recent Projects</h2>
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
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  )}
                  {project.featured && (
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-surface-dark/90 backdrop-blur p-6 rounded-xl shadow-lg transform transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-semibold mb-2 text-primary dark:text-white">Featured Project</p>
                      <p className="text-xs text-muted-light dark:text-muted-dark">A comprehensive rebrand for a leading tech startup.</p>
                    </div>
                  )}
                  {project.new && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">NEW</div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-light dark:text-muted-dark text-sm">{project.category}</p>
                  </div>
                  <svg className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button className="group relative px-8 py-3 overflow-hidden rounded-full bg-transparent border border-muted-light dark:border-muted-dark text-text-light dark:text-text-dark transition-all hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-white dark:hover:text-primary dark:hover:border-white">
            <span className="relative z-10 font-medium">View All Projects</span>
          </button>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-surface-dark/30 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-8">Experience & Skills</h3>
            <p className="text-muted-light dark:text-muted-dark max-w-md leading-relaxed">
              I help companies build their digital presence through strategic design and development. Here is a breakdown of my capabilities.
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-8 flex justify-between items-start group hover:bg-gray-100 dark:hover:bg-white/5 transition-colors px-4 rounded-lg">
              <div>
                <span className="text-xs font-mono text-muted-light dark:text-muted-dark mb-2 block">2020 - Present</span>
                <h4 className="text-xl font-bold">Visual Design</h4>
              </div>
              <div className="text-right text-sm text-muted-light dark:text-muted-dark">
                <ul className="space-y-1">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>After Effects</li>
                </ul>
              </div>
            </div>
            <div className="py-8 flex justify-between items-start group hover:bg-gray-100 dark:hover:bg-white/5 transition-colors px-4 rounded-lg">
              <div>
                <span className="text-xs font-mono text-muted-light dark:text-muted-dark mb-2 block">2018 - 2024</span>
                <h4 className="text-xl font-bold">Development</h4>
              </div>
              <div className="text-right text-sm text-muted-light dark:text-muted-dark">
                <ul className="space-y-1">
                  <li>Webflow</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
            <div className="py-8 flex justify-between items-start group hover:bg-gray-100 dark:hover:bg-white/5 transition-colors px-4 rounded-lg">
              <div>
                <span className="text-xs font-mono text-muted-light dark:text-muted-dark mb-2 block">2022 - 2024</span>
                <h4 className="text-xl font-bold">Project Management</h4>
              </div>
              <div className="text-right text-sm text-muted-light dark:text-muted-dark">
                <ul className="space-y-1">
                  <li>Notion</li>
                  <li>Linear</li>
                  <li>Agile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

