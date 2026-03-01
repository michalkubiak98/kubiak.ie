import { motion } from 'motion/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
  { value: '300k+', label: 'Lines of code' },
]

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm-400 mb-6">
            About
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-700 text-warm-50 leading-[1.1] tracking-[-0.02em]">
            The person behind Kubiak
          </h2>
        </motion.div>

        <div className="h-px bg-warm-800 mt-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 sm:pt-18">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-xl sm:text-2xl text-warm-100 leading-[1.7]">
              I'm Michael, a software developer based in Kerry, Ireland.
              For the past four years I've been building production software
              for some of the world's largest airlines - in-flight
              entertainment, connectivity platforms, and enterprise tools.
            </p>
            <p className="mt-8 text-base sm:text-lg text-warm-300 leading-relaxed">
              I've shipped code that runs at 35,000 feet, handles millions
              of transactions, and works across every device and browser.
              Now I'm taking everything I've learned and putting it to
              work for local businesses.
            </p>
            <p className="mt-6 text-base sm:text-lg text-warm-300 leading-relaxed">
              Need a website, a mobile app, or a custom tool? I'll build
              it properly, on time, and at a price that works for you.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="space-y-10">
              {/* Location */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Based in
                </p>
                <p className="font-display text-2xl sm:text-3xl font-600 text-warm-50">Kerry, Ireland</p>
                <p className="text-sm text-warm-400 mt-1.5">Available for remote work worldwide</p>
              </div>

              {/* Status */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Status
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true" />
                  <p className="text-base text-warm-200">Taking on new projects</p>
                </div>
              </div>

              {/* Approach */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  How I work
                </p>
                <p className="text-base text-warm-200">AI-native development</p>
                <p className="text-sm text-warm-400 mt-1">I leverage AI tooling to ship faster, handle more complexity, and keep your costs down.</p>
              </div>

              {/* Education */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-2">
                  Education
                </p>
                <p className="text-base text-warm-200">BSc (Hons) Computing with Software Development</p>
                <p className="text-sm text-warm-400 mt-1">Munster Technological University, 2018 - 2022</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-px bg-warm-800 mt-16 sm:mt-24" />
          <div className="grid grid-cols-3 gap-8 sm:gap-10 pt-12 sm:pt-14">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
              >
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-700 text-warm-50">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm text-warm-400 mt-1.5 uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
