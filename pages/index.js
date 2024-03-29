import { Face } from '@/components/Face'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import Blob from '@/components/Blob'

export default function Home() {
  return (
    <>
      <Head>
        <title>JM</title>
        <meta name="description" content="Jaloliddin Makhmudov | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />

        <Canvas className='canvas' style={{ height: '100dvh' }}>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={1} color={'#2593FF'} />
          <directionalLight position={[2, -10, 2]} intensity={1} color={'#2593FF'} />
          <directionalLight position={[-1, -1, -1]} intensity={1} color={'#2593FF'} />
          <directionalLight position={[-10, 0, -2]} intensity={1} color={'#2593FF'} />
          <directionalLight position={[5, -10, 2]} intensity={1} color={'#2593FF'} />
          <directionalLight position={[5, -3, 10]} intensity={1} color={'#2593FF'} />
          <spotLight position={[0, 3, 0]} intensity={1} color={'#2593FF'} />
          <pointLight position={[0, 0, 0]} intensity={1} color={'#2593FF'} />
          <hemisphereLight position={[1, 1, 1]} intensity={1} color={'#2593FF'} />
          <OrbitControls autoRotateSpeed={5} target={[0, 0, -2]} autoRotate={true} enableDamping={true} enablePan={false} enableRotate={true} enableZoom={false} />
          <Face />
        </Canvas>

        <section className="footer-main">
          <section className="info-box">
            <div className="my-name-mobile">
              <span>JALOLIDDIN</span>
              <br />
              MAKHMUDOV
            </div>

            <div className="profession">
              Frontend Developer
            </div>

            <div className='location'>
              From <span>Tashkent</span>
            </div>
          </section>

          <section className="social-links">
            <Link target='_blank' href='https://github.com/jmakhmudov'>
              <FontAwesomeIcon icon={faGithub} size='xl' />
            </Link>

            <Link target='_blank' href='https://www.linkedin.com/in/jaloliddin-makhmudov-935643229/'>
              <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </Link>

            <Link target='_blank' href='https://telegram.me/ovestellar'>
              <FontAwesomeIcon icon={faTelegram} size='xl' />
            </Link>
          </section>
        </section>

        <Blob />
      </main>
    </>
  )
}
