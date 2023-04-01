import React, { FC, useRef, useEffect } from "react"

import { useLandingState } from "../../context/LandingStateContext"
import { sections } from "../../constants"
import { ScrollDown } from "../"
import { motion } from "framer-motion"
import { ComputersCanvas } from "../canvas"
import Title from "./Title"

import cn from "classnames"
import s from "./Hero.module.css"

interface HeroProps {
  className?: string
}

const Hero: FC<HeroProps> = ({ className }) => {
  const { setHash } = useLandingState()
  const spanRef = useRef(null)

  const schemaVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2.5,
      },
    },
  }
  useEffect(() => {
    const spanElement = spanRef.current

    const observer = new IntersectionObserver(() => setHash("", false), {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    })

    if (spanElement) observer.observe(spanElement)

    return () => observer.disconnect()
  }, [])
  return (
    <section className={cn(s.container, className)}>
      <span className="hash-span absolute" ref={spanRef}>
        &nbsp;
      </span>
      <Title className={s.title} />
      <motion.div variants={schemaVariants} initial="hidden" animate="visible">
        <img src="./visuel_landing.png" alt="schema" className={s.schema} />
      </motion.div>
      {/* <ComputersCanvas /> */}
      {sections.length ? (
        <ScrollDown scrollTo={sections[0]} visibleDelay={1} />
      ) : null}
    </section>
  )
}

export default Hero
