import React, { FC } from "react"

import { motion } from "framer-motion"
import cn from "classnames"
import s from "./Title.module.css"

interface TitleProps {
  className?: string
}

const lineVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
}

const circleVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const subLineVariants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: 340,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
}

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}
const titleSpanVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const subTitleVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
}

const Title: FC<TitleProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.subContainer}>
        <motion.div
          className={s.line}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={s.circle} variants={circleVariants} />
          <motion.div
            className="w-1 sm:h-80 h-40 violet-gradient"
            variants={subLineVariants}
          />
        </motion.div>
        <div>
          <motion.h1
            // className="heroHeadText text-white"
            className={cn("heroHeadText", s.textWhite)}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block " variants={titleSpanVariants}>
              Build dApps
            </motion.span>
            <motion.span
              // className="block text-[#915eff]"
              className={cn("block", s.textPurple)}
              variants={titleSpanVariants}
            >
              Faster
            </motion.span>
            <motion.span
              // className="block text-[#915eff]"
              className={cn("block", s.textPurple)}
              variants={titleSpanVariants}
            >
              Easier
            </motion.span>
          </motion.h1>
          <motion.p
            className="heroSubText text-white mt-2"
            // className={cn("heroHeadText", ',t-2', s.textWhite)}
            variants={subTitleVariants}
            initial="hidden"
            animate="visible"
          >
            Nft Api for Tezos
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Title
