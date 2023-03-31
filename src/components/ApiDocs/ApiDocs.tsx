import React, { FC } from "react"

import apiFunctions from "./ApiFunctions"

import { SectionWrapper } from "../../hoc"
import CodeEditor from "./CodeEditor"
import cn from "classnames"
import s from "./ApiDocs.module.css"

interface ApiDocsProps {
  className?: string
}

const ApiDocs: FC<ApiDocsProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      {apiFunctions.map((f, i) => (
        <CodeEditor key={`code-${i}`} />
      ))}
    </div>
  )
}

export default SectionWrapper(ApiDocs, "Apidocs")
