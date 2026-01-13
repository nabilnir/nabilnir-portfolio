'use client'

import { useState, useEffect } from 'react'

export default function HeroTypewriter() {
    const words = ["MERN-STACK|WEB DEV.", "Frontend|Specialist"]
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length
            const fullText = words[i]

            setText(current => {
                if (isDeleting) {
                    return fullText.substring(0, current.length - 1)
                } else {
                    return fullText.substring(0, current.length + 1)
                }
            })

            setTypingSpeed(isDeleting ? 50 : 150)

            if (!isDeleting && text === fullText) {
                setTypingSpeed(2000) // Pause at end
                setIsDeleting(true)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(prev => prev + 1)
                setTypingSpeed(500) // Pause before typing new word
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, words, typingSpeed])

    const parts = text.split('|')

    return (
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-condensed font-bold uppercase tracking-tighter text-gray-900 dark:text-white leading-[0.85] text-right min-h-[1.7em]">
            {parts[0]}
            {parts.length > 1 && (
                <>
                    <br />
                    <span className="text-orange-500">{parts[1]}</span>
                </>
            )}
            <span className="animate-pulse text-orange-500 ml-1">|</span>
        </h3>
    )
}
