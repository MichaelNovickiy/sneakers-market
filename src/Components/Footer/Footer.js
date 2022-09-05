import React from "react";
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.rights}>
                © Rave Theme. All Rights Reserved.
            </div>
            <a className={styles.instagram}
               href="https://www.instagram.com/rave_minsk_by"
               target="_blank"
            >
                <img src="img/instagram.svg" alt="instagram"/>
                <div>Instagram</div>
            </a>
            <div className={styles.contacts}>
                <Link to={process.env.PUBLIC_URL + '/about_us'}><span>About Us</span></Link>
                <Link to={process.env.PUBLIC_URL + '/contact_us'}><span>Contact Us</span></Link>
            </div>
        </div>
    );
};
export default Footer;