import {ExtrudeGeometry, Shape, ShapeGeometry} from "three";
import {FC} from "react";

interface TriangleProps {
  position?: [number, number, number];
}

export const Triangle2D: FC<TriangleProps> = (props) => {
  const shape = new Shape();
  const sides = 3;
  const radius = 1;

  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
  }

  shape.closePath();

  const extrudeSettings = {
    depth: 0.3,       // grosor del “pastel”
    bevelEnabled: false // sin biseles de momento (puedes activarlos luego)
  };

  // const geometry = new ShapeGeometry(shape);
  const geometry = new ExtrudeGeometry(shape, extrudeSettings);

  return (
      <mesh geometry={geometry} {...props}>
        <meshStandardMaterial color="orange" />
      </mesh>
  )
}
