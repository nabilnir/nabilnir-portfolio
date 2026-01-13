import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/page'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'Nabil Mahmud - MERN-Stack Web Developer',
  description: 'MERN-Stack Web Developer and Machine Learning Enthusiast. Specialized in building scalable web applications with Next.js, React, and Node.js.',
  keywords: 'Nabil Mahmud, MERN Stack Developer, Web Developer, Full Stack Developer, Next.js, React, Node.js, Machine Learning enthusiast',
  authors: [{ name: 'Nabil Mahmud' }],
  openGraph: {
    title: 'Nabil Mahmud - MERN-Stack Web Developer',
    description: 'Portfolio of Nabil Mahmud, showcasing projects like CiviX and Eco-Track.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/mylogo.png" />
      </head>
      <body className="antialiased mona-sans">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}