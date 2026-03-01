import { motion } from 'motion/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    num: '01',
    title: 'Websites & Web Apps',
    hook: 'Your customers can\'t find you online.',
    description:
      'Fast, responsive websites and web applications that look great on every device and actually convert visitors into customers.',
  },
  {
    num: '02',
    title: 'Mobile Apps',
    hook: 'Your customers expect a native experience.',
    description:
      'Cross-platform iOS and Android apps built with the same care as native, from concept through to the App Store.',
  },
  {
    num: '03',
    title: 'Dashboards & Internal Tools',
    hook: 'Your team wastes hours on manual processes.',
    description:
      'Custom dashboards and automation tools that streamline operations, reduce errors, and give you back your time.',
  },
  {
    num: '04',
    title: 'SEO & Digital Presence',
    hook: 'You\'re invisible to local searchers.',
    description:
      'Get found by the right people. Optimized search presence, fast load times, and modern web standards that actually rank.',
  },
]

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="h-px bg-warm-800" />
      <div className="py-10 sm:py-14 lg:py-16 group">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
          {/* Number + Title */}
          <div className="sm:col-span-5 flex items-baseline gap-4 sm:gap-5">
            <span className="font-display text-2xl sm:text-3xl font-700 text-warm-600 group-hover:text-warm-400 transition-colors duration-300 shrink-0">
              {service.num}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-600 text-warm-50">
              {service.title}
            </h3>
          </div>

          {/* Hook + Description */}
          <div className="sm:col-span-7">
            <p className="text-lg sm:text-xl text-warm-200 leading-relaxed mb-3">
              {service.hook}
            </p>
            <p className="text-base text-warm-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm-400 mb-6">
            What I Do
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-700 text-warm-50 leading-[1.1] tracking-[-0.02em]">
            Problems I solve
          </h2>
        </motion.div>

        <div className="mt-8">
          {services.map((service, index) => (
            <ServiceItem key={service.num} service={service} index={index} />
          ))}
          <div className="h-px bg-warm-800" />
        </div>
      </div>
    </section>
  )
}
