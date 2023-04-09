import React, { FC } from "react"
import cn from "classnames"
import s from "./RoadmapCard.module.css"

interface RoadmapCardProps {
  className?: string
  goal: any
}

const RoadmapCard: FC<RoadmapCardProps> = ({ className, goal }) => {
  return (
    <div className={cn(s.container, className, "shadow-card")}>
      <div className={s.date}>{goal.date}</div>
      <div>
        <h3 className={s.title}>{goal.title}</h3>
      </div>
      <ul className={s.pointContainer}>
        {goal.points.map((point: Array<string>, index: number) => (
          <li key={`goal-point-${index}`} className={s.point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoadmapCard
