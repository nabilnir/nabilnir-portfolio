'use client'

import { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

const projects = {
    'civix': {
        title: 'CiviX',
        category: 'Full-Stack • Public Utility',
        description: 'A comprehensive digital platform for citizens to report public infrastructure issues like broken streetlights or potholes. Built using the MERN stack with a focus on community empowerment.',
        image: '/civix.png',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'TanStack Query', 'Tailwind CSS'],
        liveLink: '#',
        githubLink: 'https://github.com/nabilnir/civix-client',
        challenges: 'Implementing real-time status tracking and a complex role-based dashboard for citizens, staff, and administrators was a significant challenge. Ensuring data consistency across different user levels required robust state management.',
        future: 'Plans include adding AI-based image recognition to automatically categorize reported issues and implementing a gamified reward system with points and badges to encourage more citizen participation.'
    },
    'eco-track': {
        title: 'Eco-Track',
        category: 'Sustainability • React App',
        description: 'Eco-Track is a sustainability tracking platform designed to help users monitor their carbon footprint and engage in environmental challenges. It promotes greener lifestyles through data-driven insights.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
        liveLink: '#',
        githubLink: 'https://github.com/nabilnir/eco-track',
        challenges: 'Designing an intuitive calculation engine for various lifestyle activities (like travel, energy use, and diet) while keeping the UI simple and engaging for non-technical users.',
        future: 'Integrating with smart home devices for automated energy tracking and adding a social feature for users to form teams and compete in sustainability challenges.'
    },
    'mern-tourism': {
        title: 'MERN Tourism',
        category: 'Travel • E-Commerce',
        description: 'A real-time tourism platform that allows users to explore destinations, view detailed itineraries, and book travel packages seamlessly.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8df6?q=80&w=1000&auto=format&fit=crop',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TanStack Query', 'Framer Motion'],
        liveLink: '#',
        githubLink: 'https://github.com/nabilnir/tourism-client',
        challenges: 'Managing complex state for destination filters and real-time booking availability. Ensuring smooth animations for page transitions and image galleries using Framer Motion.',
        future: 'Implementing a community forum for travelers to share experiences and expanding the platform to include hotel bookings and local guide services.'
    },
    'revx-auction': {
        title: 'RevX-Auction',
        category: 'Auction • Real-time',
        description: 'A web-based auction platform demonstrating real-time interaction and database management. Users can place bids on listed items and see updates in real-time.',
        image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000&auto=format&fit=crop',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
        liveLink: '#',
        githubLink: 'https://github.com/nabilnir',
        challenges: 'Ensuring data consistency during simultaneous bids and minimizing latency for real-time updates was the primary technical hurdle.',
        future: 'Integrating payment gateways for secure transactions and adding an automated notification system for bid updates.'
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
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
