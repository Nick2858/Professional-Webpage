import "../App.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";


function LandingPage() {
  
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition < 1.5 * viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <div id="Home" className="LandingPage">
      
      {isVisible && (<>
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
        <a href="mailto:nicholaskarantakis@gmail.com" target="_blank">
          <img className="IconLink" src="./gmail.svg"></img>
        </a>
        <a href="./Resume.pdf" target="_blank">
          <button className="ResumeLinkText">Resume</button>
        </a>
      </div>
        <div className="InnerPage">
        
        
        
          <img className="Portrait" src="Portrait.png"></img>
        
       </div>
       </>)}
      </div>
      <div className="ExploreBar">
        
        {isVisible &&( 
        <><Link to="AboutPage">
        <div className="Explore"> Press to Explore </div>
        <input className="Arrow" type="image" src="./planeArrow.png"></input>
          
        </Link></>)}
      </div>  
      
    </>
  
  );
}

export default LandingPage;