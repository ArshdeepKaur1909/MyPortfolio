import './Intro.css'

function Intro({tagline, intro}){
   return(
    <div className = "intro">
      <div className= "basic">
        <h1>{tagline}</h1>
        <p>{intro}</p>
        <div className="buttons">
            <a href="#" >View Projects</a>
            <a href="#" >Download Resume</a>
        </div>
      </div>
      <div className = "image">
        <img src='/Profile Pic.jpg'></img>
      </div>
    </div>
   )
}

export default Intro