import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')
    const form = e.currentTarget
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setFormState('sent')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm-400 mb-6">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-700 text-warm-50 leading-[1.1] tracking-[-0.02em]">
            Start a project
          </h2>
        </motion.div>

        <div className="h-px bg-warm-800 mt-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 pt-14 sm:pt-18">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-base sm:text-lg text-warm-300 leading-relaxed mb-14">
              Have a project in mind? Whether it's a website, app, or custom
              tool - tell me about it and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hi@kubiak.ie"
                  className="text-warm-100 hover:text-warm-50 transition-colors text-lg sm:text-xl"
                >
                  hi@kubiak.ie
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+353834876683"
                  className="text-warm-100 hover:text-warm-50 transition-colors text-lg sm:text-xl"
                >
                  +353 83 487 6683
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Location
                </p>
                <p className="text-warm-100 text-lg sm:text-xl">Kerry, Ireland</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-warm-400 mb-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-warm-700 pb-4 text-lg text-warm-50 placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-warm-400 mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-warm-700 pb-4 text-lg text-warm-50 placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-warm-400 mb-4">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-warm-700 pb-4 text-lg text-warm-50 placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors resize-none"
                  placeholder="What do you need built?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === 'sending'}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex items-center gap-4 text-base text-warm-50 hover:text-warm-200 transition-colors disabled:opacity-50 pt-4"
              >
                {formState === 'sending'
                  ? 'Sending...'
                  : formState === 'sent'
                  ? 'Message sent successfully'
                  : formState === 'error'
                  ? 'Something went wrong. Try again.'
                  : 'Send message'}
                <span className="inline-block w-8 h-px bg-current group-hover:w-12 transition-all duration-300" aria-hidden="true" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-warm-800">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <span className="font-display text-xl font-700 text-warm-50 tracking-[-0.02em]">Kubiak</span>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/michalpkubiak"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs uppercase tracking-[0.2em] text-warm-400 hover:text-warm-200 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/michalkubiak98"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs uppercase tracking-[0.2em] text-warm-400 hover:text-warm-200 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>

          <span className="text-xs uppercase tracking-[0.15em] text-warm-500">
            &copy; {new Date().getFullYear()} Kubiak
          </span>
        </div>
      </div>
    </footer>
  )
}
