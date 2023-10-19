import './SocialMedia.css'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp } from "react-icons/ai";

const SocialMedia = () => {
    return(
        <footer className="div-social-media">
            <ul>
                <li><a href="https://www.facebook.com/login" rel="noreferrer" target="_blank">{<AiFillFacebook/>}</a></li>
                <li><a href="https://www.instagram.com/" rel="noreferrer" target="_blank">{<AiFillInstagram />}</a></li>
                <li><a href="https://twitter.com/" rel="noreferrer" target="_blank">{<AiFillTwitterCircle />}</a></li>
                <li><a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank">{<AiOutlineWhatsApp />}</a></li>
            </ul>
        </footer>
    )
};
export default SocialMedia;