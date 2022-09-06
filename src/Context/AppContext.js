import React, {useState} from 'react';
import axios from "axios";

const MarketDataContext = React.createContext({});

export const MarketDataContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [sendOrder, setSendOrder] = useState(null)
    const [loading, setLoading] = useState(null)

    const addItemCart = async ({img, title, price, itemId}) => {
        setLoading(true)
        try {
            const item = cartItems.find(item => item.itemId === itemId)
            if (!item) {
                const response = await axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers', {
                    img, title, price, itemId
                });
                setCartItems((prevState => [...prevState, response.data]))
            } else {
                const response =
                    await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${item.id}`);
                if (response) {
                    setCartItems(cartItems.filter((f) => f.id !== item.id))
                }
            }
        } catch (e) {
            alert('Error' + e.message)
        }
        setLoading(false)
    }

    const addFavoriteItem = async ({img, title, price, itemId}) => {
        setLoading(true)
        try {
            const item = favoriteItems.find(item => item.itemId === itemId)
            if (!item) {
                const response = await axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/favorites_items', {
                    img, title, price, itemId
                });
                setFavoriteItems((prevState => [...prevState, response.data]))
            } else {
                const response =
                    await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/favorites_items/${item.id}`);
                if (response) {
                    setFavoriteItems(favoriteItems.filter((f) => f.id !== item.id))
                }
            }
        } catch (e) {
            alert('Error' + e.message)
        }
        setLoading(false)
    }

    const deleteCartItem = async (cartId) => {
        setLoading(true)
        try {
            const response =
                await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${cartId}`);
            if (response) {
                setCartItems(cartItems.filter((f) => f.id !== cartId))
            }
        } catch (e) {
            alert('Error' + e.message)
        }
        setLoading(false)
    }

    const isItemAddedCart = (itemId) => {
        return cartItems.some((obj) => Number(obj.itemId) === Number(itemId));
    };

    const isItemAddedFavorite = (title) => {
        return favoriteItems.some((obj) => (obj.title) === (title));
    };

    const totalPrice = cartItems.reduce(
        (prevValue, currentValue) => Number(prevValue) + Number(currentValue.price), 0
    );

    const cleanUpCart = async (lengthCart) => {
        setLoading(true)
        try {
            for (let i = 1; i <= lengthCart; i++) {
                await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${i}`);
            }
            setCartItems(() => [])
        } catch (e) {
            alert('Something error')
            console.log(e)
        }
        setLoading(false)
    }

    const cleanUpFavorites = async (lengthFavorites) => {
        setLoading(true)
        try {
            for (let i = 1; i <= lengthFavorites; i++) {
                await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/favorites_items/${i}`);
            }
            setFavoriteItems(() => [])
        } catch (e) {
            alert('Something error')
            console.log(e)
        }
        setLoading(false)
    }

    const addOrder = async (firstName, lastName, mobile) => {
        setLoading(true)
        try {
            const response = await axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/orders', {
                firstName, lastName, mobile
            });
            setSendOrder(response.data.id)
            setLoading(false)
            await cleanUpCart(cartItems.length)
        } catch
            (e) {
            alert('Error' + e.message)
        }
    }

    const setCartItemsApp = (value) => {
        setCartItems(value)
    }
    const setFavoriteItemsApp = (value) => {
        setFavoriteItems(value)
    }

    const contextValue = {
        addItemCart,
        cartItems,
        setCartItems,
        deleteCartItem,
        isItemAddedCart,
        favoriteItems,
        addFavoriteItem,
        isItemAddedFavorite,
        totalPrice,
        cleanUpCart,
        cleanUpFavorites,
        addOrder,
        sendOrder,
        setSendOrder,
        loading,
        setCartItemsApp,
        setFavoriteItemsApp
    }

    return (
        <MarketDataContext.Provider value={contextValue}>
            {props.children}
        </MarketDataContext.Provider>
    );
};

export default MarketDataContext;