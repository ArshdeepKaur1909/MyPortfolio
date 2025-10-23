import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

// Before using font awesome icons you have to install these dependencies in reactJs project folder
//  npm install @fortawesome/fontawesome-svg-core
//  npm install @fortawesome/free-solid-svg-icons
//  npm install @fortawesome/free-regular-svg-icons
//  npm install @fortawesome/free-brands-svg-icons
//  npm install @fortawesome/react-fontawesome


function Header({name}){
    return (
          <div className = "header">
            <p className = "headerName">{name}</p>
            <div className = "navlinks">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>    
            </div>
            <div className="theme">
               <FontAwesomeIcon icon={faSun} />
            </div>
          </div>
    )
}

export default Header