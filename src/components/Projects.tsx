import { motion } from 'motion/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Project {
  id: string
  client: string
  category: string
  what: string
  role: string
  tags: string[]
  url?: string
}

const projects: Project[] = [
  {
    id: 'timeless-moments',
    client: 'TimelessMoments.ie',
    category: 'Client Project',
    what:
      'A full website for a professional homecare service provider in Wicklow and Dublin, delivering person-centred care across senior care, dementia support, live-in care, and more.',
    role:
      'Designed and built the complete website from scratch, including responsive layouts, service pages, SEO, and Google Business integration.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://timelessmoments.ie',
  },
  {
    id: 'skyfive',
    client: 'Airline Connectivity Platform',
    category: 'Enterprise Dashboard',
    what:
      'A unified management platform for vouchers, subscriptions, and passenger sessions serving multiple airlines worldwide.',
    role:
      'Built the full React dashboard with multi-tenant role-based access, batch operations handling up to 1M vouchers, real-time job polling, and the complete AWS CI/CD pipeline.',
    tags: ['React', 'TypeScript', 'NestJS', 'AWS CDK'],
  },
  {
    id: 'starlink-portals',
    client: 'In-Flight WiFi Portals',
    category: 'Aviation',
    what:
      'Captive WiFi portals for major airlines, serving passengers at 35,000 feet on constrained satellite networks.',
    role:
      'Developed single-file HTML portals with connectivity health checks, authentication flows, and video ad integration, all optimized for aircraft network environments.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Webpack'],
  },
  {
    id: 'emirates-iptv',
    client: 'In-Flight Entertainment Dashboard',
    category: 'Video Streaming',
    what:
      'A cross-browser streaming solution supporting live TV and on-demand content with DRM protection across every device type.',
    role:
      'Built the entertainment dashboard with embedded Shaka player, Widevine/FairPlay DRM integration, and a responsive EPG grid scaling from tablets to 4K displays.',
    tags: ['React', 'TypeScript', 'Shaka Player', 'DRM'],
  },
  {
    id: 'viasat',
    client: 'Maritime Fleet Dashboard',
    category: 'Maritime Platform',
    what:
      'Dynamic dashboards for fleet operators managing maritime connectivity and hotspot services across vessels worldwide.',
    role:
      'Led major feature expansion with dynamic dashboards and complex CRUD flows, delivered with zero critical regressions across the entire release.',
    tags: ['Angular', 'TypeScript'],
  },
  {
    id: 'bloomberg',
    client: 'Enterprise WiFi Portal',
    category: 'Enterprise WiFi',
    what:
      'Seamless single sign-on WiFi onboarding for enterprise identity management at scale.',
    role:
      'Built the SSO portal and admin UI for identity management and user onboarding with secure authentication flows.',
    tags: ['React', 'TypeScript'],
  },
]

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="h-px bg-warm-800" />
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left: name + category */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 mb-3">
              {project.category}
            </p>
            <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-600 text-warm-50 leading-[1.15] tracking-[-0.01em]">
              {project.client}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-4 text-sm text-warm-400 hover:text-warm-200 transition-colors"
              >
                Visit live site
                <span className="inline-block w-4 h-px bg-current group-hover:w-8 transition-all duration-300" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Right: details */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-warm-200 leading-relaxed">
              {project.what}
            </p>
            <p className="mt-5 text-base text-warm-400 leading-relaxed">
              {project.role}
            </p>
            <p className="mt-6 text-sm text-warm-500 tracking-wide">
              {project.tags.join(' \u00b7 ')}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="work" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm-400 mb-6">
            Track Record
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-700 text-warm-50 leading-[1.1] tracking-[-0.02em]">
            What I've built
          </h2>
          <p className="mt-6 text-base sm:text-lg text-warm-400 leading-relaxed max-w-[600px]">
            From client projects to production systems shipped during
            4+ years in enterprise software.
          </p>
        </motion.div>

        <div className="mt-8">
          {projects.map((project, index) => (
            <ProjectBlock key={project.id} project={project} index={index} />
          ))}
          <div className="h-px bg-warm-800" />
        </div>
      </div>
    </section>
  )
}
