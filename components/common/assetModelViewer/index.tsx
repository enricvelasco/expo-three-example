import {FC} from "react";
import {AssetModelProps} from "@/components/common/assetModelViewer/models";
import {useGLTF} from "@react-three/drei/native";
import { Object3D } from 'three'

export const AssetComponentModelViewer: FC<AssetModelProps> = (props) => {
  const { asset } = props;
  const gltf = useGLTF(asset)
  return <primitive {...props} object={gltf.scene as Object3D} />
};
