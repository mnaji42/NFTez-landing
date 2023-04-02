import React, { FC, useState, useEffect } from "react"

import { motion } from "framer-motion"
import apiFunctions from "./ApiFunctions"
import Typed from "react-typed"

import TestSvg from "../icons/TestSvg"

import { fadeIn, textVariant } from "../../utils/motion"
import { SectionWrapper } from "../../hoc"
import CodeEditor from "./CodeEditor"
import cn from "classnames"
import s from "./Solution.module.css"

interface SolutionProps {
  className?: string
}

const Solution: FC<SolutionProps> = ({ className }) => {
  const [funcSelected, setFuncSelected] = useState<string>("")
  const [resApi, setResApi] = useState("")

  useEffect(() => {
    ;(async () => {
      console.log("yoyoyo")
    })()
  }, [screen])
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
      {/* <TestSvg /> */}
      <motion.div variants={textVariant(0)}>
        <p className={"sectionSubText text-center"}>Save time</p>
        <h2 className={"sectionHeadText text-center"}>Our solution</h2>
      </motion.div>
      <div className="flex">
        {apiFunctions.map((f) => (
          <button
            className={cn(s.button, { [s.active]: funcSelected === f.name })}
            onClick={() => setFuncSelected(f.name)}
          >
            {f.title}
          </button>
        ))}
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className={cn(
          s.subContainer,
          "shadow-card green-pink-gradient rounded-lg w-[470px] mb-2"
        )}
        onAnimationComplete={() => setFuncSelected(apiFunctions[0]?.name || "")}
      >
        <CodeEditor nbLigne={2} className="w-full" withLine={false}>
          <Typed
            strings={["yarn add test-tezos", "npm install test-tezos"]}
            typeSpeed={80}
            backSpeed={15}
            loop
          />
        </CodeEditor>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "spring", 1, 0.75)}
        className={cn(
          s.subContainer,
          "shadow-card green-pink-gradient rounded-lg w-[470px]"
        )}
        onAnimationComplete={() => setFuncSelected(apiFunctions[0]?.name || "")}
      >
        <CodeEditor nbLigne={5} className="shadow-card ">
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
      <motion.div></motion.div>
    </div>
  )
}

export default SectionWrapper(Solution, "Solution")
