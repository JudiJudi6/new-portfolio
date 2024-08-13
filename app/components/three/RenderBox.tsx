import React from "react";
import * as THREE from "three";

interface RenderBoxProps {
  x: number;
  y: number;
  z: number;
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  color?: string;
}

export default function RenderBox({
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  x,
  y,
  z,
  color,
}: RenderBoxProps) {
  return (
    <mesh
      position={[positionX, positionY, positionZ]}
      rotation={[
        THREE.MathUtils.degToRad(rotateX),
        THREE.MathUtils.degToRad(rotateY),
        THREE.MathUtils.degToRad(rotateZ),
      ]}
      receiveShadow
      castShadow={true}
    >
      <boxGeometry args={[x, y, z]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
