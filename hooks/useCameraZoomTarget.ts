import { useFrame, useThree } from '@react-three/fiber/native'
import { useState } from 'react'
import { Vector3, Object3D } from 'three'
import { easing } from 'maath'

export const useCameraZoomToTarget = (defaultPos: Vector3 = new Vector3(0, 5, 10)) => {
  const { camera } = useThree()
  const [target, setTarget] = useState<Object3D | null>(null)
  const [currentTarget, setCurrentTarget] = useState<Vector3 | null>(defaultPos)

  const onSetTarget = (newTarget: Object3D) => {
    if (target === newTarget) {
      setTarget(null)
      setCurrentTarget(defaultPos)
    } else {
      setTarget(newTarget)
      setCurrentTarget(null)
    }
  }

  useFrame((_, delta) => {
    let desiredPos: Vector3

    if (target) {
      const worldPos = new Vector3()
      target.getWorldPosition(worldPos)
      desiredPos = worldPos.clone().add(new Vector3(0, 0, 3))
      camera.lookAt(worldPos)
    } else if (currentTarget) {
      desiredPos = currentTarget
      camera.lookAt(new Vector3(0, 0, 0))
    } else {
      return
    }

    easing.damp(camera.position, 'x', desiredPos.x, 0.2, delta)
    easing.damp(camera.position, 'y', desiredPos.y, 0.2, delta)
    easing.damp(camera.position, 'z', desiredPos.z, 0.2, delta)
  })

  return { target, onSetTarget }
}
