import React, { FC } from "react"

import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { fadeIn } from "../../../utils/motion"

import cn from "classnames"
import s from "./TeamCard.module.css"

interface TeamCardProps {
  className?: string
  index: number
  name: string
  post: string
  icon: string
}

const TeamCard: FC<TeamCardProps> = ({
  className,
  index,
  name,
  post,
  icon,
}) => {
  return (
    <Tilt className={cn(s.container, className)}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.35, 0.75)}
        className={cn(s.subContainer, "shadow-card green-pink-gradient")}
      >
        <div className={s.content}>
          <img src={icon} alt="web-development" className={s.icon} />
          <div>
            <h3 className={s.name}>{name}</h3>
            <p className={s.post}>{post}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default TeamCard
