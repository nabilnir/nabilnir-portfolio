'use client'

export default function AboutPage() {
    return (
        <main className="pt-32 pb-20">
            <section id="about" className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
                            Turning code <br />
                            <span className="font-serif normal-case italic font-light text-primary">into community</span> solutions.
                        </h2>
                        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-6 max-w-lg">
                            My programming journey began with a deep curiosity for how digital systems work, leading me to pursue a B.Sc. in Computer Science and Engineering. I've evolved from solving algorithmic puzzles to architecting robust, scalable web applications using the MERN stack. I thrive on the challenge of building production-ready systems that solve real-world problems, with a particular interest in integrating AI/ML capabilities into modern web interfaces.
                        </p>
                        <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 max-w-lg">
                            Beyond the code, I believe in maintaining a balanced perspective. When I'm not building software, you can find me exploring the latest tech trends, reading sci-fi novels, or enjoying a game of cricket. I'm a lifelong learner who brings creativity and detailed attention to every project I undertake.
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
        </main>
    )
}
