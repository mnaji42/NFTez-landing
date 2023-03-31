import React, { FC, useRef, useEffect } from "react"

import { useLandingState } from "../../context/LandingStateContext"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"
import { ScrollDown } from "../../components"

import { sections } from "../../constants"
import cn from "classnames"
import s from "./SectionWrapper.module.css"

const SectionWrapper = (Component: FC, section: string) => {
  const getNextSection = (section: string) => {
    const index = sections.indexOf(section)
    if (index === -1 || index === sections.length - 1) {
      return null
    }
    return sections[index + 1]
  }

  const nextSection = getNextSection(section)
  const HOC: FC = () => {
    const { setHash } = useLandingState()
    const spanRef = useRef(null)

    useEffect(() => {
      const spanElement = spanRef.current

      const handleIntersection = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            setHash(section, false)
          }
        })
      }
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      })

      if (spanElement) observer.observe(spanElement)

      return () => observer.disconnect()
    }, [])
    return (
      <motion.section
        variants={staggerContainer(1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(s.container)}
      >
        <span className="hash-span" id={section} ref={spanRef}>
          &nbsp;
        </span>
        <div className={s.componentContainer}>
          <Component />
        </div>
        {nextSection ? (
          <ScrollDown scrollTo={nextSection} visibleDelay={0} />
        ) : null}
      </motion.section>
    )
  }

  return HOC
}

export default SectionWrapper
