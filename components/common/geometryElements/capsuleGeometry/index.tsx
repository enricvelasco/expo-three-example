import {FC, useRef} from "react";
import {CapsuleGeometry as CapsuleGeometryThree, Mesh} from "three";

interface CapsuleGeometrySizeProps {
  radius: number;
  height: number;
  capSegments?: number;
  radialSegments?: number;
  heightSegments?: number;
}

interface CapsuleGeometryProps {
  color?: string;
  size?: CapsuleGeometrySizeProps;
  showEdges?: boolean;
}

export const CapsuleGeometry: FC<CapsuleGeometryProps> = ({
    color = 'green',
    showEdges = false,
    size = {
      radius: 0.5,
      height: 0.5,
      capSegments: 10,
      radialSegments: 20,
      heightSegments: 1,
    }
  }) => {
  const {
    radius,
    height,
    capSegments,
    heightSegments,
    radialSegments,
  } = size;

  return (
      <>
        <capsuleGeometry args={[radius, height, capSegments, radialSegments, heightSegments]} />
        <meshStandardMaterial color={color} />
        {showEdges && (
            <lineSegments>
              <edgesGeometry attach="geometry" args={[new CapsuleGeometryThree(radius, height, capSegments, radialSegments, heightSegments)]} />
              <lineBasicMaterial attach="material" color="black" />
            </lineSegments>
        )}
      </>
  )
};
