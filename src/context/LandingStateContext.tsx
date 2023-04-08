import React, { createContext, useState, ReactElement, useContext } from "react"

import { scrollToId } from "../utils/scrollTo"

import { sections } from "../constants"
interface State {
  hash: string
}

export interface LandingContextTypes extends State {
  setHash: (section: string, scroll: boolean) => void
  getNextSection: (section: string) => string | null
}

const defaultLandingSettings: LandingContextTypes = {
  hash: "",
  setHash: () => {},
  getNextSection: () => {
    return ""
  },
}

export const LandingContext = createContext<LandingContextTypes>(
  defaultLandingSettings
)

export const useLandingState = () => useContext(LandingContext)

export const LandingStateProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const [state, setState] = useState<State>({
    hash: "",
  })
  console.log(state.hash)

  const getNextSection = (section: string) => {
    const index = sections.indexOf(section)
    if (index === -1 || index === sections.length - 1) {
      return null
    }
    return sections[index + 1]
  }

  const setHash = (hash: string, scroll: boolean) => {
    if (scroll) scrollToId(hash, false)
    const stateTmp = { ...state }
    stateTmp.hash = hash
    setState(stateTmp)
  }

  return (
    <LandingContext.Provider
      value={{
        getNextSection,
        setHash,
        ...state,
      }}
    >
      {children}
    </LandingContext.Provider>
  )
}
