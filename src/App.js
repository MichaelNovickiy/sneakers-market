import './App.scss';
import Header from "./components/Header/Header";
import Index from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Cart from "./Pages/Cart";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="favorite" exact element={<Favorite />}/>
                <Route path="cart" exact element={<Cart />}/>
            </Routes>
        </div>
    );
}

export default App;
