import "../App.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ProjectsCarousel from "./CarouselSlide";
import { Carousel } from "react-bootstrap";
import AboutPage from "./AboutPage";

function LandingPage() {
  return (
    <>
      <div id="Home" className="LandingPage">
        <div className="Name"> Nicholas Karantakis </div>

        <Link to="About" duration={500}>
          <input className="Arrow" type="image" src="./planeArrow.png"></input>
          <div className="Explore"> Press to Explore </div>
        </Link>
      </div>
      <AboutPage />
    </>
  );
}

export default LandingPage;
