import "../App.css";
import Model from "./FullDemoGenDeci";
import Model2 from "./MouseAirWaysImage";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Projects from "../assets/projects.json";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ProjectsCarousel from "./CarouselSlide";
import { Carousel } from "react-bootstrap";

const DisableRender = () => useFrame(() => null, 1000);
const DisableRender2 = () => useFrame(() => null, 1000);

function ProjectsPage() {
  {
    /*const { inView: inView1, ref: ref1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { inView: inView2, ref: ref2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  var a = new THREE.Vector3(-10, 5, 1); //tilted a bit on x and y - feel free to plug your different axis here
  var b = new THREE.Vector3(10, 20, 1); //tilted a bit on x and y - feel free to plug your different axis here
*/
  }
  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle" style={{ fontSize: "10vh" }}>
        Projects
      </h1>
      <ProjectsCarousel />
      {/*<div className="ProjectDisplay">
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
                <img className="Icon" src="./github-mark-white.svg"></img>
              </a>
              Branch Builder
            </h1>
            <body
              className="ProjectInfo"
              style={{
                color: "white",
                fontSize: "25px",
                padding: " 0 10px 30px 10px",
              }}
            >
              {" "}
              A python script in Blender that allows you to convert lung airway
              data from a CSV file into hollow 3D STL branch objects. This
              program is intended for researchers looking to analyze CFD models
              of airways. Interact with 3D demo on the right by dragging cursor
              (demo airway data from Schmidt et al 2004). Press the Github logo
              to learn more.
            </body>
          </div>
          <div className="canvas" ref={ref1}>
            <Canvas>
              {!inView1 && <DisableRender />}
              <ambientLight intensity={1} />
              <spotLight
                color={"#880808"}
                intensity={30}
                distance={0}
                angle={3.14}
                penumbra={0.4}
                decay={0.1}
                position={a}
              />
              <Suspense fallback={null}>
                <Model scale={0.02} />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
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
              Airway Imaging
            </h1>
            <body
              className="ProjectInfo"
              style={{
                color: "white",
                fontSize: "25px",
                padding: " 0 10px 30px 10px",
              }}
            >
              {" "}
              Lung Images of Mice.
            </body>
          </div>
          <div className="canvas" ref={ref2}>
            <Canvas>
              {!inView2 && <DisableRender2 />}
              <ambientLight intensity={1} />
              <spotLight
                color={"#880808"}
                intensity={30}
                distance={0}
                angle={3.14}
                penumbra={0.4}
                decay={0.4}
                position={a}
              />

              <Suspense fallback={null}>
                <Model2 scale={0.004} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
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
                href="https://github.com/Nick2858/Sign-Language-Interpreter"
                target="_blank"
                style={{ padding: " 0 20px 0 0" }}
              >
                <img className="Icon" src="./github-mark-white.svg"></img>
              </a>
              Alphabetic Sign Language Interpreter
            </h1>
            <body
              className="ProjectInfo"
              style={{
                color: "white",
                fontSize: "25px",
                padding: " 0 10px 30px 10px",
              }}
            >
              {" "}
              This is a project I developped in 2022 while I was in high school.
              It utilizes Open-CV and MediaPipe to translate alphabetical sign
              language to text on a screen with Text-To-Speech playback using
              pyttsx3.
            </body>
          </div>
          <div className="ProjectImage" style={{ height: "50vh" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RDK9m6hkhY0"
              title="SignLanguageInterpreterDemoVideo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      {Projects.map((project) => (
        <ProjectDisplay>{project}</ProjectDisplay>
      ))}*/}
    </div>
  );
}

export default ProjectsPage;
