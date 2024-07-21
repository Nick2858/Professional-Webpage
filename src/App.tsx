import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
