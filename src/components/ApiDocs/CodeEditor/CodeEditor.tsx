import React, { FC, ReactElement } from "react"
import cn from "classnames"
import s from "./CodeEditor.module.css"

interface CodeEditorProps {
  className?: string
  nbLigne: number
  children: ReactElement
  withLine?: boolean
}

const CodeEditor: FC<CodeEditorProps> = ({
  className,
  nbLigne,
  withLine = true,
  children,
}) => {
  const lines = []
  for (let i = 1; i <= nbLigne; i++) {
    lines.push(<li key={i}>{i}</li>)
  }

  return (
    <div className={cn(s.container, className, { [s.withLine]: withLine })}>
      {withLine ? (
        <div className={s.gutter}>
          <ol>{lines}</ol>
        </div>
      ) : null}
      <div className={s.code}>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeEditor
