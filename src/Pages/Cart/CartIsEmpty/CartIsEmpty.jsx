import Button from "../../../Components/Button/Button";
import React from "react";
import styles from './CartIsEmpty.module.scss'

const CartIsEmpty = () => {
    return (
        <div className={styles.cartBlock}>
            <div className={styles.cart}>
                <img src="img/box.png" alt="Cart is empty"/>
                <div className={styles.cartClean}>The cart is empty.</div>
                <p>Add at least one pair of sneakers to make an order.</p>
                <Button back={true}>
                    ❮ Back
                </Button>
            </div>
        </div>
    );
};
export default CartIsEmpty;