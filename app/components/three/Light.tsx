import React, { useEffect, useRef } from "react";
import { PointLight, Color, Vector3, RectAreaLight, MathUtils } from "three";
import { useHelper } from "@react-three/drei";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
// import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

export default function Lights() {
  const color = new Color(0x990099);

  const lightRef = useRef<RectAreaLight>(null);
  const lightRef2 = useRef<RectAreaLight>(null);
  const lightRef3 = useRef<RectAreaLight>(null);
  const lightRef4 = useRef<RectAreaLight>(null);
  //   const lightRef5 = useRef<RectAreaLight>(null);
  //   const lightRef6 = useRef<RectAreaLight>(null);

  //   useHelper(lightRef4, RectAreaLightHelper, 1, "red");

  useEffect(() => {
    if (
      lightRef.current &&
      lightRef2.current &&
      lightRef3.current &&
      lightRef4.current
      //   lightRef5.current &&
      //   lightRef6.current
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
      //   lightRef5.current.lookAt(new Vector3(2, 0.53, -2));
      //   lightRef6.current.lookAt(new Vector3(-2, 0.53, 2));
    }
  }, []);

  return (
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
      {/* <rectAreaLight
        ref={lightRef5}
        color="white"
        intensity={0.8}
        width={0.05}
        height={0.9}
        position={[-1.944, 0.53, -1.951]}
      />
      <rectAreaLight
        ref={lightRef6}
        color="white"
        intensity={0.8}
        width={0.05}
        height={0.9}
        position={[-1.944, 0.53, -1.951]}
      /> */}
    </>
  );
}
