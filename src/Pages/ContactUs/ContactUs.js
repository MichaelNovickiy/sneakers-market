import React from 'react';
import styles from './ContactUs.module.scss'

const ContactUs = () => {
    console.log('ContactUs')
    return (
        <div className={styles.contactUsMain}>
            <div>
                For orders and questions, write to
                <a href="https://t.me/+GoQWySGsJy9lYzEy"
                   target="_blank"
                >Telegram</a>!
            </div>
            <div>
                Our<a href="https://www.instagram.com/rave_minsk_by/"
                      target="_blank"
            >Instagram</a>
            </div>
        </div>
    );
};

export default ContactUs;