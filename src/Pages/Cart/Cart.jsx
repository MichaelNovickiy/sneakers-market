import React, {useContext} from 'react';
import CartIsEmpty from "./CartIsEmpty/CartIsEmpty";
import CartItems from "./CartItems/CartItems";
import MarketDataContext from "../../Context/AppContext";

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


