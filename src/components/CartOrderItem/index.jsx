import React from 'react';
import styles from './CartOrderItem.module.scss'

const CartOrderItem = (props) => {

    return (
        <div className={styles.cartOrder}>
            <div className={styles.cartItem}>
                <img src={props.img} alt="Sneakers"/>
                <div className={styles.itemText}>{props.title}</div>
                <div className={styles.itemText}>{props.price}</div>
                <div className={styles.itemDelete}>x</div>
            </div>
        </div>
    );
};

export default CartOrderItem;