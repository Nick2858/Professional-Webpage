import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  return (
    <div>
      <div className="NavBar">
        <Link className="NavPages" to="Home">
          {" "}
          Home{" "}
        </Link>
        <span className="NavText"> | </span>
        <Link className="NavPages" to="About">
          {" "}
          About{" "}
        </Link>
        <span className="NavText"> | </span>
        <Link className="NavPages" to="Projects">
          {" "}
          Projects{" "}
        </Link>
      </div>
      <Element name="Home">
        <LandingPage />
      </Element>
      <Element name="About">
        <AboutPage />
      </Element>
      <Element name="Projects">
        <ProjectsPage />
      </Element>
    </div>
  );
}

export default App;
