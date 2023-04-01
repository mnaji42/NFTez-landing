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
      <p className={s.asterisk}>* Beyond that, you can opt for a pay-as-you-go solution, where every 100 requests are billed at $0.08.</p>
    </div>
  )
}

export default SectionWrapper(Pricing, "Pricing")
