import React, { FC } from "react"
import cn from "classnames"
import s from "./DocButton.module.css"

interface DocButtonProps {
  className?: string
}

const DocButton: FC<DocButtonProps> = ({ className }) => {
  return (
    <button className={cn(s.btn, className)}>
      <span className={s.circle}>
        <span className={s.arrow}></span>
      </span>
      <span className={s.text}>Documentation</span>
    </button>
  )
}

export default DocButton
