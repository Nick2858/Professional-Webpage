import "../App.css";
import WorkDisplay from "./WorkDisplay";
import Experiences from "../assets/experience.json";

function AboutPage() {
  return (
    <>
      <div id="About" className="AboutPage">
        <h1 className="PageTitle" style={{ fontSize: "80px" }}>
          About Me
        </h1>
        <div className="AboutMe" style={{ paddingTop: "7vh", gap: "10px" }}>
          <img className="AboutProfile" src="./ProfileImage.jpg"></img>
          <body className="PageInfo">
            <p className="PageText">
              Hi, I'm Nicholas. A second year Mechanical Engineering Student at
              the University of Toronto. I'm currently working on Computational
              Fluid Dynamics (CFD) models for lung airways as a Student
              Researcher with the Latner Thoracic Research Laboratories. My
              fields of interest include robotics, aerospace, bioengineering,
              CFD, automotives and programming.
            </p>
          </body>
        </div>
        <h1 className="PageTitle" style={{ padding: "7vh" }}>
          {" "}
          Experience
        </h1>

        {Experiences.map((experience) => (
          <WorkDisplay>{experience}</WorkDisplay>
        ))}
        <div className="HardSkills" style={{ padding: "7vh" }}>
          <img className="SkillIcon" src="./SkillLogos/html.webp"></img>
          <img className="SkillIcon" src="./SkillLogos/css.png"></img>
          <img className="SkillIcon" src="./SkillLogos/Javascript.png"></img>
          <img className="SkillIcon" src="./SkillLogos/react.png"></img>
          <img className="SkillIcon" src="./SkillLogos/python.png"></img>
          <img className="SkillIcon" src="./SkillLogos/office.webp"></img>
          <img className="SkillIcon" src="./SkillLogos/solidworks.png"></img>
          <img className="SkillIcon" src="./SkillLogos/3dSlicer.png"></img>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
