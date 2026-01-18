import { Suspense } from 'react'
import { Canvas, ThreeElements } from '@react-three/fiber/native'
import { useGLTF, OrbitControls } from '@react-three/drei/native'
import modelPath from '../assets/glb/blueBook.glb'

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

function Model(props: ModelProps) {
  const gltf = useGLTF(modelPath)
  return <primitive {...props} object={gltf.scene} />
}

export default function HomeScreen() {
  return (
      <Canvas>
        <ambientLight intensity={2} />
        {/*<directionalLight position={[10, 10, 5]} intensity={1} />*/}
        <OrbitControls />
        <Suspense>
          <Model
              scale={1}
              position={[0, 0, 0]}
              rotation={[0.3, 0.4, 0]}
          />
        </Suspense>
      </Canvas>
  );
}
