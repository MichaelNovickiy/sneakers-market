import React, {useContext} from 'react';
import styles from './Cart.module.scss'
import CartOrderItem from "../components/CartOrderItem";
import MarketDataContext from "../Context/AppContext";

const Cart = () => {


    const {cartItems} = useContext(MarketDataContext)

    return (
        <>
            <div className={styles.cartHeader}>
                <div className={styles.headerText}>Product</div>
                <div className={styles.headerText}>Price</div>
            </div>

            {cartItems.map(item =>
                <CartOrderItem key={item.id}
                               id={item.id}
                               img={item.img}
                               title={item.title}
                               price={item.price}
                />
            )}

        </>
        //if cart is clean

        // <div className={styles.cartBlock}>
        //     <div className={styles.cart}>
        //         <img src="./img/box.png" alt="cart"/>
        //         <div className={styles.cartClean}>The cart is empty.</div>
        //         <p>Add at least one pair of sneakers to make an order.</p>
        //         <Link to={'/'}>
        //             <div><Button>← Back</Button></div>
        //         </Link>
        //     </div>
        // </div>
    );
};

export default Cart;
