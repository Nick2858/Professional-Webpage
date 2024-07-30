import "../App.css";
import Model from "./FullDemoGenDeci";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Projects from "../assets/projects.json";
import { useInView } from "react-intersection-observer";

const DisableRender = () => useFrame(() => null, 1000);

function ProjectsPage() {
  const { ref, inView } = useInView();
  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle" style={{ fontSize: "80px" }}>
        Projects
      </h1>
      <div className="ProjectDisplay">
        <div className="InfoGrid">
          <div className="ProjectInfo">
            <h1
              style={{
                padding: "20px 0 10px 10px",
                color: "white",
                fontSize: "50px",
              }}
            >
              <a
                href="https://github.com/Nick2858/Branch-Builder"
                target="_blank"
                style={{ padding: " 0 20px 0 0" }}
              >
                <img className="Icon" src="/github-mark-white.svg"></img>
              </a>
              Branch Builder
            </h1>
            <body
              className="ProjectInfo"
              style={{
                color: "white",
                fontSize: "30px",
                padding: " 0 10px 30px 10px",
              }}
            >
              {" "}
              A python script in Blender that allows you to convert lung airway
              data from a CSV file into 3D STL branch objects for CFD analysis.
              Interact with the 3D airway demo on the right by dragging with
              your cursor. Demo airway data from Schmidt et al 2004. Press the
              Github logo to learn more.
            </body>
          </div>
          <div className="canvas" ref={ref}>
            <Canvas>
              {!inView && <DisableRender />}
              <ambientLight intensity={1} />
              <Suspense fallback={null}>
                <Model scale={0.02} />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      {Projects.map((project) => (
        <ProjectDisplay>{project}</ProjectDisplay>
      ))}
    </div>
  );
}

export default ProjectsPage;
