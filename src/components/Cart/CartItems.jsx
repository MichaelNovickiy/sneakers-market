import React, {useContext} from "react";
import MarketDataContext from "../../Context/AppContext";
import styles from "./CartItems.module.scss";
import CartOrderItem from "../CartOrderItem";
import Button from "../Button";

const CartItems = () => {

    const {cartItems, totalPrice, cleanUpCart} = useContext(MarketDataContext)

    return (
        <>
            <div className={styles.cartHeader}>
                <div className={styles.cartText}>
                    <img src="/img/cart.png" alt="cart"/>
                    Cart
                </div>
                <div className={styles.cleanText}
                     onClick={() => cleanUpCart(cartItems.length)}>
                    <img src="/img/trash.png" alt="trash"/>
                    Empty the cart
                </div>
            </div>

            {cartItems.map(item =>
                <CartOrderItem key={item.id}
                               id={item.id}
                               img={item.img}
                               title={item.title}
                               price={item.price}
                />
            )}

            <div className={styles.cartBottom}>
                <div className={styles.cartBottomText}>
                    Total products: {cartItems.length}
                    <div className={styles.cartButton}>
                        <Button className={styles.back} back={true}>
                            ❮ Back
                        </Button>
                    </div>
                </div>

                <div className={styles.cartBottomText}>
                    Order price: {totalPrice}$
                    <div className={styles.cartButton}>
                        <Button className={styles.pay}>
                            Pay now ❯
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartItems;