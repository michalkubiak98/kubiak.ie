import { motion } from 'motion/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-xl sm:text-2xl text-warm-200 leading-[1.7] mb-14">
              Have a project in mind? Whether it's a website, app, or custom
              tool - I'd love to hear about it.
            </p>

            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-4">
                  Email
                </p>
                <a
                  href="mailto:hi@kubiak.ie"
                  className="font-display text-2xl sm:text-3xl font-600 text-warm-50 hover:text-warm-200 transition-colors"
                >
                  hi@kubiak.ie
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-4">
                  Location
                </p>
                <p className="font-display text-2xl sm:text-3xl font-600 text-warm-50">Kerry, Ireland</p>
                <p className="text-sm text-warm-400 mt-1.5">Available for remote work worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <a
                href="https://www.linkedin.com/in/michalpkubiak"
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex items-center justify-between py-6 border-b border-warm-700 hover:border-warm-500 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <span className="text-lg text-warm-100 group-hover:text-warm-50 transition-colors">LinkedIn</span>
                <span className="inline-block w-6 h-px bg-warm-500 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/michalkubiak98"
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex items-center justify-between py-6 border-b border-warm-700 hover:border-warm-500 transition-colors"
                aria-label="View GitHub profile"
              >
                <span className="text-lg text-warm-100 group-hover:text-warm-50 transition-colors">GitHub</span>
                <span className="inline-block w-6 h-px bg-warm-500 group-hover:w-10 transition-all duration-300" aria-hidden="true" />
              </a>
            </div>
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
