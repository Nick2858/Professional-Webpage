import "../App.css"
import { Link } from "react-scroll"


function NavBar(){

    return(

        
        <div className="NavBar">
            <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Tagesschrift&display=swap" rel="stylesheet"></link>


              
        <Link to="Home">
            <button className="NavPages" style={{fontFamily: "Josefin Sans", fontWeight: "500"}}> Home </button>          
            
        </Link>
        <Link to="AboutPage">
            <button className="NavPages" style={{fontFamily: "Josefin Sans", fontWeight: "500"}}> About</button>          
            
        </Link>
        <Link to="ProjectsPage">
            <button className="NavPages" style={{fontFamily: "Josefin Sans", fontWeight: "500"}}> Projects</button>          
            
        </Link>
        <Link to="Gallery">
            <button className="NavPages" style={{fontFamily: "Josefin Sans", fontWeight: "500"}}> Gallery</button>          
            
        </Link>
        <a href="./Resume.pdf" target="_blank">
                    <button className="NavPages" style={{fontFamily: "Josefin Sans", fontWeight: "500"}}>Resume</button>
                  </a>
        </div>

    )
}

export default NavBar