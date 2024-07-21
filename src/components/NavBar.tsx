import { useRef } from "react";
import "../App.css";

function NavBar() {
  function handleClick(offset: number) {
    window.scrollTo(0, offset);
  }
  return (
    <>
      <div className="NavBar">
        <button
          className="NavPages"
          key="Home"
          onClick={(event) => handleClick(0)}
        >
          {" "}
          Home{" "}
        </button>
        <span className="NavText"> | </span>
        <button className="NavPages" onClick={(event) => handleClick(800)}>
          {" "}
          About{" "}
        </button>
        <span className="NavText"> | </span>
        <button className="NavPages" onClick={(event) => handleClick(1600)}>
          {" "}
          Projects{" "}
        </button>
      </div>
    </>
  );
}

export default NavBar;
