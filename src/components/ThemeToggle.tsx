import { useState } from 'react'
import { motion, useAnimation } from 'motion/react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { isLight, toggle } = useTheme()
  const controls = useAnimation()
  const [clickKey, setClickKey] = useState(0)

  const handleClick = () => {
    toggle()
    setClickKey((k) => k + 1)
    controls.stop()
    controls.set({ y: 0, rotate: 0 })
    controls.start({
      y: [0, 1.8, 0.2, 0],
      rotate: [0, -0.5, 4.5, -2, 0.6, 0],
      transition: {
        duration: 0.65,
        ease: 'easeOut',
        times: [0, 0.15, 0.35, 0.55, 0.78, 1],
      },
    })
  }

  return (
    <button
      onClick={handleClick}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex items-center justify-center w-10 h-10 text-warm-300 hover:text-warm-50 transition-colors duration-300"
    >
      <svg
        viewBox="0 0 14 19"
        width="16"
        height="22"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient id="lamp-glow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFD580" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#F5A623" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.g
          key={clickKey}
          style={{ transformOrigin: '7px 0px' }}
          animate={controls}
        >
          {/* Cord */}
          <line
            x1="7" y1="0" x2="7" y2="4.5"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />

          {/* Shade - smooth rounded bell */}
          <path
            d="M 5.5,4.5 Q 3.2,8.5 3,10 Q 2.8,11.2 7,11.2 Q 11.2,11.2 11,10 Q 10.8,8.5 8.5,4.5 Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity={isLight ? 0.85 : 0.55}
            fill="none"
          />

          {/* Ambient glow (lit only) */}
          <motion.ellipse
            cx="7" cy="14"
            rx="3.5" ry="4"
            fill="url(#lamp-glow)"
            animate={{ opacity: isLight ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Bulb */}
          <motion.circle
            cx="7" cy="14"
            r="1.5"
            stroke="currentColor"
            strokeWidth="0.9"
            animate={{
              fill: isLight ? '#FFD580' : 'transparent',
              strokeOpacity: isLight ? 0.8 : 0.35,
            }}
            transition={{ duration: 0.25 }}
          />
        </motion.g>
      </svg>
    </button>
  )
}
