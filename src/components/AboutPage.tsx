import "../App.css";

function AboutPage() {
  return (
    <>
      <div id="About" className="AboutPage">
        <img className="AboutProfile" src="ProfileImage.jpg"></img>
        <body className="PageInfo">
          <h1 className="PageTitle">About Me</h1>
          <p className="PageText">
            Hi, I'm Nicholas, a second year Mechanical Engineering Student at
            the University of Toronto. I'm currently working on Computational
            Fluid Dynamics (CFD) models for lung airways as a Student Researcher
            with the Latner Thoracic Research Laboratories. My fields of
            interest include robotics, aerospace, bioengineering, CFD,
            automotives and programming.
          </p>
        </body>
      </div>
    </>
  );
}

export default AboutPage;
