import "../App.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link
        className="NavPages"
        to="Home"
        activeClass="activeNavPages"
        spy={true}
        style={{ color: "white" }}
      >
        {" "}
        Home{" "}
      </Link>

      <Link
        className="NavPages"
        to="About"
        activeClass="activeNavPages"
        spy={true}
        style={{ color: "white" }}
      >
        {" "}
        About{" "}
      </Link>

      <Link
        className="NavPages"
        to="Projects"
        activeClass="activeNavPages"
        spy={true}
        style={{ color: "white" }}
      >
        {" "}
        Projects{" "}
      </Link>
    </div>
  );
}

export default NavBar;
