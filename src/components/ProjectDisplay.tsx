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
  
  var even = {
    textAlign: "left",
    alignItems: "left",
    justifyContent: "left",
  } as React.CSSProperties;

  if (children.id%2 == 1){
    even = {
    textAlign: "right",
    alignItems: "right",
    justifyContent: "right",
  } 
}
  
  
  
  return (
    <div className="ProjectDisplay" style={even}>
      <div className="ProjectInfo" style={even}>
        <h1 className="ProjectHeader" style={even}>{children.projectTitle}</h1>
        <img className="ProjectImage" style={even} src={children.picture}></img>
        <body className="ProjectText" style={even}> {children.description}</body>
      </div>
    </div>
  );
}

export default ProjectDisplay;
