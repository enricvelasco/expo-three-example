import {FC, useRef} from "react";
import {Mesh, Object3D} from "three";

interface GeometryWrapperProps {
  position?: [number, number, number];
  children: React.ReactNode;
  onClick?: (target: Object3D) => void;
}

export const GeometryWrapper: FC<GeometryWrapperProps> = ({ children, position, onClick }) => {
  const meshRef = useRef<Mesh>(null!)

  return (
    <mesh ref={meshRef} position={position} onClick={(e) => {
      e.stopPropagation();
      console.log('clicked???', e.object.uuid)
      onClick?.(e.object)
    }}>
      {children}
    </mesh>
  )
}
