import { useEffect, useRef } from "react";
import { Color, MathUtils, SpotLight } from "three";
import {
  editable as e,
  // @ts-ignore
} from "@theatre/r3f";
interface LampLightProps {
  lamp: boolean;
}

export default function LampLight({ lamp }: LampLightProps) {
  const color = new Color(0xffffff);

  const lightRef = useRef<SpotLight>(null);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target.position.set(-0.8, 0.8, -1.91);
      lightRef.current.target.updateMatrixWorld();
    }
  }, []);

  return (
    <>
      {/* {lamp && ( */}
      <>
        <e.spotLight
          theatreKey="lampSpotLight"
          ref={lightRef}
          color={color}
          intensity={2}
          castShadow
          position={[-0.7, 0.9, -1.9]}
          angle={MathUtils.degToRad(40)}
          penumbra={1}
          decay={2}
          distance={1}
        />
        <e.pointLight
          theatreKey="lampPointLight"
          castShadow
          color={color}
          intensity={0.4}
          distance={1}
          position={[-0.7, 0.9, -1.9]}
        />
      </>
      {/* )} */}
    </>
  );
}
