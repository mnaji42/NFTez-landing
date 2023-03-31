import React, { FC } from "react"
import { Html, useProgress } from "@react-three/drei"
import cn from "classnames"
import s from "./Loader.module.css"

interface LoaderProps {
  className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader
