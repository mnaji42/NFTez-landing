import React, {
  createContext,
  useState,
  ReactElement,
  useContext,
  useEffect,
} from "react"

import { scrollToId } from "../utils/scrollTo"

interface State {
  hash: string
}

export interface LandingContextTypes extends State {
  setHash: (section: string, scroll: boolean) => void
}

const defaultLandingSettings: LandingContextTypes = {
  hash: "",
  setHash: () => {},
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

  const setHash = (hash: string, scroll: boolean) => {
    if (scroll) scrollToId(hash, false)
    const stateTmp = { ...state }
    stateTmp.hash = hash
    setState(stateTmp)
  }

  return (
    <LandingContext.Provider
      value={{
        setHash,
        ...state,
      }}
    >
      {children}
    </LandingContext.Provider>
  )
}
