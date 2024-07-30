import "../App.css";

interface Props {
  children: {
    id: number;
    projectTitle: string;
    description: string;
    link: string;
    picture: string;
  };
}

function ProjectDisplay({ children }: Props) {
  return (
    <div className="ProjectDisplay">
      <div className="InfoGrid">
        <div className="ProjectInfo">
          <h1
            style={{
              padding: "20px 0 10px 10px",
              color: "white",
              fontSize: "50px",
            }}
          >
            <a
              href={children.link}
              target="_blank"
              style={{ padding: " 0 20px 0 0" }}
            >
              <img className="Icon" src="./github-mark-white.svg"></img>
            </a>
            {children.projectTitle}
          </h1>
          <body
            className="ProjectInfo"
            style={{
              color: "white",
              fontSize: "25px",
              padding: " 0 10px 30px 10px",
            }}
          >
            {" "}
            {children.description} Press the Github logo to learn more.
          </body>
        </div>
        <img className="ProjectImage" src={children.picture}></img>
      </div>
    </div>
  );
}

export default ProjectDisplay;
