import { Canvas } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import { OrbitControls, OrbitControlsProps } from "@react-three/drei";
import RenderBox from "../three/RenderBox";
import AxesHelper from "../three/AxesHelper";
import Light from "../three/Light";

interface BackgroundProps {
  distance: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

export default function Background({ distance, scrollbar }: BackgroundProps) {
  const sticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollbar.current?.addListener(function (status) {
      const offset = status.offset;

      if (sticky.current) {
        if (offset.y < window.innerHeight * 7) {
          sticky.current.style.top = offset.y + "px";
          sticky.current.style.left = offset.x + "px";
        }
      }
    });
  }, [distance]);

  return (
    <div ref={sticky} className="sticky top-0 left-0 w-full h-screen ">
      <Canvas
        camera={{
          zoom: 1,
          position: [0, 2, 0],
        }}
        shadows={true}
      >
        <RenderBox x={4} y={0.1} z={4} />
        <RenderBox x={0.1} y={1} z={4} positionX={-2} positionY={0.5} />
        <RenderBox
          x={0.1}
          y={2.1}
          z={4}
          positionX={-1.25}
          positionY={1.75}
          rotateZ={-45}
        />
        <RenderBox x={2.5} y={0.1} z={4} positionY={2.5} positionX={0.75} />
        <RenderBox x={4} y={2.5} z={0.1} positionY={1.25} positionZ={-2} />
        {/* <RenderBox x={0.001} y={1} z={0.01} positionY={0.5} positionZ={-1.945} positionX={-1.9} /> */}
       
        <ambientLight intensity={0.01} />
        <Light />
        {/* <directionalLight
          castShadow={true}
          position={[5, 100, 0]}
          intensity={1}
          color="#fff"
          shadow-mapSize-width={20}
          shadow-mapSize-height={20}
          shadow-camera-left={-30}
          shadow-camera-right={20}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
          shadow-camera-far={200}
        /> */}
        <OrbitControls
          enableDamping={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
        <AxesHelper />
      </Canvas>
    </div>
  );
}
