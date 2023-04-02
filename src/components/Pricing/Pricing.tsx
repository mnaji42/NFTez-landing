import React, { FC } from "react"

import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import { SectionWrapper } from "../../hoc"
import cn from "classnames"
import s from "./Pricing.module.css"
import PricingCard from "./PricingCard"
import { pricing } from "../../constants"

interface PricingProps {
  className?: string
}

const Pricing: FC<PricingProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <motion.div variants={textVariant(0)}>
        <p className={"sectionSubText text-center"}>
          PLANS BUILT FOR EVERY TEAM
        </p>
        <h2 className={"sectionHeadText text-center"}>
          Developer-first pricing
        </h2>
      </motion.div>
      <div className={s.cardContainer}>
        {pricing.map((pricePlan, index) => (
          <PricingCard
            key={`pricing-key-${index}`}
            index={index}
            {...pricePlan}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Pricing, "Pricing")
