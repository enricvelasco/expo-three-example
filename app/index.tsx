import {Canvas} from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native'
import {GeometryWrapper} from "@/components/common/geometryWrapper";
import {BoxGeometry} from "@/components/common/geometryElements/boxGeometry";
import {Vector3} from "three";
import {useCameraZoomToTarget} from "@/hooks/useCameraZoomTarget";

export const Scene = () => {
  const { onSetTarget } = useCameraZoomToTarget(new Vector3(0, 0, 5));
  return (
      <>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <group>
          <GeometryWrapper position={[0, 0, 0]} onClick={onSetTarget}>
            <BoxGeometry
                color={'red'}
                size={{width: 1.5, height: 2.5, depth: 0.1}}
            />
          </GeometryWrapper>
          <GeometryWrapper position={[-1.5, 0, -1.5]} onClick={onSetTarget}>
            <BoxGeometry
                color={'blue'}
                size={{width: 1.5, height: 2.5, depth: 0.1}}
            />
          </GeometryWrapper>
          <GeometryWrapper position={[1.5, 0, -1.5]} onClick={onSetTarget}>
            <BoxGeometry
                color={'yellow'}
                size={{width: 1.5, height: 2.5, depth: 0.1}}
            />
          </GeometryWrapper>
        </group>
        <OrbitControls />
      </>
  );
}

export default function HomeScreen() {
  return (
      <>
        <Canvas>
          <Scene />
        </Canvas>
      </>
  );
}
