//font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImage from "../../public/IMG_0897.png";

//styles
import "../assets/styles/info.css";

export default function Info() {
  return (
    <div className="info-container">
      <img className="profile-pic" src={profileImage} alt="profile picture" />
      <p id="full-name">Galekwan Sango</p>
      <p id="role">Full stack Developer </p>
      <p id="website">Galekwan.website</p>
      <div className="btn-container">
        <button type="button" id="linkedin-btn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/galekwansango/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </button>
        <button type="button" id="email-btn">
          <a rel="noopener noreferrer" href="mailto: galekwansango@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </button>
      </div>
    </div>
  );
}
