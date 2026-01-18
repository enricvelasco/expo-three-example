import {RefObject} from "react";
import { Mesh} from "three";
import {useFrame} from "@react-three/fiber/native";
import {rotatePolygon} from "@/services/rotate";

export interface UseRotatePolygonProps {
  meshRef: RefObject<Mesh>;
  rotateXSpeed?: number;
  rotateYSpeed?: number;
  hasRotateX?: boolean;
  hasRotateY?: boolean;
}

export const useRotatePolygon = ({
   meshRef,
   rotateXSpeed = 0.01,
   rotateYSpeed = 0.01,
   hasRotateX = true,
   hasRotateY = true,
 }: UseRotatePolygonProps): void => {
  useFrame(() => {
    hasRotateX && rotatePolygon({ meshRef, axis: "x", speed: rotateXSpeed });
    hasRotateY && rotatePolygon({ meshRef, axis: "y", speed: rotateYSpeed });
  });
};
