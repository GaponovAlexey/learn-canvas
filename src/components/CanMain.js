import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group
        name='camera'
        position={[10, 0, 50]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <PerspectiveCamera fov={40} near={10} far={1000} />
      </group>
      <group
        name='sun'
        position={[100, 50, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <pointLight intensity={10} />
      </group>
      <mesh geometry={nodes.robot.geometry} material={materials.metal} />
      <mesh geometry={nodes.rocket.geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
