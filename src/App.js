import './App.scss';
import Header from "./components/Header/Header";
import Index from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Cart from "./Pages/Cart";
import {useEffect, useState} from "react";
import axios from "axios";
import ContextMarketData from './Context/AppContext'

function App() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItems(response.data)
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
            }
            else {
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

    const isItemAdded = (itemId) => {
        console.log(cartItems)
        return cartItems.some((obj) => Number(obj.itemId) === Number(itemId));
    };

    const contextValues = {
        addItemCart, cartItems, setCartItems, deleteCartItem, isItemAdded
    }


    return (
        <ContextMarketData.Provider value={contextValues}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="favorite" exact element={<Favorite/>}/>
                    <Route path="cart" exact element={<Cart/>}/>
                </Routes>
            </div>
        </ContextMarketData.Provider>
    );
}

export default App;