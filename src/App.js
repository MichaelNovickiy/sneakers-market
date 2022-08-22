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

    let [cartItems, setCartItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers')
            setCartItems(response.data)
        }

        fetchData()
    }, [])

    const addItemCart = async ({img, title, price}) => {
        try {
            const response = await axios.post('https://62fe273041165d66bfb99d5a.mockapi.io/cartOrderSnikers', {
                img, title, price
            });
            setCartItems(await (prevState => [...prevState, response.data]))
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

    const contextValues = {
        addItemCart, cartItems, setCartItems, deleteCartItem
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
