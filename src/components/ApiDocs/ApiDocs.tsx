import React, { FC, useState } from "react"

import { motion } from "framer-motion"
import apiFunctions from "./ApiFunctions"
import Typed from "react-typed"

import { fadeIn } from "../../utils/motion"
import { SectionWrapper } from "../../hoc"
import CodeEditor from "./CodeEditor"
import cn from "classnames"
import s from "./ApiDocs.module.css"

interface ApiDocsProps {
  className?: string
}

const ApiDocs: FC<ApiDocsProps> = ({ className }) => {
  const [funcSelected, setFuncSelected] = useState<string>("")
  const functionToString = (f: any): string => {
    const span = (children: string, className: string): string => {
      return `<span class=${className}>${children}</span>`
    }
    return `${span(`// ${f.comment}`, s.green)}<br />${span(
      "import",
      s.violet
    )} ${span("{", s.yellow)} ${span(f.name, s.blue)} ${span(
      "}",
      s.yellow
    )} ${span("from", s.violet)} ${span(`"nftez"`, s.orange)}<br /><br />${span(
      f.name,
      s.yellowFunc
    )}${span("(", s.yellow)}${span(f.variable, s.blue)}${span(")", s.yellow)}`
  }
  return (
    <div className={cn(s.container, className)}>
      <div className="flex flex-col">
        {apiFunctions.map((f) => (
          <button
            className="m-4 border border-solid border-white"
            onClick={() => setFuncSelected(f.name)}
          >
            {f.name}
          </button>
        ))}
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className={cn(
          s.subContainer,
          "shadow-card green-pink-gradient rounded-lg"
        )}
        onAnimationComplete={() => setFuncSelected(apiFunctions[0]?.name || "")}
      >
        <CodeEditor nbLigne={5} className="shadow-card">
          <div className={s.code}>
            {apiFunctions.map((f, i) => (
              <div key={`code-${i}`}>
                {funcSelected === f.name ? (
                  <Typed
                    strings={[functionToString(f)]}
                    typeSpeed={5}
                    backSpeed={5}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </CodeEditor>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(ApiDocs, "Apidocs")

// import { getNFTAttributes }  from "nftez"

// // Retrieve all attributes of an NFT
// getNFTAttributes(nftAddress)|
