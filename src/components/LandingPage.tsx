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
import AboutPage from "./AboutPage";

function LandingPage() {
  return (
    <>
      <div className="Name"> Nicholas Karantakis </div>
      <div id="Home" className="LandingPage">
      
        <div className="InnerPage">
        
        <Link to="About">
        <div className="Explore"> Press to Explore </div>
        <input className="Arrow" type="image" src="./planeArrow.png"></input>
          
        </Link>
       
       <img className="Portrait" src="file.png"></img>
        
       </div>
      </div>
      <AboutPage />
    </>
  );
}

export default LandingPage;
