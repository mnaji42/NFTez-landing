import React, { FC } from "react"

import { motion } from "framer-motion"

import { fadeIn } from "../../../utils/motion"

import cn from "classnames"
import s from "./PricingCard.module.css"
import { Enterprise } from "../../icons"

interface TeamCardProps {
  className?: string
  index: number
  title: string
  pricingDescription: string
  price?: number
  textSize: string
  textButton: string
  planText: string[]
}

const TeamCard: FC<TeamCardProps> = ({
  className,
  index,
  title,
  pricingDescription,
  price,
  textSize,
  textButton,
  planText,
}) => {
  return (
    <div className={cn(s.container, className)}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.35, 0.75)}
        className={cn(s.subContainer, "shadow-card green-pink-gradient")}
      >
        <div className={s.content}>
          {" "}
          {/* Padding and change mehdi component */}
          <p className={s.title}>{title}</p>
          <p className={s.pricingDescription}>{pricingDescription}</p>
          {price !== undefined ? (
            <div className={s.priceContainer}>
              <div className={s.dollar}>$</div>
              <p className={s.price}>{price}</p>
            </div>
          ) : (
            <div className={s.image}>
              <Enterprise />
            </div>
          )}
          <p className={s.textSize}>{textSize}</p>
          <button className={cn(s.button, "violet-gradient")}>
            {textButton}
          </button>
          <div className={s.line}></div>
          <ul className={s.listPlanText}>
            {planText.map((elem, index) => (
              <li key={`pricing-key-${index}`} className="s.li">
                {elem}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default TeamCard
