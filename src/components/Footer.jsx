import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//style
import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/GaleSango"
      >
        <FontAwesomeIcon className="icons" icon={faTwitter} />{" "}
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/galekwan.sango//"
      >
        <FontAwesomeIcon className="icons" icon={faFacebook} />{" "}
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/zrahbzhy/"
      >
        <FontAwesomeIcon className="icons" icon={faInstagram} />{" "}
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Gs5570"
      >
        <FontAwesomeIcon className="icons" icon={faGithub} />{" "}
      </a>
    </div>
  );
}
