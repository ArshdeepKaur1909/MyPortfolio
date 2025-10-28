import './Intro.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // ✅ Corrected

function Intro({ tagline, intro }) {
  return (
    <div className="intro">
      <div className="basic">
        <h1>{tagline}</h1>
        <p>{intro}</p>
        <div className="buttons">
          <a className="get" href="#">Get In Touch</a>
          <a
            className="social"
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="image">
        <img src="/Profile Pic.jpg" alt="Profile" />
      </div>
    </div>
  );
}

export default Intro;