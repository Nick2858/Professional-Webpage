import "../App.css";
import Model from "./FullDemoGenDeci";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle" style={{ fontSize: "80px" }}>
        Projects
      </h1>
      <div className="canvas">
        <Canvas>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Model scale={0.015} />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default ProjectsPage;
