import "../App.css";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/Nick2858" target="_blank">
        <img className="Icon" src="./github-mark-white.svg"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/nicholas-karantakis-78a54a255"
        target="_blank"
      >
        <img className="Icon" src="./In-White-128.png"></img>
      </a>
      <a href="./Resume.pdf" target="_blank">
        <button className="ResumeButton">Resume</button>
      </a>
    </div>
  );
}

export default Footer;
