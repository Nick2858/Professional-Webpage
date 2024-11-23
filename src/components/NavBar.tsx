import "../components/CSS/NavBar.css";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { NavLink as Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav className="NavBar">
        {isDropdownVisible && (
          <>
            <Link className="NavPages" to="/Portfolio-Website/">
              Home
            </Link>
            <Link className="NavPages" to="/Portfolio-Website/Projects">
              Projects
            </Link>
            <Link className="NavPages" to="/Portfolio-Website/Projects">
              Experiences
            </Link>
          </>
        )}
        <button
          className={!isDropdownVisible ? "Menu" : "change"}
          onClick={toggleDropdown}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </nav>
    </>
  );
}

export default NavBar;
