import React, {useContext, useEffect, useState} from 'react';
import styles from './Cart.module.scss'
import CartOrderItem from "../components/CartOrderItem";
import axios from "axios";
import MarketDataContext from "../Context/AppContext";


const Cart = () => {

    const {cartItems, setCartItems} = useContext(MarketDataContext)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItems(response.data)
        }
        fetchData()
    }, [])

    console.log(cartItems)

    return (
        <>
            <div className={styles.cartHeader}>
                <div className={styles.headerText}>Product</div>
                <div className={styles.headerText}>Price</div>
            </div>

            {cartItems.map(item =>
                <CartOrderItem key={item.id}
                               cartId={item.cartId}
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
