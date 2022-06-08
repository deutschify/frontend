import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    const footerStyles = {
        color: "red",
        fontSize: "1.6rem",
        textAlign: "center",
    };
    return (
        <div style={footerStyles} className="footer">
            Footer
            <div className="social-media-icons">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Footer;
