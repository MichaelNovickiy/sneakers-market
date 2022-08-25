import React, {useContext} from 'react';
import CartIsEmpty from "../components/Cart/CartIsEmpty";
import CartItems from "../components/Cart/CartItems";
import MarketDataContext from "../Context/AppContext";

const Cart = () => {

    const {cartItems} = useContext(MarketDataContext)

    return (
        <>
            {cartItems.length
                ?
                <CartItems/>
                :
                <CartIsEmpty/>
            }
        </>
    );
};

export default Cart;


