import {FC, useRef} from "react";
import {Mesh} from "three";

interface CubeProps {
  position?: [number, number, number];
}

export const Cube: FC<CubeProps> = (props) => {
  const meshRef = useRef<Mesh>(null!)

  return (
      <mesh ref={meshRef} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
  )
};
