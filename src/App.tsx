import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Element name="Home">
        <LandingPage />
      </Element>
      <Element name="About" id="About">
        <AboutPage />
      </Element>
      <Element name="Projects">
        <ProjectsPage />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
