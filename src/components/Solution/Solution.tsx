import React, { FC, useState, useEffect } from "react"

import { motion } from "framer-motion"
import apiFunctions from "./ApiFunctions"
import Typed from "react-typed"

import sdk from "test-tezos"

import { fadeIn, textVariant } from "../../utils/motion"
import { SectionWrapper } from "../../hoc"
import CodeEditor from "./CodeEditor"
import { Input } from "../"
import cn from "classnames"
import s from "./Solution.module.css"
import Spinner from "../Spinner"

interface SolutionProps {
  className?: string
}

const buttonsVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const Solution: FC<SolutionProps> = ({ className }) => {
  const [funcSelected, setFuncSelected] = useState<string>("")
  const [resApi, setResApi] = useState<{} | null>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [contractAddress, setContractAddress] = useState<string>(
    "KT1NVvPsNDChrLRH5K2cy6Sc9r1uuUwdiZQd"
  )
  const [walletAddress, setWalletAddress] = useState<string>(
    "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq"
  )

  useEffect(() => {
    ;(async () => {
      let res = null
      setLoading(true)
      if (funcSelected === "getNFTCollection") {
        res = await sdk.getNFTCollection(contractAddress)
      } else if (funcSelected === "getWalletNFTs") {
        res = await sdk.getWalletNFTs(walletAddress)
      } else if (funcSelected === "verifyOwnership") {
        const isOwner = await sdk.verifyOwnership(
          walletAddress,
          contractAddress
        )
        res = {
          isOwner,
        }
      }
      setResApi(res)
      setLoading(false)
    })()
  }, [funcSelected])

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

  const jsonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    firstLoad: {
      opacity: 1,
      transition: {
        duration: 0,
        delay: 1,
      },
    },
  }

  return (
    <div className={cn(s.container, className)}>
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <Spinner />
        </div>
      ) : null}
      <div className="mt-8">
        <motion.div variants={textVariant(0)}>
          <p className={"sectionSubText text-center"}>Save time</p>
          <h2 className={"sectionHeadText text-center"}>Our solution</h2>
        </motion.div>
        <div className={s.content}>
          <div className={s.rightContainer}>
            <motion.div
              className={s.buttonContainer}
              variants={buttonsVariants}
            >
              {apiFunctions.map((f, i) => (
                <button
                  key={`buttonFunc-${i}`}
                  className={cn(s.button, {
                    ["violet-gradient text-white"]: funcSelected === f.name,
                  })}
                  onClick={() => {
                    if (!loading) setFuncSelected(f.name)
                  }}
                >
                  {f.title}
                </button>
              ))}
            </motion.div>
            <div className={s.sdkContainer}>
              <motion.div
                variants={fadeIn("right", "spring", 1, 0.75)}
                className={cn(
                  s.subContainer,
                  "shadow-card green-pink-gradient rounded-lg mb-2"
                )}
                onAnimationComplete={() => setFuncSelected("verifyOwnership")}
              >
                <CodeEditor nbLigne={2} withLine={false}>
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
                  "shadow-card green-pink-gradient rounded-lg w-full"
                )}
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
            </div>
          </div>
          <div className={s.leftContainer}>
            <div>
              <h3>Try it yourself</h3>
              <Input type="text" required label="Hello" />
            </div>
            <motion.div
              variants={fadeIn("left", "spring", 1.25, 0.75)}
              className={cn(
                s.subContainer,
                "shadow-card green-pink-gradient rounded-lg"
              )}
            >
              <CodeEditor nbLigne={20} className="shadow-card ">
                <motion.div
                  className={s.resContainer}
                  variants={jsonVariants}
                  initial="hidden"
                  animate="firstLoad"
                >
                  {resApi ? (
                    <motion.pre
                      variants={jsonVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {JSON.stringify(resApi, null, 2)}
                    </motion.pre>
                  ) : (
                    <motion.div
                      variants={jsonVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      Coming soon...
                    </motion.div>
                  )}
                </motion.div>
              </CodeEditor>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Solution, "Solution")
