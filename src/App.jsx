import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Square } from "../assets/Square";
import { Character } from "../assets/Comp_character";
import { OrbitControls } from "@react-three/drei";
import { House } from "../assets/Comp_house";
import { useEffect, useState } from "react";

function App() {
  const [charPosition, setCharPosition] = useState([0, 0, 0]);
  const [boxPosition1, setBoxPosition1] = useState({ x: 10, y: 0, z: 0 });
  const [boxPosition2, setBoxPosition2] = useState(undefined);
  const worldState = {
    box1: boxPosition1,
    box2: boxPosition2,
  };
  useEffect(() => {
    console.log(boxPosition1, boxPosition2);
  }, [worldState.boxPosition1]);
  return (
    <Canvas
      style={{ background: "#171717", width: "95dvw", height: "95dvh" }}
      camera={{ fov: 90, position: [0, 30, 40] }}
    >
      {/* <ambientLight intensity={1} /> */}
      <spotLight
        intensity={0.5}
        angle={0.5}
        penumbra={1}
        position={[0, 100, 30]}
        castShadow
      />
      <Square position={[-15, 0, 15]} callback={setBoxPosition1} />
      <Square position={[10, 0, 0]} callback={setBoxPosition2} />
      <Square position={[-20, 0, 0]} callback={setBoxPosition2} />
      <Square position={[0, 0, 0]} callback={setBoxPosition2} plane />
      <House />
      <Character worldState={worldState} />
      {/* <gridHelper args={[50, 50, "red", "red"]} /> */}
      <axesHelper />
    </Canvas>
  );
}

export default App;
