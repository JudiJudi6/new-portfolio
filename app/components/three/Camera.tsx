import { lerp } from "@/utils/mathHelpers"; // Zakładam, że masz funkcję lerp
import { useFrame } from "@react-three/fiber";
import { ISheet, val } from "@theatre/core";
import React, { useMemo } from "react";
import { Vector3 } from "three";

interface CameraProps {
  scrollY: number;
  sheet: ISheet;
}

export default function Camera({ scrollY, sheet }: CameraProps) {
  const sequenceLength = 4;
  useFrame(() => {
    // Zakładając, że scrollY jest większe niż 2 * window.innerHeight
    const startScroll = scrollY - 2 * window.innerHeight; // Normalizujemy scrollY
    const position = (startScroll / (4 * window.innerHeight)) * sequenceLength;

    // Ustawiamy pozycję sekwencji w zależności od przewijania
    sheet.sequence.position = position;
  });

  return null; // Komponent nie renderuje nic
}
