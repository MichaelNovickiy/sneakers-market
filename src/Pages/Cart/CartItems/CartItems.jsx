import React, {useContext} from "react";
import MarketDataContext from "../../../Context/AppContext";
import styles from "./CartItems.module.scss";
import CartOrderItem from "./CartOrderItem/CartOrderItem";
import Button from "../../../Components/Button/Button";
import InsideHeader from "../../../Components/InsideHeader/InsideHeader";
import {Link} from "react-router-dom";

const CartItems = () => {

    const {cartItems, totalPrice, cleanUpCart} = useContext(MarketDataContext)

    return (
        <>
            <div className={styles.headerBlock}>
                <InsideHeader
                    title={'Cart'}
                    nameItem={'cart'}
                    cleanUpAllHandler={() => cleanUpCart(cartItems.length)}
                />
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
                        <Link to={process.env.PUBLIC_URL + '/order'}>
                            <Button className={styles.pay}>
                                Pay now ❯
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartItems;