import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div className='aboutUsMain'>
            <div className='title'>Footwear store</div>
            <div>Official Sneaker Store «RAVE».</div>
            <div>Free shipping.</div>
            <div>For orders and questions, write to
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