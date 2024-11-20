import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProjectDisplay from "./ProjectDisplay";
import Projects from "../assets/projects.json";
import Model from "./FullDemoGenDeci";
import Model2 from "./MouseAirWaysImage";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

var a = new THREE.Vector3(-10, 5, 1); 

export default class ProjectsCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={6}
        isIntrinsicHeight
        infinite={true}
        dragEnabled={false}

      >
        <ButtonBack className="carousel-button carousel-button-left">
          <img src="./planeArrow.png"></img>
        </ButtonBack>

        <Slider className="carousel-container">
          {Projects.map((project, id) => (
            <Slide index={id - 1}>
              <ProjectDisplay>{project}</ProjectDisplay>
            </Slide>
          ))}
          <Slide index={3}>
            <div className="ProjectDisplay">
              <div className="InfoGrid">
                
                <div className="ProjectInfo">
                <h1
                  style={{
                    padding: "20px 20px 10px 10px",
                    
                    color: "white",
                    fontSize: "50px",
                  }}
                >
                  Alphabetic Sign Language Interpreter
                </h1><body
                    className="ProjectInfo"
                    style={{
                      color: "white",
                      fontSize: "25px",
                      padding: " 0 10px 30px 10px",
                    }}
                  >
                    {" "}
                    This is a project I developped in 2022 while I was in high
                    school. It utilizes Open-CV and MediaPipe to translate
                    alphabetical sign language to text on a screen with
                    Text-To-Speech playback using pyttsx3.
                  </body>
                </div>
                <div
                  className="ProjectImage"
                  style={{
                    height: "50vh",
                    width: "30vw",
                    marginBottom: "2%",
                    alignContent: "center",
                  }}
                >
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
          </Slide>
          <Slide index={4}>
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
                    A python script in Blender that allows you to convert lung
                    airway data from a CSV file into hollow 3D STL branch
                    objects. This program is intended for researchers looking to
                    analyze CFD models of airways. Interact with 3D demo on the
                    right by dragging cursor (demo airway data from Schmidt et
                    al 2004).
                  </body>
                </div>
                <div className="canvas">
                  <Canvas>
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
          </Slide>
          <Slide index={5}>
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
                <div className="canvas">
                  <Canvas>
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
          </Slide>
        </Slider>
        <ButtonNext className="carousel-button carousel-button-right">
          <img src="./planeArrow.png"></img>
        </ButtonNext>
        <DotGroup className="prc-dotGroup"/>
      </CarouselProvider>
    );
  }
}
