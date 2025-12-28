import "../App.css";
import NavBar from "./NavBar";
import WorkDisplay from "./WorkDisplay";
import Experiences from "../assets/experience.json";
import Awards from "../assets/awards.json";
import AwardPage from "./AwardDisplay";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";

function Gallery() {
  return (
    <>
      <NavBar></NavBar>
      <div className="Name">Photos</div>
    </>
  );
}

export default Gallery;
