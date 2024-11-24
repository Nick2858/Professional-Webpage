import "../App.css";

interface Props {
  children: {
    id: number;
    jobtitle: string;
    company: string;
    date: string;
    description: string;
    image: string;
    skills: string[];
  };
}

function WorkDisplay({ children }: Props) {
  return (
    <li className="WorkDisplay">
      <img src={children.image} className="WorkImage"></img>
      <div className="WorkInfo">
        <h1 style={{ fontSize: "20px" }}>
          {children.jobtitle} - {children.company} <br></br>
        </h1>
        <h1 style={{ fontSize: "15px" }}>{children.date}</h1>
        
        <b style={{ fontSize: "15px", fontWeight: "400" }}>
          {children.description}
        </b>
        <div className="JobSkills">
          {children.skills.map((skill) => (
            <div className="Skill"> {skill}</div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default WorkDisplay;
