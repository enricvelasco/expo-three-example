import {Canvas} from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native'
import {Cube} from "@/components/common/cube";

export default function HomeScreen() {
  return (
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 2]} intensity={1} color={'yellow'} />
        <OrbitControls />
        <Cube position={[0, 0, 0]} />
      </Canvas>
  );
}
