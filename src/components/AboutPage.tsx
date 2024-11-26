import "../App.css";
import WorkDisplay from "./WorkDisplay";
import Experiences from "../assets/experience.json";
import Awards from "../assets/awards.json";
import AwardPage from "./AwardDisplay";
import { CarouselProvider, Slide, Slider, ButtonBack,ButtonNext, DotGroup } from "pure-react-carousel";


function AboutPage() {

  return (
    <>
      <div id="About" className="AboutPage">
        <h1 className="PageTitle">
          About Me
        </h1>
        <div className="AboutMe" >
          <p className="PageText">
            I'm a second year Mechanical Engineering Student at the University
            of Toronto pursuing a minor in Robotics, and Engineering Business.
            I've worked in various industries including biomedical research,
            aerospace and hospitality. My future aspirations are to explore career 
            opportunities in mechatronics and robotics, where I can combine my strong
              interests in programming and mechanical design with my passion for cross-disciplinary
              problem-solving.
          </p>
        
        </div>
       
        <h1 className="PageHeader" style={{ padding: "10vh 0 5vh " }}>
          Awards
        </h1>
        <ul className="AwardList">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={Awards.length}
        isIntrinsicHeight
        infinite={false}
        dragEnabled={true}
        interval={8000}
        isPlaying={true}
        
      > 
          <Slider  className="carousel-container">
          {Awards.map((award)=>(<Slide className="carousel-slide" index={award.id - 1}><AwardPage>{award}</AwardPage></Slide>))}
          </Slider>
          <DotGroup className="prc-dotGroup"/>
        </CarouselProvider>
        </ul>
        <h1 className="PageHeader" style={{ padding: "7vh" }}>
          {" "}
          Experience
        </h1>
        <ul className="WorkExperiences">
          {Experiences.map((experience) => (
            <WorkDisplay>{experience}</WorkDisplay>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AboutPage;
