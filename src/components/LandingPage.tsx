import "../App.css";
import { SmartLink } from "./SmartLink";
import { useState, useEffect } from "react";


function LandingPage() {
  
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition < 1.5 * viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="Home" className="LandingPage">
        
        {isVisible && (
          <>
            <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Tagesschrift&display=swap" rel="stylesheet"></link>
            <div className="Name" style={{fontFamily: "Edu NSW ACT Cursive", fontWeight: "700"}}> Nicholas Karantakis </div>
            
            <div className="InnerPage">
              
              <div className="Socials">
                <div className="IconsGroup">
                  <a href="https://github.com/Nick2858" target="_blank" className="IconBox">
                        <img
                          className="IconLink"
                          src="./github-mark-white.svg"
                        ></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicholas-karantakis-78a54a255"
                    target="_blank"
                    className="IconBox"
                  >
                    <img className="IconLink" src="./In-White-128.png"></img>
                  </a>
                  <a href="mailto:nicholaskarantakis@gmail.com" target="_blank" className="IconBox">
                    <img className="IconLink" src="./gmail.svg"></img>
                  </a>
                  {/* <div className="ResumeLink">
                  <a href="./Resume.pdf" target="_blank">
                    <button className="ResumeLinkText">Resume</button>
                  </a>
                  </div> */}
                </div>
              </div>
              
            </div>
          
          </>
        )}
      </div>
      <div className="ExploreBar">
        
        {isVisible &&( 
        <>
        <SmartLink to="/#AboutPage">
          <>
          <div className="Explore" style={{color:"#212529"}}> Press to Explore </div>
          <input className="Arrow" type="image" src="./planeArrow.png"></input>
          
          </>
        </SmartLink>
        <p style={{float: "right", marginTop:"auto", color:"black",  zIndex:"10", fontSize:"x-small", paddingInline:"0.5vw", textAlign:"right"}}>Photo of the Black Tusk Pinnacle taken by Me <br /> (Check out my photo gallery)</p>
        </>)}
      </div>  
      
    </>
  
  );
}

export default LandingPage;