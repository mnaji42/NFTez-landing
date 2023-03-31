import React, { FC } from "react"

import { useLandingState } from "../../context/LandingStateContext"
import { motion } from "framer-motion"

import cn from "classnames"
import s from "./ScrollDown.module.css"

interface ScrollDownProps {
  className?: string
  scrollTo: string
  visibleDelay?: number
}

const ScrollDown: FC<ScrollDownProps> = ({
  className,
  scrollTo,
  visibleDelay = 0,
}) => {
  const { setHash } = useLandingState()
  return (
    <motion.div
      className={cn(s.container, className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: visibleDelay,
        duration: 1,
      }}
    >
      <div className={s.subContainer} onClick={() => setHash(scrollTo, true)}>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className={s.ball}
        ></motion.div>
      </div>
    </motion.div>
  )
}

export default ScrollDown
