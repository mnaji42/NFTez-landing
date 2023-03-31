import { FC } from "react"

interface Props {
  className?: string
  width?: number
}

const Logo: FC<Props> = ({ className, width = 48, ...props }) => (
  <svg
    className={className}
    width={width}
    viewBox="0 0 256 257"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M192.083 0L127.84 43.18l.233 1.398 62.406 41.603 1.604.04.803-1.359.155-82.975L192.083 0z"
      fill="#5d12ff"
    />
    <path
      d="M62.92 174.229l-.211 78.21 1.624 3.894 63.925-42.408-.443-2.282-58.764-39.317-4.718-1.215-1.412 3.118zM192.083 0v86.221L64.915.998l-.79 3.538L251.05 212.488l4.95 1.816V42.777L192.083 0z"
      fill="#7738ff"
    />
    <path
      d="M0 42.944v170.778l64.333 42.61v-85.221l127.75 85.555 63.584-42.611L64.915.999 0 42.944z"
      fill="#915eff"
    />
  </svg>
)

export default Logo
