import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import { OrbitControls, OrbitControlsProps } from "@react-three/drei";
import RenderBox from "../three/RenderBox";
import AxesHelper from "../three/AxesHelper";
import Light from "../three/Light";
import Render3D from "../three/Render3D";
import MonitorLight from "../three/MonitorLight";
import LampLight from "../three/LampLight";
import MonitorScreen from "../three/MonitorScreen";
import Camera from "../three/Camera";
// @ts-ignore
import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  OrthographicCamera,
} from "@theatre/r3f";
import { getProject } from "@theatre/core";

interface BackgroundProps {
  distance: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

export default function Background({ distance, scrollbar }: BackgroundProps) {
  const sticky = useRef<HTMLDivElement>(null);
  const [lamp, setLamp] = useState(false);
  const [leds, setLeds] = useState(true);

  useEffect(() => {
    scrollbar.current?.addListener(function (status) {
      const offset = status.offset;

      if (sticky.current) {
        if (offset.y < window.innerHeight * 6) {
          sticky.current.style.top = offset.y + "px";
          sticky.current.style.left = offset.x + "px";
        }
      }
    });
  }, [distance]);

  return (
    <div ref={sticky} className="sticky top-0 left-0 w-full h-screen bg-black">
      <Canvas shadows={true} className="w-full h-full" orthographic>
        <SheetProvider sheet={demoSheet}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[-1, 1.2, -1]}
            fov={90}
            lookAt={[-1, 1, -1.837]}
          />
          <e.group theatreKey="Group">
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
            <RenderBox x={0.1} y={2.8} z={4} positionX={2} positionY={1.4} />
            <RenderBox x={2.5} y={0.1} z={4} positionY={2.5} positionX={0.75} />
            <RenderBox
              x={4}
              y={2.5}
              z={0.1}
              positionY={1.25}
              positionZ={-2}
              color="#8e8e8e"
            />
            <RenderBox
              x={0.07}
              y={0.05}
              z={0.4}
              positionY={0.05}
              positionZ={-1.7}
              positionX={-1.5}
              color="#adadad"
            />
            <RenderBox
              x={0.07}
              y={0.05}
              z={0.4}
              positionY={0.05}
              positionZ={-1.7}
              positionX={-0.6}
              color="#adadad"
            />
            <RenderBox
              x={0.06}
              y={0.6}
              z={0.06}
              positionY={0.1}
              positionZ={-1.7}
              positionX={-0.6}
              color="#adadad"
            />
            <RenderBox
              x={0.05}
              y={0.6}
              z={0.05}
              positionY={0.4}
              positionZ={-1.7}
              positionX={-0.6}
              color="#adadad"
            />
            <RenderBox
              x={0.06}
              y={0.6}
              z={0.06}
              positionY={0.1}
              positionZ={-1.7}
              positionX={-1.5}
              color="#adadad"
            />
            <RenderBox
              x={0.05}
              y={0.6}
              z={0.05}
              positionY={0.4}
              positionZ={-1.7}
              positionX={-1.5}
              color="#adadad"
            />
            <RenderBox
              x={1.1}
              y={0.01}
              z={0.5}
              positionY={0.7}
              positionZ={-1.7}
              positionX={-1.05}
              color="#8e8e8e"
            />
            <Render3D
              path="pc_setup_single_monitor"
              x={-1.1}
              y={0.7}
              z={-1.9}
              scale={0.4}
              rotY={90}
              color="#333333"
            />
            <Render3D
              path="lamp"
              x={-0.6}
              y={0.7}
              z={-1.8}
              scale={0.3}
              rotY={130}
              color="#626262"
            />
            <MonitorScreen />
            <ambientLight intensity={0.02} />
            <Light leds={leds} />
            <MonitorLight />
            <LampLight lamp={lamp} />
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
            {/* <OrbitControls
              enableDamping={false}
              // minPolarAngle={0}
              // maxPolarAngle={Math.PI / 2 - 0.1}
            /> */}
            <AxesHelper />
          </e.group>
        </SheetProvider>
      </Canvas>
    </div>
  );
}
