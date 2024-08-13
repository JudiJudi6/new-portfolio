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
  //   const lightRef4 = useRef<RectAreaLight>(null);
  //   const lightRef5 = useRef<RectAreaLight>(null);
  //   const lightRef6 = useRef<RectAreaLight>(null);

  // Używamy useHelper do wizualizacji RectAreaLight
  useHelper(lightRef3, RectAreaLightHelper, 1, "red");

  useEffect(() => {
    if (
      lightRef.current &&
      lightRef2.current &&
      lightRef3.current
      //   lightRef4.current &&
      //   lightRef5.current &&
      //   lightRef6.current
    ) {
      lightRef.current.lookAt(new Vector3(2, 0.53, -2));
      lightRef2.current.lookAt(new Vector3(-2, 0.53, 2));
      lightRef3.current.lookAt(new Vector3(0, 0, -2));
      //   lightRef4.current.lookAt(new Vector3(0, 0, 0));
      //   lightRef5.current.lookAt(new Vector3(2, 0.53, -2));
      //   lightRef6.current.lookAt(new Vector3(-2, 0.53, 2));
    }
  }, []);

  return (
    <>
      <rectAreaLight
        ref={lightRef}
        color="white"
        intensity={0.2}
        width={0.05}
        height={0.9}
        position={[-1.951, 0.53, -1.944]}
      />
      <rectAreaLight
        ref={lightRef2}
        color="white"
        intensity={0.8}
        width={0.05}
        height={0.9}
        position={[-1.944, 0.53, -1.951]}
      />
      <rectAreaLight
        ref={lightRef3}
        color="white"
        intensity={0.2}
        width={0.05}
        height={2.1}
        position={[-1.25, 1.75, -1.951]}
      />
      {/* <rectAreaLight
        ref={lightRef4}
        color="white"
        intensity={0.8}
        width={0.05}
        height={2}
        position={[-1.944, 1.75, -1.951]}
        rotation={[
          MathUtils.degToRad(0),
          MathUtils.degToRad(0),
          MathUtils.degToRad(-45),
        ]}
      /> */}
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
      {/* {lightsF.map((light, index) => (
        <pointLight
          key={index}
          color={color}
          intensity={0.3}
          distance={0.5}
          castShadow
          position={new Vector3(...light.position)}
        />
      ))} */}
      {/* {lightsS.map((light, index) => (
        <pointLight
          key={index}
          color={color}
          intensity={0.7}
          distance={0.5}
          castShadow
          position={new Vector3(...light.position)}
        />
      ))} */}
    </>
  );
}
