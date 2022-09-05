import './App.scss';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ContextMarketData from './Context/AppContext'
import Cart from "./Pages/Cart/Cart";
import Favorite from "./Pages/Favorite/Favorite";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Order from "./Pages/Order/Order";
import Loading from "./Components/Loading/Loading";


const App = React.memo(() => {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [sendOrder, setSendOrder] = useState(null)
    const [loading, setLoading] = useState(null)


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
            setCartItems(prevState => [])
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
            setFavoriteItems(prevState => [])
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
            await cleanUpCart(cartItems.length)
        } catch
            (e) {
            alert('Error' + e.message)
        }
        setLoading(false)
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
        cleanUpCart,
        cleanUpFavorites,
        addOrder,
        sendOrder,
        setSendOrder
    }


    return (
        <ContextMarketData.Provider value={contextValues}>
           <div className="main">
               {loading && <Loading />}
                <Header/>
                <Routes>
                    <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>}/>
                    <Route path={process.env.PUBLIC_URL + '/favorite'} exact element={<Favorite/>}/>
                    <Route path={process.env.PUBLIC_URL + '/cart'} exact element={<Cart/>}/>
                    <Route path={process.env.PUBLIC_URL + '/about_us'} exact element={<AboutUs/>}/>
                    <Route path={process.env.PUBLIC_URL + '/contact_us'} exact element={<ContactUs/>}/>
                    <Route path={process.env.PUBLIC_URL + '/order'} exact element={<Order/>}/>
                </Routes>
                <Footer/>
            </div>
        </ContextMarketData.Provider>
    );
})

export default App;

