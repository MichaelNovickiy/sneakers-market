import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="cart" exact element={<h1>Favorite items</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
