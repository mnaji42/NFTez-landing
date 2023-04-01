import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
  className?: string
  width?: number
}

const pathVariants = {
  initial: {
    width: 0,
    // fill: "rgba(255,255,255,0)",
    // strokeWidth: 4,
  },
  animate1: {
    width: 244,
    // fill: "rgba(93, 18, 255,1)",
    // strokeWidth: 0,
    transition: {
      // fill: { delay: 1.5, duration: 0.5, ease: "easeOut" },
      width: { delay: 1, duration: 0.5, ease: "easeInOut" },
      // strokeWidth: { delay: 1.5 },
    },
  },
  animate2: {
    pathLength: 1,
    // fill: "rgba(119, 56, 255,1)",
    strokeWidth: 0,
    transition: {
      fill: { delay: 1, duration: 1, ease: "easeOut" },
      pathLength: { delay: 0.5, duration: 1, ease: "easeInOut" },
      strokeWidth: { delay: 1.5 },
    },
  },
  animate3: {
    pathLength: 1,
    // fill: "rgba(145, 94, 255,1)",
    strokeWidth: 0,
    transition: {
      fill: { delay: 0.5, duration: 1.5, ease: "easeOut" },
      pathLength: { delay: 0, duration: 1, ease: "easeInOut" },
      strokeWidth: { delay: 1 },
    },
  },
}

const TestSvg: FC<Props> = ({ className, width = 48, ...props }) => (
  <svg
    width="1270px"
    height="1044px"
    viewBox="0 0 1270 1044"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Artboard</title>
    <g
      id="Artboard"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <rect fill="#050816" x="0" y="0" width="1270" height="1044"></rect>
      <motion.rect
        id="Rectangle"
        stroke="#979797"
        fill="#D8D8D8"
        x="310"
        y="780"
        width="244"
        height="150"
        rx="3"
        variants={pathVariants}
        initial="initial"
        animate="animate1"
      ></motion.rect>
      <text
        id="Blockchain-Tezos-*-N"
        font-family="Poppins-Bold, Poppins"
        font-size="24"
        font-weight="bold"
        fill="#FFFFFF"
      >
        <tspan x="325" y="822">
          Blockchain Tezos
        </tspan>
        <tspan x="325" y="855">
          * NFT DATA
        </tspan>
      </text>
      <rect
        id="Rectangle-Copy-2"
        stroke="#979797"
        fill="#D8D8D8"
        x="704"
        y="780"
        width="244"
        height="150"
        rx="3"
      ></rect>
      <text
        id="Blockchain-Tezos-*-N-Copy"
        font-family="Poppins-Bold, Poppins"
        font-size="24"
        font-weight="bold"
        fill="#FFFFFF"
      >
        <tspan x="719" y="822">
          Blockchain Tezos
        </tspan>
        <tspan x="719" y="855">
          * NFT DATA
        </tspan>
      </text>
      <rect
        id="Rectangle-Copy-2"
        stroke="#979797"
        fill="#D8D8D8"
        x="513"
        y="470"
        width="244"
        height="150"
        rx="3"
      ></rect>
      <text
        id="Blockchain-Tezos-*-N-Copy"
        font-family="Poppins-Bold, Poppins"
        font-size="24"
        font-weight="bold"
        fill="#FFFFFF"
      >
        <tspan x="528" y="512">
          Blockchain Tezos
        </tspan>
        <tspan x="528" y="545">
          * NFT DATA
        </tspan>
      </text>
      <line
        x1="513.5"
        y1="545.5"
        x2="432.5"
        y2="780.5"
        id="Line-2"
        stroke="#979797"
        stroke-linecap="square"
      ></line>
      <line
        x1="825.5"
        y1="545.5"
        x2="757.5"
        y2="780.5"
        id="Line-2-Copy"
        stroke="#979797"
        stroke-linecap="square"
        transform="translate(791.500000, 663.000000) scale(-1, 1) translate(-791.500000, -663.000000) "
      ></line>
      <g
        id="Group"
        transform="translate(809.000000, 725.000000) rotate(-17.000000) translate(-809.000000, -725.000000) translate(795.998899, 717.001110)"
        fill="#D8D8D8"
        stroke="#979797"
      >
        <path
          d="M13.1468013,0.00154970705 C13.851876,0.0246531531 14.5499532,0.306075718 15.0869453,0.845473081 C15.2422972,1.00152085 15.3762005,1.17085296 15.4886553,1.34980123 L25.1582926,11.0646396 C26.2835051,12.1948921 26.2835051,14.0220536 25.1582926,15.1523061 C24.0395591,16.2760506 22.2216715,16.2801129 21.097927,15.1613794 C21.0948958,15.1583617 21.0918714,15.1553373 21.0888538,15.1523061 L13.001,7.028 L4.91334819,15.1523061 L4.90427496,15.1613794 C3.78053045,16.2801129 1.96264285,16.2760506 0.843909354,15.1523061 C-0.281303118,14.0220536 -0.281303118,12.1948921 0.843909354,11.0646396 L10.5135467,1.34980123 C10.6260014,1.17085296 10.7599047,1.00152085 10.9152567,0.845473081 C11.4522487,0.306075718 12.1503259,0.0246531531 12.8554007,0.00154970705 Z"
          id="Combined-Shape"
        ></path>
      </g>
    </g>
  </svg>
)

export default TestSvg
