import { useLoader, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { LinearFilter, TextureLoader } from "three";

export default function MonitorScreen() {
  const { gl } = useThree();

  const texture = useLoader(TextureLoader, "/bitchain.jpg");

  useEffect(() => {
    if (texture) {
      texture.minFilter = LinearFilter; // Filtr dla mniejszych tekstur
      texture.magFilter = LinearFilter; // Filtr dla większych tekstur
      texture.generateMipmaps = false; // Generowanie MIP map
      texture.needsUpdate = true;
      texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    }
  }, [texture]);
  return (
    <>
      {/* <mesh position={[-1.1, 1, -1.837]} receiveShadow castShadow={true}>
        <boxGeometry args={[0.5, 0.2, 0.001]} />
        <meshBasicMaterial map={texture} />
      </mesh> */}
    </>
  );
}
