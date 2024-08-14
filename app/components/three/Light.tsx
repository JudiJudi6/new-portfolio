import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  MathUtils,
  RectAreaLight,
  Vector3,
} from "three";

interface LightsProps {
  leds: boolean;
}

export default function Lights({ leds }: LightsProps) {
  const color = new Color(0xffffff);

  const lightDir = useRef<DirectionalLight>(null);

  // useHelper(lightDir, DirectionalLightHelper, 2);

  const lightRef = useRef<RectAreaLight>(null);
  const lightRef2 = useRef<RectAreaLight>(null);
  const lightRef3 = useRef<RectAreaLight>(null);
  const lightRef4 = useRef<RectAreaLight>(null);

  useEffect(() => {
    if (
      lightRef.current &&
      lightRef2.current &&
      lightRef3.current &&
      lightRef4.current
    ) {
      lightRef.current.lookAt(new Vector3(2, 0.53, -2));
      lightRef2.current.lookAt(new Vector3(-2, 0.53, 2));
      lightRef3.current.lookAt(new Vector3(0.45, 0, -1.951));
      lightRef4.current.lookAt(new Vector3(0.45, 0, -1.951));
      lightRef4.current.rotation.set(
        0,
        MathUtils.degToRad(180),
        MathUtils.degToRad(45)
      );
    }
  }, []);

  useFrame(() => {
    if (lightDir.current) {
      lightDir.current.target.position.set(-1.9, 0.9, -1.9);
      lightDir.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      {leds && (
        <>
          <rectAreaLight
            ref={lightRef}
            color={color}
            intensity={3}
            width={0.05}
            height={0.9}
            position={[-1.951, 0.53, -1.944]}
          />
          <rectAreaLight
            ref={lightRef2}
            color={color}
            intensity={10}
            width={0.05}
            height={0.9}
            position={[-1.944, 0.53, -1.951]}
          />
          <rectAreaLight
            ref={lightRef3}
            color={color}
            intensity={3}
            width={0.05}
            height={2.1}
            position={[-1.23, 1.71, -1.951]}
          />
          <rectAreaLight
            ref={lightRef4}
            color={color}
            intensity={10}
            width={0.05}
            height={2.1}
            position={[-1.2, 1.72, -1.951]}
          />
        </>
      )}
      {/* <directionalLight
        ref={lightDir}
        color="white"
        intensity={0.05}
        castShadow
        position={[2, 2, 2]}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
    </>
  );
}
