import "../App.css";

interface Props {
  children: {
    id: number;
    projectTitle: string;
    description: string;
    link: string;
  };
}

function ProjectDisplay({ children }: Props) {
  return (
    <div className="ProjectDisplay">
      <div className="ProjectInfo">
        <h1 style={{ fontSize: "20px" }}>
          {children.projectTitle} <br></br>
        </h1>
        <h1 style={{ fontSize: "15px" }}>{children.description}</h1>
        <a href={children.link} target="_blank" className="LearnMore">
          <button className="LearnMore">Learn More</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
