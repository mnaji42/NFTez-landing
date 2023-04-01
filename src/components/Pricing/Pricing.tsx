import React, { FC } from "react"

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
      <div className={s.cardContainer}>
        {pricing.map((pricePlan, index) => (
          <PricingCard key={`pricing-key-${index}`} index={index} {...pricePlan} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Pricing, "Pricing")
