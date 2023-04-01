import React, { FC } from "react"
import { BrowserRouter } from "react-router-dom"

import { LandingStateProvider } from "./context/LandingStateContext"
import { sections } from "./constants"
import { Navbar, Hero, Team, Roadmap, ApiDocs, Pricing } from "./components"

import s from "./App.module.css"

const Section: FC<{ section: string }> = ({ section }) => {
  switch (section) {
    case "Apidocs":
      return <ApiDocs />
    case "Roadmap":
      return <Roadmap />
    case "Team":
      return <Team />
    case "Pricing":
      return <Pricing />
    default:
      return null
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <LandingStateProvider>
        <div className={s.container}>
          <div className={s.header}>
            <Navbar />
            <Hero />
          </div>
          <div className={s.content}>
            {sections.map((section, i) => (
              <Section key={`section-${section}-${i}`} section={section} />
            ))}
          </div>
        </div>
      </LandingStateProvider>
    </BrowserRouter>
  )
}

export default App
