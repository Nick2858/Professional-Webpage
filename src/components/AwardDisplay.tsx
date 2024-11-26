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
            
            <h1 style={{ fontSize: "25px"}}>
              {children.title}<br></br>
            </h1>
            <h1 style={{ fontSize: "20px", padding:"10px 0 0 0"}}>
              {children.sponsor} <br></br>
            </h1>
            <h1 style={{ fontSize: "15px", padding:"10px 0 10px 0 " }}>{children.date}</h1>
            
            <b style={{ fontSize: "15px", fontWeight: "400" }}>
              {children.description}
            </b>
    
          </div>
        


    )

}

