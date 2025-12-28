import "../App.css";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <Element name="Home" id="Home">
        <LandingPage />
      </Element>
      <Element name="AboutPage" id="AboutPage">
        <AboutPage />
      </Element>
      <Element name="ProjectsPage" id="ProjectsPage">
        <ProjectsPage />
      </Element>
      <Element name="About" id="About">
        <Footer />
      </Element>
    </div>
  );
}

export default Home;
