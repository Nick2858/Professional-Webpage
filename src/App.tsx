import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Element } from "react-scroll";


function App() {
  return (
    <div>

      <NavBar /> 
      <Element name="Home">
        <LandingPage />
      </Element>
      <Element name="AboutPage" id="AboutPage">
        <AboutPage/>
      </Element>
      <Element name="ProjectsPage">
        <ProjectsPage/>
      </Element>

      <Element name="About">
      <Footer />
      </Element>


    </div>
  );
}

export default App;
