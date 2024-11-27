import "../App.css";

interface Props {
  children: {
    id: number;
    projectTitle: string;
    description: string;
    picture: string;
  };
}

function ProjectDisplay({ children }: Props) {
  const even = {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties;
  return (
    <div className="ProjectDisplay">
      <div className="ProjectInfo" style={even}>
        <h1 className="PageHeader">{children.projectTitle}</h1>
        <img className="ProjectImage" src={children.picture}></img>
        <body className="PageText"> {children.description}</body>
      </div>
    </div>
  );
}

export default ProjectDisplay;
