import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  GestureHandlerRootView,
  ScrollView // Note that this is not imported from react-native
} from 'react-native-gesture-handler';


function App() {
  return (
    <div>

      <NavBar /> 
      <Element name="Home">
        <LandingPage />
      </Element>
      <Element name="AboutPage" id="AboutPage">
        <AboutPage/>
      </Element>
      <Element name="ProjectsPage">
        <ProjectsPage/>
      </Element>

      <Element name="About">
      <Footer />
      </Element>


    </div>
  );
}

export default App;
