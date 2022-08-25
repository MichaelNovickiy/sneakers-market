import './App.scss';
import Header from "./components/Header/Header";
import Index from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Favorite from "./Pages/Favorite";
import {useEffect, useState} from "react";
import axios from "axios";
import ContextMarketData from './Context/AppContext'
import Cart from "./Pages/Cart";


function App() {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const responseCartItems = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItems(responseCartItems.data)
            const responseFavoriteItems = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/favorites_items')
            setFavoriteItems(responseFavoriteItems.data)
        }

        fetchData()
    }, [])

    const addItemCart = async ({img, title, price, itemId}) => {
        try {
            const item = cartItems.find(item => item.title === title)
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
    }

    const addFavoriteItem = async ({img, title, price, itemId}) => {
        try {
            const item = favoriteItems.find(item => item.title === title)
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
    }

    const deleteCartItem = async (propsId) => {
        try {
            const response =
                await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${propsId}`);
            if (response) {
                setCartItems(cartItems.filter((f) => f.id !== propsId))
            }
        } catch (e) {
            alert('Error' + e.message)
        }
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
        try {
            for (let i = 1; i <= lengthCart; i++) {
                await axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${i}`);
            }
            setCartItems(prevState => [])
        } catch (e) {
            alert('Something error')
            console.log(e)
        }
    }

    const contextValues = {
        addItemCart,
        cartItems,
        setCartItems,
        deleteCartItem,
        isItemAddedCart,
        favoriteItems,
        addFavoriteItem,
        isItemAddedFavorite,
        totalPrice,
        cleanUpCart
    }


    return (
        <ContextMarketData.Provider value={contextValues}>
            <div className="main">
                <div className="mainContainer">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="favorite" exact element={<Favorite/>}/>
                        <Route path="cart" exact element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </ContextMarketData.Provider>
    );
}

export default App;