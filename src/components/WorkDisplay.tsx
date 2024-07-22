import "../App.css";

interface Props {
  children: {
    id: number;
    jobtitle: string;
    company: string;
    date: string;
    description: string;
    image: string;
  };
}

function WorkDisplay({ children }: Props) {
  return (
    <div className="WorkDisplay">
      <img src={children.image} className="WorkImage"></img>
      <div className="WorkInfo">{children.description}</div>
    </div>
  );
}

export default WorkDisplay;
