import { Face } from '@/components/Face'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Canvas className='canvas' style={{ height: '100vh', background: 'black' }}>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={1} color={'#0080FE'}/>
          <directionalLight position={[2, -10, 2]} intensity={1} color={'#0080FE'}/>
          <directionalLight position={[-1, -1, -1]} intensity={1} color={'#0080FE'}/>
          <directionalLight position={[-10, 0, -2]} intensity={1} color={'#0080FE'}/>
          <directionalLight position={[5, -10, 2]} intensity={1} color={'#0080FE'}/>
          <pointLight position={[0, -5, 0]} intensity={1} color={'#0080FE'}/>
          <hemisphereLight position={[1, 1, 1]} intensity={1} color={'#0080FE'}/>
          <OrbitControls autoRotateSpeed={5} target={[0, 0, -2]} autoRotate={true} enableDamping={false} enablePan={false} enableRotate={true} enableZoom={false}/>
          <Face />
        </Canvas>
      </main>
    </>
  )
}
