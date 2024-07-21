import "../App.css";

function AboutPage() {
  return (
    <>
      <div id="About" className="AboutPage">
        <img className="AboutProfile" src="ProfileImage.jpg"></img>
        <body className="PageInfo">
          <h1 className="PageTitle">About Me</h1>
          <p className="PageText">
            Hi I'm Nicholas, a second year Mechanical Engineering Student at the
            University of Toronto and Student Researcher with the Latner
            Thoracic Research Laboratories studying Computational Fluid Dynamics
            (CFD) models of airways for various therapeutic applications. My
            interests include robotics, aerospace, bioengineering, CFD,
            automotives and programming.
          </p>
        </body>
      </div>
    </>
  );
}

export default AboutPage;
