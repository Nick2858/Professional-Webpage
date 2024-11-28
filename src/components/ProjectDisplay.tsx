import "../App.css";

interface Props {
  children: {
    id: number;
    projectTitle: string;
    description: string;
    picture: string;
    skills: string[];
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
 
  if (window.screen.availWidth <= 600) {
    even = {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    }
  }
  

  
  return (
    <div className="ProjectDisplay" style={even}>
      
        <h1 className="ProjectHeader" style={even}>{children.projectTitle}</h1>
        <div className="Line">{" "}</div>
        <div className="ProjectInfo" >
        <div><img className="ProjectImage" src={children.picture}></img></div>
        <div className="ProjectText" > {children.description}
        <div className="JobSkills">
          {children.skills.map((skill) => (
            <div className="Skill" style={{fontSize: "0.7em"}}> {skill}</div>
          ))}
        </div>
        
        </div>
       
      </div>
    </div>
  );
}

export default ProjectDisplay;
