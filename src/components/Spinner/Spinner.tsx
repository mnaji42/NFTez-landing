import React, { FC } from "react"
import cn from "classnames"
import s from "./Spinner.module.css"

interface SpinnerProps {
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
