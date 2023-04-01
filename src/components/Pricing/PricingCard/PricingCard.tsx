import React, { FC } from "react"

import { motion } from "framer-motion"

import { fadeIn } from "../../../utils/motion"

import cn from "classnames"
import s from "./PricingCard.module.css"

  interface TeamCardProps {
  className?: string
  index: number
  pricingTag: string
  title: string
  pricingDescription: string
  price: number
  textSize: string,
  textButton: string
  planTitle: string
  planText: string[]
  lastText: string
}

const TeamCard: FC<TeamCardProps> = ({
  className,
  index,
  pricingTag,
  title,
  pricingDescription,
  price,
  textSize,
  textButton,
  planTitle,
  planText,
  lastText
}) => {
  return (
    <div className={cn(s.container, className)}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.35, 0.75)}
        className={cn(s.subContainer, "shadow-card green-pink-gradient")}
      >
        <div className={s.content}>  {/* Padding and change mehdi component */}
          <div className={s.pricingTag}>{pricingTag}</div>
          <p className={s.title}>{title}</p>
          <p className={s.pricingDescription}>{pricingDescription}</p>
          <div className={s.priceContainer}>
            <div className={s.dollar}>$</div>
            <p className={s.price}>{price}</p>
          </div>
          <p className={s.textSize}>{textSize}</p>
          <a href='#' className={s.button}>{textButton}</a>
          <div className={s.line}></div>
          <p className={s.planTitle}>{planTitle}</p>
          <ul className={s.listPlanText}>
            {planText.map((elem, index) => (
              <li key={`pricing-key-${index}`}>{elem}</li>
            ))}
          </ul>
          <p className={s.lastText}>{lastText}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default TeamCard
