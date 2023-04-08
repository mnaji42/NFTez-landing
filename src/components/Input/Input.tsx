import React, { FC, InputHTMLAttributes } from "react"
import cn from "classnames"
import s from "./Input.module.css"

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "capture"> {
  label?: string
  className?: string
  capture?: boolean | "user" | "environment"
}

const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className={cn(s.container, className)}>
      <input {...props} />
      <span>{label}</span>
    </div>
  )
}

export default Input
