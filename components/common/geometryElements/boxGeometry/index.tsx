import {FC} from "react";
import { BoxGeometry as BoxGeometryThree} from "three";

interface BoxGeometryProps {
  color?: string;
  size?: {
    width?: number;
    height?: number;
    depth?: number;
  };
  showEdges?: boolean;
}

export const BoxGeometry: FC<BoxGeometryProps> = ({
    size = {
      width: 1,
      height: 1,
      depth: 1,
    },
    color = 'green',
    showEdges = false,
  }) => {

  const {
    width,
    height,
    depth
  } = size

  return (
      <>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} />
        {showEdges && (
            <lineSegments>
              <edgesGeometry attach="geometry" args={[new BoxGeometryThree(width, height, depth)]} />
              <lineBasicMaterial attach="material" color="black" />
            </lineSegments>
        )}
      </>
  )
};
