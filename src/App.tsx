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

function App() {
  return (
    <div>
      <div className="NavBar">
        <Link
          className="NavPages"
          to="Home"
          activeClass="activeNavPages"
          spy={true}
        >
          {" "}
          Home{" "}
        </Link>

        <Link
          className="NavPages"
          to="About"
          activeClass="activeNavPages"
          spy={true}
        >
          {" "}
          About{" "}
        </Link>

        <Link
          className="NavPages"
          to="Projects"
          activeClass="activeNavPages"
          spy={true}
        >
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
      <Footer />
    </div>
  );
}

export default App;
