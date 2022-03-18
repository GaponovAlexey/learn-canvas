import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from '../Models/myModel'

const CanMain = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 4], zoom: 1 }}>
        <OrbitControls />
        <color attach='background' args={['lightblue']} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  )
}

export default CanMain
