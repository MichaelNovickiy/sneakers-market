import Button from "../Button";
import React, {useContext} from "react";
import styles from './CartIsEmpty.module.scss'
import MarketDataContext from "../../Context/AppContext";

const CartIsEmpty = () => {

    const {onClickBackButton} = useContext(MarketDataContext)

    return (
        <div className={styles.cartBlock}>
            <div className={styles.cart}>
                <img src="./img/box.png" alt="Cart is empty"/>
                <div className={styles.cartClean}>The cart is empty.</div>
                <p>Add at least one pair of sneakers to make an order.</p>
                <Button onClickBackButton={onClickBackButton} back={true}>
                    ❮ Back
                </Button>
            </div>
        </div>
    );
};
export default CartIsEmpty;