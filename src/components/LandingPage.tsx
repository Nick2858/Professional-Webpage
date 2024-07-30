import "../App.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function LandingPage() {
  return (
    <>
      <div id="Home" className="LandingPage">
        <div className="Name"> Nicholas Karantakis </div>
        <img className="Jets" src="./Airshow.png"></img>
        <img className="Cloud1" src="./cloud1.png"></img>
        <img className="Cloud2" src="./cloud2.png"></img>
        <img className="Cloud3" src="./cloud3.png"></img>
        <img className="Cloud4" src="./cloud4.png"></img>
        <img className="Cloud5" src="./cloud5.png"></img>
        <img className="Cloud6" src="./cloud6.png"></img>
        <Link to="About" duration={500}>
          <input className="Arrow" type="image" src="./planeArrow.png"></input>
          <div className="Explore"> Press to Explore </div>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
