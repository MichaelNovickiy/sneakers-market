import React, {useEffect, useState} from 'react';
import axios from "axios";

export const MarketDataContext = React.createContext({});

export const addItemCart = ({img, title, price, itemId}) => {
    axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers', {
        img, title, price, cartId: itemId
    });
}

// let [cartItem, setCartItem] = useState([])
//
// useEffect(() => {
//     async function fetchData() {
//         const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
//         setCartItem(response.data)
//     }
//
//     fetchData()
// }, [])


export const contextValues = {
    addItemCart
}



