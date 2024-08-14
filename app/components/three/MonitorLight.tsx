import { useEffect, useRef } from "react";
import { Color, MathUtils, RectAreaLight } from "three";

export default function MonitorLight() {
  const color = new Color(0xffffff);

  const lightRef = useRef<RectAreaLight>(null);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.rotation.set(0, MathUtils.degToRad(180), 0);
    }
  }, []);

  return (
    <>
      <rectAreaLight
        ref={lightRef}
        color={color}
        intensity={1.5}
        width={0.5}
        height={0.2}
        position={[-1.1, 1, -1.85]}
      />
    </>
  );
}
