import React from 'react';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.leftHeader}>
                <img src="img/logo.png" alt="Logotype"/>
                <div className={styles.title}>
                    <h1>RAVE</h1>
                    <p>Official Sneaker Store.</p>
                </div>
            </div>
            <ul className={styles.rightHeader}>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><img src="img/heart.png" alt="heart"/></li>
                <li><img src="img/cart.png" alt="cart"/>
                    <span>260 руб.</span>
                </li>
            </ul>
        </div>
    );
};

export default Header;