import React, {useEffect, useState} from 'react';
import styles from './Cart.module.scss'
import CartOrderItem from "../components/CartOrderItem";
import axios from "axios";

const Cart = () => {

    let [cartItem, setCartItem] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItem(response.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <div className={styles.cartHeader}>
                <div className={styles.headerText}>Product</div>
                <div className={styles.headerText}>Price</div>
            </div>

            {cartItem.map(item =>
                <CartOrderItem key={item.id}
                               img={item.img}
                               title={item.title}
                               price={item.price}
                />
            )}

        </>
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
