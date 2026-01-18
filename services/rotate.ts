import {RefObject} from "react";
import {BufferGeometry, BufferGeometryEventMap, Material, Mesh, NormalBufferAttributes, Object3DEventMap} from "three";

export interface RotateProps {
  meshRef:  RefObject<Mesh<BufferGeometry<NormalBufferAttributes, BufferGeometryEventMap>, Material | Material[], Object3DEventMap>>
  speed: number;
  axis: 'x' | 'y';
}

export const rotatePolygon = ({ meshRef, axis, speed }: RotateProps) => {
  meshRef.current.rotation[axis] += speed
}
