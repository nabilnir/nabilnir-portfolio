'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, GitBranch } from 'lucide-react'

const projects = {
    'civix': {
        title: 'CiviX',
        category: 'Full-Stack • Public Utility',
        description: 'A comprehensive digital platform for citizens to report public infrastructure issues like broken streetlights or potholes. Built using the MERN stack with a focus on community empowerment.',
        image: '/civix.png',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'TanStack Query', 'Tailwind CSS'],
        liveLink: 'https://civix-auth-system.web.app/',
        githubLink: 'https://github.com/nabilnir/civix-frontend',
        backendLink: 'https://github.com/nabilnir/civix-backend',
        challenges: 'Implementing real-time status tracking and a complex role-based dashboard for citizens, staff, and administrators was a significant challenge. Ensuring data consistency across different user levels required robust state management.',
        future: 'Plans include adding AI-based image recognition to automatically categorize reported issues and implementing a gamified reward system with points and badges to encourage more citizen participation.'
    },
    'eco-track': {
        title: 'Eco-Track',
        category: 'Sustainability • React App',
        description: 'Eco-Track is a sustainability tracking platform designed to help users monitor their carbon footprint and engage in environmental challenges. It promotes greener lifestyles through data-driven insights.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
        liveLink: 'https://eco-track-client-site.web.app/',
        githubLink: 'https://github.com/nabilnir/Eco-Track-Client',
        backendLink: 'https://github.com/nabilnir/eco-track-server',
        challenges: 'Designing an intuitive calculation engine for various lifestyle activities (like travel, energy use, and diet) while keeping the UI simple and engaging for non-technical users.',
        future: 'Integrating with smart home devices for automated energy tracking and adding a social feature for users to form teams and compete in sustainability challenges.'
    },
    'toy-tropia': {
        title: 'ToyTropia',
        category: 'E-Commerce • Kids Marketplace',
        description: "ToyTropia is a vibrant and playful online marketplace for kids' toys, designed to help families discover and support local toy sellers. The platform enables users to browse a wide variety of toys, view detailed product information, and leave feedback or ratings based on their purchase experiences.",
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop',
        tech: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Swiper Slider', 'React Router', 'Firebase Authentication'],
        liveLink: 'https://toytropia-com.web.app/',
        githubLink: 'https://github.com/programming-hero-web-course2/b12-a9-firesheild-nabilnir',
        backendLink: 'https://github.com/nabilnir/toytropia-backend',
        challenges: "Ensuring a child-friendly interface while maintaining robust security was a key challenge. Implementing the local toy seller integration required careful data structuring to ensure easy discovery for families.",
        future: 'Future plans include adding AI-based toy recommendations and a community blog for toy reviews to further engage parents and children.'
    }
}

export default function ProjectPage({ params }) {
    const { id } = use(params)
    const project = projects[id]

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/#portfolio" className="text-orange-500 hover:underline">Back to Projects</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    href="/#portfolio"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors mb-8 capitalize"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-orange-500 font-medium mb-12">{project.category}</p>

                <div className="rounded-3xl overflow-hidden mb-16 aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Challenges Faced</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.challenges}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.future}
                            </p>
                        </section>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Links</h3>
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                            >
                                Live Project
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full py-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                View Code
                                <Github className="w-4 h-4 ml-2" />
                            </a>
                            {project.backendLink && (
                                <a
                                    href={project.backendLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Backend Repo
                                    <GitBranch className="w-4 h-4 ml-2" />
                                </a>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
