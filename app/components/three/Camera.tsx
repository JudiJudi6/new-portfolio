import { lerp, scalePercent } from "@/utils/mathHelpers";
import { useFrame, useThree } from "@react-three/fiber";
import { ISheet, val } from "@theatre/core";
import React, { useEffect, useState } from "react";
import { PCFSoftShadowMap, Vector3 } from "three";

interface CameraProps {
  scrollY: number;
  sheet: ISheet;
}

export default function Camera({ scrollY, sheet }: CameraProps) {
  const sequenceLength = 4;
  const { gl, camera } = useThree();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPercent, setScrollPercent] = useState<number>(
    (scrollY - 2 * window.innerHeight) / (window.innerHeight * 10)
  );
  const animationScripts: { start: number; end: number; func: () => void }[] =
    [];

  // function playScrollAnimations() {
  //   animationScripts.forEach((a) => {
  //     if (scrollPercent >= a.start && scrollPercent < a.end) {
  //       a.func();
  //     }
  //   });
  // }

  // animationScripts.push({
  //   start: 0,
  //   end: 60,
  //   func: () => {
  //     camera.position.set(0, 1, 2);
  //     // cube.rotation.z = lerp(0, Math.PI, scalePercent(scrollPercent, 40, 60));
  //     //console.log(cube.rotation.z)
  //   },
  // });

  useEffect(
    function () {
      const cameraPositionFromTheatre = camera.position;

      const targetPosition = new Vector3(
        cameraPositionFromTheatre.x + mousePos.x * 0.1,
        cameraPositionFromTheatre.y,
        cameraPositionFromTheatre.z
      );

      camera.position.set(Math.min(targetPosition.x, 1), targetPosition.y, targetPosition.z);
    },
    [mousePos.x, camera.position]
  );

  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = PCFSoftShadowMap;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gl]);

  useFrame(() => {
    // Obsługa przewijania i animacji Theatre.js
    const startScroll = scrollY - 2 * window.innerHeight;
    const position = (startScroll / (4 * window.innerHeight)) * sequenceLength;
    if (position > 0) sheet.sequence.position = position;

    // playScrollAnimations();
    // const unsubscribe = obj.onValuesChange((values) => {
    //   div.style.left = values.x + "px";
    // });

    // // let's clean up our subscriptions before detaching the object
    // unsubscribe();
    // sheet.detachObject("obj");

    // camera.lookAt(0, 0, 0); // Można dostosować punkt patrzenia
  });

  return null; // Komponent nie renderuje nic
}
