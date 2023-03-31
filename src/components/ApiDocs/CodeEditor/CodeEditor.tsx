import React, { FC } from "react"

import cn from "classnames"
import s from "./CodeEditor.module.css"

interface CodeEditorProps {
  className?: string
}

const CodeEditor: FC<CodeEditorProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.gutter}>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ol>
      </div>
      <div className={s.code}>
        <pre>
          <code>{`function helloWorld() {
	console.log("Hello, world!");
}`}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeEditor
