import {Canvas} from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native'
import {CapsuleGeometry} from "@/components/common/capsuleGeometry";

export default function HomeScreen() {
  return (
      <>
        <Canvas>
          <ambientLight intensity={0.2} />
          <directionalLight
              color="white"
              intensity={1}
              position={[-5, 5, 5]}
          />
          <OrbitControls position0={[0, 0, 0]} />
          <CapsuleGeometry
              position={[0, 0, 0]}
              size={{
                radius: 1,
                height: 1,
                capSegments: 10,
                radialSegments: 20,
                heightSegments: 1,
              }}
          />  {/* capsula */}
        </Canvas>
      </>
  );
}
