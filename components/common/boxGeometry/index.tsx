import {FC, useRef} from "react";
import {Mesh} from "three";
import {Edges} from "@react-three/drei";

interface BoxGeometryProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  showEdges?: boolean;
}

export const BoxGeometry: FC<BoxGeometryProps> = ({
    position,
    size = 1,
    color = 'green',
    showEdges = false,
  }) => {
  const meshRef = useRef<Mesh>(null!)

  return (
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} />
        {showEdges && <Edges scale={1} color="black"/>}
      </mesh>
  )
};
