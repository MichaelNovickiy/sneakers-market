import React, {useContext} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import MarketDataContext from "../../Context/AppContext";

const Header = () => {

    const {totalPrice, favoriteItems} = useContext(MarketDataContext)

    return (
        <div className={styles.mainHeader}>

            <div className={styles.leftHeader}>
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <img src="img/logo.png" alt="Logotype"/>
                </Link>
                <div className={styles.title}>
                    <Link to={process.env.PUBLIC_URL + '/'}>
                        <h1>RAVE</h1>
                    </Link>
                    <p>Official Sneaker Store.</p>
                </div>
            </div>

            <ul className={styles.rightHeader}>
                <Link to={process.env.PUBLIC_URL + 'favorite'}>
                    <li>
                        <img src="img/heart.svg" alt="heart"/>
                        <span>{favoriteItems.length}</span>
                    </li>

                </Link>

                <Link to={process.env.PUBLIC_URL + 'cart'}>
                    <li>
                        <img src="img/cart.svg" alt="cart"/>
                        <span>{totalPrice}$</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;