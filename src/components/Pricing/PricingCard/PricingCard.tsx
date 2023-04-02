import React, { FC } from "react"

import { motion } from "framer-motion"

import { fadeIn } from "../../../utils/motion"

import cn from "classnames"
import s from "./PricingCard.module.css"

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
        <div className={s.content}>  {/* Padding and change mehdi component */}
          <p className={s.title}>{title}</p>
          <p className={s.pricingDescription}>{pricingDescription}</p>
          {price !== undefined ? 
            <div className={s.priceContainer}>
              <div className={s.dollar}>$</div>
              <p className={s.price}>{price}</p>
            </div> :
            <img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62e6fef9069cdf098893f756_enterprise.svg" loading="lazy" alt="" className={s.image}></img>
          }
          <p className={s.textSize}>{textSize}</p>
          <a href='#' className={s.button}>{textButton}</a>
          <div className={s.line}></div>
          <ul className={s.listPlanText}>
            {planText.map((elem, index) => (
              <li key={`pricing-key-${index}`} className='s.li'>{elem}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default TeamCard
