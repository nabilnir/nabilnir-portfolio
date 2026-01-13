'use client'

import { useState } from 'react'

export default function ContactPage() {
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

  return (
    <main className="pt-32 pb-20 relative overflow-hidden">
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
                <a className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300" href="mailto:hello@madison.design">
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
              <div className="flex flex-wrap gap-3">
                <a className="px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium" href="https://linkedin.com/in/nabil-mahmud-6b35033a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium" href="https://github.com/nabilnir" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium" href="https://x.com/NabilNir" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                <a className="px-5 py-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium" href="https://facebook.com/nabilarhannir" target="_blank" rel="noopener noreferrer">Facebook</a>
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
    </main>
  )
}
