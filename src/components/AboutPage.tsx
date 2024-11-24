import "../App.css";
import WorkDisplay from "./WorkDisplay";
import Experiences from "../assets/experience.json";

function AboutPage() {
  return (
    <>
      <div id="About" className="AboutPage">
        <h1 className="PageTitle" style={{ fontSize: "min(100px,6vw)" }}>
          About Me
        </h1>
        <div className="AboutMe" style={{ paddingTop: "4vw", gap: "10px" }}>
          <body className="PageInfo">
            <p className="PageText">
              I'm a second year Mechanical Engineering Student at the University
              of Toronto pursuing a minor in Robotics, and Engineering Business.
              I've worked in various industries including biomedical research,
              aerospace and hospitality. My future aspirations are to explore
              careers in different fields related to mechatronics and robotics
              where I can integrate my strong interests in programming and
              mechanical design with my passion for cross-disciplinary problem solving.
            </p>
          </body>
        </div>
        <h1 className="PageTitle" style={{ padding: "7vh" }}>
          {" "}
          Experience
        </h1>
        <ul className="WorkExperiences">
          {Experiences.map((experience) => (
            <WorkDisplay>{experience}</WorkDisplay>
          ))}
        </ul>
        <h1 className="PageTitle" style={{ padding: "3vh" }}>
          Awards
        </h1>
      </div>
    </>
  );
}

export default AboutPage;
