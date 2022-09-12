import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div className="footer">
            <div className="social-media-icons">
                <FontAwesomeIcon
                    className="footer-icon"
                    icon={faGithub}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className="footer-icon"
                    icon={faYoutube}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className="footer-icon"
                    icon={faFacebook}
                ></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Footer;
