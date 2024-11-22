import "../components/CSS/NavBar.css";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link className="NavPages" to="/Portfolio-Website/">
        <img className="HomeButton" src="Home.png"></img>
      </Link>

      <Link className="NavPages" to="/Portfolio-Website/Projects">
        Projects
      </Link>
    </nav>
  );
};

export default NavBar;
