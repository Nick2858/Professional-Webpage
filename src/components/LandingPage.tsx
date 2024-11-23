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
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <div className="Name"> Nicholas Karantakis </div>
      <div className="Socials">
        <a href="https://github.com/Nick2858" target="_blank">
          <img className="IconLink" src="./github-mark-white.svg"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-karantakis-78a54a255"
          target="_blank"
        >
          <img className="IconLink" src="./In-White-128.png"></img>
        </a>
        <a href="https://github.com/Nick2858" target="_blank">
          <img className="IconLink" src="./gmail.svg"></img>
        </a>
        
      </div>
      <div className="ResumeLink">
      <a href="./Resume.pdf" target="_blank">
          <button className="ResumeLinkText">Resume</button>
        </a>
        </div>
      <div id="Home" className="LandingPage">
      
        <div className="InnerPage">
        
        <Link to="About">
        <div className="Explore"> Press to Explore </div>
        <input className="Arrow" type="image" src="./planeArrow.png"></input>
          
        </Link>
       
       <img className="Portrait" src="file3.png"></img>
        
       </div>
      
      </div>
      <AboutPage />
      <Footer />
    </>
  );
}

export default LandingPage;
