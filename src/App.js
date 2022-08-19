import './App.scss';
import Header from "./components/Header/Header";
import Index from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Cart from "./Pages/Cart";
import {useEffect, useState} from "react";
import axios from "axios";
import MarketDataContext from './Context/AppContext'

function App() {

    let [cartItems, setCartItems] = useState([])

    const addItemCart = ({img, title, price, itemId}) => {
        axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers', {
            img, title, price, cartId: itemId
        });
    }

    const deleteCartItem = (cartId) => {
        axios.delete(`https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers/${cartId}`);
    }

    const contextValues = {
        addItemCart, cartItems, setCartItems, deleteCartItem
    }


    return (
        <MarketDataContext.Provider value={contextValues}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="favorite" exact element={<Favorite/>}/>
                    <Route path="cart" exact element={<Cart/>}/>
                </Routes>
            </div>
        </MarketDataContext.Provider>
    );
}

export default App;
