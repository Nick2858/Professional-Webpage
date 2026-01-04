import "../App.css";
import { SmartLink } from "./SmartLink";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  return (
    <div className="NavBar">
      <link
        href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Tagesschrift&display=swap"
        rel="stylesheet"
      ></link>

      <ScrollLink to="Home">
        <button
          className="NavPages"
          style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
        >
          {" "}
          Home{" "}
        </button>
      </ScrollLink>
      <ScrollLink to="AboutPage">
        <button
          className="NavPages"
          style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
        >
          {" "}
          About
        </button>
      </ScrollLink>
      <ScrollLink to="ProjectsPage">
        <button
          className="NavPages"
          style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
        >
          {" "}
          Projects
        </button>
      </ScrollLink>
      <a href="https://www.instagram.com/boringbroll/" target="_blank">
        <button
          className="NavPages"
          style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
        >
          {" "}
          Gallery
        </button>
      </a>
      <a href="./Resume.pdf" target="_blank">
        <button
          className="NavPages"
          style={{ fontFamily: "Josefin Sans", fontWeight: "500" }}
        >
          Resume
        </button>
      </a>
    </div>
  );
}

export default NavBar;
