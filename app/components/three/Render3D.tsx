import { ThreeEvent, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Color, MathUtils, Mesh } from "three";
import { Clone } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
  id?: string;
  path: string;
  x: number;
  y: number;
  z: number;
  scale?: number;
  rotX?: number;
  rotY?: number;
  rotZ?: number;
  color?: string;
}

export default function Render3D({
  id,
  x,
  y,
  z,
  scale,
  rotX = 0,
  rotY = 0,
  rotZ = 0,
  path,
  color,
}: ModelProps) {
  const fileUrl = `/assets3d/${path}.glb`;
  const mesh = useRef<Mesh>(null!);
  const { scene } = useLoader(GLTFLoader, fileUrl);

  return (
    <Suspense fallback={null}>
      <mesh
        ref={mesh}
        position={[x, y, z]}
        scale={scale}
        rotation={[
          MathUtils.degToRad(rotX),
          MathUtils.degToRad(rotY),
          MathUtils.degToRad(rotZ),
        ]}
        receiveShadow
        castShadow={true}
      >
        <Clone
          object={scene}
          castShadow
          receiveShadow
          inject={<meshStandardMaterial color={new Color(color)} />}
        />
      </mesh>
    </Suspense>
  );
}
