import {FC, useRef} from "react";
import {Mesh} from "three";
import {Edges} from "@react-three/drei";

interface CapsuleGeometrySizeProps {
  radius: number;
  height: number;
  capSegments?: number;
  radialSegments?: number;
  heightSegments?: number;
}

interface CapsuleGeometryProps {
  position?: [number, number, number];
  color?: string;
  size?: CapsuleGeometrySizeProps;
  showEdges?: boolean;
}

export const CapsuleGeometry: FC<CapsuleGeometryProps> = ({
    position,
    color = 'green',
    showEdges = false,
    size = {
      radius: 1,
      height: 1,
      capSegments: 4,
      radialSegments: 8,
      heightSegments: 1,
    }
  }) => {
  const meshRef = useRef<Mesh>(null!)

  const {
    radius,
    height,
    capSegments,
    heightSegments,
    radialSegments,
  } = size;

  return (
      <mesh ref={meshRef} position={position}>
        <capsuleGeometry args={[radius, height, capSegments, radialSegments, heightSegments]} />
        <meshStandardMaterial color={color} />
        {showEdges && <Edges scale={1} color="black"/>}
      </mesh>
  )
};
