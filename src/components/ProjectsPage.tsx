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

const DisableRender = () => useFrame(() => null, 1000);
const DisableRender2 = () => useFrame(() => null, 1000);

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle" style={{ fontSize: "min(80px,6vw)" }}>
        Projects
      </h1>
      {/* <ProjectsCarousel /> */}
    </div>
  );
}

export default ProjectsPage;
