
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Face(props) {
  const { nodes, materials } = useGLTF('/face.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.faceMesh_0.geometry} material={nodes.faceMesh_0.material} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={45} />
      </group>
    </group>
  )
}

useGLTF.preload('/face.gltf')
