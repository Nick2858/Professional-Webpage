import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <div className="NavBar">
        <Link
          className="NavPages"
          to="Home"
          activeClass="activeNavPages"
          spy={true}
          style={{ color: "white" }}
        >
          {" "}
          Home{" "}
        </Link>

        <Link
          className="NavPages"
          to="About"
          activeClass="activeNavPages"
          spy={true}
          style={{ color: "white" }}
        >
          {" "}
          About{" "}
        </Link>

        <Link
          className="NavPages"
          to="Projects"
          activeClass="activeNavPages"
          spy={true}
          style={{ color: "white" }}
        >
          {" "}
          Projects{" "}
        </Link>
      </div>

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
