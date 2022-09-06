import './App.scss';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import axios from "axios";
import MarketDataContext from './Context/AppContext'
import Cart from "./Pages/Cart/Cart";
import Favorite from "./Pages/Favorite/Favorite";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Order from "./Pages/Order/Order";
import Loading from "./Components/Loading/Loading";


const App = React.memo(() => {

    const {setCartItemsApp, setFavoriteItemsApp, loading} = useContext(MarketDataContext)

    useEffect(() => {
        async function fetchData() {
            const responseCartItems = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItemsApp(responseCartItems.data)
            const responseFavoriteItems = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/favorites_items')
            setFavoriteItemsApp(responseFavoriteItems.data)
        }

        fetchData()
    }, [])

    return (
        <div className="main">
            {loading && <Loading/>}
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
    );
})

export default App;

