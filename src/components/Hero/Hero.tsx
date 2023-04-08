import React, { FC, useRef, useEffect } from "react"

import { useLandingState } from "../../context/LandingStateContext"
import { sections } from "../../constants"
import { ScrollDown } from "../"
import { motion } from "framer-motion"
import { MediaQueries } from "../"
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
      x: 96,
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
      <span className="hash-span absolute top-0 left-0" ref={spanRef}>
        &nbsp;
      </span>
      <div className={s.subContainer}>
        <Title className={s.title} />
        <motion.div
          variants={schemaVariants}
          initial="hidden"
          animate="visible"
          className={s.schemaContainer}
        >
          <img src="./visuel_landing.png" alt="schema" className={s.schema} />
        </motion.div>
      </div>
      <MediaQueries hidden={["xs", "sm", "md"]}>
        <>
          {sections.length ? (
            <ScrollDown scrollTo={sections[0]} visibleDelay={2} />
          ) : null}
        </>
      </MediaQueries>
    </section>
  )
}

export default Hero
