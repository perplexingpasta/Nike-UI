import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shoe2 from "../../public/shoe2/Shoe2.jsx";

const Shoe3dModel = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Shoe2 />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Shoe3dModel;
