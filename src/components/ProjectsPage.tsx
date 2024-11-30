import "../App.css";
import Model from "./FullDemoGenDeci";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Projects from "../assets/projects.json";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

var a = new THREE.Vector3(-10, 5, 2);

function ProjectsPage() {
  const { inView: inView1, ref: ref1 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { inView: inView2, ref: ref2 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  var even = {
    textAlign: "left",
    alignItems: "left",
    justifyContent: "left",
  } as React.CSSProperties;

  var odd = {
    textAlign: "right",
    alignItems: "right",
    justifyContent: "right",
  } as React.CSSProperties;

  if (window.screen.availWidth <= 600) {
    even = {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    };

    odd = even;
  }

  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle" style={{ paddingBottom: "5vh" }}>
        Projects
      </h1>

      {/*     CUSTOM PROJECT TEMPLATES      */}

      <div className="ProjectDisplay">
        <h1 className="ProjectHeader" style={even}>
          Branch Builder
        </h1>
        <div className="Line"> </div>
        <div className="ProjectInfo">
          <div className="ProjectImage">
            <div className="canvas" ref={ref1}>
              <h1
                className="ProjectText"
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "600",
                }}
              >
                {" "}
                Drag to Move
              </h1>
              {inView1 && (
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
              )}
            </div>

            <span
              className="ProjectText"
              style={{
                textAlign: "center",
                width: "100%",
                wordWrap: "break-word",
              }}
            >
              <p>
                Data From{" "}
                <a href="https://simtk.org/projects/lungsim">
                  {" "}
                  https://simtk.org/projects/lungsim
                </a>
              </p>
            </span>
          </div>
          <div className="ProjectText">
            {" "}
            A python script in Blender that allows you to convert lung airway
            data from a CSV file into hollow 3D STL branch objects for CFD
            analysis. This is a script I developped during my summer research
            position in the Latner Thoracic Research Laboratories and Bazylak
            Group. The data in each row of the CSV file corresponds to a branch.
            The program iterates through each row one at a time to build, clean,
            hollow and export branch STL files one at a time. After each branch
            has been created, the program groups the STL files by their
            generation number and lobe number using the data stored in their
            naming convention. A challenge that I had to overcome to build this
            program was that blender is not capable of handing large amounts
            mesh geometries, thus to overcome this, each branch had to be build
            individually and then grouped together as a final step. To test the
            program, I built the Human Airway Model using branch data from
            Schmidt et al 2004. This model contains over 3000 branches and has
            branches up to 17 generations.
            <div className="JobSkills">
              {["Python", "Blender", "Problem Solving"].map((skill) => (
                <div className="Skill" style={{ fontSize: "0.7em" }}>
                  {" "}
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectDisplay">
        <h1 className="ProjectHeader" style={odd}>
          Mouse Airway Imaging
        </h1>
        <div className="Line"> </div>
        <div className="ProjectInfo">
          <div className="ProjectText">
            {" "}
            Part of my research with the Latner Thoracic Research Laboratories
            and Bazylak Group involved developing a procedure for mouse airway
            imaging under micro-Computed Tomography. The previous methods for
            imaging mouse airways in the lab involved using procedures
            developped for mouse lung vasculature, however, when applied to
            airways this led to leakages and poor results from imaging. After
            rigorous literature review and many trials, we developped a
            procedure for our lab that involved injecting a mixture of Room
            Temperature Vulcanizing Silicon Rubber casting material with
            MICROFIL into Mouse lung airways. The Silicon Rubber casting
            material helped to prevent leakages while the contrast agents in the
            MICROFIL improved the quality of the images produced from micro-CT
            scans.
            <div className="JobSkills">
              {["Biomedical Research", "Micro-CT Imaging", "MATLAB"].map(
                (skill) => (
                  <div className="Skill" style={{ fontSize: "0.7em" }}>
                    {" "}
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectDisplay">
        <h1 className="ProjectHeader" style={even}>
          Alphabetic Sign Language Interpreter
        </h1>
        <div className="Line"> </div>
        <div className="ProjectInfo">
          <div className="ProjectImage" style={{ aspectRatio: "4/3" }}>
            <a
              href="https://www.youtube.com/embed/RDK9m6hkhY0"
              target="_BLANK"
              style={{ textDecoration: "none" }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%",
                }}
                src="https://img.youtube.com/vi/RDK9m6hkhY0/0.jpg"
              />
              <h1
                className="ProjectText"
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {" "}
                Press to Watch Video
              </h1>
            </a>
          </div>
          <div className="ProjectText">
            {" "}
            This is a project I developped in 2022 while I was in high school.
            It utilizes OpenCV and MediaPipe to translate alphabetical sign
            language to text on a screen with Text-To-Speech playback using
            pyttsx3. It works by using MediaPipe libraries to detect hands and
            output the coordinates of different features. From here, a series of
            functions was coded for each letter which compare the coordinates of
            differet features (e.g. the tip of the index compared to a joint in
            the thumb) to determine which letter is being displayed.
            <div className="JobSkills">
              {["Python", "OpenCV", "MediaPipe", "Computer Vision"].map(
                (skill) => (
                  <div className="Skill" style={{ fontSize: "0.7em" }}>
                    {" "}
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectDisplay">
        <h1 className="ProjectHeader" style={odd}>
          Journey Mapping Project (APS112)
        </h1>
        <div className="Line"> </div>
        <div className="ProjectInfo">
          <div className="ProjectImage" style={{ aspectRatio: "4/3" }}>
            <a
              href="https://www.youtube.com/embed/HPTkwMy9wlY"
              target="_BLANK"
              style={{ textDecoration: "none" }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%",
                }}
                src="https://img.youtube.com/vi/HPTkwMy9wlY/0.jpg"
              />
              <h1
                className="ProjectText"
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {" "}
                Press to Watch Video
              </h1>
            </a>
          </div>
          <div className="ProjectText">
            As part of a team of six first-year Engineering students in my
            Engineering Strategies and Practices II course (APS112), we
            developed a tool to visualize the effects of one-way conversions on
            driving routes for the City of Toronto Cyclists and Pedestrian's
            Team. This was achieved using OpenStreetMap Editor to built and
            export custom traffic restrictions to a JSON file. This file was
            then processed in Python and used to display custom routes on MapBox
            API in JavaScript.
            <div className="JobSkills">
              {[
                "Python",
                "JavaScript",
                "Flask",
                "OpenStreetMaps",
                "NetworkX",
                "Team Work",
                "Communication",
              ].map((skill) => (
                <div className="Skill" style={{ fontSize: "0.7em" }}>
                  {" "}
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
        "id":1,
        "projectTitle": "Journey Mapping Project (APS112)",
        "description": "As part of a team of six first-year Engineering students in my Engineering Strategies and Practices II course (APS112), we developed a tool to visualize the effects of one-way conversions on driving routes for the City of Toronto Cyclists and Pedestrian's Team. This was achieved using OpenStreetMap Editor to built and export custom traffic restrictions to a JSON file. This file was then processed in Python and used to display custom routes on MapBox API in JavaScript. ",
        "link": "https://github.com/Nick2858/Journey-Mapping-Project",
        "picture": "./projectsPics/PWProjectRoute1.png",
        "skills": ["Python", "JavaScript", "Flask", "OpenStreetMaps", "NetworkX","Team Work", "Communication"]
      */}

      {/*     PRESET TEMPLATES      */}

      {Projects.map((project) => (
        <ProjectDisplay>{project}</ProjectDisplay>
      ))}
    </div>
  );
}

export default ProjectsPage;
