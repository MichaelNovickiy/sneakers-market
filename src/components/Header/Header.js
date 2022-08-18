import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={styles.mainHeader}>

            <div className={styles.leftHeader}>
                <Link to={"/"}>
                    <img src="img/logo.png" alt="Logotype"/>
                </Link>
                <div className={styles.title}>
                    <Link to={"/"}>
                        <h1>RAVE</h1>
                    </Link>
                    <p>Official Sneaker Store.</p>
                </div>
            </div>

            <ul className={styles.rightHeader}>
                <li>About Us</li>
                <li>Contact Us</li>
                <Link to={"/cart"}>
                    <li><img src="img/heart.png" alt="heart"/></li>
                </Link>

                <li><img src="img/cart.png" alt="cart"/>
                    <span>260 руб.</span>
                </li>
            </ul>
        </div>
    );
};

export default Header;