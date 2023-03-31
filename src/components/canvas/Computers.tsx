import React, { Suspense } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import s from "./Computers.module.css"
import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF("./computerHero.glb")

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 30, 10]} />
      <primitive
        object={computer.scene}
        scale={1.2}
        position={[0, 0, 0]}
        rotation={[0, -0.4, -0.2]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      className={s.canvas}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          minPolarAngle={0}
          {...({ rotate: [true, true, true] } as any)}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas
