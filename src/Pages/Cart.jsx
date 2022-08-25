import React, {useContext} from 'react';
import styles from './Cart.module.scss'
import CartOrderItem from "../components/CartOrderItem";
import MarketDataContext from "../Context/AppContext";
import Button from "../components/Button";

const Cart = () => {


    const {cartItems, totalPrice, onClickBackButton} = useContext(MarketDataContext)


    return (
        <>
            {cartItems.length
                ?
                <>
                    <div className={styles.cartHeader}>
                        <div className={styles.cartText}>
                            <img src="/img/cart.png" alt="cart"/>
                            Cart
                        </div>
                        <div className={styles.cleanText}>
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
                            {/*<Link to={'/'}>*/}
                            {/*    <div><Button>← Back</Button></div>*/}
                            {/*</Link>*/}
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
                :
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
            }
        </>
    )
        ;
};

export default Cart;
