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
  return (
    <div className="ProjectDisplay">
      <div className="InfoGrid">
        <h1
          style={{
            padding: "20px 20px 10px 40px",
            width: "100%",
            color: "white",
            fontSize: "50px",
            justifyContent: "left",
          }}
        >
          {children.projectTitle}
        </h1>
        <div className="ProjectInfo">
          <body
            className="ProjectInfo"
            style={{
              color: "white",
              fontSize: "25px",
              padding: " 0 10px 30px 10px",
            }}
          >
            {" "}
            {children.description}
          </body>
        </div>
        <img className="ProjectImage" src={children.picture}></img>
      </div>
    </div>
  );
}

export default ProjectDisplay;
