import "../App.css"
interface Props{
    children: {
        id: number;
        title: string;
        sponsor: string;
        date: string;
        description: string;
        
    };
}


export default function AwardPage ({ children }: Props) {

    return(
        <div className="AwardInfo">
            
            <h1 style={{ fontSize: "20px"}}>
              {children.title} - {children.sponsor} <br></br>
            </h1>
            <h1 style={{ fontSize: "15px" }}>{children.date}</h1>
            
            <b style={{ fontSize: "15px", fontWeight: "400" }}>
              {children.description}
            </b>
    
          </div>
        


    )

}

