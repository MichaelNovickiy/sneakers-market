import React from "react";
import './Footer.scss';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="rights">
                © Rave Theme. All Rights Reserved.
            </div>
            <a className="instagram"
               href="https://www.instagram.com/rave_minsk_by"
               target="_blank"
            >
                <img src="img/instagram.svg" alt="instagram"/>
                <div>Instagram</div>
            </a>
            <div className="contacts">
                <Link to={process.env.PUBLIC_URL + 'about_us'}><span>About Us</span></Link>
                <Link to={process.env.PUBLIC_URL + 'contact_us'}><span>Contact Us</span></Link>
            </div>
        </div>
    );
};
export default Footer;