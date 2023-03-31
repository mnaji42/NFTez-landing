import React, { FC } from "react"

import { motion } from "framer-motion"

import TeamCard from "./TeamCard"
import { SectionWrapper } from "../../hoc"
import { team } from "../../constants"
import { textVariant } from "../../utils/motion"
import cn from "classnames"
import s from "./Team.module.css"

interface TeamProps {
  className?: string
}

const Team: FC<TeamProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <motion.div variants={textVariant(0)}>
        <p className={"sectionSubText"}>Building together</p>
        <h2 className={"sectionHeadText"}>Team</h2>
      </motion.div>

      <div className={s.cardContainer}>
        {team.map((person, index) => (
          <TeamCard key={`team-key-${index}`} index={index} {...person} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Team, "Team")
