import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native'
import {AssetComponentModelViewer} from "@/components/common/assetModelViewer";

export default function HomeScreen() {
  return (
      <>
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls />
          <Suspense>
            <AssetComponentModelViewer
                asset={require('@/assets/glb/bookOpen.glb')}
                rotation={[0.3, 0.5, 0]}
                scale={5}
                position={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>
        <Canvas>
          <ambientLight intensity={2} />
          {/*<directionalLight position={[10, 10, 5]} intensity={1} />*/}
          <OrbitControls />
          <Suspense>
            <AssetComponentModelViewer
                asset={require('@/assets/glb/blueBook.glb')}
                rotation={[0.3, 0.5, 0]}
                scale={2}
                position={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>
      </>
  );
}
