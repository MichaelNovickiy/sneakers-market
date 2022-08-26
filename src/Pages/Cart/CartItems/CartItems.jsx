import React, {useContext} from "react";
import MarketDataContext from "../../../Context/AppContext";
import styles from "./CartItems.module.scss";
import CartOrderItem from "./CartOrderItem/CartOrderItem";
import Button from "../../../components/Button/Button";
import InsideHeader from "../../../components/InsideHeader/InsideHeader";

const CartItems = () => {

    const {cartItems, totalPrice, cleanUpCart} = useContext(MarketDataContext)

    return (
        <>

            <InsideHeader
                title={'Cart'}
                nameItem={'cart'}
                cleanUpAllHandler={() => cleanUpCart(cartItems.length)}
            />

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