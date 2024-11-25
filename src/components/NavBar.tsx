import "../App.css"
import { Link } from "react-scroll"


function NavBar(){

    return(
        <div className="NavBar">
        <Link to="Home">
            <button className="NavPages"> Home </button>          
            
        </Link>
        <Link to="AboutPage">
            <button className="NavPages"> About</button>          
            
        </Link>
        <Link to="ProjectsPage">
            <button className="NavPages"> Projects</button>          
            
        </Link>
        </div>

    )
}

export default NavBar