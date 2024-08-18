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
import {
  editable as e,
  // @ts-ignore
} from "@theatre/r3f";
interface LightsProps {
  leds: boolean;
}

export default function Lights({ leds }: LightsProps) {
  const color1 = new Color(0xffffff);
  const color2 = new Color(0xff00f2);

  const lightDir = useRef<DirectionalLight>(null);

  // useHelper(lightDir, DirectionalLightHelper, 2);

  const lightRef = useRef<RectAreaLight>(null);
  const lightRef2 = useRef<RectAreaLight>(null);
  const lightRef3 = useRef<RectAreaLight>(null);
  const lightRef4 = useRef<RectAreaLight>(null);

  const lightRef5 = useRef<RectAreaLight>(null);
  const lightRef6 = useRef<RectAreaLight>(null);
  const lightRef7 = useRef<RectAreaLight>(null);
  const lightRef8 = useRef<RectAreaLight>(null);

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

    if (
      lightRef5.current &&
      lightRef6.current &&
      lightRef7.current &&
      lightRef8.current
    ) {
      lightRef5.current.lookAt(new Vector3(2, 0.53, -2));
      lightRef6.current.lookAt(new Vector3(-2, 0.53, 2));
      lightRef7.current.lookAt(new Vector3(0.45, 0, -1.951));
      lightRef8.current.lookAt(new Vector3(0.45, 0, -1.951));
      lightRef8.current.rotation.set(
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
      {/* {leds && ( */}
      <>
        {/* <e.group theatreKey="Leds">
          <rectAreaLight
            ref={lightRef}
            color={color1}
            intensity={3}
            width={0.05}
            height={0.9}
            castShadow
            position={[-1.951, 0.53, -1.944]}
          />
          <rectAreaLight
            ref={lightRef2}
            color={color1}
            intensity={10}
            castShadow
            width={0.05}
            height={0.9}
            position={[-1.944, 0.53, -1.951]}
          />
          <rectAreaLight
            ref={lightRef3}
            color={color1}
            intensity={3}
            castShadow
            width={0.05}
            height={2.1}
            position={[-1.23, 1.71, -1.951]}
          />
          <rectAreaLight
            ref={lightRef4}
            color={color1}
            intensity={10}
            castShadow
            width={0.05}
            height={2.1}
            position={[-1.2, 1.72, -1.951]}
          />
        </e.group> */}

        {/* <e.group theatreKey="Leds2">
          <rectAreaLight
            ref={lightRef5}
            color={color2}
            intensity={3}
            castShadow
            width={0.05}
            height={0.9}
            position={[-1.951, 0.53, -1.944]}
          />
          <rectAreaLight
            ref={lightRef6}
            color={color2}
            intensity={10}
            castShadow
            width={0.05}
            height={0.9}
            position={[-1.944, 0.53, -1.951]}
          />
          <rectAreaLight
            ref={lightRef7}
            color={color2}
            intensity={3}
            castShadow
            width={0.05}
            height={2.1}
            position={[-1.23, 1.71, -1.951]}
          />
          <rectAreaLight
            ref={lightRef8}
            color={color2}
            intensity={10}
            castShadow
            width={0.05}
            height={2.1}
            position={[-1.2, 1.72, -1.951]}
          />
        </e.group> */}
      </>
    </>
  );
}
