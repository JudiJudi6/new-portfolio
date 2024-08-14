import { useEffect, useRef } from "react";
import { Color, MathUtils, SpotLight } from "three";

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
      {lamp && (
        <>
          <spotLight
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
          <pointLight
            castShadow
            color={color}
            intensity={0.4}
            distance={1}
            position={[-0.7, 0.9, -1.9]}
          />
        </>
      )}
    </>
  );
}
