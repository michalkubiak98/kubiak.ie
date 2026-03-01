import { motion } from 'motion/react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-warm-950">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="min-h-screen flex flex-col justify-center pt-28 pb-20 lg:pt-32 lg:pb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-sm uppercase tracking-[0.25em] text-warm-400 mb-10 sm:mb-12"
          >
            Software Developer / Kerry, Ireland
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-700 leading-[1] tracking-[-0.03em] text-warm-50"
            >
              I build digital
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-700 leading-[1] tracking-[-0.03em] text-warm-50"
              aria-hidden="true"
            >
              products that work<span className="text-warm-500">.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 sm:mt-14 text-lg sm:text-xl text-warm-200 leading-relaxed max-w-[580px]"
          >
            Websites, apps, and custom tools for businesses who need
            things done properly. Quality work, at your budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-5 text-base sm:text-lg text-warm-400 leading-relaxed max-w-[580px]"
          >
            4+ years building production software for global airlines.
            Now helping businesses in Kerry build their digital presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-12 sm:mt-14 flex flex-wrap gap-6 items-center"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-3 text-sm sm:text-base text-warm-50 hover:text-warm-200 transition-colors"
            >
              See my work
              <span className="inline-block w-8 h-px bg-warm-50 group-hover:w-12 transition-all duration-300" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm sm:text-base text-warm-400 hover:text-warm-200 transition-colors"
            >
              Start a project
            </a>
          </motion.div>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-auto pt-16 lg:pt-20 h-px bg-warm-800 origin-left"
          />

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-8 flex justify-end"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="text-[10px] uppercase tracking-[0.2em] text-warm-500"
            >
              Scroll
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
