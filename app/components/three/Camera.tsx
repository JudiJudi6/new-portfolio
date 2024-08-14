import { lerp } from "@/utils/mathHelpers"; // Zakładam, że masz funkcję lerp
import { useFrame } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";

interface CameraProps {
  scrollY: number;
}

export default function Camera({ scrollY }: CameraProps) {
  const height = window.innerHeight;

  // Definiujemy kluczowe punkty animacji
  const points = [
    {
      start: height * 3,
      end: height * 4,
      from: new Vector3(-1.1, 1, -0.837),
      to: new Vector3(-1.1, 1, -1.83),
    },
    // Dodaj inne punkty animacji tutaj
  ];

  useFrame((state) => {
    // Ustawienia domyślne kamery
    let position = new Vector3(-1.1, 1, -0.837);
    let target = new Vector3(-1.1, 1, -1.83);

    // Sprawdzamy, w którym zakresie przewijania jesteśmy
    points.forEach((point) => {
      if (scrollY >= point.start && scrollY < point.end) {
        // Obliczamy interpolację
        const t = (scrollY - point.start) / (point.end - point.start);
        position = lerp(point.from, point.to, t);
        target = lerp(point.from, point.to, t);
      }
    });

    // Aktualizujemy kamerę
    state.camera.position.copy(position);
    state.camera.lookAt(target);
    state.camera.updateProjectionMatrix();
  });

  return <></>;
}
