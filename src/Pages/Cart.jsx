import React from 'react';
import styles from './Cart.module.scss'
import Button from "../components/Button";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div className={styles.cartBlock}>
            <div className={styles.opacityFrame}></div>
            <div className={styles.cart}>
                <div className={styles.cartTitle}>Cart</div>
                <img src="./img/box.png" alt="cart"/>
                <div className={styles.cartClean}>The cart is empty.</div>
                <p>Add at least one pair of sneakers to make an order.</p>
                <Link to={'/'}>
                    <div><Button>← Back</Button></div>
                </Link>
            </div>

        </div>
    );
};

export default Cart;