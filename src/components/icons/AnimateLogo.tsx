import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
  className?: string
  width?: number
}

const pathVariants = {
  initial: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
    strokeWidth: 4,
  },
  animate1: {
    pathLength: 1,
    fill: "rgba(93, 18, 255,1)",
    strokeWidth: 0,
    transition: {
      fill: { delay: 1.5, duration: 0.5, ease: "easeOut" },
      pathLength: { delay: 1, duration: 0.5, ease: "easeInOut" },
      strokeWidth: { delay: 1.5 },
    },
  },
  animate2: {
    pathLength: 1,
    fill: "rgba(119, 56, 255,1)",
    strokeWidth: 0,
    transition: {
      fill: { delay: 1, duration: 1, ease: "easeOut" },
      pathLength: { delay: 0.5, duration: 1, ease: "easeInOut" },
      strokeWidth: { delay: 1.5 },
    },
  },
  animate3: {
    pathLength: 1,
    fill: "rgba(145, 94, 255,1)",
    strokeWidth: 0,
    transition: {
      fill: { delay: 0.5, duration: 1.5, ease: "easeOut" },
      pathLength: { delay: 0, duration: 1, ease: "easeInOut" },
      strokeWidth: { delay: 1 },
    },
  },
}

const AnimateLogo: FC<Props> = ({ className, width = 48, ...props }) => (
  <motion.svg
    className={className}
    width={width}
    viewBox="0 0 256 257"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <motion.path
      d="M192.083 0L127.84 43.18l.233 1.398 62.406 41.603 1.604.04.803-1.359.155-82.975L192.083 0z"
      fill="#5d12ff"
      stroke="#c2a6ff"
      strokeWidth={4}
      variants={pathVariants}
      initial="initial"
      animate="animate1"
    />
    <motion.path
      d="M62.92 174.229l-.211 78.21 1.624 3.894 63.925-42.408-.443-2.282-58.764-39.317-4.718-1.215-1.412 3.118zM192.083 0v86.221L64.915.998l-.79 3.538L251.05 212.488l4.95 1.816V42.777L192.083 0z"
      fill="#7738ff"
      stroke="#c2a6ff"
      strokeWidth={4}
      variants={pathVariants}
      initial="initial"
      animate="animate2"
    />
    <motion.path
      d="M0 42.944v170.778l64.333 42.61v-85.221l127.75 85.555 63.584-42.611L64.915.999 0 42.944z"
      fill="#915eff"
      stroke="#c2a6ff"
      strokeWidth={4}
      variants={pathVariants}
      initial="initial"
      animate="animate3"
    />
  </motion.svg>
)

export default AnimateLogo
