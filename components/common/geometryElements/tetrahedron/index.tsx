import {BufferGeometry,Vector3} from "three";
import {Edges} from "@react-three/drei";

export const Tetrahedron = () => {
  const vertices = [
    new Vector3(1, 1, 1),
    new Vector3(-1, -1, 1),
    new Vector3(-1, 1, -1),
    new Vector3(1, -1, -1)
  ];

  const geometry = new BufferGeometry().setFromPoints(vertices);

  geometry.setIndex([
    0,1,2,
    0,3,1,
    0,2,3,
    1,3,2
  ]);

  geometry.computeVertexNormals();

  return (
      <mesh geometry={geometry}>
        <meshStandardMaterial color="gold" />
        <Edges scale={1} color="black" />
      </mesh>
  );
};
