import React from 'react';
import styles from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <div className={styles.aboutUsMain}>
            <div className={styles.title}>Footwear store</div>
            <div>Official Sneaker Store «RAVE».</div>
            <div>Free shipping.</div>
            <div >For orders and questions, write to
                <a
                    href="https://t.me/+GoQWySGsJy9lYzEy"
                    target="_blank"
                >
                    Telegram
                </a>!
            </div>
        </div>
    );
};

export default AboutUs;