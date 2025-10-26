import './Intro.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { falinkedin } from "@fortawesome/free-solid-svg-icons";

function Intro({tagline, intro}){
   return(
    <div className = "intro">
      <div className= "basic">
        <h1>{tagline}</h1>
        <p>{intro}</p>
        <div className="buttons">
            <a class="get" href="#" >Get In Touch</a>
            <a class="social" href="">
               
            </a>
        </div>
      </div>
      <div className = "image">
        <img src='/Profile Pic.jpg'></img>
      </div>
    </div>
   )
}

export default Intro