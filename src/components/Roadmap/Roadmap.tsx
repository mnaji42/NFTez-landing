import React, { FC } from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import RoadmapCard from "./RoadmapCard"

import "react-vertical-timeline-component/style.min.css"

import { roadmap } from "../../constants"
import { SectionWrapper } from "../../hoc"
import { textVariant } from "../../utils/motion"

import cn from "classnames"
import s from "./Roadmap.module.css"

interface RoadmapProps {
  className?: string
}

const Roadmap: FC<RoadmapProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <motion.div variants={textVariant(0)}>
        <p className="sectionSubText text-center">Next is Tomorrow</p>
        <h2 className="sectionHeadText text-center">Roadmap</h2>
      </motion.div>

      <div className={s.roadmapContainer}>
        <VerticalTimeline>
          {roadmap.map((goal: any, index: number) => (
            <VerticalTimelineElement
              key={`goal-${index}`}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                width: "43%",
                borderRadius: "8px",
                border: "solid 1px #444444",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #444444",
              }}
              date={goal.date}
              dateClassName={s.date}
              iconStyle={{ background: goal.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  {/* <img
                    src={goal.icon}
                    alt={goal.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  /> */}
                </div>
              }
            >
              <RoadmapCard goal={goal} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Roadmap, "Roadmap")
